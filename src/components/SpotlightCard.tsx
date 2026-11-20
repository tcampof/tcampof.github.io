import {
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  href?: string;
  as?: 'div' | 'a' | 'article';
}

export default function SpotlightCard({
  children,
  className = '',
  style,
  href,
  as = 'div',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement | HTMLAnchorElement | HTMLElement | null>(null);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  const classNames = `spotlight-card group relative overflow-hidden ${className}`;

  const content = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--primary) 22%, transparent), transparent 45%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </>
  );

  if (as === 'a' || href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        className={classNames}
        style={style}
      >
        {content}
      </a>
    );
  }

  if (as === 'article') {
    return (
      <article
        ref={ref as React.RefObject<HTMLElement>}
        onMouseMove={onMove}
        className={classNames}
        style={style}
      >
        {content}
      </article>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMove}
      className={classNames}
      style={style}
    >
      {content}
    </div>
  );
}
