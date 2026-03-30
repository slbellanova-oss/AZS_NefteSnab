"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getInitialPosition = () => {
      switch (direction) {
        case "up":
          return { opacity: 0, y: 60 };
        case "left":
          return { opacity: 0, x: -60 };
        case "right":
          return { opacity: 0, x: 60 };
        default:
          return { opacity: 0 };
      }
    };

    gsap.fromTo(el, getInitialPosition(), {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
