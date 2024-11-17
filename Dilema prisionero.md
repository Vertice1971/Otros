# Simulación del Dilema del Prisionero

## Autor
**Tomás Cuesta

## Introducción
El **Dilema del Prisionero** es un concepto fundamental en la teoría de juegos y la psicología social que ilustra cómo dos individuos pueden no cooperar, incluso si es en su mejor interés hacerlo. Esta simulación interactiva permite a los usuarios explorar diferentes estrategias dentro del Dilema del Prisionero, observando cómo las decisiones individuales afectan los resultados globales.

## El Dilema del Prisionero: Lógica y Teoría
El Dilema del Prisionero es un escenario clásico donde dos jugadores enfrentan la decisión de **cooperar** o **traicionar** sin conocer la elección del otro. Las recompensas o penalizaciones dependen de las combinaciones de decisiones de ambos jugadores. La matriz de pagos típica es la siguiente:

|                  | **Cooperar** | **Traicionar** |
|------------------|--------------|----------------|
| **Cooperar**     | R = 3, R = 3  | S = 0, T = 5    |
| **Traicionar**   | T = 5, S = 0  | P = 1, P = 1    |

- **R (Recompensa):** 3 puntos si ambos cooperan.
- **T (Tentación):** 5 puntos si traicionas y el otro coopera.
- **P (Castigo):** 1 punto si ambos traicionan.
- **S (Pago del Engañado):** 0 puntos si cooperas y el otro traiciona.

### Interpretación de las Estrategias
- **Cooperar:** Actuar de manera altruista, beneficiando al otro jugador.
- **Traicionar:** Actuar de manera egoísta, buscando una ventaja personal inmediata.
- **Tit-for-Tat (Ojo por Ojo):** Comienza cooperando y luego imita la jugada anterior del oponente.
- **Tit-for-Tat Perdona:** Similar a Tit-for-Tat, pero ocasionalmente perdona una traición y coopera (con una probabilidad del 10%).

### Dilema Central
Aunque la cooperación conjunta (R, R) es beneficiosa para ambos jugadores, la traición individual (T, S) ofrece una mayor recompensa personal. Sin embargo, si ambos jugadores eligen traicionar, ambos reciben una penalización (P, P), lo cual es peor que la cooperación mutua. Este dilema resalta el conflicto entre el interés individual y el bien común.

## Acerca del Programa
La **Simulación del Dilema del Prisionero** es una aplicación web interactiva desarrollada en HTML, CSS y JavaScript. Permite a los usuarios configurar estrategias para dos Inteligencias Artificiales (IA1 e IA2) y observar cómo estas decisiones influyen en los resultados de 100 jugadas consecutivas.

### Funcionalidades Principales
- **Configuración de Estrategias para IA1:**
  - Asignar porcentajes a diversas estrategias.
  - Las estrategias disponibles son:
    - Siempre Cooperar
    - Siempre Traicionar
    - Estrategia Aleatoria
    - Tit-for-Tat (Ojo por Ojo)
    - Tit-for-Tat Perdona
- **Selección de Estrategia para IA2:**
  - Elegir una única estrategia de las mismas cinco opciones disponibles para IA1.
- **Simulación en Tiempo Real:**
  - Ejecuta 100 jugadas mostrando cada decisión y los pagos resultantes.
  - Actualiza totales acumulados y proporciona un desglose de puntos por estrategia utilizada por IA1.
- **Interfaz Intuitiva y Agradable:**
  - Diseño limpio y responsivo que se adapta a diferentes tamaños de pantalla.
  - Visualización clara de la matriz de pagos y explicaciones de las estrategias.

## Características
- **Matriz de Pagos Detallada:**
  - Presenta la matriz clásica del Dilema del Prisionero con explicaciones de cada término.
- **Configuración Flexible:**
  - Permite personalizar la distribución de estrategias para IA1, asegurando una experiencia de simulación variada.
- **Desglose de Resultados:**
  - Al finalizar la simulación, muestra no solo los puntos totales sino también un análisis detallado de cómo cada estrategia contribuyó al resultado final.
- **Validación de Datos:**
  - Asegura que la suma de los porcentajes de estrategias para IA1 sea exactamente 100%, previniendo errores en la configuración.

## Cómo Usar la Aplicación
1. **Acceder a la Simulación:**
   - Abre el archivo en tu navegador web preferido.

2. **Revisar la Matriz de Pagos:**
   - Comprende las recompensas y penalizaciones asociadas a cada combinación de decisiones.

3. **Configurar Estrategias para IA1:**
   - Asigna un porcentaje a cada una de las cinco estrategias disponibles.
   - Asegúrate de que la suma total sea exactamente 100%.

4. **Seleccionar Estrategia para IA2:**
   - Elige una única estrategia de la lista desplegable para IA2.

5. **Iniciar la Simulación:**
   - Haz clic en el botón **"Iniciar Simulación"**.
   - La simulación comenzará automáticamente, mostrando cada jugada en la tabla de resultados en tiempo real.

6. **Observar los Resultados:**
   - Durante la simulación, podrás ver cómo las estrategias elegidas afectan los pagos y los totales acumulados.
   - Al finalizar, se mostrarán los puntos totales obtenidos por cada IA y un desglose de los puntos que IA1 obtuvo con cada estrategia.

## Consideraciones Adicionales
- **Estrategias Avanzadas:**
  - Las estrategias como **Tit-for-Tat** y **Tit-for-Tat Perdona** están diseñadas para imitar comportamientos recíprocos y flexibles, respectivamente, lo que puede generar dinámicas interesantes en la simulación.
  
- **Extensibilidad:**
  - El código está estructurado de manera modular, facilitando la adición de nuevas estrategias o la modificación de las existentes.
  - Puedes expandir la simulación para incluir más jugadas o más IA si lo deseas.