import { useReducedMotion, motion } from "framer-motion";
import { Mail, Send, GitBranch } from "lucide-react";

export default function Contact() {
  const reduced = useReducedMotion();

  const fade = {
    initial: reduced ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      {/* свечение */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(57,255,20,0.04) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
        }}
      />

      <motion.div {...fade} className="relative mx-auto max-w-2xl text-center">
        <div className="label mb-5 flex justify-center">// контакт</div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-white)",
          }}
        >
          Есть задача?
        </h2>

        <p
          className="mx-auto mt-5 max-w-md text-lg leading-relaxed"
          style={{ color: "var(--color-gray)" }}
        >
          Опишите проект в паре предложений — отвечу с конкретикой: что можно
          сделать, за сколько и какие есть риски.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:pavlovka0109@gmail.com" className="btn btn-primary">
            <Mail size={16} aria-hidden="true" />
            pavlovka0109@gmail.com
          </a>
          <a
            href="https://t.me/dota2_developer"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline"
          >
            <Send size={16} aria-hidden="true" />
            telegram
          </a>
          <a
            href="https://github.com/Nerykery"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline"
          >
            <GitBranch size={16} aria-hidden="true" />
            github
          </a>
        </div>

        <p
          className="mt-8 font-mono text-xs"
          style={{ color: "var(--color-green-dim)" }}
        >
          обычно отвечаю в течение дня
        </p>
      </motion.div>
    </section>
  );
}
