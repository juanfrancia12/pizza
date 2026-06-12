import Link from "next/link";

import { SectionLabel } from "@/common/components/atoms/SectionLabel";
import { SectionTitle } from "@/common/components/atoms/SectionTitle";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  id?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  actionLabel,
  actionHref,
  id,
}: SectionHeadingProps) {
  return (
    <div id={id} className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {label && <SectionLabel>{label}</SectionLabel>}
        <SectionTitle className={label ? "mt-2" : ""}>{title}</SectionTitle>
        {description && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{description}</p>
        )}
      </div>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="shrink-0 text-sm font-semibold text-[#ff6b8a] transition hover:text-[#ff8fa8]"
        >
          {actionLabel} →
        </Link>
      )}
    </div>
  );
}
