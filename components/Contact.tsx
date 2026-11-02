'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  MessageSquare,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

// ==============================================================================
// 🔑 EMAILJS CONFIGURATION - PASTE YOUR KEYS HERE
// ==============================================================================
// 1. Create a free account at https://www.emailjs.com/
// 2. Add an Email Service (connect your Gmail) -> gives you SERVICE_ID
// 3. Create an Email Template -> gives you TEMPLATE_ID
//    In the template: Set recipient to: huzai.fa@mumhammad597@gmail.com
// 4. Get your Public Key from Account > Security -> gives you PUBLIC_KEY
// ==============================================================================
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    // Check whether keys were configured
    const serviceId =
      EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID'
        ? EMAILJS_SERVICE_ID
        : process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
      EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID'
        ? EMAILJS_TEMPLATE_ID
        : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
      EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
        ? EMAILJS_PUBLIC_KEY
        : process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setFeedbackMessage(
        'EmailJS keys are missing. Please paste your Service ID, Template ID, and Public Key at the top of components/Contact.tsx or in your .env.local file.'
      );
      return;
    }

    // Parameters matching EmailJS Template variables
    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'huzai.fa@mumhammad597@gmail.com',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setFeedbackMessage('Message Sent Successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      console.error('EmailJS Send Error:', err);
      setStatus('error');
      const errText =
        (err as { text?: string; message?: string })?.text ||
        (err as { text?: string; message?: string })?.message ||
        'Failed to deliver message via EmailJS. Please verify your EmailJS keys or send an email directly.';
      setFeedbackMessage(errText);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
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
            <span>05. Contact Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Let&apos;s Build Something <span className="text-gradient-emerald">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-400"
          >
            Interested in hiring me for a junior role, collaboration, or have a question? Drop a message!
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Contact Details</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Feel free to contact me directly via email, phone, or WhatsApp. I usually respond within a few hours!
              </p>

              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>Email Address</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors block break-all"
                >
                  {personal.email}
                </a>
                {copiedEmail && (
                  <span className="text-[11px] text-emerald-400 block font-medium">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Phone & WhatsApp</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    {personal.phone}
                  </a>
                  <a
                    href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline flex items-center space-x-1"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                {copiedPhone && (
                  <span className="text-[11px] text-emerald-400 block font-medium">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Current Base</div>
                  <div className="text-sm font-semibold text-white">
                    {personal.location} (PKT / UTC+5)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to send an email directly to my inbox ({personal.email}).
              </p>

              {/* Success Alert */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start space-x-2.5">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{feedbackMessage}</p>
                    <p className="text-xs text-emerald-400/80 mt-0.5">
                      Thank you for reaching out. I will respond to your email as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start space-x-2.5">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to send message:</p>
                    <p className="text-xs mt-1 text-red-200">{feedbackMessage}</p>
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="mt-2 inline-block text-xs font-semibold text-white underline hover:text-red-200"
                    >
                      Click here to email directly via Gmail ({personal.email}) ↗
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Subject <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Junior Full-Stack Developer Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello HuzaiFa, I came across your portfolio and would like to connect..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none"
                  />
                </div>

                {/* Submit Button showing "Sending..." during submission */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
