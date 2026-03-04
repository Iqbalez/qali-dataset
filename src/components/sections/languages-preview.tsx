import Link from "next/link";

import { Button } from "@/components/ui/button";
import { LanguageCard } from "@/src/components/cards/language-card";
import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

const languages = [
  { name: "Amharic", speakerCount: "32M+", datasetTypes: ["Speech", "Text", "RLHF"] },
  { name: "Oromifa", speakerCount: "37M+", datasetTypes: ["Speech", "Text", "Multimodal"] },
  { name: "Harari", speakerCount: "50K+", datasetTypes: ["Speech", "Text"] },
  { name: "Somali", speakerCount: "22M+", datasetTypes: ["Speech", "Text", "RLHF", "Multimodal"] },
  { name: "Tigrinya", speakerCount: "7M+", datasetTypes: ["Speech", "Text", "RLHF"] },
];

export function LanguagesPreview() {
  return (
    <Section
      id="languages"
      title="Languages"
      subtitle="High-quality datasets for African languages, collected and annotated by native speakers."
      className={cn("relative overflow-hidden", "map-pattern bg-muted/20")}
    >
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {languages.map((language) => (
          <LanguageCard key={language.name} {...language} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/languages">View all languages</Link>
        </Button>
      </div>
    </Section>
  );
}
