import * as React from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";
import { InvestmentProfile } from "../types";

interface OnboardingViewProps {
  onBack: () => void;
  onComplete: (profile: InvestmentProfile) => void;
}

const GOAL_OPTIONS = ["Mi casa", "Jubilación", "Educación", "Viajar", "Emergencias", "Otro"];
const VOLATILITY_OPTIONS = [
  { id: "panic", label: "Retiro todo inmediatamente" },
  { id: "wait", label: "Me preocupo pero espero" },
  { id: "long", label: "No me afecta, es de largo plazo" }
];

export function OnboardingView({ onBack, onComplete }: OnboardingViewProps) {
  const [step, setStep] = React.useState(1);
  const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);
  const [horizon, setHorizon] = React.useState(3);
  const [volatility, setVolatility] = React.useState("wait");
  const [capital, setCapital] = React.useState(150);

  const dots = [1, 2, 3, 4, 5];
  const computedProfile: InvestmentProfile =
    volatility === "panic" ? "Conservador" : horizon >= 5 && volatility === "long" ? "Dinámico" : "Moderado";

  return (
    <div className="animate-screen-enter min-h-screen px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-neutral-400 hover:text-mango-300 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-data text-[10px] uppercase tracking-widest">Salir del onboarding</span>
        </button>

        {step === 1 ? (
          <section className="rounded-base border border-neutral-800 bg-neutral-950 px-6 py-12 md:px-10 md:py-16">
            <div className="space-y-8">
              <h1 className="font-editorial text-[48px] md:text-[72px] font-bold leading-none text-neutral-50">
                Tu plata,
                <br />
                <span className="text-mango-300">trabajando.</span>
              </h1>
              <p className="max-w-xl text-[18px] leading-relaxed text-neutral-300">
                Soy Luca. Te voy a ayudar a proteger tus ahorros de la inflación, sin tecnicismos y sin apuro.
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Button size="lg" onClick={() => setStep(2)}>
                  Empezar
                </Button>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-mango-300" />
                  <span className="font-data text-[10px] uppercase tracking-widest text-neutral-400">AAGI CNV · Caja de Valores</span>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-base border border-neutral-800 bg-neutral-900/70 p-6 md:p-8 space-y-8">
            <header className="flex items-center justify-between">
              <span className="font-data text-[10px] uppercase tracking-widest text-neutral-500">Paso {Math.min(step, 5)} de 5</span>
              <div className="flex gap-2">
                {dots.map((dot) => (
                  <span
                    key={dot}
                    className={`h-2.5 w-2.5 rounded-full ${step >= dot + 1 ? "bg-mango-300" : "bg-neutral-700"}`}
                  />
                ))}
              </div>
            </header>

            {step === 2 && (
              <>
                <h2 className="font-editorial text-[32px] md:text-[44px] text-neutral-50">¿Para qué querés ahorrar?</h2>
                <div className="flex flex-wrap gap-3">
                  {GOAL_OPTIONS.map((goal) => {
                    const active = selectedGoals.includes(goal);
                    return (
                      <button
                        key={goal}
                        onClick={() =>
                          setSelectedGoals((current) =>
                            current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]
                          )
                        }
                        className={`rounded-full border px-4 py-3 text-[12px] font-data uppercase tracking-widest transition-colors ${
                          active
                            ? "border-mango-500/30 bg-mango-500/10 text-mango-300"
                            : "border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-neutral-100"
                        }`}
                      >
                        {goal}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-editorial text-[32px] md:text-[44px] text-neutral-50">¿En cuántos años lo vas a necesitar?</h2>
                <div className="space-y-6">
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={horizon}
                    onChange={(event) => setHorizon(Number(event.target.value))}
                    className="w-full accent-[#FFB800]"
                  />
                  <div className="flex justify-between font-data text-[10px] uppercase tracking-widest text-neutral-500">
                    <span>1</span>
                    <span>3</span>
                    <span>5</span>
                    <span>10+</span>
                  </div>
                  <div className="font-data text-[28px] text-mango-300">{horizon} años</div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-editorial text-[32px] md:text-[44px] text-neutral-50">
                  Si tu inversión baja un 10% mañana, ¿qué harías?
                </h2>
                <div className="space-y-3">
                  {VOLATILITY_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setVolatility(option.id)}
                      className={`w-full rounded-base border px-4 py-4 text-left text-[15px] transition-colors ${
                        volatility === option.id
                          ? "border-mango-500/30 bg-mango-500/10 text-neutral-50"
                          : "border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-neutral-100"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h2 className="font-editorial text-[32px] md:text-[44px] text-neutral-50">¿Con cuánto te gustaría empezar?</h2>
                <p className="text-[14px] text-neutral-400">Podés hacerlo desde USD 10.</p>
                <div className="flex items-center gap-4">
                  <Button variant="secondary" onClick={() => setCapital((current) => Math.max(10, current - 10))}>-</Button>
                  <div className="font-data text-[32px] text-neutral-50">USD {capital}</div>
                  <Button variant="secondary" onClick={() => setCapital((current) => current + 10)}>+</Button>
                </div>
              </>
            )}

            {step === 6 && (
              <>
                <h2 className="font-editorial text-[36px] md:text-[52px] text-neutral-50">
                  Sos un inversor <span className="text-mango-300">{computedProfile}</span>
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-300">
                  Tu cartera sugerida equilibra liquidez, renta fija y crecimiento global según el horizonte y la tolerancia que marcaste.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ProfileSplit label="FCI / ONs" value={computedProfile === "Conservador" ? "60%" : computedProfile === "Moderado" ? "40%" : "25%"} />
                  <ProfileSplit label="CEDEARs" value={computedProfile === "Conservador" ? "15%" : computedProfile === "Moderado" ? "30%" : "45%"} />
                  <ProfileSplit label="Lecaps / CER" value={computedProfile === "Conservador" ? "25%" : computedProfile === "Moderado" ? "30%" : "30%"} />
                </div>
              </>
            )}

            <footer className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
              <Button variant="secondary" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1}>
                Anterior
              </Button>
              {step < 6 ? (
                <Button onClick={() => setStep((current) => current + 1)} disabled={step === 2 && selectedGoals.length === 0}>
                  Siguiente
                </Button>
              ) : (
                <Button onClick={() => onComplete(computedProfile)}>Ver mi cartera</Button>
              )}
            </footer>
          </section>
        )}
      </div>
    </div>
  );
}

function ProfileSplit({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-base border border-neutral-800 bg-neutral-950/60 p-5">
      <div className="font-data text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-3 font-data text-[24px] text-mango-300">{value}</div>
    </div>
  );
}
