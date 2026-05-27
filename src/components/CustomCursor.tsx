import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useSpring(cursorX, { stiffness: 80, damping: 20 });
  const followerY = useSpring(cursorY, { stiffness: 80, damping: 20 });
  const isHovering = useRef(false);
  const followerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleHoverIn = () => {
      isHovering.current = true;
      if (dotRef.current) dotRef.current.style.transform = 'scale(2)';
      if (followerRef.current) {
        followerRef.current.style.width = '60px';
        followerRef.current.style.height = '60px';
        followerRef.current.style.borderColor = 'rgba(0, 245, 255, 0.6)';
        followerRef.current.style.marginLeft = '-30px';
        followerRef.current.style.marginTop = '-30px';
      }
    };

    const handleHoverOut = () => {
      isHovering.current = false;
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)';
      if (followerRef.current) {
        followerRef.current.style.width = '36px';
        followerRef.current.style.height = '36px';
        followerRef.current.style.borderColor = 'rgba(0, 245, 255, 0.4)';
        followerRef.current.style.marginLeft = '-18px';
        followerRef.current.style.marginTop = '-18px';
      }
    };

    window.addEventListener('mousemove', move);

    const interactables = document.querySelectorAll('a, button, [data-cursor]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [data-cursor]');
      els.forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        ref={dotRef}
        className="cursor"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        ref={followerRef}
        className="cursor-follower"
        style={{
          x: followerX,
          y: followerY,
          marginLeft: -18,
          marginTop: -18,
        }}
      />
    </>
  );
}
