import { ArrowLeft, Filter } from "lucide-react";

interface HistoryEntry {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  type: "positive" | "negative" | "neutral";
  group: string;
}

interface HistoryViewProps {
  onBack: () => void;
}

const MOVEMENTS: HistoryEntry[] = [
  { id: "1", title: "Compra · CEDEAR AAPL", subtitle: "Precio de ejecución confirmado", amount: "USD 150.00", date: "15 abr · 14:32", type: "negative", group: "Abril 2026" },
  { id: "2", title: "Retiro · Caja de ahorro", subtitle: "Transferencia a cuenta vinculada", amount: "USD 200.00", date: "12 abr · 09:15", type: "negative", group: "Abril 2026" },
  { id: "3", title: "Rendimiento · FCI Money Market", subtitle: "Liquidación diaria acreditada", amount: "ARS 4.230,00", date: "01 abr · 00:00", type: "positive", group: "Abril 2026" },
  { id: "4", title: "Compra · ON Vista Energy", subtitle: "Nueva posición defensiva USD", amount: "USD 220.00", date: "25 mar · 13:48", type: "negative", group: "Marzo 2026" },
  { id: "5", title: "Ingreso · Dividendo", subtitle: "Acreditación automática", amount: "USD 18.50", date: "11 mar · 10:20", type: "positive", group: "Marzo 2026" }
];

export function HistoryView({ onBack }: HistoryViewProps) {
  const filters = ["Todo", "Compras", "Retiros", "Rendimientos"];

  return (
    <div className="animate-screen-enter pb-24 px-4 pt-20 md:pt-28 lg:px-8 w-full max-w-5xl mx-auto">
      <header className="mb-10 space-y-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-neutral-400 hover:text-mango-300 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-data text-[10px] uppercase tracking-widest">Volver</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-mango-300" />
              <span className="font-data text-[11px] uppercase tracking-widest text-neutral-400">Historial</span>
            </div>
            <h1 className="font-editorial text-[42px] md:text-[64px] font-bold leading-none text-neutral-50">
              Movimiento por
              <br />
              <span className="text-mango-300">movimiento.</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full border px-4 py-2 text-[11px] font-data uppercase tracking-widest transition-colors ${
                index === 0
                  ? "border-mango-500/30 bg-mango-500/10 text-mango-300"
                  : "border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-neutral-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-10">
        {Array.from(new Set(MOVEMENTS.map((item) => item.group))).map((group) => (
          <section key={group} className="space-y-4">
            <div className="border-b border-neutral-800 pb-3">
              <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">{group}</span>
            </div>
            <div className="space-y-2">
              {MOVEMENTS.filter((item) => item.group === group).map((item) => (
                <article
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-base border border-neutral-800 bg-neutral-900/60 px-5 py-4"
                >
                  <div className="space-y-1">
                    <div className="text-[14px] text-neutral-100">{item.title}</div>
                    <div className="text-[12px] text-neutral-500">{item.subtitle}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-data text-[14px] ${item.type === "positive" ? "text-bullish" : item.type === "negative" ? "text-bearish" : "text-neutral-100"}`}>
                      {item.amount}
                    </div>
                    <div className="font-data text-[10px] uppercase tracking-widest text-neutral-600">{item.date}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
