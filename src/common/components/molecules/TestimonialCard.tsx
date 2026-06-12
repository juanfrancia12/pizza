import { StarIcon } from "@/common/components/icons/StarIcon";

type TestimonialCardProps = {
  name: string;
  quote: string;
  rating: number;
};

export function TestimonialCard({ name, quote, rating }: TestimonialCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#12182a] to-[#1a1f35] p-6 transition duration-300 hover:border-[#f5c542]/50 hover:shadow-[0_0_32px_rgba(245,197,66,0.15)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#f5c542]/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-4 flex gap-1 text-[#f5c542]">
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-slate-200 font-medium">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#e63956] to-[#ff4d6d] text-sm font-bold text-white flex-shrink-0 shadow-lg">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-white">{name}</p>
            <p className="text-xs text-slate-400">Cliente verificado</p>
          </div>
        </div>
      </div>
    </article>
  );
}
