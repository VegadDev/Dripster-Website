import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Zap, Twitter, Instagram, Github, Youtube } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#community' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
  { icon: <Instagram size={16} />, href: '#', label: 'Instagram' },
  { icon: <Github size={16} />, href: '#', label: 'GitHub' },
  { icon: <Youtube size={16} />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" id="contact">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Big CTA section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-10 md:p-16 border border-white/10 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 pointer-events-none" />
          <div className="relative z-10">
            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ready to
              <span className="neon-text-cyan"> Drip</span>?
            </div>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-8">
              Join 10,000+ fashion lovers already waiting to transform their wardrobe experience.
            </p>
            <a href="#waitlist" className="btn-primary inline-flex items-center gap-2 text-base px-10 py-4">
              <Zap size={18} />
              Join the Waitlist
            </a>
          </div>
        </motion.div>

        {/* Footer nav */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-white/5"
        >
          {/* Logo */}
          <motion.a
            variants={fadeUp}
            href="#"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Zap size={16} className="text-black" fill="black" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 blur-md opacity-40" />
            </div>
            <span className="font-display font-800 text-xl tracking-tight">
              <span className="text-white">Drip</span>
              <span className="neon-text-cyan">ster</span>
            </span>
          </motion.a>

          {/* Links */}
          <motion.nav variants={fadeUp} className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:hello@dripster.app" className="text-white/40 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </motion.nav>

          {/* Social */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="glass w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-white/20 text-xs">
            © 2025 Dripster. All rights reserved. Built with ❤️ for Gen Z.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white/40 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
