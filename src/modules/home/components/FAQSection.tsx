import { FAQItem } from "@/common/components/molecules/FAQItem";
import { SectionHeading } from "@/common/components/molecules/SectionHeading";
import { faqItems } from "@/common/data/home";

export function FAQSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        id="faq"
        label="Centro de ayuda"
        title="Preguntas frecuentes"
        description="Resolvemos todas las dudas de nuestros viajeros galácticos. Si tienes más preguntas, contáctanos."
      />
      <div className="space-y-3 lg:space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            defaultOpen={index === 0}
            index={index}
          />
        ))}
      </div>

      {/* CTA para más ayuda */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-center sm:p-8">
        <p className="text-sm text-slate-300 mb-3">
          ¿No encontraste tu respuesta?
        </p>
        <p className="text-lg font-semibold text-white mb-4">
          Nuestro equipo está aquí para ayudarte
        </p>
        <a
          href="https://wa.me/51955123456"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4a9eff] to-[#2dd4bf] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:from-[#6bb3ff] hover:to-[#45e4d4] transition-all duration-300"
        >
          💬 Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
}
