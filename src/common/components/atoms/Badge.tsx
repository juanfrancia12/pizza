type BadgeProps = {
  children: string;
  variant?: "primary" | "accent" | "neutral";
};

const variants = {
  primary: "bg-[#e63956] text-white",
  accent: "bg-[#f5c542] text-[#080c16]",
  neutral: "bg-white/10 text-slate-200",
};

export function Badge({ children, variant = "primary" }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
