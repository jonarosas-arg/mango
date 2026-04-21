# Wireframes ASCII — Mango MVP

Wireframes en formato ASCII para las pantallas principales del MVP de Mango, la plataforma de inversión asistida por IA para pequeños inversores en Argentina.

**Basado en:**
- PRD_Mango_MVP.md
- Design.md (Editorial Financial Terminal v2.0)
- mango_identidad_verbal.md

---

## 1. HOME / DASHBOARD

```
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │ ← Header 56px
│ ║ MANGO      [🛡 AAGI CNV]         🔔      ║ │   --neutral-900
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│  Buenos días, Martín.                          │ ← Playfair 28px
│  ────────────────────────────────────────────  │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ ╔══════════════════════════════════════╗ │ │ ← Portfolio Card
│  │ ║ TU PORTAFOLIO                        ║ │ │   Glassmorphism
│  │ ╠══════════════════════════════════════╣ │ │   blur(24px)
│  │ ║                                      ║ │ │
│  │ ║  USD 8,420.50                       ║ │ │ ← DM Mono 36px
│  │ ║  ARS 8.462.341,00                   ║ │ │ ← DM Mono 14px muted
│  │ ║                                      ║ │ │
│  │ ║  ↑ +12.4%   +USD 923   este mes    ║ │ │ ← Badge bullish
│  │ ║                                      ║ │ │
│  │ ║  ──────────────────────────────────  ║ │ │
│  │ ║                                      ║ │ │
│  │ ║  DISTRIBUCIÓN                        ║ │ │ ← DM Mono 11px
│  │ ║                                      ║ │ │
│  │ ║  ■ FCI MM      20%   USD 1.684  ↑3% ║ │ │ ← Tabular nums
│  │ ║  ■ Lecaps      15%   USD 1.263  ↑8% ║ │ │   alineados
│  │ ║  ■ ONs         25%   USD 2.105  ↑5% ║ │ │
│  │ ║  ■ CEDEARs     35%   USD 2.947 ↑22% ║ │ │
│  │ ║  ■ AL30         5%   USD   421  ↓1% ║ │ │
│  │ ║                                      ║ │ │
│  │ ║  [Ver historial completo →]          ║ │ │ ← Ghost link
│  │ ╚══════════════════════════════════════╝ │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │▌MI CASA                        [Editar] │ │ ← Meta Card
│  ├──────────────────────────────────────────┤ │   Border-left
│  │                                          │ │   3px --mango-500
│  │  "Para la entrada del depto"            │ │ ← Playfair 18px
│  │                                          │ │   italic
│  │  ████████████████████░░░░░░░  68%       │ │ ← Progress bar
│  │  USD 6.800 · de USD 10.000              │ │   animado
│  │                                          │ │
│  │  PROYECCIÓN    A este ritmo, llegás en: │ │
│  │  ↗  8 meses   [Agosto 2026]             │ │ ← DM Mono
│  └──────────────────────────────────────────┘ │   --mango-300
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ 🟠 LUCA                                  │ │ ← Luca Quick Card
│  ├──────────────────────────────────────────┤ │
│  │                                          │ │
│  │  El mercado tuvo movimientos esta       │ │ ← DM Sans 15px
│  │  semana, pero tu cartera sigue el plan. │ │   mensaje
│  │  ¿Querés que te cuente más?             │ │   contextual
│  │                                          │ │
│  │  [Hablar con Luca →]                    │ │ ← Primary button
│  └──────────────────────────────────────────┘ │
│                                                │
│                                                │
│                                                │
├────────────────────────────────────────────────┤
│ ╔════════════════════════════════════════════╗ │ ← Tab Bar 64px
│ ║  🏠        📊        💬         👤       ║ │   Sticky bottom
│ ║ Inicio   Cartera   Luca     Perfil       ║ │   safe-area
│ ║  ●         ○         ○          ○        ║ │
│ ╚════════════════════════════════════════════╝ │
└────────────────────────────────────────────────┘
```

**Notas de interacción:**
- Scroll vertical suave
- Portfolio card con tap → navega a /cartera
- Fila de instrumento con tap → /detalle-instrumento
- Meta card: progress bar anima width al entrar en viewport
- Luca card: mensaje dinámico según contexto del usuario
- Tab bar: indicador activo con dot --mango-300 debajo

---

## 2. CHAT CON LUCA

```
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │ ← Header 56px
│ ║ ←  Volver      Luca                  ⋯   ║ │
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │ ← Chat area
│                                                │   Scroll auto
│      ┌────────────────────────────────────┐   │   bottom
│      │ Hola, soy Luca. Voy a ayudarte a  │   │
│      │ entender cómo y dónde poner tus   │   │ ← Bubble Luca
│      │ ahorros para que no los coma la   │   │   bg --neutral-800
│      │ inflación. Sin tecnicismos, sin   │   │   radius: 0 4px 4px 4px
│      │ apuros. ¿Arrancamos?              │   │   DM Sans 15px
│      └────────────────────────────────────┘   │
│  🟠 Luca · ahora                               │ ← Avatar + timestamp
│                                                │   DM Mono 10px muted
│                                                │
│                  ┌────────────────────────┐    │
│                  │ Sí, empecemos.        │    │ ← Bubble Usuario
│                  └────────────────────────┘    │   bg rgba(122,46,0,0.3)
│                                                │   border --mango-700
│                                                │   radius: 4px 0 4px 4px
│      ┌────────────────────────────────────┐   │
│      │ Perfecto. Contame: ¿para qué     │   │
│      │ querés juntar plata? ¿Tenés algo │   │
│      │ en mente o todavía no está tan   │   │
│      │ claro?                            │   │
│      └────────────────────────────────────┘   │
│  🟠 Luca · ahora                               │
│                                                │
│                                                │
│      ┌────────────────────────────────────┐   │
│      │ Elegí una o más opciones:         │   │
│      └────────────────────────────────────┘   │
│  🟠 Luca                                       │
│                                                │
│      ┌──────────┬──────────┬──────────────┐   │ ← Quick replies
│      │ Mi casa  │Jubilación│  Educación   │   │   Pills scroll
│      └──────────┴──────────┴──────────────┘   │   horizontal
│      ┌──────────┬──────────┬──────────────┐   │   border --neutral-600
│      │  Viajar  │Emergencias│    Otro     │   │   tap → send
│      └──────────┴──────────┴──────────────┘   │
│                                                │
│                                                │
│                  ┌────────────────────────┐    │
│                  │ Mi casa               │    │
│                  └────────────────────────┘    │
│                                                │
│      ┌────────────────────────────────────┐   │
│      │ Tiene todo el sentido. Lo que    │   │
│      │ tenés en pesos parado pierde     │   │
│      │ valor solo — ese es exactamente  │   │
│      │ el problema que Mango te ayuda a │   │
│      │ resolver.                         │   │
│      │                                   │   │
│      │ Te voy a hacer unas preguntas    │   │
│      │ para entender qué te conviene.   │   │
│      │ ¿Cuánto tiempo podrías dejar la  │   │
│      │ plata sin tocarla si hiciera     │   │
│      │ falta?                            │   │
│      └────────────────────────────────────┘   │
│  🟠 Luca · ahora                               │
│                                                │
│      ┌──────────┬──────────┬──────────────┐   │
│      │ < 1 año  │  1-3     │   3-5 años   │   │
│      └──────────┴──────────┴──────────────┘   │
│      ┌──────────┬──────────┬──────────────┐   │
│      │  5-10    │   10+    │  Sin límite  │   │
│      └──────────┴──────────┴──────────────┘   │
│                                                │
│      ┌────────────────────────────────────┐   │
│      │ ● ● ●                             │   │ ← Typing indicator
│      └────────────────────────────────────┘   │   pulse animation
│  🟠 Luca está escribiendo...                   │   1.2s infinite
│                                                │
│                                                │
│                                                │
├────────────────────────────────────────────────┤
│ ╔════════════════════════════════════════════╗ │ ← Input bar 56px
│ ║ [Escribí tu mensaje...]            Enviar║ │   --neutral-900
│ ╚════════════════════════════════════════════╝ │   Border-top
└────────────────────────────────────────────────┘   --neutral-700
```

**Notas de interacción:**
- Auto-scroll al último mensaje
- Typing area expande height con contenido (max 3 líneas)
- Quick replies: tap envía respuesta automáticamente
- Typing indicator: 3 dots con delay escalonado (0, 160ms, 320ms)
- Avatar Luca: círculo 24px · gradiente --mango-500 → --mango-700
- Timestamps: visibles al tap/long-press del bubble
- Disclaimer legal: primer mensaje de cada sesión (DM Sans 11px --neutral-400)

---

## 3. OBJETIVOS / METAS

```
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │ ← Header
│ ║ METAS                             +  Nuevo ║ │
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│  Tus objetivos de ahorro                       │ ← Playfair 28px
│  ────────────────────────────────────────────  │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │▌MI CASA                        [Editar] │ │ ← Meta Card #1
│  ├──────────────────────────────────────────┤ │   Activa
│  │                                          │ │
│  │  "Para la entrada del depto"            │ │
│  │                                          │ │
│  │  ████████████████████░░░░░░░  68%       │ │ ← Progress
│  │                                          │ │   Width animado
│  │  USD 6.800,00  ·  de USD 10.000,00      │ │   on mount
│  │                                          │ │
│  │  PROYECCIÓN    A este ritmo, llegás en: │ │
│  │  ↗  8 meses   [Agosto 2026]             │ │
│  │                                          │ │
│  │  ──────────────────────────────────────  │ │
│  │                                          │ │
│  │  APORTES RECIENTES                      │ │ ← DM Mono 11px
│  │  • USD 150  →  15 abr                   │ │   uppercase
│  │  • USD 200  →  01 abr                   │ │
│  │  • USD 100  →  22 mar                   │ │
│  │                                          │ │
│  │  [Ver historial completo]               │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │▌VACACIONES 2027                [Editar] │ │ ← Meta Card #2
│  ├──────────────────────────────────────────┤ │   En progreso
│  │                                          │ │
│  │  "Viaje a Europa — 15 días"             │ │
│  │                                          │ │
│  │  ████████░░░░░░░░░░░░░░░░░░░░  32%       │ │
│  │                                          │ │
│  │  USD 1.920,00  ·  de USD 6.000,00       │ │
│  │                                          │ │
│  │  PROYECCIÓN    A este ritmo, llegás en: │ │
│  │  ↗  14 meses   [Junio 2027]             │ │
│  │                                          │ │
│  │  [Ajustar objetivo]                     │ │ ← Ghost button
│  └──────────────────────────────────────────┘ │
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │▌FONDO DE EMERGENCIA            [Editar] │ │ ← Meta Card #3
│  ├──────────────────────────────────────────┤ │   Completada
│  │                                          │ │   border-left
│  │  "6 meses de gastos básicos"            │ │   --semantic-bullish
│  │                                          │ │
│  │  ████████████████████████████  100%     │ │
│  │                                          │ │
│  │  ✓  USD 4.500,00  ·  de USD 4.500,00    │ │
│  │                                          │ │
│  │  ✓ ¡Meta cumplida en Marzo 2026!        │ │ ← Badge green
│  │                                          │ │
│  │  [Redefinir meta]  [Archivar]           │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│                                                │
│                                                │
│                                                │
├────────────────────────────────────────────────┤
│ ╔════════════════════════════════════════════╗ │
│ ║  🏠        📊        💬         👤       ║ │
│ ║ Inicio   Cartera   Luca     Perfil       ║ │
│ ║  ○         ○         ○          ○        ║ │
│ ╚════════════════════════════════════════════╝ │
└────────────────────────────────────────────────┘
```

**Notas de interacción:**
- Tap en [+ Nuevo] → Bottom sheet: "¿Para qué estás ahorrando?" con input libre
- Tap en card → Expandir detalles inline o navegar a /meta-detalle
- Progress bar: animación de 0→X% al scroll into view (500ms ease-out)
- Swipe left en card → [Editar] [Archivar] actions

**Estado vacío (sin metas):**
```
┌──────────────────────────────────────────┐
│                                          │
│        [ícono Target 40px --neutral-600] │
│                                          │
│   ¿Para qué estás ahorrando?            │ ← Playfair 20px
│                                          │
│   Definir una meta hace que cada        │ ← DM Sans 14px
│   peso tenga sentido.                   │   --neutral-400
│                                          │
│   [Contarle a Luca →]                   │ ← Primary button
│                                          │
└──────────────────────────────────────────┘
```

---

## 4. CARTERA / PORTAFOLIO

```
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │
│ ║ ←  Portafolio                        ⋯   ║ │
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ ╔══════════════════════════════════════╗ │ │ ← Glassmorphism
│  │ ║ TU PORTAFOLIO                        ║ │ │   Card
│  │ ╠══════════════════════════════════════╣ │ │
│  │ ║                                      ║ │ │
│  │ ║  USD 8,420.50                       ║ │ │ ← DM Mono 36px
│  │ ║  ARS 8.462.341,00                   ║ │ │   tabular-nums
│  │ ║                                      ║ │ │
│  │ ║  ↑ +12.4%   +USD 923   este mes    ║ │ │
│  │ ║  ↗ +54.1%   desde el inicio         ║ │ │
│  │ ╚══════════════════════════════════════╝ │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ [Gráfico de evolución del portafolio]   │ │ ← Chart area
│  │                                          │ │   160px height
│  │     ╱╲                                   │ │   Line chart
│  │    ╱  ╲      ╱╲                         │ │   --mango-300
│  │   ╱    ╲    ╱  ╲    ╱                   │ │
│  │  ╱      ╲╲╱    ╲  ╱                     │ │
│  │ ╱              ╲╱                       │ │
│  │                                          │ │
│  │ [1M] [3M] [6M] [1A] [Todo]              │ │ ← Period tabs
│  └──────────────────────────────────────────┘ │
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  DISTRIBUCIÓN POR INSTRUMENTO                  │ ← DM Mono 11px
│                                                │   uppercase
│  ┌──────────────────────────────────────────┐ │
│  │ ■  CEDEAR · AAPL       35%              │ │ ← Fila instrumento
│  │    Acciones globales                     │ │   Tap → /detalle
│  │                                          │ │
│  │         USD 2.947,00    ↑ +22.1%        │ │ ← Tabular nums
│  │                         +USD 531         │ │   alineados
│  └──────────────────────────────────────────┘ │   derecha
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ ■  ON · Vista Energy    25%             │ │
│  │    Obligación Negociable                 │ │
│  │                                          │ │
│  │         USD 2.105,00    ↑ +5.4%         │ │
│  │                         +USD 108         │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ ■  FCI Money Market     20%             │ │
│  │    Liquidez inmediata                    │ │
│  │                                          │ │
│  │         USD 1.684,00    ↑ +3.1%         │ │
│  │                         +USD  50         │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ ■  Lecaps / CER         15%             │ │
│  │    Renta fija pesos                      │ │
│  │                                          │ │
│  │         USD 1.263,00    ↑ +8.2%         │ │
│  │                         +USD  95         │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ ■  Bono AL30             5%             │ │
│  │    Bono soberano USD                     │ │
│  │                                          │ │
│  │         USD   421,00    ↓ −1.2%         │ │ ← Bearish
│  │                         −USD   5         │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │ [Depositar]             [Ver historial] │ │ ← CTAs sticky
│  └──────────────────────────────────────────┘ │   o bottom
│                                                │
├────────────────────────────────────────────────┤
│ ╔════════════════════════════════════════════╗ │
│ ║  🏠        📊        💬         👤       ║ │
│ ║ Inicio   Cartera   Luca     Perfil       ║ │
│ ║  ○         ●         ○          ○        ║ │
│ ╚════════════════════════════════════════════╝ │
└────────────────────────────────────────────────┘
```

**Notas de interacción:**
- Scroll vertical fluido con scroll snap opcional en cards
- Hover en fila de instrumento (desktop):
  - `background: rgba(255,184,0,0.04)`
  - `border-left: 2px solid --mango-300`
  - `transition: all 150ms ease`
- Tap en fila → Navega a /detalle-instrumento con transition slide
- Chart period tabs: estado activo con underline --mango-300
- Chart data: fetch on mount + skeleton loader mientras carga
- Pull-to-refresh: actualiza cotizaciones + portfolio value

**Estado vacío (cuenta nueva sin inversiones):**
```
┌──────────────────────────────────────────┐
│ ╔══════════════════════════════════════╗ │
│ ║ TU PORTAFOLIO                        ║ │
│ ╠══════════════════════════════════════╣ │
│ ║                                      ║ │
│ ║        [ícono Briefcase 48px]        ║ │ ← --neutral-600
│ ║                                      ║ │   thin stroke
│ ║  Tu portafolio está esperándote.    ║ │ ← Playfair 22px
│ ║                                      ║ │
│ ║  Depositá tus primeros fondos       ║ │ ← DM Sans 15px
│ ║  y Luca te ayuda a invertirlos.     ║ │   --neutral-400
│ ║                                      ║ │
│ ║  [Depositar con Luca →]             ║ │ ← Primary button
│ ║                                      ║ │
│ ╚══════════════════════════════════════╝ │
└──────────────────────────────────────────┘
```

---

## 5. DETALLE DE INSTRUMENTO

```
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │
│ ║ ←           CEDEAR · AAPL            ⋯   ║ │
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│  Apple Inc.                                    │ ← Playfair 28px
│  ┌──────────────────────┐                     │
│  │ ■ CEDEAR · Mega-cap  │                     │ ← Chip
│  └──────────────────────┘                     │
│                                                │
│  USD 185.40    ↑ +2.1%  hoy                   │ ← DM Mono 32px
│                                                │   + badge
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │                                    ╱     │ │ ← Chart 120px
│  │                              ╱╲  ╱       │ │   Area fill
│  │                        ╱╲  ╱  ╲╱        │ │   --mango-300
│  │                  ╱╲  ╱  ╲╱              │ │   opacity 0.3
│  │            ╱╲  ╱  ╲╱                    │ │
│  │      ╱╲  ╱  ╲╱                          │ │
│  │ ╱╲╱  ╲╱                                 │ │
│  │                                          │ │
│  │ [1D] [7D] [1M] [3M] [1A]                │ │ ← Period selector
│  └──────────────────────────────────────────┘ │
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  EN TU CARTERA                                 │ ← Section
│                                                │
│  USD 2.947,00            35% del portafolio   │ ← DM Mono
│                                                │
│  +USD 531   ↑ +22.1%   desde tu compra       │ ← Badge bullish
│                                                │
│  Primera compra: 12 enero 2026                 │ ← DM Mono 13px
│  Última compra:  05 abril 2026                 │   --neutral-400
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  QUÉ ES ESTO                                   │
│                                                │
│  Un CEDEAR es una forma de comprar acciones   │ ← DM Sans 15px
│  de Apple desde Argentina, en pesos, con      │   --neutral-200
│  cobertura cambiaria. Comprás en pesos pero   │   explicación
│  el valor sigue al dólar.                     │   simple
│                                                │
│  [Luca, explicame más →]                      │ ← Link --mango-300
│                                                │
│  ────────────────────────────────────────────  │
│                                                │
│  ÚLTIMAS OPERACIONES                           │
│                                                │
│  ↑ Compra  USD 150    15 abr · 14:32         │ ← DM Mono tabular
│  ↑ Compra  USD  85    05 abr · 11:20         │
│  ↑ Compra  USD 200    12 ene · 16:45         │
│                                                │
│  [Ver historial completo]                     │
│                                                │
│                                                │
├────────────────────────────────────────────────┤
│ ╔════════════════════════════════════════════╗ │ ← Sticky footer
│ ║ [Comprar más]         [Ver historial]     ║ │   CTAs
│ ╚════════════════════════════════════════════╝ │
└────────────────────────────────────────────────┘
```

**Notas de interacción:**
- Chart: tap en período cambia el rango temporal del gráfico
- Area chart con gradiente: fill opacity 0.3 bajo la línea
- "Luca, explicame más" → Abre chat con contexto pre-cargado
- Swipe down → Pull to refresh para actualizar cotización
- [Comprar más] → Bottom sheet con stepper de monto

---

## 6. ONBOARDING — PRIMERA SESIÓN CON LUCA

```
┌────────────────────────────────────────────────┐
│                                                │
│                                                │
│                                                │
│                                                │
│                                                │
│   Tu plata,                                    │ ← Playfair 56px
│   trabajando.                                  │   Line 2: --mango-300
│                                                │
│                                                │
│   Soy Luca. Te voy a ayudar a proteger        │ ← DM Sans 18px
│   tus ahorros de la inflación — sin           │   --neutral-200
│   tecnicismos.                                 │
│                                                │
│                                                │
│                                                │
│                                                │
│                                                │
│   [Empezar →]                                  │ ← Primary LG
│                                                │   bottom
│                                                │
│   [🛡 AAGI CNV · Caja de Valores]             │ ← Pill regulatoria
│                                                │   sutil
└────────────────────────────────────────────────┘

STEP 2/5 — Objetivo
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │
│ ║ PASO 2 DE 5                         ●●○○○ ║ │ ← Progress dots
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│      ┌────────────────────────────────────┐   │
│      │ ¿Para qué querés ahorrar?         │   │ ← Luca pregunta
│      └────────────────────────────────────┘   │
│  🟠 Luca                                       │
│                                                │
│                                                │
│   Elegí una o más opciones:                   │ ← DM Sans 15px
│                                                │
│   ┌──────────┬──────────┬──────────────────┐  │
│   │ Mi casa  │Jubilación│   Educación     │  │ ← Pills
│   └──────────┴──────────┴──────────────────┘  │   multi-select
│   ┌──────────┬──────────┬──────────────────┐  │   toggle on tap
│   │  Viajar  │Emergencias│      Otro       │  │
│   └──────────┴──────────┴──────────────────┘  │
│                                                │
│                                                │
│                                                │
│   [Siguiente →]                                │ ← Disabled hasta
│                                                │   selección
└────────────────────────────────────────────────┘

STEP 3/5 — Horizonte temporal
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │
│ ║ PASO 3 DE 5                         ●●●○○ ║ │
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│      ┌────────────────────────────────────┐   │
│      │ ¿En cuántos años lo vas a        │   │
│      │ necesitar?                        │   │
│      └────────────────────────────────────┘   │
│  🟠 Luca                                       │
│                                                │
│                                                │
│   ┌────────────────────────────────────────┐  │
│   │                                        │  │ ← Slider visual
│   │  ○────────●──────────────────────────  │  │   thumb draggable
│   │  0    1    3    5    10   20+   años  │  │
│   │                                        │  │
│   └────────────────────────────────────────┘  │
│                                                │
│                3 años                          │ ← DM Mono 24px
│                                                │   valor seleccionado
│                                                │
│                                                │
│   [← Anterior]               [Siguiente →]    │
│                                                │
└────────────────────────────────────────────────┘

STEP 4/5 — Tolerancia a volatilidad
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │
│ ║ PASO 4 DE 5                         ●●●●○ ║ │
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│      ┌────────────────────────────────────┐   │
│      │ Si tu inversión baja un 10%       │   │
│      │ mañana, ¿qué harías?              │   │
│      └────────────────────────────────────┘   │
│  🟠 Luca                                       │
│                                                │
│                                                │
│   ┌────────────────────────────────────────┐  │
│   │  Retiro todo inmediatamente           │  │ ← Radio buttons
│   └────────────────────────────────────────┘  │   single select
│                                                │
│   ┌────────────────────────────────────────┐  │
│   │  Me preocupo pero espero              │  │
│   └────────────────────────────────────────┘  │
│                                                │
│   ┌────────────────────────────────────────┐  │
│   │  ● No me afecta, es de largo plazo    │  │ ← Selected
│   └────────────────────────────────────────┘  │
│                                                │
│                                                │
│   [← Anterior]               [Siguiente →]    │
│                                                │
└────────────────────────────────────────────────┘

STEP 5/5 — Resultado: Perfil asignado
┌────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════╗ │
│ ║ PASO 5 DE 5                         ●●●●● ║ │
│ ╚════════════════════════════════════════════╝ │
├────────────────────────────────────────────────┤
│                                                │
│                                                │
│   Sos un inversor                              │ ← Playfair 40px
│   Moderado                                     │   --mango-300
│                                                │
│                                                │
│   Tu cartera equilibra estabilidad y          │ ← DM Sans 16px
│   crecimiento. Diversifica entre renta fija   │
│   y acciones globales, con horizonte de 3     │
│   años y tolerancia media a la volatilidad.   │
│                                                │
│                                                │
│   ┌────────────────────────────────────────┐  │
│   │    [Mini donut chart o barras]         │  │ ← Visualización
│   │                                        │  │   simple de
│   │  40% FCI/ONs                           │  │   distribución
│   │  30% CEDEARs                           │  │
│   │  30% Lecaps/CER                        │  │
│   └────────────────────────────────────────┘  │
│                                                │
│                                                │
│   [Ver mi cartera →]                           │ ← Primary CTA
│                                                │
│   [Ajustar perfil]                             │ ← Ghost button
│                                                │
└────────────────────────────────────────────────┘
```

**Notas de onboarding:**
- Animación: texto fade-in staggered · 400ms delay entre líneas
- Progress dots: animan relleno al avanzar (scale-in)
- Slider: thumb con tap/drag · feedback táctil (vibration API si disponible)
- Pills multi-select: border --mango-300 cuando activo · toggle on/off
- Transiciones entre steps: slide horizontal 350ms --ease-decel
- [← Anterior] siempre visible excepto en Step 1
- Resultado: checkmark animado antes de mostrar el perfil

---

## CONVENCIONES VISUALES USADAS

```
BORDES Y CONTENEDORES:
  ┌─┐  │  └─┘   Contenedores normales (--neutral-700)
  ╔═╗  ║  ╚═╝   Contenedores destacados (header, glass)
  ▌              Border-left de acento (3px --mango-500)

ELEMENTOS:
  [Botón]        Botón interactivo
  →  ←  ↑  ↓     Flechas de navegación / dirección
  ↗              Proyección / tendencia positiva
  ●  ○           Indicadores activo/inactivo
  ■              Color dot de instrumento
  ░░░░░          Skeleton loader / progress vacío
  ████           Progress bar lleno
  🟠             Avatar Luca (gradiente mango)
  ⋯  ···         Menú opciones / typing indicator
  ✓              Checkmark de confirmación

TIPOGRAFÍA (anotaciones):
  ← Playfair 28px       Serif para títulos
  ← DM Mono 36px        Mono para datos numéricos
  ← DM Sans 15px        Sans para cuerpo/conversación
  ← uppercase           Labels en mayúsculas

ESPACIADO:
  Basado en grid de 8px
  Separadores:  ─────  (1px --neutral-700)
```

---

## TOKENS CSS APLICADOS EN WIREFRAMES

**Colores:**
- `--neutral-950` canvas base
- `--neutral-900` cards primarias / header
- `--neutral-800` cards secundarias / bubbles Luca
- `--neutral-700` borders y separadores
- `--neutral-600` iconos inactivos
- `--neutral-400` texto muted / timestamps
- `--neutral-200` texto secundario
- `--neutral-50` texto primario
- `--mango-300` CTAs, badges bullish, acentos
- `--mango-500` brand identity, border-left de metas
- `--mango-700` hover states, borders
- `--semantic-bullish` (#10B981) rendimientos positivos
- `--semantic-bearish` (#F43F5E) rendimientos negativos
- `--semantic-neutral` (#3B82F6) CER / datos técnicos

**Tipografía:**
- `--font-editorial` (Playfair Display) → Titulares, metas, hitos emocionales
- `--font-data` (DM Mono) → Cifras, precios, rendimientos, timestamps
- `--font-body` (DM Sans) → Conversación, descripciones, UI

**Espaciado:**
- `--spacing-micro` (4px)
- `--spacing-tight` (8px)
- `--spacing-base` (16px) ← padding estándar
- `--spacing-comfortable` (24px)
- `--spacing-loose` (32px)
- `--spacing-section` (48px)

**Border Radius:**
- `--radius-micro` (2px) → Badges, chips
- `--radius-base` (4px) → **Radio estándar** cards, buttons, inputs
- `--radius-medium` (8px) → Bottom sheets
- `--radius-full` (9999px) → Pills, avatares

**Elevación:**
- `--shadow-card` → Cards sobre canvas
- `--shadow-float` → Glassmorphism portfolio card
- `--shadow-modal` → Bottom sheets, modales

**Motion:**
- `--dur-instant` (80ms) → Tap feedback
- `--dur-fast` (150ms) → Hover transitions
- `--dur-base` (250ms) → Transiciones estándar
- `--dur-enter` (350ms) → Screen transitions
- `--dur-complex` (500ms) → Progress bars, animations
- `--ease-decel` → cubic-bezier(0, 0, 0.2, 1) ← Default
- `--ease-spring` → cubic-bezier(0.34, 1.56, 0.64, 1) → Tap feedback

---

## MOTION IMPLÍCITO EN WIREFRAMES

**Transiciones de pantalla:**
- Slide + fade 350ms `--ease-decel`
- Stagger en listas: 60ms delay incremental

**Feedback táctil:**
- `scale(0.97)` en 80ms `--ease-spring` on tap
- Release: `scale(1)` en 150ms

**Progress bars:**
- Width animado: 0→X% en 500ms `--ease-decel` on mount
- Trigger: IntersectionObserver cuando entra en viewport

**Skeleton loaders:**
- Shimmer: `background-position` animado 1.4s infinite
- Gradiente horizontal: `--neutral-800` → `--neutral-700` → `--neutral-800`

**Chat:**
- Bubble entrada: slide-up + fade 250ms
- Typing indicator: 3 dots · pulse 1.2s infinite · delay escalonado (0, 160ms, 320ms)

**Badges de rendimiento:**
- Flash sutil cuando valor cambia: `background-color` 600ms `--ease-decel`

---

## ACCESIBILIDAD

**Focus-visible:**
- Todos los interactivos tienen `outline: 2px solid --mango-300` offset 3px

**Contraste:**
- Ratios mínimos cumplidos:
  - Texto principal sobre canvas: 19.5:1 (AAA)
  - Mango-300 sobre neutral-950: 9.2:1 (AAA)
  - Texto muted: mínimo 4.5:1 (AA)

**Estados de color:**
- Nunca solo color: siempre acompañado de ícono + texto
- Verde bullish: flecha ↑ + signo `+`
- Rojo bearish: flecha ↓ + signo `−`
- Ámbar warning: ícono ⚠

**Navegación por teclado:**
- Tab order: Header → Portfolio → Metas → Luca → Tab bar
- Atajos: `/` → búsqueda, `L` → Luca, `Esc` → cerrar modales

**Screen readers:**
- `aria-label` en cifras: "ocho mil cuatrocientos veinte dólares"
- `aria-live="polite"` en Luca typing indicator
- `role="alert"` en toasts

---

## RESPONSIVE

**Breakpoints:**
- `sm` (375–767px) → **Móvil primario** · 1 col · 16px margins
- `md` (768–1023px) → Tablet · 2 cols · 24px margins
- `lg` (1024+px) → Desktop · 12 cols · 48px margins

**Adaptaciones clave:**
- Portfolio card glassmorphism: `blur(16px)` mobile → `blur(24px)` desktop
- Tab bar: bottom mobile → sidebar desktop
- Chat: fullscreen mobile → 380px panel desktop
- Typography scale: reduce 10% en mobile para textos > 28px

**Safe areas:**
```css
.header { padding-top: max(16px, env(safe-area-inset-top)); }
.tab-bar { padding-bottom: max(8px, env(safe-area-inset-bottom)); }
```

---

*Wireframes ASCII v1.0 — Mango MVP — Abril 2026*
*Documento vivo — actualizar con cambios de diseño*
