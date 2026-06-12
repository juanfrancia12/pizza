"use client";

import { type CSSProperties, type ReactNode, useMemo } from "react";

type Star = {
  id: number;
  left: number;
  startY: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  tone: "white" | "warm" | "cool";
};

type StarfieldBackgroundProps = {
  children: ReactNode;
  /** Activa o desactiva el efecto de estrellas. */
  enabled?: boolean;
  /** Cantidad de estrellas visibles en el campo. */
  starCount?: number;
  /** Muestra la capa de gradiente de fondo. */
  showGradient?: boolean;
  /** Clase del gradiente (ej. `auth-gradient-bg`, `background-primary`). */
  gradientClassName?: string;
  className?: string;
};

function createStars(count: number): Star[] {
  const tones: Star["tone"][] = ["white", "warm", "cool"];

  return Array.from({ length: count }, (_, index) => {
    const seed = index * 9973 + 4217;
    const duration = 16 + (seed % 24);

    return {
      id: index,
      left: (seed * 13) % 100,
      startY: (seed * 19) % 115,
      size: 1 + (seed % 3),
      opacity: 0.3 + ((seed * 7) % 55) / 100,
      duration,
      delay: -((seed * 3) % (duration * 10)) / 10,
      tone: tones[seed % tones.length],
    };
  });
}

export function StarfieldBackground({
  children,
  enabled = true,
  starCount = 70,
  showGradient = true,
  gradientClassName = "auth-gradient-bg",
  className = "",
}: StarfieldBackgroundProps) {
  const stars = useMemo(() => createStars(starCount), [starCount]);

  return (
    <div className={`relative isolate min-h-[100dvh] min-h-[100svh] w-full ${className}`}>
      {showGradient && (
        <div className={`starfield-layer ${gradientClassName}`} aria-hidden />
      )}

      {enabled && (
        <div className="starfield-layer starfield-layer--stars" aria-hidden>
          {stars.map((star) => (
            <span
              key={star.id}
              className={`starfield-star starfield-star--${star.tone}`}
              style={
                {
                  left: `${star.left}%`,
                  top: `${star.startY}vh`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  "--star-opacity": star.opacity,
                  animationDuration: `${star.duration}s`,
                  animationDelay: `${star.delay}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
