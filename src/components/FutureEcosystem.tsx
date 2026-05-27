import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { ShoppingBag, Camera, Plane, Bot, Store, Trophy, Calendar, Rocket } from 'lucide-react';

const futureFeatures = [
  {
    icon: <ShoppingBag size={24} />,
    title: 'AI Shopping',
    description: 'Smart purchase recommendations that fill your wardrobe gaps at the best prices.',
    status: 'Q2 2025',
    color: '#00f5ff',
    bg: 'from-cyan-500/15 to-blue-600/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Camera size={24} />,
    title: 'Virtual Try-On',
    description: 'See how any outfit looks on your digital avatar before wearing it in real life.',
    status: 'Q3 2025',
    color: '#ff0080',
    bg: 'from-pink-500/15 to-rose-600/10',
    border: 'border-pink-500/20',
  },
  {
    icon: <Plane size={24} />,
    title: 'Travel Assistant',
    description: "Pack perfectly for any trip — AI builds the ideal travel capsule from your wardrobe.",
    status: 'Q3 2025',
    color: '#ffd700',
    bg: 'from-yellow-500/15 to-amber-600/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: <Bot size={24} />,
    title: 'AI Stylist Chat',
    description: 'Chat with your personal AI fashion consultant 24/7 for expert style advice.',
    status: 'Q4 2025',
    color: '#39ff14',
    bg: 'from-green-500/15 to-emerald-600/10',
    border: 'border-green-500/20',
  },
  {
    icon: <Store size={24} />,
    title: 'Creator Marketplace',
    description: 'Fashion creators sell curated lookbooks and style guides directly to fans.',
    status: 'Q1 2026',
    color: '#ff6b35',
    bg: 'from-orange-500/15 to-red-600/10',
    border: 'border-orange-500/20',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Fashion Challenges',
    description: 'Weekly style challenges with community voting, prizes, and brand collabs.',
    status: 'Q1 2026',
    color: '#a78bfa',
    bg: 'from-violet-500/15 to-purple-600/10',
    border: 'border-violet-500/20',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Fashion Calendar',
    description: "Plan your looks weeks in advance with AI-assisted scheduling and occasion awareness.",
    status: 'Q2 2026',
    color: '#34d399',
    bg: 'from-emerald-500/15 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: <Rocket size={24} />,
    title: 'And Much More...',
    description: "The Dripster ecosystem is just beginning. New AI-powered features launch every quarter.",
    status: 'Ongoing',
    color: '#00f5ff',
    bg: 'from-slate-500/15 to-gray-600/10',
    border: 'border-slate-500/20',
    isPlaceholder: true,
  },
];

export default function FutureEcosystem() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section className="relative py-32 overflow-hidden" id="ecosystem">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="separator mb-24" />

        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="section-tag">
              <Rocket size={12} />
              Future Ecosystem
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            The Future of{' '}
            <span className="gradient-text-warm">Fashion</span>
            <br />
            Starts Here
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Dripster is building a complete fashion intelligence platform. Here's what's coming next.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {futureFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2 }}
              className={`feature-card bg-gradient-to-br ${feature.bg} ${feature.border} group ${feature.isPlaceholder ? 'border-dashed' : ''}`}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                  color: feature.color,
                  boxShadow: `0 0 0 0 ${feature.color}30`,
                }}
              >
                {feature.icon}
              </div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white text-sm leading-tight">{feature.title}</h3>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ml-2 mt-0.5"
                  style={{ background: `${feature.color}15`, color: feature.color }}
                >
                  {feature.status}
                </span>
              </div>

              <p className="text-white/40 text-xs leading-relaxed">{feature.description}</p>

              {/* Bottom line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.color}40, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
