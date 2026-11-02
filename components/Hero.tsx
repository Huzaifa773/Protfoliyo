'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Github,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Hero() {
  const { personal, about } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.status}</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm sm:text-base font-semibold tracking-wider text-cyan-400 uppercase"
            >
              Hi, I am
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              {personal.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-emerald"
            >
              {personal.title}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
          >
            Passionate developer building responsive, user-centric web applications with{' '}
            <span className="text-white font-medium">Next.js</span>,{' '}
            <span className="text-white font-medium">React</span>, and{' '}
            <span className="text-white font-medium">TypeScript</span>, backed by{' '}
            <span className="text-white font-medium">Node.js</span>,{' '}
            <span className="text-white font-medium">PHP</span>, and{' '}
            <span className="text-white font-medium">MySQL & MongoDB</span> databases.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* View Projects CTA */}
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Featured Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Download CV CTA */}
            <a
              href="/Muhammed_HuzaiFa_CV.pdf"
              download="Muhammed_HuzaiFa_CV.pdf"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white glass-pill hover:bg-white/10 hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-black/20"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download CV</span>
            </a>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Social Links & Quick Contact Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center flex-wrap gap-3 pt-4 border-t border-white/10 w-full"
          >
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mr-2">
              Connect:
            </span>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:text-white transition-all group"
            >
              <Github className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:text-white transition-all group"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>

            {/* Phone / WhatsApp */}
            <a
              href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:text-white transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp / Call</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Developer Card / Live Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

          {/* Terminal Window Card */}
          <div className="relative rounded-2xl glass-card overflow-hidden border border-white/10 shadow-2xl">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-card border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>huzaifa.config.ts</span>
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-3 bg-[#070b16]/90 leading-relaxed">
              <div>
                <span className="text-cyan-400">const</span>{' '}
                <span className="text-emerald-300">developer</span> = &#123;
              </div>

              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">&apos;{personal.name}&apos;</span>,
                </div>
                <div>
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-400">&apos;{personal.title}&apos;</span>,
                </div>
                <div>
                  <span className="text-slate-400">frontend:</span> [
                  <span className="text-cyan-300">&apos;Next.js&apos;</span>,{' '}
                  <span className="text-cyan-300">&apos;React&apos;</span>,{' '}
                  <span className="text-cyan-300">&apos;TypeScript&apos;</span>],
                </div>
                <div>
                  <span className="text-slate-400">backend:</span> [
                  <span className="text-teal-300">&apos;Node.js&apos;</span>,{' '}
                  <span className="text-teal-300">&apos;PHP&apos;</span>,{' '}
                  <span className="text-teal-300">&apos;ASP.NET / C#&apos;</span>],
                </div>
                <div>
                  <span className="text-slate-400">databases:</span> [
                  <span className="text-emerald-300">&apos;MySQL&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;MongoDB&apos;</span>],
                </div>
                <div>
                  <span className="text-slate-400">ormAndDeploy:</span> [
                  <span className="text-amber-200">&apos;Prisma&apos;</span>,{' '}
                  <span className="text-amber-200">&apos;Vercel&apos;</span>],
                </div>
                <div>
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400 font-semibold">&apos;Ready to hire&apos;</span>,
                </div>
              </div>

              <div>&#125;;</div>

              <div className="pt-2 border-t border-white/5 text-slate-400">
                <span className="text-cyan-400">export default</span> developer;
              </div>
            </div>

            {/* Quick Live Project Pill inside Card */}
            <div className="p-4 bg-surface-card/80 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-300">
                  Perfume E-Commerce Store deployed
                </span>
              </div>
              <a
                href="https://golden-perfume-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center space-x-1"
              >
                <span>Live View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
