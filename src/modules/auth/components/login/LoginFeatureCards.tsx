import { RocketIcon } from "@/common/components/icons/RocketIcon";
import { ShieldIcon } from "@/common/components/icons/ShieldIcon";
import { FeatureHighlight } from "@/common/components/molecules/FeatureHighlight";

export function LoginFeatureCards() {
  return (
    <div className="mt-10 grid animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-250 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
      <FeatureHighlight
        icon={<ShieldIcon className="h-5 w-5 text-[#4a9eff]" />}
        title="Acceso verificado"
        description="Autenticación de dos factores para proteger cada sesión activa."
      />
      <FeatureHighlight
        icon={<RocketIcon className="h-5 w-5 text-[#f5c542]" />}
        title="Sincronización en vivo"
        description="Conecta con el centro de mando y recibe misiones al instante."
      />
    </div>
  );
}
