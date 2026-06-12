import { RocketIcon } from "@/common/components/icons/RocketIcon";
import { ShieldIcon } from "@/common/components/icons/ShieldIcon";
import { FeatureHighlight } from "@/common/components/molecules/FeatureHighlight";

export function RegisterFeatureCards() {
  return (
    <div className="mt-10 grid animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-250 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
      <FeatureHighlight
        icon={<RocketIcon className="h-5 w-5 text-[#f5c542]" />}
        title="Expansión veloz"
        description="Despliega nuevas rutas de entrega en menos de 48 horas orbitales."
      />
      <FeatureHighlight
        icon={<ShieldIcon className="h-5 w-5 text-[#4a9eff]" />}
        title="Protocolo seguro"
        description="Encriptación cuántica para proteger cada credencial de la flota."
      />
    </div>
  );
}
