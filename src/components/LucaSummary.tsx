import { Sparkles, ArrowRight, Cpu } from "lucide-react";

interface LucaSummaryProps {
  userName: string;
}

export function LucaSummary({ userName }: LucaSummaryProps) {
  const firstName = userName.split(' ')[0];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-mango-500/10 to-transparent border border-mango-500/20 rounded-base p-6 group transition-all duration-300 hover:border-mango-500/40">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles className="w-16 h-16 text-mango-500" />
      </div>
      
      <div className="relative z-10 space-y-5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-mango-500 to-mango-700 flex items-center justify-center shadow-glow">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <h2 className="font-editorial text-[18px] font-bold text-neutral-50 leading-none">Resumen del Día</h2>
            <p className="font-data text-[9px] uppercase tracking-widest text-mango-300 mt-1 font-bold">Luca AI Intelligence</p>
          </div>
        </div>

        <p className="font-body text-[14px] text-neutral-200 leading-relaxed italic">
          "Hola {firstName}, hoy el **CCL cerró a $1.150**. Tus activos en **CEDEARs** subieron un 2.1%. ¿Querés que analicemos rotar a **Bonos CER**?"
        </p>

        <button className="bg-mango-300 hover:bg-mango-100 text-neutral-950 px-5 py-2 rounded-micro font-body font-bold text-[11px] uppercase tracking-widest transition-all shadow-glow flex items-center space-x-2">
          <span>Charlar con Luca</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  );
}
