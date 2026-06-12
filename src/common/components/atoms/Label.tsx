import type { ReactNode } from "react";

type LabelProps = {
  htmlFor?: string;
  children: ReactNode;
};

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff6b8a]"
    >
      {children}
    </label>
  );
}
