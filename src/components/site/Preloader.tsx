import { useEffect, useState } from "react";

export function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const MIN = 1400;
    const finish = () => {
      const wait = Math.max(0, MIN - (performance.now() - start));
      setTimeout(() => {
        setHiding(true);
        setTimeout(() => setGone(true), 700);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const safety = setTimeout(finish, 4000);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = gone ? "" : "hidden";
  }, [gone]);

  if (gone) return null;

  return (
    <div
      aria-hidden={hiding}
      role="status"
      aria-label="A carregar Mébel"
      className={`bg-green text-on-green fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-display animate-fade-in text-6xl tracking-tight md:text-8xl">
        Mébel
      </span>
      <span className="bg-on-green-muted/30 relative mt-8 block h-px w-40 overflow-hidden">
        <span className="bg-on-green preloader-bar absolute inset-y-0 left-0 block w-full" />
      </span>
      <style>{`
        .preloader-bar { transform-origin: left; animation: preloader-bar 1.4s ease-in-out forwards; }
        @keyframes preloader-bar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}
