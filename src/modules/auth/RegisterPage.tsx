import { SplitAuthLayout } from "@/common/components/layouts/SplitAuthLayout";
import { RegisterFeatureCards } from "@/modules/auth/components/register/RegisterFeatureCards";
import { RegisterForm } from "@/modules/auth/components/register/RegisterForm";
import {
  RegisterVisualBackground,
  RegisterVisualContent,
} from "@/modules/auth/components/register/RegisterVisualPanel";

export function RegisterPage() {
  return (
    <SplitAuthLayout
      visualMode="full-bleed"
      contentMaxWidth="max-w-[1320px]"
      formPanel={
        <div className="w-full max-w-md animate-fade-in-left animate-duration-normal animate-fill-mode-both px-4 md:px-0">
          <RegisterForm />
          <RegisterFeatureCards />
        </div>
      }
      visualBackground={<RegisterVisualBackground />}
      visualPanel={<RegisterVisualContent />}
    />
  );
}
