import { SectionHeading } from "@/common/components/molecules/SectionHeading";
import { ProductGrid } from "@/common/components/organisms/ProductGrid";
import { featuredProducts } from "@/common/data/products";

export function ProductsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        id="pizzas"
        label="Nuestro top 4"
        title="Las más buscadas"
        description="Los sabores favoritos de la flota galáctica. Pizzas auténticas listos para despegar hacia tu mesa."
        actionLabel="Ver menú completo"
        actionHref="#"
      />
      <ProductGrid products={featuredProducts} />
    </section>
  );
}
