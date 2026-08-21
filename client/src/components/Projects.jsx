import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react'; // Standard icon works perfectly

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: 'BloodBank Pro',
    description: 'AI-Powered Blood Donation Platform streamlining emergency donations with an NLP priority system.',
    tech: ['Flask', 'SQLAlchemy', 'Scikit-learn', 'Auth0'],
    link: 'https://github.com/theinnocentboy/BloodBank-Pro',
    live: 'https://bloodbankpro.software'
  },
  {
    title: 'Retro - Smart Study Assistant',
    description: 'Context-aware study platform with automated flashcard generation, Pomodoro timers, and smart note-taking.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Groq AI'],
    link: 'https://github.com/MR-STARK87/Our-Minor-Project/tree/main'
  },
  {
    title: 'AI Resume Analyzer',
    description: 'AI-based ATS evaluation system integrating Llama AI for skill extraction and job-description matching.',
    tech: ['Python', 'Flask', 'SQLite', 'Groq API'],
    link: 'https://github.com/theinnocentboy/AI-Resume-Analyzer'
  },
  {
    title: 'MediBuddy',
    description: 'Emergency services web application designed to solve quick health remedies and locate nearby hospitals.',
    tech: ['Python', 'Streamlit', 'CSS'],
    link: 'https://github.com/MR-STARK87/final-project-samadhan'
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-emerald-400">Architecture</span></h2>
        <p className="text-slate-400 mb-12 max-w-2xl text-lg">End-to-end software solutions highlighting AI integration, scalable backends, and responsive UI design.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-emerald-500/10 transition-all group relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800 text-emerald-300 text-sm font-medium rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-slate-800 mt-auto">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-semibold text-sm shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg">
                <GithubIcon /> Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;