import { useState, type FormEvent } from 'react';
import { LoaderCircle, Send } from 'lucide-react';

interface ContactFormProps {
  endpoint: string;
  email: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({ endpoint, email }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Web3Forms expects an access_key field; leave configurable via hidden input in markup.
    if (!endpoint || endpoint.includes('web3forms.com/submit')) {
      const accessKey = formData.get('access_key');
      if (!accessKey || String(accessKey).startsWith('YOUR_')) {
        setStatus('error');
        setMessage(
          'Configura tu access_key de Web3Forms (o cambia el endpoint a Formspree) en ContactForm / cv.ts.',
        );
        return;
      }
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setMessage('Mensaje enviado. Te responderé pronto.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage(`No se pudo enviar. Escríbeme directamente a ${email}.`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Replace YOUR_WEB3FORMS_ACCESS_KEY with your real key from web3forms.com */}
      <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
      <input type="hidden" name="subject" value="Nuevo mensaje desde el CV web" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--text-muted)]">Nombre</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-2.5 text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
            placeholder="Tu nombre"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--text-muted)]">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-2.5 text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
            placeholder="tu@email.com"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block text-[var(--text-muted)]">Mensaje</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-2.5 text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
          placeholder="Cuéntame sobre tu proyecto o vacante…"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <LoaderCircle size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
          {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
        </button>
        {message && (
          <p
            className={`text-sm ${
              status === 'success' ? 'text-[var(--success)]' : 'text-red-400'
            }`}
            role="status"
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
