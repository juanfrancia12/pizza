import { LoadingSpinner } from "@/common/components/atoms/LoadingSpinner";

export function LoadingContent() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5c542] animate-fade-in-up animate-duration-fast animate-fill-mode-both">
        Sincronizando flota
      </p>

      <LoadingSpinner className="mb-8 animate-fade-in animate-duration-normal animate-fill-mode-both animate-delay-100" />

      <h1 className="text-2xl font-bold text-white animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-150">
        Cargando módulo
      </h1>

      <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400 animate-fade-in animate-duration-normal animate-fill-mode-both animate-delay-200">
        Preparando el centro de operaciones galáctico. Un momento, tripulante.
      </p>
    </div>
  );
}
