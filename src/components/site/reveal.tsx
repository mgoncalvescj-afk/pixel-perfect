import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  mask?: boolean;
};

export function Reveal({ children, className = "", delay = 0, as, mask = false }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${mask ? "reveal-mask-host" : "reveal"} ${className}`}
    >
      {mask ? (
        <div className="reveal-mask" data-visible={visible ? "true" : "false"} style={{ transitionDelay: `${delay}ms` }}>
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}
