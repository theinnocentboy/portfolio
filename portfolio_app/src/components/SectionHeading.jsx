import { motion } from 'framer-motion';

/**
 * Shared section heading: numbered eyebrow, title with optional accent word,
 * and an optional subtitle. Used by About, Skills, Achievements and Contact.
 */
const SectionHeading = ({
  index,
  eyebrow,
  title,
  accent,
  accentClass = 'text-tokyonight-cyan',
  subtitle,
  align = 'center',
}) => {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? 'mb-14 text-center' : 'mb-14'}
    >
      <span className="block text-xs font-mono uppercase tracking-[0.3em] text-tokyonight-comment mb-3">
        {index} / {eyebrow}
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-tokyonight-fg mb-4">
        {title}
        {accent && <span className={accentClass}> {accent}</span>}
      </h2>
      {subtitle && (
        <p
          className={`text-tokyonight-fgMuted text-base md:text-lg font-light ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;