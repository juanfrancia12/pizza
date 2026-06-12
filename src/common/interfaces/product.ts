export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  rating?: number;
  reviews?: number;
};

export type Promo = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  code?: string;
};
