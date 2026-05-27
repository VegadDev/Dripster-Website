import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { CheckCircle2, Circle, Clock, ArrowRight, Zap } from 'lucide-react';

const milestones = [
  { phase: 'Phase 1', label: 'Core AI Engine', status: 'done', desc: 'Wardrobe recognition, outfit generation, AI model training complete.' },
  { phase: 'Phase 2', label: 'App Architecture', status: 'done', desc: 'Full React Native codebase, Supabase backend, and API infrastructure.' },
  { phase: 'Phase 3', label: 'UI/UX Design', status: 'done', desc: 'Premium design system, component library, and motion framework.' },
  { phase: 'Phase 4', label: 'Beta Testing', status: 'active', desc: 'Closed beta with 500 early users. Collecting feedback and refining AI.' },
  { phase: 'Phase 5', label: 'Community Features', status: 'upcoming', desc: 'Social feed, creator tools, challenges, and following system.' },
  { phase: 'Phase 6', label: 'Public Launch', status: 'upcoming', desc: 'iOS and Android launch with all core features available globally.' },
];

export default function DevStatus() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden" id="waitlist">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="separator mb-24" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Timeline */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex mb-6">
              <div className="section-tag">
                <Clock size={12} />
                Development Status
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4"
            >
              Currently Under{' '}
              <span className="neon-text-cyan">Development</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/40 text-base leading-relaxed mb-12"
            >
              Dripster is being crafted with premium experiences and intelligent AI features. We're moving fast.
            </motion.p>

            {/* Timeline */}
            <div className="relative">
              {/* Line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/5" />
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: `${(milestones.filter(m => m.status === 'done').length / milestones.length) * 100}%` } : {}}
                transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
                className="absolute left-[18px] top-0 w-px bg-gradient-to-b from-cyan-400 to-cyan-400/0"
              />

              <div className="space-y-6">
                {milestones.map((item, i) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.12 + 0.3 }}
                    className="flex gap-4 relative"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 z-10">
                      {item.status === 'done' ? (
                        <CheckCircle2 size={20} className="text-cyan-400 mt-0.5" fill="rgba(0,245,255,0.1)" />
                      ) : item.status === 'active' ? (
                        <div className="w-5 h-5 rounded-full border-2 border-cyan-400 bg-cyan-400/20 mt-0.5 animate-pulse" />
                      ) : (
                        <Circle size={20} className="text-white/20 mt-0.5" />
                      )}
                    </div>

                    <div className={`flex-1 pb-2 ${item.status === 'upcoming' ? 'opacity-40' : ''}`}>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-white/30 text-xs font-mono">{item.phase}</span>
                        <span className="font-semibold text-white text-sm">{item.label}</span>
                        {item.status === 'active' && (
                          <span className="glass text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-cyan-500/30">
                            LIVE
                          </span>
                        )}
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Waitlist CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="glass-strong rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Early Access Open</span>
                </div>

                <h3 className="font-display text-3xl font-bold text-white mb-3">
                  Be First to{' '}
                  <span className="neon-text-cyan">Drip</span>
                </h3>

                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Join 10,000+ fashion-forward early adopters. Get exclusive beta access, premium features at launch, and lifetime founder benefits.
                </p>

                {/* Perks */}
                <div className="space-y-3 mb-8">
                  {[
                    'Free premium tier at launch',
                    'Exclusive early adopter badge',
                    'Beta testing access',
                    'Founder pricing forever',
                  ].map((perk) => (
                    <div key={perk} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Form */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass rounded-2xl p-6 border border-cyan-500/20 text-center"
                  >
                    <div className="text-3xl mb-3">🎉</div>
                    <div className="text-white font-semibold mb-2">You're on the list!</div>
                    <div className="text-white/40 text-sm">We'll reach out when Dripster launches.</div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full glass rounded-2xl px-5 py-4 text-white placeholder-white/30 border border-white/10 focus:border-cyan-500/40 outline-none transition-all text-sm"
                    />
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 group"
                    >
                      <Zap size={16} />
                      Join the Waitlist
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                    </button>
                  </form>
                )}

                <p className="text-white/20 text-xs text-center mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Social proof */}
            <div className="glass rounded-2xl p-4 border border-white/8 mt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['A', 'Z', 'M', 'K', 'S'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-dark-800 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: ['#00f5ff', '#ff0080', '#ffd700', '#39ff14', '#ff6b35'][i] + '60' }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <span className="text-white/60 text-xs"><strong className="text-white">10,247</strong> people already joined</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
