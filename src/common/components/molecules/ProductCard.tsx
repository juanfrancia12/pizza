"use client";

import Image from "next/image";

import { Badge } from "@/common/components/atoms/Badge";
import { IconButton } from "@/common/components/atoms/IconButton";
import { PriceDisplay } from "@/common/components/atoms/PriceDisplay";
import { PlusIcon } from "@/common/components/icons/PlusIcon";
import { StarIcon } from "@/common/components/icons/StarIcon";
import type { Product } from "@/common/interfaces/product";

type ProductCardProps = {
  product: Product;
  onAdd?: (product: Product) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12182a]/80 transition duration-300 hover:border-[#e63956]/50 hover:shadow-[0_0_32px_rgba(230,57,86,0.15)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#e63956]/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#0d1220] to-[#1a1f35] p-6">
        {product.badge && (
          <div className="absolute left-3 top-3 z-20">
            <Badge variant={product.badge === "Veggie" ? "accent" : "primary"}>
              {product.badge}
            </Badge>
          </div>
        )}
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          className="object-contain p-4 transition duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-bold text-white leading-tight">{product.name}</h3>
          {product.rating && (
            <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#f5c542]/15 px-2.5 py-1 text-xs font-semibold text-[#f5c542]">
              <StarIcon className="h-3.5 w-3.5 fill-current" />
              {product.rating}
            </span>
          )}
        </div>
        <p className="mb-4 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-400">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-3">
          <PriceDisplay amount={product.price} size="md" prefix="Desde " />
          <IconButton
            label={`Agregar ${product.name} al carrito`}
            size="sm"
            onClick={() => onAdd?.(product)}
          >
            <PlusIcon />
          </IconButton>
        </div>
      </div>
    </article>
  );
}
