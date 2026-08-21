import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Core Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript", "DSA"]
  },
  {
    title: "Web Technologies",
    skills: ["MERN Stack", "Flask", "HTML5/CSS/JavaScript"]
  },
  {
    title: "Database & AI",
    skills: ["MongoDB", "SQLAlchemy", "MySql/Postgresql", "SQLite", "Groq API", "AIML"]
  },
  {
    title: "Infrastructure & Security",
    skills: ["Computer Networking", "Cyber Security", "REST APIs", "Git", "JSON Web Tokens"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technical <span className="text-blue-400">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A versatile foundation built on continuous learning and scalable system architecture.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-slate-600 transition-colors"
          >
            <h3 className="text-xl font-semibold text-slate-200 mb-6 border-b border-slate-700/50 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm font-medium rounded-md border border-slate-700 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;