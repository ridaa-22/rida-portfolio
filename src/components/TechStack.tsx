import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, stagger } from '@/lib/motion';
import { skillGroups } from '@/data/portfolio';

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative snap-start py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="My technical arsenal"
          description="The web and data tools I use to build products from database to interface."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="glass glass-hover group flex flex-col gap-6 p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-cyan-300 transition duration-500 group-hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.7)]">
                  <group.icon size={22} />
                </span>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-zinc-200 transition duration-300 hover:border-violet-400/50 hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
