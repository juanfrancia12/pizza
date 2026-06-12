import { LocationPinIcon } from "@/common/components/icons/LocationPinIcon";

type LocationCardProps = {
  name: string;
  address: string;
  hours: string;
};

export function LocationCard({ name, address, hours }: LocationCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12182a]/80 p-5 transition duration-300 hover:border-[#e63956]/50 hover:shadow-[0_0_32px_rgba(230,57,86,0.15)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#e63956]/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#e63956]/15 border border-[#e63956]/30">
          <LocationPinIcon className="h-5 w-5 text-[#e63956]" />
        </div>
        
        <h3 className="mb-2 font-bold text-white text-base">{name}</h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm text-slate-300 leading-relaxed">{address}</p>
        </div>
        
        <div className="border-t border-white/10 pt-3">
          <p className="text-xs text-slate-500">
            Horario:
          </p>
          <p className="text-sm font-semibold text-slate-300">{hours}</p>
        </div>
      </div>
    </article>
  );
}
