/**
 * Prefixes a path with the Astro `base` config so assets and internal
 * links work on both user sites (`/`) and project sites (`/repo/`).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;

  if (!path || path === '/') {
    return base;
  }

  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}
