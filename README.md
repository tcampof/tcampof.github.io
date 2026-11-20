# Currículum interactivo (Astro + GitHub Pages)

Portafolio / CV personal 100% estático, tipado y listo para desplegar en **GitHub Pages**.

## Stack

- Astro (static) + TypeScript estricto
- React (islas interactivas)
- Tailwind CSS v4
- `motion` + View Transitions (`ClientRouter`)
- `lucide-react` + `@fontsource`

## Desarrollo local

```bash
npm install
npm run dev
```

Scripts:

- `npm run dev` — servidor de desarrollo
- `npm run build` — build estático en `dist/`
- `npm run preview` — previsualizar el build

## Cómo actualizar tu CV

Todo el contenido vive en un solo archivo tipado:

```text
src/data/cv.ts
```

Edita:

- `profile` — nombre, titular, bio, disponibilidad, redes, email, ruta del PDF y endpoint del formulario
- `skills` — stack por categorías (badges, sin porcentajes)
- `projects` — proyectos destacados + detalle (`problem`, `solution`, `architecture`, `highlights`)
- `experience` — trayectoria laboral
- `education` — formación y certificaciones
- `methodology` — cómo trabajas

Los componentes leen de `cv.ts`; no hace falta tocar UI para actualizar datos.

## PDF descargable

1. Exporta tu CV a PDF
2. Sustituye el archivo placeholder:

```text
public/cv.pdf
```

3. Si cambias el nombre, actualiza `profile.cvPdfPath` en `src/data/cv.ts`

## Imágenes de proyectos

Coloca assets en `public/projects/` y referencia las rutas en cada proyecto (`image: '/projects/mi-proyecto.svg'`).

## Formulario de contacto (sin backend)

El formulario está preparado para **Web3Forms** (o Formspree):

1. En `src/data/cv.ts`, ajusta `profile.contactFormEndpoint` si usas otro servicio
2. En `src/components/ContactForm.tsx`, reemplaza `YOUR_WEB3FORMS_ACCESS_KEY` por tu access key

## GitHub Pages

### 1. Activar Pages en el repositorio

1. Settings → Pages
2. Source: **GitHub Actions**

### 2. Variables de entorno de build

El workflow (`.github/workflows/deploy.yml`) define:

- `SITE_URL=https://<usuario>.github.io`
- `BASE_PATH=/<repositorio>/`

Esto cubre sitios de proyecto (`https://user.github.io/repo`).

Si despliegas en un sitio de usuario (`https://user.github.io` con repo `user.github.io`), cambia en el workflow:

```yaml
BASE_PATH: /
```

En local puedes probar con:

```bash
# Windows PowerShell
$env:SITE_URL="http://localhost:4321"; $env:BASE_PATH="/"; npm run build
```

### 3. Utilidad `withBase`

Todos los enlaces internos y assets de `public/` deben pasar por:

```ts
import { withBase } from '../utils/withBase';
withBase('/cv.pdf');
withBase('/projects/pulseboard/');
```

Así no se rompen rutas cuando `base` no es `/`.

## Estructura clave

```text
src/
  data/cv.ts              # Contenido tipado del CV
  utils/withBase.ts       # Prefijo de base path
  components/             # UI + islas React
  layouts/BaseLayout.astro
  pages/
    index.astro
    projects/[slug].astro
    404.astro
public/
  cv.pdf
  projects/
.github/workflows/deploy.yml
```

## Licencia

Úsalo como plantilla personal. Sustituye los datos de ejemplo por los tuyos.
