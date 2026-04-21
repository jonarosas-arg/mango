import { useMemo } from "react";
import { ArrowRight, Clock3, Wallet } from "lucide-react";
import { PortfolioCard } from "./PortfolioCard";
import { PORTFOLIOS } from "../constants";
import { PortfolioPosition, User } from "../types";

interface PortfolioViewProps {
  user: User;
  onSelectInstrument: (positionId: string) => void;
  onOpenHistory: () => void;
}

export function PortfolioView({ user, onSelectInstrument, onOpenHistory }: PortfolioViewProps) {
  const positions = useMemo(() => {
    const basePositions: PortfolioPosition[] = PORTFOLIOS[user.profile || "Moderado"];
    return basePositions.map((position) => ({
      ...position,
      valueUsd: Number(((user.balanceUsd * position.allocation) / 100).toFixed(2))
    }));
  }, [user.balanceUsd, user.profile]);

  return (
    <div className="animate-screen-enter pb-24 px-4 pt-20 md:pt-28 lg:px-8 w-full max-w-6xl mx-auto">
      <header className="mb-10 space-y-6">
        <div className="flex items-center gap-3">
          <Wallet className="h-4 w-4 text-mango-300" />
          <span className="font-data text-[11px] uppercase tracking-widest text-neutral-400">Portafolio</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1 className="font-editorial text-[42px] md:text-[64px] font-bold text-neutral-50 leading-none">
              Tu cartera,
              <br />
              <span className="text-mango-300">desglosada.</span>
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:w-[360px]">
            <InfoStat label="Horizonte" value="3 años" />
            <InfoStat label="Perfil" value={user.profile || "Moderado"} />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        <div className="xl:col-span-7">
          <PortfolioCard
            balanceUsd={user.balanceUsd}
            balanceArs={user.balanceUsd * 1005}
            performancePercent={12.4}
            performanceUsd={923.1}
            performanceLast7DaysUsd={142.5}
            performancePrevMonthUsd={780.2}
            positions={positions}
            onSelectPosition={onSelectInstrument}
            onOpenHistory={onOpenHistory}
          />
        </div>

        <aside className="xl:col-span-5 space-y-6">
          <section className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-4">
            <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Ritmo de la cartera</span>
            <div className="space-y-4">
              <MiniMetric label="Posición más fuerte" value="Apple · +22.1%" />
              <MiniMetric label="Liquidez disponible" value={`USD ${user.availableBalanceUsd.toLocaleString("en-US")}`} />
              <MiniMetric label="Fondeo en pesos" value={`ARS ${user.availableBalanceArs.toLocaleString("es-AR")}`} />
            </div>
          </section>

          <section className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-neutral-500" />
              <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Distribución por instrumento</span>
            </div>

            <div className="space-y-2">
              {positions.map((position) => (
                <button
                  key={position.id}
                  onClick={() => onSelectInstrument(position.id)}
                  className="flex w-full items-center justify-between rounded-base border border-neutral-800 bg-neutral-950/50 px-4 py-4 text-left transition-colors hover:border-mango-500/30 hover:bg-neutral-900"
                >
                  <div>
                    <div className="text-[14px] text-neutral-100">{position.name}</div>
                    <div className="text-[12px] text-neutral-500">{position.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-data text-[13px] text-neutral-50">USD {position.valueUsd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    <div className={`font-data text-[11px] ${position.performance >= 0 ? "text-bullish" : "text-bearish"}`}>
                      {position.performance >= 0 ? "↑" : "↓"} {Math.abs(position.performance)}%
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={onOpenHistory}
              className="inline-flex items-center gap-2 pt-2 text-[11px] font-body font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:text-mango-300"
            >
              Ver historial completo <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
}

function InfoStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-base border border-neutral-800 bg-neutral-900/70 p-4">
      <div className="font-data text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-2 font-data text-[18px] text-neutral-50">{value}</div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-neutral-800/60 pb-3 last:border-none last:pb-0">
      <div className="font-data text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 text-[14px] text-neutral-100">{value}</div>
    </div>
  );
}
