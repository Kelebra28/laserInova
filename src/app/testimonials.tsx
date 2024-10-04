"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Jessica Devis",
    title: "CEO @ MARKETING DIGITAL LTD.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Mary Joshiash",
    title: "MARKETING @ APPLE INC.",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Marcell Glock",
    title: "CFO @ APPLE INC..",
    img: "/image/avatar3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20 bg-black">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="white" className="mb-2">
          Nuestro Compromiso
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Nos dedicamos a brindar resultados excepcionales en corte y grabado láser, siempre trabajando para satisfacer las necesidades de nuestros clientes y construir relaciones sólidas.
          </Typography>
        </div>
        <Image
          width={156}
          height={156}
          src="/image/pngwing4.com.png"
          className="col-span-1 w-1/2 mx-auto lg:w-4/12"
          alt="iphone-photo"
        />

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
export default Testimonials;
