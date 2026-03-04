"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ClipboardList,
  FileCheck,
  Lock,
  Shield,
  UserCheck,
  BarChart3,
  Users,
  Eye,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/src/components/sections/section";
import { FadeIn } from "@/src/components/animations/fade-in";

const processSteps = [
  { step: 1, title: "Data sourcing", description: "Structured collection from native speakers in real-world environments with device and demographic diversity.", icon: ClipboardList },
  { step: 2, title: "Informed consent", description: "Documented consent for every contributor. Full chain of custody with audit trail.", icon: UserCheck },
  { step: 3, title: "Annotation", description: "Trained annotators follow project-specific guidelines with calibration tasks and ongoing quality monitoring.", icon: FileCheck },
  { step: 4, title: "Multi-pass QA", description: "Annotator self-review, peer verification, automated checks, and inter-annotator agreement measurement.", icon: CheckCircle2 },
  { step: 5, title: "Expert audit", description: "Native linguists perform statistical spot-checks, bias sampling, and final validation before sign-off.", icon: Eye },
  { step: 6, title: "Secure delivery", description: "Encrypted transfer with full documentation, schema definitions, and licensing.", icon: Shield },
];

const metrics = [
  { value: "98%+", label: "Inter-annotator agreement", detail: "Measured across all annotation tasks" },
  { value: "3-stage", label: "Review pipeline", detail: "Self-review, peer, expert audit" },
  { value: "Native", label: "Linguists", detail: "All QA performed by native speakers" },
  { value: "Bias", label: "Sampling checks", detail: "Demographic and dialectal balance verification" },
];

const complianceItems = [
  { icon: Shield, title: "PII removal", description: "Automated and manual screening removes personally identifiable information before delivery." },
  { icon: ClipboardList, title: "Consent tracking", description: "Full chain of custody for contributor consent with documented audit trails." },
  { icon: Lock, title: "NDA workflows", description: "Secure handling for sensitive enterprise projects with mutual NDA support." },
  { icon: Shield, title: "Encrypted storage", description: "Data encrypted at rest (AES-256) and in transit (TLS 1.3)." },
  { icon: AlertTriangle, title: "Bias mitigation", description: "Demographic sampling and dialectal balance checks at every stage." },
  { icon: Users, title: "Annotator certification", description: "Tiered certification system with ongoing calibration and quality monitoring." },
  { icon: BarChart3, title: "Quality reporting", description: "Detailed QA reports included with every dataset delivery." },
  { icon: FileCheck, title: "Format compliance", description: "Standard formats (COCO, Parquet, JSONL) with full schema documentation." },
];

export function QualityContent() {
  return (
    <>
      <Section
        id="quality"
        eyebrow="QUALITY & METHODOLOGY"
        title="Enterprise-grade data validation pipeline"
        description="Six-stage quality process from sourcing to secure delivery. Every dataset meets enterprise accuracy and compliance standards."
      >
        <div className="space-y-20">
          <FadeIn>
            <h3 className="mb-8 text-center text-xl font-semibold text-white">
              Process timeline
            </h3>
            <div className="relative">
              <div
                className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:left-1/2 md:-translate-x-px"
                aria-hidden
              />
              <div className="space-y-8">
                {processSteps.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative flex flex-col gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
                  >
                    <div className={index % 2 === 1 ? "hidden md:block" : "md:pr-8"}>
                      {index % 2 === 0 && (
                        <div className="glass-card p-5 md:ml-auto md:max-w-md md:text-right">
                          <div className="flex items-center gap-3 md:flex-row-reverse md:justify-end">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                              <item.icon className="size-5 text-primary" />
                            </div>
                            <h4 className="font-display font-semibold text-white">{item.title}</h4>
                          </div>
                          <p className="mt-2 text-sm text-[#9CA3AF]">{item.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-[#0B0F19] md:size-14">
                      <span className="font-mono font-semibold text-primary">{item.step}</span>
                    </div>
                    <div className={index % 2 === 0 ? "hidden md:block" : "md:pl-8"}>
                      {index % 2 === 1 && (
                        <div className="glass-card p-5 md:mr-auto md:max-w-md">
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                              <item.icon className="size-5 text-primary" />
                            </div>
                            <h4 className="font-display font-semibold text-white">{item.title}</h4>
                          </div>
                          <p className="mt-2 text-sm text-[#9CA3AF]">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <h3 className="mb-8 text-center text-xl font-semibold text-white">Quality metrics</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card p-6 text-center">
                  <p className="font-mono text-3xl font-semibold tabular-nums text-primary">{m.value}</p>
                  <p className="mt-2 text-sm font-medium text-white">{m.label}</p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">{m.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <h3 className="mb-8 text-center text-xl font-semibold text-white">Security & compliance</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {complianceItems.map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h4 className="mt-3 font-display text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-[#9CA3AF]">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/contact">Discuss your requirements</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
