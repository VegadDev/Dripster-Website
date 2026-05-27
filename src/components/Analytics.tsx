import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { BarChart2, TrendingUp, Repeat, DollarSign } from 'lucide-react';

const colorPalette = [
  { name: 'Navy', hex: '#1e3a5f', pct: 28 },
  { name: 'White', hex: '#f8f9fa', pct: 22 },
  { name: 'Black', hex: '#1a1a1a', pct: 19 },
  { name: 'Beige', hex: '#d4b896', pct: 14 },
  { name: 'Olive', hex: '#6b7c45', pct: 10 },
  { name: 'Rust', hex: '#b74a2b', pct: 7 },
];

const weeklyWears = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 88 },
  { day: 'Wed', value: 45 },
  { day: 'Thu', value: 92 },
  { day: 'Fri', value: 78 },
  { day: 'Sat', value: 55 },
  { day: 'Sun', value: 40 },
];

const categories = [
  { label: 'Tops', count: 24, pct: 34 },
  { label: 'Bottoms', count: 18, pct: 26 },
  { label: 'Outerwear', count: 12, pct: 17 },
  { label: 'Shoes', count: 10, pct: 14 },
  { label: 'Accessories', count: 6, pct: 9 },
];

function AnimatedCount({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useScrollAnimation(0.1);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Analytics() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section className="relative py-32 overflow-hidden" id="analytics">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="separator mb-24" />

        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="section-tag">
              <BarChart2 size={12} />
              Analytics Dashboard
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Your Wardrobe,{' '}
            <span className="gradient-text">Data-Driven</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Deep analytics reveal patterns in how you dress, what you love, and what's gathering dust.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
        >
          {[
            { label: 'Total Items', value: 70, suffix: '', icon: <BarChart2 size={18} className="text-cyan-400" />, color: 'cyan' },
            { label: 'Items Worn This Month', value: 42, suffix: '', icon: <Repeat size={18} className="text-emerald-400" />, color: 'emerald' },
            { label: 'Avg Cost Per Wear', value: 4, suffix: '$', icon: <DollarSign size={18} className="text-yellow-400" />, color: 'yellow' },
            { label: 'Style Score', value: 94, suffix: '%', icon: <TrendingUp size={18} className="text-pink-400" />, color: 'pink' },
          ].map((stat) => (
            <div key={stat.label} className="glass-strong rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/2 rounded-full blur-2xl" />
              <div className="mb-3">{stat.icon}</div>
              <div className="font-display text-3xl font-bold text-white mb-1">
                {stat.suffix && stat.suffix !== '$' ? '' : stat.suffix}
                <AnimatedCount target={stat.value} />
                {stat.suffix === '%' ? '%' : ''}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="lg:col-span-2 glass-strong rounded-3xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-semibold text-white">Weekly Outfit Activity</div>
                <div className="text-white/40 text-xs mt-0.5">Items worn per day</div>
              </div>
              <div className="glass px-3 py-1.5 rounded-xl border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                This Week
              </div>
            </div>

            <div className="flex items-end justify-between gap-3 h-40">
              {weeklyWears.map((day, i) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${day.value}%` } : {}}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.6, ease: 'easeOut' }}
                    className="w-full rounded-xl bg-gradient-to-t from-cyan-500/80 to-cyan-400/40 relative group"
                    style={{ minHeight: 4 }}
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      {day.value}
                    </div>
                  </motion.div>
                  <div className="text-white/30 text-xs">{day.day}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Color palette */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="glass-strong rounded-3xl p-6 border border-white/10"
          >
            <div className="font-semibold text-white mb-1">Favorite Colors</div>
            <div className="text-white/40 text-xs mb-6">By wardrobe frequency</div>

            <div className="space-y-3">
              {colorPalette.map((color, i) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-lg flex-shrink-0 border border-white/20"
                    style={{ background: color.hex }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">{color.name}</span>
                      <span className="text-white/40">{color.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${color.pct}%` } : {}}
                        transition={{ delay: i * 0.08 + 0.8, duration: 0.6 }}
                        className="h-full rounded-full"
                        style={{ background: color.hex === '#f8f9fa' ? '#e0e0e0' : color.hex }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="mt-6 glass-strong rounded-3xl p-6 border border-white/10"
        >
          <div className="font-semibold text-white mb-6">Wardrobe Distribution</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.6 }}
                className="text-center"
              >
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                    <motion.circle
                      cx="18" cy="18" r="14" fill="none"
                      stroke="#00f5ff" strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${cat.pct * 0.88} 88`}
                      initial={{ strokeDasharray: '0 88' }}
                      animate={isInView ? { strokeDasharray: `${cat.pct * 0.88} 88` } : {}}
                      transition={{ delay: i * 0.1 + 0.8, duration: 0.8 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{cat.pct}%</span>
                  </div>
                </div>
                <div className="text-white/60 text-xs font-medium">{cat.label}</div>
                <div className="text-white/30 text-xs">{cat.count} items</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
