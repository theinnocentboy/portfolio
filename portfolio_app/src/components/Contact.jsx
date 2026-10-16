import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Copy, Check } from 'lucide-react';
import { SITE } from '../siteConfig';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [selectedIntent, setSelectedIntent] = useState('Hiring / job opportunity');
  const [copied, setCopied] = useState(false);
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const intents = ['Hiring / job opportunity', 'Freelance project', 'Just saying hello'];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API needs a secure context; the mailto link next to this
      // button still works, so there's nothing useful to show the user here.
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    if (!accessKey) {
      setStatus('noKey');
      return;
    }

    const formData = new FormData(e.target);
    formData.append('access_key', accessKey);
    formData.append('Inquiry_Type', selectedIntent);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setSelectedIntent('Hiring / job opportunity');
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto relative border-t border-tokyonight-bgHighlight/50">
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tokyonight-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Get in"
          accent="Touch"
          accentClass="text-tokyonight-blue"
          subtitle="Use the form, or email me directly — whichever is easier for you."
        />
      </div>

      {/* Direct address alongside the form — recruiters often need to paste it
          into an ATS or forward it, which a form can't do. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-3 mb-8"
      >
        <a
          href={`mailto:${SITE.email}`}
          className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-tokyonight-bgStorm border border-tokyonight-bgHighlight hover:border-tokyonight-blue text-tokyonight-fgDim hover:text-tokyonight-fg transition-colors font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bg"
        >
          <Mail size={16} className="text-tokyonight-blue" aria-hidden="true" />
          {SITE.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-tokyonight-bgHighlight/50 border border-tokyonight-bgHighlight hover:border-tokyonight-comment text-tokyonight-fgMuted hover:text-tokyonight-fg transition-colors font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bg"
        >
          {copied ? <Check size={14} className="text-tokyonight-green" aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative z-10 bg-tokyonight-bgStorm/50 backdrop-blur-sm border border-tokyonight-bgHighlight p-8 rounded-2xl shadow-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset className="space-y-3">
            <legend className="text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim mb-3">
              What&apos;s this about?
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {intents.map((intent) => (
                <button
                  type="button"
                  key={intent}
                  onClick={() => setSelectedIntent(intent)}
                  aria-pressed={selectedIntent === intent}
                  className={`px-4 py-3 rounded-lg text-xs font-mono transition-all border flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bgStorm ${
                    selectedIntent === intent
                      ? 'bg-tokyonight-blue/20 border-tokyonight-blue text-tokyonight-blue shadow-[0_0_15px_rgba(122,162,247,0.2)]'
                      : 'bg-tokyonight-bg border-tokyonight-bgHighlight text-tokyonight-fgMuted hover:border-tokyonight-comment'
                  }`}
                >
                  {selectedIntent === intent && <CheckCircle2 size={14} aria-hidden="true" />}
                  {intent}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim">
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                className="w-full px-4 py-3 bg-tokyonight-bg border border-tokyonight-bgHighlight rounded-lg focus:outline-none focus:ring-2 focus:ring-tokyonight-blue text-tokyonight-fg transition-all text-sm"
                placeholder="Walter White"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim">
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 bg-tokyonight-bg border border-tokyonight-bgHighlight rounded-lg focus:outline-none focus:ring-2 focus:ring-tokyonight-blue text-tokyonight-fg transition-all text-sm"
                placeholder="heisenberg@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 bg-tokyonight-bg border border-tokyonight-bgHighlight rounded-lg focus:outline-none focus:ring-2 focus:ring-tokyonight-blue text-tokyonight-fg transition-all resize-none text-sm"
              placeholder="We have an open role for a full-stack engineer..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 bg-tokyonight-blue hover:bg-tokyonight-blue/80 text-tokyonight-bg font-bold tracking-tight rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-[0_0_20px_rgba(122,162,247,0.3)] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tokyonight-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-tokyonight-bgStorm"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <Send size={18} aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <motion.div role="status" aria-live="polite" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-tokyonight-green text-center p-3 bg-tokyonight-green/10 rounded-lg border border-tokyonight-green/20 text-xs font-mono flex items-center justify-center gap-2">
              <CheckCircle2 size={16} aria-hidden="true" /> Thanks — that came through. I&apos;ll reply within a day or two.
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div role="alert" aria-live="assertive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-tokyonight-red text-center p-3 bg-tokyonight-red/10 rounded-lg border border-tokyonight-red/20 text-xs font-mono flex items-center justify-center gap-2 flex-wrap">
              <AlertCircle size={16} aria-hidden="true" />
              <span>
                That didn&apos;t send. Please email me at{' '}
                <a href={`mailto:${SITE.email}`} className="underline hover:text-tokyonight-fg">{SITE.email}</a>.
              </span>
            </motion.div>
          )}

          {/* Distinct from 'error': an unconfigured form isn't a failed send. */}
          {status === 'noKey' && (
            <motion.div role="alert" aria-live="assertive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-tokyonight-yellow text-center p-3 bg-tokyonight-yellow/10 rounded-lg border border-tokyonight-yellow/20 text-xs font-mono flex items-center justify-center gap-2 flex-wrap">
              <AlertCircle size={16} aria-hidden="true" />
              <span>
                The form isn&apos;t configured right now — please email me at{' '}
                <a href={`mailto:${SITE.email}`} className="underline hover:text-tokyonight-fg">{SITE.email}</a>.
              </span>
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;