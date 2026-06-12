import { CenteredAuthLayout } from "@/common/components/layouts/CenteredAuthLayout";
import { LoadingContent } from "@/modules/loading/components/LoadingContent";

export function LoadingPage() {
  return (
    <CenteredAuthLayout contentMaxWidth="max-w-sm">
      <LoadingContent />
    </CenteredAuthLayout>
  );
}
