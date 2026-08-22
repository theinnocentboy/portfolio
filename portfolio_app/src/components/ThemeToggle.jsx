import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

const THEME_KEY = 'theme-preference';

const options = [
  { id: 'light', icon: Sun, label: 'Light' },
  { id: 'system', icon: Monitor, label: 'System' },
  { id: 'dark', icon: Moon, label: 'Dark' },
];

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

  const select = (next) => {
    setMode(next);
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-1 p-1 rounded-full bg-tokyonight-bgStorm/80 backdrop-blur-md border border-tokyonight-bgHighlight/50 shadow-lg"
      role="radiogroup"
      aria-label="Theme"
    >
      {options.map(({ id, icon: Icon, label }) => {
        const active = mode === id;
        return (
          <motion.button
            key={id}
            onClick={() => select(id)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bgStorm ${
              active
                ? 'text-tokyonight-bg'
                : 'text-tokyonight-fgMuted hover:text-tokyonight-cyan'
            }`}
          >
            {active && (
              <motion.span
                layoutId="theme-toggle-active"
                className="absolute inset-0 rounded-full bg-tokyonight-cyan"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Icon size={16} className="relative z-10" strokeWidth={2.5} />
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ThemeToggle;
