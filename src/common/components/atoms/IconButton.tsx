import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  label: string;
  size?: "sm" | "md";
};

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
};

export function IconButton({
  children,
  label,
  size = "md",
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-[#e63956] text-white shadow-[0_0_16px_rgba(230,57,86,0.35)] transition hover:bg-[#ff4d6d] ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
