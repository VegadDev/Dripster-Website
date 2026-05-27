import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What is Dripster?',
    a: "Dripster is an AI-powered fashion ecosystem that transforms your physical wardrobe into an intelligent digital experience. It uses computer vision and machine learning to catalog your clothes, generate outfit recommendations, analyze your style patterns, and connect you with a community of fashion enthusiasts — all from your phone.",
  },
  {
    q: 'Is Dripster free?',
    a: 'Dripster will launch with a generous free tier that includes wardrobe cataloging, basic outfit generation, and community access. Premium features like advanced AI styling, skin tone analysis, trend intelligence, and unlimited outfit history will be available through an affordable subscription. Early waitlist members get exclusive pricing.',
  },
  {
    q: 'When will Dripster launch?',
    a: "Dripster is currently in closed beta with 500 early testers. We're targeting a public launch in late 2025 for iOS and Android. Waitlist members will be notified first and receive early access. Follow our progress through the development timeline on this page.",
  },
  {
    q: 'How does the AI wardrobe work?',
    a: 'You photograph each item in your closet (or let Dripster scan them automatically). Our computer vision model identifies the type, color, fabric, style, and brand of each piece. Items are then organized into your digital wardrobe where you can browse, search, and filter. The AI tracks what you wear, learns your preferences, and gets smarter over time.',
  },
  {
    q: 'Can AI actually generate good outfits?',
    a: "Absolutely. Dripster's outfit generation engine is trained on millions of fashion combinations and style rules. It considers color theory, occasion, weather, your personal style history, current trends, and your own wardrobe — not generic internet outfits. The more you use Dripster, the more personalized and accurate the suggestions become. Our beta users rate AI-generated outfits at 4.8/5.",
  },
  {
    q: 'Is my wardrobe data private?',
    a: 'Your privacy is our priority. All wardrobe data is stored encrypted and never shared without your explicit permission. Your personal style data is used only to improve your experience and never sold to third parties. You can export or delete all your data at any time.',
  },
];

export default function FAQ() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 overflow-hidden" id="faq">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
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
              <HelpCircle size={12} />
              FAQ
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Got Questions?{' '}
            <span className="gradient-text">We've Got Answers.</span>
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2 }}
              className="glass-strong rounded-2xl border border-white/8 overflow-hidden transition-all duration-300 hover:border-white/15"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <span className={`font-semibold text-base transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400'
                      : 'glass border border-white/10 text-white/40'
                  }`}
                >
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-white/5 mb-5" />
                      <p className="text-white/50 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm mb-4">Still have questions?</p>
          <a
            href="mailto:hello@dripster.app"
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            Contact us at hello@dripster.app →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
