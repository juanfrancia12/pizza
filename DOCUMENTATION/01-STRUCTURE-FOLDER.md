# Estructura de carpetas del proyecto

Este documento describe la organización base de carpetas para un proyecto Next.js con App Router. Sirve como referencia para mantener consistencia y escalabilidad en cualquier aplicación.

---

## `src/app/`

Directorio raíz del **App Router** de Next.js. Cada carpeta y archivo dentro de `app/` define una ruta de la aplicación mediante el sistema de enrutamiento basado en el sistema de archivos.

### Archivos base

| Archivo | Propósito |
|---------|-----------|
| `layout.tsx` | Layout compartido que envuelve las páginas de un segmento de ruta. Persiste entre navegaciones y puede incluir elementos globales (HTML, body, providers, navegación). |
| `page.tsx` | Componente de página asociado a una ruta. Es el contenido principal que se renderiza en esa URL. |
| `loading.tsx` | UI de carga mostrada automáticamente mientras el contenido de la ruta se está resolviendo (React Suspense). |
| `not-found.tsx` | UI personalizada cuando una ruta no existe o se invoca `notFound()`. |

### Subcarpeta `api/`

Contiene **Route Handlers** (`route.ts`) para endpoints del servidor. Cada archivo define métodos HTTP (GET, POST, PUT, DELETE, etc.) asociados a una ruta bajo `/api/`.

### Rutas y subrutas

La estructura de carpetas dentro de `app/` se traduce directamente en URLs:

```
src/app/page.tsx           → /
src/app/about/page.tsx     → /about
src/app/blog/[slug]/page.tsx → /blog/:slug
```

Cada segmento puede tener su propio `layout.tsx`, `loading.tsx` y `error.tsx` según sea necesario.

---

## `src/common/`

Recursos **compartidos globalmente** en toda la aplicación. Código reutilizable que no pertenece a un módulo o feature específico del dominio.

| Carpeta | Contenido |
|---------|-----------|
| `adapters/` | Transformadores de datos entre capas (API ↔ dominio, formatos externos ↔ internos). |
| `api/` | Clientes HTTP, configuración de fetch, interceptores y utilidades de comunicación con APIs externas. |
| `campaigns/` | Lógica y recursos transversales relacionados con campañas o promociones (si aplica al dominio). |
| `components/` | Componentes UI reutilizables organizados por complejidad (ver subcarpetas). |
| `constants/` | Valores fijos: rutas, claves, enums, configuraciones inmutables. |
| `data/` | Datos estáticos, mocks, fixtures y contenido de referencia. |
| `helpers/` | Funciones utilitarias puras sin dependencias de framework. |
| `hooks/` | Custom hooks de React compartidos entre módulos. |
| `interfaces/` | Tipos e interfaces TypeScript globales. |
| `libs/` | Wrappers y configuración de librerías de terceros. |
| `providers/` | Context providers y composición de estado global de React. |
| `schemas/` | Esquemas de validación (Zod, Yup, etc.) reutilizables. |
| `services/` | Lógica de negocio transversal y orquestación de operaciones. |
| `store/` | Estado global (Redux, Zustand, Jotai, etc.). |
| `wrappers/` | HOCs y componentes contenedores que envuelven otros componentes. |

### `components/` — Atomic Design

| Subcarpeta | Nivel | Ejemplos conceptuales |
|------------|-------|------------------------|
| `atoms/` | Elementos mínimos e indivisibles | Botones, inputs, labels, badges. |
| `icons/` | Iconos y conjuntos de iconografía. | SVG components, icon sets. |
| `layouts/` | Estructuras de página reutilizables | Header, footer, sidebar, grid containers. |
| `molecules/` | Combinación de átomos con una función clara | Campo de formulario (label + input + error), card básica. |
| `organisms/` | Secciones complejas compuestas por moléculas y átomos | Formularios completos, tablas, barras de navegación. |

---

## `src/modules/`

Espacio reservado para **módulos o features del dominio**. Cada módulo representa una funcionalidad autocontenida de la aplicación (por ejemplo: autenticación, perfil de usuario, catálogo, checkout).

### Convención por módulo

Cada módulo debe definir su **propia estructura interna** según sus necesidades. Una estructura recomendada:

```
src/modules/
└── nombre-modulo/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    ├── utils/
    └── index.ts
```

Los módulos pueden importar desde `src/common/` pero no deben depender entre sí de forma circular. La comunicación entre módulos debe pasar por interfaces claras o el store global cuando sea necesario.

---

## `src/styles/`

Estilos globales y organizados por **tipo y alcance**, siguiendo una metodología similar a ITCSS (Inverted Triangle CSS).

| Carpeta / archivo | Propósito |
|-------------------|-----------|
| `globals.scss` | Punto de entrada: importa el resto de capas y define estilos base del documento. |
| `settings/` | Variables, tokens de diseño, breakpoints, tipografía, colores. |
| `tools/` | Mixins, funciones y helpers de Sass. |
| `generics/` | Reset, normalize y estilos de elementos HTML base. |
| `elements/` | Estilos de elementos HTML sin clases (h1, a, button, etc.). |
| `objects/` | Patrones de layout y estructura sin estética (containers, grids, media objects). |
| `components/` | Estilos de componentes UI reutilizables. |
| `utilities/` | Clases de utilidad de un solo propósito (spacing, visibility, text-align). |
| `modules/` | Estilos específicos de módulos del dominio. |
| `campaigns/` | Estilos asociados a campañas o variaciones temporales de diseño. |

### Orden de importación recomendado en `globals.scss`

```scss
@use 'settings';
@use 'tools';
@use 'generics';
@use 'elements';
@use 'objects';
@use 'components';
@use 'utilities';
```

---

## Recomendaciones de uso

1. **Separación de responsabilidades**: Mantén la lógica de negocio en `services/` y `modules/`, la UI en `components/`, y el enrutamiento en `app/`.

2. **Imports con alias**: Usa el alias `@/*` apuntando a `./src/*` en `tsconfig.json` (por ejemplo `@/common/...`, `@/modules/...`, `@/styles/...`) para evitar rutas relativas profundas.

3. **Colocation cuando tenga sentido**: Archivos usados solo por un módulo deben vivir dentro de ese módulo, no en `common/`.

4. **No duplicar en `common/`**: Si un recurso solo lo usa un módulo, colócalo en ese módulo. `common/` es para código verdaderamente compartido.

5. **App Router como única fuente de rutas**: Define todas las rutas bajo `src/app/`. Evita routers adicionales salvo casos excepcionales.

6. **API Routes en `app/api/`**: Los endpoints del servidor viven junto al router, usando `route.ts` con handlers por método HTTP.

7. **Estilos modulares**: Prefiere estilos por componente (CSS Modules, Tailwind, etc.) para UI específica; usa `src/styles/` para tokens, resets y utilidades globales.

8. **Escalabilidad de módulos**: Al crecer un módulo, subdivídelo internamente sin mover lógica a `common/` hasta que otro módulo la necesite.

9. **Tipado centralizado**: Interfaces compartidas en `common/interfaces/`; tipos exclusivos de un módulo dentro de ese módulo.

10. **Documentación viva**: Actualiza este documento cuando se introduzcan convenciones nuevas o se reestructuren carpetas.
