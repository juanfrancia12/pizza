import { SplitAuthLayout } from "@/common/components/layouts/SplitAuthLayout";
import { LoginFeatureCards } from "@/modules/auth/components/login/LoginFeatureCards";
import { LoginForm } from "@/modules/auth/components/login/LoginForm";
import {
  LoginVisualBackground,
  LoginVisualContent,
} from "@/modules/auth/components/login/LoginVisualPanel";

export function LoginPage() {
  return (
    <SplitAuthLayout
      visualMode="full-bleed"
      contentMaxWidth="max-w-[1320px]"
      formPanel={
        <div className="w-full max-w-md animate-fade-in-left animate-duration-normal animate-fill-mode-both px-4 md:px-0">
          <LoginForm />
          <LoginFeatureCards />
        </div>
      }
      visualBackground={<LoginVisualBackground />}
      visualPanel={<LoginVisualContent />}
    />
  );
}
