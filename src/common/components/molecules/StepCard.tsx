type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12182a]/80 p-6 transition duration-300 hover:border-[#e63956]/50 hover:shadow-[0_0_32px_rgba(230,57,86,0.15)] h-full">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#e63956]/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e63956]/30 bg-[#e63956]/10 font-bold text-[#e63956]">
            {step}
          </div>
          <span className="text-4xl font-black text-white/5 select-none">{step}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </article>
  );
}
