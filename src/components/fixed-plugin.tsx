"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://api.whatsapp.com/send?phone=+525512431147&text=Hola!" target="_blank">
      <Button
        color="green"
        size="sm"
        className="!fixed bottom-4  right-4 flex gap-1 pl-2 items-center border border-blue-gray-50" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
         <i className="fa-brands fa-whatsapp text-base" />
        Contáctanos por WhatsApp
      </Button>
    </a>
  );
}
