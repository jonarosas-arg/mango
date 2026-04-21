# Mango — Design System Documentation
### Editorial Financial Terminal · v2.0 · Abril 2026

> *Un sistema de diseño que vive entre la sofisticación de una revista financiera premium y la precisión de un terminal de datos. Para el inversor que merece herramientas dignas de banca privada.*

---

## ÍNDICE DE VERSIÓN

```
v1.0 → v2.0  |  Gaps resueltos en esta versión:

  [NEW] 10 · Accesibilidad y Contraste (WCAG 2.1 AA)
  [NEW] 11 · Sistema de Iconografía
  [NEW] 12 · Estados de Interacción Completos
  [NEW] 13 · Sistema de Motion y Microinteracciones
  [NEW] 14 · Patrones de Feedback y Error
  [NEW] 15 · Skeleton Loaders y Estados Vacíos
  [NEW] 16 · Pantallas Adicionales (Onboarding, Historial, Detalle)
  [NEW] 17 · Responsive y Adaptaciones por Breakpoint
  [NEW] 18 · Gobierno del Design System (Changelog + Versionado)
  [UPD] 04 · Componentes: estados focus-visible y loading añadidos
  [UPD] 07 · Tokens CSS: nuevas variables de accesibilidad y motion
```

---

## 00 · Filosofía de Diseño

```
Editorial  ×  Técnico  ×  Humano
```

**Editorial Financial Terminal** no es un estilo decorativo. Es una postura: Mango se comunica con la seriedad de *The Economist* y la precisión de Bloomberg, pero habla el idioma de la calle argentina. La Serif en titulares no es nostalgia — es señal de permanencia en un país que conoce demasiado bien lo efímero.

Tres tensiones en equilibrio deliberado:

| Tensión | Polo A | Polo B | Resolución Mango |
|---|---|---|---|
| **Emoción vs. Datos** | Cálida, humana | Fría, técnica | Tipografía Serif en momentos emocionales · Sans en datos |
| **Confianza vs. Acceso** | Institucional, distante | Casual, sin peso | Grid estricto · Lenguaje lunfardo |
| **Urgencia vs. Calma** | Notificaciones agresivas | Silencio total | Alertas contextuales · Dark mode por defecto |

---

## 01 · Paleta de Color — "Mango Maduración"

### 1.1 · Escala Primaria Mango

La escala transita del Amarillo Oro (energía, crecimiento) al Naranja Rojizo (estabilidad, madurez). Cinco tonos que narran el ciclo de maduración de la fruta y del ahorro.

| Token | Nombre | HEX | RGB | Uso |
|---|---|---|---|---|
| `--mango-100` | Mango Claro | `#FFF3C4` | 255, 243, 196 | Highlights, fondos de estado positivo suave |
| `--mango-300` | Mango Vivo | `#FFB800` | 255, 184, 0 | CTA primario, acentos de datos positivos |
| `--mango-500` | Mango Core | `#F5890A` | 245, 137, 10 | Brand identity, logo, iconos activos |
| `--mango-700` | Mango Profundo | `#C9580B` | 201, 88, 11 | Estados pressed, variantes oscuras |
| `--mango-900` | Mango Tierra | `#7A2E00` | 122, 46, 0 | Sombras de marca, texto sobre fondo claro |

```
Degradado de Maduración (uso en backgrounds de marca):
linear-gradient(135deg, #FFB800 0%, #F5890A 50%, #C9580B 100%)
```

---

### 1.2 · Base Neutra — Dark Mode

Escala de grises de saturación cero. El Dark Mode es el modo primario de Mango: los terminales financieros no son blancos.

| Token | Nombre | HEX | Luminancia | Uso |
|---|---|---|---|---|
| `--neutral-950` | Terminal Black | `#0A0A0A` | 3.9% | Canvas base, fondo de pantalla |
| `--neutral-900` | Surface Deep | `#141414` | 6.3% | Cards de primer nivel |
| `--neutral-800` | Surface Mid | `#1E1E1E` | 10.1% | Cards secundarias, paneles |
| `--neutral-700` | Surface High | `#2A2A2A` | 14.8% | Bordes, separadores |
| `--neutral-600` | Muted Strong | `#3D3D3D` | 21.3% | Iconos inactivos, placeholders |
| `--neutral-400` | Text Muted | `#737373` | 42.1% | Labels secundarios, timestamps |
| `--neutral-200` | Text Secondary | `#B3B3B3` | 68.4% | Cuerpo de texto, descripciones |
| `--neutral-50` | Text Primary | `#F5F5F5` | 95.7% | Titulares, datos clave |

---

### 1.3 · Semántica Financiera

| Token | Nombre | HEX | RGB | Significado |
|---|---|---|---|---|
| `--semantic-bullish` | Verde Esmeralda | `#10B981` | 16, 185, 129 | Subas, rendimiento positivo, KPIs verdes |
| `--semantic-bullish-subtle` | Esmeralda Suave | `#064E3B` | 6, 78, 59 | Fondos de estado bullish |
| `--semantic-bearish` | Rojo Coral | `#F43F5E` | 244, 63, 94 | Bajas, alertas de pérdida, advertencias |
| `--semantic-bearish-subtle` | Coral Suave | `#4C0519` | 76, 5, 25 | Fondos de estado bearish |
| `--semantic-neutral` | Azul Acero | `#3B82F6` | 59, 130, 246 | CER, inflación, datos neutrales/técnicos |
| `--semantic-neutral-subtle` | Acero Suave | `#1E3A5F` | 30, 58, 95 | Fondos de instrumentos pesos/CER |
| `--semantic-warning` | Ámbar | `#F59E0B` | 245, 158, 11 | KYC pendiente, estados intermedios |

---

## 02 · Tipografía

### 2.1 · Sistema Tipográfico Dual

```
SERIF (Confianza / Emoción)    ×    MONO (Datos / Técnico)
Playfair Display                     DM Mono
                               ×
                               SANS (Conversación / UI)
                               DM Sans
```

**Filosofía**: La Serif aparece cuando Mango habla de sueños, metas y decisiones humanas. La Mono aparece cuando Mango habla de números, tasas y ejecución. La Sans es la voz de Luca: legible, cálida, directa.

---

### 2.2 · Escala Tipográfica Completa

| Token | Font Family | Size | Weight | Line Height | Letter Spacing | Uso |
|---|---|---|---|---|---|---|
| `typescale-hero` | Playfair Display | 56px | 700 | 1.1 | -0.02em | Hero sections, onboarding emocional |
| `typescale-h1` | Playfair Display | 40px | 700 | 1.15 | -0.015em | Titulares de pantalla |
| `typescale-h2` | Playfair Display | 28px | 600 | 1.2 | -0.01em | Subtítulos de sección |
| `typescale-h3` | Playfair Display | 22px | 600 | 1.25 | -0.005em | Titulares de card |
| `typescale-label` | DM Sans | 13px | 500 | 1.4 | 0.06em | Labels UI, metadata (uppercase) |
| `typescale-body` | DM Sans | 15px | 400 | 1.6 | 0 | Cuerpo conversacional (Luca) |
| `typescale-body-sm` | DM Sans | 13px | 400 | 1.5 | 0 | Descripciones, helpers |
| `typescale-data-large` | DM Mono | 36px | 500 | 1.0 | -0.02em | Cifras hero (saldo total) |
| `typescale-data-medium` | DM Mono | 24px | 400 | 1.1 | -0.01em | Rendimientos, precios |
| `typescale-data-tabular` | DM Mono | 14px | 400 | 1.4 | 0 | Tablas, historial, comparativas |
| `typescale-data-micro` | DM Mono | 11px | 400 | 1.3 | 0.02em | Timestamps, códigos ticker |

```css
/* Propiedad crítica para datos financieros — aplicar SIEMPRE */
.data-numeric {
  font-family: 'DM Mono', monospace;
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1, "zero" 1, "lnum" 1;
}
```

---

## 03 · Sistema de Espaciado y Grid

### 3.1 · Hard Grid de 8px

| Token | Valor | Uso |
|---|---|---|
| `spacing-micro` | 4px | Gaps internos de componentes, separadores de datos |
| `spacing-tight` | 8px | Padding de badges, gaps entre iconos y labels |
| `spacing-base` | 16px | Padding interno de cards, spacing entre elementos |
| `spacing-comfortable` | 24px | Separación entre secciones internas |
| `spacing-loose` | 32px | Gaps entre cards, padding de contenedores |
| `spacing-section` | 48px | Separación entre secciones de pantalla |
| `spacing-hero` | 64px | Márgenes de pantallas de onboarding |
| `spacing-page` | 96px | Padding lateral en breakpoint desktop |

```
Grid Layout — Responsive:
Mobile (< 768px):   1 col  · 16px margins · 16px gutter
Tablet (768-1024px): 2 col  · 24px margins · 24px gutter
Desktop (> 1024px): 12 col  · 48px margins · 24px gutter
```

---

### 3.2 · Border Radius

| Token | Valor | Uso |
|---|---|---|
| `radius-sharp` | 0px | Elementos de tabla, líneas de datos puras |
| `radius-micro` | 2px | Badges de porcentaje, chips de ticker |
| `radius-base` | 4px | **Radio estándar** · Cards, inputs, botones |
| `radius-medium` | 8px | Modales, paneles de chat |
| `radius-soft` | 12px | Bottom sheets, drawers |
| `radius-full` | 9999px | Pills de estado, avatares |

---

## 04 · Arquitectura de Componentes — Atomic Design

### 4.1 · Átomos

---

#### ÁTOMO: Botón — Estados Completos

```
ANATOMÍA DEL BOTÓN PRIMARIO
┌─────────────────────────────────────┐
│  ← 16px                    16px →   │  Height: 44px
│        [ Label 15px / 500 ]         │  Border-radius: 4px
│                                     │  Background: --mango-300
└─────────────────────────────────────┘
```

| Variante | Background | Texto | Border | Hover | Active | Focus | Disabled |
|---|---|---|---|---|---|---|---|
| **Primary** | `--mango-300` | `#0A0A0A` | None | `brightness(1.1) scale(1.01)` | `brightness(0.92) scale(0.99)` | outline | `opacity 0.38` |
| **Secondary** | Transparent | `--neutral-50` | `1px solid --neutral-600` | `border: --mango-300` | `bg: --neutral-800` | outline | `opacity 0.38` |
| **Ghost** | Transparent | `--mango-300` | None | `bg: rgba(255,184,0,0.08)` | `bg: rgba(255,184,0,0.16)` | outline | `opacity 0.38` |
| **Danger** | Transparent | `--semantic-bearish` | `1px solid --semantic-bearish` | `bg: --bearish-subtle` | `brightness(0.9)` | outline | `opacity 0.38` |

```css
/* Estado focus-visible — OBLIGATORIO para accesibilidad WCAG */
.btn:focus-visible {
  outline: 2px solid var(--mango-300);
  outline-offset: 3px;
  border-radius: var(--radius-base);
}

/* Estado loading — spinner inline */
.btn--loading {
  pointer-events: none;
  opacity: 0.7;
}
.btn--loading::after {
  content: '';
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: btn-spin 600ms linear infinite;
  margin-left: 8px;
  display: inline-block;
}
@keyframes btn-spin { to { transform: rotate(360deg); } }
```

```
Tamaños:
SM: height 32px · padding 12px · font 13px  → acciones secundarias, tablas
MD: height 44px · padding 16px · font 15px  ← DEFAULT
LG: height 52px · padding 20px · font 16px  → CTAs principales de pantalla completa
```

---

#### ÁTOMO: Badge de Rendimiento

```
ANATOMÍA DEL BADGE
┌──────────────────┐
│  ↑  +12.4%       │   Height: 24px
│                  │   Padding: 4px 8px
└──────────────────┘   Border-radius: 2px
                       Font: DM Mono 13px 500 tabular-nums
```

| Estado | Background | Texto | Icono | Ejemplo |
|---|---|---|---|---|
| **Bullish** | `--semantic-bullish-subtle` | `--semantic-bullish` | ↑ | `↑ +12.4%` |
| **Bearish** | `--semantic-bearish-subtle` | `--semantic-bearish` | ↓ | `↓ -3.2%` |
| **Neutral** | `--neutral-800` | `--neutral-400` | → | `→ 0.0%` |
| **CER/Técnico** | `--semantic-neutral-subtle` | `--semantic-neutral` | ∿ | `∿ CER+8%` |
| **Warning** | `rgba(245,158,11,0.15)` | `--semantic-warning` | ⚠ | `⚠ Pendiente` |

---

#### ÁTOMO: Campo de Texto "Ghost" — Estados Completos

```
DEFAULT:
  Border-bottom: 1px solid --neutral-700
  Background: transparent
  Height: 56px

HOVER:
  Border-bottom: 1px solid --neutral-500

FOCUS:
  Border-bottom: 2px solid --mango-300
  Label: animado arriba · --mango-300
  Transition: all 200ms ease-out

FOCUS-VISIBLE (teclado):
  outline: 2px solid --mango-300
  outline-offset: 4px

ERROR:
  Border-bottom: 2px solid --semantic-bearish
  Label: --semantic-bearish
  Helper: 12px DM Sans · --semantic-bearish

DISABLED:
  Border-bottom: 1px solid --neutral-800
  Text: --neutral-600
  Background: --neutral-900
  cursor: not-allowed

READ-ONLY:
  Border-bottom: 1px dashed --neutral-700
  cursor: default
```

---

#### ÁTOMO: Chip de Instrumento / Ticker

```
┌─────────────────────┐
│  ■ AAPL · CEDEAR    │   Padding: 4px 10px · Border-radius: 2px
└─────────────────────┘   Font: DM Mono 11px · letter-spacing: 0.04em
                          Background: --neutral-800
                          Border: 1px solid --neutral-700
                          Uppercase · color dot según tipo:
                            CEDEAR  → --mango-500
                            FCI     → --semantic-neutral
                            ON      → --semantic-bullish
                            Bono    → --semantic-warning
```

---

#### ÁTOMO: Toggle Switch

```
OFF:                        ON:
┌────────────────────┐      ┌────────────────────┐
│  ○ ·············  │      │  ··············· ○ │
└────────────────────┘      └────────────────────┘
  Width: 44px                 Background: --mango-500
  Height: 24px                Thumb: --neutral-50
  Background: --neutral-700   Transition: 200ms ease
  Border-radius: full

Focus-visible: outline 2px --mango-300 offset 3px
```

---

#### ÁTOMO: Selector de Monto (Stepper)

```
┌──────────┬──────────────────────────────┬──────────┐
│    −     │      USD  1.000              │    +     │
└──────────┴──────────────────────────────┴──────────┘
  48px       Font: DM Mono 24px tabular    48px
  Tap: scale(0.95) → release
  Hold: incremento acelerado después de 600ms
  Rango: USD 10 mín · USD 50.000 máx (validación inline)
```

---

### 4.2 · Moléculas

---

#### MOLÉCULA: Mango AI Chat — Luca

El chat de Luca no es un widget flotante. Es una interfaz de primer nivel.

```
LAYOUT CHAT (Mobile — pantalla completa)
┌─────────────────────────────────────┐
│  ← Volver          Luca        ···  │  Header: 56px · --neutral-900
│                                     │  Border-bottom: 1px --neutral-700
├─────────────────────────────────────┤
│                                     │
│      [Mensaje de Luca]              │  Burbuja Luca:
│  ┌────────────────────────────┐     │    Background: --neutral-800
│  │ Tiene todo el sentido. Lo  │     │    Border-radius: 0 4px 4px 4px
│  │ que tenés en pesos parado  │     │    Max-width: 85%
│  │ pierde valor solo...       │     │    Font: DM Sans 15px
│  └────────────────────────────┘     │    Padding: 12px 16px
│  🟠 Luca · ahora                    │    Timestamp: DM Mono 10px --neutral-600
│                                     │      (visible al tap/hover)
│              [Mensaje del usuario]  │  Burbuja Usuario:
│     ┌─────────────────────────┐     │    Background: rgba(122,46,0,0.3)
│     │ ¿Y si el dólar baja?    │     │    Border: 1px solid --mango-700
│     └─────────────────────────┘     │    Border-radius: 4px 0 4px 4px
│                                     │
│  [Typing indicator ···]             │  3 dots · pulse 1.2s infinite
├─────────────────────────────────────┤
│  [Typing area...]            Enviar │  Input: 56px · --neutral-900
│                          ↑ 15px/500 │  Border-top: 1px --neutral-700
└─────────────────────────────────────┘
```

**Reglas de diseño del chat:**

| Elemento | Spec |
|---|---|
| **Avatar Luca** | Círculo 24px · gradiente `--mango-500 → --mango-700` · "L" blanco 12px |
| **Indicador de typing** | Tres puntos · `opacity: 0.3 → 1` escalonado · `animation-delay: 0, 160ms, 320ms` |
| **Opciones rápidas** | Pills · `border: 1px solid --neutral-600` · scroll horizontal · fade en bordes |
| **Respuestas con datos** | Mini-cards embed dentro del bubble |
| **Disclaimer inicial** | `11px DM Sans · --neutral-400` · primer mensaje de cada sesión |
| **Estado sin conexión** | Banner: "Reconectando..." · `--semantic-warning` · top del chat |

```
MINI-CARD EMBED (dentro de bubble de Luca):
┌─────────────────────────────┐
│  ■ CEDEAR · AAPL            │  Background: --neutral-700
│  USD 185.40  ↑ +2.1%        │  Border-radius: 4px
│  [Ver en cartera →]         │  Margin-top: 8px
└─────────────────────────────┘
```

---

#### MOLÉCULA: Fila de Instrumento (en Portafolio)

```
┌──────────────────────────────────────────────────────────┐
│  ■ CEDEAR · AAPL     35%    USD 2.947    ↑ 22.1%        │
│  Acciones globales                       +USD 531        │
└──────────────────────────────────────────────────────────┘
  Height: 56px · Padding: 0 16px
  Columnas con alineación tabular-nums (derecha)
  Hover: bg rgba(255,184,0,0.04) · border-left 2px --mango-300
  Tap → navega a Detalle del Instrumento
  Focus-visible: outline 2px --mango-300 inset
```

---

#### MOLÉCULA: Toast / Notificación Inline

```
ÉXITO:
┌──────────────────────────────────────────────┐
│  ✓  Inversión ejecutada · USD 150 en AAPL   [×]│
└──────────────────────────────────────────────┘
  Background: --semantic-bullish-subtle
  Border-left: 3px solid --semantic-bullish
  Duration: visible 4s → fade out 300ms
  Posición: top · slide-down desde arriba

ERROR:
  Border-left: 3px solid --semantic-bearish
  Background: --semantic-bearish-subtle

ADVERTENCIA:
  Border-left: 3px solid --semantic-warning
  Background: rgba(245,158,11,0.12)

INFO:
  Border-left: 3px solid --mango-300
  Background: rgba(255,184,0,0.08)

Especificaciones comunes:
  Width: calc(100% - 32px) · max-width: 480px
  Padding: 12px 16px
  Border-radius: 4px
  Font: DM Sans 14px · icono 16px
  Z-index: 9000
  Stacking: máximo 3 toasts simultáneos
```

---

### 4.3 · Organismos (Widgets)

---

#### ORGANISMO: Card de Meta

```
CARD DE META — "Mi Casa"
┌──────────────────────────────────────────────┐
│▌ MI CASA                           [Editar]  │  ▌ = 3px solid --mango-500 top
│  11px DM Mono --neutral-400 uppercase        │
├──────────────────────────────────────────────┤
│                                              │
│  "Para la entrada del depto"                 │  Playfair 18px italic
│                                              │
│  ████████████████████░░░░░░░  68%           │  Progress: height 6px
│  Gradiente: --mango-300 → --mango-500        │  Track: --neutral-700
│                                              │  Animación: width 0→68% · 500ms ease-out
│  USD 6.800 · de USD 10.000                  │  DM Mono 24px / 13px --neutral-400
│                                              │
├──────────────────────────────────────────────┤
│  PROYECCIÓN    A este ritmo, llegás en:      │
│  ↗  8 meses   [Agosto 2026]                 │  DM Mono · --mango-300
└──────────────────────────────────────────────┘

Background: --neutral-900 · Border: 1px solid --neutral-700
Border-radius: 4px · Padding: 20px

ESTADO VACÍO (sin meta definida):
┌──────────────────────────────────────────────┐
│  + Definir una meta                          │  DM Sans 15px --neutral-400
│    ¿Para qué estás ahorrando?                │  Center-aligned
│    [Contarle a Luca →]                       │  Ghost button
└──────────────────────────────────────────────┘
```

---

#### ORGANISMO: Card de Portafolio (Glassmorphism)

```
CARD DE PORTAFOLIO PRINCIPAL
┌──────────────────────────────────────────────┐
│ Background: rgba(255,255,255,0.03)           │
│ Backdrop-filter: blur(24px) saturate(180%)   │
│ Border: 1px solid rgba(255,255,255,0.08)     │
│ Border-radius: 4px                           │
│ Box-shadow: 0 8px 32px rgba(0,0,0,0.4)      │
│                                              │
│  TU PORTAFOLIO                               │  DM Mono 11px --neutral-400 uppercase
│                                              │
│  USD 8,420.50                               │  DM Mono 36px 500 tabular-nums
│  ARS 8.462.341,00                           │  DM Mono 14px --neutral-400
│                                              │
│  ↑ +12.4%   +USD 923.10    este mes        │  Badge bullish inline
│                                              │
│  ──────────────────────────────────────────  │
│                                              │
│  DISTRIBUCIÓN                                │
│                                              │
│  FCI Money Market   20%  USD 1.684   ↑ 3.1%│  tabular-nums alineados
│  Lecaps / CER       15%  USD 1.263   ↑ 8.2%│
│  Obligac. Negociac. 25%  USD 2.105   ↑ 5.4%│
│  CEDEARs            35%  USD 2.947  ↑ 22.1%│
│  Bonos Sober. AL30   5%  USD   421  ↓  1.2%│
│                                              │
│  [Ver historial completo →]                  │
└──────────────────────────────────────────────┘

Hover en filas:
  background: rgba(255,184,0,0.04)
  border-left: 2px solid --mango-300
  transition: all 150ms ease
```

---

#### ORGANISMO: Widget de Señales de Legitimidad

```
VARIANTE HEADER (compacta):
  Pill: "🛡 AAGI CNV · Caja de Valores"
  Background: --neutral-800 · Border: 1px solid --neutral-700
  Border-radius: 2px · Padding: 4px 10px
  Font: DM Mono 10px · --neutral-400
  Tap → bottom sheet regulatoria

VARIANTE FOOTER (completa):
┌─────────────────────────────────────────────────────────────┐
│  [🛡] AAGI Nº XXXX-X · CNV    [🏦] Custodia Caja Valores   │
│       Verificar → cnv.gob.ar        Activos segregados       │
│                                                              │
│  [🔒] AES-256 · TLS 1.3 · 2FA · SOC 2 Type II              │
└─────────────────────────────────────────────────────────────┘
  Background: --neutral-900 · Border-top: 1px --neutral-700
  Grid: 2 cols desktop · stack mobile · Padding: 20px 24px
```

---

#### ORGANISMO: Flujo KYC Progresivo

```
TRIGGER: Primer tap en "Depositar"

PASO 0 — Bottom Sheet de Contexto:
  Drag handle · Playfair 22px · DM Sans 15px
  "Para depositar, verificamos tu identidad.
   Es un trámite de la CNV — tarda menos de 3 min."
  [Empezar →] [Ahora no]

PASO 1/3 — DNI Frente:
  Dots indicator · Playfair 28px
  Preview 16:10 · dashed border · cámara central
  Helper 13px

PASO 2/3 — Liveness:
  Marco oval · pulso --mango-300 2s infinite
  "Mirate a la cámara y sonreí"

PASO 3/3 — Procesando:
  Spinner --mango-300 · "Verificando..." · "< 3 min"

APROBADO:
  Checkmark animado (scale-in) · --semantic-bullish
  "¡Listo! Ya podés depositar."
  [Ir a depositar →]

RECHAZADO:
  X animado · --semantic-bearish
  Causa específica · instrucciones de corrección
  [Intentar de nuevo] · máx 3 intentos automáticos
```

---

## 05 · Arquitectura de Tokens (JSON)

```json
{
  "sys": {
    "color": {
      "brand": {
        "mango-vibrant": {
          "value": "#FFB800",
          "type": "color",
          "description": "CTA primario · acentos positivos"
        },
        "mango-core": {
          "value": "#F5890A",
          "type": "color",
          "description": "Identidad de marca · logo · iconos activos"
        },
        "mango-deep": {
          "value": "#C9580B",
          "type": "color",
          "description": "Hover states · sombras de marca"
        },
        "mango-subtle": {
          "value": "rgba(255, 184, 0, 0.08)",
          "type": "color",
          "description": "Hover backgrounds · selected states dark mode"
        }
      },
      "surface": {
        "canvas": { "value": "#0A0A0A", "type": "color" },
        "card-primary": { "value": "#141414", "type": "color" },
        "card-secondary": { "value": "#1E1E1E", "type": "color" },
        "glass-base": {
          "value": "rgba(255, 255, 255, 0.03)",
          "type": "color",
          "companion": {
            "backdrop-filter": "blur(24px) saturate(180%)",
            "border": "1px solid rgba(255, 255, 255, 0.08)"
          }
        },
        "overlay-scrim": { "value": "rgba(0, 0, 0, 0.72)", "type": "color" }
      },
      "semantic": {
        "bullish":         { "value": "#10B981", "type": "color" },
        "bullish-subtle":  { "value": "#064E3B", "type": "color" },
        "bearish":         { "value": "#F43F5E", "type": "color" },
        "bearish-subtle":  { "value": "#4C0519", "type": "color" },
        "neutral-cer":     { "value": "#3B82F6", "type": "color" },
        "cer-subtle":      { "value": "#1E3A5F", "type": "color" },
        "warning":         { "value": "#F59E0B", "type": "color" },
        "warning-subtle":  { "value": "rgba(245, 158, 11, 0.12)", "type": "color" }
      },
      "a11y": {
        "focus-ring": {
          "value": "#FFB800",
          "type": "color",
          "description": "Color del outline de focus-visible · ratio mínimo 3:1 con cualquier surface"
        },
        "skip-link-bg": {
          "value": "#FFB800",
          "type": "color",
          "description": "Background del skip-to-content link"
        }
      }
    },
    "spacing": {
      "micro":       { "value": "4px",  "type": "spacing" },
      "tight":       { "value": "8px",  "type": "spacing" },
      "base":        { "value": "16px", "type": "spacing" },
      "comfortable": { "value": "24px", "type": "spacing" },
      "loose":       { "value": "32px", "type": "spacing" },
      "section":     { "value": "48px", "type": "spacing" },
      "hero":        { "value": "64px", "type": "spacing" },
      "page":        { "value": "96px", "type": "spacing" }
    },
    "shape": {
      "radius-sharp":  { "value": "0px",    "type": "borderRadius" },
      "radius-micro":  { "value": "2px",    "type": "borderRadius" },
      "radius-base":   { "value": "4px",    "type": "borderRadius" },
      "radius-medium": { "value": "8px",    "type": "borderRadius" },
      "radius-soft":   { "value": "12px",   "type": "borderRadius" },
      "radius-full":   { "value": "9999px", "type": "borderRadius" }
    },
    "elevation": {
      "card-flat":   { "value": "0 1px 2px rgba(0,0,0,0.3)",   "type": "shadow" },
      "card-raised": { "value": "0 4px 16px rgba(0,0,0,0.4)",  "type": "shadow" },
      "glass-float": { "value": "0 8px 32px rgba(0,0,0,0.4)",  "type": "shadow" },
      "modal":       { "value": "0 24px 64px rgba(0,0,0,0.6)", "type": "shadow" },
      "mango-glow":  { "value": "0 0 20px rgba(255,184,0,0.15)", "type": "shadow" }
    },
    "motion": {
      "duration-instant": { "value": "80ms",  "type": "duration" },
      "duration-fast":    { "value": "150ms", "type": "duration" },
      "duration-base":    { "value": "250ms", "type": "duration" },
      "duration-enter":   { "value": "350ms", "type": "duration" },
      "duration-complex": { "value": "500ms", "type": "duration" },
      "easing-standard":    { "value": "cubic-bezier(0.2, 0, 0, 1)",   "type": "easing" },
      "easing-decelerate":  { "value": "cubic-bezier(0, 0, 0.2, 1)",   "type": "easing" },
      "easing-accelerate":  { "value": "cubic-bezier(0.3, 0, 1, 1)",   "type": "easing" },
      "easing-spring":      { "value": "cubic-bezier(0.34, 1.56, 0.64, 1)", "type": "easing",
                              "description": "Spring suave para microinteracciones táctiles" }
    },
    "typescale": {
      "data-tabular": {
        "fontFamily": "DM Mono, monospace",
        "fontSize": "14px",
        "fontWeight": "400",
        "lineHeight": "1.4",
        "fontVariantNumeric": "tabular-nums",
        "fontFeatureSettings": "\"tnum\" 1, \"zero\" 1, \"lnum\" 1"
      },
      "data-large": {
        "fontFamily": "DM Mono, monospace",
        "fontSize": "36px",
        "fontWeight": "500",
        "lineHeight": "1.0",
        "letterSpacing": "-0.02em",
        "fontVariantNumeric": "tabular-nums"
      },
      "editorial-hero": {
        "fontFamily": "Playfair Display, Georgia, serif",
        "fontSize": "56px",
        "fontWeight": "700",
        "lineHeight": "1.1",
        "letterSpacing": "-0.02em"
      }
    }
  }
}
```

---

## 06 · UX para la Resiliencia

### 6.1 · Señales de Legitimidad

*(ver Organismo: Widget de Señales de Legitimidad en §04)*

### 6.2 · Flujo KYC Progresivo — Mapa de Estados

```
Estado: NUEVO          → explorar, chatear, ver demo
Estado: KYC_PROCESO    → verificando · badge --warning
Estado: KYC_APROBADO   → acceso total · pill verde header
Estado: KYC_RECHAZADO  → causa + re-intento (máx 3)
Estado: REVISIÓN_MANUAL → "Estamos revisando tu caso · 24-48hs"
```

### 6.3 · Modo Alerta — Fricción Positiva

```
TRIGGER: "Vender todo" o "Retirar todo"

Bottom sheet inmediato:
  Contexto de rendimiento acumulado
  Mini gráfico histórico inline (80px)
  Pregunta de Luca sobre el objetivo de largo plazo
  [Sí, salir igual] → 2do tap requerido
  [Esperar y ver]   → CTA primario

No hay triple confirmación. Solo dos gestos deliberados.
```

---

## 07 · Variables CSS — Implementación Completa

```css
:root {
  color-scheme: dark;

  /* ─── PALETA MANGO ─────────────────────── */
  --mango-100: #FFF3C4;
  --mango-300: #FFB800;
  --mango-500: #F5890A;
  --mango-700: #C9580B;
  --mango-900: #7A2E00;

  /* ─── NEUTRALES ─────────────────────────── */
  --neutral-950: #0A0A0A;
  --neutral-900: #141414;
  --neutral-800: #1E1E1E;
  --neutral-700: #2A2A2A;
  --neutral-600: #3D3D3D;
  --neutral-400: #737373;
  --neutral-200: #B3B3B3;
  --neutral-50:  #F5F5F5;

  /* ─── SEMÁNTICA ──────────────────────────── */
  --bullish:         #10B981;
  --bullish-subtle:  #064E3B;
  --bearish:         #F43F5E;
  --bearish-subtle:  #4C0519;
  --neutral-cer:     #3B82F6;
  --cer-subtle:      #1E3A5F;
  --warning:         #F59E0B;
  --warning-subtle:  rgba(245, 158, 11, 0.12);

  /* ─── TIPOGRAFÍA ─────────────────────────── */
  --font-editorial: 'Playfair Display', Georgia, serif;
  --font-data:      'DM Mono', 'Courier New', monospace;
  --font-body:      'DM Sans', system-ui, sans-serif;

  /* ─── ESPACIADO ──────────────────────────── */
  --spacing-micro:       4px;
  --spacing-tight:       8px;
  --spacing-base:        16px;
  --spacing-comfortable: 24px;
  --spacing-loose:       32px;
  --spacing-section:     48px;
  --spacing-hero:        64px;
  --spacing-page:        96px;

  /* ─── RADIOS ─────────────────────────────── */
  --radius-sharp:  0px;
  --radius-micro:  2px;
  --radius-base:   4px;
  --radius-medium: 8px;
  --radius-soft:   12px;
  --radius-full:   9999px;

  /* ─── GLASS ──────────────────────────────── */
  --glass-bg:       rgba(255, 255, 255, 0.03);
  --glass-border:   rgba(255, 255, 255, 0.08);
  --glass-backdrop: blur(24px) saturate(180%);

  /* ─── ELEVACIÓN ──────────────────────────── */
  --shadow-card:    0 1px 2px rgba(0,0,0,0.3);
  --shadow-raised:  0 4px 16px rgba(0,0,0,0.4);
  --shadow-float:   0 8px 32px rgba(0,0,0,0.4);
  --shadow-modal:   0 24px 64px rgba(0,0,0,0.6);
  --shadow-glow:    0 0 20px rgba(255,184,0,0.15);

  /* ─── MOTION ─────────────────────────────── */
  --dur-instant: 80ms;
  --dur-fast:    150ms;
  --dur-base:    250ms;
  --dur-enter:   350ms;
  --dur-complex: 500ms;
  --ease-std:    cubic-bezier(0.2, 0, 0, 1);
  --ease-decel:  cubic-bezier(0, 0, 0.2, 1);
  --ease-accel:  cubic-bezier(0.3, 0, 1, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ─── BORDES ─────────────────────────────── */
  --border-default: 1px solid var(--neutral-700);
  --border-subtle:  1px solid var(--neutral-800);
  --border-accent:  1px solid var(--mango-300);
  --border-glass:   1px solid var(--glass-border);

  /* ─── ACCESIBILIDAD ──────────────────────── */
  --focus-ring: 2px solid var(--mango-300);
  --focus-ring-offset: 3px;
}

/* Reduce motion para usuarios que lo prefieren */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Skip to content — accesibilidad teclado */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  background: var(--mango-300);
  color: #0A0A0A;
  padding: 8px 16px;
  border-radius: var(--radius-base);
  font-family: var(--font-body);
  font-weight: 600;
  z-index: 9999;
  transition: top var(--dur-fast) var(--ease-decel);
}
.skip-link:focus {
  top: 16px;
}
```

---

## 08 · Anatomía de Pantalla — Dashboard

```
PANTALLA PRINCIPAL (mobile · 390px)
╔══════════════════════════════════════════╗
║  MANGO          [🛡 AAGI CNV]    [🔔]  ║  Header 56px
╠══════════════════════════════════════════╣
║  Buenos días, Martín.                    ║  Playfair 28px
║  ─────────────────────────────────────  ║
║  [GLASS PORTFOLIO CARD]                  ║
║   USD 8,420.50  ↑ +12.4%               ║
║   FCI MM · CEDEARs · ONs · AL30         ║
║   [Ver completo →]                       ║
║  ─────────────────────────────────────  ║
║  [META CARD — Mi Casa 68%]              ║
║  ─────────────────────────────────────  ║
║  [LUCA CARD — mensaje contextual]       ║
╠══════════════════════════════════════════╣
║  [🏠 Inicio][📊 Cartera][💬 Luca][👤]  ║  Tab bar 64px · safe area
╚══════════════════════════════════════════╝
```

---

## 09 · Guía de Implementación

### Fuentes (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?
  family=Playfair+Display:wght@600;700&
  family=DM+Mono:wght@400;500&
  family=DM+Sans:wght@400;500;600&
  display=swap" rel="stylesheet">
```

### Principios de Implementación

| Principio | Regla |
|---|---|
| **8px grid** | Todo spacing múltiplo de 4px. Preferir 8px como unidad. |
| **Tabular nums siempre** | `font-variant-numeric: tabular-nums` en TODO elemento con cifras. |
| **Dark mode por defecto** | `color-scheme: dark` en `:root`. No hay modo light en MVP. |
| **Serif para emoción** | `--font-editorial` solo en titulares, metas e hitos. Nunca en datos. |
| **Radius-base: 4px** | Radio estándar en todos los interactivos. 8px+ solo en bottom sheets. |
| **Glass con moderación** | Glassmorphism únicamente en el Portfolio Card principal. |
| **Mango-300 para CTAs** | `#FFB800` es el único color de acción primaria. |
| **Luca como tab** | El chat es pantalla completa o tab. Nunca FAB flotante. |
| **focus-visible obligatorio** | Todo interactivo keyboard-accessible debe tener `outline` visible. |
| **reduced-motion** | Respetar `prefers-reduced-motion` en todas las animaciones. |

---

## ══════════════════════════════════════
## NUEVAS SECCIONES — v2.0
## ══════════════════════════════════════

---

## 10 · Accesibilidad y Contraste (WCAG 2.1 AA)

### 10.1 · Auditoría de Contraste — Pares Críticos

El producto financiero maneja datos de alto impacto. Un usuario que no puede leer su saldo correctamente es un riesgo de negocio y legal.

| Par de colores | Ratio | WCAG AA (4.5:1) | WCAG AAA (7:1) | Uso |
|---|---|---|---|---|
| `--neutral-50` sobre `--neutral-950` | **19.5:1** | ✅ PASS | ✅ PASS | Texto principal sobre canvas |
| `--neutral-50` sobre `--neutral-900` | **16.1:1** | ✅ PASS | ✅ PASS | Texto en cards primarias |
| `--neutral-50` sobre `--neutral-800` | **12.4:1** | ✅ PASS | ✅ PASS | Texto en cards secundarias |
| `--mango-300` sobre `--neutral-950` | **9.2:1** | ✅ PASS | ✅ PASS | CTAs, acentos sobre canvas |
| `--mango-300` sobre `--neutral-900` | **7.6:1** | ✅ PASS | ✅ PASS | CTAs sobre cards |
| `--mango-300` sobre `--neutral-800` | **5.9:1** | ✅ PASS | ❌ FAIL | Aceptable para texto grande/bold |
| `--neutral-200` sobre `--neutral-950` | **11.2:1** | ✅ PASS | ✅ PASS | Texto secundario |
| `--neutral-200` sobre `--neutral-900` | **9.2:1** | ✅ PASS | ✅ PASS | Body text en cards |
| `--neutral-400` sobre `--neutral-950` | **4.5:1** | ✅ PASS (exacto) | ❌ FAIL | Mínimo aceptable · solo labels |
| `--neutral-400` sobre `--neutral-900` | **3.7:1** | ❌ FAIL | ❌ FAIL | ⚠️ NO usar para texto relevante |
| `--semantic-bullish` sobre `--neutral-950` | **6.1:1** | ✅ PASS | ❌ FAIL | Badges sobre canvas |
| `--semantic-bullish` sobre `--bullish-subtle` | **4.6:1** | ✅ PASS | ❌ FAIL | Texto en badge bullish |
| `--semantic-bearish` sobre `--neutral-950` | **5.1:1** | ✅ PASS | ❌ FAIL | Badges sobre canvas |
| `--semantic-bearish` sobre `--bearish-subtle` | **4.8:1** | ✅ PASS | ❌ FAIL | Texto en badge bearish |
| `#0A0A0A` sobre `--mango-300` | **9.2:1** | ✅ PASS | ✅ PASS | Texto en botón primario |

**Reglas derivadas:**
- `--neutral-400` solo puede usarse en texto ≥ 18px regular o ≥ 14px bold.
- Timestamps y micro-labels (11px) deben usar `--neutral-200` mínimo.
- Nunca usar texto de color semántico (bullish/bearish) en tamaños < 12px.

---

### 10.2 · Daltonismo y Alternativas No-Color

Los colores semánticos (verde/rojo) nunca son la única señal de estado. Siempre se acompañan de:

| Señal de color | Alternativa complementaria |
|---|---|
| Verde bullish | Flecha ↑ + signo `+` en el número |
| Rojo bearish | Flecha ↓ + número sin signo o con `−` explícito |
| Ámbar warning | Icono ⚠ + texto descriptivo |
| Azul CER | Prefijo textual "CER" · chip con texto |

```
EJEMPLO BADGE ACCESIBLE:
  ↑ +12.4%   → ícono + signo + color
  ↓ −3.2%    → ícono + signo + color
  No depender NUNCA de solo el color verde/rojo
```

---

### 10.3 · Navegación por Teclado

```
Tab order en Dashboard:
1. Skip link "Ir al contenido principal"
2. Header: Logo → Pill regulatoria → Notificaciones
3. Portfolio Card: header → filas (↑↓ para navegar) → "Ver completo"
4. Meta Card: header → "Editar"
5. Luca Card: "Ver análisis"
6. Tab bar: Inicio → Cartera → Luca → Perfil

Atajos de teclado documentados:
  / → foco en búsqueda
  L → abrir Luca
  Esc → cerrar modales/bottom sheets
  Enter/Space → activar elemento enfocado
```

---

### 10.4 · Screen Readers

```html
<!-- Ejemplo de card de portafolio accesible -->
<section aria-labelledby="portfolio-title" role="region">
  <h2 id="portfolio-title" class="sr-only">Tu portafolio</h2>
  <p aria-label="Saldo total en dólares: ocho mil cuatrocientos veinte dólares con cincuenta centavos">
    <span aria-hidden="true">USD 8,420.50</span>
  </p>
  <p aria-label="Rendimiento este mes: positivo, más doce punto cuatro por ciento">
    <span aria-hidden="true">↑ +12.4%</span>
  </p>
</section>

<!-- Luca typing indicator -->
<div aria-live="polite" aria-atomic="true">
  <span class="sr-only">Luca está escribiendo...</span>
</div>

<!-- Toast notifications -->
<div role="alert" aria-live="assertive">
  Inversión ejecutada · USD 150 en AAPL
</div>
```

---

## 11 · Sistema de Iconografía

### 11.1 · Principios

```
Librería base: Phosphor Icons (licencia MIT)
  Alternativa: Lucide Icons

Razón: estética de línea limpia compatible con
el estilo "boxy" y profesional del sistema.
Evitar: íconos redondeados estilo Material 3 o iOS SF.
```

---

### 11.2 · Especificaciones de Uso

| Contexto | Tamaño | Stroke | Color | Variante Phosphor |
|---|---|---|---|---|
| Tab bar | 24px | Regular | `--neutral-400` (inactivo) / `--mango-300` (activo) | Regular |
| Header actions | 20px | Regular | `--neutral-200` | Regular |
| Inline con texto 15px | 16px | Regular | Hereda del texto | Regular |
| Inline con texto 13px | 14px | Regular | Hereda del texto | Regular |
| Badges de estado | 12px | Bold | Hereda del badge | Bold |
| Hero / Ilustrativo | 32-48px | Thin | `--neutral-600` | Thin |
| Confirmación / Hito | 48-64px | Regular | `--semantic-bullish` | Fill |

---

### 11.3 · Catálogo de Íconos del MVP

| Ícono | Phosphor Name | Uso en Mango |
|---|---|---|
| 💼 | `Briefcase` | Portafolio / Inversiones |
| 🎯 | `Target` | Metas de ahorro |
| 💬 | `ChatCircle` | Luca / Chat |
| 👤 | `UserCircle` | Perfil |
| 🏠 | `House` | Dashboard home |
| ↑ / ↓ | `ArrowUp` / `ArrowDown` | Rendimientos bullish/bearish |
| 🛡 | `ShieldCheck` | Legitimidad CNV |
| 🔒 | `LockSimple` | Seguridad / Encriptación |
| 🏦 | `Bank` | Custodia / Fondeo |
| 📄 | `FileText` | Historial / Comprobante |
| ⚠ | `Warning` | Alertas / KYC |
| ✓ | `CheckCircle` | Confirmación / KYC aprobado |
| ✕ | `XCircle` | Error / KYC rechazado |
| + | `Plus` / `PlusCircle` | Agregar meta, depositar |
| → | `ArrowRight` | CTAs textuales, links |
| ↗ | `TrendUp` | Proyección positiva |
| ∿ | `ChartLine` | CER / instrumentos técnicos |
| 🔔 | `Bell` | Notificaciones |
| ⋯ | `DotsThree` | Más opciones (horizontal) |
| ⋮ | `DotsThreeVertical` | Más opciones (vertical) |

```css
/* Sistema de tamaños de íconos como clases utilitarias */
.icon-xs   { width: 12px; height: 12px; }
.icon-sm   { width: 16px; height: 16px; }
.icon-md   { width: 20px; height: 20px; }  /* ← DEFAULT */
.icon-lg   { width: 24px; height: 24px; }
.icon-xl   { width: 32px; height: 32px; }
.icon-hero { width: 48px; height: 48px; }
```

---

## 12 · Estados de Interacción Completos

### 12.1 · Matriz de Estados por Componente

Todo componente interactivo debe implementar todos los estados relevantes. Esta matriz es la referencia de QA.

| Componente | Default | Hover | Focus-visible | Active/Pressed | Loading | Disabled | Error | Empty |
|---|---|---|---|---|---|---|---|---|
| **Botón Primary** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | N/A | N/A |
| **Botón Secondary** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | N/A | N/A |
| **Input Ghost** | ✅ | ✅ | ✅ | N/A | N/A | ✅ | ✅ | ✅ |
| **Card Portafolio** | ✅ | N/A | N/A | N/A | ✅ | N/A | ✅ | ✅ |
| **Fila Instrumento** | ✅ | ✅ | ✅ | ✅ | N/A | N/A | N/A | N/A |
| **Card Meta** | ✅ | N/A | N/A | N/A | N/A | N/A | N/A | ✅ |
| **Tab Bar Item** | ✅ | N/A | ✅ | ✅ | N/A | N/A | N/A | N/A |
| **Toggle** | ✅ | ✅ | ✅ | ✅ | N/A | ✅ | N/A | N/A |
| **Chat Input** | ✅ | N/A | ✅ | N/A | ✅ | N/A | N/A | ✅ |

---

### 12.2 · Estado Loading — Especificación Global

```
REGLA: Ninguna acción que implique llamada a API puede
quedar sin feedback visual en < 80ms.

Tipos de loading según contexto:

1. INLINE SPINNER (botones, acciones puntuales):
   Reemplaza el label · 14px · border 2px · spin 600ms

2. SKELETON LOADER (cards con datos, listas):
   → Ver §15

3. PROGRESS BAR INDETERMINADA (KYC, fondeo):
   Height: 3px · top de la pantalla
   Background: linear-gradient --mango-300 → --mango-500
   animation: progress-slide 1.5s ease-in-out infinite
   @keyframes progress-slide {
     0%   { transform: translateX(-100%); width: 40%; }
     50%  { transform: translateX(60%);  width: 60%; }
     100% { transform: translateX(200%); width: 40%; }
   }

4. OVERLAY DE PANTALLA (ejecución de orden):
   Scrim rgba(0,0,0,0.72) + spinner 32px centrado
   Texto: "Ejecutando orden..." · DM Sans 15px --neutral-200
   NO bloquear si tarda > 5s → mostrar estado de espera
```

---

## 13 · Sistema de Motion y Microinteracciones

### 13.1 · Principios de Motion

```
1. INTENCIONAL: Cada animación comunica un estado o guía al usuario.
   No hay animación decorativa sin propósito.

2. RÁPIDO EN RESPUESTA: El feedback táctil ocurre en < 80ms.
   El usuario nunca espera para saber que algo respondió.

3. SUAVE EN TRANSICIÓN: Los cambios de pantalla son fluidos (250-350ms).
   No hay cortes abruptos entre estados.

4. RESPETUOSO: prefers-reduced-motion desactiva todas las animaciones
   no esenciales. Las esenciales (progress, loading) se reducen.
```

---

### 13.2 · Catálogo de Microinteracciones

#### ENTRADA DE PANTALLA (page transition)

```css
/* Slide + fade · componentes nuevos entrando */
@keyframes screen-enter {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.screen-enter {
  animation: screen-enter var(--dur-enter) var(--ease-decel) both;
}

/* Stagger para listas de cards */
.card-list > * {
  animation: screen-enter var(--dur-enter) var(--ease-decel) both;
}
.card-list > *:nth-child(1) { animation-delay: 0ms; }
.card-list > *:nth-child(2) { animation-delay: 60ms; }
.card-list > *:nth-child(3) { animation-delay: 120ms; }
.card-list > *:nth-child(4) { animation-delay: 180ms; }
```

#### COUNTER ANIMADO (saldo total)

```javascript
// El saldo no aparece estático: cuenta desde 0 hasta el valor real
// Duración: 800ms · easing: ease-out
function animateCounter(element, target, duration = 800) {
  const start = performance.now();
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    element.textContent = formatter.format(target * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```

#### PROGRESS BAR DE META (primera vez)

```css
/* La barra anima su ancho al cargar la pantalla */
.goal-progress-bar {
  width: 0%;
  transition: width var(--dur-complex) var(--ease-decel);
}
.goal-progress-bar.is-visible {
  width: var(--goal-percent); /* setear via JS: el.style.setProperty('--goal-percent', '68%') */
}
```

#### BADGE DE RENDIMIENTO (cambio de valor)

```css
/* Flash sutil cuando el valor cambia */
@keyframes value-flash {
  0%   { background-color: rgba(255, 184, 0, 0.3); }
  100% { background-color: transparent; }
}
.badge--updated {
  animation: value-flash 600ms var(--ease-decel);
}
```

#### TAP FEEDBACK (elementos interactivos)

```css
/* Escala on-press · universal para todos los tappables */
.tappable {
  transition: transform var(--dur-instant) var(--ease-spring);
  -webkit-tap-highlight-color: transparent;
}
.tappable:active {
  transform: scale(0.97);
}
```

#### BOTTOM SHEET (entrada/salida)

```css
@keyframes sheet-enter {
  from { transform: translateY(100%); }
  to   { transform: translateY(0%); }
}
@keyframes sheet-exit {
  from { transform: translateY(0%); }
  to   { transform: translateY(100%); }
}
.bottom-sheet {
  animation: sheet-enter var(--dur-enter) var(--ease-decel);
}
.bottom-sheet.is-exiting {
  animation: sheet-exit var(--dur-base) var(--ease-accel);
}
```

#### TYPING INDICATOR (Luca escribiendo)

```css
@keyframes typing-dot {
  0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
  30%           { opacity: 1;   transform: translateY(-3px); }
}
.typing-dot:nth-child(1) { animation: typing-dot 1.2s infinite 0ms; }
.typing-dot:nth-child(2) { animation: typing-dot 1.2s infinite 160ms; }
.typing-dot:nth-child(3) { animation: typing-dot 1.2s infinite 320ms; }
```

#### TOAST NOTIFICATION

```css
@keyframes toast-enter {
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
}
@keyframes toast-exit {
  from { transform: translateY(0);     opacity: 1; }
  to   { transform: translateY(-100%); opacity: 0; }
}
```

#### CHECKMARK DE ÉXITO (KYC aprobado, orden ejecutada)

```css
@keyframes check-scale {
  0%   { transform: scale(0);   opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1);   opacity: 1; }
}
.success-check {
  animation: check-scale 400ms var(--ease-spring) forwards;
}
```

---

## 14 · Patrones de Feedback y Error

### 14.1 · Jerarquía de Severidad

```
NIVEL 1 — INFO (azul mango):
  "Tu depósito se está procesando."
  Notificación no urgente · toast 4s · inline banner

NIVEL 2 — ÉXITO (verde):
  "Inversión ejecutada · USD 150 en AAPL"
  Confirma acción completada · toast 4s · animación check

NIVEL 3 — ADVERTENCIA (ámbar):
  "El mercado cerró. Tu orden se ejecutará mañana."
  Acción posible pero con consecuencias · requiere lectura
  Inline en el flujo · no desaparece automáticamente

NIVEL 4 — ERROR RECUPERABLE (rojo):
  "No pudimos procesar tu orden. Intentá de nuevo."
  Acción bloqueada pero soluble · inline en el flujo
  Con CTA de reintentar

NIVEL 5 — ERROR CRÍTICO (rojo, pantalla completa):
  "Hubo un problema con tu cuenta. Contactá a soporte."
  Acción bloqueada sin solución inmediata
  Solo para casos extremos · no en flujo normal
```

---

### 14.2 · Mensajes de Error — Guía de Redacción

El tono en errores sigue la voz de Luca: honesto, claro, sin culpar al usuario.

| Situación | ❌ No decir | ✅ Luca dice |
|---|---|---|
| Fondeo fallido | "Error 422: transaction_declined" | "No pudimos procesar tu depósito. Revisá que tengas saldo en tu cuenta bancaria." |
| KYC rechazado | "Documento inválido" | "No pudimos verificar tu DNI. Asegurate que la foto sea clara y legible, sin reflejos." |
| Orden sin mercado | "Market closed" | "El mercado está cerrado ahora. Tu orden queda guardada y se ejecuta mañana cuando abra." |
| Timeout de API | "Request timeout" | "Tardó más de lo esperado. Tu dinero está seguro — refresheá para ver el estado." |
| Sin conexión | "Network error" | "Sin conexión a internet. Revisá tu señal — no perdiste nada." |
| Saldo insuficiente | "Insufficient funds" | "No tenés saldo suficiente para esta operación. Podés depositar más o ajustar el monto." |

---

### 14.3 · Validación Inline de Formularios

```
REGLA GENERAL:
  Validar on-blur (al salir del campo), no on-change.
  Excepción: confirmación de contraseña (valida on-change
  solo cuando el segundo campo tiene foco).

JERARQUÍA DE VALIDACIÓN:
  1. Requerido → "Este campo es obligatorio"
  2. Formato → "Ingresá un email válido"
  3. Rango → "El monto mínimo es USD 10"
  4. Disponibilidad → "Este email ya está registrado"

ANATOMÍA DEL ERROR INLINE:
  ┌──────────────────────────────┐
  │  email incorrecto            │  Input en estado error
  └──────────────────────────────┘
  ⚠ Ingresá un email válido        Helper: 12px DM Sans --semantic-bearish
                                    Icono ⚠ 12px alineado
```

---

## 15 · Skeleton Loaders y Estados Vacíos

### 15.1 · Skeleton Loaders

Los skeleton reemplazan el contenido mientras carga. Se usan para **toda carga > 200ms**.

```css
/* Base del skeleton */
@keyframes skeleton-shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-800) 0%,
    var(--neutral-700) 50%,
    var(--neutral-800) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
  border-radius: var(--radius-micro);
}
```

#### SKELETON: Portfolio Card

```
┌────────────────────────────────────────────┐
│  ░░░░░░░░░░░░  (label "TU PORTAFOLIO")    │  h: 12px · w: 120px
│                                            │
│  ░░░░░░░░░░░░░░░░░░░░░░  (monto USD)      │  h: 36px · w: 200px
│  ░░░░░░░░░░░  (ARS)                       │  h: 14px · w: 150px
│                                            │
│  ░░░░░░░  (badge rendimiento)             │  h: 24px · w: 80px
│                                            │
│  ──────────────────────────────────────── │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  (fila 1)  │  h: 20px · w: 100%
│  ░░░░░░░░░░░░░░░░░░░░░  (fila 2)         │  h: 20px · w: 85%
│  ░░░░░░░░░░░░░░░░░░░░░░░░  (fila 3)      │  h: 20px · w: 90%
└────────────────────────────────────────────┘
  Border-radius: 4px · mismo tamaño que el card real
```

#### SKELETON: Fila de Instrumento

```
┌──────────────────────────────────────────────────┐
│  ░░░  ░░░░░░░░░  ░░░  ░░░░░░░░  ░░░░░░          │
└──────────────────────────────────────────────────┘
  height: 56px · Las columnas tienen width proporcional al contenido
  Repetir 4-5 veces para llenar la lista
```

#### SKELETON: Chat Bubble de Luca

```
  ┌──────────────────────────┐
  │  ░░░░░░░░░░░░░░░░░░░░    │   h: 44px · w: 220px
  └──────────────────────────┘
  ░░ (avatar)  Luca · ░░░░░░    metadata
```

---

### 15.2 · Estados Vacíos

Un estado vacío es una oportunidad de guiar al usuario, no solo mostrar ausencia de datos.

#### ESTADO VACÍO: Portafolio (cuenta nueva)

```
╔══════════════════════════════════════╗
║                                      ║
║        [ícono Briefcase 48px]        ║  --neutral-600 · thin stroke
║                                      ║
║   Tu portafolio está esperándote.    ║  Playfair 22px · --neutral-50
║                                      ║
║   Depositá tus primeros fondos       ║  DM Sans 15px · --neutral-400
║   y Luca te ayuda a invertirlos.     ║
║                                      ║
║   [Depositar con Luca →]             ║  Botón Primary
║                                      ║
╚══════════════════════════════════════╝
```

#### ESTADO VACÍO: Historial de Movimientos

```
        [ícono FileText 40px]       --neutral-600

   Todavía no tenés movimientos.    Playfair 20px

   Cuando hagas tu primera          DM Sans 14px --neutral-400
   inversión, aparecen acá.

   [Ir a invertir →]                Ghost button
```

#### ESTADO VACÍO: Metas (sin metas creadas)

```
        [ícono Target 40px]

   ¿Para qué estás ahorrando?       Playfair 20px

   Definir una meta hace            DM Sans 14px --neutral-400
   que cada peso tenga sentido.

   [Contarle a Luca →]              Primary button
```

#### ESTADO VACÍO: Búsqueda sin resultados

```
        [ícono MagnifyingGlass 32px]

   No encontramos "XXXX"            DM Sans 16px

   Probá con el nombre completo     DM Sans 13px --neutral-400
   o el ticker del instrumento.
```

---

## 16 · Pantallas Adicionales

### 16.1 · Pantalla de Onboarding — Luca Primera Sesión

```
STEP 1/5 — Bienvenida (full screen · emocional)
╔══════════════════════════════════════════╗
║                                          ║
║                                          ║
║                                          ║
║   Tu plata,                             ║  Playfair 56px · --neutral-50
║   trabajando.                            ║  Line 2 con --mango-300
║                                          ║
║   Soy Luca. Te voy a ayudar a           ║  DM Sans 18px · --neutral-200
║   proteger tus ahorros de la            ║
║   inflación — sin tecnicismos.          ║
║                                          ║
║                                          ║
║   [Empezar →]                            ║  Primary LG · bottom
║                                          ║
║   [🛡 AAGI CNV · Caja de Valores]       ║  Pill regulatoria sutil
╚══════════════════════════════════════════╝
  Background: --neutral-950
  Animación: texto fade-in staggered · 400ms delay entre líneas

STEP 2/5 — Objetivo
  Luca pregunta: "¿Para qué querés ahorrar?"
  Opciones como pills seleccionables (multi-select):
  [Mi casa] [Jubilación] [Educación] [Viajar] [Emergencias] [Otro]

STEP 3/5 — Horizonte temporal
  Luca pregunta: "¿En cuántos años lo vas a necesitar?"
  Slider visual: 0 — 1 — 3 — 5 — 10 — 20+ años
  DM Mono debajo del slider muestra el valor seleccionado

STEP 4/5 — Tolerancia a volatilidad
  Luca pregunta: "Si tu inversión baja un 10% mañana, ¿qué harías?"
  Opciones (single select):
  [Retiro todo]  [Me preocupo pero espero]  [No me afecta]

STEP 5/5 — Capital inicial
  Stepper de monto (ver Átomo §4.1)
  "Con cuánto te gustaría empezar. Podés desde USD 10."

RESULTADO — Perfil asignado:
  Full screen con resultado · Playfair 40px
  "Sos un inversor [Conservador / Moderado / Dinámico]"
  Descripción en DM Sans 15px
  Mini-visualización de la cartera sugerida (donut chart o barras)
  [Ver mi cartera →]
```

---

### 16.2 · Pantalla de Historial de Movimientos

```
╔══════════════════════════════════════════╗
║  ← Portafolio    HISTORIAL              ║  Header 56px
╠══════════════════════════════════════════╣
║  [Filtros: Todo · Compras · Retiros · Rendimientos]  ║
║  Scroll horizontal · pills                           ║
╠══════════════════════════════════════════╣
║                                          ║
║  ABRIL 2026                              ║  DM Mono 11px --neutral-400
║  ──────────────────────────────────────  ║  separador de grupo
║                                          ║
║  ↑ Compra  CEDEAR AAPL                  ║  ícono 16px bullish/bearish/neutral
║  USD 150.00            15 abr · 14:32   ║  DM Mono tabular · timestamp micro
║                                          ║
║  ↓ Retiro  Caja de ahorro              ║
║  USD 200.00            12 abr · 09:15   ║
║                                          ║
║  ∿ Rendimiento  FCI Money Market        ║
║  ARS 4.230,00          01 abr · 00:00   ║
║                                          ║
║  MARZO 2026                              ║
║  ──────────────────────────────────────  ║
║  [más movimientos...]                    ║
╚══════════════════════════════════════════╝

Tap en fila → bottom sheet con detalle completo:
  Instrumento, monto, precio de ejecución, comisión,
  comprobante PDF descargable.

Swipe down → refresh (pull to refresh) con progress indicator
```

---

### 16.3 · Pantalla de Detalle de Instrumento

```
╔══════════════════════════════════════════╗
║  ←           CEDEAR · AAPL        ⋯     ║  Header
╠══════════════════════════════════════════╣
║                                          ║
║  Apple Inc.                              ║  Playfair 28px
║  ■ CEDEAR · Mega-cap EEUU               ║  Chip instrumento
║                                          ║
║  USD 185.40   ↑ +2.1%  hoy             ║  DM Mono 32px + badge
║                                          ║
║  [Gráfico de precio — 7 días]           ║  área chart · --mango-300
║  [1D] [7D] [1M] [3M] [1A]              ║  tabs de período
║                                          ║
║  ──────────────────────────────────────  ║
║                                          ║
║  EN TU CARTERA                           ║  DM Mono 11px uppercase
║  USD 2.947,00   35% del portafolio      ║  DM Mono
║  +USD 531   ↑ +22.1% desde tu compra   ║  badge bullish
║                                          ║
║  ──────────────────────────────────────  ║
║                                          ║
║  QUÉ ES ESTO                            ║  DM Mono 11px uppercase
║  Un CEDEAR es una forma de comprar       ║  DM Sans 15px --neutral-200
║  acciones de Apple desde Argentina,      ║
║  en pesos, con cobertura cambiaria.      ║
║  [Luca, explicame más →]                 ║  link --mango-300
║                                          ║
╠══════════════════════════════════════════╣
║  [Comprar más]          [Ver historial]  ║  CTAs sticky footer
╚══════════════════════════════════════════╝
```

---

### 16.4 · Pantalla de Perfil y Configuración

```
╔══════════════════════════════════════════╗
║  PERFIL                                  ║  Header 56px
╠══════════════════════════════════════════╣
║                                          ║
║  ●●  Martín G.              [Editar]    ║  Avatar + nombre
║  martingonzalez@email.com                ║  DM Sans 13px --neutral-400
║  Perfil: Moderado                        ║  Badge --neutral-800
║                                          ║
║  ──────────────────────────────────────  ║
║                                          ║
║  CUENTA                                  ║  Section label
║  Documentación KYC         ✓ Verificado ║  Badge --bullish-subtle
║  Seguridad (2FA)           Activo →     ║
║  Cuenta bancaria           ···1234 →    ║
║                                          ║
║  ──────────────────────────────────────  ║
║                                          ║
║  NOTIFICACIONES                          ║
║  Movimientos de mercado     [Toggle ON] ║
║  Rendimiento mensual        [Toggle ON] ║
║  Recordatorio de ahorro     [Toggle OFF]║
║                                          ║
║  ──────────────────────────────────────  ║
║                                          ║
║  LEGAL                                   ║
║  Matrícula CNV AAGI Nº XXXX-X →        ║
║  Términos y condiciones →               ║
║  Política de privacidad →               ║
║                                          ║
║  [Cerrar sesión]                         ║  Ghost Danger
╚══════════════════════════════════════════╝
```

---

## 17 · Responsive y Adaptaciones por Breakpoint

### 17.1 · Breakpoints del Sistema

| Nombre | Rango | Columnas | Margin | Gutter | Uso |
|---|---|---|---|---|---|
| `xs` | < 375px | 1 | 12px | 12px | Teléfonos pequeños |
| `sm` | 375–767px | 1 | 16px | 16px | **Móvil estándar (primario)** |
| `md` | 768–1023px | 2 | 24px | 24px | Tablet portrait |
| `lg` | 1024–1279px | 12 | 32px | 24px | Tablet landscape / Desktop pequeño |
| `xl` | ≥ 1280px | 12 | 48px | 24px | Desktop estándar |

---

### 17.2 · Adaptaciones de Componentes por Breakpoint

#### Portfolio Card

| Aspecto | sm (mobile) | md (tablet) | lg+ (desktop) |
|---|---|---|---|
| Layout | Full-width, stack vertical | Full-width, 2 cols de datos | 8/12 cols, datos en grilla |
| Saldo | DM Mono 36px | DM Mono 40px | DM Mono 48px |
| Distribución | Stack vertical · 1 por fila | 2 por fila | Lista horizontal |
| Glassmorphism | `blur(16px)` (performance) | `blur(20px)` | `blur(24px)` |

#### Tab Bar

| sm | md | lg+ |
|---|---|---|
| Tab bar bottom fijo · 64px · 4 ítems | Tab bar bottom · puede mostrar labels | Sidebar izquierda · 240px · labels completas |

#### Chat de Luca

| sm | md | lg+ |
|---|---|---|
| Pantalla completa · ocupa el 100% | Panel derecho · 50% del viewport | Panel derecho fijo · 380px · al lado del portafolio |

#### Header

| sm | md | lg+ |
|---|---|---|
| Logo + pill CNV + notificaciones | Logo + pill + search + notif | Logo + nav links + search + perfil + pill |

---

### 17.3 · Safe Areas (Mobile)

```css
/* iOS safe areas — CRÍTICO para dispositivos con notch/Dynamic Island */
.header {
  padding-top: max(16px, env(safe-area-inset-top));
}
.tab-bar {
  padding-bottom: max(8px, env(safe-area-inset-bottom));
  height: calc(64px + env(safe-area-inset-bottom));
}
.bottom-sheet {
  padding-bottom: max(24px, env(safe-area-inset-bottom));
}
```

---

### 17.4 · Performance por Dispositivo

```
REGLAS DE DEGRADACIÓN PROGRESIVA:

glassmorphism:
  lg+:  blur(24px) saturate(180%)  → full quality
  md:   blur(20px) saturate(160%)  → slight reduction
  sm:   blur(16px) saturate(140%)  → mobile optimized
  @media (prefers-reduced-motion): backdrop-filter: none

animaciones stagger:
  sm: desactivar stagger largo (> 180ms total)
  Simplificar a fade único de 250ms

counter animado (saldo):
  sm mid-range: reducir duración a 500ms
  sm low-end: mostrar valor directo sin animación
  Detección: navigator.hardwareConcurrency < 4
```

---

## 18 · Gobierno del Design System

### 18.1 · Estructura de Versionado

```
SEMVER ADAPTADO PARA DESIGN SYSTEMS:

  MAJOR.MINOR.PATCH

  MAJOR: Cambios que rompen compatibilidad visual
    → Paleta de color refactorizada
    → Cambio de tipografía principal
    → Rediseño de componente core

  MINOR: Nuevos componentes o tokens sin breaking changes
    → Nuevo átomo o molécula
    → Nuevo token de color semántico
    → Nueva pantalla documentada

  PATCH: Correcciones y ajustes menores
    → Fix de ratio de contraste
    → Ajuste de spacing
    → Documentación de estado faltante

Versión actual: v2.0.0
```

---

### 18.2 · Changelog

```
v2.0.0 — Abril 2026
  [NEW] §10 Accesibilidad WCAG 2.1 AA — auditoría completa de contraste
  [NEW] §11 Sistema de iconografía — Phosphor Icons con catálogo MVP
  [NEW] §12 Matriz de estados completa por componente
  [NEW] §13 Motion system — 8 microinteracciones especificadas con CSS/JS
  [NEW] §14 Patrones de feedback y error — jerarquía de 5 niveles
  [NEW] §15 Skeleton loaders y 4 estados vacíos
  [NEW] §16 Pantallas: Onboarding, Historial, Detalle, Perfil
  [NEW] §17 Responsive system — 5 breakpoints + safe areas + degradación
  [NEW] §18 Gobierno del DS — semver, changelog, roles, checklist QA
  [UPD] §04 Botones: focus-visible, loading state, easing spring añadidos
  [UPD] §04 Input Ghost: estados hover, read-only, focus-visible añadidos
  [UPD] §04 Fila instrumento: focus-visible documentado
  [UPD] §05 Tokens: a11y tokens, warning-subtle, easing-spring añadidos
  [UPD] §07 CSS: prefers-reduced-motion, skip-link, focus-ring añadidos

v1.0.0 — Abril 2026
  [NEW] Lanzamiento inicial del Design System
  [NEW] §01 Paleta "Mango Maduración" — 5 escala primaria + neutros + semántica
  [NEW] §02 Sistema tipográfico dual — Playfair Display + DM Mono + DM Sans
  [NEW] §03 Grid 8px + border radius system
  [NEW] §04 Atomic Design — átomos, moléculas, organismos
  [NEW] §05 Design tokens JSON
  [NEW] §06 UX Resiliencia — legitimidad + KYC progresivo + modo alerta
  [NEW] §07 Variables CSS completas
  [NEW] §08 Anatomía Dashboard mobile
  [NEW] §09 Guía de implementación
```

---

### 18.3 · Roles y Responsabilidades

| Rol | Responsabilidad |
|---|---|
| **DS Lead** | Aprueba cambios MAJOR · mantiene coherencia del sistema |
| **Product Designer** | Propone y documenta nuevos componentes · actualiza MINOR |
| **Frontend Dev** | Implementa tokens · reporta discrepancias código/docs |
| **QA Engineer** | Ejecuta checklist de accesibilidad · verifica estados |
| **Compliance** | Revisa componentes de legitimidad CNV · aprueba disclaimer |

---

### 18.4 · Checklist de QA — Pre-release de Componente

```
DISEÑO:
  □ ¿El componente usa solo tokens del sistema? (sin colores hardcoded)
  □ ¿Todos los textos usan tokens tipográficos definidos?
  □ ¿El spacing es múltiplo de 4px?
  □ ¿El border-radius sigue la escala definida?

ACCESIBILIDAD:
  □ ¿Todos los pares texto/fondo tienen ratio ≥ 4.5:1?
  □ ¿Hay focus-visible definido en todos los interactivos?
  □ ¿Los estados de color tienen alternativa no-color?
  □ ¿Los elementos tienen aria-label o role apropiado?
  □ ¿Se respeta prefers-reduced-motion?

ESTADOS:
  □ ¿Están implementados todos los estados de la matriz §12?
  □ ¿El estado loading muestra feedback en < 80ms?
  □ ¿El estado vacío tiene mensaje y CTA?
  □ ¿El estado error tiene mensaje en tono Luca?

RESPONSIVE:
  □ ¿El componente funciona en los 5 breakpoints?
  □ ¿Se aplicaron safe areas para mobile?
  □ ¿El glassmorphism degrada correctamente en mobile?

MOTION:
  □ ¿Las animaciones duran < 500ms?
  □ ¿Se desactivan con prefers-reduced-motion?
  □ ¿El feedback táctil ocurre en < 80ms?
```

---

### 18.5 · Proceso de Contribución

```
1. PROPUESTA
   Crear issue: "DS-XXX · [Componente] · [Tipo de cambio]"
   Describir: problema que resuelve, alternativas consideradas

2. DISEÑO
   Mockup en la herramienta de diseño del equipo
   Documentar todos los estados (ver checklist §18.4)
   Peer review por al menos 1 designer

3. IMPLEMENTACIÓN
   Branch: ds/XXX-nombre-componente
   PR con referencia al issue
   Incluir tests de accesibilidad (axe-core)

4. REVIEW
   Design review: ¿coincide con el mockup?
   Code review: ¿usa los tokens correctos?
   A11y review: ¿pasa el checklist?

5. MERGE Y DOCUMENTACIÓN
   Actualizar este documento (MINOR o PATCH)
   Actualizar changelog con descripción
   Notificar al equipo en canal de DS
```

---

## 19 · Fuentes y Dependencias

### Fuentes (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?
  family=Playfair+Display:wght@600;700&
  family=DM+Mono:wght@400;500&
  family=DM+Sans:wght@400;500;600&
  display=swap" rel="stylesheet">
```

### Dependencias de Iconografía

```bash
# npm
npm install @phosphor-icons/react   # React
npm install @phosphor-icons/web     # Web Components / HTML puro

# CDN
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```

### Dependencias Opcionales

```bash
# Validación de accesibilidad en desarrollo
npm install --save-dev axe-core
npm install --save-dev @axe-core/react

# Animaciones complejas (si se requieren en v1.1+)
npm install motion
```

---

## 20 · Principios de Implementación — Reglas Definitivas

| # | Principio | Regla |
|---|---|---|
| 1 | **8px grid** | Todo spacing múltiplo de 4px. Preferir 8px como unidad base. |
| 2 | **Tabular nums** | `font-variant-numeric: tabular-nums` en TODO elemento con cifras. |
| 3 | **Dark mode por defecto** | `color-scheme: dark` en `:root`. Sin modo light en MVP. |
| 4 | **Serif para emoción** | `--font-editorial` solo en titulares, metas e hitos. Nunca en datos. |
| 5 | **Radius 4px** | Radio estándar en interactivos. 8px+ solo en bottom sheets. |
| 6 | **Glass con moderación** | Glassmorphism exclusivo en Portfolio Card principal. |
| 7 | **Mango-300 para CTAs** | `#FFB800` es el único color de acción primaria. |
| 8 | **Luca como tab** | Chat = pantalla completa o tab. Nunca FAB flotante. |
| 9 | **focus-visible obligatorio** | Todo interactivo necesita `outline: var(--focus-ring)`. |
| 10 | **reduced-motion** | Respetar siempre `prefers-reduced-motion`. |
| 11 | **Nunca solo color** | Estado semántico siempre con ícono + texto además del color. |
| 12 | **Errores en voz de Luca** | Mensajes de error en tono humano, sin códigos técnicos. |
| 13 | **Skeleton > spinner** | Para carga de contenido estructurado, usar skeleton. Spinner solo en acciones puntuales. |
| 14 | **No tokens hardcoded** | Ningún color, spacing o tipografía hardcoded. Solo variables CSS. |
| 15 | **Safe areas** | `env(safe-area-inset-*)` en header, tab bar y bottom sheets. |

---

*Mango Design System · Editorial Financial Terminal · v2.0.0 · Abril 2026*
*Documento vivo — actualizar con cada cambio estructural al sistema*
