import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#domains", label: "Компетенции" },
  { href: "#stack",   label: "Стек" },
  { href: "#process", label: "Подход" },
  { href: "#contact", label: "Контакт" },
];

const SECTION_IDS = ["domains", "stack", "process", "contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 34 });

  // sticky visual state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Esc закрывает меню
  useEffect(() => {
    if (!open) return;
    const fn = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open]);

  // scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-200"
      style={{
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-mono text-sm font-semibold tracking-widest text-white hover:text-green transition-colors duration-150"
          style={{ color: "var(--color-white)" }}
        >
          <span style={{ color: "var(--color-green)" }}>~</span>/kirillp
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              className="nav-link px-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary ml-4"
            style={{ minHeight: "36px", padding: "0 1rem", fontSize: "0.75rem" }}
          >
            связаться
          </a>
        </div>

        {/* mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="btn btn-outline sm:hidden"
          style={{ minHeight: "44px", width: "44px", padding: 0 }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* progress bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: reduced ? scrollYProgress : progress, background: "var(--color-green)", transformOrigin: "left center" }}
        className="scroll-bar h-px w-full"
      />

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden sm:hidden"
            style={{ borderTop: "1px solid var(--color-border)", background: "rgba(10,10,10,0.97)" }}
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.href ? "true" : undefined}
                  className="nav-link py-1 text-base"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-3 w-full"
              >
                связаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
