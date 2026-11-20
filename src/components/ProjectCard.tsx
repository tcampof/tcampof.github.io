import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Project } from '../data/cv';
import SpotlightCard from './SpotlightCard';

interface ProjectCardProps {
  project: Project;
  href: string;
  imageSrc: string;
  large?: boolean;
}

export default function ProjectCard({
  project,
  href,
  imageSrc,
  large = false,
}: ProjectCardProps) {
  const transitionStyle = {
    viewTransitionName: `project-${project.slug}`,
  } as CSSProperties;

  return (
    <SpotlightCard
      as="a"
      href={href}
      className={`surface-card block h-full transition duration-300 hover:-translate-y-1 ${
        large ? 'md:col-span-2' : ''
      }`}
      style={transitionStyle}
    >
      <div className={`flex h-full flex-col ${large ? 'md:flex-row' : ''}`}>
        <div
          className={`relative overflow-hidden ${
            large ? 'md:w-[46%]' : ''
          } aspect-[16/10]`}
          style={{
            background: `linear-gradient(145deg, ${project.accent}33, transparent 60%)`,
          }}
        >
          <img
            src={imageSrc}
            alt={`Vista previa de ${project.title}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className={`flex flex-1 flex-col p-6 ${large ? 'md:p-8' : ''}`}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
              Ver proyecto
              <ArrowUpRight size={16} />
            </span>
          </div>

          <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--text)] md:text-2xl">
            {project.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--text-muted)] md:text-[0.95rem]">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, large ? 6 : 4).map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
