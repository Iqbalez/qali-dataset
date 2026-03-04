import {
  GraduationCap,
  HandHeart,
  Layers,
  Scale,
} from "lucide-react";

import { QADiagram } from "@/src/components/sections/qa-diagram";
import { createPageMetadata } from "@/src/lib/seo";
import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

const methodologyItems = [
  {
    title: "Annotator Training",
    description:
      "All annotators complete rigorous, language-specific training and certification before touching data. We maintain ongoing calibration sessions to ensure consistency and quality.",
    icon: GraduationCap,
  },
  {
    title: "3-Layer QA Pipeline",
    description:
      "Every dataset passes through three quality checkpoints: annotator self-review, peer verification by senior annotators, and automated plus human spot-checks before delivery.",
    icon: Layers,
  },
  {
    title: "Ethical Sourcing",
    description:
      "We work directly with native speaker communities, ensuring fair compensation, informed consent, and transparent data usage. No exploitative labor practices—ever.",
    icon: HandHeart,
  },
  {
    title: "Bias Mitigation",
    description:
      "Systematic review for demographic, dialectal, and domain bias. We balance coverage across regions, genders, and contexts to support fair and inclusive AI systems.",
    icon: Scale,
  },
];

export const metadata = createPageMetadata({
  title: "Quality & Methodology | Qali",
  description:
    "Enterprise-grade data validation pipeline. How we ensure accuracy, representativeness, and ethical standards in every dataset.",
});

export default function QualityPage() {
  return (
    <>
      <Section
        title="Quality & Methodology"
        subtitle="How we ensure accuracy, representativeness, and ethical standards in every dataset."
      >
        <div className="mb-16">
          <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
            3-Layer QA Pipeline
          </h3>
          <QADiagram />
        </div>

        <div className="relative mt-16">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-muted-foreground/30 md:left-1/2 md:-translate-x-px"
          aria-hidden
        />

        <div className="space-y-0">
          {methodologyItems.map((item, index) => (
            <div
              key={item.title}
              className="relative flex flex-wrap items-start gap-6 pb-12 last:pb-0 md:grid md:flex-nowrap md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
            >
              {/* Left column: content for even indices (0, 2) */}
              <div
                className={cn(
                  "order-2 min-w-0 flex-1 md:order-1 md:flex-none md:pr-4",
                  index % 2 === 1 && "hidden md:block"
                )}
              >
                {index % 2 === 0 && (
                  <div className="rounded-xl border bg-card p-6 shadow-sm md:ml-auto md:max-w-md md:text-right">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Timeline node - center */}
              <div className="order-1 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background md:order-2 md:size-14">
                <item.icon className="size-6 text-primary md:size-7" />
              </div>

              {/* Right column: content for odd indices (1, 3) */}
              <div
                className={cn(
                  "order-2 min-w-0 flex-1 md:order-3 md:flex-none md:pl-4",
                  index % 2 === 0 && "hidden md:block"
                )}
              >
                {index % 2 === 1 && (
                  <div className="rounded-xl border bg-card p-6 shadow-sm md:mr-auto md:max-w-md">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </Section>
    </>
  );
}
