'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Sparkles,
  Building2,
  CheckCircle2,
  Clock,
  BookOpen,
} from 'lucide-react';
import { portfolioData, EducationItem } from '@/data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education & <span className="text-gradient-emerald">Milestones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-400"
          >
            Building a strong technical and analytical foundation to support software engineering.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {education.map((item: EducationItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-9 h-9 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      isEven ? 'md:pl-10' : 'md:pr-10'
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
                      {/* Header with status badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === 'In Progress'
                              ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                              : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                          }`}
                        >
                          {item.status === 'In Progress' ? (
                            <Clock className="w-3.5 h-3.5" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          )}
                          <span>
                            {item.status} {item.expectedYear ? `(${item.expectedYear})` : ''}
                          </span>
                        </span>

                        <div className="flex items-center space-x-1 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center space-x-2 text-sm text-emerald-400 font-medium mb-3">
                        <Building2 className="w-4 h-4" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-white/5">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
