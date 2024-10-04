"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Expertos en Corte Láser",
    children:
      "Aprende de los mejores. Nuestro equipo está formado por profesionales del sector y artesanos con amplia experiencia, dedicados a ayudarte en cada paso de tu proyecto.",
  },
  {
    icon: HeartIcon,
    title: "Corte Láser con Pasión",
    children:
      "En nuestro taller, transformamos tus ideas en realidad con atención y calidad, asegurando que cada proyecto cumpla con tus expectativas.",
  },
  {
    icon: LockClosedIcon,
    title: "Compromiso Garantizado",
    children:
      "Con cada proyecto completado, aseguramos la calidad y la satisfacción, ofreciendo a nuestros clientes la confianza que necesitan para elegir nuestro taller de corte y grabado láser.",
  },
  {
    icon: LightBulbIcon,
    title: "Seguimiento Personalizado de Proyectos",
    children:
      "Mantente informado sobre el avance de tus proyectos con un seguimiento claro y recomendaciones personalizadas, asegurando que cada detalle se ajuste a tus necesidades y expectativas.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
            Tu Taller de Corte Láser
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
            Diversidad de Servicios para Tus Proyectos Láser
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Nuestro taller de corte y grabado láser está disponible para ti. Ya sea que necesites realizar un proyecto rápido o tengas una idea en mente, estamos aquí para ayudarte en cualquier momento.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
