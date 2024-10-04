"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
            La Solución Ideal para <br /> Tus Proyectos de Corte y Grabado Láser 
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
             Nuestro taller está aquí para potenciar tus proyectos creativos, brindándote soluciones de corte y grabado láser, en cualquier momento y lugar.
            </Typography>
          </div>
          <Image
            width={670}
            height={876}
            src="/image/pngwing.com.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[40rem] -translate-y-32 md:max-h-[46rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
          Solicita Tu Proyecto
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Explora nuestro catálogo de servicios y recursos para corte y grabado láser. Ofrecemos soluciones personalizadas para una amplia gama de proyectos, desde diseño creativo hasta fabricación y decoración.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
