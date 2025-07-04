"use client";
import React, { useEffect, useRef } from "react";

const exampleClients = [
  { name: "Rock&Fellers", logo: "/images/locales/rock&fellers.jpg" },
  { name: "Havanna", logo: "/images/locales/havanna.jpg" },
  { name: "Freddo", logo: "/images/locales/freddo.jpg" },
  { name: "Fabric", logo: "/images/locales/fabric.png" },
  { name: "Tienda", logo: "/images/locales/tienda.jpg" },
  { name: "Mokaydeli", logo: "/images/locales/mokaydeli.png" },
];

export function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Duplicar los logos para efecto infinito
  const clients = [...exampleClients, ...exampleClients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollAmount = 0;
    // Obtener el ancho de la card de forma robusta
    const card = scrollContainer.querySelector(".client-card");
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth + 32 : 200; // 32 = gap-8
    const interval = setInterval(() => {
      if (!scrollContainer) return;
      scrollAmount += cardWidth;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestros clientes</h2>
        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
          <div
            className="flex gap-8 py-4 min-w-full scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client, idx) => (
              <div key={idx} className="client-card flex-shrink-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow p-6 w-48 h-28">
                <img src={client.logo} alt={client.name} className="h-12 object-contain mb-2" draggable={false} />
                {/* <span className="text-xs text-gray-500">{client.name}</span> */}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
} 