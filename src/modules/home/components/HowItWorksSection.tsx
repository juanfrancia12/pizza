import { SectionHeading } from "@/common/components/molecules/SectionHeading";
import { StepCard } from "@/common/components/molecules/StepCard";
import { howItWorksSteps } from "@/common/data/home";

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        id="como-funciona"
        label="Proceso galáctico"
        title="Pedir nunca fue tan fácil"
        description="Tres pasos simples para llevar el sabor espacial a tu puerta."
      />
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {howItWorksSteps.map((step, index) => (
          <div
            key={step.step}
            className="relative"
          >
            {/* Conector visual entre pasos */}
            {index < howItWorksSteps.length - 1 && (
              <div className="absolute -right-[10px] top-1/4 hidden w-5 h-0.5 bg-gradient-to-r from-[#e63956] to-transparent md:block" />
            )}
            <StepCard {...step} />
          </div>
        ))}
      </div>
    </section>
  );
}
