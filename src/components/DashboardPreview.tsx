import { useState, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Activity, BarChart3, Database, GitBranch, LayoutDashboard, Settings, Users } from 'lucide-react';

const RANGES = {
  '7D': {
    bars: [42, 58, 35, 70, 64, 82, 76],
    requests: '1.28M',
    latency: '82ms',
    uptime: '99.98%',
  },
  '30D': {
    bars: [38, 52, 47, 61, 55, 72, 68, 80, 74, 90, 86, 78],
    requests: '5.6M',
    latency: '76ms',
    uptime: '99.95%',
  },
  '90D': {
    bars: [30, 44, 40, 58, 62, 54, 71, 69, 83, 79, 88, 94],
    requests: '17.9M',
    latency: '71ms',
    uptime: '99.97%',
  },
} as const;

type RangeKey = keyof typeof RANGES;
const RANGE_KEYS = Object.keys(RANGES) as RangeKey[];

const NAV_ICONS = [LayoutDashboard, BarChart3, Database, GitBranch, Users, Settings];

const PIPELINES = [
  { name: 'ingest-events', status: 'Running', color: 'bg-cyan-300' },
  { name: 'spark-transform', status: 'Healthy', color: 'bg-emerald-300' },
  { name: 'api-gateway', status: 'Deployed', color: 'bg-violet-300' },
];

export default function DashboardPreview() {
  const [range, setRange] = useState<RangeKey>('30D');
  const current = RANGES[range];

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-transparent to-cyan-400/25 blur-3xl" />
      <motion.div
        onMouseMove={handlePointerMove}
        onMouseLeave={resetPointer}
        style={{ rotateX, rotateY }}
        className="glass relative overflow-hidden p-4 shadow-[0_30px_80px_-20px_rgba(139,92,246,0.45)] sm:p-5"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          </div>
          <span className="text-xs text-zinc-400">dashboard.rida.dev</span>
        </div>

        <div className="mt-4 flex gap-4">
          <div className="flex flex-col gap-3">
            {NAV_ICONS.map((Icon, index) => (
              <span
                key={index}
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  index === 0 ? 'bg-violet-500/20 text-violet-200' : 'text-zinc-500'
                }`}
              >
                <Icon size={16} />
              </span>
            ))}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-display text-base font-bold text-white">Pipeline Overview</p>
              <div role="group" aria-label="Time range" className="flex rounded-full border border-white/10 bg-white/5 p-1">
                {RANGE_KEYS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={range === key}
                    onClick={() => setRange(key)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition duration-300 ${
                      range === key ? 'bg-violet-500 text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: 'Requests', value: current.requests },
                { label: 'Latency', value: current.latency },
                { label: 'Uptime', value: current.uptime },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400">{kpi.label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-white">{kpi.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div key={range} className="flex h-32 items-end gap-2">
                {current.bars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: index * 0.04, ease: 'easeOut' }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/70 to-cyan-300/90 transition-opacity duration-300 hover:opacity-80"
                  />
                ))}
              </div>
              <svg viewBox="0 0 300 40" className="mt-3 h-10 w-full" aria-hidden>
                <motion.path
                  key={`line-${range}`}
                  d="M0 32 C 30 28, 50 10, 80 18 S 130 30, 160 14 S 220 8, 300 6"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            <ul className="mt-4 space-y-2">
              {PIPELINES.map((pipeline) => (
                <li
                  key={pipeline.name}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs"
                >
                  <span className="flex items-center gap-2 text-zinc-200">
                    <Activity size={14} className="text-zinc-400" />
                    {pipeline.name}
                  </span>
                  <span className="flex items-center gap-2 text-zinc-300">
                    <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${pipeline.color}`} />
                    {pipeline.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
