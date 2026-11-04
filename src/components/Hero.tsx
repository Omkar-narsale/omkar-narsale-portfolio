import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HolographicTilt } from './HolographicTilt';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { fadeInUp, staggerContainer, customEase } from '../utils/animations';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  return (
    <section ref={sectionRef} className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#F2F4F6] dark:bg-[#111110]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <motion.div
            style={{ y: contentY, opacity: heroOpacity }}
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Minimal Availability Indicator */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E2E5E9] dark:border-[#2C2C2A] bg-white/70 dark:bg-[#191918]/70 text-xs font-mono text-[#524E4D] dark:text-[#A8A9A8]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>Available for Summer 2026 Opportunities</span>
              </div>
            </motion.div>

            {/* Greeting & Headline */}
            <div className="space-y-3">
              <motion.div
                variants={fadeInUp}
                className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#A8A9A8] dark:text-[#A8A9A8] font-medium"
              >
                Hello, I'm Omkar Narsale
              </motion.div>

              {/* Sophisticated Reference Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.1rem] font-bold tracking-tight text-[#111110] dark:text-[#F2F4F6] leading-tight sm:leading-[1.25]"
              >
                <span className="block">Building Digital Experiences.</span>
                <span className="block mt-1 sm:mt-1.5">
                  Turning Data <span className="text-[#6CA6EC] dark:text-[#9FCAFC]">Into Insights.</span>
                </span>
              </motion.h1>
            </div>

            {/* Introduction & Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-[#524E4D] dark:text-[#A8A9A8] max-w-lg leading-relaxed font-normal"
            >
              I'm an Information Technology student passionate about Data Analytics, Artificial Intelligence, Computer Vision and Full-Stack Development.
            </motion.p>

            {/* Academic Credential Tag */}
            <motion.div
              variants={fadeInUp}
              className="text-xs font-mono text-[#524E4D] dark:text-[#A8A9A8] pt-1"
            >
              <span>Third-Year IT Student · Shah &amp; Anchor Kutchhi Engineering College (SAKEC), Mumbai</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#F2F4F6] dark:text-[#111110] bg-[#111110] dark:bg-[#F2F4F6] hover:bg-[#9FCAFC] dark:hover:bg-[#9FCAFC] hover:text-[#111110] dark:hover:text-[#111110] transition-colors duration-200 shadow-xs"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#111110] dark:text-[#F2F4F6] bg-transparent hover:bg-white dark:hover:bg-[#191918] border border-[#A8A9A8]/40 dark:border-[#2C2C2A] transition-colors duration-200"
              >
                <FileText className="w-4 h-4 text-[#6CA6EC] dark:text-[#9FCAFC]" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Understated Social Presence */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-4 border-t border-[#E2E5E9]/80 dark:border-[#2C2C2A]/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A8A9A8]">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                {[
                  { href: PERSONAL_INFO.github, label: 'GitHub', icon: <GithubIcon className="w-4 h-4" /> },
                  { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', icon: <LinkedinIcon className="w-4 h-4" /> },
                  { href: PERSONAL_INFO.leetcode, label: 'LeetCode', icon: <LeetCodeIcon className="w-4 h-4" /> },
                  { href: `mailto:${PERSONAL_INFO.email}`, label: 'Email', icon: <Mail className="w-4 h-4" /> },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    className="p-2 text-[#524E4D] dark:text-[#A8A9A8] hover:text-[#111110] dark:hover:text-[#F2F4F6] transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Editorial Clean Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: portraitY, opacity: heroOpacity }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="relative w-full max-w-[360px] sm:max-w-[390px]"
            >
              {/* Premium 3D Holographic Portrait Presentation */}
              <HolographicTilt>
                <div className="rounded-3xl p-2 sm:p-2.5 bg-white dark:bg-[#191918] border border-[#E2E5E9] dark:border-[#2C2C2A] shadow-md">
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-[#111110]">
                    <img
                      src="/assets/omkar-profile.jpeg"
                      alt="Omkar Narsale - Professional portrait in black formal blazer"
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-[center_top] transition-transform duration-700"
                    />
                  </div>
                </div>
              </HolographicTilt>
            </motion.div>
          </div>

        </div>

        {/* Minimal Bottom Horizontal Divider & Domain Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-[#E2E5E9] dark:border-[#2C2C2A] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A8A9A8]"
        >
          <span>DATA ANALYTICS</span>
          <span className="hidden sm:inline">·</span>
          <span>DATA ENGINEERING</span>
          <span className="hidden sm:inline">·</span>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <span className="hidden sm:inline">·</span>
          <span>COMPUTER VISION</span>
          <span className="hidden sm:inline">·</span>
          <span>FULL-STACK DEVELOPMENT</span>
        </motion.div>

      </div>
    </section>
  );
};
