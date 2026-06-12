import { FactoryIcon } from "@/common/components/icons/FactoryIcon";
import { NetworkIcon } from "@/common/components/icons/NetworkIcon";
import { ShieldIcon } from "@/common/components/icons/ShieldIcon";
import {
  AuthVisualBackground,
  AuthVisualContent,
  AuthVisualPanel,
} from "@/common/components/organisms/AuthVisualPanel";

const image = {
  src: "/images/auth-bridge.png",
  alt: "Panel de control de operaciones galácticas",
};

const stats = [
  {
    title: "Sistemas online",
    value: "99.8%",
    subtitle: "Infraestructura operativa activa",
    icon: <ShieldIcon className="h-4 w-4" />,
  },
  {
    title: "Sesiones activas",
    value: "1,247",
    subtitle: "Tripulantes conectados ahora",
    icon: <FactoryIcon className="h-4 w-4" />,
  },
];

const vision = {
  title: "Centro de operaciones",
  description:
    "Desde aquí coordinamos rutas, misiones y entregas en tiempo real. Tu sesión te conecta directamente con el núcleo de comando de la flota.",
  icon: <NetworkIcon className="h-5 w-5" />,
  segments: [
    { label: "Uptime", color: "bg-[#4a9eff]", width: "42%" },
    { label: "Rendimiento", color: "bg-[#e63956]", width: "33%" },
    { label: "Cobertura", color: "bg-[#f5c542]", width: "25%" },
  ],
};

export function LoginVisualBackground() {
  return <AuthVisualBackground imageSrc={image.src} imageAlt={image.alt} />;
}

export function LoginVisualContent() {
  return <AuthVisualContent stats={stats} vision={vision} />;
}

export function LoginVisualPanel() {
  return <AuthVisualPanel imageSrc={image.src} imageAlt={image.alt} stats={stats} vision={vision} />;
}
