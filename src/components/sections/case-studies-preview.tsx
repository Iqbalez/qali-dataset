import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/src/components/sections/section";

export function CaseStudiesPreview() {
  return (
    <Section
      eyebrow="CASE STUDIES"
      title="We would rather earn this section than fake it."
      description="When a pilot turns into a measurable win, this is where the proof goes."
      className="bg-[#0E1723]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="glass-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 lg:p-8">
          <p className="text-base leading-8 text-[#C7D2E1]">
            Your project could be the next case study. We will document the
            accuracy gain, the operational time recovered, and the local value
            the system unlocked, then publish it here with your permission.
          </p>
        </div>
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
