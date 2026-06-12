import { formatPrice } from "@/common/helpers/formatPrice";

type PriceDisplayProps = {
  amount: number;
  size?: "sm" | "md" | "lg";
  prefix?: string;
};

const sizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export function PriceDisplay({ amount, size = "md", prefix }: PriceDisplayProps) {
  return (
    <span className={`font-bold text-[#f5c542] ${sizes[size]}`}>
      {prefix}
      {amount > 0 ? formatPrice(amount) : "Gratis"}
    </span>
  );
}
