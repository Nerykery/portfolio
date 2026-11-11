import { useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import { PRINCIPLES } from '../content.js';

export default function Process() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow Label */}
        <div className="label mb-4 text-var(--color-gray)">// подход</div>

        {/* Heading */}
        <h2 className="text-5xl font-display font-bold mb-16 text-var(--color-white)">
          От идеи до продакшена
        </h2>

        {/* Cards Grid with Arrow Connectors */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.num}
                variants={itemVariants}
                className="card relative p-6 bg-var(--color-surface) border border-var(--color-border) rounded-lg"
              >
                {/* Number */}
                <div className="font-mono text-5xl font-bold text-var(--color-green) mb-4 leading-none">
                  {principle.num}
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-semibold text-var(--color-white) mb-3">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-body text-var(--color-gray) leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrow Connectors - Desktop Only */}
          {!prefersReducedMotion && (
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {[0, 1, 2].map((i) => (
                <svg
                  key={`arrow-${i}`}
                  className="absolute top-12 text-var(--color-green)"
                  style={{
                    left: `calc(25% * (${i} + 1) - 12px)`,
                    width: '24px',
                    height: '24px',
                    opacity: 0.3,
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
