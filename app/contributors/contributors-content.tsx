"use client";

import Link from "next/link";
import {
  DollarSign,
  Laptop,
  Sparkles,
  Users,
  Briefcase,
  Scale,
  Zap,
  Award,
  BarChart3,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContributorApplicationForm } from "@/src/components/forms/contributor-application-form";
import { Section } from "@/src/components/sections/section";
import { FadeIn } from "@/src/components/animations/fade-in";

const contributorBenefits = [
  { icon: DollarSign, title: "Fair Compensation", description: "Competitive per-task and per-hour rates with transparent payment schedules." },
  { icon: Laptop, title: "Remote Work", description: "Contribute from anywhere with reliable internet. Flexible scheduling." },
  { icon: Sparkles, title: "Skill Development", description: "Training in AI data annotation, linguistics, and quality assurance." },
  { icon: Users, title: "Meaningful Impact", description: "Help build AI that understands African languages and contexts." },
];

const enterpriseBenefits = [
  { icon: Scale, title: "Scalable workforce", description: "On-demand annotator pool sized to your project timeline and volume." },
  { icon: Briefcase, title: "Domain-specific teams", description: "Annotators trained for your exact use case with project-specific calibration." },
  { icon: Zap, title: "Consistent throughput", description: "Predictable delivery cadence with built-in quality checkpoints." },
];

const stats = [
  { value: "150+", label: "Active annotators" },
  { value: "5", label: "Languages covered" },
  { value: "500+", label: "Daily tasks processed" },
];

const trainingProcess = [
  { icon: BookOpen, title: "Onboarding", description: "Introduction to annotation tools, guidelines, and quality standards." },
  { icon: Award, title: "Calibration", description: "Complete calibration tasks with feedback loops until threshold met." },
  { icon: BarChart3, title: "Certification", description: "Three tiers: Junior, Senior, and Expert annotator with corresponding pay scales." },
  { icon: Users, title: "Ongoing QA", description: "Continuous monitoring with periodic recalibration and quality bonuses." },
];

const requirements = [
  "Native or near-native fluency in one or more supported languages",
  "Reliable internet connection and quiet environment for recording",
  "Strong attention to detail and consistency across tasks",
  "Ability to follow annotation guidelines and complete calibration",
  "Commitment to meet project deadlines and quality standards",
];

export function ContributorsContent() {
  return (
    <>
      <Section
        eyebrow="CONTRIBUTORS"
        title="Scalable Workforce Model"
        description="Certified annotators across 5 African languages. Join our network or leverage our workforce for enterprise projects."
      >
        <div className="space-y-16">
          <FadeIn>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-6 text-center">
                  <p className="font-mono text-3xl font-semibold tabular-nums text-primary">{s.value}</p>
                  <p className="mt-2 text-sm text-[#9CA3AF]">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <h3 className="mb-6 font-display text-xl font-semibold text-white">Training & Certification</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trainingProcess.map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/20">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-[#9CA3AF]">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div>
                <h3 className="mb-6 font-display text-xl font-semibold text-white">For Contributors</h3>
                <p className="mb-6 text-sm text-[#D1D5DB]">
                  Earn by labeling speech, text, and images. Native speakers wanted for our African language dataset projects.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {contributorBenefits.map((benefit) => (
                    <div key={benefit.title} className="glass-card p-4">
                      <div className="mb-2 flex size-8 items-center justify-center rounded-lg bg-primary/20">
                        <benefit.icon className="size-4 text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{benefit.title}</h4>
                      <p className="mt-1 text-xs text-[#9CA3AF]">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="mb-4 font-display text-lg font-semibold text-white">Requirements</h4>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex gap-3 text-sm text-[#D1D5DB]">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <h4 className="mb-4 font-display text-lg font-semibold text-white">Apply Now</h4>
                  <ContributorApplicationForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="mb-6 font-display text-xl font-semibold text-white">For Enterprise</h3>
                <p className="mb-6 text-sm text-[#D1D5DB]">
                  Scalable trained annotator pool. Domain-specific teams available. Integrate with your pipeline or use our end-to-end delivery.
                </p>
                <div className="space-y-4">
                  {enterpriseBenefits.map((benefit) => (
                    <div key={benefit.title} className="glass-card p-4">
                      <div className="mb-2 flex size-8 items-center justify-center rounded-lg bg-primary/20">
                        <benefit.icon className="size-4 text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{benefit.title}</h4>
                      <p className="mt-1 text-xs text-[#9CA3AF]">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 glass-card p-6">
                  <h4 className="text-sm font-semibold text-white">Enterprise inquiries</h4>
                  <p className="mt-2 text-sm text-[#9CA3AF]">
                    Contact us for custom data collection, on-demand annotation, and secure delivery. NDA available.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/contact">Contact Enterprise</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
