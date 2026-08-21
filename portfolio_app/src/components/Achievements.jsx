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
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/50">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mission <span className="text-purple-400">Log</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Milestones in technical leadership, competitive development, and advanced infrastructure certifications.</p>
      </motion.div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-0 mb-16">
        {achievements.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="mb-12 relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
            <div className="absolute -left-[17px] md:static md:w-12 md:h-12 flex-shrink-0 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 z-10 mt-1">
              <item.icon size={20} className="text-slate-400 group-hover:text-purple-400 transition-colors" />
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl shadow-lg hover:border-slate-700 transition-colors flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold text-slate-200">{item.title}</h3>
              </div>
              <h4 className="text-emerald-400 font-medium mb-4">{item.organization}</h4>
              <p className="text-slate-400 leading-relaxed mb-6">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-full border border-slate-700">{tag}</span>
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
        className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-900/0 to-slate-900/80 p-8 rounded-3xl border border-slate-800/50 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-3">Ready to scale your engineering team?</h3>
        <p className="text-slate-400 mb-8 max-w-md">I am actively open for roles where I can leverage my full-stack architecture and networking expertise.</p>
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]"
        >
          Initiate Connection <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Achievements;