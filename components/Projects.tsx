'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  ShoppingBag,
  Database,
  ShieldCheck,
  Zap,
  Globe,
  ArrowUpRight,
} from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolioData';

export default function Projects() {
  const { projects, personal } = portfolioData;
  const featuredProject = projects[0];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
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
            <span>03. Featured Project</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Real-World <span className="text-gradient-emerald">Production</span> Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-400"
          >
            A full-stack, database-backed web application built and deployed live for users.
          </motion.p>
        </div>

        {/* Featured Project Showcase Container */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          >
            {/* Ambient Background Glow inside the card */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              {/* Left Column: Details & Tech */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Production</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-medium">
                      Full-Stack E-Commerce
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {featuredProject.title}
                    </h3>
                    <p className="text-emerald-400 text-sm font-medium mt-1">
                      {featuredProject.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Bullet points of architecture */}
                  <div className="space-y-2.5 pt-2">
                    {featuredProject.detailedPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                          <Zap className="w-3 h-3" />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:text-emerald-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: Live Demo & GitHub */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all"
                  >
                    <span>View Live Application</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com/HuzaiFa773/Golden-perfume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm text-white glass-pill hover:bg-white/10 hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual UI Mockup Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-900/90 to-[#0b1222]/95 shadow-2xl relative group">
                  {/* Browser Mockup Top Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-white/10 text-xs font-mono text-slate-400">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5 truncate max-w-[180px]">
                      <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">golden-perfume-five.vercel.app</span>
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Visual Preview Graphic */}
                  <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-br from-[#0c1326] to-[#060a14] relative">
                    {/* Simulated Store Hero */}
                    <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-cyan-950/40 border border-emerald-500/20 text-center space-y-2">
                      <div className="inline-block p-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-1">
                        <ShoppingBag className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h4 className="font-bold text-white text-base">Golden Perfume Collection</h4>
                      <p className="text-xs text-slate-300">
                        Luxury fragrances with real-time stock & instant checkout
                      </p>
                    </div>

                    {/* Feature badges inside mockup */}
                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                        <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold">
                          <Database className="w-3.5 h-3.5" />
                          <span>Prisma + MySQL</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Relational product catalog and persistent cart storage
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                        <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Admin Portal</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Add, update, and manage inventory seamlessly
                        </p>
                      </div>
                    </div>

                    {/* Direct Launch Button */}
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                    >
                      Visit Live Website ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* GitHub Teaser Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-white/5 text-slate-300 border border-white/10">
              <Github className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">
                Looking for more repositories & experimental code?
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Explore my full activity, ongoing projects, and commits on GitHub.
              </p>
            </div>
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white glass-pill hover:bg-white/10 hover:border-emerald-400/40 transition-all"
          >
            <span>Visit @{personal.github.split('/').pop()}</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
