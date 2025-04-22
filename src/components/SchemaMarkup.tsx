"use client";

import { useEffect } from "react";

export default function SchemaMarkup() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Laser Innova",
    //   "image": "https://www.laserinova.com/og-laserinova.jpg",
      "priceRange": "$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Azcapotzalco",
        "addressLocality": "CDMX",
        "addressRegion": "Ciudad de México",
        "postalCode": "02480"
      },
      "service": [
        "Corte láser en madera",
        "Grabado láser en espejos",
        "Personalización de regalos"
      ],
      "url": "https://www.laserinova.com/"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}