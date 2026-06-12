type AuthFormHeaderProps = {
  overline: string;
  title: string;
  description: string;
};

export function AuthFormHeader({ overline, title, description }: AuthFormHeaderProps) {
  return (
    <header className="mb-8 animate-fade-in-up animate-duration-fast animate-fill-mode-both">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5c542]">
        {overline}
      </p>
      <h1 className="text-3xl font-bold text-white xl:text-4xl">{title}</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">{description}</p>
    </header>
  );
}
