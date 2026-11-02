'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Subtle Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />

      {/* Radial glow header */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-radial-glow" />

      {/* Floating Emerald Glow Orb */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      />

      {/* Floating Cyan Glow Orb */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-48 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl"
      />

      {/* Floating Deep Blue Glow Orb towards bottom */}
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-[140px]"
      />
    </div>
  );
}
