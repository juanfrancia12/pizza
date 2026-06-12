type IconProps = { className?: string; filled?: boolean };

export function StarIcon({ className = "h-4 w-4", filled = true }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2l2.9 6.26 6.9.6-5.2 4.52 1.6 6.74L12 17.77l-6.2 3.35 1.6-6.74-5.2-4.52 6.9-.6L12 2z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
