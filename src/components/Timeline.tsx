import { useEffect, useRef, useState } from 'react';
import type { Experience } from '../data/cv';

interface TimelineProps {
  items: Experience[];
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const total = rect.height + viewport * 0.35;
      const scrolled = viewport * 0.65 - rect.top;
      const value = Math.min(1, Math.max(0, scrolled / total));
      setProgress(value);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[11px] w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2"
      />
      <div
        aria-hidden
        className="absolute top-2 left-[11px] w-px origin-top bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--success)] transition-[height] duration-150 ease-out md:left-1/2 md:-translate-x-1/2"
        style={{ height: `calc((100% - 1rem) * ${progress})` }}
      />

      <ol className="space-y-10">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li
              key={item.id}
              className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                isLeft ? '' : 'md:[&>*:first-child]:col-start-2'
              }`}
            >
              <div
                className={`absolute top-3 left-[7px] h-[10px] w-[10px] rounded-full border-2 border-[var(--primary)] bg-[var(--bg)] md:left-1/2 md:-translate-x-1/2 ${
                  progress > index / Math.max(items.length, 1)
                    ? 'shadow-[0_0_0_4px_color-mix(in_srgb,var(--primary)_25%,transparent)]'
                    : ''
                }`}
              />

              <article
                className={`surface-card ml-8 p-5 md:ml-0 ${
                  isLeft ? 'md:mr-8 md:text-right' : 'md:ml-8'
                }`}
              >
                <p className="font-mono text-xs text-[var(--accent)]">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-[var(--text-muted)]">
                  {item.company} · {item.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.summary}
                </p>
                <ul
                  className={`mt-4 space-y-2 text-sm text-[var(--text)] ${
                    isLeft ? 'md:ml-auto' : ''
                  }`}
                >
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className={`flex gap-2 ${isLeft ? 'md:justify-end' : ''}`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--success)]" />
                      <span className="text-[var(--text-muted)]">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-4 flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}
                >
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
