"use client";

import { useState } from "react";

import { ChevronIcon } from "@/common/components/icons/ChevronIcon";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  index?: number;
};

export function FAQItem({ question, answer, defaultOpen = false, index = 0 }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#12182a]/80 to-[#0d1220]/80 backdrop-blur-sm transition-all duration-300 hover:border-[#e63956]/40 hover:shadow-[0_0_32px_rgba(230,57,86,0.12)]"
    >
      {/* Gradient overlay en hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#e63956]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-10 flex w-full items-start gap-4 px-6 py-5 text-left transition-all duration-300 sm:py-6 lg:px-8"
        aria-expanded={open}
      >
        {/* Número badge */}
        <div className="mt-0.5 flex shrink-0 h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e63956] to-[#ff4d6d] font-bold text-white text-sm shadow-lg">
          {index + 1}
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col gap-2 min-w-0">
          <h3 className="text-base font-bold text-white leading-tight group-hover:text-[#f5c542] transition-colors duration-300">
            {question}
          </h3>
          {/* Preview de respuesta cuando está cerrado */}
          {!open && (
            <p className="text-xs text-slate-400 line-clamp-1 opacity-75 group-hover:opacity-100 transition-opacity">
              {answer}
            </p>
          )}
        </div>

        {/* Icono chevron */}
        <div className="mt-0.5 shrink-0 flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#e63956]/15 transition-all duration-300">
          <ChevronIcon
            className={`text-[#e63956] transition-transform duration-500 ${open ? "rotate-180" : ""}`}
            direction={open ? "up" : "down"}
          />
        </div>
      </button>

      {/* Respuesta expandida */}
      {open && (
        <div className="relative z-10 border-t border-white/10 overflow-hidden">
          <div className="px-6 py-5 sm:py-6 lg:px-8 animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-sm leading-relaxed text-slate-300">
              {answer}
            </p>
            
            {/* Decorative line */}
            <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#e63956] to-transparent" />
          </div>
        </div>
      )}
    </div>
  );
}
