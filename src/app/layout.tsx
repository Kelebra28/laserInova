import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FixedPlugin, Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.laserinova.com/"),
  title: "Laser Inova",
  description:
    "Estamos emocionados de ofrecerte nuestros servicios de corte y grabado láser. Nos especializamos en transformar tus ideas en realidad con atención al detalle y tecnología de vanguardia. Ofrecemos una variedad de servicios que incluyen corte personalizado, grabado láser y soluciones creativas para todo tipo de proyectos. Contáctanos para discutir cómo podemos ayudarte a dar vida a tus ideas.",
  // image: "/favicon.png",
  // icons: {
  //   icon: '',
  // },
  generator: "Next.js",
  applicationName: "Laser Inova",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Taller de corte y grabado láser",
    "Glass services",
    "Corte láser en madera",
    "Grabado láser en metal",
    "Productos personalizados",
    "Decoración personalizada",
    "Regalos personalizados",
    "Prototipado rápido",
    "Servicios de grabado láser",
    "Corte láser para empresas",
    "Grabado en madera y metal",
    "Letreros personalizados",
    "Diseños personalizados con láser",
    "Corte y grabado láser de precisión",
    "Artesanías con corte láser",
    "Joyería personalizada con láser",
    "Grabado láser de alta calidad",
    "Corte láser para decoración",
    "Personalización de productos",
    "Grabado láser para regalos",
    "Corte láser para prototipos",
  ],
  authors: [
    { name: "Ricardo Basurto" },
    { name: "RPM Code", url: "https://www.rpmspeedcode.com/" },
  ],
  creator: "Ricardo Basurto",
  publisher: "Laser Innova",
  category: "Corte laser",
  // images: [
  //   {
  //     url: '/favicon.png',
  //     width: 200,
  //     height: 200,
  //     alt: 'Dk Glass & Velasco',
  //   },
  // ],
  // openGraph: {
  //   images: "/favicon.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
