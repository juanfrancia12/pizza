export const mainNavLinks = [
  { label: "Inicio", href: "/" },
  { label: "Promociones", href: "#promociones" },
  { label: "Pizzas", href: "#pizzas" },
  { label: "Locales", href: "#locales" },
  { label: "FAQ", href: "#faq" },
] as const;

export const footerNavLinks = {
  nosotros: [
    { label: "Nuestra historia", href: "#" },
    { label: "Trabaja con nosotros", href: "#" },
    { label: "Franquicias", href: "#" },
  ],
  legal: [
    { label: "Términos y condiciones", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Libro de reclamaciones", href: "#" },
  ],
  ayuda: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Rastrea tu pedido", href: "#" },
    { label: "Contacto", href: "#" },
  ],
} as const;
