import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/src/components/sections/section";

const caseStudies = [
  {
    title: "Amharic ASR Pilot",
    problem: "Low accuracy speech recognition for Amharic call center audio.",
    dataset: "120 hours read speech with time-aligned transcripts.",
    outcome: "+18% WER improvement over baseline.",
  },
  {
    title: "Harari Speech Dataset v1",
    problem: "Zero available training data for Harari language models.",
    dataset: "40 hours conversational speech with metadata.",
    outcome: "First benchmark dataset created. Research published.",
  },
];

export function CaseStudiesPreview() {
  return (
    <Section
      eyebrow="CASE STUDIES"
      title="Case Studies"
      description="How we help teams ship AI that understands African languages."
      className="bg-[#111827]"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <div
            key={study.title}
            className="glass-card p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30"
          >
            <h3 className="font-display text-lg font-semibold text-white">{study.title}</h3>
            <div className="mt-5 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-primary/80">Problem</h4>
                <p className="mt-1 text-sm text-[#D1D5DB]">{study.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary/80">Dataset</h4>
                <p className="mt-1 text-sm text-[#D1D5DB]">{study.dataset}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary/80">Outcome</h4>
                <p className="mt-1 text-sm font-medium text-white">{study.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="link" className="gap-1 text-primary">
          <Link href="/contact">
            Discuss your use case
            <ChevronRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
