import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-interior.webp";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(id);
  }, []);

  const on = ready ? "true" : "false";

  return (
    <section id="top" className="bg-green relative overflow-hidden">
      <div className="architectural-lines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1400px] flex-col justify-end px-6 pt-28 pb-10 md:min-h-[88vh] md:px-10 md:pb-12">
        <div className="relative mx-auto w-full max-w-5xl">
          <div
            data-visible={on}
            className="reveal media-zoom border-hairline-green overflow-hidden rounded-[22px] border"
            style={{ transitionDuration: "1.4s" }}
          >
            <img
              src={heroImage}
              fetchPriority="high"
              decoding="async"
              width={1600}
              height={1104}
              alt="Cozinha planejada MÉBEL em madeira natural com bancada em pedra clara"
              className="h-[46vh] w-full object-cover md:h-[56vh]"
            />
          </div>

          <h1 className="text-on-green pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center">
            <span
              data-visible={on}
              className="reveal-mask font-display block text-[13vw] leading-[0.86] tracking-tight drop-shadow-[0_2px_40px_rgba(13,64,57,0.45)] md:text-[8.5vw]"
              style={{ transitionDelay: "260ms" }}
            >
              Espaços
            </span>
            <span
              data-visible={on}
              className="reveal-mask font-display block text-[13vw] leading-[0.9] tracking-tight drop-shadow-[0_2px_40px_rgba(13,64,57,0.45)] md:text-[8.5vw]"
              style={{ transitionDelay: "420ms" }}
            >
              que começam
            </span>
            <span
              data-visible={on}
              className="reveal-mask font-display block text-[13vw] leading-[0.95] tracking-tight drop-shadow-[0_2px_40px_rgba(13,64,57,0.45)] md:text-[8.5vw]"
              style={{ transitionDelay: "560ms" }}
            >
              com uma ideia.
            </span>
          </h1>
        </div>

        <div className="text-on-green mt-10 grid grid-cols-1 items-end gap-6 sm:grid-cols-2">
          <div data-visible={on} className="reveal" style={{ transitionDelay: "900ms" }}>
            <p className="label-editorial text-champagne">Mébel · Móveis Planejados</p>
            <p className="text-on-green-muted mt-2 max-w-xs text-[13px] leading-relaxed">
              Desde 2009, a criar soluções para espaços que fazem sentido.
            </p>
          </div>
          <div
            data-visible={on}
            className="reveal sm:justify-self-end"
            style={{ transitionDelay: "1050ms" }}
          >
            <a href="#projectos" className="arrow-nudge text-[13px] tracking-wide">
              Explorar projectos <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
