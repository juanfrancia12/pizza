type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5c542]">
      {children}
    </p>
  );
}
