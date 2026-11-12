import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import DashboardPreview from '@/components/DashboardPreview';
import { fadeUp, stagger } from '@/lib/motion';
import { CONTACT_LOCATION, GITHUB_URL, SITE_BIO, SITE_NAME, SITE_TITLE } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen snap-start items-center pb-20 pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-2"
      >
        <div className="flex flex-col items-start gap-6">
          <motion.span
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-cyan-200"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            {CONTACT_LOCATION}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.2] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {SITE_NAME}
            <span className="mt-2 block bg-gradient-to-r from-violet-300 via-violet-200 to-cyan-300 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl">
              {SITE_TITLE}
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-lg leading-normal text-zinc-400">
            {SITE_BIO}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="btn-primary">
              Explore Projects
              <ArrowRight size={16} />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} />
              View GitHub
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <DashboardPreview />
        </motion.div>
      </motion.div>
    </section>
  );
}
