type IconProps = { className?: string; direction?: "down" | "up" };

export function ChevronIcon({ className = "h-4 w-4", direction = "down" }: IconProps) {
  return (
    <svg
      className={`${className} ${direction === "up" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
