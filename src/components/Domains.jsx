import { motion, useReducedMotion } from "framer-motion";
import { DOMAINS } from "../content.js";

const cardVariants = {
  hidden: (reduced) => ({
    opacity: reduced ? 1 : 0,
    y: reduced ? 0 : 12,
  }),
  visible: (reduced) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function Domains() {
  const reduced = useReducedMotion();

  return (
    <section
      id="domains"
      className="relative px-6 py-24"
      style={{ background: "var(--color-black)" }}
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* eyebrow label */}
        <div
          className="label mb-3 block"
          style={{ color: "var(--color-green-dim)" }}
        >
          // компетенции
        </div>

        {/* heading */}
        <h2
          className="mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 5vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "var(--color-white)",
          }}
        >
          Что я умею
        </h2>

        {/* grid of cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.code}
              custom={reduced}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: reduced ? 0 : index * 0.1,
              }}
            >
              <div
                className="card domain-card h-full flex flex-col p-6"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              >
                {/* code label */}
                <div
                  className="label mb-4"
                  style={{ color: "var(--color-green)" }}
                >
                  [{domain.code}]
                </div>

                {/* title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "var(--color-white)",
                  }}
                >
                  {domain.title}
                </h3>

                {/* description */}
                <p
                  className="mb-6 flex-grow"
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    color: "var(--color-gray)",
                  }}
                >
                  {domain.desc}
                </p>

                {/* bullet points */}
                <ul className="space-y-2">
                  {domain.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm"
                      style={{ color: "var(--color-white)" }}
                    >
                      <span
                        style={{
                          color: "var(--color-green)",
                          flexShrink: 0,
                        }}
                      >
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
