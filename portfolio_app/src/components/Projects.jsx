import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, User, Users } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/**
 * Each project reads problem -> what I built -> what I owned.
 *
 * Screenshots are resolved by slug from public/projects/<slug>.png at 16:9
 * (1600x900). A missing file falls back to a styled placeholder, so adding an
 * image is the only step needed to light up a card.
 */
const projects = [
  {
    slug: 'bloodbank-pro',
    title: 'BloodBank Pro',
    tagline: 'Urgency-aware blood donation platform',
    problem:
      'Blood requests in an emergency get worked in the order they arrive, which is rarely the order of actual urgency.',
    built:
      'A Flask platform that scores each incoming request with a scikit-learn model over the request text, then matches it against a donor registry so the most urgent cases surface first. Auth0 handles donor identity, SQLAlchemy backs the registry.',
    contribution: 'Solo project — architecture, model, backend and deployment.',
    solo: true,
    tech: ['Flask', 'SQLAlchemy', 'scikit-learn', 'Auth0'],
    link: 'https://github.com/theinnocentboy/BloodBank-Pro',
    live: 'https://bloodbankpro.software',
    featured: true,
  },
  {
    slug: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    tagline: 'Resume-to-job-description matching',
    problem:
      'Keyword-matching ATS filters reject strong candidates over vocabulary mismatches — "JS" against a posting that says "JavaScript".',
    built:
      'A Flask tool that extracts skills from a resume using a Llama model via the Groq API, scores it against a specific job description, and reports which requirements are actually unmet instead of returning a single opaque percentage.',
    contribution: 'Solo project — extraction pipeline, scoring logic and UI.',
    solo: true,
    tech: ['Python', 'Flask', 'Groq API', 'SQLite'],
    link: 'https://github.com/theinnocentboy/AI-Resume-Analyzer',
  },
];

/** Screenshot, or a themed placeholder when the file isn't present. */
const ProjectShot = ({ slug, title, tall }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-full ${tall ? 'h-64 md:h-80' : 'h-44'} bg-tokyonight-bg border-b border-tokyonight-bgHighlight flex flex-col items-center justify-center gap-2 text-tokyonight-comment`}
      >
        <Terminal size={22} aria-hidden="true" />
        <span className="font-mono text-[11px] tracking-wide">
          public/projects/{slug}.png
        </span>
      </div>
    );
  }

  return (
    <img
      src={`/projects/${slug}.png`}
      alt={`Screenshot of ${title}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full ${tall ? 'h-64 md:h-80' : 'h-44'} object-cover object-top border-b border-tokyonight-bgHighlight`}
    />
  );
};

const RoleBadge = ({ solo, children }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tokyonight-bgHighlight/60 border border-tokyonight-bgHighlight text-[11px] font-mono text-tokyonight-fgMuted">
    {solo ? <User size={11} aria-hidden="true" /> : <Users size={11} aria-hidden="true" />}
    {children}
  </span>
);

const ProjectLinks = ({ project }) => (
  <div className="relative z-10 flex flex-wrap items-center gap-3 pt-5 border-t border-tokyonight-bgHighlight mt-auto">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="bg-tokyonight-green/90 hover:bg-tokyonight-green text-tokyonight-bg px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-semibold tracking-tight text-sm shadow-[0_0_15px_rgba(158,206,106,0.2)] hover:shadow-[0_0_25px_rgba(158,206,106,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bgStorm"
      >
        <ExternalLink size={16} aria-hidden="true" /> Live Demo
      </a>
    )}
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="text-tokyonight-fgDim hover:text-tokyonight-fg flex items-center gap-2 transition-colors text-sm font-medium tracking-tight px-4 py-2 bg-tokyonight-bgHighlight/60 hover:bg-tokyonight-bgHighlight rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bgStorm"
    >
      <GithubIcon /> Source
    </a>
  </div>
);

const ProjectBody = ({ project }) => (
  <>
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-3">
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-tokyonight-fg group-hover:text-tokyonight-green transition-colors">
        {project.title}
      </h3>
      <span className="text-sm text-tokyonight-comment font-mono">{project.tagline}</span>
    </div>

    <div className="mb-5">
      <RoleBadge solo={project.solo}>{project.contribution}</RoleBadge>
    </div>

    <dl className="space-y-3 mb-6 text-sm leading-relaxed">
      <div>
        <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-tokyonight-comment mb-1">
          The problem
        </dt>
        <dd className="text-tokyonight-fgMuted font-light">{project.problem}</dd>
      </div>
      <div>
        <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-tokyonight-comment mb-1">
          What I built
        </dt>
        <dd className="text-tokyonight-fgDim font-light">{project.built}</dd>
      </div>
    </dl>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-tokyonight-bgHighlight text-tokyonight-teal text-xs font-mono rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-tokyonight-bgHighlight/50">
      <div className="mb-14">
        <span className="block text-xs font-mono uppercase tracking-[0.3em] text-tokyonight-comment mb-3">
          03 / Projects
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-tokyonight-fg mb-4">
          Selected <span className="text-tokyonight-green">Projects</span>
        </h2>
        <p className="text-tokyonight-fgMuted max-w-2xl text-base md:text-lg font-light">
          Two projects, each with the problem it solves and what I owned. Source
          is open for both.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-tokyonight-bgStorm border border-tokyonight-bgHighlight rounded-2xl shadow-xl overflow-hidden group relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Alternate image side on large screens for rhythm */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <ProjectShot slug={project.slug} title={project.title} tall />
              </div>
              <div className="p-8 flex flex-col">
                {project.featured && (
                  <span className="inline-block w-fit mb-4 px-2.5 py-1 rounded-full bg-tokyonight-green/15 border border-tokyonight-green/30 text-[10px] font-mono uppercase tracking-[0.2em] text-tokyonight-green">
                    Live in production
                  </span>
                )}
                <ProjectBody project={project} />
                <ProjectLinks project={project} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;