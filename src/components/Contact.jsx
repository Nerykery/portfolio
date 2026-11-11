import { useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import { Mail, Send, GitBranch } from 'lucide-react';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(57,255,20,0.04) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Eyebrow Label */}
        <div className="label mb-4 text-var(--color-gray) justify-center">// контакт</div>

        {/* Heading */}
        <h2 className="text-5xl font-display font-bold mb-6 text-var(--color-white)">
          Есть задача?
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-body text-var(--color-gray) mb-12 leading-relaxed">
          Опишите проект в паре предложений — отвечу с конкретикой.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Email Button */}
          <a
            href="mailto:pavlovka0109@gmail.com"
            className="btn btn-primary inline-flex items-center justify-center gap-2 min-h-11 px-6 bg-var(--color-green) text-var(--color-black) font-mono font-semibold rounded-lg hover:bg-opacity-90 transition-all"
          >
            <Mail size={20} />
            <span>Mail</span>
          </a>

          {/* Telegram Button */}
          <a
            href="https://t.me/dota2_developer"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline inline-flex items-center justify-center gap-2 min-h-11 px-6 border border-var(--color-green) text-var(--color-green) font-mono font-semibold rounded-lg hover:bg-var(--color-green) hover:text-var(--color-black) transition-all"
          >
            <Send size={20} />
            <span>Telegram</span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/Nerykery"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline inline-flex items-center justify-center gap-2 min-h-11 px-6 border border-var(--color-green) text-var(--color-green) font-mono font-semibold rounded-lg hover:bg-var(--color-green) hover:text-var(--color-black) transition-all"
          >
            <GitBranch size={20} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Footer Note */}
        <p className="font-mono text-sm text-var(--color-gray)">
          Обычно отвечаю в течение дня
        </p>
      </motion.div>
    </section>
  );
}
