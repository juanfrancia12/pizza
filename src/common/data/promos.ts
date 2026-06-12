import type { Promo } from "@/common/interfaces/product";

export const featuredPromos: Promo[] = [
  {
    id: "combo-personal",
    title: "Combo Personal",
    description: "Pizza personal + gaseosa 500 ml + brownie espacial.",
    price: 14,
    imageSrc: "/images/products/combo-1.svg",
    imageAlt: "Combo Personal City Pizza",
    badge: "Más pedido",
    code: "GALAXIA14",
  },
  {
    id: "combo-familiar",
    title: "Combo Familiar",
    description: "2 pizzas medianas + 2 gaseosas + papas cósmicas.",
    price: 24,
    imageSrc: "/images/products/combo-2.svg",
    imageAlt: "Combo Familiar City Pizza",
    badge: "-20%",
    code: "FAMILIA24",
  },
  {
    id: "promo-mexicana",
    title: "Pizza Mexicana",
    description: "Receta picante con jalapeños y pepperoni premium.",
    price: 18.5,
    imageSrc: "/images/products/pizza-1.svg",
    imageAlt: "Promo Pizza Mexicana",
    code: "MEXICO18",
  },
  {
    id: "promo-delivery",
    title: "Delivery Express",
    description: "Envío gratis en pedidos mayores a S/ 30 en tu sector.",
    price: 0,
    imageSrc: "/images/products/combo-3.svg",
    imageAlt: "Promo Delivery Express",
    badge: "Envío gratis",
  },
];
