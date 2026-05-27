import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Heart, MessageCircle, UserPlus, Bookmark, Share2, Flame } from 'lucide-react';

const feedPosts = [
  {
    id: 1,
    user: 'aria.fits',
    avatar: 'A',
    avatarColor: 'from-cyan-400 to-blue-500',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'Monday fit check ✨ AI generated this look from scratch',
    likes: 2847,
    comments: 142,
    tags: ['#OOTD', '#AI', '#Minimal'],
    badge: '🔥 Trending',
    aiRating: 96,
  },
  {
    id: 2,
    user: 'zane.drip',
    avatar: 'Z',
    avatarColor: 'from-pink-400 to-rose-500',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'Street vibes only. Dripster said this combo is 94% fire',
    likes: 5102,
    comments: 238,
    tags: ['#Streetwear', '#Dripster'],
    badge: '⭐ Top Rated',
    aiRating: 94,
  },
  {
    id: 3,
    user: 'nova.style',
    avatar: 'N',
    avatarColor: 'from-yellow-400 to-amber-500',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'Summer capsule wardrobe complete. AI organized everything',
    likes: 3456,
    comments: 167,
    tags: ['#Summer', '#Capsule', '#Clean'],
    badge: '✨ Featured',
    aiRating: 91,
  },
  {
    id: 4,
    user: 'kai.threads',
    avatar: 'K',
    avatarColor: 'from-emerald-400 to-teal-500',
    image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'Formal but make it interesting. AI nailed the color match',
    likes: 1893,
    comments: 89,
    tags: ['#Formal', '#Smart', '#Color'],
    badge: '💎 Premium',
    aiRating: 89,
  },
  {
    id: 5,
    user: 'milo.looks',
    avatar: 'M',
    avatarColor: 'from-orange-400 to-red-500',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'Cold weather, hot style. Generated for -5°C day',
    likes: 4211,
    comments: 195,
    tags: ['#Winter', '#Layers', '#Cozy'],
    badge: '🏆 Creator Pick',
    aiRating: 97,
  },
  {
    id: 6,
    user: 'lex.fashion',
    avatar: 'L',
    avatarColor: 'from-sky-400 to-blue-500',
    image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'Monochrome mastery. Dripster said this earns a perfect score',
    likes: 6330,
    comments: 312,
    tags: ['#Monochrome', '#Clean', '#Art'],
    badge: '🔥 Trending',
    aiRating: 99,
  },
  {
    id: 7,
    user: 'remi.drip',
    avatar: 'R',
    avatarColor: 'from-violet-400 to-purple-500',
    image: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'AI said: "Perfect 10/10 for a gallery opening"',
    likes: 2718,
    comments: 133,
    tags: ['#Luxury', '#Event', '#Score'],
    badge: '⭐ Top Rated',
    aiRating: 100,
  },
  {
    id: 8,
    user: 'sage.wears',
    avatar: 'S',
    avatarColor: 'from-lime-400 to-green-500',
    image: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    caption: 'Sustainable and stylish. Dripster optimized my old closet',
    likes: 3901,
    comments: 207,
    tags: ['#Sustainable', '#Green', '#Style'],
    badge: '🌿 Eco Style',
    aiRating: 93,
  },
];

function PostCard({ post }: { post: typeof feedPosts[0] }) {
  return (
    <div className="w-[240px] flex-shrink-0 glass rounded-3xl overflow-hidden border border-white/8 group hover:border-white/15 transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 280 }}>
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="glass text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 text-white">
            {post.badge}
          </span>
        </div>

        {/* AI Score */}
        <div className="absolute top-3 right-3">
          <div className="glass rounded-xl px-2.5 py-1 border border-cyan-500/20 flex items-center gap-1">
            <span className="text-cyan-400 text-xs font-bold">{post.aiRating}</span>
            <span className="text-white/40 text-[10px]">AI</span>
          </div>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex gap-1.5 flex-wrap">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] text-cyan-400/80 font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* User */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${post.avatarColor} flex items-center justify-center text-xs font-bold text-white`}>
            {post.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white truncate">@{post.user}</div>
          </div>
          <button className="glass px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-semibold text-cyan-400 flex items-center gap-1">
            <UserPlus size={10} />
            Follow
          </button>
        </div>

        <p className="text-white/50 text-xs leading-relaxed mb-3 line-clamp-2">{post.caption}</p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-white/40 hover:text-pink-400 transition-colors text-xs">
            <Heart size={13} />
            <span>{(post.likes / 1000).toFixed(1)}K</span>
          </button>
          <button className="flex items-center gap-1.5 text-white/40 hover:text-cyan-400 transition-colors text-xs">
            <MessageCircle size={13} />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center gap-1.5 text-white/40 hover:text-yellow-400 transition-colors text-xs ml-auto">
            <Bookmark size={13} />
          </button>
          <button className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-xs">
            <Share2 size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CommunityFeed() {
  const { ref, isInView } = useScrollAnimation(0.1);

  const row1 = feedPosts.slice(0, 4);
  const row2 = feedPosts.slice(4);

  return (
    <section className="relative py-32 overflow-hidden" id="community">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="separator mb-24" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="section-tag">
              <Flame size={12} />
              Community Fashion Feed
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Fashion That{' '}
            <span className="gradient-text-warm">Inspires</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Join thousands of fashion creators sharing AI-powered looks, rating outfits, and discovering new styles.
          </motion.p>
        </motion.div>
      </div>

      {/* Scrolling rows */}
      <div className="space-y-6 overflow-hidden">
        {/* Row 1 - left to right */}
        <div className="flex gap-5 scroll-container">
          <div className="scroll-track flex gap-5 px-3">
            {[...row1, ...row1, ...row1].map((post, i) => (
              <PostCard key={`r1-${i}`} post={post} />
            ))}
          </div>
        </div>

        {/* Row 2 - right to left */}
        <div className="flex gap-5 scroll-container">
          <div className="scroll-track-reverse flex gap-5 px-3">
            {[...row2, ...row2, ...row2].map((post, i) => (
              <PostCard key={`r2-${i}`} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 mt-16"
      >
        <div className="glass-strong rounded-3xl p-6 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '125K+', label: 'Outfit Posts', icon: '📸' },
            { value: '2.4M', label: 'Total Likes', icon: '❤️' },
            { value: '48K', label: 'Creators', icon: '✨' },
            { value: '99%', label: 'Satisfaction', icon: '⭐' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/40 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
