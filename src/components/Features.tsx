import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer, scaleIn } from '../lib/animations';
import {
  Layers, Scan, Monitor, Wand2, Star, Shuffle, BookMarked,
  BarChart2, Palette, Search, Brain, TrendingUp, ChevronRight
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Layers size={22} />,
    title: 'AI Wardrobe System',
    description: 'Your entire closet, digitized and intelligently organized by AI. Never lose track of what you own.',
    color: 'cyan',
    accent: '#00f5ff',
    bg: 'from-cyan-500/15 to-blue-600/10',
    detail: 'Automatically categorize, tag, and sort every item in your wardrobe using computer vision and NLP.',
  },
  {
    id: 2,
    icon: <Scan size={22} />,
    title: 'Smart Recognition Engine',
    description: 'Point your camera at any clothing item. AI identifies fabric, style, color, and brand instantly.',
    color: 'pink',
    accent: '#ff0080',
    bg: 'from-pink-500/15 to-rose-600/10',
    detail: 'Multi-modal AI model trained on millions of fashion items for near-perfect recognition accuracy.',
  },
  {
    id: 3,
    icon: <Monitor size={22} />,
    title: 'Digital Wardrobe Interface',
    description: 'A beautiful, Pinterest-like grid view of your entire wardrobe. Filter, search, and explore.',
    color: 'blue',
    accent: '#3b82f6',
    bg: 'from-blue-500/15 to-indigo-600/10',
    detail: 'Scroll through your closet, apply filters by color, type, season, or occasion in real-time.',
  },
  {
    id: 4,
    icon: <Wand2 size={22} />,
    title: 'Smart Outfit Generator',
    description: 'Generate perfectly curated outfits based on occasion, weather, mood, or personal style.',
    color: 'yellow',
    accent: '#ffd700',
    bg: 'from-yellow-500/15 to-amber-600/10',
    detail: 'AI considers color theory, style rules, season, and your personal history to create stunning looks.',
  },
  {
    id: 5,
    icon: <Star size={22} />,
    title: 'AI Outfit Rating System',
    description: 'Every outfit gets a style score. Understand what works and why with AI explanations.',
    color: 'orange',
    accent: '#ff6b35',
    bg: 'from-orange-500/15 to-red-600/10',
    detail: 'Detailed breakdown of coherence, occasion fit, trend relevance, and personal style alignment.',
  },
  {
    id: 6,
    icon: <Shuffle size={22} />,
    title: 'Shuffle Outfit Mode',
    description: 'Feeling indecisive? Let Dripster shuffle through your wardrobe and surprise you.',
    color: 'green',
    accent: '#39ff14',
    bg: 'from-green-500/15 to-emerald-600/10',
    detail: 'Serendipitous discovery engine that surfaces forgotten pieces and creates unexpected combinations.',
  },
  {
    id: 7,
    icon: <BookMarked size={22} />,
    title: 'Saved Outfit Collections',
    description: 'Build personal lookbooks. Save outfits for specific events, seasons, or moods.',
    color: 'teal',
    accent: '#00d4aa',
    bg: 'from-teal-500/15 to-cyan-600/10',
    detail: 'Organize saved outfits into collections, add notes, and share with friends or keep private.',
  },
  {
    id: 8,
    icon: <BarChart2 size={22} />,
    title: 'Closet Analytics Dashboard',
    description: 'Data-driven insights into your wardrobe. See what you actually wear vs. what collects dust.',
    color: 'purple',
    accent: '#a855f7',
    bg: 'from-violet-500/15 to-purple-600/10',
    detail: 'Cost-per-wear, outfit frequency, style evolution charts, and wardrobe gap analysis.',
  },
  {
    id: 9,
    icon: <Palette size={22} />,
    title: 'Skin Tone Analysis',
    description: 'AI analyzes your skin tone and recommends the most flattering color palettes.',
    color: 'rose',
    accent: '#fb7185',
    bg: 'from-rose-500/15 to-pink-600/10',
    detail: 'Seasonal color analysis integrated with outfit generation for universally flattering looks.',
  },
  {
    id: 10,
    icon: <Search size={22} />,
    title: 'Smart Search',
    description: 'Search your wardrobe in natural language. "Blue casual tops for summer" — done.',
    color: 'sky',
    accent: '#38bdf8',
    bg: 'from-sky-500/15 to-blue-600/10',
    detail: 'Semantic search powered by embeddings understands context, not just keywords.',
  },
  {
    id: 11,
    icon: <Brain size={22} />,
    title: 'Personalized AI Learning',
    description: "The more you use Dripster, the smarter it becomes. It learns your unique fashion DNA.",
    color: 'cyan',
    accent: '#00f5ff',
    bg: 'from-cyan-500/15 to-teal-600/10',
    detail: 'Continuous learning from your choices, ratings, and behavior creates a truly personal AI stylist.',
  },
  {
    id: 12,
    icon: <TrendingUp size={22} />,
    title: 'Fashion Trend Intelligence',
    description: 'Stay ahead of trends. AI scans fashion weeks, social media, and street style in real-time.',
    color: 'pink',
    accent: '#ff0080',
    bg: 'from-pink-500/15 to-red-600/10',
    detail: 'Trend forecasting and relevance scoring helps you stay stylish without chasing every micro-trend.',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`feature-card bg-gradient-to-br ${feature.bg} group relative`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
        style={{
          background: `rgba(${feature.accent === '#00f5ff' ? '0,245,255' : feature.accent === '#ff0080' ? '255,0,128' : '255,255,255'},0.1)`,
          border: `1px solid ${feature.accent}30`,
          color: feature.accent,
          boxShadow: hovered ? `0 0 20px ${feature.accent}30` : 'none',
        }}
      >
        {feature.icon}
      </div>

      <h3 className="font-semibold text-white text-base mb-2 group-hover:text-white transition-colors">
        {feature.title}
      </h3>

      <p className="text-white/40 text-sm leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Expanded detail */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 pt-3 mt-1">
              <p className="text-white/60 text-xs leading-relaxed">{feature.detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex items-center gap-1 text-xs font-medium mt-2 transition-all duration-300"
        style={{ color: hovered ? feature.accent : 'rgba(255,255,255,0.3)' }}
      >
        <span>Learn more</span>
        <motion.div animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRight size={12} />
        </motion.div>
      </div>

      {/* Corner glow */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ background: feature.accent }}
      />
    </motion.div>
  );
}

export default function Features() {
  const { ref, isInView } = useScrollAnimation(0.05);

  return (
    <section className="relative py-32 overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-700/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="section-tag">AI Feature Showcase</div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Everything You Need,{' '}
            <br className="hidden md:block" />
            <span className="gradient-text">Powered by AI</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            12 intelligent features working in harmony to give you the ultimate fashion experience.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
