import { motion } from 'framer-motion';
import { Terminal, MapPin, GraduationCap, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Years Coding', value: '3+' },
  { label: 'Projects Shipped', value: '4+' },
  { label: 'Hackathon Rank', value: '#12/90' },
];

const About = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-tokyonight-bgHighlight/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <span className="block text-xs font-mono uppercase tracking-[0.3em] text-tokyonight-comment mb-3">
          System.Info
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-tokyonight-fg mb-4">
          System.<span className="text-tokyonight-cyan">Bio</span>
        </h2>
        <p className="text-tokyonight-fgMuted max-w-2xl mx-auto text-base md:text-lg font-light">
          A closer look at the process behind the projects.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-tokyonight-bgStorm/50 backdrop-blur-sm border border-tokyonight-bgHighlight rounded-2xl p-8 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-tokyonight-cyan/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex items-center gap-2 mb-6 text-xs font-mono text-tokyonight-comment">
          <Terminal size={14} />
          <span>~/about-me --verbose</span>
        </div>

        <div className="relative z-10 space-y-4 text-tokyonight-fgDim leading-relaxed font-light">
          <p>
            I'm Sahil — a full-stack developer who likes turning messy, real-world
            problems into working software. Most of what I build sits at the
            intersection of <span className="text-tokyonight-green font-medium">web engineering</span> and{' '}
            <span className="text-tokyonight-cyan font-medium">applied AI</span>: platforms
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

        <div className="relative z-10 flex flex-wrap gap-3 mt-6 text-xs font-mono text-tokyonight-fgMuted">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-tokyonight-bgHighlight/50 rounded-full border border-tokyonight-bgHighlight">
            <MapPin size={14} className="text-tokyonight-green" /> India
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-tokyonight-bgHighlight/50 rounded-full border border-tokyonight-bgHighlight">
            <GraduationCap size={14} className="text-tokyonight-cyan" /> Computer Science
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-tokyonight-bgHighlight/50 rounded-full border border-tokyonight-bgHighlight">
            <Sparkles size={14} className="text-tokyonight-magenta" /> Open to opportunities
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-tokyonight-bgHighlight">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-black tracking-tight text-tokyonight-fg">{stat.value}</div>
              <div className="text-[10px] text-tokyonight-comment mt-1 font-mono uppercase tracking-[0.2em]">
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
