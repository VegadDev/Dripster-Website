import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Star, TrendingUp, Heart } from 'lucide-react';
import { fadeUp, staggerContainer, blurIn } from '../lib/animations';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  duration: 8 + Math.random() * 15,
  delay: Math.random() * 8,
  size: 2 + Math.random() * 4,
}));

const clothingItems = [
  { emoji: '👗', x: '8%', y: '20%', delay: 0, rotate: -15 },
  { emoji: '👟', x: '88%', y: '15%', delay: 0.5, rotate: 12 },
  { emoji: '🧢', x: '5%', y: '60%', delay: 1, rotate: -8 },
  { emoji: '💎', x: '92%', y: '55%', delay: 1.5, rotate: 20 },
  { emoji: '🧥', x: '15%', y: '80%', delay: 2, rotate: -20 },
  { emoji: '👠', x: '82%', y: '78%', delay: 2.5, rotate: 10 },
  { emoji: '✨', x: '50%', y: '8%', delay: 3, rotate: 0 },
  { emoji: '🎀', x: '72%', y: '35%', delay: 0.8, rotate: -5 },
];

const phoneScreens = [
  {
    label: 'My Wardrobe',
    icon: '👗',
    color: 'from-cyan-500/20 to-blue-600/20',
    items: ['32 Items', 'AI Sorted', '5 Outfits Today'],
  },
  {
    label: 'AI Outfit',
    icon: '✨',
    color: 'from-pink-500/20 to-rose-600/20',
    items: ['Generated', '94% Match', 'Save Outfit'],
  },
  {
    label: 'Community',
    icon: '🔥',
    color: 'from-orange-500/20 to-amber-600/20',
    items: ['Trending', '1.2K Likes', 'Follow'],
  },
  {
    label: 'Analytics',
    icon: '📊',
    color: 'from-emerald-500/20 to-teal-600/20',
    items: ['This Week', 'Style Score', '↑ 12%'],
  },
];

function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen(prev => (prev + 1) % phoneScreens.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const screen = phoneScreens[activeScreen];

  return (
    <div className="phone-mockup w-[260px] md:w-[300px] h-[520px] md:h-[600px] relative flex flex-col overflow-hidden">
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/80 rounded-full z-10" />

      {/* Screen content */}
      <motion.div
        key={activeScreen}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className={`flex-1 bg-gradient-to-br ${screen.color} p-6 pt-12 flex flex-col`}
      >
        {/* Status bar */}
        <div className="flex justify-between items-center mb-6 text-white/50 text-xs">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        {/* App header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 flex items-center justify-center text-xl border border-white/10">
            {screen.icon}
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{screen.label}</div>
            <div className="text-white/40 text-xs">Dripster AI</div>
          </div>
        </div>

        {/* Content cards */}
        <div className="space-y-3">
          {screen.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="glass rounded-2xl p-3 border border-white/10"
            >
              <div className="text-white/80 text-sm font-medium">{item}</div>
              <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${60 + Math.random() * 40}%` }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom nav bar */}
        <div className="mt-auto glass rounded-2xl p-3 border border-white/10 flex justify-around">
          {['🏠', '🔍', '✨', '👤'].map((icon, i) => (
            <div key={i} className={`text-lg ${i === activeScreen % 4 ? 'opacity-100' : 'opacity-30'}`}>
              {icon}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${screen.color} opacity-40 blur-xl`} />
      </div>
    </div>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full" />
        <div className="blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full" />
        <div className="blob-3 absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/8 rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.id % 3 === 0 ? 'rgba(0,245,255,0.6)' : p.id % 3 === 1 ? 'rgba(255,0,128,0.4)' : 'rgba(255,255,255,0.3)',
              borderRadius: '50%',
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating clothing items */}
      {clothingItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay + 1.5, duration: 0.5, type: 'spring' }}
          className="absolute text-3xl md:text-4xl pointer-events-none hidden md:block"
          style={{ left: item.x, top: item.y, rotate: item.rotate }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [item.rotate - 3, item.rotate + 3, item.rotate - 3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
            className="opacity-30"
          >
            {item.emoji}
          </motion.div>
        </motion.div>
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,245,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {/* Tag */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start mb-6">
            <div className="section-tag">
              <Sparkles size={12} />
              AI-Powered Fashion
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-800 leading-[1.05] mb-6 tracking-tight"
          >
            <span className="block text-white">Your AI</span>
            <span className="block gradient-text">Wardrobe.</span>
            <span className="block text-white">Your Personal</span>
            <span className="block neon-text-cyan">Stylist.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Digitize your wardrobe, discover intelligent outfits, and redefine your fashion experience with AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#waitlist" className="btn-primary group flex items-center justify-center gap-2">
              Join Waitlist
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </a>
            <a href="#features" className="btn-secondary flex items-center justify-center gap-2">
              <Sparkles size={14} className="text-cyan-400" />
              Explore Features
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12"
          >
            {[
              { value: '10K+', label: 'Waitlist', icon: <Star size={14} className="text-yellow-400" /> },
              { value: '95%', label: 'AI Accuracy', icon: <TrendingUp size={14} className="text-cyan-400" /> },
              { value: '50+', label: 'Features', icon: <Sparkles size={14} className="text-pink-400" /> },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-2xl font-display font-bold text-white">
                  {stat.icon}
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="relative flex-1 flex justify-center items-center"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
        >
          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full border border-cyan-500/10 animate-spin-slow" />
            <div className="absolute w-64 h-64 rounded-full border border-pink-500/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            <div className="absolute w-96 h-96 rounded-full border border-blue-500/5" />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 md:-left-12 top-16 glass-strong rounded-2xl px-4 py-2.5 border border-white/10 hidden sm:flex items-center gap-2 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-sm">✨</div>
            <div>
              <div className="text-xs text-white font-semibold">AI Outfit Ready</div>
              <div className="text-xs text-white/40">94% match score</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-4 md:-right-12 bottom-24 glass-strong rounded-2xl px-4 py-2.5 border border-white/10 hidden sm:flex items-center gap-2 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-pink-500/20 flex items-center justify-center text-sm">
              <Heart size={14} className="text-pink-400" fill="currentColor" />
            </div>
            <div>
              <div className="text-xs text-white font-semibold">Trending Style</div>
              <div className="text-xs text-white/40">2.4K loved this</div>
            </div>
          </motion.div>

          <PhoneMockup />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/30"
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
