import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Sparkles } from 'lucide-react';

const weatherScenarios = [
  {
    id: 'sunny',
    label: 'Sunny Day',
    icon: <Sun size={24} className="text-yellow-400" />,
    temp: '28°C',
    condition: 'Perfect outdoor weather',
    bg: 'from-yellow-500/20 to-orange-600/15',
    border: 'border-yellow-500/20',
    glow: 'bg-yellow-500/10',
    outfit: {
      top: '🌸 Floral Linen Shirt',
      bottom: '👖 Light Chinos',
      shoes: '👟 White Canvas Sneakers',
      accessory: '🕶️ UV Sunglasses',
    },
    recommendation: 'Light, breathable fabrics. Opt for pastels or neutrals to reflect heat.',
  },
  {
    id: 'rainy',
    label: 'Rainy Day',
    icon: <CloudRain size={24} className="text-blue-400" />,
    temp: '13°C',
    condition: 'Heavy rainfall expected',
    bg: 'from-blue-500/20 to-slate-600/15',
    border: 'border-blue-500/20',
    glow: 'bg-blue-500/10',
    outfit: {
      top: '🧥 Waterproof Trench Coat',
      bottom: '👖 Dark Jeans',
      shoes: '🥾 Chelsea Rain Boots',
      accessory: '☂️ Compact Umbrella',
    },
    recommendation: 'Waterproof layers essential. Dark colors practical for wet conditions.',
  },
  {
    id: 'cloudy',
    label: 'Overcast',
    icon: <Cloud size={24} className="text-gray-400" />,
    temp: '18°C',
    condition: 'Mild and overcast',
    bg: 'from-slate-500/20 to-gray-600/15',
    border: 'border-slate-500/20',
    glow: 'bg-slate-500/10',
    outfit: {
      top: '🧣 Oversized Knit Sweater',
      bottom: '👖 Straight Leg Trousers',
      shoes: '👞 Leather Loafers',
      accessory: '🎒 Canvas Tote Bag',
    },
    recommendation: 'Layer up with versatile pieces. Neutral tones work perfectly.',
  },
  {
    id: 'windy',
    label: 'Windy & Cool',
    icon: <Wind size={24} className="text-cyan-400" />,
    temp: '10°C',
    condition: 'Strong gusts expected',
    bg: 'from-cyan-500/20 to-teal-600/15',
    border: 'border-cyan-500/20',
    glow: 'bg-cyan-500/10',
    outfit: {
      top: '🧤 Fitted Turtleneck',
      bottom: '👖 Slim Fit Pants',
      shoes: '👢 Ankle Boots',
      accessory: '🧣 Long Scarf',
    },
    recommendation: 'Fitted layers prevent wind from getting in. Accessories for warmth.',
  },
];

const rainDrops = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 2}s`,
  duration: `${0.6 + Math.random() * 0.5}s`,
}));

export default function WeatherIntelligence() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % weatherScenarios.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  const current = weatherScenarios[active];

  return (
    <section className="relative py-32 overflow-hidden" id="weather">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
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
            <div className="section-tag">Weather Intelligence</div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Fashion That{' '}
            <span className="neon-text-cyan">Understands</span>
            <br />
            the Weather
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Dripster connects with live weather data to suggest perfectly appropriate outfits for any condition.
          </motion.p>
        </motion.div>

        {/* Weather selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {weatherScenarios.map((scenario, i) => (
            <button
              key={scenario.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? `bg-gradient-to-r ${scenario.bg} border ${scenario.border} text-white`
                  : 'glass border border-white/10 text-white/50 hover:text-white'
              }`}
            >
              {scenario.icon}
              {scenario.label}
            </button>
          ))}
        </motion.div>

        {/* Main display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Weather card */}
            <div className={`glass-strong rounded-3xl p-8 border ${current.border} bg-gradient-to-br ${current.bg} relative overflow-hidden`}>
              {/* Rain effect for rainy scenario */}
              {current.id === 'rainy' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {rainDrops.map((drop) => (
                    <div
                      key={drop.id}
                      className="rain-drop"
                      style={{
                        left: drop.left,
                        animationDelay: drop.delay,
                        animationDuration: drop.duration,
                      }}
                    />
                  ))}
                </div>
              )}

              <div className="relative z-10">
                {/* Location */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-white/40 text-sm mb-1">Current Weather</div>
                    <div className="text-white font-semibold text-lg">Your Location</div>
                  </div>
                  <motion.div
                    animate={{ rotate: current.id === 'sunny' ? [0, 15, 0, -15, 0] : [0, -5, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {current.icon}
                  </motion.div>
                </div>

                {/* Temperature */}
                <div className="flex items-end gap-4 mb-8">
                  <div className="font-display text-8xl font-bold text-white leading-none">{current.temp.split('°')[0]}</div>
                  <div className="pb-3">
                    <div className="text-white/40 text-2xl">°C</div>
                    <div className="text-white/60 text-sm">{current.condition}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Humidity', value: '65%' },
                    { label: 'Wind', value: '12 km/h' },
                    { label: 'UV Index', value: '4' },
                  ].map((detail) => (
                    <div key={detail.label} className="glass rounded-2xl p-3 border border-white/5 text-center">
                      <div className="text-white font-semibold text-sm">{detail.value}</div>
                      <div className="text-white/30 text-xs">{detail.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Outfit suggestion */}
            <div className="glass-strong rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center">
                    <Sparkles size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI Suggestion</div>
                    <div className="text-cyan-400 text-xs">Optimized for today</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {Object.entries(current.outfit).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-4 border border-white/8 flex items-center gap-3"
                    >
                      <span className="text-xl">{value.split(' ')[0]}</span>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-wide capitalize">{key}</div>
                        <div className="text-white text-sm font-medium">{value.slice(3)}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="glass rounded-2xl p-4 border border-cyan-500/15">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">AI Note</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{current.recommendation}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
