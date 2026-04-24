import Link from "next/link";

import { Button } from "@/components/ui/button";
import { QADiagram } from "@/src/components/sections/qa-diagram";
import { Section } from "@/src/components/sections/section";

export function QualityPreview() {
  return (
    <Section
      id="quality"
      eyebrow="QUALITY & ETHICS"
      title="Data you can stand behind."
      description="We do not generate synthetic text or scrape without conscience. Every voice recording is transcribed and verified by mother-tongue speakers. Every image is annotated by people who live the context. Every text sample respects data privacy laws. This is data without legal landmines."
      className="bg-[#111827]"
    >
      <div className="flex flex-col items-center gap-8">
        <QADiagram />
        <Button asChild variant="outline" className="border-[#374151] text-[#E5E7EB] hover:bg-[#1E293B] hover:text-white">
          <Link href="/quality">See our review process</Link>
        </Button>
      </div>
    </Section>
  );
}
