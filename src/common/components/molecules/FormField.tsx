import type { ReactNode } from "react";

import { Label } from "@/common/components/atoms/Label";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
};

export function FormField({ label, htmlFor, children }: FormFieldProps) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
