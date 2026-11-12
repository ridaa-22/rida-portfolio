import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-normal text-zinc-400 sm:text-lg">{description}</p>
    </motion.div>
  );
}
