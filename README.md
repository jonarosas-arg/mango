# 🥭 Mango · Inversión con IA

**Mango** es una plataforma de inversión diseñada para el ahorrista argentino, enfocada en proteger el capital de la inflación mediante asesoramiento inteligente y una experiencia de usuario de primer nivel.

---

## 🧠 Contexto para el AI (Vibe Coding Source of Truth)

Si estás trabajando en este código, sos el arquitecto jefe de Mango. Tu objetivo es mantener una aplicación que se sienta **premium, confiable y cercana**. No es solo un dashboard de finanzas; es una herramienta de empoderamiento financiero.

### 🎨 Design Language (The "Mango" Vibe)
- **Tema**: Dark Mode absoluto (`neutral-950`).
- **Tipografía**:
  - `font-editorial`: Playfair Display (Bold/Italic para títulos y énfasis).
  - `font-data`: DM Mono (Para números, tickers y valores monetarios).
  - `font-body`: DM Sans (Para lectura y navegación).
- **Estética**: Glassmorphism avanzado en tarjetas principales, bordes sutiles (`neutral-800/50`) y acentos en **Mango Orange** (`#FFB800` a `#F5890A`).
- **Interacción**: Uso intensivo de `motion/react` para entradas de pantalla y efectos de estado.

### 🛠️ Tech Stack
- **Frontend**: React 18 (Vite) + TypeScript.
- **Estilos**: Tailwind CSS v3/v4 con variables de tema personalizadas.
- **Animaciones**: Framer Motion (`motion/react`).
- **Icomos**: Lucide React.
- **Gráficos**: Recharts.
- **AI**: Google Gemini SDK (vía `useLuca` hook).

---

## 💼 Lógica de Negocio e Invariantes

### 🇦🇷 Contexto Argentino
- **Moneda**: Manejo dual de ARS y USD.
- **Instrumentos**: Conocimiento de **CEDEARs, FCIs, Obligaciones Negociables (ONs), Bonos CER y Lecaps**.
- **Perfil de Riesgo**: Conservador, Moderado, Dinámico.

### 🤖 Luca (Tu Copiloto Financiero)
Luca no es un bot genérico. Es un asesor que habla en **argentino rioplatense** (voseo), es directo y transparente.
- **Acciones**: Luca puede crear objetivos, sugerir inversiones y mover fondos.
- **Notificaciones**: Todo cambio realizado por Luca genera una notificación persistente en el `NotificationCenter`.

---

## 🏗️ Estructura del Proyecto

```bash
src/
├── components/          # Componentes atómicos y vistas
│   ├── ui/              # Componentes de base (Badge, etc.)
│   ├── layout/          # Estructura global (Header, Navigation)
│   └── Luca/            # Todo lo relacionado con el asistente AI
├── context/             # Estado global (Notificaciones)
├── hooks/               # Lógica reutilizable (useLuca, usePortfolio)
├── types.ts             # Definiciones de TypeScript (Source of Truth de datos)
└── constants.ts         # Mock data y configuraciones fijas
```

---

## 🚦 Guía de Desarrollo para el AI
1. **Tipado Estricto**: Siempre actualizá `src/types.ts` antes de implementar nuevas entidades.
2. **Aislamiento de Lógica**: La lógica de interacción con Gemini debe vivir exclusivamente en el hook `useLuca`.
3. **Fidelidad Visual**: Antes de crear un componente, revisá las variables `@theme` en `src/index.css`. Mantené la coherencia de los espaciados y bordes.
4. **Notificaciones**: Cada acción exitosa del usuario debe disparar un `addNotification` del `NotificationContext`.

---

## 📈 Roadmap / Próximos Pasos
- [ ] Integración de datos reales vía API financiera.
- [ ] Desglose detallado de impuestos (Retenciones, Bienes Personales).
- [ ] Modo "Sigilo" para ocultar saldos.
- [ ] Simulador de interés compuesto interactivo.

---

> "Haciendo que el mango rinda, un bloque de código a la vez." 🥭🚀
