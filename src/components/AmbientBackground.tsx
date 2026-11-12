import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-obsidian">
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/30 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -80, 20, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 h-80 w-[40rem] rounded-full bg-violet-500/15 blur-[140px]"
      />
    </div>
  );
}
