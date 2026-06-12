type IconProps = {
  className?: string;
};

export function NetworkIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7v4M8.5 15.5 10 13M15.5 15.5 14 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
