import { motion } from 'framer-motion';
import { Terminal, MapPin, GraduationCap, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Years Coding', value: '3+' },
  { label: 'Projects Shipped', value: '4+' },
  { label: 'Hackathon Rank', value: '#12/90' },
];

const About = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          System.<span className="text-cyan-400">Bio</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A closer look at the process behind the projects.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-500">
          <Terminal size={14} />
          <span>~/about-me --verbose</span>
        </div>

        <div className="relative z-10 space-y-4 text-slate-300 leading-relaxed">
          <p>
            I'm Sahil — a full-stack developer who likes turning messy, real-world
            problems into working software. Most of what I build sits at the
            intersection of <span className="text-emerald-400 font-medium">web engineering</span> and{' '}
            <span className="text-cyan-400 font-medium">applied AI</span>: platforms
            that don't just look good, but actually solve something — matching
            blood donors faster, helping students study smarter, or screening resumes
            with real NLP instead of keyword matching.
          </p>
          <p>
            My background spans Python, Java, and C/C++, with hands-on depth in
            networking and security (CCNA-certified) alongside the MERN stack and
            Flask for shipping products end to end. I'm most comfortable owning a
            problem from architecture to deployment — and I like working in teams
            where that ownership is shared.
          </p>
          <p>
            Currently open to full-stack and AI-integration roles where I can keep
            building things that are technically sound <em>and</em> actually get used.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-3 mt-6 text-sm text-slate-400">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700">
            <MapPin size={14} className="text-emerald-400" /> India
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700">
            <GraduationCap size={14} className="text-cyan-400" /> Computer Science
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700">
            <Sparkles size={14} className="text-purple-400" /> Open to opportunities
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-mono uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;