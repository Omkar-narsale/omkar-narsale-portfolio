import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, Terminal, Sparkles, Database, Brain, Eye, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'etl' | 'ai' | 'cv' | 'fullstack'>('etl');

  // Rotate preview tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === 'etl') return 'ai';
        if (prev === 'ai') return 'cv';
        if (prev === 'cv') return 'fullstack';
        return 'etl';
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden tech-grid-pattern">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-gradient-to-bl from-emerald-500/10 via-cyan-500/10 to-transparent blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Status Pill */}
        <div className="flex items-center justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.educationBadge}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Turning <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Data</span> Into Insights. <br className="hidden sm:block" />
                Building <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Technology</span> Into Solutions.
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 tracking-tight">
                Information Technology Student <span className="text-cyan-500 dark:text-cyan-400">|</span> Data Analytics <span className="text-cyan-500 dark:text-cyan-400">|</span> AI & Machine Learning <span className="text-cyan-500 dark:text-cyan-400">|</span> Full Stack Development
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Third-year student at <strong className="text-slate-900 dark:text-slate-200">Shah and Anchor Kutchhi Engineering College (SAKEC), Mumbai</strong>. Dedicated to building automated ETL pipelines, LLM-powered diagnostics, real-time computer vision applications, and robust data-driven products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 shadow-sm transition-all duration-300 hover:scale-[1.02] focus:outline-none"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="flex items-center gap-5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  title="GitHub: Omkar-narsale"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  title="LinkedIn: Omkar Narsale"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors font-mono font-bold text-sm"
                  title="LeetCode: 115+ Solved"
                >
                  [LC]
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Omkar"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl glass-panel p-5 shadow-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-[#0D1524]/90 backdrop-blur-xl">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-xs text-slate-400 dark:text-slate-500">
                    omkar-narsale@engineer: ~/portfolio-v2
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                  <Terminal className="w-3 h-3" />
                  <span>v2.0.0</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1.5 pt-3 pb-3 border-b border-slate-200/60 dark:border-slate-800/60 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab('etl')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    activeTab === 'etl'
                      ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/30'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>RetailFlow.py</span>
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    activeTab === 'ai'
                      ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-500/30'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  <Brain className="w-3.5 h-3.5" />
                  <span>NetSageAI.py</span>
                </button>
                <button
                  onClick={() => setActiveTab('cv')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    activeTab === 'cv'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/30'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>MirrorFit.py</span>
                </button>
                <button
                  onClick={() => setActiveTab('fullstack')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    activeTab === 'fullstack'
                      ? 'bg-pink-500/15 text-pink-600 dark:text-pink-400 font-semibold border border-pink-500/30'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>FixlyApp.tsx</span>
                </button>
              </div>

              {/* Terminal Code Snippet Content */}
              <div className="py-4 font-mono text-xs leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-300 min-h-[220px]">
                {activeTab === 'etl' && (
                  <div className="space-y-1 text-left">
                    <p className="text-slate-400">// [ETL Pipeline] Automated Retail Data Warehouse</p>
                    <p><span className="text-pink-500">class</span> <span className="text-cyan-400">RetailFlowPipeline</span>:</p>
                    <p className="pl-4"><span className="text-indigo-400">def</span> <span className="text-amber-400">process_file_event</span>(self, file_path):</p>
                    <p className="pl-8">df = self.validator.clean_and_normalize(file_path)</p>
                    <p className="pl-8">metrics = self.engineer_retail_features(df)</p>
                    <p className="pl-8 text-emerald-500"># Incremental load to MySQL Data Warehouse</p>
                    <p className="pl-8">self.db.sync_incremental(metrics, table=<span className="text-emerald-400">"fact_orders"</span>)</p>
                    <p className="pl-8 text-cyan-400">return QualityReport(status=<span className="text-emerald-400">"SUCCESS"</span>, rows=len(df))</p>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-1 text-left">
                    <p className="text-slate-400">// [AI Reasoning] Cisco Network Diagnostics</p>
                    <p><span className="text-pink-500">async def</span> <span className="text-cyan-400">diagnose_cisco_fault</span>(symptom_log):</p>
                    <p className="pl-4">evidence = deterministic_checks(symptom_log)</p>
                    <p className="pl-4">groq_client = Groq(api_key=GROQ_API_KEY)</p>
                    <p className="pl-4">response = <span className="text-pink-500">await</span> groq_client.chat.completions.create(</p>
                    <p className="pl-8">model=<span className="text-emerald-400">"llama-3.3-70b-versatile"</span>,</p>
                    <p className="pl-8">messages=[evidence_prompt(evidence, symptom_log)]</p>
                    <p className="pl-4">)</p>
                    <p className="pl-4 text-emerald-500"># Human governance log & structured fix</p>
                    <p className="pl-4 text-cyan-400">return StructuredDiagnosis.parse(response)</p>
                  </div>
                )}

                {activeTab === 'cv' && (
                  <div className="space-y-1 text-left">
                    <p className="text-slate-400">// [Computer Vision] 468-Point Real-Time Face Mesh</p>
                    <p><span className="text-pink-500">class</span> <span className="text-cyan-400">MirrorFitVirtualTryOn</span>:</p>
                    <p className="pl-4"><span className="text-indigo-400">def</span> <span className="text-amber-400">estimate_head_pose</span>(self, landmarks):</p>
                    <p className="pl-8">image_points = extract_2d_mesh(landmarks)</p>
                    <p className="pl-8">_, rot_vec, trans_vec = cv2.solvePnP(MODEL_POINTS, image_points)</p>
                    <p className="pl-8 text-emerald-500"># Dynamic 3D accessory alignment</p>
                    <p className="pl-8">self.render_eyewear_mesh(frame, rot_vec, trans_vec)</p>
                    <p className="pl-8 text-cyan-400">return cv2.imshow(<span className="text-emerald-400">"Live Try-On"</span>, frame)</p>
                  </div>
                )}

                {activeTab === 'fullstack' && (
                  <div className="space-y-1 text-left">
                    <p className="text-slate-400">// [MERN Full Stack] Fixly Marketplace Architecture</p>
                    <p><span className="text-pink-500">export const</span> <span className="text-cyan-400">BookingStatusFlow</span> = () =&gt; &#123;</p>
                    <p className="pl-4">const &#123; booking, mutateStatus &#125; = useBookingLifecycle();</p>
                    <p className="pl-4 text-emerald-500">// Real-time MongoDB Atlas update</p>
                    <p className="pl-4">await api.patch(<span className="text-emerald-400">`/api/bookings/$&#123;id&#125;`</span>, &#123;</p>
                    <p className="pl-8">status: <span className="text-pink-400">"TECHNICIAN_DISPATCHED"</span></p>
                    <p className="pl-4">&#125;);</p>
                    <p className="pl-4 text-cyan-400">pushNotification(<span className="text-emerald-400">"Pro is on the way!"</span>);</p>
                    <p>&#125;;</p>
                  </div>
                )}
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200 dark:border-slate-800 text-center">
                <div className="p-2 rounded-xl bg-slate-100/70 dark:bg-slate-900/60">
                  <div className="text-sm font-bold font-mono text-cyan-600 dark:text-cyan-400">115+</div>
                  <div className="text-[10px] text-slate-500">LeetCode Solved</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-100/70 dark:bg-slate-900/60">
                  <div className="text-sm font-bold font-mono text-indigo-600 dark:text-indigo-400">18+</div>
                  <div className="text-[10px] text-slate-500">Certifications</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-100/70 dark:bg-slate-900/60">
                  <div className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">87%</div>
                  <div className="text-[10px] text-slate-500">NPTEL Elite</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Continuous Tech Marquee */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 text-center">
            Core Technology Stack &amp; Tooling
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              "Python", "SQL", "React 19", "FastAPI", "MySQL", 
              "Groq LLaMA 3.3", "OpenCV", "MediaPipe", "Power BI", 
              "Tailwind CSS", "AWS Academy", "TypeScript", "Node.js"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:border-cyan-500/50 hover:text-cyan-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
