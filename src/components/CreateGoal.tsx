import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Target, Calendar, DollarSign, Wallet } from "lucide-react";
import { cn } from "../lib/utils";
import { Goal } from "../types";

interface CreateGoalProps {
  onClose: () => void;
  onSave: (goal: Omit<Goal, 'id' | 'currentAmount'>) => void;
  initialData?: Partial<Omit<Goal, 'id' | 'currentAmount'>>;
}

export function CreateGoal({ onClose, onSave, initialData }: CreateGoalProps) {
  const [name, setName] = React.useState(initialData?.name || "");
  const [description, setDescription] = React.useState(initialData?.description || "");
  const [targetAmount, setTargetAmount] = React.useState(initialData?.targetAmount?.toString() || "");
  const [currency, setCurrency] = React.useState<'ARS' | 'USD'>(initialData?.currency || 'USD');
  const [deadline, setDeadline] = React.useState(initialData?.deadline || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !targetAmount) return;

    onSave({
      name,
      description,
      targetAmount: Number(targetAmount),
      currency,
      deadline
    });
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-sm"
      />

      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 z-50 flex flex-col bg-neutral-950 w-full sm:w-[500px] border-l border-neutral-800 shadow-2xl"
      >
        <div className="flex h-14 md:h-20 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-6 backdrop-blur-md">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                <Target className="h-5 w-5 text-mango-300" />
             </div>
             <div>
                <h3 className="font-editorial text-[20px] font-bold text-neutral-50 leading-none">Nuevo Objetivo</h3>
                <p className="font-data text-[9px] uppercase tracking-widest text-neutral-400 mt-1">Define tu meta financiera</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-neutral-50 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          <div className="space-y-4">
             <label className="font-data text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Nombre de la Meta</label>
             <input 
               autoFocus
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="Ej: Viaje a Japón, Comprar Auto..."
               className="w-full bg-neutral-900 border border-neutral-800 rounded-base px-4 py-3 text-neutral-50 font-body focus:ring-1 focus:ring-mango-500 outline-hidden transition-all text-xl font-bold placeholder:text-neutral-700 placeholder:font-normal"
             />
          </div>

          <div className="space-y-4">
             <label className="font-data text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Breve Descripción</label>
             <textarea 
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               placeholder="Contame brevemente para qué es este ahorro..."
               rows={3}
               className="w-full bg-neutral-900 border border-neutral-800 rounded-base px-4 py-3 text-neutral-50 font-body focus:ring-1 focus:ring-mango-500 outline-hidden transition-all text-[15px] placeholder:text-neutral-700"
             />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4 text-center">
               <label className="font-data text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Moneda</label>
               <div className="flex p-1 bg-neutral-900 border border-neutral-800 rounded-base">
                  <button 
                    type="button"
                    onClick={() => setCurrency('ARS')}
                    className={cn("flex-1 py-2 text-[12px] font-bold rounded-base transition-all", currency === 'ARS' ? "bg-neutral-800 text-neutral-50 shadow-sm" : "text-neutral-600 hover:text-neutral-400")}
                  >
                    PESOS (ARS)
                  </button>
                  <button 
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={cn("flex-1 py-2 text-[12px] font-bold rounded-base transition-all", currency === 'USD' ? "bg-neutral-800 text-neutral-50 shadow-sm" : "text-neutral-600 hover:text-neutral-400")}
                  >
                    DÓLAR (USD)
                  </button>
               </div>
            </div>

            <div className="space-y-4">
               <label className="font-data text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Monto Objetivo</label>
               <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 font-mono text-lg">
                    {currency === 'ARS' ? '$' : 'u$s'}
                  </span>
                  <input 
                    type="number"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-base pl-12 pr-4 py-3 text-neutral-50 font-mono text-xl focus:ring-1 focus:ring-mango-500 outline-hidden transition-all placeholder:text-neutral-700"
                  />
               </div>
            </div>
          </div>

          <div className="space-y-4">
             <label className="font-data text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Fecha Límite (Opcional)</label>
             <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 h-5 w-5" />
                <input 
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="Ej: Diciembre 2025"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-base pl-12 pr-4 py-3 text-neutral-50 font-body text-[15px] focus:ring-1 focus:ring-mango-500 outline-hidden transition-all placeholder:text-neutral-700"
                />
             </div>
          </div>

          <div className="pt-8 space-y-4">
             <p className="text-[11px] text-neutral-500 italic text-center px-6">
                "Definir una meta clara es el primer paso para proteger tu capital de la inflación. Luca te ayudará a elegir los mejores instrumentos para alcanzarla."
             </p>
             <button 
               type="submit"
               disabled={!name || !targetAmount}
               className="w-full bg-mango-300 hover:bg-mango-100 disabled:opacity-30 disabled:hover:bg-mango-300 text-neutral-950 font-body font-bold py-4 rounded-base text-[15px] shadow-glow transition-all active:scale-[0.98]"
             >
                CREAR OBJETIVO
             </button>
          </div>
        </form>
      </motion.div>
    </>
  );
}
