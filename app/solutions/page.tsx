import Link from "next/link";
import {
  Mic2,
  ImagePlus,
  Sparkles,
  Phone,
  FileText,
  ShoppingCart,
  Tractor,
  Heart,
  Building,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/src/components/sections/section";
import { createPageMetadata } from "@/src/lib/seo";

const solutionCategories = [
  {
    icon: Mic2,
    title: "Speech AI",
    description: "Production-quality speech datasets for voice-enabled AI products across African languages.",
    offerings: [
      { name: "ASR corpora", detail: "Time-aligned transcripts with speaker diarization" },
      { name: "TTS voice sets", detail: "Multi-speaker studio recordings with prosody annotations" },
      { name: "Keyword spotting", detail: "Wake-word and command detection datasets" },
      { name: "Code-switch audio", detail: "Multilingual conversation with language tags" },
    ],
    languages: "Amharic, Oromifa, Tigrinya, Somali, Harari",
  },
  {
    icon: ImagePlus,
    title: "Computer Vision",
    description: "Annotated visual data from real-world Ethiopian environments for training vision models.",
    offerings: [
      { name: "Retail shelf images", detail: "Product detection, pricing, Amharic signage OCR" },
      { name: "Traffic scenes", detail: "Vehicle, pedestrian, and infrastructure detection" },
      { name: "Crop disease imagery", detail: "Disease classification, severity grading" },
      { name: "Document OCR", detail: "Ge'ez script character recognition and segmentation" },
    ],
    languages: "Amharic, Oromifa, Tigrinya",
  },
  {
    icon: Sparkles,
    title: "LLM Training Data",
    description: "Human-generated text data for fine-tuning and aligning large language models.",
    offerings: [
      { name: "Multilingual corpora", detail: "Clean text collections for language modeling" },
      { name: "Instruction tuning data", detail: "Task-specific instruction-response pairs" },
      { name: "RLHF preference data", detail: "Human rankings for reward model training" },
      { name: "Safety and alignment", detail: "Harmlessness labels and content moderation data" },
    ],
    languages: "Amharic, Oromifa, Somali, Tigrinya",
  },
];

const industryUseCases = [
  { icon: Phone, industry: "Telecommunications", problem: "Low-accuracy call center ASR for Ethiopian languages", dataset: "120h Amharic ASR corpus with noise-robust transcripts", outcome: "+18% WER improvement, automated call routing" },
  { icon: FileText, industry: "Fintech", problem: "Manual KYC document processing in Ge'ez script", dataset: "8,000 document images with character-level OCR", outcome: "85% reduction in manual review time" },
  { icon: Tractor, industry: "Agriculture", problem: "Crop disease misidentification in smallholder farms", dataset: "25,000 annotated images across 4 crop types", outcome: "92% disease detection accuracy on mobile" },
  { icon: ShoppingCart, industry: "Retail", problem: "No shelf detection models for Ethiopian retail environments", dataset: "15,000 images with product and signage annotations", outcome: "Automated planogram compliance monitoring" },
  { icon: Heart, industry: "Healthcare", problem: "Paper-based patient records in Amharic", dataset: "Form digitization dataset with NER annotations", outcome: "Structured data extraction from handwritten forms" },
  { icon: Building, industry: "Government", problem: "Multilingual search across government documents", dataset: "Multilingual corpora with entity and topic annotations", outcome: "Cross-language document retrieval system" },
];

export const metadata = createPageMetadata({
  title: "AI Training Data Solutions | Qali",
  description: "Speech, vision, and text datasets for enterprise AI. Industry-specific solutions for telecommunications, fintech, agriculture, and more.",
});

export default function SolutionsPage() {
  return (
    <>
      <Section
        eyebrow="SOLUTIONS"
        title="AI Training Data by Domain"
        description="Secure dataset delivery pipelines purpose-built for enterprise AI teams working with African languages."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {solutionCategories.map((cat) => (
            <div key={cat.title} className="glass-card flex flex-col p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/20">
                <cat.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{cat.title}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">{cat.description}</p>
              <div className="mt-6 flex-1 space-y-3">
                {cat.offerings.map((o) => (
                  <div key={o.name} className="rounded-lg border border-[#1F2937] bg-[#0F172A] p-3">
                    <p className="text-sm font-medium text-white">{o.name}</p>
                    <p className="mt-0.5 text-xs text-[#9CA3AF]">{o.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#9CA3AF]">Languages: {cat.languages}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="INDUSTRY USE CASES"
        title="Solutions by Industry"
        description="How enterprise teams use our datasets to ship AI products."
        className="bg-[#111827]"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryUseCases.map((uc) => (
            <div key={uc.industry} className="glass-card flex flex-col p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/20">
                <uc.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-white">{uc.industry}</h3>
              <div className="mt-4 flex-1 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Problem</p>
                  <p className="mt-1 text-sm text-[#D1D5DB]">{uc.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Dataset</p>
                  <p className="mt-1 text-sm text-[#D1D5DB]">{uc.dataset}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Outcome</p>
                  <p className="mt-1 text-sm font-medium text-white">{uc.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link href="/#pilot">Request pilot dataset</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
