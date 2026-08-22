import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const BOOT_LINES = [
  { prompt: '>', text: 'sys.boot( "Sheikh Sahil" )', delay: 0 },
  { prompt: '>', text: 'loading_modules... [OK]', delay: 550 },
  { prompt: '>', text: 'role: Full-Stack Software Engineer', delay: 950 },
  { prompt: '>', text: 'stack: ["Python", "Java", "C/C++"]', delay: 1400 },
];

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
};

const TypedLine = ({ text, onDone, speed = 18, skip }) => {
  const [shown, setShown] = useState(skip ? text : '');
  useEffect(() => {
    if (skip) {
      setShown(text);
      onDone?.();
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, skip]);
  return <span>{shown}</span>;
};

const Hero = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [visibleLines, setVisibleLines] = useState(reducedMotion ? BOOT_LINES.length : 1);
  const [bootDone, setBootDone] = useState(reducedMotion);
  const timers = useRef([]);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(BOOT_LINES.length);
      setBootDone(true);
      return;
    }
    BOOT_LINES.forEach((line, i) => {
      if (i === 0) return;
      const t = setTimeout(() => setVisibleLines((v) => Math.max(v, i + 1)), line.delay);
      timers.current.push(t);
    });
    return () => timers.current.forEach(clearTimeout);
  }, [reducedMotion]);

  const handleLastLineDone = () => setBootDone(true);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden py-24">
      <div aria-hidden="true" className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-tokyonight-blue/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl w-full relative z-10">
        {/* Terminal window — decorative signature element; the real accessible
            content (name, role, description) is the h1/p below, marked up normally.
            This block is hidden from assistive tech to avoid reading rapidly-typed text. */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-tokyonight-bgStorm border border-tokyonight-bgHighlight rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-tokyonight-bgHighlight bg-tokyonight-bgHighlight/20">
            <span className="h-3 w-3 rounded-full bg-tokyonight-red/70" />
            <span className="h-3 w-3 rounded-full bg-tokyonight-yellow/70" />
            <span className="h-3 w-3 rounded-full bg-tokyonight-green/70" />
            <span className="ml-3 text-xs font-mono text-tokyonight-comment tracking-wide">sys/portfolio — bash</span>
          </div>

          <div className="px-6 py-8 md:px-10 md:py-10 font-mono text-sm md:text-base space-y-3">
            {BOOT_LINES.map((line, i) => {
              if (i >= visibleLines) return null;
              const isLast = i === BOOT_LINES.length - 1;
              return (
                <div key={i} className="flex gap-3 text-tokyonight-fgDim">
                  <span className="text-tokyonight-blue select-none">{line.prompt}</span>
                  {isLast ? (
                    <span>
                      <TypedLine text={line.text} onDone={handleLastLineDone} skip={reducedMotion} />
                      {!bootDone && <span className="inline-block w-2 h-4 bg-tokyonight-cyan ml-0.5 animate-pulse align-middle" />}
                    </span>
                  ) : (
                    <span>{line.text}</span>
                  )}
                </div>
              );
            })}
            {bootDone && (
              <div className="flex gap-3 text-tokyonight-green pt-1">
                <span className="select-none">&gt;</span>
                <span className="flex items-center gap-2">
                  status: ready_for_connection_
                  <span className="inline-block w-2 h-4 bg-tokyonight-green animate-pulse" />
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Real accessible content — always in the DOM and in tab order only once visible */}
        <div className="text-center mt-14">
          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] text-tokyonight-fg mb-5">
            Sheikh Sahil
          </h1>
          <p className="text-base md:text-lg text-tokyonight-fgMuted max-w-xl mx-auto font-light leading-relaxed mb-10">
            Building end-to-end web applications and solving complex engineering
            problems with Python, Java, and C/C++.
          </p>

          {bootDone && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="/Sheikh_Sahil_Resume.pdf"
                download="Sheikh_Sahil_Resume.pdf"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2 bg-tokyonight-blue text-tokyonight-bg px-7 py-3.5 rounded-xl font-bold font-mono text-sm tracking-tight transition-all shadow-[0_0_20px_rgba(122,162,247,0.3)] hover:shadow-[0_0_36px_rgba(122,162,247,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bg"
              >
                <FileText size={18} className="group-hover:animate-bounce" />
                Execute Resume
              </motion.a>

              <motion.a
                href="https://github.com/theinnocentboy"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2 bg-tokyonight-bgStorm border border-tokyonight-bgHighlight hover:border-tokyonight-comment px-7 py-3.5 rounded-xl font-semibold font-mono text-sm tracking-tight transition-all text-tokyonight-fgDim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bg"
              >
                <svg aria-hidden="true" className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                Initialize.git
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sheikhsahil-in/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2 bg-tokyonight-blue/10 border border-tokyonight-blue/30 hover:border-tokyonight-blue px-7 py-3.5 rounded-xl font-semibold font-mono text-sm tracking-tight transition-all text-tokyonight-blue hover:text-tokyonight-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bg"
              >
                <svg aria-hidden="true" className="w-4 h-4 fill-current group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Network
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
