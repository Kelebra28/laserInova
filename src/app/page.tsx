// SEO
import { Metadata } from "next";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import CarouselDefault from "@/components/galley";

import CarruselCatalogo from "@/data/carusel";
import Products from "@/data/products";


export const metadata: Metadata = {
  title: 'Laser Inova',
  description: 'En nuestro taller de corte y grabado láser, transformamos tus ideas en productos personalizados de alta calidad. Especializados en corte y grabado en madera y metal, ofrecemos una amplia gama de servicios, desde decoración del hogar, regalos personalizados, letreros, hasta prototipos para empresas. Con tecnología avanzada y atención al detalle, aseguramos resultados precisos y únicos para cada proyecto. Descubre cómo podemos ayudarte a materializar tus proyectos con estilo y precisión. ¡Contáctanos hoy y da vida a tus ideas!',
};

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselDefault data={Products} />
      <Feature />
      <CarouselDefault data={CarruselCatalogo} />
      <MobileConvenience />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
