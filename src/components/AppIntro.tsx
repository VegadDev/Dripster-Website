import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer, slideLeft, slideRight } from '../lib/animations';
import { Brain, Layers, Sparkles, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: <Brain size={20} className="text-cyan-400" />,
    title: 'AI Intelligence',
    description: 'Deep learning models that understand your style DNA and evolve with every wear.',
    color: 'from-cyan-500/10 to-blue-600/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Layers size={20} className="text-pink-400" />,
    title: 'Digital Wardrobe',
    description: 'Transform your physical closet into a smart, searchable, organized digital twin.',
    color: 'from-pink-500/10 to-rose-600/10',
    border: 'border-pink-500/20',
  },
  {
    icon: <Sparkles size={20} className="text-yellow-400" />,
    title: 'Smart Styling',
    description: 'Generate perfect outfits for any occasion, weather, or mood in seconds.',
    color: 'from-yellow-500/10 to-amber-600/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: <TrendingUp size={20} className="text-emerald-400" />,
    title: 'Fashion Analytics',
    description: "Deep insights into your style patterns, wardrobe gaps, and fashion evolution.",
    color: 'from-emerald-500/10 to-teal-600/10',
    border: 'border-emerald-500/20',
  },
];

export default function AppIntro() {
  const { ref: sectionRef, isInView } = useScrollAnimation(0.1);
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation(0.1);

  return (
    <section className="relative py-32 overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="separator mb-24" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            ref={sectionRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex mb-6">
              <div className="section-tag">What is Dripster?</div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Fashion Meets{' '}
              <span className="gradient-text">Artificial</span>{' '}
              <span className="neon-text-cyan">Intelligence</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/50 text-lg leading-relaxed mb-6"
            >
              Dripster is an AI-powered fashion ecosystem that transforms your physical wardrobe into an intelligent digital experience.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/40 text-base leading-relaxed mb-10"
            >
              From cataloging every piece you own to generating contextual outfit recommendations based on weather, occasion, and your personal style evolution — Dripster is your 24/7 AI fashion companion.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {['Smart AI', 'Gen Z First', 'Privacy Safe', 'Always Learning'].map((tag) => (
                <span key={tag} className="glass px-4 py-2 rounded-full text-sm text-white/60 border border-white/10">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Big glow card */}
            <div className="glass-strong rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />

              {/* AI visualization */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
                    <Brain size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Dripster AI</div>
                    <div className="text-xs text-cyan-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                      Active & Learning
                    </div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  {[
                    { label: 'Style Understanding', value: 94, color: 'from-cyan-400 to-blue-500' },
                    { label: 'Outfit Matching', value: 87, color: 'from-pink-400 to-rose-500' },
                    { label: 'Trend Analysis', value: 91, color: 'from-yellow-400 to-amber-500' },
                    { label: 'Personal Learning', value: 78, color: 'from-emerald-400 to-teal-500' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.15 + 0.3 }}
                    >
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/60">{item.label}</span>
                        <span className="text-white/80 font-semibold">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.value}%` } : {}}
                          transition={{ delay: i * 0.15 + 0.5, duration: 1, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Glow corner */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Pillar cards */}
        <motion.div
          ref={cardsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              custom={i}
              className={`feature-card bg-gradient-to-br ${pillar.color} ${pillar.border}`}
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
