export const heroStats = [
  { value: "8+", label: "años en órbita" },
  { value: "12", label: "sucursales" },
  { value: "25", label: "premios" },
] as const;

export const featurePills = [
  { icon: "discount", title: "Ahorra en cada pedido", description: "Promos semanales" },
  { icon: "welcome", title: "Descuento de bienvenida", description: "En tu 1er pedido" },
  { icon: "points", title: "Puntos acumulables", description: "Canjea por combos" },
  { icon: "delivery", title: "Envío gratis", description: "En zonas seleccionadas" },
] as const;

export const howItWorksSteps = [
  {
    step: "01",
    title: "Elige tu pizza",
    description: "Explora el menú galáctico y personaliza tu pedido en segundos.",
  },
  {
    step: "02",
    title: "Cocinamos al instante",
    description: "Nuestro equipo prepara tu orden con ingredientes frescos.",
  },
  {
    step: "03",
    title: "Despegamos hacia ti",
    description: "Rastrea tu entrega en tiempo real hasta tu puerta.",
  },
] as const;

export const locations = [
  {
    id: "centro",
    name: "Centro Histórico",
    address: "Av. Galáctica 120, Sector Alpha",
    hours: "12:00 PM – 11:00 PM",
  },
  {
    id: "norte",
    name: "Zona Norte",
    address: "Calle Nebulosa 45, Sector Beta",
    hours: "12:00 PM – 11:00 PM",
  },
  {
    id: "sur",
    name: "Zona Sur",
    address: "Jr. Constelación 88, Sector Gamma",
    hours: "1:00 PM – 10:30 PM",
  },
] as const;

export const testimonials = [
  {
    id: "1",
    name: "María L.",
    quote: "La mejor pizza de la ciudad. El delivery siempre llega caliente y a tiempo.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos R.",
    quote: "Los combos son increíbles. Pedimos cada viernes en familia sin falta.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ana P.",
    quote: "La Mexicana es adictiva. El sabor es único y el servicio excelente.",
    rating: 5,
  },
] as const;

export const faqItems = [
  {
    id: "delivery",
    question: "¿Cuánto tarda el delivery?",
    answer:
      "El tiempo promedio de entrega es de 30 a 45 minutos según tu ubicación y la demanda del sector.",
  },
  {
    id: "payment",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjetas de crédito/débito, Yape, Plin y pago contra entrega.",
  },
  {
    id: "zones",
    question: "¿A qué zonas hacen delivery?",
    answer:
      "Cubrimos los principales sectores de la ciudad. Ingresa tu dirección al pedir para confirmar cobertura.",
  },
  {
    id: "allergies",
    question: "¿Tienen opciones sin gluten o veganas?",
    answer:
      "Sí, contamos con masa alternativa y opciones veggie. Indica tus preferencias en las notas del pedido.",
  },
] as const;
