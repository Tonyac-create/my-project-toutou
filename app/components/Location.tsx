"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

declare global {
  interface Window {
    google: typeof google;
  }
}

const center = {
  lat: 46.124939284727226,
  lng: 4.8163703141535334,
};

export default function Location() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 17,
      });

      new google.maps.Marker({
        position: center,
        map: map,
      });
    };

    // Check if already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBulB9RMHSLnyIOqDaCX7isb87hguw69GY`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-6">Nous trouver</h2>
      <div className="flex flex-col">
        <Image
          src="/la_maison_de_toutou_resize.png"
          width={250}
          height={150}
          priority={true}
          quality={100}
          alt="La maison de toutou"
          className="w-[250px] h-auto"
        />
        <p className="font-semibold text-[var(--foreground-alt)] mt-4">Fréderique Viollet</p>
        <p>Le Clos du Lavoir</p>
        <p>01140 Peyzieux-sur-Saône</p>
        <p className="font-bold tracking-wide text-[var(--foreground-alt)] mt-4">06.80.32.26.10</p>
        <p className="font-bold tracking-wide text-[var(--foreground-alt)] mt-2">Du lundi au dimanche de 8h00 à 21h00</p>
      </div>

      <div className="mt-8 rounded-lg overflow-hidden w-full h-[500px]">
        <div ref={mapRef} className="w-full h-full rounded-lg" />
      </div>
    </section>
  );
}
