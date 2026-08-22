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
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-tokyonight-bgHighlight/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-tokyonight-fg mb-4">
          Technical <span className="text-tokyonight-blue">Arsenal</span>
        </h2>
        <p className="text-tokyonight-fgMuted max-w-2xl mx-auto text-lg">
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
            className="bg-tokyonight-bgStorm/50 backdrop-blur-sm border border-tokyonight-bgHighlight rounded-2xl p-6 shadow-lg hover:border-tokyonight-comment transition-colors"
          >
            <h3 className="text-xl font-semibold text-tokyonight-fgDim mb-6 border-b border-tokyonight-bgHighlight/50 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-tokyonight-bgHighlight/50 text-tokyonight-fgDim text-sm font-medium rounded-md border border-tokyonight-bgHighlight hover:text-tokyonight-green hover:border-tokyonight-green/50 hover:bg-tokyonight-green/10 transition-all cursor-default"
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