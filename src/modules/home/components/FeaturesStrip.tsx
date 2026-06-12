import { FeaturePill } from "@/common/components/molecules/FeaturePill";
import { featurePills } from "@/common/data/home";

export function FeaturesStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-4 sm:grid-cols-2 lg:grid-cols-4">
        {featurePills.map((feature) => (
          <FeaturePill key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
