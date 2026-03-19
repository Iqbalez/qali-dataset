"use client";

import { useState } from "react";
import { Mic2, ImagePlus, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LanguageCard } from "@/src/components/cards/language-card";
import { FadeIn } from "@/src/components/animations/fade-in";
import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

const languages = [
  {
    name: "Harari",
    speakerCount: "Low-resource",
    datasetTypes: ["ASR", "TTS", "NLP"],
    hours: "40h collected",
    modalities: ["Speech", "Text"],
    dialectCoverage: "Harar",
    lowResource: true,
  },
  {
    name: "Amharic",
    speakerCount: "120M",
    datasetTypes: ["ASR", "TTS", "RLHF"],
    hours: "120h collected · expanding",
    modalities: ["Speech", "Text", "Vision"],
    dialectCoverage: "Addis Ababa, Gondar, Bahir Dar",
    lowResource: false,
  },
  {
    name: "Oromifa",
    speakerCount: "40M",
    datasetTypes: ["ASR", "TTS"],
    hours: "85h collected",
    modalities: ["Speech", "Text"],
    dialectCoverage: "Central, Eastern",
    lowResource: false,
  },
  {
    name: "Somali",
    speakerCount: "25M",
    datasetTypes: ["ASR", "NLP"],
    hours: "60h collected",
    modalities: ["Speech", "Text"],
    dialectCoverage: "Northern, Benaadir",
    lowResource: false,
  },
  {
    name: "Tigrinya",
    speakerCount: "10M",
    datasetTypes: ["ASR"],
    hours: "45h collected",
    modalities: ["Speech"],
    dialectCoverage: "Eritrean, Ethiopian",
    lowResource: false,
  },
];

const INITIAL_COUNT = 3;

const modalityIcons = {
  Speech: Mic2,
  Text: FileText,
  Vision: ImagePlus,
};

export function Languages() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? languages : languages.slice(0, INITIAL_COUNT);
  const hiddenCount = languages.length - INITIAL_COUNT;

  return (
    <Section
      id="languages"
      eyebrow="LANGUAGES"
      title="Low-resource languages. High-quality datasets."
      description="Native speaker workforce with low-resource language specialization."
      className={cn("relative overflow-hidden", "map-pattern bg-[#111827]")}
    >
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((language) => (
          <FadeIn key={language.name}>
            <LanguageCard {...language} modalityIcons={modalityIcons} />
          </FadeIn>
        ))}
      </div>

      {!showAll && hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="border-[#374151] text-[#D1D5DB] hover:bg-[#1E293B] hover:text-white"
          >
            See {hiddenCount} more language{hiddenCount !== 1 ? "s" : ""}
          </Button>
        </div>
      )}
    </Section>
  );
}
