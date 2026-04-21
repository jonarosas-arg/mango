  
**PRODUCT REQUIREMENTS DOCUMENT**

**Mango \- Plataforma de Inversión Asistida por IA**

Para pequeños inversores en Argentina (30–45 años)

*MVP Funcional — Versión 1.0*

| Estado | Borrador para revisión |
| :---- | :---- |
| **Fecha** | Abril 2026 |
| **Versión** | 1.0 MVP |
| **Audiencia** | Equipo fundador / Desarrollo |

# **1\. Visión General del Producto**

## **1.1 Problema que resuelve**

El segmento de 30 a 45 años con capacidad de ahorro moderada en Argentina enfrenta tres barreras críticas para comenzar a invertir:

* Trauma financiero acumulado (inflación, corralito, devaluaciones) que genera aversión extrema a la pérdida.

* Complejidad percibida de los instrumentos y plataformas existentes, que refuerza la idea de que invertir "es solo para ricos o expertos".

* Ausencia de asesoramiento accesible y personalizado en el segmento retail: los brokers priorizan grandes cuentas, los robo-advisors son demasiado genéricos.

## **1.2 Solución propuesta (MVP)**

Una plataforma de inversión que combina:

* Un asistente conversacional con IA que actúa como "asesor financiero personal", guiando al usuario desde cero hasta su primera inversión.

* Un sistema de perfilado de riesgo conversacional que reemplaza los cuestionarios estáticos.

* Cartera recomendada automática basada en el perfil, con instrumentos accesibles desde montos mínimos.

* Educación financiera contextual integrada en el flujo de uso, no como módulo separado.

## **1.3 Propuesta de valor diferencial**

| Posicionamiento del MVP Simplicidad de un robo-advisor \+ Control de un broker tradicional \+ Asesoramiento personalizado de banca privada — todo escalado por IA conversacional. |
| :---- |

## **1.4 Usuarios objetivo**

| Atributo | Descripción |
| :---- | :---- |
| Edad | 30 a 45 años |
| Perfil económico | Ahorro mensual disponible de USD 50 a USD 1.000 |
| Experiencia financiera | Nula o básica (nunca invirtieron o lo hicieron puntualmente) |
| Motivación principal | Proteger ahorros de la inflación / construir patrimonio futuro |
| Comportamiento actual | Dólar físico, plazo fijo, o simplemente no ahorra |
| Barrera principal | Miedo a perder, desconfianza, no saber por dónde empezar |

# **2\. Alcance del MVP**

## **2.1 Lo que incluye el MVP**

El MVP se define como el conjunto mínimo de funcionalidades que permiten a un usuario:

* Registrarse y validar su identidad.

* Completar un perfil de riesgo a través del asistente conversacional.

* Recibir una cartera recomendada personalizada.

* Fondear su cuenta y ejecutar su primera inversión.

* Visualizar el estado de su portafolio e historial de movimientos.

## **2.2 Lo que NO incluye el MVP**

Para mantener el foco, el MVP excluye deliberadamente:

* Trading activo o ejecución discrecional de múltiples instrumentos por el usuario.

* Tokenización de activos o crowdfunding.

* Integración con múltiples brokers o custodios simultáneos.

* Módulo de impuestos o declaraciones fiscales.

* Aplicación móvil nativa (el MVP opera como plataforma web responsive).

* Gamificación avanzada (rachas, insignias) — se planifica para v1.1.

## **2.3 Horizonte temporal**

| Fase | Duración estimada | Hito clave |
| :---- | :---- | :---- |
| Diseño funcional \+ Arquitectura | 4 semanas | PRD aprobado, stack definido |
| Desarrollo core (Auth, KYC, IA) | 8 semanas | Demo interna funcional |
| Integración broker / custodia | 4 semanas | Primera orden ejecutada en staging |
| QA \+ Compliance CNV | 3 semanas | Aprobación regulatoria de flujo |
| Beta cerrada | 3 semanas | 50 usuarios reales con cuenta fondada |

# **3\. Módulos Funcionales del MVP**

El sistema se estructura en 5 módulos funcionales independientes pero conectados. Cada módulo define sus entradas, salidas, reglas de negocio y criterios de aceptación.

## **Módulo 1 — Registro y Autenticación**

### **3.1.1 Descripción**

Permite al usuario crear una cuenta con la mínima fricción posible. El objetivo es capturar el lead y diferir la validación documental a un momento posterior del flujo (KYC progresivo).

### **3.1.2 Flujo funcional**

* El usuario ingresa email y contraseña (o se autentica con Google/Apple OAuth).

* El sistema envía un email de verificación de 6 dígitos con expiración de 15 minutos.

* Verificado el email, se crea la sesión y se redirige al flujo de onboarding del asistente.

* El sistema registra el evento signup\_started con timestamp y fuente de adquisición.

### **3.1.3 Reglas de negocio**

* No se solicita DNI, teléfono ni datos bancarios en esta etapa.

* El email debe ser único en el sistema; si ya existe, se ofrece recuperación de contraseña.

* La contraseña debe tener mínimo 8 caracteres con al menos un número.

* Se implementa 2FA opcional con TOTP (Google Authenticator) disponible desde el registro.

### **3.1.4 Criterios de aceptación**

* Un usuario puede completar el registro en menos de 2 minutos con solo email y contraseña.

* El sistema soporta OAuth con al menos 1 proveedor social en el MVP.

* El token de verificación de email expira correctamente y genera reenvío automático tras 5 minutos.

## **Módulo 2 — KYC (Verificación de Identidad)**

### **3.2.1 Descripción**

Proceso de validación de identidad requerido por la CNV para operar como AAGI/ALyC. Se implementa de forma progresiva: el usuario puede explorar la plataforma antes de completar el KYC completo, pero no puede fondear ni invertir hasta tenerlo aprobado.

### **3.2.2 Flujo funcional**

* El asistente solicita los datos en el momento en que el usuario intenta fondear su cuenta por primera vez.

* El usuario sube foto del frente y dorso del DNI.

* El usuario realiza una prueba de vida (liveness check): video de 3 segundos o selfie con gesto.

* El sistema envía los documentos a un proveedor de KYC automatizado (ej. Truora, Metamap, Veritran).

* El proveedor responde con aprobado / rechazado / requiere revisión manual en un máximo de 5 minutos.

* El sistema notifica al usuario por email y en la plataforma sobre el resultado.

* Si es aprobado, el estado de la cuenta cambia a KYC\_verified y se habilita el fondeo.

### **3.2.3 Reglas de negocio**

* El KYC es obligatorio para habilitar transferencias entrantes y la ejecución de órdenes.

* El usuario tiene hasta 3 intentos de KYC antes de requerir revisión manual.

* Los documentos son almacenados en repositorio encriptado con acceso auditado.

* Los datos del KYC no se comparten con terceros fuera del proveedor de validación.

* Se registra el evento KYC\_started y KYC\_approved/rejected con timestamp.

### **3.2.4 Criterios de aceptación**

* El 80% de los KYC con DNI válido son aprobados en menos de 3 minutos en modo automático.

* El usuario recibe una notificación clara si el KYC es rechazado con instrucciones de qué corregir.

* El sistema de KYC está integrado con un proveedor certificado compatible con normativas CNV.

## **Módulo 3 — Asistente Conversacional con IA**

### **3.3.1 Descripción**

El núcleo diferencial del producto. Un asistente basado en LLM que guía al usuario a través del perfilado de riesgo, la educación básica y la selección de cartera. Actúa como un "pedagogo emocional": valida preocupaciones, explica conceptos en lenguaje simple y hace preguntas que revelan objetivos reales.

### **3.3.2 Modos de operación del asistente**

| Modo | Cuándo se activa | Función principal |
| :---- | :---- | :---- |
| Onboarding | Primera sesión del usuario | Perfil de riesgo conversacional \+ bienvenida al producto |
| Asesor | Cualquier momento post-onboarding | Consultas sobre cartera, mercado, instrumentos |
| Educativo | Trigger por comportamiento del usuario | Explicaciones contextuales ante acciones riesgosas |
| Alerta | Volatilidad del mercado o acción inminente del usuario | Intervención preventiva (ej. venta en pánico) |

### **3.3.3 Flujo de perfilado de riesgo (Onboarding)**

El asistente conduce una conversación de 5 a 10 minutos que reemplaza el cuestionario estático tradicional. Las preguntas siguen esta secuencia:

* Objetivo primario: "¿Para qué estás ahorrando? ¿Casa, jubilación, educación de tus hijos, o simplemente proteger tus pesos?"

* Horizonte temporal: "¿En cuántos años pensás que vas a necesitar este dinero?"

* Tolerancia a la volatilidad: "Si mañana tu inversión bajara un 10%, ¿qué harías?" (con opciones guiadas)

* Liquidez necesaria: "¿Necesitás poder retirar el dinero en cualquier momento, o podés dejarlo quieto varios meses?"

* Capital disponible: "¿Con cuánto te gustaría empezar, sabiendo que podés invertir desde USD 50?"

Al finalizar, el asistente categoriza al usuario en uno de tres perfiles:

| Perfil | Criterios principales | Cartera sugerida |
| :---- | :---- | :---- |
| Conservador | Horizonte \< 1 año, aversión alta a pérdidas, necesita liquidez | 70% FCI Money Market \+ 30% Lecaps/CER |
| Moderado | Horizonte 1-3 años, tolera volatilidad moderada | 40% FCI \+ 30% ONs \+ 20% CEDEARs \+ 10% Bonos |
| Dinámico | Horizonte \> 3 años, acepta volatilidad por mayor retorno | 15% FCI \+ 10% ONs \+ 35% CEDEARs \+ 40% Acciones/ETFs |

### **3.3.4 Reglas de negocio del asistente**

* El asistente nunca promete rendimientos ni proyecta ganancias específicas.

* Ante preguntas sobre instrumentos fuera del catálogo del MVP, el asistente responde con información educativa general y no direcciona a terceros.

* El asistente admite explícitamente incertidumbre ("No lo sé", "El mercado es incierto") para construir credibilidad.

* Las respuestas del asistente son auditables: cada conversación se almacena para revisión de compliance.

* Si el usuario expresa deseo de retirar todo ante una baja del mercado, el asistente activa el modo Alerta con información contextual antes de permitir la acción.

### **3.3.5 Criterios de aceptación**

* El 90% de los usuarios completan el perfilado en una sola sesión sin abandonar.

* El asistente responde en menos de 3 segundos el 95% de las consultas.

* El perfilado asigna correctamente al usuario a uno de los 3 perfiles con una tasa de corrección voluntaria inferior al 15% (el usuario no cambia de perfil post-asignación).

* Todas las conversaciones son almacenadas y accesibles para auditoría de compliance.

## **Módulo 4 — Gestión de Cuenta y Fondeo**

### **3.4.1 Descripción**

Permite al usuario depositar fondos en su cuenta virtual de inversión. El MVP soporta transferencias bancarias en pesos y, si el custodio lo permite, dólar MEP. El fondeo es el paso más crítico del funnel: es donde más usuarios abandonan históricamente.

### **3.4.2 Flujo funcional**

* El usuario selecciona el monto a depositar (mínimo: ARS equivalente a USD 10).

* El sistema genera un CVU/CBU único por usuario para recibir transferencias.

* El usuario transfiere desde su banco o billetera digital (Mercado Pago, Ualá, etc.).

* El sistema detecta la acreditación en tiempo real (webhook del custodio) y actualiza el saldo disponible.

* El asistente notifica al usuario sobre la acreditación y lo guía hacia la ejecución de su primera inversión.

* El sistema registra el evento account\_funded con monto, origen y timestamp.

### **3.4.3 Reglas de negocio**

* El fondeo solo está disponible para usuarios con KYC aprobado.

* El saldo depositado queda disponible para invertir en un máximo de 2 horas hábiles.

* No se cobran comisiones sobre el depósito en el MVP.

* El saldo no invertido genera rendimiento automático en FCI Money Market mientras espera ser asignado (sweeping automático).

* El usuario puede ver el historial completo de movimientos: depósitos, retiros, compras y rendimientos.

### **3.4.4 Retiros**

* El usuario puede solicitar retiro parcial o total de su saldo disponible (no invertido).

* Los activos invertidos pueden liquidarse en T+0 (FCI MM) o T+1/T+2 según el instrumento.

* El retiro se acredita en la cuenta bancaria registrada en el KYC en un máximo de 48 horas hábiles.

### **3.4.5 Criterios de aceptación**

* El 95% de las transferencias son detectadas y acreditadas en menos de 60 minutos.

* El usuario puede ver su saldo actualizado sin necesidad de refrescar manualmente.

* El sweeping automático a FCI MM está activo para el 100% de los saldos sin invertir por más de 1 hora.

## **Módulo 5 — Portafolio y Ejecución de Órdenes**

### **3.5.1 Descripción**

Permite al usuario ver su portafolio recomendado, confirmarlo y ejecutar la asignación de capital a los instrumentos sugeridos. En el MVP, la ejecución es semi-automática: el usuario aprueba la cartera sugerida por el asistente y el sistema ejecuta las órdenes a través del broker/custodio integrado.

### **3.5.2 Flujo funcional — Primera inversión**

* El asistente presenta la cartera recomendada con descripción en lenguaje simple de cada instrumento.

* El usuario puede ajustar porcentajes manualmente dentro de rangos permitidos (±10% por instrumento).

* El usuario confirma la cartera y aprueba la ejecución.

* El sistema envía las órdenes al broker/custodio a través de su API.

* El sistema recibe confirmación de ejecución y actualiza el portafolio del usuario en tiempo real.

* El asistente celebra el hito y muestra el impacto proyectado en el objetivo de vida del usuario.

* El sistema registra el evento first\_value\_action con detalle de instrumentos y montos.

### **3.5.3 Vista del portafolio**

El usuario puede acceder en cualquier momento a:

* Saldo total en ARS y equivalente en USD.

* Desglose por instrumento: nombre, monto invertido, valor actual, rendimiento en % y en pesos.

* Gráfico de evolución del portafolio en el tiempo (desde la primera inversión).

* Progreso hacia la meta definida en el onboarding (ej. "35% del objetivo completado").

* Historial de movimientos: compras, ventas, dividendos, rendimientos de FCI.

### **3.5.4 Reglas de negocio**

* El usuario no puede ejecutar órdenes sin saldo disponible suficiente para cubrir el monto \+ comisiones.

* Las órdenes se ejecutan a precio de mercado (sin órdenes límite en el MVP).

* El sistema muestra el costo de la operación antes de la confirmación (comisión del custodio \+ spread, si aplica).

* Si el mercado está cerrado, la orden se encola y se ejecuta al próximo día hábil de apertura.

* El usuario recibe notificación por email y en plataforma al confirmar cada ejecución.

### **3.5.5 Criterios de aceptación**

* El usuario puede visualizar su portafolio actualizado en menos de 1 minuto tras la ejecución de una orden.

* El sistema ejecuta la orden en menos de 5 segundos cuando el mercado está abierto.

* El resumen de costos es visible y comprensible antes de cualquier confirmación de compra.

* El 100% de las órdenes ejecutadas generan un comprobante descargable en PDF.

# **4\. Instrumentos Financieros del MVP**

El catálogo del MVP se limita a instrumentos de alta liquidez, bajo costo de entrada y cobertura contra inflación y tipo de cambio. Se excluyen instrumentos de alta complejidad operativa para mantener el foco en la experiencia del usuario primerizo.

| Instrumento | Tipo | Perfil compatible | Mínimo de entrada | Liquidez |
| :---- | :---- | :---- | :---- | :---- |
| FCI Money Market (T+0) | Renta variable CER / liquidez | Todos | ARS 100 | Inmediata |
| Lecaps / Bonos CER | Renta fija en pesos ajustada | Conservador / Moderado | ARS 1.000 | T+1 |
| Obligaciones Negociables (ONs) | Renta fija en USD | Moderado / Dinámico | USD 100 | T+1 / T+2 |
| CEDEARs (mega-caps) | Renta variable global en pesos | Moderado / Dinámico | ARS 1.000 | T+2 |
| Bonos Soberanos USD (AL30) | Renta fija soberana | Moderado / Dinámico | ARS 5.000 | T+2 |

| Nota regulatoria Todos los instrumentos deben estar disponibles a través del custodio/broker integrado y aprobados para distribución a inversores minoristas según normativa CNV vigente. El sistema no permite operaciones en instrumentos fuera de este catálogo en el MVP. |
| :---- |

# **5\. Integraciones Externas Requeridas**

| Servicio | Función | Integración | Criticidad |
| :---- | :---- | :---- | :---- |
| Broker / Custodio (ALyC) | Ejecución de órdenes y custodia de activos | API REST / FIX Protocol | Crítica |
| Proveedor KYC | Validación de identidad (DNI \+ liveness) | API REST \+ webhook | Crítica |
| Proveedor LLM | Motor del asistente conversacional | API (ej. OpenAI / Anthropic) | Crítica |
| Pasarela de pagos / CVU | Fondeo vía transferencia bancaria | API bancaria / Fintech | Crítica |
| Proveedor de precios de mercado | Cotizaciones en tiempo real | API REST o WebSocket | Alta |
| Servicio de email transaccional | Notificaciones al usuario | API (ej. SendGrid, Resend) | Alta |
| Almacenamiento de documentos | Custodia de archivos KYC encriptados | Cloud storage (S3 / GCS) | Alta |

# **6\. Modelo de Negocio del MVP**

## **6.1 Fuentes de ingreso habilitadas en el MVP**

| Modelo | Descripción | Implementación en MVP |
| :---- | :---- | :---- |
| AUM Fee (0.75% anual) | Comisión sobre el patrimonio administrado, cobrada mensualmente (1/12 del 0.75%) | Sí — cálculo automático mensual |
| Spread en tipo de cambio | Diferencial al convertir pesos a dólares para compra de activos USD | Sí — vía custodio |
| Suscripción premium (futuro) | Plan mensual con acceso a carteras avanzadas y análisis adicional | No — v1.1 |
| Comisión por referido | Porcentaje de AUM por usuarios referidos por clientes activos | No — v1.1 |

## **6.2 Transparencia de costos**

El MVP debe mostrar en todo momento los costos al usuario antes de cualquier acción que los genere. El desglose debe incluir la comisión de la plataforma y la del custodio por separado.

# **7\. Requisitos de Compliance y Regulación**

## **7.1 Obligaciones regulatorias CNV**

* La plataforma debe operar bajo matrícula de Agente de Asesoramiento Global de Inversión (AAGI) o en alianza con un ALyC matriculado.

* Todas las recomendaciones de inversión deben cumplir con la RG 1025 de la CNV sobre plataformas digitales de inversión.

* El perfilado de riesgo del asistente debe documentarse y ser auditable, equivalente funcional a un test de idoneidad.

* Los activos del cliente deben estar segregados del patrimonio de la empresa y custodiados en Caja de Valores o equivalente regulado.

## **7.2 Datos y privacidad**

* Los datos personales y documentos del KYC se almacenan encriptados con AES-256 en reposo y TLS en tránsito.

* El sistema implementa autenticación 2FA disponible para todos los usuarios desde el MVP.

* Los logs de acceso y transacciones se retienen por un mínimo de 5 años.

* El usuario tiene derecho a solicitar la eliminación de su cuenta y datos personales (derecho al olvido), excepto los datos requeridos por obligaciones legales/regulatorias.

## **7.3 Señales de legitimidad en el producto**

* El número de matrícula CNV debe ser visible en la plataforma en todo momento.

* El usuario debe poder verificar el estatus regulatorio desde un link directo al sitio de la CNV.

* Las conversaciones del asistente incluyen un disclaimer legal visible al inicio de cada sesión.

# **8\. Métricas de Éxito del MVP**

## **8.1 KPIs de activación (primeros 90 días)**

| Métrica | Definición | Target MVP |
| :---- | :---- | :---- |
| Tasa de activación | % de registros que completan su primera inversión | \> 40% |
| Tiempo hasta primera inversión | Días desde registro hasta first\_value\_action | \< 7 días |
| Tasa de aprobación KYC | % de KYC enviados aprobados automáticamente | \> 75% |
| Abandono en fondeo | % de usuarios KYC aprobados que no fondean en 30 días | \< 45% |
| Retención a 30 días | % de inversores activos a los 30 días de su primera inversión | \> 65% |
| NPS post-primera inversión | Net Promoter Score medido a las 48hs de la primera orden | \> 40 |

## **8.2 KPIs de negocio (beta cerrada)**

| Métrica | Target |
| :---- | :---- |
| AUM total en beta (50 usuarios) | USD 50.000+ |
| Inversión promedio por usuario | USD 1.000+ |
| Costo de adquisición (CAC) | \< USD 30 por usuario activado |
| Churn mensual (inversores) | \< 8% |

# **9\. Supuestos y Riesgos**

## **9.1 Supuestos clave**

* Existe un broker/custodio dispuesto a aliarse para el MVP que provee API de ejecución y custodia regulada.

* Se obtiene la matrícula AAGI o se opera bajo el paraguas regulatorio de un ALyC existente antes del lanzamiento público.

* El proveedor de KYC seleccionado tiene cobertura para DNI argentino con tasa de aprobación automática \> 70%.

* El modelo LLM seleccionado permite customización suficiente para restringir el asistente al dominio financiero local.

## **9.2 Riesgos y mitigaciones**

| Riesgo | Probabilidad | Impacto | Mitigación |
| :---- | :---- | :---- | :---- |
| Demora en obtención de matrícula CNV | Media | Crítico | Operar bajo paraguas de ALyC partner desde el inicio |
| Alta tasa de abandono en KYC | Alta | Alto | KYC progresivo \+ asistente que explica cada paso con contexto de seguridad |
| Respuestas incorrectas del asistente IA | Media | Alto | Revisión humana de conversaciones en beta \+ guardrails de dominio |
| Contexto macroeconómico adverso (devaluación) | Alta | Medio | Comunicación proactiva \+ cartera con cobertura cambiaria incorporada |
| Competidor lanza producto similar | Media | Medio | Acelerar beta y priorizar NPS como ventaja de retención |

# **10\. Criterios de Salida del MVP**

El MVP se considerará exitoso y listo para la siguiente fase (v1.0 público) cuando se cumplan simultáneamente:

| Criterio 1 — Activación 50 usuarios con cuenta fondeada y al menos una orden ejecutada en la beta cerrada. |
| :---- |

| Criterio 2 — Retención Tasa de retención a 30 días superior al 60% del cohort beta. |
| :---- |

| Criterio 3 — Satisfacción NPS post-primera inversión superior a 35 puntos. |
| :---- |

| Criterio 4 — Compliance Aprobación del flujo completo por el equipo legal/compliance sin observaciones bloqueantes. |
| :---- |

| Criterio 5 — Estabilidad Disponibilidad del sistema superior al 99% durante las 3 semanas de beta. |
| :---- |

*Documento preparado a partir de investigación de mercado — Versión 1.0 — Abril 2026*