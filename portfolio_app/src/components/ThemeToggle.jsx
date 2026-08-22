import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

const THEME_KEY = 'theme-preference';
const modes = ['system', 'light', 'dark'];
const icons = { system: Monitor, light: Sun, dark: Moon };
const labels = { system: 'System', light: 'Light', dark: 'Dark' };

function applyTheme(mode) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  if (mode === 'light') root.classList.add('light');
  if (mode === 'dark') root.classList.add('dark');
  // mode === 'system' → leave both classes off; the CSS media query
  // for prefers-color-scheme handles it automatically
}

const ThemeToggle = () => {
  const [mode, setMode] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) || 'system';
    setMode(stored);
    applyTheme(stored);
  }, []);

  const cycle = () => {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    setMode(next);
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  };

  const Icon = icons[mode];

  return (
    <motion.button
      onClick={cycle}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Theme: ${labels[mode]}. Click to change.`}
      title={`Theme: ${labels[mode]}`}
      className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-tokyonight-bgStorm/80 backdrop-blur-md border border-tokyonight-bgHighlight/50 text-tokyonight-fgDim hover:text-tokyonight-cyan hover:border-tokyonight-cyan/50 transition-colors shadow-lg"
    >
      <Icon size={18} />
    </motion.button>
  );
};

export default ThemeToggle;