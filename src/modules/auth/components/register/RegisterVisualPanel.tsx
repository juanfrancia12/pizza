import { FactoryIcon } from "@/common/components/icons/FactoryIcon";
import { NetworkIcon } from "@/common/components/icons/NetworkIcon";
import { RocketIcon } from "@/common/components/icons/RocketIcon";
import {
  AuthVisualBackground,
  AuthVisualContent,
  AuthVisualPanel,
} from "@/common/components/organisms/AuthVisualPanel";

const image = {
  src: "/images/auth-bridge.png",
  alt: "Cabina de control galáctica de City Pizza",
};

const stats = [
  {
    title: "Sector Alpha",
    value: "4,829",
    subtitle: "Entregas en órbita activa",
    icon: <FactoryIcon className="h-4 w-4" />,
  },
  {
    title: "Flota actual",
    value: "152",
    subtitle: "Cruceros clase 'Dough'",
    icon: <RocketIcon className="h-4 w-4" />,
  },
];

const vision = {
  title: "Visión de la flota",
  description:
    "Nuestro portal hiper-espacial conecta cada sector con una red de distribución sincronizada. Cada recluta fortalece la cadena de suministro intergaláctica.",
  icon: <NetworkIcon className="h-5 w-5" />,
  segments: [
    { label: "Sabor", color: "bg-[#e63956]", width: "38%" },
    { label: "Velocidad", color: "bg-[#4a9eff]", width: "34%" },
    { label: "Seguridad", color: "bg-[#f5c542]", width: "28%" },
  ],
};

export function RegisterVisualBackground() {
  return <AuthVisualBackground imageSrc={image.src} imageAlt={image.alt} />;
}

export function RegisterVisualContent() {
  return <AuthVisualContent stats={stats} vision={vision} />;
}

export function RegisterVisualPanel() {
  return <AuthVisualPanel imageSrc={image.src} imageAlt={image.alt} stats={stats} vision={vision} />;
}
