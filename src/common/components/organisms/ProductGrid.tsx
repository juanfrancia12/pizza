import { ProductCard } from "@/common/components/molecules/ProductCard";
import type { Product } from "@/common/interfaces/product";

type ProductGridProps = {
  products: Product[];
  columns?: 2 | 3 | 4;
  onAddProduct?: (product: Product) => void;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function ProductGrid({ products, columns = 4, onAddProduct }: ProductGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-5 lg:gap-6 ${columnClasses[columns]}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAddProduct} />
      ))}
    </div>
  );
}
