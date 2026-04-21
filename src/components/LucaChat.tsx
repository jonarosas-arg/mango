import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X, MoreHorizontal, Sparkles } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { useLuca } from "../hooks/useLuca";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";

import { ChatMessage, Goal, User } from '../types';

interface LucaChatProps {
  onClose: () => void;
  user: User;
  onGoalCreated?: (goal: Omit<Goal, 'id' | 'currentAmount'>) => void;
  onInvestFunds?: (amount: number, currency: 'ARS' | 'USD', target?: string) => void;
}

export function LucaChat({ onClose, user, onGoalCreated, onInvestFunds }: LucaChatProps) {
  const { messages, sendMessage, isLoading } = useLuca(user, onGoalCreated, onInvestFunds);
  const [input, setInput] = React.useState("");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <>
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 z-50 flex flex-col bg-neutral-950 w-full sm:w-[450px] border-l border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        {/* Header §04.2 */}
        <div className="flex h-14 md:h-20 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-6 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-mango-500 to-mango-700 flex items-center justify-center shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-[20px] font-bold text-neutral-50 leading-none">Luca</span>
              <div className="flex items-center space-x-1 mt-1">
                <span className="w-1.5 h-1.5 bg-bullish rounded-full animate-pulse" />
                <span className="font-data text-[9px] uppercase tracking-widest text-neutral-400 font-bold">Online</span>
                <span className="text-[9px] text-neutral-600 ml-2 border-l border-neutral-800 pl-2">Gemini 3 Flash</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-neutral-400 hover:text-neutral-50 transition-colors tappable">
              <MoreHorizontal className="h-5 w-5" />
            </button>
            <button onClick={onClose} className="p-2 text-neutral-400 hover:text-neutral-50 transition-colors tappable">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-mango-500 to-mango-700 flex items-center justify-center shadow-glow animate-pulse">
               <Sparkles className="text-white h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-editorial text-[22px] font-bold text-neutral-50">Hablá con Luca.</h3>
              <p className="max-w-[240px] font-body text-[14px] text-neutral-400 leading-relaxed italic">
                 "Te voy a ayudar a proteger tus ahorros de la inflación — sin tecnicismos."
              </p>
            </div>
          </div>
        )}
        
        {messages.map((m) => (
          <motion.div 
            key={m.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "flex flex-col max-w-[85%] space-y-1.5",
              m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
            )}
          >
            <div className={cn(
              "px-4 py-3 font-body text-[15px] leading-relaxed",
              m.role === 'user' 
                ? "bg-[rgba(122,46,0,0.3)] border border-mango-700 text-neutral-50 rounded-[4px] rounded-tr-none" 
                : "bg-neutral-900 text-neutral-200 rounded-[4px] rounded-tl-none border border-neutral-800 shadow-sm prose prose-invert prose-sm max-w-none"
            )}>
              {m.role === 'assistant' ? (
                <div className="markdown-content">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      strong: ({ children }) => <strong className="text-mango-300 font-bold">{children}</strong>,
                      li: ({ children }) => <li className="mb-1">{children}</li>,
                      ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              ) : m.content}
            </div>
            <div className="flex items-center space-x-2 px-1">
              {m.role === 'assistant' && (
                <div className="w-5 h-5 rounded-full bg-linear-to-br from-mango-500 to-mango-700 flex items-center justify-center shadow-glow">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              )}
              <span className="font-data text-[9px] uppercase tracking-widest text-neutral-600 font-bold">
                {m.role === 'assistant' ? 'Luca' : 'Ahorrista'} · now
              </span>
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start space-y-2"
          >
            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-[4px] rounded-tl-none px-4 py-3 flex space-x-1.5 items-center">
              <div className="flex space-x-1">
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-mango-400 rounded-full" />
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-mango-400 rounded-full" />
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-mango-400 rounded-full" />
              </div>
              <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500 ml-2">Luca está pensando...</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input §04.2 */}
      <div className="px-4 py-6 bg-neutral-900 border-t border-neutral-700 rounded-b-medium">
        <div className="flex items-center space-x-3 bg-neutral-950 border border-neutral-800 rounded-base p-1 pl-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="¿En qué puedo ayudarte?"
            className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] font-body text-neutral-100 placeholder:text-neutral-600"
          />
          <button 
            className="h-10 px-4 font-body font-bold text-mango-300 uppercase tracking-widest text-[13px] disabled:opacity-30 tappable"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            Enviar
          </button>
        </div>
        <p className="text-[10px] font-body text-neutral-600 mt-3 text-center px-4">
          Luca puede cometer errores. Verificá los datos clave antes de invertir.
        </p>
      </div>
    </motion.div>
  </>
);
}
