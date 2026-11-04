import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ASCII_GRID_COLS,
  ASCII_GRID_ROWS,
  getPortraitLuminanceData,
} from '../data/asciiPortraitData';

interface AsciiIntroProps {
  onComplete: () => void;
}

const TECH_CORPUS = [
  'OMKAR_NARSALE',
  'DATA_ANALYTICS',
  'COMPUTER_VISION',
  'AI_ENGINEER',
  'SAKEC_MUMBAI',
  'LEETCODE_115+',
  'FULLSTACK_DEV',
  'PYTHON_3.13',
  'REACT_19',
  'TYPESCRIPT',
  'OPENCV_MEDIAPIPE',
  'NEURAL_NETWORKS',
  'SYSTEM_ARCHITECTURE',
  'LOW_LATENCY',
  'ETL_PIPELINES',
  'TENSORFLOW',
  'PYTORCH',
  'STREAMLIT',
  'GROQ_LLAMA_3.3',
  '01010100',
  '01000001',
  '01010011',
  '01001011',
  'SQL_WINDOW_FUNCS',
  '0xFF01_0x7C8A',
  'CISCO_CERTIFIED',
  'AWS_ACADEMY',
  'NPTEL_ELITE_87%',
  'FASTAPI',
  'REST_APIS',
  'DECRYPTING_MATRICE',
  'SYNCHRONIZING_CORE',
  'HARDWARE_ACCELERATION',
  'RETAILFLOW',
  'NETSAGE_AI',
  'MIRRORFIT_XR',
  'FIXLY_SERVICES',
  'SAM_AI_TINYLLAMA'
].join('_');

const GLYPHS = '0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%#@*+=:-_';

export const AsciiIntro: React.FC<AsciiIntroProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<string>('LOADING 0%');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const luminanceData = getPortraitLuminanceData();
    const cols = ASCII_GRID_COLS;
    const rows = ASCII_GRID_ROWS;

    // Responsive sizing based on viewport
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Base width and height for ASCII container
      const maxW = Math.min(vw * 0.95, 780);
      const maxH = Math.min(vh * 0.68, 540);

      // Character cell dimensions
      const cellW = maxW / cols;
      const cellH = maxH / rows;

      canvas.width = maxW * dpr;
      canvas.height = maxH * dpr;
      canvas.style.width = `${maxW}px`;
      canvas.style.height = `${maxH}px`;

      ctx.scale(dpr, dpr);
      return { maxW, maxH, cellW, cellH };
    };

    let { cellW, cellH } = updateCanvasSize();

    const handleResize = () => {
      const res = updateCanvasSize();
      cellW = res.cellW;
      cellH = res.cellH;
    };
    window.addEventListener('resize', handleResize);

    // Animation progress controller
    let startTime: number | null = null;
    const duration = 2400; // 2.4 seconds total load duration
    let animId: number;
    let currentPct = 0;

    const renderFrame = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const rawPct = Math.min(100, (elapsed / duration) * 100);

      // Smooth custom acceleration curve similar to modern loading states
      // Rapid start (0-60%), brief dramatic suspense at ~74%, then smooth power up to 100%
      let curvePct: number;
      if (rawPct < 55) {
        curvePct = (rawPct / 55) * 60;
      } else if (rawPct < 80) {
        curvePct = 60 + ((rawPct - 55) / 25) * 22; // lingers around 74-82%
      } else {
        curvePct = 82 + ((rawPct - 80) / 20) * 18;
      }
      currentPct = Math.min(100, curvePct);
      setProgress(Math.floor(currentPct));

      if (currentPct >= 100) {
        setStatusText('INITIALIZING PORTFOLIO // 100%');
      } else {
        setStatusText(`LOADING ${Math.floor(currentPct)}%`);
      }

      // Clear frame
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Font setup
      const fontSize = Math.max(7, Math.floor(cellH * 0.92));
      ctx.font = `bold ${fontSize}px "SF Mono", "Fira Code", "Consolas", "Courier New", monospace`;
      ctx.textBaseline = 'top';

      // Scanline row: proportionally illuminates down based on currentPct
      const activeScanRow = Math.floor((currentPct / 100) * (rows + 4));

      let charIdx = 0;
      for (let r = 0; r < rows; r++) {
        const isDecodedRow = r <= activeScanRow;
        const isAtScanEdge = r >= activeScanRow - 2 && r <= activeScanRow + 1;

        for (let c = 0; c < cols; c++) {
          const lum = luminanceData[r * cols + c];
          const corpusChar = TECH_CORPUS[charIdx % TECH_CORPUS.length];
          charIdx++;

          // Only render cells inside Omkar's silhouette
          if (lum > 30) {
            const x = c * cellW;
            const y = r * cellH;

            // Normalized luminance for face highlights (0 to 1)
            const norm = (lum - 30) / (255 - 30);

            if (isDecodedRow) {
              // Row is fully or partially decoded
              let char = corpusChar;

              // At the scanline wavefront, characters glitch/decode randomly
              if (isAtScanEdge && Math.random() > 0.45) {
                char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
              }

              // Occasional subtle matrix flicker in background (< 0.8% chance)
              if (Math.random() < 0.008) {
                char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
              }

              // Brightness: dim in shadow/suit (40-70), brilliant white on face/shirt highlights (180-255)
              const brightness = Math.floor(45 + Math.pow(norm, 1.15) * 210);
              
              // Highlight color: crisp cool white with subtle tint
              ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
              ctx.fillText(char, x, y);
            } else if (r === activeScanRow + 2 && Math.random() > 0.7) {
              // Emerging faint characters right below the scan wavefront
              const faintChar = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
              ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
              ctx.fillText(faintChar, x, y);
            }
          }
        }
      }

      if (rawPct < 100) {
        animId = requestAnimationFrame(renderFrame);
      } else {
        // Finished loading: hold for 380ms then smoothly trigger exit transition
        setTimeout(() => {
          setIsFinishing(true);
          setTimeout(() => {
            onComplete();
          }, 650);
        }, 380);
      }
    };

    animId = requestAnimationFrame(renderFrame);

    // Keyboard ESC to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        cancelAnimationFrame(animId);
        setIsFinishing(true);
        setTimeout(onComplete, 200);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinishing(true);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isFinishing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center select-none overflow-hidden cursor-pointer"
          onClick={handleSkip}
          title="Click to enter"
        >
          {/* Subtle Ambient Scanline Backdrop */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(245,158,11,0.03)_0%,transparent_70%)]" />

          {/* Skip Button Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded border border-neutral-800 hover:border-amber-500/50 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-amber-400 font-mono text-[11px] tracking-widest uppercase transition-all duration-200"
          >
            Skip [ESC]
          </button>

          {/* Center ASCII Matrix Canvas */}
          <div className="relative flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="block filter drop-shadow-[0_0_20px_rgba(255,255,255,0.06)]"
            />
          </div>

          {/* Bottom Progress Controls — Exact Dribbble/Terminal Spec */}
          <div className="mt-4 sm:mt-6 flex flex-col items-center w-full px-6 max-w-sm sm:max-w-md">
            {/* Loading Text */}
            <div className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#E5A83B] mb-2 sm:mb-2.5 uppercase drop-shadow-[0_0_8px_rgba(229,168,59,0.5)]">
              {statusText}
            </div>

            {/* Glowing Amber Progress Bar */}
            <div className="w-full h-[3px] bg-[#222222] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D97706] via-[#E5A83B] to-[#FBBF24] rounded-full shadow-[0_0_12px_rgba(229,168,59,0.85)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Hint */}
            <div className="mt-3 text-[10px] font-mono text-neutral-600 tracking-wider uppercase">
              Click anywhere or press ESC to skip
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AsciiIntro;

