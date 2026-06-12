import type { ReactNode } from "react";

import { StarfieldBackground } from "@/common/components/layouts/StarfieldBackground";

type VisualMode = "full-bleed" | "contained";

type SplitAuthLayoutProps = {
  formPanel: ReactNode;
  visualPanel: ReactNode;
  /** Fondo visual de la columna derecha. Obligatorio cuando `visualMode` es `full-bleed`. */
  visualBackground?: ReactNode;
  /** Clase Tailwind para limitar el ancho del contenido (formulario + overlay derecho). */
  contentMaxWidth?: string;
  /**
   * `full-bleed`: la imagen inicia en la columna derecha y se extiende al borde de la pantalla.
   * `contained`: imagen y contenido comparten el mismo contenedor con `contentMaxWidth`.
   */
  visualMode?: VisualMode;
  className?: string;
  /** Props opcionales del efecto de estrellas. */
  starfield?: {
    enabled?: boolean;
    starCount?: number;
  };
};

export function SplitAuthLayout({
  formPanel,
  visualPanel,
  visualBackground,
  contentMaxWidth = "max-w-[1320px]",
  visualMode = "full-bleed",
  className = "",
  starfield,
}: SplitAuthLayoutProps) {
  if (visualMode === "contained") {
    return (
      <StarfieldBackground
        enabled={starfield?.enabled}
        starCount={starfield?.starCount}
        gradientClassName="background-primary"
        className={`flex min-h-screen justify-center ${className}`}
      >
        <div
          className={`flex w-full ${contentMaxWidth} min-h-[calc(100vh-3rem)] flex-col lg:min-h-[calc(100vh-4rem)] lg:flex-row`}
        >
          <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-10 lg:max-w-[42%] lg:px-10 xl:px-12">
            {formPanel}
          </div>
          <div className="relative min-h-[420px] flex-1 lg:min-h-0">{visualPanel}</div>
        </div>
      </StarfieldBackground>
    );
  }

  return (
    <StarfieldBackground
      enabled={starfield?.enabled}
      starCount={starfield?.starCount}
      gradientClassName="background-primary"
      className={`min-h-screen ${className}`}
    >
      <div
        className={`mx-auto flex w-full ${contentMaxWidth} min-h-screen flex-col lg:flex-row`}
      >
        <div className="relative z-10 flex flex-1 items-center justify-center px-2 py-10 lg:max-w-[42%] lg:px-6 xl:px-10">
          {formPanel}
        </div>

        <div className="relative flex min-h-[480px] flex-1 lg:min-h-[calc(100vh-4rem)]">
          {visualBackground && (
            <div className="auth-visual-bleed pointer-events-none absolute inset-0 lg:inset-y-0 lg:left-0 lg:right-[calc(50%-50vw)]">
              {visualBackground}
            </div>
          )}

          <div className="relative z-10 flex h-full w-full animate-fade-in-right animate-duration-normal animate-fill-mode-both">
            {visualPanel}
          </div>
        </div>
      </div>
    </StarfieldBackground>
  );
}
