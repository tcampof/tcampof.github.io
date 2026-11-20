import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface CopyEmailButtonProps {
  email: string;
}

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const reduceMotion = useReducedMotion();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setShowToast(true);
      window.setTimeout(() => setCopied(false), 2000);
      window.setTimeout(() => setShowToast(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <button type="button" onClick={copy} className="btn btn-secondary">
        {copied ? <Check size={18} /> : <Copy size={18} />}
        {copied ? 'Email copiado' : 'Copiar email'}
      </button>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text)] shadow-[var(--shadow)]"
            role="status"
            aria-live="polite"
          >
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-[var(--success)]" />
              Email copiado al portapapeles
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
