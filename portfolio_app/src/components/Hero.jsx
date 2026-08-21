import { motion } from 'framer-motion';
import { FileText } from 'lucide-react'; // Standard icon works perfectly

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl text-center relative z-10">
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-700/50 rounded-full backdrop-blur-sm shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">System.Status: Ready</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-2xl">
          Sheikh Sahil
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8">
          Full-Stack Developer & Engineer
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Versatile developer with strong expertise in Python, Java, and C/C++. Eager to build highly optimized, end-to-end web applications and solve complex engineering problems.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="/Sheikh_Sahil_Resume.pdf" 
            download="Sheikh_Sahil_Resume.pdf"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-emerald-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
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
            className="group flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] text-slate-200"
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
            className="group flex items-center gap-2 bg-[#0A66C2]/10 border border-[#0A66C2]/30 hover:border-[#0A66C2] px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-[0_0_30px_rgba(10,102,194,0.3)] text-blue-400 hover:text-blue-300"
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