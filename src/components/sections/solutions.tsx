"use client";

import Link from "next/link";
import { ChevronRight, ImagePlus, Mic2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/src/components/animations/fade-in";
import { Section } from "@/src/components/sections/section";

const solutions = [
  {
    icon: Mic2,
    title: "Speech AI",
    description: "ASR, TTS, keyword spotting, and call center audio for voice-enabled products.",
    useCases: ["ASR", "TTS", "Keyword spotting", "Call center audio"],
    modalities: ["Audio", "Transcripts", "Metadata"],
    languages: ["Amharic", "Oromifa", "Tigrinya", "Somali", "Harari"],
  },
  {
    icon: ImagePlus,
    title: "Computer Vision",
    description: "Retail scenes, street environments, agriculture imagery, and document OCR.",
    useCases: ["Retail scenes", "Street environments", "Agriculture imagery", "Document OCR"],
    modalities: ["Images", "Video", "Annotations"],
    languages: ["Amharic", "Oromifa", "Tigrinya"],
  },
  {
    icon: Sparkles,
    title: "LLM Training Data",
    description: "Multilingual corpora, instruction tuning, and RLHF preference data.",
    useCases: ["Multilingual corpora", "Instruction tuning", "RLHF preference data"],
    modalities: ["Text", "Pairs", "Rankings"],
    languages: ["Amharic", "Oromifa", "Somali", "Tigrinya"],
  },
];

export function Solutions() {
  return (
    <Section
      id="solutions"
      eyebrow="SOLUTIONS"
      title="AI Training Data Solutions"
      description="Secure dataset delivery pipelines for enterprise AI teams."
      className="bg-[#111827]"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <FadeIn key={solution.title}>
            <div className="glass-card group flex h-full flex-col p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/20">
                <solution.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{solution.title}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">{solution.description}</p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Use cases
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {solution.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="rounded-md border border-[#1F2937] bg-[#0F172A] px-2 py-1 font-mono text-xs text-[#D1D5DB]"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Modalities
                  </p>
                  <p className="mt-1 text-sm text-[#D1D5DB]">{solution.modalities.join(", ")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Languages
                  </p>
                  <p className="mt-1 text-sm text-[#D1D5DB]">{solution.languages.join(", ")}</p>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <Button asChild variant="link" className="h-auto p-0 text-primary hover:text-primary/90">
                  <Link href="/solutions" className="inline-flex items-center gap-1 text-sm font-medium">
                    Learn more
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
