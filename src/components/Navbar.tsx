import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-white/10 bg-obsidian/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/10 text-violet-200 shadow-[0_0_20px_-4px_rgba(139,92,246,0.8)] transition duration-300 group-hover:shadow-[0_0_28px_-2px_rgba(34,211,238,0.7)]">
            <Code2 size={18} />
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-white">
            RIDA<span className="text-cyan-300">.DEV</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-zinc-300 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary hidden px-5 py-2.5 md:inline-flex"
          >
            Hire Me / DM
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="glass flex h-10 w-10 items-center justify-center text-zinc-100 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-zinc-200 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2"
              >
                Hire Me / DM
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
