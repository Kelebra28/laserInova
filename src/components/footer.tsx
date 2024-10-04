"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              Laser Inova
            </Typography>
            {/* <Typography color="white" className="mb-12 font-normal">
              The reward for getting on the stage is fame.
            </Typography> */}
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
            <div className="flex gap-2">
            <a target="blank"  href="https://www.facebook.com/profile.php?id=100093617932950">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>
            <a target="blank" href="https://www.instagram.com/laserinova23/">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>
          </div>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
                    Laser Inova
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
