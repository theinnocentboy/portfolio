import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Code2, Trophy, Mail, FileText, ExternalLink, Terminal, Search
} from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const buildCommands = () => [
  { id: 'home', label: 'Go to Home', hint: 'Section', icon: Home, action: () => scrollTo('#home') },
  { id: 'about', label: 'Go to About', hint: 'Section', icon: User, action: () => scrollTo('#about') },
  { id: 'projects', label: 'Go to Projects', hint: 'Section', icon: Code2, action: () => scrollTo('#projects') },
  { id: 'achievements', label: 'Go to Achievements', hint: 'Section', icon: Trophy, action: () => scrollTo('#achievements') },
  { id: 'contact', label: 'Go to Contact', hint: 'Section', icon: Mail, action: () => scrollTo('#contact') },
  { id: 'resume', label: 'Download Resume', hint: 'File', icon: FileText, action: () => download('/Sheikh_Sahil_Resume.pdf', 'Sheikh_Sahil_Resume.pdf') },
  { id: 'github', label: 'Open GitHub', hint: 'External', icon: GithubIcon, action: () => openExternal('https://github.com/theinnocentboy') },
  { id: 'linkedin', label: 'Open LinkedIn', hint: 'External', icon: LinkedinIcon, action: () => openExternal('https://www.linkedin.com/in/sheikhsahil-in/') },
  { id: 'email', label: 'Copy Email Intent to Contact Form', hint: 'Action', icon: ExternalLink, action: () => scrollTo('#contact') },
];

function scrollTo(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
function download(href, filename) {
  const a = document.createElement('a');
  a.href = href;
  a.download = filename;
  a.click();
}
function openExternal(url) {
  window.open(url, '_blank', 'noreferrer');
}

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const commands = useMemo(() => buildCommands(), []);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(c => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
  }, [query, commands]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const runCommand = useCallback((cmd) => {
    if (!cmd) return;
    cmd.action();
    close();
  }, [close]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isK = e.key.toLowerCase() === 'k';
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault();
        setOpen((prev) => !prev);
        return;
      }
      if (!open) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        runCommand(filtered[activeIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, filtered, activeIndex, close, runCommand]);

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  return (
    <>
      {/* Subtle trigger hint, bottom-left, desktop only */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="hidden md:flex fixed bottom-6 left-6 z-40 items-center gap-2 px-3 py-2 rounded-full bg-tokyonight-bgStorm/80 backdrop-blur-md border border-tokyonight-bgHighlight/50 text-tokyonight-fgMuted hover:text-tokyonight-cyan hover:border-tokyonight-cyan/40 transition-colors text-xs font-mono shadow-lg"
      >
        <Search size={13} />
        <span>Search</span>
        <kbd className="px-1.5 py-0.5 rounded bg-tokyonight-bgHighlight text-tokyonight-fgDim text-[10px]">⌘K</kbd>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-tokyonight-bg/70 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-tokyonight-bgStorm border border-tokyonight-bgHighlight rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-tokyonight-bgHighlight">
                <Terminal size={16} className="text-tokyonight-comment shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent outline-none text-tokyonight-fg placeholder:text-tokyonight-comment font-mono text-sm"
                />
                <kbd className="px-1.5 py-0.5 rounded bg-tokyonight-bgHighlight text-tokyonight-fgDim text-[10px] shrink-0">ESC</kbd>
              </div>

              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <div className="px-5 py-8 text-center text-tokyonight-comment text-sm font-mono">
                    No matching commands.
                  </div>
                )}
                {filtered.map((cmd, i) => {
                  const Icon = cmd.icon;
                  const active = i === activeIndex;
                  return (
                    <button
                      key={cmd.id}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => runCommand(cmd)}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                        active ? 'bg-tokyonight-cyan/10' : ''
                      }`}
                    >
                      <Icon size={16} className={active ? 'text-tokyonight-cyan' : 'text-tokyonight-fgMuted'} />
                      <span className={`flex-1 text-sm ${active ? 'text-tokyonight-fg' : 'text-tokyonight-fgDim'}`}>
                        {cmd.label}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-tokyonight-comment">
                        {cmd.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
