import { motion, useReducedMotion } from "framer-motion";
import { PRINCIPLES } from "../content.js";

export default function Process() {
  const reduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: reduced ? false : { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="process" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="label mb-4">// подход</div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            color: "var(--color-white)",
            marginBottom: "3rem",
          }}
        >
          От идеи до продакшена
        </h2>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRINCIPLES.map((p, i) => (
            <motion.li key={p.num} variants={item} className="card relative p-6">
              <span
                className="block font-mono leading-none"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--color-green)",
                  marginBottom: "1rem",
                  opacity: 0.6,
                }}
                aria-hidden="true"
              >
                {p.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--color-white)",
                  marginBottom: "0.5rem",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  color: "var(--color-gray)",
                }}
              >
                {p.desc}
              </p>

              {/* стрелка между шагами — только desktop */}
              {i < PRINCIPLES.length - 1 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="pointer-events-none absolute -right-3 top-10 hidden lg:block"
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "var(--color-green)",
                    opacity: 0.3,
                  }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
