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
  title: "African Language AI Data | Qali",
  description:
    "High quality African language datasets for LLMs, ASR, and RLHF.",
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
        id="request-sample"
        eyebrow="REQUEST SAMPLE"
        title="Get Your Free Dataset Sample"
        description="Fill out the form and we'll send you a sample of our African language data."
      >
        <div className="mx-auto max-w-2xl">
          <SampleRequestForm />
        </div>
      </Section>
      <CTA />
    </>
  );
}
