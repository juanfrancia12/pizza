import { SectionHeading } from "@/common/components/molecules/SectionHeading";
import { TestimonialCard } from "@/common/components/molecules/TestimonialCard";
import { testimonials } from "@/common/data/home";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        label="Tripulantes felices"
        title="Nuestros clientes lo dicen"
        description="Miles de viajeros galácticos satisfechos cada mes con nuestras pizzas."
      />
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
