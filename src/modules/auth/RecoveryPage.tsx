import { CenteredAuthLayout } from "@/common/components/layouts/CenteredAuthLayout";
import { RecoveryForm } from "@/modules/auth/components/recovery/RecoveryForm";

export function RecoveryPage() {
  return (
    <CenteredAuthLayout>
      <RecoveryForm />
    </CenteredAuthLayout>
  );
}
