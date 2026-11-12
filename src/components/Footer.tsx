import { Code2, Github, Mail, MapPin } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_LOCATION, GITHUB_URL, SITE_NAME } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-obsidian/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/40 bg-violet-500/10 text-violet-200">
              <Code2 size={16} />
            </span>
            <span className="font-display text-lg font-bold tracking-wide text-white">
              {SITE_NAME.toUpperCase()}<span className="text-cyan-300">.DEV</span>
            </span>
          </a>
          <p className="flex items-center gap-2 text-sm text-zinc-400">
            <MapPin size={14} />
            {CONTACT_LOCATION}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex items-center gap-3">
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass glass-hover flex h-11 w-11 items-center justify-center text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                <Github size={18} />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`Email ${CONTACT_EMAIL}`}
                className="glass glass-hover flex h-11 items-center gap-2 px-4 text-sm text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                <Mail size={18} />
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Rida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
