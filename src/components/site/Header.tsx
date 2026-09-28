import { useEffect, useState } from "react";

const nav = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Projectos", href: "#projectos" },
  { label: "Processo", href: "#processo" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone = scrolled ? "text-ink" : "text-on-green";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-hairline bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 md:grid-cols-3 md:px-10 ${tone}`}
      >
        <a href="#top" className="font-display text-xl tracking-tight md:text-2xl">
          Mébel
        </a>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-normal opacity-80 transition-opacity duration-500 hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end md:flex">
          <a
            href="#orcamento"
            className="arrow-nudge text-[13px] opacity-80 transition-opacity duration-500 hover:opacity-100"
          >
            Solicitar orçamento <span className="arrow">↗</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="justify-self-end text-sm md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-ivory px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {[...nav, { label: "Solicitar orçamento", href: "#orcamento" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-ink text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
