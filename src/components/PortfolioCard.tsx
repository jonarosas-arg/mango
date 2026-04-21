import { motion } from "motion/react";
import { Badge } from "./ui/Badge";
import { TrendingUp, ArrowRight } from "lucide-react";
import { PortfolioPosition } from "../types";
import { cn } from "../lib/utils";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const performanceData = [
  { month: "Ene", value: 3800 },
  { month: "Feb", value: 3950 },
  { month: "Mar", value: 3700 },
  { month: "Abr", value: 4100 },
  { month: "May", value: 4300 },
  { month: "Jun", value: 4850 },
];

interface PortfolioCardProps {
  balanceUsd: number;
  balanceArs: number;
  performancePercent: number;
  performanceUsd: number; // Este mes
  performanceLast7DaysUsd: number;
  performancePrevMonthUsd: number;
  positions: PortfolioPosition[];
  history?: { month: string; value: number }[];
  onSelectPosition?: (positionId: string) => void;
  onOpenHistory?: () => void;
}

export function PortfolioCard({ 
  balanceUsd, 
  balanceArs, 
  performancePercent, 
  performanceUsd,
  performanceLast7DaysUsd = 142.50,
  performancePrevMonthUsd = 780.20,
  positions,
  history = performanceData,
  onSelectPosition,
  onOpenHistory
}: PortfolioCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-base relative overflow-hidden"
    >
      <div className="flex flex-col space-y-6 relative z-10">
        <header className="flex justify-between items-center">
          <span className="font-data text-[11px] text-neutral-400 uppercase tracking-[0.1em]">Tu Portafolio</span>
          <Badge variant="bullish" className="h-6">
            ↑ +{performancePercent}%
          </Badge>
        </header>

        <div className="space-y-1">
          <h2 className="font-data text-[28px] sm:text-[36px] font-medium leading-none tracking-tight text-neutral-50 tabular-nums">
            USD {balanceUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
          <p className="font-data text-[13px] sm:text-[14px] text-neutral-400">
            ARS {balanceArs.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2 border-y border-neutral-800/50 py-4">
          <div className="space-y-1">
            <span className="font-data text-[9px] uppercase tracking-widest text-neutral-500 block">Últimos 7 días</span>
            <div className="flex items-center text-bullish">
              <span className="font-mono text-[14px] font-bold">+u$s {performanceLast7DaysUsd.toLocaleString()}</span>
            </div>
          </div>
          <div className="space-y-1 border-x border-neutral-800/50 px-4">
            <span className="font-data text-[9px] uppercase tracking-widest text-neutral-500 block">Este mes</span>
            <div className="flex items-center text-bullish">
              <span className="font-mono text-[14px] font-bold">+u$s {performanceUsd.toLocaleString()}</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="font-data text-[9px] uppercase tracking-widest text-neutral-500 block">Mes anterior</span>
            <div className="flex items-center text-bullish">
              <span className="font-mono text-[14px] font-bold">+u$s {performancePrevMonthUsd.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="h-[140px] w-full mt-2 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#84cc16" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" opacity={0.5} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#737373', fontSize: 9, fontFamily: 'DM Mono' }}
                dy={10}
              />
              <YAxis hide domain={['auto', 'auto']} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#171717', 
                  border: '1px solid #404040',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontFamily: 'DM Mono',
                  color: '#f5f5f5'
                }}
                itemStyle={{ color: '#bef264', fontWeight: 'bold' }}
                cursor={{ stroke: '#404040', strokeWidth: 1 }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#bef264" 
                fillOpacity={1} 
                fill="url(#colorValue)" 
                strokeWidth={2}
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="h-px bg-neutral-700/50 w-full" />

        <div className="space-y-3">
          <header className="flex justify-between items-center mb-1">
            <span className="font-data text-[11px] text-neutral-400 uppercase tracking-widest">Distribución</span>
          </header>
          
          <div className="space-y-4">
            {positions.slice(0, 4).map(pos => (
              <button
                key={pos.id}
                onClick={() => onSelectPosition?.(pos.id)}
                className="flex w-full justify-between items-center group cursor-pointer tappable text-left"
              >
                <div className="flex items-center space-x-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    pos.type === 'CEDEAR' ? "bg-mango-300" : pos.type === 'FCI' ? "bg-neutral-cer" : "bg-bullish"
                  )} />
                  <div className="flex flex-col">
                    <span className="font-data text-[12px] text-neutral-200 group-hover:text-white transition-colors">{pos.name}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                   <span className="font-data text-[13px] text-neutral-400">{pos.allocation}%</span>
                   <span className={cn(
                     "font-data text-[12px] w-12 text-right",
                     pos.performance >= 0 ? "text-bullish" : "text-bearish"
                   )}>
                     {pos.performance >= 0 ? '↑' : '↓'} {Math.abs(pos.performance)}%
                   </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onOpenHistory}
          className="flex items-center text-[11px] font-body font-bold uppercase tracking-[0.15em] text-neutral-400 hover:text-mango-300 transition-colors pt-4 group"
        >
          Ver historial completo <ArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
