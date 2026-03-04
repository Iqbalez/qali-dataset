import {
  FileText,
  ImagePlus,
  Mic2,
  Settings2,
  ThumbsUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Mic2,
    title: "Speech Data",
    description:
      "High-quality transcribed and annotated speech datasets, recorded and validated by native speakers.",
    bullets: ["ASR", "TTS", "Code-switching", "Wake words"],
  },
  {
    icon: FileText,
    title: "Text Corpora",
    description:
      "Large-scale, clean text collections for NLP training and language modeling.",
    bullets: ["Monolingual", "Parallel", "Domain-specific", "Conversational"],
  },
  {
    icon: ThumbsUp,
    title: "RLHF",
    description:
      "Human preference data and alignment annotations for model fine-tuning.",
    bullets: ["Preference pairs", "Safety annotations", "Quality ranking", "Instruction following"],
  },
  {
    icon: ImagePlus,
    title: "Multimodal",
    description:
      "Image-text pairs and cross-modal datasets for vision-language models.",
    bullets: ["Image-text pairs", "Video captions", "Visual QA", "OCR"],
  },
  {
    icon: Settings2,
    title: "Custom Data Collection",
    description:
      "Bespoke datasets designed around your specs and annotation schemas.",
    bullets: ["Domain terminology", "Custom schemas", "Pilot projects", "Scaled collection"],
  },
];

interface FeatureCardsProps {
  title?: string;
  subtitle?: string;
}

export function FeatureCards({
  title = "Data Offerings",
  subtitle = "Production-ready datasets for African language AI.",
}: FeatureCardsProps = {}) {
  return (
    <Section
      title={title}
      subtitle={subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className={cn(
              "transition-all duration-300 hover:-translate-y-1",
              "hover:border-accent hover:shadow-lg",
              "border-border"
            )}
          >
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="size-5 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>{feature.description}</CardDescription>
              <ul className="flex flex-wrap gap-2">
                {feature.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
