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
  title: "Corte y Grabado Láser en CDMX | Personaliza Madera, Metal y Espejos",
  description:
  "Taller profesional en CDMX: Cortes láser en madera, metal, acrílico y grabados en espejos, vidrio y más. Personaliza regalos, letreros o decoración con tecnología de precisión. ¡Cotiza en línea hoy mismo!",
  // image: "/favicon.png",
  // icons: {
  //   icon: '',
  // },
  generator: "Next.js",
  applicationName: "Laser Inova",
  referrer: "origin-when-cross-origin",
  "@type": "LocalBusiness",
  "service": ["Corte láser", "Grabado personalizado"],
  keywords: [
    // Servicios + materiales (agrega "espejos"):
    "Corte láser en madera, metal y acrílico",
    "Grabado láser en espejos, vidrio y metal",
    "Prototipado rápido con láser",
    "Letreros personalizados para negocios",
    "Decoración para bodas con grabado láser",
    "Regalos originales grabados en espejos",
    "Joyería artesanal con láser",
  
    // SEO local:
    "Taller de corte láser en CDMX",
    "Grabado en espejos en Azcapotzalco",
    "Servicio de láser cerca de mí",
  
    // Palabras long-tail:
    "Precio de grabado láser en espejos",
    "Cómo personalizar un espejo con láser",
    "Dónde hacer cortes láser en CDMX",
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
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Laser Innova",
    // "image": "https://www.laserinova.com/og-laser-inova.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Azcapotzalco",
      "addressLocality": "CDMX",
      "addressRegion": "Ciudad de México",
      "postalCode": "02480",
    },
    "service": [
      "Corte láser en madera",
      "Grabado láser en espejos",
      "Personalización de regalos",
    ],
    // "telephone": "+52-55-XXXX-XXXX",
    "url": "https://www.laserinova.com/"
  })}
</script>
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
