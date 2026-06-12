import Link from "next/link";

import { CartIcon } from "@/common/components/icons/CartIcon";
import { mainNavLinks } from "@/common/constants/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080c16]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black uppercase tracking-wide text-white">
          City <span className="text-[#e63956]">Pizza</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:inline"
          >
            Ingresar
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-[#e63956] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#ff4d6d]"
          >
            <CartIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Carrito</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
