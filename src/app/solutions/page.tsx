import Link from "next/link";

import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/src/lib/seo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/src/components/sections/section";

const solutions = [
  {
    title: "Speech Data",
    description:
      "High-quality transcribed and annotated speech datasets for ASR, TTS, and voice AI—recorded and validated by native speakers.",
    href: "#",
  },
  {
    title: "Text Corpora",
    description:
      "Large-scale, clean text collections for NLP training, machine translation, and language modeling in African languages.",
    href: "#",
  },
  {
    title: "RLHF",
    description:
      "Human preference data and alignment annotations for reinforcement learning from human feedback and fine-tuning.",
    href: "#",
  },
  {
    title: "Multimodal",
    description:
      "Image-text pairs, video captions, and cross-modal datasets for vision-language models and multimodal AI.",
    href: "#",
  },
  {
    title: "Custom Data Collection",
    description:
      "Bespoke datasets designed around your specs—from domain-specific terminology to specialized annotation schemas.",
    href: "#",
  },
];

export const metadata = createPageMetadata({
  title: "AI Training Data Solutions | Qali",
  description:
    "Speech, text, RLHF, and multimodal datasets for African languages. Secure delivery pipelines for enterprise AI teams.",
});

export default function SolutionsPage() {
  return (
    <Section
      title="Our Solutions"
      subtitle="AI training data built for African languages, by African speakers."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <Card key={solution.title}>
            <CardHeader>
              <CardTitle>{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{solution.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <Link href={solution.href}>Learn more</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
