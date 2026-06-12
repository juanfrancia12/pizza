import { PromoCard } from "@/common/components/molecules/PromoCard";
import { SectionHeading } from "@/common/components/molecules/SectionHeading";
import { featuredPromos } from "@/common/data/promos";

export function PromosSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        id="promociones"
        label="Promociones del espacio"
        title="Combos que conquistan galaxias"
        description="Aprovecha nuestras ofertas estelares. Disponibles por tiempo limitado."
        actionLabel="Ver todas"
        actionHref="#"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {featuredPromos.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </section>
  );
}
