"use client";

import { useState, useRef, MouseEvent } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagnetic(options: MagneticOptions = {}) {
  const { strength = 0.3, radius = 30 } = options;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < radius) {
      setPosition({
        x: deltaX * strength,
        y: deltaY * strength,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return {
    ref,
    position,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
    },
  };
}
