import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tokyonight-green/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl text-center relative z-10">
        <motion.div variants={itemVariants} className="flex justify-center mb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-tokyonight-bgStorm/80 border border-tokyonight-bgHighlight/50 rounded-full backdrop-blur-sm shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tokyonight-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tokyonight-green"></span>
            </span>
            <span className="text-[10px] font-mono text-tokyonight-green uppercase tracking-[0.25em]">System.Status: Ready</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.95] text-tokyonight-fg drop-shadow-2xl">
          Sheikh Sahil
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-tokyonight-green to-tokyonight-cyan mb-8">
          Full-Stack Developer & Engineer
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-base md:text-lg text-tokyonight-fgMuted mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Versatile developer with strong expertise in Python, Java, and C/C++. Eager to build highly optimized, end-to-end web applications and solve complex engineering problems.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="/Sheikh_Sahil_Resume.pdf" 
            download="Sheikh_Sahil_Resume.pdf"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-tokyonight-blue text-tokyonight-bg px-8 py-4 rounded-xl font-bold tracking-tight transition-all shadow-[0_0_20px_rgba(122,162,247,0.3)] hover:shadow-[0_0_40px_rgba(122,162,247,0.6)]"
          >
            <FileText size={20} className="group-hover:animate-bounce" /> 
            Execute Resume
          </motion.a>

          <motion.a 
            href="https://github.com/theinnocentboy" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-tokyonight-bgStorm border border-tokyonight-bgHighlight hover:border-tokyonight-comment px-8 py-4 rounded-xl font-semibold tracking-tight transition-all shadow-lg hover:shadow-[0_0_30px_rgba(192,202,245,0.1)] text-tokyonight-fgDim"
          >
            <svg className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Initialize.git
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/sheikhsahil-in/" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-tokyonight-blue/10 border border-tokyonight-blue/30 hover:border-tokyonight-blue px-8 py-4 rounded-xl font-semibold tracking-tight transition-all shadow-lg hover:shadow-[0_0_30px_rgba(122,162,247,0.3)] text-tokyonight-blue hover:text-tokyonight-cyan"
          >
            <svg className="w-5 h-5 fill-current group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            Network
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
