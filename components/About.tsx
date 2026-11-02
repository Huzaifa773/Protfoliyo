'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  Database,
  Rocket,
  MapPin,
  Mail,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const { personal, about } = portfolioData;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Passionate About Building{' '}
            <span className="text-gradient-emerald">High-Impact</span> Web Solutions
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Detailed Summary & Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>Who I Am & What I Do</span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {about.summary}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                My approach combines strong fundamentals in both frontend aesthetics and backend architecture. Whether crafting responsive user interfaces with Next.js or structuring database schemas with Prisma and MySQL, I strive for clean, maintainable code and exceptional user experience.
              </p>
            </div>

            {/* Quick Contact & Location Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="font-medium text-white">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Education</div>
                  <div className="font-medium text-white">Pre-Engineering (2026)</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Email</div>
                  <div className="font-medium text-white truncate max-w-[200px]" title={personal.email}>
                    {personal.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Employment Status</div>
                  <div className="font-medium text-emerald-400">Open for Junior Roles</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Value Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {about.highlights.map((highlight, index) => {
              const icons = [
                <Code key="0" className="w-5 h-5 text-emerald-400" />,
                <Layers key="1" className="w-5 h-5 text-cyan-400" />,
                <Database key="2" className="w-5 h-5 text-teal-400" />,
                <Rocket key="3" className="w-5 h-5 text-emerald-300" />,
              ];

              return (
                <div
                  key={highlight.title}
                  className="glass-card p-5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {icons[index % icons.length]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
