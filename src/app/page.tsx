// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import CarouselDefault from "@/components/galley";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <CarouselDefault />
      <MobileConvenience />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
