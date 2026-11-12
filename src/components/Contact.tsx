import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/motion';
import { CONTACT_EMAIL, CONTACT_LOCATION } from '@/data/portfolio';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const EMPTY_FORM: ContactForm = { name: '', email: '', message: '' };

const INPUT_CLASS =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition duration-300 focus:border-violet-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-violet-500/30';

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Portfolio inquiry from ${form.name.trim()}`;
    const body = `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="relative snap-start py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-5">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-2"
        >
          <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl">
            Have a product in mind?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-normal text-zinc-400 sm:text-lg">
            Share a project, internship opportunity or collaboration idea and I will get back to you.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-10 space-y-4">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="glass glass-hover flex items-center gap-4 p-4 text-sm text-zinc-100"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-200">
                  <Mail size={18} />
                </span>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="glass flex items-center gap-4 p-4 text-sm text-zinc-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                <MapPin size={18} />
              </span>
              {CONTACT_LOCATION}
            </li>
          </motion.ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="glass flex flex-col gap-5 p-6 sm:p-10 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-200">
              Name
              <input
                type="text"
                required
                maxLength={120}
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your name"
                className={INPUT_CLASS}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-200">
              Email
              <input
                type="email"
                required
                maxLength={254}
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="you@company.com"
                className={INPUT_CLASS}
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-200">
            Message
            <textarea
              required
              maxLength={2000}
              rows={6}
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="Tell me about your project or idea"
              className={`${INPUT_CLASS} resize-none`}
            />
          </label>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="btn-primary"
            >
              <Send size={16} />
              Open Email App
            </button>

          </div>
        </motion.form>
      </div>
    </section>
  );
}
