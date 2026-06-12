import Link from "next/link";

import { footerNavLinks } from "@/common/constants/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#060912]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-black uppercase text-white">
            City <span className="text-[#e63956]">Pizza</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Sabores galácticamente buenos. Delivery express en toda la ciudad.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#f5c542]">Nosotros</p>
          <ul className="space-y-2">
            {footerNavLinks.nosotros.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#f5c542]">Legal</p>
          <ul className="space-y-2">
            {footerNavLinks.legal.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#f5c542]">Ayuda</p>
          <ul className="space-y-2">
            {footerNavLinks.ayuda.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} City Pizza — Sabores galácticamente buenos.
      </div>
    </footer>
  );
}
