"use client";

import { Mic2, ImagePlus, FileText } from "lucide-react";

import { LanguageCard } from "@/src/components/cards/language-card";
import { FadeIn } from "@/src/components/animations/fade-in";
import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

const languages = [
  {
    name: "Amharic",
    speakerCount: "120M",
    datasetTypes: ["ASR", "TTS", "RLHF"],
    hours: "200+",
    modalities: ["Speech", "Text", "Vision"],
    dialectCoverage: "Addis Ababa, Gondar, Bahir Dar",
    lowResource: false,
  },
  {
    name: "Oromifa",
    speakerCount: "40M",
    datasetTypes: ["ASR", "TTS"],
    hours: "85+",
    modalities: ["Speech", "Text"],
    dialectCoverage: "Central, Eastern",
    lowResource: false,
  },
  {
    name: "Somali",
    speakerCount: "25M",
    datasetTypes: ["ASR", "NLP"],
    hours: "60+",
    modalities: ["Speech", "Text"],
    dialectCoverage: "Northern, Benaadir",
    lowResource: false,
  },
  {
    name: "Tigrinya",
    speakerCount: "10M",
    datasetTypes: ["ASR"],
    hours: "45+",
    modalities: ["Speech"],
    dialectCoverage: "Eritrean, Ethiopian",
    lowResource: false,
  },
  {
    name: "Harari",
    speakerCount: "Low-resource",
    datasetTypes: ["ASR", "TTS", "NLP"],
    hours: "40+",
    modalities: ["Speech", "Text"],
    dialectCoverage: "Harar",
    lowResource: true,
  },
];

const modalityIcons = {
  Speech: Mic2,
  Text: FileText,
  Vision: ImagePlus,
};

export function Languages() {
  return (
    <Section
      id="languages"
      eyebrow="LANGUAGES"
      title="Low-resource languages. High-quality datasets."
      description="Native speaker workforce with low-resource language specialization."
      className={cn("relative overflow-hidden", "map-pattern bg-[#111827]")}
    >
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {languages.map((language) => (
          <FadeIn key={language.name}>
            <LanguageCard {...language} modalityIcons={modalityIcons} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
