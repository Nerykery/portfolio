import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { STACK_CATEGORIES } from "../content.js";

// Variants for the section-level entrance stagger
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Variants for the accordion content
const contentVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

function CategoryAccordion({ category, reducedMotion }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      variants={reducedMotion ? undefined : categoryVariants}
      style={{
        borderTop: "1px solid var(--color-border)",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
      }}
    >
      {/* Accordion header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.25rem 0",
          color: "var(--color-white)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "var(--color-green)" }}>{category.title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
          style={{
            display: "inline-block",
            color: "var(--color-green-dim)",
            fontSize: "1.1rem",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      {/* Accordion body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={
              reducedMotion
                ? {
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }
                : contentVariants
            }
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.25rem",
              }}
            >
              {category.tags.map((tag) => (
                <span key={tag} className="stack-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Stack() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      style={{
        background: "var(--color-black)",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Eyebrow label */}
        <p className="label" style={{ marginBottom: "0.75rem" }}>
          // стек
        </p>

        {/* Section heading */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-white)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            marginBottom: "2.5rem",
          }}
        >
          Технологии
        </h2>

        {/* Category list */}
        <motion.div
          variants={reducedMotion ? undefined : sectionVariants}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
        >
          {STACK_CATEGORIES.map((category) => (
            <CategoryAccordion
              key={category.title}
              category={category}
              reducedMotion={reducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
