import { motion } from 'framer-motion';
import { Code2, Rocket } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, stagger } from '@/lib/motion';
import { projects, type Project } from '@/data/portfolio';

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="glass glass-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-zinc-900">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-sm leading-normal text-zinc-400">{project.summary}</p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-medium text-cyan-200"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5"
            >
              <Rocket size={16} />
              Live Demo
            </a>
          )}
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-5 py-2.5"
          >
            <Code2 size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative snap-start py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Products built end to end"
          description="Full projects, from data pipelines to e-commerce stores and multi-role business applications."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
