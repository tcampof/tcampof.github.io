import type { SocialLink } from '../data/cv';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  x: MailIcon,
  website: MailIcon,
} as const;

interface SocialLinksProps {
  socials: SocialLink[];
}

export default function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Icon size={18} />
            {social.label}
          </a>
        );
      })}
    </>
  );
}
