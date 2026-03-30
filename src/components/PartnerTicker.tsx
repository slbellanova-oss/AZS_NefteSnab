"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  "Роснефть",
  "Газпром",
  "Лукойл",
  "Сибнефть",
  "Татнефть",
  "Башнефть",
];

export default function PartnerTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      if (!row1 || !row2) return;

      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      });

      gsap.to(row1, {
        x: -row1.offsetWidth / 2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(row2, {
        x: row2.offsetWidth / 2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-charcoal overflow-hidden border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />
      
      <div className="py-4 overflow-hidden">
        <div ref={row1Ref} className="flex whitespace-nowrap will-change-transform">
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-white font-bold text-lg tracking-tight whitespace-nowrap">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pb-4 overflow-hidden">
        <div ref={row2Ref} className="flex whitespace-nowrap will-change-transform">
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-white font-bold text-lg tracking-tight whitespace-nowrap">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
