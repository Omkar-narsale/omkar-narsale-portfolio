import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#111110] border-t border-[#E2E5E9] dark:border-[#2C2C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#111110] dark:text-[#9FCAFC] bg-[#9FCAFC]/20 border border-[#9FCAFC]/30 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111110] dark:text-[#F2F4F6]">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A8A9A8]">
            Open to summer internships, data engineering collaborations, hackathons, and technical discussions.
          </p>
          <div className="w-16 h-1 bg-[#9FCAFC] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-panel p-6 sm:p-7 border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] shadow-sm space-y-5">
              
              <h3 className="text-lg font-bold text-[#111110] dark:text-[#F2F4F6]">
                Contact Channels
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A8A9A8] leading-relaxed">
                Whether you have an internship opening, want to discuss an AI/ETL architecture, or want to collaborate on a hackathon project, my inbox is always open.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-full bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="block text-[11px] font-mono text-[#A8A9A8]">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-full bg-white dark:bg-[#191918] text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] border border-[#E2E5E9] dark:border-[#2C2C2A] transition-all shadow-xs"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#9FCAFC]/20 text-[#111110] dark:text-[#9FCAFC] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#A8A9A8]">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#111110] dark:text-[#F2F4F6]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="block text-xs font-mono uppercase tracking-wider text-[#A8A9A8] mb-3">
                  Profiles &amp; Repositories
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-full bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] hover:border-[#9FCAFC] text-xs font-semibold text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] transition-all justify-center"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-full bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] hover:border-[#9FCAFC] text-xs font-semibold text-[#111110] dark:text-[#F2F4F6] hover:text-[#9FCAFC] transition-all justify-center"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Opportunities Tags */}
              <div className="pt-2">
                <span className="block text-xs font-mono uppercase tracking-wider text-[#A8A9A8] mb-2.5">
                  Currently Open To:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Summer 2026 Internships",
                    "Data Analytics Projects",
                    "AI/ML Research Collabs",
                    "Hackathon Teams"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#9FCAFC]/20 text-[#111110] dark:text-[#F2F4F6] border border-[#9FCAFC]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white dark:bg-[#191918] shadow-sm">
              
              <h3 className="text-xl font-bold text-[#111110] dark:text-[#F2F4F6] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-[#A8A9A8] mb-6">
                Fill out the form below to initiate an email directly to my inbox.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    Message Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A8A9A8] max-w-md mx-auto">
                    Your email client should open with your message. If it did not open automatically, you can email me directly at{' '}
                    <strong className="text-[#9FCAFC]">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono font-semibold text-[#111110] dark:text-[#9FCAFC] hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#111110] dark:text-[#F2F4F6] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] placeholder-[#A8A9A8] focus:outline-none focus:ring-2 focus:ring-[#9FCAFC]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#111110] dark:text-[#F2F4F6] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] placeholder-[#A8A9A8] focus:outline-none focus:ring-2 focus:ring-[#9FCAFC]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#111110] dark:text-[#F2F4F6] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Internship opportunity / Project collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] placeholder-[#A8A9A8] focus:outline-none focus:ring-2 focus:ring-[#9FCAFC]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#111110] dark:text-[#F2F4F6] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, idea, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4F6] dark:bg-[#222220] border border-[#E2E5E9] dark:border-[#2C2C2A] text-[#111110] dark:text-[#F2F4F6] placeholder-[#A8A9A8] focus:outline-none focus:ring-2 focus:ring-[#9FCAFC]/50 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#F2F4F6] dark:text-[#111110] bg-[#111110] dark:bg-[#F2F4F6] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] shadow-sm transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Preparing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
