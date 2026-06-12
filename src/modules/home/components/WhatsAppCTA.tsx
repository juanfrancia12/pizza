import { PrimaryLink } from "@/common/components/atoms/PrimaryLink";
import { SectionTitle } from "@/common/components/atoms/SectionTitle";

export function WhatsAppCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12182a]/80 via-[#1a1f35]/80 to-[#0d1220]/80 backdrop-blur-md p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#e63956]/10 via-transparent to-transparent opacity-50" />
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-[#e63956]/20 rounded-full blur-3xl opacity-20" />
        
        <div className="relative z-10 mb-6 lg:mb-0">
          <SectionTitle as="h2" className="!text-3xl sm:!text-4xl mb-3">
            Pide por WhatsApp en segundos
          </SectionTitle>
          <p className="max-w-lg text-base leading-relaxed text-slate-300">
            Escríbenos directamente y un tripulante de nuestra flota tomará tu pedido al instante. 
            Delivery express y recojo en local disponibles 24/7.
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col gap-3 sm:flex-row lg:flex-col lg:gap-4">
          <PrimaryLink href="#" className="whitespace-nowrap text-center">
            Pedir delivery
          </PrimaryLink>
          <PrimaryLink 
            href="#" 
            className="!bg-gradient-to-r !from-[#4a9eff] !to-[#2dd4bf] !shadow-[0_0_24px_rgba(74,158,255,0.35)] hover:!from-[#6bb3ff] hover:!to-[#45e4d4] whitespace-nowrap text-center"
          >
            Contáctanos
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
}
