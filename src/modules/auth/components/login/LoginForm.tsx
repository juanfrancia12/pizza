import Link from "next/link";

import { Button } from "@/common/components/atoms/Button";
import { Input } from "@/common/components/atoms/Input";
import { AuthFormHeader } from "@/common/components/molecules/AuthFormHeader";
import { FormField } from "@/common/components/molecules/FormField";

export function LoginForm() {
  return (
    <form className="w-full max-w-md">
      <AuthFormHeader
        overline="Acceso a la flota"
        title="Inicio de sesión"
        description="Identifícate con tus credenciales de tripulante para acceder al panel de operaciones de City Pizza Galactic."
      />

      <div className="animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-100 space-y-5">
        <FormField label="Email galáctico" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nombre@fleet.citypizza.gal"
          />
        </FormField>

        <FormField label="Contraseña" htmlFor="password">
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
        </FormField>

        <div className="flex justify-end">
          <Link
            href="/recuperar-cuenta"
            className="text-xs font-medium text-[#ff6b8a] hover:text-[#ff8fa8]"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button type="submit">Iniciar sesión</Button>
      </div>

      <p className="mt-6 animate-fade-in animate-duration-normal animate-fill-mode-both animate-delay-200 text-center text-sm text-slate-500">
        ¿Nuevo en la flota?{" "}
        <Link href="/registro" className="font-medium text-[#ff6b8a] hover:text-[#ff8fa8]">
          Regístrate aquí
        </Link>
      </p>
    </form>
  );
}
