import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [selectedIntent, setSelectedIntent] = useState('Hiring / Job Opportunity');
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const intents = [
    'Hiring / Job Opportunity',
    'Project / Freelance Work',
    'General Networking'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    if (!accessKey) {
      setStatus('error');
      return;
    }
    
    const formData = new FormData(e.target);
    
    formData.append('access_key', accessKey);
    
    formData.append("Inquiry_Type", selectedIntent);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        e.target.reset();
        setSelectedIntent('Hiring / Job Opportunity');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto relative border-t border-tokyonight-bgHighlight/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tokyonight-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center relative z-10">
        <span className="block text-xs font-mono uppercase tracking-[0.3em] text-tokyonight-comment mb-3">
          System.Inbox
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-tokyonight-fg mb-4">
          Initiate <span className="text-tokyonight-blue">Connection</span>
        </h2>
        <p className="text-tokyonight-fgMuted text-base md:text-lg font-light">Send a message below. It routes directly to my secure inbox.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative z-10 bg-tokyonight-bgStorm/50 backdrop-blur-sm border border-tokyonight-bgHighlight p-8 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim">Connection.Intent [Select One]</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {intents.map((intent) => (
                <button
                  type="button"
                  key={intent}
                  onClick={() => setSelectedIntent(intent)}
                  aria-pressed={selectedIntent === intent}
                  className={`px-4 py-3 rounded-lg text-xs font-mono transition-all border flex items-center justify-center gap-2 ${
                    selectedIntent === intent 
                      ? 'bg-tokyonight-blue/20 border-tokyonight-blue text-tokyonight-blue shadow-[0_0_15px_rgba(122,162,247,0.2)]' 
                      : 'bg-tokyonight-bg border-tokyonight-bgHighlight text-tokyonight-fgMuted hover:border-tokyonight-comment'
                  }`}
                >
                  {selectedIntent === intent && <CheckCircle2 size={14} />}
                  {intent}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim">System.User [Name]</label>
              <input type="text" name="name" autoComplete="name" required className="w-full px-4 py-3 bg-tokyonight-bg border border-tokyonight-bgHighlight rounded-lg focus:outline-none focus:ring-2 focus:ring-tokyonight-blue text-tokyonight-fg transition-all text-sm" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim">Return.Address [Email]</label>
              <input type="email" name="email" autoComplete="email" required className="w-full px-4 py-3 bg-tokyonight-bg border border-tokyonight-bgHighlight rounded-lg focus:outline-none focus:ring-2 focus:ring-tokyonight-blue text-tokyonight-fg transition-all text-sm" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-tokyonight-fgDim">Data.Payload [Message]</label>
            <textarea name="message" required rows="4" className="w-full px-4 py-3 bg-tokyonight-bg border border-tokyonight-bgHighlight rounded-lg focus:outline-none focus:ring-2 focus:ring-tokyonight-blue text-tokyonight-fg transition-all resize-none text-sm" placeholder="We have an open role for a Full-Stack Engineer..."></textarea>
          </div>

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-tokyonight-blue hover:bg-tokyonight-blue/80 text-tokyonight-bg font-bold tracking-tight rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-[0_0_20px_rgba(122,162,247,0.3)] text-sm">
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Transmitting Data...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Execute Transmission</span>
              </>
            )}
          </motion.button>

          {status === 'success' && (
              <motion.div role="status" aria-live="polite" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-tokyonight-green text-center p-3 bg-tokyonight-green/10 rounded-lg border border-tokyonight-green/20 text-xs font-mono flex items-center justify-center gap-2">
              <CheckCircle2 size={16} /> Transmission successful. Packet routed to secure inbox.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div role="alert" aria-live="assertive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-tokyonight-red text-center p-3 bg-tokyonight-red/10 rounded-lg border border-tokyonight-red/20 text-xs font-mono flex items-center justify-center gap-2">
              <AlertCircle size={16} /> Transmission failed. Please check your connection.
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
