"use client";

import { Carousel } from "@material-tailwind/react";

import { CarruselItem } from "@/interfaces";

//w-16 md:w-32 lg:w-48
const CarouselDefault = ({ data }: { data: CarruselItem[] }) => {
    console.log(data)
  return (
    <div className="mt-8 md:mt-14 flex items-center justify-center">
      <div className="w-full md:w-6/12 h-auto">
        <Carousel
          className=""
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data && data.map((item, key) => <img key={key} src={item.url} alt={item.alt} className={item.class} />)}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselDefault;
