import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Flame } from 'lucide-react';

const USERNAME = 'theinnocentboy';

const GithubActivity = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed');
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        setData(json);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => { cancelled = true; };
  }, []);

  if (status === 'error') return null; // fail silently, don't break the page

  const weeks = data ? chunkIntoWeeks(data.contributions) : [];
  const total = data?.total?.lastYear ?? null;
  const streak = data ? longestRecentStreak(data.contributions) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-tokyonight-bgStorm/50 backdrop-blur-sm border border-tokyonight-bgHighlight rounded-2xl p-6 md:p-8 mt-8"
    >
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-tokyonight-comment">
          <GitCommit size={14} />
          <span>~/github --activity --live</span>
        </div>
        {status === 'ready' && streak > 2 && (
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-tokyonight-orange">
              <Flame size={13} /> {streak}d streak
            </span>
          </div>
        )}
      </div>

      {status === 'loading' && (
        <div className="h-24 flex items-center justify-center text-tokyonight-comment text-xs font-mono animate-pulse">
          fetching commit graph...
        </div>
      )}

      {status === 'ready' && (
        <div className="overflow-x-auto">
          <div className="flex gap-[3px] w-max">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={day ? `${day.date}: ${day.count} contributions` : ''}
                    className={`w-[10px] h-[10px] rounded-sm ${levelClass(day?.level)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

function levelClass(level) {
  switch (level) {
    case 4: return 'bg-tokyonight-green';
    case 3: return 'bg-tokyonight-green/70';
    case 2: return 'bg-tokyonight-green/45';
    case 1: return 'bg-tokyonight-green/20';
    default: return 'bg-tokyonight-bgHighlight/50';
  }
}

function chunkIntoWeeks(contributions) {
  const weeks = [];
  let current = [];
  contributions.forEach((day, i) => {
    current.push(day);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  });
  if (current.length) weeks.push(current);
  return weeks;
}

function longestRecentStreak(contributions) {
  let streak = 0;
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].count > 0) streak++;
    else break;
  }
  return streak;
}

export default GithubActivity;
