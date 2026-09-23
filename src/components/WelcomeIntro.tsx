import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Terminal, BookOpen, Feather, Trophy, ArrowRight } from 'lucide-react';

interface WelcomeIntroProps {
  onComplete?: () => void;
}

export const WelcomeIntro: React.FC<WelcomeIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    // Check if user already saw the intro during this browser session
    try {
      const alreadySeen = sessionStorage.getItem('mujahid_intro_seen');
      return !alreadySeen;
    } catch {
      return true;
    }
  });

  const [phase, setPhase] = useState<number>(1);

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        try {
          sessionStorage.setItem('mujahid_intro_seen', 'true');
        } catch {}
        if (onComplete) onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }

    // Step 2: visual facets reveal at 1000ms
    const step2Timer = setTimeout(() => {
      setPhase(2);
    }, 950);

    // Step 3: transition out and open the door at 2700ms
    const step3Timer = setTimeout(() => {
      setPhase(3);
    }, 2500);

    // Step 4: complete dismissal at 3100ms
    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem('mujahid_intro_seen', 'true');
      } catch {}
      if (onComplete) onComplete();
    }, 3100);

    return () => {
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
      clearTimeout(finishTimer);
    };
  }, [isVisible, onComplete]);

  const handleSkip = () => {
    setPhase(3);
    setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem('mujahid_intro_seen', 'true');
      } catch {}
      if (onComplete) onComplete();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: phase === 3 ? 0 : 1,
            scale: phase === 3 ? 1.03 : 1,
            filter: phase === 3 ? 'blur(8px)' : 'blur(0px)',
          }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#0a0d14',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: phase === 3 ? 'none' : 'auto',
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.08) 0%, rgba(10, 13, 20, 0.95) 75%)',
              pointerEvents: 'none',
            }}
          />

          {/* Background Cartographic Coordinate Grid */}
          <svg
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.06,
              pointerEvents: 'none',
            }}
          >
            <pattern id="introGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#introGrid)" />
          </svg>

          {/* Central Monogram & Typography Experience */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 1.5rem',
              maxWidth: '680px',
            }}
          >
            {/* Minimal Archive Stamp */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                color: '#f59e0b',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
              }}
            >
              <Compass size={12} />
              <span>Personal Archive · Vol. 2026</span>
            </motion.div>

            {/* Principal Name Heading */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.12em', filter: 'blur(4px)' }}
              animate={{ opacity: 1, letterSpacing: '0.04em', filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
                fontWeight: 800,
                color: '#f8fafc',
                marginBottom: '0.75rem',
                lineHeight: 1.1,
                fontFamily: 'var(--font-sans)',
              }}
            >
              MUJAHID KALANTHAR
            </motion.h1>

            {/* Poetic & Identity Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
                color: '#cbd5e1',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                maxWidth: '520px',
                lineHeight: 1.5,
                marginBottom: '2rem',
              }}
            >
              Things I’ve built, solved, read, written & wandered into.
            </motion.p>

            {/* Phase 2: Facet Pillars (Engineering · Case Clash · Literature · Cartography) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                y: phase >= 2 ? 0 : 15,
              }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem 1.25rem',
                fontSize: '0.75rem',
                color: '#94a3b8',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.06em',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Terminal size={12} color="#f59e0b" />
                <span>AI & Systems</span>
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Trophy size={12} color="#f59e0b" />
                <span>27 Competitions</span>
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <BookOpen size={12} color="#f59e0b" />
                <span>Reading Room</span>
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Feather size={12} color="#f59e0b" />
                <span>Original Poetry</span>
              </span>
            </motion.div>

            {/* Fine Expanding Gold Horizon Line */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '240px',
                height: '1px',
                background: 'rgba(255, 255, 255, 0.08)',
                marginTop: '2.25rem',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)',
                }}
              />
            </div>
          </div>

          {/* Understated Skip Button in Bottom Corner */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.02 }}
            onClick={handleSkip}
            style={{
              position: 'absolute',
              bottom: '1.75rem',
              right: '1.75rem',
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.6rem',
              borderRadius: '6px',
            }}
          >
            <span>enter archive</span>
            <ArrowRight size={12} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
