import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fade = (delay, reduced) => ({
  initial: reduced ? false : { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-start justify-center overflow-hidden px-6"
    >
      {/* тонкая зелёная сетка — единственный фоновый элемент */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl pt-20 pb-16">
        {/* статусная строка */}
        <motion.div {...fade(0, reduced)} className="label mb-8 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--color-green)" }}
          />
          открыт к проектам
        </motion.div>

        {/* главный заголовок */}
        <h1
          className="font-display"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "var(--color-white)",
          }}
        >
          <motion.span
            {...fade(0.1, reduced)}
            className="block"
            style={{ willChange: "opacity, transform" }}
          >
            Пишу код.
          </motion.span>
          <motion.span
            {...fade(0.2, reduced)}
            className="block"
            style={{ willChange: "opacity, transform" }}
          >
            Строю системы.
          </motion.span>
          <motion.span
            {...fade(0.3, reduced)}
            className="block flex items-baseline gap-3"
            style={{ color: "var(--color-green)", willChange: "opacity, transform" }}
          >
            Защищаю деньги.
            <span
              aria-hidden="true"
              className="blink inline-block h-[0.8em] w-[0.4em] rounded-sm"
              style={{ background: "var(--color-green)", verticalAlign: "baseline" }}
            />
          </motion.span>
        </h1>

        {/* описание */}
        <motion.p
          {...fade(0.5, reduced)}
          className="mt-8 max-w-lg text-lg leading-relaxed"
          style={{ color: "var(--color-gray)", willChange: "opacity, transform" }}
        >
          Инженер полного цикла: фулл-стек, DevOps и информационная безопасность финансовых
          структур. Интегрирую нейросети туда, где они приносят деньги, а не хайп.
        </motion.p>

        {/* CTA */}
        <motion.div {...fade(0.65, reduced)} className="mt-10 flex flex-wrap gap-4">
          <a href="#domains" className="btn btn-primary">
            смотреть компетенции
          </a>
          <a href="#contact" className="btn btn-outline">
            написать мне
          </a>
        </motion.div>

        {/* стек в одну строку */}
        <motion.p
          {...fade(0.8, reduced)}
          className="mt-12"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-green-dim)" }}
        >
          Python · C++ · React · DevOps · ИБ · AI · 1С · Telegram Bot
        </motion.p>
      </div>

      {/* стрелка вниз */}
      <motion.a
        href="#domains"
        aria-label="Перейти к компетенциям"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: "var(--color-green-dim)" }}
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
