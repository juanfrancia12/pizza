import Image from "next/image";

import { OutlineButton } from "@/common/components/atoms/OutlineButton";
import { PrimaryLink } from "@/common/components/atoms/PrimaryLink";
import { SectionLabel } from "@/common/components/atoms/SectionLabel";
import { SectionTitle } from "@/common/components/atoms/SectionTitle";
import { heroStats } from "@/common/data/home";

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      {/* Left content */}
      <div className="flex flex-col justify-center animate-fade-in-left animate-duration-normal animate-fill-mode-both">
        <SectionLabel>Sabor espacial en tu mesa</SectionLabel>
        <SectionTitle as="h1" className="mt-4 italic text-4xl lg:text-5xl">
          Sabor que viaja a la{" "}
          <span className="bg-gradient-to-r from-[#f5c542] to-[#ffd966] bg-clip-text text-transparent not-italic">
            velocidad
          </span>{" "}
          de la luz.
        </SectionTitle>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 lg:text-lg">
          Pizzas artesanales, ingredientes premium y delivery express. La flota City Pizza
          conquista galaxias, un sabor a la vez.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <PrimaryLink href="#pizzas" className="text-center">
            Ver carta
          </PrimaryLink>
          <OutlineButton href="#promociones">Nuestras promos</OutlineButton>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6 sm:pt-10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#f5c542] lg:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs text-slate-500 lg:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right visual */}
      <div className="relative mt-10 lg:mt-0 animate-fade-in-right animate-duration-normal animate-fill-mode-both animate-delay-150">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e63956]/25 via-transparent to-[#f5c542]/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12182a]/80 to-[#1a1f35]/80 backdrop-blur-md p-6 shadow-2xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#e63956]/10 via-transparent to-transparent opacity-50" />
          <Image
            src="/images/hero-pizza.svg"
            alt="Pizza City Pizza galáctica"
            width={560}
            height={560}
            className="relative mx-auto w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
