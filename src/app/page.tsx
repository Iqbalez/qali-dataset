import { createPageMetadata } from "@/src/lib/seo";
import { CTA } from "@/src/components/sections/cta";
import { CaseStudiesPreview } from "@/src/components/sections/case-studies-preview";
import { Hero } from "@/src/components/sections/hero";
import { Languages } from "@/src/components/sections/languages";
import { Metrics } from "@/src/components/sections/metrics";
import { WhyUs } from "@/src/components/sections/why-us";
import { QualityPreview } from "@/src/components/sections/quality-preview";
import { Solutions } from "@/src/components/sections/solutions";
import { TrustBar } from "@/src/components/sections/trust-bar";
import { Workflow } from "@/src/components/sections/workflow";
import { SampleRequestForm } from "@/src/components/forms/sample-request-form";
import { Section } from "@/src/components/sections/section";

export const metadata = createPageMetadata({
  title: "Local AI Datasets | Qali",
  description:
    "Qali builds local voice, image, and text datasets so AI systems understand real African markets, languages, and contexts.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Solutions />
      <Languages />
      <WhyUs />
      <Workflow />
      <QualityPreview />
      <Metrics />
      <CaseStudiesPreview />
      <Section
        id="pilot"
        eyebrow="FREE PILOT"
        title="Request your free pilot dataset."
        description="Tell us what AI problem you're solving, and we'll build a miniature dataset that proves our value. Delivered in 10 business days. No strings."
      >
        <div className="mx-auto max-w-2xl">
          <SampleRequestForm />
        </div>
      </Section>
      <CTA />
    </>
  );
}
