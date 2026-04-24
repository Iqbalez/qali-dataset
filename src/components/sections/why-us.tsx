import { Globe, HandHeart, ShieldCheck, Users } from "lucide-react";

import { Section } from "@/src/components/sections/section";

const reasons = [
  {
    icon: Globe,
    title: "We work in languages most teams ignore.",
    description: "That is usually where the model failure begins.",
  },
  {
    icon: HandHeart,
    title: "All data is consent-backed and legally clean.",
    description: "A high-accuracy dataset still fails if compliance cannot approve it.",
  },
  {
    icon: Users,
    title: "Domain-specific annotation, not generic task labor.",
    description: "People who understand the context label the context.",
  },
  {
    icon: ShieldCheck,
    title: "We deliver datasets that fit your training pipeline.",
    description: "Less operational cleanup for your ML and product teams.",
  },
];

export function WhyUs() {
  return (
    <Section
      id="why-us"
      eyebrow="WHY QALI EXISTS"
      title="Why Qali exists."
      description="If your customers speak Amharic, negotiate in Afaan Oromo, and transact in Birr, a dataset scraped from US forums will not help. Generic data trains generic AI. We exist to close that gap with local ground truth that respects privacy and context."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item) => (
          <div
            key={item.title}
            className="glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <div className="mb-5 flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
              <item.icon className="size-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#9FB0C4]">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
