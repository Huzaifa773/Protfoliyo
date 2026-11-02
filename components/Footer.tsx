'use client';

import React from 'react';
import { ArrowUp, Code2, Github, Mail, Phone, Heart } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#03060e] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-bold text-lg text-white">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Junior Full-Stack Developer specializing in Next.js, React, Node.js, and modern databases.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-400/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-400/50 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-all hover:-translate-y-0.5 ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Built with Next.js, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
