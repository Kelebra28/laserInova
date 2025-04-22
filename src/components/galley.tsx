"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image"; // Importa el componente Image

import { CarruselItem } from "@/interfaces";

const CarouselDefault = ({ data }: { data: CarruselItem[] }) => {
  return (
    <div className="mt-8 md:mt-14 flex items-center justify-center">
      <div className="w-full md:w-6/12 h-auto">
        <Carousel
          className=""
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data && data.map((item, key) => (
            <Image 
              key={key}
              src={item.url}
              alt={item.alt} // Asegúrate que cada alt sea único
              width={1200} // Máximo ancho necesario
              height={800}
              quality={75}
              loading={key === 0 ? "eager" : "lazy"} // Prioriza primera imagen
              className={item.class}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselDefault;