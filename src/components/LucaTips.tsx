import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lightbulb, ChevronRight, ChevronLeft } from "lucide-react";

const TIPS = [
  {
    title: "¿Qué es el Dólar MEP?",
    description: "Es el dólar que comprás legalmente a través de la bolsa comprando un bono en pesos y vendiéndolo en dólares. Es la forma más segura de dolarizarte sin límites.",
    category: "Educación"
  },
  {
    title: "El poder del Interés Compuesto",
    description: "Reinvertir tus ganancias genera intereses sobre intereses. A largo plazo, el efecto es exponencial. 'El tiempo es el mejor amigo del inversor'.",
    category: "Mindset"
  },
  {
    title: "FCI Money Market",
    description: "Son fondos de liquidez inmediata (T+0). Rendimiento diario similar a un plazo fijo pero con la plata siempre disponible.",
    category: "Instrumentos"
  },
  {
    title: "Diversificación",
    description: "No pongas todos los huevos en la misma canasta. Repartir entre CEDEARs, Bonos y Cuentas remuneradas baja el riesgo de tu cartera.",
    category: "Estrategia"
  }
];

export function LucaTips() {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TIPS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TIPS.length) % TIPS.length);

  return (
    <div className="bg-neutral-900/50 border border-neutral-800 rounded-base p-5 relative overflow-hidden group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-mango-500/10 rounded-full">
            <Lightbulb className="h-3.5 w-3.5 text-mango-300" />
          </div>
          <span className="font-data text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Píldora de Luca</span>
        </div>
        <div className="flex items-center space-x-1">
          <button 
            onClick={prev}
            className="p-1 rounded-full hover:bg-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={next}
            className="p-1 rounded-full hover:bg-neutral-800 text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <h4 className="font-editorial text-[16px] font-bold text-neutral-100 italic">
            {TIPS[index].title}
          </h4>
          <p className="font-body text-[13px] text-neutral-400 leading-relaxed">
            {TIPS[index].description}
          </p>
          <div className="pt-2">
            <span className="bg-neutral-800 text-neutral-500 px-2 py-0.5 rounded-micro text-[9px] font-data font-bold uppercase tracking-widest">
              {TIPS[index].category}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Background decoration */}
      <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
        <Lightbulb className="w-24 h-24 text-mango-500" />
      </div>
    </div>
  );
}
