import Link from "next/link";

import { Button } from "@/common/components/atoms/Button";
import { Input } from "@/common/components/atoms/Input";
import { AuthFormHeader } from "@/common/components/molecules/AuthFormHeader";
import { FormField } from "@/common/components/molecules/FormField";

export function RecoveryForm() {
  return (
    <form className="w-full">
            <Link href="/" className="block text-red-400 mb-6 text-sm">
        {`${'<- Volver'}`}
        </Link>
        
      <AuthFormHeader
        overline="Recuperación de acceso"
        title="Recuperar cuenta"
        description="Ingresa tu email galáctico y te enviaremos un enlace para restablecer el acceso a tu cuenta de tripulante."
      />

      <div className="animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-100 space-y-5">
        <FormField label="Email galáctico" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nombre@fleet.citypizza.gal"
            autoComplete="email"
          />
        </FormField>

        <Button type="submit">Enviar enlace de recuperación</Button>
      </div>

      <p className="mt-6 animate-fade-in animate-duration-normal animate-fill-mode-both animate-delay-200 text-center text-sm text-slate-500">
        ¿Recordaste tu acceso?{" "}
        <Link href="/login" className="font-medium text-[#ff6b8a] hover:text-[#ff8fa8]">
          Volver al inicio de sesión
        </Link>
      </p>
    </form>
  );
}
