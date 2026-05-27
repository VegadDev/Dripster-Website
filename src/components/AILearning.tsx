import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Brain, User, Sparkles, ArrowRight, Zap } from 'lucide-react';

const nodes = [
  { id: 'user', x: 10, y: 50, label: 'Your Behavior', icon: '👤', color: '#00f5ff' },
  { id: 'scan', x: 30, y: 20, label: 'Outfit Scans', icon: '📷', color: '#ff0080' },
  { id: 'wear', x: 30, y: 50, label: 'Daily Wears', icon: '👗', color: '#ffd700' },
  { id: 'rate', x: 30, y: 80, label: 'Ratings', icon: '⭐', color: '#39ff14' },
  { id: 'ai', x: 55, y: 50, label: 'Dripster AI', icon: '🧠', color: '#00f5ff', large: true },
  { id: 'recs', x: 78, y: 20, label: 'Outfit Recs', icon: '✨', color: '#ff6b35' },
  { id: 'trends', x: 78, y: 50, label: 'Trend Alerts', icon: '📈', color: '#a78bfa' },
  { id: 'style', x: 78, y: 80, label: 'Style Score', icon: '💎', color: '#34d399' },
];

const connections = [
  { from: 'user', to: 'scan' },
  { from: 'user', to: 'wear' },
  { from: 'user', to: 'rate' },
  { from: 'scan', to: 'ai' },
  { from: 'wear', to: 'ai' },
  { from: 'rate', to: 'ai' },
  { from: 'ai', to: 'recs' },
  { from: 'ai', to: 'trends' },
  { from: 'ai', to: 'style' },
];

const learningSteps = [
  {
    step: '01',
    title: 'Observe & Catalog',
    description: 'Dripster watches what you add, wear, and skip. Every choice teaches the AI about your preferences.',
    icon: <User size={20} className="text-cyan-400" />,
    color: 'from-cyan-500/10 to-blue-600/10',
  },
  {
    step: '02',
    title: 'Analyze Patterns',
    description: 'Deep pattern recognition identifies your style DNA — the invisible rules that make something "you".',
    icon: <Brain size={20} className="text-pink-400" />,
    color: 'from-pink-500/10 to-rose-600/10',
  },
  {
    step: '03',
    title: 'Refine & Personalize',
    description: 'Recommendations get sharper with every interaction. The AI continuously refines its understanding.',
    icon: <Zap size={20} className="text-yellow-400" />,
    color: 'from-yellow-500/10 to-amber-600/10',
  },
  {
    step: '04',
    title: 'Evolve With You',
    description: 'As your style evolves, so does the AI. Seasonal shifts, lifestyle changes, trends — all captured.',
    icon: <Sparkles size={20} className="text-emerald-400" />,
    color: 'from-emerald-500/10 to-teal-600/10',
  },
];

export default function AILearning() {
  const { ref, isInView } = useScrollAnimation(0.1);

  const getNode = (id: string) => nodes.find(n => n.id === id)!;

  return (
    <section className="relative py-32 overflow-hidden" id="ai-learning">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl" />
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
              <Brain size={12} />
              AI Learning System
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            The More You Wear,
            <br />
            <span className="gradient-text">The Smarter It Gets</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Dripster's neural fashion engine continuously learns from your behavior to create an ever-improving personal AI stylist.
          </motion.p>
        </motion.div>

        {/* Neural network visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-strong rounded-3xl p-8 border border-white/10 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-transparent pointer-events-none" />

          {/* SVG connections */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {connections.map((conn, i) => {
              const from = getNode(conn.from);
              const to = getNode(conn.to);
              return (
                <motion.line
                  key={`${conn.from}-${conn.to}`}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="rgba(0,245,255,0.15)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                />
              );
            })}

            {/* Animated particles on lines */}
            {isInView && connections.map((conn, i) => {
              const from = getNode(conn.from);
              const to = getNode(conn.to);
              return (
                <motion.circle
                  key={`particle-${i}`}
                  r="1"
                  fill="#00f5ff"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [`${from.x}%`, `${to.x}%`],
                    cy: [`${from.y}%`, `${to.y}%`],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3 + 1,
                    ease: 'linear',
                  }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          <div className="relative z-10" style={{ height: 280 }}>
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.4, type: 'spring', stiffness: 200 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div
                  className={`${node.large ? 'w-16 h-16' : 'w-10 h-10'} rounded-2xl glass-strong border flex items-center justify-center text-xl mx-auto mb-1 node-pulse`}
                  style={{
                    borderColor: `${node.color}30`,
                    boxShadow: `0 0 ${node.large ? '30px' : '15px'} ${node.color}20`,
                  }}
                >
                  {node.icon}
                </div>
                <div className="text-white/50 text-[10px] font-medium whitespace-nowrap hidden md:block">
                  {node.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.3 }}
              className={`feature-card bg-gradient-to-br ${step.color} group`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="glass w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0">
                  {step.icon}
                </div>
                <span className="font-display text-4xl font-bold text-white/10 leading-none mt-1">{step.step}</span>
              </div>
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
