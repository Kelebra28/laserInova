"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        rel="noopener noreferrer"
        variant="small"
        className="font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };

    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpen = () => setOpen((cur) => !cur);

  if (!mounted) return null;

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h3"
          color={isScrolling ? "gray" : "white"}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Laser Inova
        </Typography>

        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+525591970628&text=Hola!"
            >
              Contáctanos
            </a>
          </NavItem>
        </ul>

        <div className="hidden gap-2 lg:flex lg:items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:informes@laserinova.com"
          >
            <IconButton
              name="email"
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <i className="fa-solid fa-envelope text-base" />
            </IconButton>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100093617932950"
          >
            <IconButton
              name="facebook"
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/laserinova23/"
          >
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </a>
        </div>

        <IconButton
          name="nav"
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=+525591970628&text=Hola!"
              >
                Contáctanos
              </a>
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:informes@laserinova.com"
            >
              <IconButton
                name="email"
                variant="text"
                color="gray"
                size="sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-solid fa-envelope text-base" />
              </IconButton>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100093617932950"
            >
              <IconButton
                name="facebook"
                variant="text"
                color="gray"
                size="sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/laserinova23/"
            >
              <IconButton
                name='intagram'
                variant="text"
                color="gray"
                size="sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
