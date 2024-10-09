'use client';

import { Carousel } from "@material-tailwind/react";
 
//w-16 md:w-32 lg:w-48
const CarouselDefault = () => {
  return (
    <div className="mt-8 md:mt-14 flex items-center justify-center"> 
        <div className="w-full md:w-6/12 h-auto">
        <Carousel 
            className=""  
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}
            >
        <img
            src="image/carrusel/1.png"
            alt="image 1"
            className="h-full w-full object-cover"
        />
        <img
            src="image/carrusel/2.png"
            alt="image 2"
            className="h-full w-full object-cover"
        />
        <img
            src="image/carrusel/3.png"
            alt="image 3"
            className="h-full w-full object-cover"
        />
         <img
            src="image/carrusel/4.png"
            alt="image 3"
            className="h-full w-full object-cover"
        />
         <img
            src="image/carrusel/5.png"
            alt="image 3"
            className="h-full w-full object-cover"
        />
         <img
            src="image/carrusel/6.png"
            alt="image 3"
            className="h-full w-full object-cover"
        />
         <img
            src="image/carrusel/8.png"
            alt="image 3"
            className="h-full w-full object-cover"
        />
        </Carousel>
        </div>
    </div>
  );
}

export default CarouselDefault;