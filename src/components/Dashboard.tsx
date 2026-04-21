import { PortfolioCard } from "./PortfolioCard";
import { GoalCard } from "./GoalCard";
import { LucaTips } from "./LucaTips";
import { LucaSummary } from "./LucaSummary";
import { WalletHeader } from "./WalletHeader";
import { User, PortfolioPosition } from "../types";
import { PORTFOLIOS } from "../constants";
import { Shield, Sparkles, Plus } from "lucide-react";

interface DashboardProps {
  user: User;
  onSelectGoal: (goalId: string) => void;
  onCreateGoal: () => void;
  onSelectPosition: (positionId: string) => void;
  onOpenHistory: () => void;
  onOpenGoals: () => void;
}

export function Dashboard({
  user,
  onSelectGoal,
  onCreateGoal,
  onSelectPosition,
  onOpenHistory,
  onOpenGoals
}: DashboardProps) {
  const currentPortfolio: PortfolioPosition[] = PORTFOLIOS[user.profile || 'Moderado'];

  return (
    <div className="animate-screen-enter pb-24 px-4 pt-20 md:pt-28 lg:px-8 w-full">
      <header className="mb-8 md:mb-12 max-w-5xl mx-auto w-full relative z-10 transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-editorial text-[32px] sm:text-[38px] md:text-[56px] lg:text-[72px] font-bold text-neutral-50 tracking-tight leading-none">
              Buenos días, <br />
              <span className="text-mango-300">{user.name.split(' ')[0]}.</span>
            </h1>
          </div>
          
          <div className="lg:col-span-5">
            <WalletHeader 
              availableBalanceArs={user.availableBalanceArs}
              availableBalanceUsd={user.availableBalanceUsd}
            />
          </div>
        </div>
        <div className="h-px bg-neutral-800/80 w-full mt-8 md:mt-10" />
      </header>

      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <PortfolioCard 
              balanceUsd={user.balanceUsd}
              balanceArs={user.balanceUsd * 1005} 
              performancePercent={12.4}
              performanceUsd={923.10}
              performanceLast7DaysUsd={142.50}
              performancePrevMonthUsd={780.20}
              positions={currentPortfolio}
              onSelectPosition={onSelectPosition}
              onOpenHistory={onOpenHistory}
            />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <LucaSummary userName={user.name} />
            <LucaTips />
          </div>
        </div>

        <section className="space-y-6 pt-4">
          <header className="flex justify-between items-center px-1">
            <div className="flex items-center space-x-3">
              <div className="h-[1px] w-8 bg-mango-500" />
              <span className="font-data text-[12px] text-neutral-400 uppercase tracking-widest font-bold">Tus Objetivos de Inversión</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenGoals}
                className="flex items-center space-x-1.5 text-neutral-400 hover:text-neutral-100 transition-colors group p-2 hover:bg-neutral-800/60 rounded-micro"
              >
                <span className="font-data text-[11px] uppercase tracking-widest font-bold">Ver todas</span>
              </button>
              <button 
                onClick={onCreateGoal}
                className="flex items-center space-x-1.5 text-mango-300 hover:text-mango-100 transition-colors group p-2 hover:bg-mango-500/10 rounded-micro"
              >
                <Plus className="h-4 w-4" />
                <span className="font-data text-[11px] uppercase tracking-widest font-bold">Nuevo Objetivo</span>
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.goals.map(goal => (
              <GoalCard key={goal.id} goal={goal} onClick={onSelectGoal} />
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-20 py-12 border-t border-neutral-800 space-y-8 opacity-60 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
             <div className="flex items-center space-x-2">
                <Shield className="h-3 w-3 text-neutral-400" />
                <span className="font-data text-[10px] uppercase tracking-widest">AAGI Nº 1024-X · CNV</span>
             </div>
             <p className="text-[10px] font-body text-neutral-500">Verificar → cnv.gob.ar</p>
          </div>
          <div className="space-y-1">
             <div className="flex items-center space-x-2">
                <Shield className="h-3 w-3 text-neutral-400" />
                <span className="font-data text-[10px] uppercase tracking-widest">Custodia Caja Valores</span>
             </div>
             <p className="text-[10px] font-body text-neutral-500">Activos segregados</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles className="h-3 w-3 text-neutral-500" />
          <span className="font-data text-[10px] uppercase tracking-widest">AES-256 · TLS 1.3 · 2FA · SOC 2</span>
        </div>
      </footer>
    </div>
  );
}
