import { LocationCard } from "@/common/components/molecules/LocationCard";
import { SectionHeading } from "@/common/components/molecules/SectionHeading";
import { locations } from "@/common/data/home";

export function LocationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        id="locales"
        label="Cobertura orbital"
        title="Encuéntranos cerca de ti"
        description="Visita nuestras sucursales o pide delivery desde tu sector. Nuevas bases en expansión."
      />
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {locations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </section>
  );
}
