const LINKS = [
  { href: "#domains", label: "Компетенции" },
  { href: "#stack",   label: "Стек" },
  { href: "#process", label: "Подход" },
  { href: "#contact", label: "Контакт" },
];

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--color-border)" }}
      className="mt-24"
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* top row: logo + nav */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* logo */}
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-widest"
            style={{ color: "var(--color-white)", textDecoration: "none" }}
          >
            <span style={{ color: "var(--color-green)" }}>~</span>/kirillp
          </a>

          {/* nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none p-0 m-0">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-xs tracking-wide transition-colors duration-150"
                    style={{ color: "var(--color-gray)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-gray)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* bottom row: copyright + built-with */}
        <div
          className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}
        >
          <p
            className="font-mono text-xs"
            style={{ color: "var(--color-gray)", margin: 0 }}
          >
            $ Павлов Кирилл · 2025
          </p>
          <p
            className="font-mono text-xs"
            style={{ color: "var(--color-gray)", margin: 0 }}
          >
            React · Vite · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
