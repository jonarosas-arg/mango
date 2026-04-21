import { Wallet, Landmark, Plus } from "lucide-react";

interface WalletHeaderProps {
  availableBalanceArs: number;
  availableBalanceUsd: number;
}

export function WalletHeader({ availableBalanceArs, availableBalanceUsd }: WalletHeaderProps) {
  return (
    <section className="bg-linear-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-base overflow-hidden shadow-2xl">
      <div className="p-5 md:p-6 space-y-5 md:space-y-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-2 md:p-2.5 bg-neutral-800 rounded-full text-mango-300 border border-neutral-700">
              <Wallet className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <h3 className="font-editorial text-[16px] md:text-[18px] font-bold text-neutral-50 leading-none">Efectivo</h3>
          </div>
          <div className="flex items-center space-x-1.5 md:space-x-2">
            <button className="flex items-center space-x-1.5 p-1.5 md:p-2 text-neutral-400 hover:text-neutral-50 hover:bg-neutral-800 rounded-micro transition-all border border-neutral-800/50">
              <Landmark className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="font-body font-bold text-[9px] md:text-[10px] uppercase tracking-widest">Retirar</span>
            </button>
            <button className="flex items-center space-x-1 bg-mango-300 hover:bg-mango-100 text-neutral-950 px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-micro font-body font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-glow whitespace-nowrap">
              <Plus className="h-3 w-3 md:h-3.5 md:w-3.5" />
              <span>Cargar</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <div className="bg-neutral-950/50 border border-neutral-800 p-3 md:p-4 rounded-micro group hover:border-mango-500/30 transition-colors">
            <span className="font-data text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-500 block mb-1">ARS</span>
            <span className="font-mono text-lg md:text-xl text-neutral-50 leading-none block">
              ${availableBalanceArs?.toLocaleString('es-AR')}
            </span>
          </div>
          <div className="bg-neutral-950/50 border border-neutral-800 p-3 md:p-4 rounded-micro group hover:border-mango-500/30 transition-colors">
            <span className="font-data text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-500 block mb-1">USD</span>
            <span className="font-mono text-lg md:text-xl text-mango-300 leading-none block">
              u$s{availableBalanceUsd?.toLocaleString('en-US')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
