import { Globe, HandHeart, ShieldCheck, Users } from "lucide-react";

import { Section } from "@/src/components/sections/section";

const reasons = [
  { icon: Globe, title: "Rare Language Focus", description: "Specialized in low-resource African languages with dialect-level coverage." },
  { icon: Users, title: "Native Cultural Context", description: "Data aligned with real-world usage, regional dialects, and cultural nuance." },
  { icon: HandHeart, title: "Ethical Workforce Model", description: "Fair compensation and transparent contributor relationships." },
  { icon: ShieldCheck, title: "Secure Delivery", description: "Enterprise-ready data transfer, NDA support, and encrypted storage." },
];

export function WhyUs() {
  return (
    <Section
      id="why-us"
      eyebrow="WHY US"
      title="Why Qali"
      description="Built for enterprise AI teams that demand quality and traceability."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item) => (
          <div
            key={item.title}
            className="glass-card p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/20">
              <item.icon className="size-5 text-primary" />
            </div>
            <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
