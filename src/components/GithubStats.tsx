import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, stagger } from '@/lib/motion';
import { GITHUB_URL, languageBreakdown } from '@/data/portfolio';

const WEEKS = 53;
const DAYS = 7;
const HEAT_CLASSES = [
  'bg-white/[0.06]',
  'bg-violet-900/80',
  'bg-violet-700',
  'bg-violet-500',
  'bg-cyan-300',
];

function createRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

const random = createRandom(7);
const HEATMAP_LEVELS = Array.from({ length: WEEKS * DAYS }, () => {
  const roll = random();
  if (roll < 0.22) return 0;
  if (roll < 0.45) return 1;
  if (roll < 0.7) return 2;
  if (roll < 0.9) return 3;
  return 4;
});

export default function GithubStats() {
  return (
    <section id="github-stats" className="relative snap-start py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="GitHub Stats"
          title="Always building in public"
          description="Contribution activity and language usage from my public repositories on GitHub."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 lg:grid-cols-5"
        >
          <motion.div variants={fadeUp} className="glass p-6 sm:p-8 lg:col-span-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Contribution Activity</h3>
                <p className="mt-1 text-xs text-zinc-400">Last 12 months</p>
              </div>
              <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-medium text-amber-200">
                Placeholder
              </span>
            </div>

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="grid min-w-max grid-flow-col grid-rows-7 gap-1">
                {HEATMAP_LEVELS.map((level, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index % 7) * 0.01 + Math.floor(index / 7) * 0.005 }}
                    title={`Level ${level} contribution day`}
                    className={`h-3 w-3 rounded-[3px] transition duration-300 hover:scale-125 hover:bg-cyan-200 ${HEAT_CLASSES[level]}`}
                  />
                ))}
              </div>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              View full profile on GitHub
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="glass p-6 sm:p-8 lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Language Breakdown</h3>
                <p className="mt-1 text-xs text-zinc-400">By code volume</p>
              </div>
              <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-medium text-amber-200">
                Placeholder
              </span>
            </div>

            <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full bg-white/5">
              {languageBreakdown.map((language) => (
                <motion.span
                  key={language.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${language.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={`h-full ${language.color}`}
                />
              ))}
            </div>

            <ul className="mt-6 space-y-4">
              {languageBreakdown.map((language) => (
                <li key={language.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-3 text-zinc-200">
                    <span className={`h-2.5 w-2.5 rounded-full ${language.color}`} />
                    {language.name}
                  </span>
                  <span className="font-medium text-zinc-400">{language.percent}%</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
