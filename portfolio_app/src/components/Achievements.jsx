import { motion } from 'framer-motion';
import { Trophy, Network, Award, ArrowRight } from 'lucide-react';

const achievements = [
  {
    title: "Lead - Samadhan 1.0 National AI Hackathon",
    organization: "Sagar Institute of Science and Technology",
    icon: Trophy,
    description: "Led a cross-functional team of 4 to secure Rank 12 out of 90 competing teams. Spearheaded the architecture and development of the MediBuddy AI Chatbot, successfully integrating Python with AI to deliver quick health remedies.",
    tags: ["Leadership", "AI Chatbot", "Python", "Full-Stack Architecture"]
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    organization: "Cisco Networking Academy",
    icon: Network,
    description: "Mastered comprehensive enterprise networking, encompassing Introduction to Networks, SRWE, Security, and Automation. Demonstrated hands-on infrastructure proficiency by designing complex network topologies in Cisco Packet Tracer.",
    tags: ["Network Security", "Routing Protocols", "IPv4/IPv6", "Automation"]
  },
  {
    title: "Elite Certificate - Python for Data Science",
    organization: "IIT Madras (NPTEL)",
    icon: Award,
    description: "Earned the Elite certification marker, validating advanced, production-level proficiency in Python programming specifically tailored for data analytics and complex algorithmic problem-solving.",
    tags: ["Data Science", "Python", "Analytics", "Algorithms"]
  }
];

const Achievements = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-tokyonight-bgHighlight/50">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
        <span className="block text-xs font-mono uppercase tracking-[0.3em] text-tokyonight-comment mb-3">
          System.Log
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-tokyonight-fg mb-4">Mission <span className="text-tokyonight-magenta">Log</span></h2>
        <p className="text-tokyonight-fgMuted max-w-2xl mx-auto text-base md:text-lg font-light">Milestones in technical leadership, competitive development, and advanced infrastructure certifications.</p>
      </motion.div>

      <div className="relative border-l-2 border-tokyonight-bgHighlight ml-4 md:ml-0 md:pl-0 mb-16">
        {achievements.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="mb-12 relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
            <div className="absolute -left-[17px] md:static md:w-12 md:h-12 flex-shrink-0 bg-tokyonight-bgStorm border-2 border-tokyonight-bgHighlight rounded-full flex items-center justify-center group-hover:border-tokyonight-magenta group-hover:shadow-[0_0_15px_rgba(187,154,247,0.4)] transition-all duration-300 z-10 mt-1">
              <item.icon size={20} className="text-tokyonight-fgMuted group-hover:text-tokyonight-magenta transition-colors" />
            </div>
            <div className="bg-tokyonight-bgStorm/50 backdrop-blur-sm border border-tokyonight-bgHighlight p-6 rounded-2xl shadow-lg hover:border-tokyonight-comment transition-colors flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-tokyonight-fgDim">{item.title}</h3>
              </div>
              <h4 className="text-tokyonight-green font-medium text-sm font-mono mb-4">{item.organization}</h4>
              <p className="text-tokyonight-fgMuted leading-relaxed mb-6 font-light">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-tokyonight-bgHighlight/50 text-tokyonight-fgDim text-xs font-mono rounded-full border border-tokyonight-bgHighlight">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Recruiter Conversion CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center bg-gradient-to-b from-tokyonight-bgStorm/0 to-tokyonight-bgStorm/80 p-8 rounded-3xl border border-tokyonight-bgHighlight/50 text-center"
      >
        <h3 className="text-2xl font-bold tracking-tight text-tokyonight-fg mb-3">Ready to scale your engineering team?</h3>
        <p className="text-tokyonight-fgMuted mb-8 max-w-md font-light">I am actively open for roles where I can leverage my full-stack architecture and networking expertise.</p>
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-tokyonight-magenta hover:bg-tokyonight-magenta/80 text-tokyonight-bg px-8 py-4 rounded-xl font-bold tracking-tight transition-all shadow-[0_0_20px_rgba(187,154,247,0.3)] hover:shadow-[0_0_40px_rgba(187,154,247,0.5)]"
        >
          Initiate Connection <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Achievements;
