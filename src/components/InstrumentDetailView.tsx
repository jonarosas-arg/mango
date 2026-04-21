import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { PortfolioPosition } from "../types";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

interface InstrumentDetailViewProps {
  instrument: PortfolioPosition;
  portfolioValueUsd: number;
  onBack: () => void;
  onOpenHistory: () => void;
  onOpenChat: () => void;
}

const PRICE_DATA = [
  { label: "1", value: 128 },
  { label: "2", value: 132 },
  { label: "3", value: 129 },
  { label: "4", value: 138 },
  { label: "5", value: 141 },
  { label: "6", value: 145 },
  { label: "7", value: 149 }
];

export function InstrumentDetailView({
  instrument,
  portfolioValueUsd,
  onBack,
  onOpenHistory,
  onOpenChat
}: InstrumentDetailViewProps) {
  const valueUsd = (portfolioValueUsd * instrument.allocation) / 100;
  const absolute = (valueUsd * Math.abs(instrument.performance)) / 100;

  return (
    <div className="animate-screen-enter pb-24 px-4 pt-20 md:pt-28 lg:px-8 w-full max-w-5xl mx-auto">
      <header className="mb-10 space-y-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-neutral-400 hover:text-mango-300 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-data text-[10px] uppercase tracking-widest">Volver a cartera</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-4">
            <Badge variant="neutral" className="h-6 border border-neutral-700 bg-neutral-900 px-3 text-neutral-300">
              {instrument.type} · {instrument.category}
            </Badge>
            <h1 className="font-editorial text-[42px] md:text-[64px] font-bold text-neutral-50 leading-none">
              {instrument.name}.
            </h1>
          </div>
          <div className="text-left lg:text-right">
            <div className="font-data text-[32px] md:text-[48px] text-neutral-50">USD 185.40</div>
            <div className="mt-2 inline-flex">
              <Badge variant="bullish">↑ +2.1% hoy</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <section className="glass rounded-base p-6">
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PRICE_DATA}>
                  <defs>
                    <linearGradient id="detailValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFB800" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#FFB800" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" opacity={0.45} />
                  <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "#737373", fontSize: 10, fontFamily: "DM Mono" }} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#171717",
                      border: "1px solid #404040",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontFamily: "DM Mono",
                      color: "#f5f5f5"
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#FFB800" fill="url(#detailValue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["1D", "7D", "1M", "3M", "1A"].map((range, index) => (
                <button
                  key={range}
                  className={`rounded-full border px-4 py-2 font-data text-[10px] uppercase tracking-widest transition-colors ${
                    index === 1
                      ? "border-mango-500/30 bg-mango-500/10 text-mango-300"
                      : "border-neutral-800 bg-neutral-900/70 text-neutral-500 hover:text-neutral-100"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-5">
            <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Qué es esto</span>
            <p className="text-[15px] leading-relaxed text-neutral-300">
              {instrument.type === "CEDEAR"
                ? "Un CEDEAR te deja invertir en empresas globales desde Argentina y en pesos, con cobertura cambiaria."
                : instrument.type === "ON"
                  ? "Una ON es deuda emitida por empresas: suma renta fija en dólares y equilibra la cartera."
                  : "Este instrumento cumple un rol táctico dentro de la distribución y ayuda a sostener el objetivo de la meta."}
            </p>
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 text-[12px] font-body font-bold uppercase tracking-widest text-mango-300 transition-colors hover:text-mango-100"
            >
              <Sparkles className="h-4 w-4" />
              Luca, explicame más
            </button>
          </section>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <section className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-4">
            <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">En tu cartera</span>
            <div className="font-data text-[32px] text-neutral-50">USD {valueUsd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="font-data text-[12px] uppercase tracking-widest">{instrument.allocation}% del portafolio</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className={`h-4 w-4 ${instrument.performance >= 0 ? "text-bullish" : "text-bearish rotate-90"}`} />
              <span className={`font-data text-[13px] ${instrument.performance >= 0 ? "text-bullish" : "text-bearish"}`}>
                {instrument.performance >= 0 ? "+" : "-"}USD {absolute.toLocaleString("en-US", { maximumFractionDigits: 0 })} · {instrument.performance >= 0 ? "↑" : "↓"} {Math.abs(instrument.performance)}%
              </span>
            </div>
          </section>

          <section className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-4">
            <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Últimas operaciones</span>
            <OperationRow label="Compra" amount="USD 150" date="15 abr · 14:32" />
            <OperationRow label="Compra" amount="USD 85" date="05 abr · 11:20" />
            <OperationRow label="Compra" amount="USD 200" date="12 ene · 16:45" />
            <button
              onClick={onOpenHistory}
              className="pt-2 text-[11px] font-body font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:text-mango-300"
            >
              Ver historial completo
            </button>
          </section>

          <div className="grid grid-cols-2 gap-3">
            <Button size="lg">Comprar más</Button>
            <Button variant="secondary" size="lg" onClick={onOpenHistory}>
              Ver historial
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function OperationRow({ label, amount, date }: { label: string; amount: string; date: string }) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-800/50 pb-3">
      <div>
        <div className="text-[14px] text-neutral-200">{label}</div>
        <div className="font-data text-[10px] uppercase tracking-widest text-neutral-600">{date}</div>
      </div>
      <span className="font-data text-[13px] text-neutral-50">{amount}</span>
    </div>
  );
}
