import { motion } from "motion/react";
import { Goal } from "../types";
import { cn } from "../lib/utils";

interface GoalCardProps {
  goal: Goal;
  onClick?: (goalId: string) => void;
  key?: string | number | null;
}

export function GoalCard({ goal, onClick }: GoalCardProps) {
  const percent = Math.round((goal.currentAmount / goal.targetAmount) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick?.(goal.id)}
      className={cn(
        "bg-neutral-900 border border-neutral-800 rounded-base p-5 relative overflow-hidden transition-all duration-300",
        onClick && "cursor-pointer hover:bg-neutral-800/80 hover:border-neutral-700 hover:shadow-modal group"
      )}
    >
      {/* Accent on top per §04.3 */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-mango-500 opacity-80 group-hover:opacity-100 transition-opacity" />
      
      <header className="flex justify-between items-center mb-6">
         <div className="space-y-1">
            <span className="font-data text-[11px] text-neutral-400 group-hover:text-mango-300 transition-colors uppercase tracking-widest block">{goal.name}</span>
            <div className="flex items-center space-x-2">
              <span className="bg-mango-100/10 text-mango-300 px-2 py-0.5 rounded-micro text-[10px] font-bold uppercase tracking-widest italic">
                Goal roadmap
              </span>
            </div>
         </div>
         <button className="font-body text-[13px] font-medium text-neutral-400 hover:text-neutral-50 transition-colors">
           Editar
         </button>
      </header>

      <div className="space-y-6">
        <p className="font-editorial text-[18px] text-neutral-200 leading-relaxed italic">
          "{goal.description}"
        </p>

        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="font-data text-[24px] font-medium text-neutral-50 tabular-nums">
              {goal.currency} {goal.currentAmount.toLocaleString()}
            </span>
            <span className="font-data text-[14px] font-medium text-neutral-400 uppercase tracking-wide">
              {percent}% completo
            </span>
          </div>
          <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden border border-neutral-700">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${percent}%` }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               className="h-full bg-[image:var(--mango-gradient)]"
             />
          </div>
          <div className="flex justify-between items-center text-[11px] font-data text-neutral-600 uppercase tracking-widest">
             <span>Meta: {goal.currency} {goal.targetAmount.toLocaleString()}</span>
          </div>
        </div>

        {goal.deadline && (
          <div className="pt-4 border-t border-neutral-800 flex flex-col space-y-1">
             <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Proyección</span>
             <div className="flex justify-between items-center">
                <span className="font-body text-[13px] text-neutral-300">A este ritmo, llegás en:</span>
                <span className="font-data text-[13px] font-bold text-mango-300 uppercase tracking-widest">
                  {goal.deadline}
                </span>
             </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
