import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, TrendingUp, Calendar, Target, Shield, Sparkles } from "lucide-react";
import { Goal } from "../types";
import { cn } from "../lib/utils";

interface GoalDetailProps {
  goal: Goal;
  onBack: () => void;
}

export function GoalDetail({ goal, onBack }: GoalDetailProps) {
  const percent = Math.round((goal.currentAmount / goal.targetAmount) * 100);

  return (
    <div className="animate-screen-enter pb-24 px-4 pt-20 md:pt-28 lg:px-8 w-full max-w-5xl mx-auto">
      <header className="mb-10">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-neutral-400 hover:text-mango-300 transition-colors mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-data text-[10px] uppercase tracking-widest">Volver al Dashboard</span>
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
             <div className="flex items-center space-x-3">
                <span className="font-data text-[11px] text-mango-300 bg-mango-950/30 px-3 py-1 rounded-micro uppercase tracking-widest border border-mango-500/20">
                  {goal.name}
                </span>
             </div>
             <h1 className="font-editorial text-[42px] md:text-[64px] font-bold text-neutral-50 leading-none">
               {goal.name}.
             </h1>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-1">
             <span className="font-data text-[10px] text-neutral-400 uppercase tracking-widest opacity-60 text-right">Monto Acumulado</span>
             <span className="font-data text-[32px] md:text-[48px] text-neutral-50 tracking-tighter">
               {goal.currency} {goal.currentAmount.toLocaleString()}
             </span>
          </div>
        </div>
        <div className="h-px bg-neutral-800/80 w-full mt-12" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-7 space-y-12">
          {/* Progress Section */}
          <section className="space-y-6">
            <div className="flex justify-between items-end mb-4">
               <div className="space-y-1">
                  <h3 className="font-editorial text-[24px] text-neutral-50 italic">Progreso de la meta</h3>
                  <p className="font-body text-[15px] text-neutral-400 leading-relaxed italic">
                    "{goal.description}"
                  </p>
               </div>
               <div className="text-right">
                  <span className="font-data text-[28px] text-mango-300">{percent}%</span>
               </div>
            </div>
            
            <div className="h-4 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800/50 p-1">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${percent}%` }}
                 transition={{ duration: 1.2, ease: "circOut" }}
                 className="h-full bg-[image:var(--mango-gradient)] rounded-full shadow-[0_0_20px_rgba(245,137,10,0.3)]"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-base space-y-2">
                  <Target className="h-5 w-5 text-neutral-500 mb-2" />
                  <span className="font-data text-[10px] text-neutral-500 uppercase tracking-widest">Objetivo Final</span>
                  <div className="font-data text-[20px] text-neutral-50">{goal.targetAmount.toLocaleString()} {goal.currency}</div>
               </div>
               <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-base space-y-2">
                  <Calendar className="h-5 w-5 text-neutral-500 mb-2" />
                  <span className="font-data text-[10px] text-neutral-500 uppercase tracking-widest">Fecha Estimada</span>
                  <div className="font-data text-[20px] text-mango-300 uppercase">{goal.deadline || 'Sin definir'}</div>
               </div>
            </div>
          </section>

          {/* Activity Section */}
          <section className="space-y-6">
             <h3 className="font-editorial text-[24px] text-neutral-50 italic border-b border-neutral-800 pb-4">Actividad Reciente</h3>
             <div className="space-y-1">
                <ActivityRow label="Inversión Mensual Automática" date="Apr 12, 2026" amount="+150.00" type="positive" />
                <ActivityRow label="Rendimiento de Activos" date="Apr 08, 2026" amount="+12.45" type="positive" />
                <ActivityRow label="Inversión Mensual Automática" date="Mar 12, 2026" amount="+150.00" type="positive" />
             </div>
          </section>
        </div>

        {/* Sidebar Contextual */}
        <div className="lg:col-span-5 space-y-8">
           {/* Luca Advice */}
           <div className="bg-neutral-900 border border-neutral-700 rounded-base p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4">
                <Sparkles className="h-6 w-6 text-mango-300 animate-pulse" />
             </div>
             <h4 className="font-editorial text-[20px] font-bold text-neutral-50 mb-4 italic">Estrategia de Luca</h4>
             <p className="font-body text-[16px] text-neutral-300 leading-relaxed mb-8">
               Basado en tu horizonte de inversión para <span className="text-mango-300 font-bold">"{goal.name}"</span>, te recomiendo aumentar la exposición en Apple (AAPL) un 5% este trimestre para capturar el ciclo de crecimiento esperado.
             </p>
             <button className="w-full py-4 bg-neutral-800 hover:bg-neutral-700 text-mango-300 font-body font-bold text-[13px] uppercase tracking-widest rounded-base border border-neutral-700 transition-all">
               Optimizar mi meta
             </button>
           </div>

           {/* Security / Info */}
           <div className="p-6 border border-neutral-800 rounded-base space-y-6 opacity-60">
              <div className="flex items-start space-x-4">
                 <Shield className="h-5 w-5 text-neutral-500 mt-1" />
                 <div className="space-y-1">
                    <span className="font-data text-[10px] text-neutral-400 uppercase tracking-widest">Protección de Activos</span>
                    <p className="text-[12px] text-neutral-500 leading-relaxed">Este objetivo está respaldado por activos custodiados en Caja de Valores S.A. bajo la normativa de la CNV.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function ActivityRow({ label, date, amount, type }: { label: string, date: string, amount: string, type: 'positive' | 'negative' }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-neutral-800/30 group hover:bg-neutral-900/20 px-2 transition-colors">
      <div className="space-y-1">
        <div className="font-body text-[14px] text-neutral-200">{label}</div>
        <div className="font-data text-[10px] text-neutral-500 uppercase tracking-widest">{date}</div>
      </div>
      <div className={cn(
        "font-data text-[14px] font-medium",
        type === 'positive' ? "text-bullish" : "text-bearish"
      )}>
        {amount}
      </div>
    </div>
  );
}
