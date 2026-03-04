import Link from "next/link";

import { Button } from "@/components/ui/button";
import { QADiagram } from "@/src/components/sections/qa-diagram";
import { Section } from "@/src/components/sections/section";

export function QualityPreview() {
  return (
    <Section
      id="quality"
      eyebrow="QUALITY & ETHICS"
      title="Enterprise-grade data validation pipeline"
      description="How we ensure accuracy, representativeness, and ethical standards in every dataset."
      className="bg-[#111827]"
    >
      <div className="flex flex-col items-center gap-8">
        <QADiagram />
        <Button asChild variant="outline" className="border-[#374151] text-[#E5E7EB] hover:bg-[#1E293B] hover:text-white">
          <Link href="/quality">Our methodology</Link>
        </Button>
      </div>
    </Section>
  );
}
