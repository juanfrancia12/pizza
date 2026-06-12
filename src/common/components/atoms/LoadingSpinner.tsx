type LoadingSpinnerProps = {
  className?: string;
  label?: string;
};

export function LoadingSpinner({
  className = "",
  label = "Cargando",
}: LoadingSpinnerProps) {
  return (
    <div
      className={`loading-orbit ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className="loading-orbit__ring loading-orbit__ring--outer" />
      <span className="loading-orbit__ring loading-orbit__ring--inner" />
      <span className="loading-orbit__core" />
    </div>
  );
}
