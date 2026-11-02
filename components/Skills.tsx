'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Check,
  Cpu,
} from 'lucide-react';
import { portfolioData, SkillCategory } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-emerald-400" />,
  Server: <Server className="w-5 h-5 text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-teal-400" />,
  Wrench: <Wrench className="w-5 h-5 text-emerald-300" />,
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
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
            <span>02. Technical Arsenal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-emerald">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-400"
          >
            Modern tools and technologies I use to build robust full-stack web applications.
          </motion.p>
        </div>

        {/* Skills Grid: 4 Modern Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category: SkillCategory, index: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Subtle Category Accent Glow */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${category.accent} opacity-5 blur-2xl group-hover:opacity-15 transition-opacity duration-500 -z-10`}
              />

              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-400/40 transition-colors">
                    {iconMap[category.icon] || <Cpu className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Badges (NO progress bars, clean modern tags with hover glow) */}
              <div className="flex flex-wrap gap-2.5 pt-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-white/[0.04] border border-white/[0.08] hover:border-emerald-400/50 hover:bg-emerald-500/[0.08] hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-200 cursor-default select-none group/badge"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 group-hover/badge:scale-125 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
