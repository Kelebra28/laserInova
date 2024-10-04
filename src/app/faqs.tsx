"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";


const FAQS = [
  {
    title: "¿Cómo empiezo?",
    desc: "¡Comenzar es fácil! Simplemente contáctanos y te guiaremos en los primeros pasos para realizar tu proyecto de corte y grabado láser.",
  },
  {
    title: "¿Ofrecen una consulta gratuita?",
    desc: "Sí, ofrecemos una consulta gratuita para que puedas discutir tus ideas y recibir asesoramiento sin compromiso.",
  },
  {
    title: "¿Cómo puedo realizar un pedido?",
    desc: "Para realizar un pedido, envíanos un mensaje o llámanos. Estamos aquí para ayudarte a enviar tu diseño y especificaciones, asegurando que tu proyecto de corte y grabado láser cumpla con tus expectativas.",
  },
  {
    title: "¿Puedo cancelar mi pedido en cualquier momento?",
    desc: "Sí, puedes cancelar tu pedido antes de que comencemos a trabajar en él. Una vez iniciado, no será posible realizar la cancelación.",
  },
  {
    title: "¿Cómo puedo hacer un seguimiento de mi pedido?",
    desc: "Para hacer seguimiento a tu pedido, contáctanos directamente por mensaje o llámanos. Estaremos encantados de informarte sobre el estado de tu proyecto y resolver cualquier inquietud que tengas.",
  },
  {
    title: "¿Qué hago si necesito ayuda o tengo problemas?",
    desc: "Si necesitas ayuda o tienes algún problema, contáctanos directamente por mensaje o llámanos. Estamos aquí para asistirte y resolver tus inquietudes de manera rápida y efectiva.",
  },
];

export function Faqs() {
  return (

    <section className="px-10 !py-10">
    <div className="container mx-auto">
      <div className="mb-20 flex w-full flex-col items-center">
        <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white ">
          <QuestionMarkCircleIcon className="h-6 w-6" />
        </div>
        <Typography variant="h2" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Preguntas Frecuentes
        </Typography>
        <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Resolvemos las inquietudes más comunes sobre nuestros servicios de corte y grabado láser, asegurando que tengas toda la información necesaria para tomar decisiones informadas.
        </Typography>
      </div>
      <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography color="blue-gray" className="pb-6" variant="h4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
    </div>
  </section>
  );
}

export default Faqs;
