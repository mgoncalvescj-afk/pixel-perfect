import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Intro,
  Ambientes,
  MaisAmbientes,
  ProjectoDestaque,
  Manifesto,
  Processo,
  Historia,
  Galeria,
  FinalCta,
  Footer,
} from "@/components/site/Sections";

const title = "Mébel · Móveis Planejados em Luanda";
const description =
  "Desde 2009, a Mébel desenha, produz e instala mobiliário planejado à medida para cozinhas, closets, salas, quartos e escritórios em Luanda.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-ivory min-h-screen">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Ambientes />
        <MaisAmbientes />
        <ProjectoDestaque />
        <Manifesto />
        <Processo />
        <Historia />
        <Galeria />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
