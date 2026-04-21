import { ShieldCheck, Landmark, SlidersHorizontal, Sparkles } from "lucide-react";
import { User } from "../types";

interface ProfileViewProps {
  user: User;
  onStartOnboarding: () => void;
  onOpenHistory: () => void;
}

export function ProfileView({ user, onStartOnboarding, onOpenHistory }: ProfileViewProps) {
  return (
    <div className="animate-screen-enter pb-24 px-4 pt-20 md:pt-28 lg:px-8 w-full max-w-5xl mx-auto space-y-10">
      <header className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-6 items-center">
        <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center text-3xl font-serif">
          {user.name.split(' ')[0][0]}
        </div>
        <div className="space-y-3">
          <div className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Perfil</div>
          <h1 className="font-editorial text-[42px] md:text-[56px] font-bold leading-none text-neutral-50">{user.name}</h1>
          <p className="text-[14px] text-neutral-400">martingonzalez@email.com</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoTile icon={<SlidersHorizontal className="h-4 w-4 text-mango-300" />} label="Perfil de inversor" value={user.profile || "Moderado"} />
        <InfoTile icon={<ShieldCheck className="h-4 w-4 text-bullish" />} label="Verificación KYC" value={user.kycStatus === 'APROBADO' ? 'Verificado' : 'Pendiente'} />
        <InfoTile icon={<Landmark className="h-4 w-4 text-neutral-cer" />} label="Cuenta vinculada" value="1 activa" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-4">
          <h3 className="font-editorial text-[24px] text-neutral-50 italic">Configuración</h3>
          <div className="space-y-2">
            <MenuLink label="Perfil de Inversor" value={user.profile} />
            <MenuLink label="Verificación KYC" value={user.kycStatus === 'APROBADO' ? '✓ Verificado' : 'Pendiente'} />
            <MenuLink label="Cuentas Bancarias" value="1 Vinculada" />
            <MenuLink label="Seguridad (2FA)" value="Activo" />
            <MenuLink label="Notificaciones" value="Push + email" />
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-mango-300" />
              <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Explorar</span>
            </div>
            <p className="text-[14px] leading-relaxed text-neutral-300">
              Rehacer el onboarding puede ayudarte a recalibrar perfil, horizonte y tolerancia a volatilidad.
            </p>
            <button
              onClick={onStartOnboarding}
              className="w-full rounded-base border border-mango-500/30 bg-mango-500/10 px-4 py-4 text-[12px] font-body font-bold uppercase tracking-widest text-mango-300 transition-colors hover:bg-mango-500/15"
            >
              Rehacer onboarding
            </button>
          </div>

          <div className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 space-y-4">
            <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Historial</span>
            <p className="text-[14px] leading-relaxed text-neutral-300">
              Revisá movimientos, rendimientos y retiros recientes desde una sola vista.
            </p>
            <button
              onClick={onOpenHistory}
              className="text-[11px] font-body font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:text-mango-300"
            >
              Abrir historial
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}

function MenuLink({ label, value }: { label: string, value?: string }) {
  return (
    <button className="w-full flex justify-between items-center py-4 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors px-1">
      <span className="text-sm text-neutral-200">{label}</span>
      <span className="text-xs text-neutral-500 font-mono italic">{value}</span>
    </button>
  );
}

function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-base border border-neutral-800 bg-neutral-900/70 p-5">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">{label}</span>
      </div>
      <div className="mt-3 font-data text-[18px] text-neutral-50">{value}</div>
    </div>
  );
}
