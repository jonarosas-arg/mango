import { motion } from "motion/react";
import { ArrowLeft, Plus, Target } from "lucide-react";
import { Goal, User } from "../types";
import { GoalCard } from "./GoalCard";

interface GoalsViewProps {
  user: User;
  onBack: () => void;
  onSelectGoal: (goalId: string) => void;
  onCreateGoal: () => void;
}

export function GoalsView({ user, onBack, onSelectGoal, onCreateGoal }: GoalsViewProps) {
  return (
    <div className="animate-screen-enter pb-24 px-4 pt-20 md:pt-28 lg:px-8 w-full max-w-6xl mx-auto">
      <header className="mb-10 space-y-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-neutral-400 hover:text-mango-300 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-data text-[10px] uppercase tracking-widest">Volver al Dashboard</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Target className="h-4 w-4 text-mango-300" />
              <span className="font-data text-[11px] uppercase tracking-widest text-neutral-400">Metas</span>
            </div>
            <h1 className="font-editorial text-[42px] md:text-[64px] font-bold text-neutral-50 leading-none">
              Tus objetivos,
              <br />
              <span className="text-mango-300">bien ordenados.</span>
            </h1>
          </div>

          <button
            onClick={onCreateGoal}
            className="inline-flex items-center justify-center gap-2 rounded-base border border-mango-500/30 bg-mango-500/10 px-5 py-4 text-[13px] font-body font-bold uppercase tracking-widest text-mango-300 transition-colors hover:bg-mango-500/15"
          >
            <Plus className="h-4 w-4" />
            Nuevo objetivo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SummaryCard label="Objetivos activos" value={`${user.goals.length}`} detail="Metas visibles y editables" />
          <SummaryCard label="Capital asignado" value="USD 13.220" detail="Distribuido entre metas y cartera" />
          <SummaryCard label="Meta más próxima" value="Mi Casa" detail="Proyección agosto 2026" />
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {user.goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} onClick={onSelectGoal} />
        ))}
      </section>
    </div>
  );
}

function SummaryCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-base border border-neutral-800 bg-neutral-900/70 p-5"
    >
      <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">{label}</span>
      <div className="mt-3 font-data text-[24px] text-neutral-50">{value}</div>
      <p className="mt-2 text-[13px] text-neutral-400">{detail}</p>
    </motion.div>
  );
}
