import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";

function ScrollVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25, rootMargin: "200px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src="/videos/mebel-design.mp4"
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Processo de design de mobiliário Mébel"
      className="aspect-video w-full object-cover"
    />
  );
}
import cozinhas from "@/assets/ambiente-cozinhas.jpg";
import closets from "@/assets/ambiente-closets.jpg";
import salas from "@/assets/ambiente-salas.jpg";
import quartos from "@/assets/ambiente-quartos.jpg";
import homeoffice from "@/assets/ambiente-homeoffice.jpg";
import escritorios from "@/assets/ambiente-escritorios.jpg";
import projectoT5 from "@/assets/projecto-moradia-t5.jpg";
import projectoDetalhe from "@/assets/projecto-detalhe.jpg";
import galeriaResidencia from "@/assets/galeria-residencia.jpg";
import galeriaVestir from "@/assets/galeria-vestir.jpg";
import galeriaOffice from "@/assets/galeria-office.jpg";

export function Intro() {
  return (
    <section id="sobre" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7" mask>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-[3.75rem]">
              Mobiliário pensado
              <br />
              para a forma como
              <br />
              você vive.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid items-center gap-10 md:mt-20 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={120}>
            <div className="border-hairline overflow-hidden rounded-[22px] border">
              <ScrollVideo />
            </div>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={200}>
            <p className="text-ink-muted max-w-sm text-[15px] leading-relaxed">
              Desenhamos, produzimos e instalamos mobiliário personalizado para cozinhas, quartos,
              closets, salas, escritórios e espaços comerciais.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const ambientes = [
  {
    n: "01",
    title: "Cozinhas",
    text: "Soluções pensadas para o quotidiano.",
    image: cozinhas,
    alt: "Cozinha planejada em madeira natural com bancada em pedra",
  },
  {
    n: "02",
    title: "Closets",
    text: "Organização desenhada à medida.",
    image: closets,
    alt: "Closet planejado em carvalho com iluminação quente",
  },
  {
    n: "03",
    title: "Salas",
    text: "Conforto, proporção e identidade.",
    image: salas,
    alt: "Sala de estar contemporânea com móvel de parede em madeira",
  },
];

export function Ambientes() {
  return (
    <section id="ambientes" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="mb-12 md:mb-16">
          <p className="label-editorial text-ink-muted">Ambientes Mébel</p>
          <h3 className="font-display mt-4 text-3xl leading-tight tracking-tight sm:text-4xl">
            Cada espaço pede uma solução diferente.
          </h3>
        </Reveal>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {ambientes.map((item, i) => (
            <Reveal key={item.n} delay={i * 120}>
              <a href="#projectos" className="arrow-nudge group block">
                <div className="media-zoom rounded-[22px]">
                  <img
                    src={item.image}
                    loading="lazy"
                    width={912}
                    height={1152}
                    alt={item.alt}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="label-editorial text-champagne">{item.n}</p>
                    <h4 className="font-display mt-2 text-2xl tracking-tight">{item.title}</h4>
                    <p className="text-ink-muted mt-1 text-[13px]">{item.text}</p>
                  </div>
                  <span className="shrink-0 pt-6 text-[13px]">
                    Explorar <span className="arrow">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MaisAmbientes() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-x-6 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <a href="#projectos" className="arrow-nudge block">
              <div className="media-zoom rounded-[22px]">
                <img
                  src={quartos}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  alt="Quarto com painel de madeira à medida e roupa de cama em linho"
                  className="aspect-[7/5] w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="label-editorial text-champagne">04</p>
                  <h4 className="font-display mt-2 text-2xl tracking-tight">Quartos</h4>
                  <p className="text-ink-muted mt-1 text-[13px]">
                    Serenidade construída em madeira e luz.
                  </p>
                </div>
                <span className="shrink-0 pt-6 text-[13px]">
                  Explorar <span className="arrow">→</span>
                </span>
              </div>
            </a>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
            <Reveal delay={120}>
              <a href="#projectos" className="arrow-nudge block">
                <div className="media-zoom rounded-[22px]">
                  <img
                    src={homeoffice}
                    loading="lazy"
                    width={912}
                    height={1008}
                    alt="Home office com secretária e estante em carvalho"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="label-editorial text-champagne">05</p>
                    <h4 className="font-display mt-1 text-xl tracking-tight">Home Office</h4>
                  </div>
                  <span className="shrink-0 pt-3 text-[13px]">
                    Explorar <span className="arrow">→</span>
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={220}>
              <a href="#projectos" className="arrow-nudge block">
                <div className="media-zoom rounded-[22px]">
                  <img
                    src={escritorios}
                    loading="lazy"
                    width={912}
                    height={1008}
                    alt="Recepção de escritório com painel de madeira e balcão em pedra"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="label-editorial text-champagne">06</p>
                    <h4 className="font-display mt-1 text-xl tracking-tight">Escritórios</h4>
                  </div>
                  <span className="shrink-0 pt-3 text-[13px]">
                    Explorar <span className="arrow">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectoDestaque() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mb-10">
          <p className="label-editorial text-ink-muted">Projecto em destaque</p>
        </Reveal>

        <div className="grid items-end gap-x-6 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Moradia T5
            </h3>
            <p className="text-ink-muted mt-3 text-[13px]">Talatona · Luanda</p>
            <p className="mt-8 text-[15px]">Cozinha + Área Social</p>
            <p className="text-ink-muted mt-4 max-w-sm text-[14px] leading-relaxed">
              Um projecto residencial concebido para integrar cozinha e área social através de uma
              linguagem material contínua, equilibrando madeira natural, superfícies minerais e
              soluções de armazenamento.
            </p>

            <dl className="mt-8 flex gap-10 text-[13px]">
              <div>
                <dt className="label-editorial text-ink-muted">Materiais</dt>
                <dd className="mt-2">Carvalho laminado · Quartzo</dd>
              </div>
              <div>
                <dt className="label-editorial text-ink-muted">Ano</dt>
                <dd className="mt-2">2026</dd>
              </div>
            </dl>

            <a href="#projectos" className="arrow-nudge mt-8 inline-block text-[13px]">
              Ver projecto <span className="arrow">→</span>
            </a>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-6" delay={120}>
            <div className="media-zoom rounded-[22px]">
              <img
                src={projectoT5}
                loading="lazy"
                width={1504}
                height={1008}
                alt="Cozinha e área social integradas da Moradia T5 em Talatona"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="hidden lg:col-span-2 lg:block" delay={220}>
            <div className="media-zoom rounded-[22px]">
              <img
                src={projectoDetalhe}
                loading="lazy"
                width={704}
                height={1008}
                alt="Pormenor de gaveta em carvalho com bancada em pedra"
                className="aspect-[2/3] w-full object-cover"
              />
            </div>
            <div className="text-ink-muted mt-4 flex items-center justify-end gap-3 text-sm">
              <span aria-hidden="true">←</span>
              <span aria-hidden="true">→</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="bg-green relative overflow-hidden">
      <div className="architectural-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="text-on-green relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
        <Reveal mask>
          <h3 className="font-display max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-[4rem]">
            Pensado à medida.
            <br />
            Feito para durar.
          </h3>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-on-green-muted mt-12 max-w-md text-[15px] leading-relaxed md:ml-auto">
            Porque o mobiliário certo não é apenas aquele que cabe num espaço. É aquele que pertence
            a ele.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const etapas = [
  ["01", "Conversa", "Entender o espaço e a forma de o viver."],
  ["02", "Levantamento", "Medições rigorosas no local."],
  ["03", "Projecto", "Desenho técnico, materiais e acabamentos."],
  ["04", "Produção", "Fabrico à medida na nossa oficina."],
  ["05", "Instalação", "Montagem cuidada e ajustes finais."],
  ["06", "Entrega", "Acompanhamento e garantia."],
];

export function Processo() {
  return (
    <section id="processo" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <Reveal className="mb-16" mask>
          <h3 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Do primeiro traço
            <br />à instalação.
          </h3>
        </Reveal>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {etapas.map(([n, title, text], i) => (
            <Reveal
              key={n}
              delay={i * 90}
              className="border-hairline border-t py-8 pr-6 sm:py-10"
            >
              <p className="font-display text-champagne text-4xl">{n}</p>
              <h4 className="mt-6 text-[15px] tracking-wide uppercase">{title}</h4>
              <p className="text-ink-muted mt-2 max-w-xs text-[13px] leading-relaxed">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const timeline = [
  ["2009", "O início"],
  ["2012", "Primeiros grandes projectos"],
  ["2016", "Nova identidade"],
  ["2019", "Expansão para espaços corporativos"],
  ["2022", "13 anos de Mébel"],
  ["2026", "Uma nova fase"],
];

export function Historia() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label-editorial text-ink-muted">Desde 2009.</p>
            <p className="font-display mt-6 text-7xl leading-none tracking-tight md:text-8xl">
              17+
            </p>
            <p className="text-ink-muted mt-4 max-w-xs text-[15px] leading-relaxed">
              anos a desenhar espaços para viver.
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            {timeline.map(([year, label], i) => (
              <Reveal
                key={year}
                delay={i * 90}
                className="border-hairline flex items-baseline justify-between gap-8 border-b py-5"
              >
                <span className="font-display text-2xl tracking-tight">{year}</span>
                <span className="text-ink-muted text-right text-[13px]">{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Galeria() {
  return (
    <section id="projectos" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <Reveal className="mb-14">
          <p className="label-editorial text-ink-muted">Projectos</p>
          <h3 className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
            Espaços entregues, espaços vividos.
          </h3>
        </Reveal>

        <div className="grid gap-x-6 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="media-zoom rounded-[22px]">
              <img
                src={galeriaResidencia}
                loading="lazy"
                width={1504}
                height={912}
                alt="Sala e zona de refeições de residência privada no Benfica"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <p className="mt-5 text-[15px] tracking-wide uppercase">Residência Privada</p>
            <p className="text-ink-muted mt-1 text-[13px]">Benfica · Luanda</p>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={120}>
            <div className="media-zoom rounded-[22px]">
              <img
                src={galeriaVestir}
                loading="lazy"
                width={800}
                height={1104}
                alt="Zona de vestir com armário à medida e tampo em pedra"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <p className="mt-5 text-[15px] tracking-wide uppercase">Apartamento Kilamba</p>
            <p className="text-ink-muted mt-1 text-[13px]">Luanda</p>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-4" delay={180}>
            <div className="media-zoom rounded-[22px]">
              <img
                src={galeriaOffice}
                loading="lazy"
                width={1104}
                height={800}
                alt="Sala de reuniões com mesa e armários em madeira"
                className="aspect-[11/8] w-full object-cover"
              />
            </div>
            <p className="mt-5 text-[15px] tracking-wide uppercase">Office Concept</p>
            <p className="text-ink-muted mt-1 text-[13px]">Talatona · Luanda</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="orcamento" className="bg-green">
      <div className="text-on-green mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <Reveal mask>
          <h3 className="font-display max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-[3.75rem]">
            Vamos desenhar
            <br />o seu próximo espaço?
          </h3>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-on-green-muted mt-8 max-w-md text-[15px] leading-relaxed">
            Conte-nos o que imagina. Nós transformamos a ideia em projecto.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="mailto:geral@mebel.ao"
              className="arrow-nudge bg-champagne text-ink rounded-full px-7 py-3.5 text-[13px] tracking-wide"
            >
              Solicitar orçamento <span className="arrow">→</span>
            </a>
            <a href="mailto:geral@mebel.ao" className="text-on-green-muted text-[13px] underline-offset-4 hover:underline">
              Falar com a Mébel
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-green-deep">
      <div className="border-hairline-green text-on-green-muted mx-auto grid max-w-[1400px] gap-8 border-t px-6 py-12 text-[13px] md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-on-green text-xl">Mébel</p>
          <p className="mt-1">Móveis Planejados</p>
        </div>
        <div>
          <p>Luanda · Angola</p>
          <p className="mt-1">geral@mebel.ao</p>
        </div>
        <div className="md:text-right">
          <p>© {new Date().getFullYear()} Mébel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
