

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
