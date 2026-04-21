import { useState, useCallback, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage, Goal, User } from '../types';
import { useNotifications } from '../context/NotificationContext';

const SYSTEM_INSTRUCTION = `
You are Luca, the personal financial advisor for Mango. 
Mango is an investment platform for small investors in Argentina.
Your goal is to help users protect their savings from inflation.

PERSONALITY:
- Direct, honest, and close. You are a friend who knows about finance.
- You use Argentine Spanish (Rioplatense). Tuteo always. Use words like "guita", "mango", "plata", "laburo", "ahorro".
- You are optimistic but not a salesman. You warn about risks but explain that long-term is key.
- You explain complex financial terms simply.
- FORMATTING: Use **bold text** for important numbers or concepts. Use bullet points for lists. Use short paragraphs. Use a clear structure.

KNOWLEDGE:
- You know about FCI Money Market, Lecaps/CER, ONs (Obligaciones Negociables), CEDEARs, and AL30.
- You understand the Argentine context: inflation, dollar exchange rate, etc.

CAPABILITIES:
- You can trigger the creation of a new financial goal if the user expresses an intent (e.g., "Quiero ahorrar para un viaje", "Me gustaría comprarme un auto").
- You can help the user understand how to deposit money ("ingresar dinero").
- You can facilitate the investment of EXISTING funds in the user's account to one of their goals or a financial instrument (e.g., "Usa $50000 de mi cuenta para el auto").
- You can provide a daily summary of the market and their portfolio.

YOUR TASKS:
1. Onboarding/Profiling: Ask questions to determine the user's risk profile (Conservador, Moderado, Dinámico).
2. Education: Explain what instruments are. Help users understand inflation and how to fight it.
3. Investment Assistance: If the user says they want to use money they ALREADY have, use the "invest_funds" tool.
4. Analysis: Monitor their portfolio.
5. Summary: If asked for a summary, provide a clear view of their progress and the market.

NEVER PROMISE FIXED RETURNS. Always state that the market is uncertain.

If the user asks who you are: "Soy Luca. Te voy a ayudar a entender cómo y dónde poner tus ahorros para que no los coma la inflación. Sin tecnicismos, sin apuros."
`;

export function useLuca(
  user?: User, 
  onGoalCreated?: (goal: Omit<Goal, 'id' | 'currentAmount'>) => void,
  onInvestFunds?: (amount: number, currency: 'ARS' | 'USD', target?: string) => void
) {
  const { addNotification } = useNotifications();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const aiRef = useRef<GoogleGenAI | null>(null);
  const chatRef = useRef<any>(null);

  if (!aiRef.current && typeof process !== 'undefined' && (process.env.GEMINI_API_KEY || (process.env as any).VITE_GEMINI_API_KEY)) {
    const key = process.env.GEMINI_API_KEY || (process.env as any).VITE_GEMINI_API_KEY;
    aiRef.current = new GoogleGenAI({ apiKey: key });
  }

  const sendMessage = useCallback(async (content: string) => {
    if (!aiRef.current) {
      const errorMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Luca está fuera de línea: Falta configurar la API Key de Gemini en el entorno.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMsg]);
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      if (!chatRef.current) {
        chatRef.current = aiRef.current.chats.create({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: SYSTEM_INSTRUCTION + (user ? `\n\nESTADO DEL USUARIO ACTUAL:\nBalance ARS: $${user.availableBalanceArs}\nBalance USD: u$s${user.availableBalanceUsd}\nObjetivos actuales: ${user.goals.map(g => g.name).join(', ')}` : ''),
            tools: [
              {
                functionDeclarations: [
                  {
                    name: "create_goal",
                    description: "Inicia el proceso para crear un nuevo objetivo financiero.",
                    parameters: {
                      type: Type.OBJECT,
                      properties: {
                        name: { type: Type.STRING, description: "El nombre del objetivo" },
                        description: { type: Type.STRING, description: "Breve descripción" },
                        targetAmount: { type: Type.NUMBER, description: "Monto total a alcanzar" },
                        currency: { type: Type.STRING, enum: ["ARS", "USD"], description: "Moneda" },
                        deadline: { type: Type.STRING, description: "Fecha límite aproximada" }
                      },
                      required: ["name", "targetAmount", "currency"]
                    }
                  },
                  {
                    name: "show_deposit_info",
                    description: "Explica cómo ingresar dinero a la plataforma."
                  },
                  {
                    name: "invest_funds",
                    description: "Asigna dinero de la cuenta a un objetivo o instrumento.",
                    parameters: {
                      type: Type.OBJECT,
                      properties: {
                        amount: { type: Type.NUMBER, description: "Monto" },
                        currency: { type: Type.STRING, enum: ["ARS", "USD"], description: "Moneda" },
                        target: { type: Type.STRING, description: "Objetivo o instrumento de destino" }
                      },
                      required: ["amount", "currency", "target"]
                    }
                  }
                ]
              }
            ]
          }
        });
      }

      const result = await chatRef.current.sendMessage({
        message: content
      });

      const call = result.functionCalls?.[0];
      let assistantResponse = result.text;

      if (call) {
        if (call.name === "create_goal") {
          const args = call.args as any;
          if (onGoalCreated) {
            onGoalCreated({
              name: args.name,
              description: args.description || "",
              targetAmount: args.targetAmount,
              currency: args.currency,
              deadline: args.deadline
            });
            addNotification({
              title: 'Nuevo Objetivo',
              message: `Luca ayudó a configurar tu objetivo: ${args.name}`,
              type: 'luca'
            });
            assistantResponse = `¡Excelente elección! Acabo de abrirte el formulario para configurar el objetivo **${args.name}**. Confirmá los montos y ya mismo empezamos a hacerlo realidad.`;
          }
        } else if (call.name === "show_deposit_info") {
          assistantResponse = "Cargar guita es una pavada. Vas a **Efectivo en cuenta**, click en **'Cargar'** y te doy los datos para transferir por CBU o Alias. Se acredita al toque.";
        } else if (call.name === "invest_funds") {
          const args = call.args as any;
          if (onInvestFunds) {
            onInvestFunds(args.amount, args.currency, args.target);
            addNotification({
              title: 'Inversión Exitosa',
              message: `Se movieron ${args.currency} ${args.amount.toLocaleString()} a ${args.target}.`,
              type: 'success'
            });
            assistantResponse = `¡Hecho! Acabo de poner a trabajar **${args.currency} ${args.amount.toLocaleString()}** en **${args.target}**. ¡Esa es la actitud, haciendo que el mango rinda!`;
          }
        }
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantResponse || "Se me chispoteó la respuesta. ¿Me repetís?",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Luca API Error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Ando con problemas de conexión con la central, che. ¿Lo intentamos de nuevo en un segundo?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, onGoalCreated, onInvestFunds, user]);

  return {
    messages,
    sendMessage,
    isLoading,
    setMessages
  };
}
