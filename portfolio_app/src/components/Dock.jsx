import { motion } from 'framer-motion';
import { Home, Mail, FileText, Code2, Trophy, User } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const dockItems = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'projects', label: 'Projects', icon: Code2, href: '#projects' },
  { id: 'achievements', label: 'Achievements', icon: Trophy, href: '#achievements' }, // Added Achievement Navigation
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }, // Fixed to route to the form
  { id: 'github', label: 'GitHub', icon: GithubIcon, href: 'https://github.com/theinnocentboy', external: true },
  { id: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sheikhsahil-in/', external: true },
  { id: 'resume', label: 'Resume', icon: FileText, href: '/Sheikh_Sahil_Resume.pdf', download: 'Sheikh_Sahil_Resume.pdf' }
];

const Dock = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="dock-scroll flex max-w-[calc(100vw-1.5rem)] items-center gap-2 overflow-x-auto px-3 py-2 sm:gap-4 sm:px-6 sm:py-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {dockItems.map((item) => (
          <div key={item.id} className="relative group">
            <div className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 text-slate-200 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg border border-slate-700">
              {item.label}
            </div>
            <motion.a
              href={item.href}
              aria-label={item.label}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noreferrer" : ""}
              download={item.download ? item.download : undefined}
              whileHover={{ y: -8, scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-emerald-400 transition-colors border border-slate-700/50 sm:h-12 sm:w-12"
            >
              <item.icon size={20} strokeWidth={2.5} />
            </motion.a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;