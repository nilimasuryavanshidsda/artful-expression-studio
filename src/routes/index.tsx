import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { ArtForms } from "@/components/site/ArtForms";
import { AgePrograms } from "@/components/site/AgePrograms";
import { Calligraphy } from "@/components/site/Calligraphy";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Gallery } from "@/components/site/Gallery";
import { Workshops } from "@/components/site/Workshops";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

const TITLE = "TVASTRA Art Studio | Art Classes, Workshops & Creative Learning";
const DESCRIPTION =
  "TVASTRA Art Studio offers creative art classes, workshops, calligraphy, handwriting improvement, and artistic learning programs for kids, teens, and adults.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <ArtForms />
        <AgePrograms />
        <Calligraphy />
        <WhyChooseUs />
        <Gallery />
        <Workshops />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
