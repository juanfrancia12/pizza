"use client";

import Link from "next/link";

import { Button } from "@/common/components/atoms/Button";
import { Input } from "@/common/components/atoms/Input";
import { Select } from "@/common/components/atoms/Select";
import { AuthFormHeader } from "@/common/components/molecules/AuthFormHeader";
import { FormField } from "@/common/components/molecules/FormField";

export function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <Link href="/" className="block text-red-400 mb-6 text-sm">
        {`${'<- Volver'}`}
        </Link>

      <AuthFormHeader
        overline="Unirse a la flota"
        title="Registro de Recluta"
        description="Ingresa tus credenciales intergalácticas para acceder al centro de operaciones de City Pizza Galactic."
      />


      <div className="animate-fade-in-up animate-duration-normal animate-fill-mode-both animate-delay-100 space-y-5">
        <FormField label="Nombre completo" htmlFor="fullName">
          <Input id="fullName" name="fullName" placeholder="Ej. Comandante Pepperoni" />
        </FormField>

        <FormField label="Email galáctico" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nombre@fleet.citypizza.gal"
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="ID de empleado" htmlFor="employeeId">
            <Input id="employeeId" name="employeeId" placeholder="CP-XXXX" />
          </FormField>

          <FormField label="Rango / rol" htmlFor="role">
            <Select id="role" name="role" defaultValue="pilot">
              <option value="pilot">Piloto de Reparto</option>
              <option value="chef">Chef Orbital</option>
              <option value="commander">Comandante de Sector</option>
            </Select>
          </FormField>
        </div>

        <Button type="submit">Reclutar tripulante</Button>
      </div>

      <p className="mt-6 animate-fade-in animate-duration-normal animate-fill-mode-both animate-delay-200 text-center text-sm text-slate-500">
        ¿Ya eres tripulante?{" "}
        <Link href="/login" className="font-medium text-[#ff6b8a] hover:text-[#ff8fa8]">
          Inicia sesión
        </Link>
      </p>
    </form>
  );
}
