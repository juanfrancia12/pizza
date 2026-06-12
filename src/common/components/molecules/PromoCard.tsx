import Image from "next/image";

import { Badge } from "@/common/components/atoms/Badge";
import { PriceDisplay } from "@/common/components/atoms/PriceDisplay";
import { PrimaryLink } from "@/common/components/atoms/PrimaryLink";
import type { Promo } from "@/common/interfaces/product";

type PromoCardProps = {
  promo: Promo;
};

export function PromoCard({ promo }: PromoCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12182a]/80 transition duration-300 hover:border-[#e63956]/50 hover:shadow-[0_0_32px_rgba(230,57,86,0.15)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#e63956]/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#0d1220] to-[#1a1f35]">
        {promo.badge && (
          <div className="absolute left-3 top-3 z-20">
            <Badge variant={promo.badge.includes("%") ? "accent" : "primary"}>{promo.badge}</Badge>
          </div>
        )}
        <Image
          src={promo.imageSrc}
          alt={promo.imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 25vw"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <h3 className="mb-2 line-clamp-2 text-sm font-bold text-white">{promo.title}</h3>
        <p className="mb-4 flex-1 line-clamp-3 text-xs leading-relaxed text-slate-400">{promo.description}</p>
        <div className="flex items-center justify-between gap-3">
          {promo.price > 0 ? (
            <PriceDisplay amount={promo.price} size="lg" />
          ) : (
            <span className="text-xs font-semibold text-[#4a9eff]">Envío gratis</span>
          )}
          <PrimaryLink href="#" className="!px-4 !py-2 !text-xs">
            Pedir
          </PrimaryLink>
        </div>
        {promo.code && (
          <p className="mt-3 rounded-lg border border-dashed border-white/15 bg-white/5 px-3 py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Código: <span className="text-[#f5c542]">{promo.code}</span>
          </p>
        )}
      </div>
    </article>
  );
}
