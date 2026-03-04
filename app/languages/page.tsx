import Link from "next/link";
import { Mic2, FileText, ImagePlus, Globe } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/src/components/sections/section";
import { createPageMetadata } from "@/src/lib/seo";

const languageDetails = [
  {
    name: "Amharic",
    script: "Ge'ez (Fidel)",
    speakers: "~57 million",
    dialectRegions: ["Addis Ababa (standard)", "Gojjam", "Gondar", "Wollo", "Shewa"],
    phonemeChallenges: "Ejective consonants, gemination, vowel-length distinctions",
    nlpChallenges: "Complex morphology (agglutinative), no standard word segmentation, Ge'ez script OCR difficulty",
    datasets: ["ASR (120h)", "TTS (multi-speaker)", "RLHF (50M tokens)", "Document OCR (8K images)", "Retail Vision (15K images)"],
    modalities: ["Speech", "Text", "Vision"],
    totalHours: "200+",
  },
  {
    name: "Oromifa",
    script: "Latin (Qubee)",
    speakers: "~40 million",
    dialectRegions: ["Central (Shewa)", "Eastern (Harar)", "Western (Wallega)", "Southern (Borana/Guji)"],
    phonemeChallenges: "Vowel length contrast, gemination, tonal patterns in some dialects",
    nlpChallenges: "Limited digital resources, dialect variation in orthography, code-switching with Amharic",
    datasets: ["TTS (85h, multi-speaker)", "ASR (in development)"],
    modalities: ["Speech", "Text"],
    totalHours: "85+",
  },
  {
    name: "Tigrinya",
    script: "Ge'ez (Fidel)",
    speakers: "~10 million",
    dialectRegions: ["Ethiopian Tigrinya", "Eritrean Tigrinya"],
    phonemeChallenges: "Similar ejective system to Amharic, regional vowel differences",
    nlpChallenges: "Cross-border dialect variation, limited NLP tooling, Ge'ez script shared with Amharic",
    datasets: ["ASR (45h)"],
    modalities: ["Speech"],
    totalHours: "45+",
  },
  {
    name: "Somali",
    script: "Latin",
    speakers: "~25 million",
    dialectRegions: ["Northern (standard)", "Benaadir", "Maay"],
    phonemeChallenges: "Tonal system, pharyngeal consonants, vowel harmony",
    nlpChallenges: "Dialect variation between Northern and Benaadir, limited annotated corpora",
    datasets: ["ASR (60h)", "NLP corpora"],
    modalities: ["Speech", "Text"],
    totalHours: "60+",
  },
  {
    name: "Harari",
    script: "Arabic / Latin",
    speakers: "~25,000",
    dialectRegions: ["Harar city and surroundings"],
    phonemeChallenges: "Shared Semitic features with Amharic, unique lexical borrowings from Oromo and Arabic",
    nlpChallenges: "Extremely low-resource, no standard digital orthography, endangered language status",
    datasets: ["Conversational ASR (40h)", "TTS", "NLP"],
    modalities: ["Speech", "Text"],
    totalHours: "40+",
  },
];

const modalityIcons: Record<string, typeof Mic2> = {
  Speech: Mic2,
  Text: FileText,
  Vision: ImagePlus,
};

export const metadata = createPageMetadata({
  title: "African Languages | Qali",
  description: "Deep linguistic coverage for Amharic, Oromifa, Tigrinya, Somali, and Harari. Dialect-level datasets with phoneme and morphological expertise.",
});

export default function LanguagesPage() {
  return (
    <>
      <Section
        eyebrow="LANGUAGES"
        title="Low-resource languages. High-quality datasets."
        description="Native speaker workforce with deep linguistic expertise across 5 African languages."
      >
        <div className="mb-12 glass-card p-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Globe className="size-6 text-primary" />
            <p className="text-sm text-[#D1D5DB]">
              Map visualization placeholder — geographic coverage across Ethiopia and the Horn of Africa.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {languageDetails.map((lang) => (
            <div key={lang.name} className="glass-card p-6 transition-all duration-300 hover:border-primary/30">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{lang.name}</h3>
                  <p className="mt-1 text-sm text-[#9CA3AF]">
                    {lang.speakers} speakers | Script: {lang.script}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="font-mono text-xs">{lang.totalHours} hours</Badge>
                  {lang.name === "Harari" && (
                    <Badge variant="outline" className="border-amber-500/50 bg-amber-500/10 text-xs text-amber-400">
                      Low-resource
                    </Badge>
                  )}
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Dialect regions</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {lang.dialectRegions.map((d) => (
                        <span key={d} className="rounded-md border border-[#1F2937] bg-[#0F172A] px-2 py-1 text-xs text-[#D1D5DB]">{d}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Phoneme challenges</p>
                    <p className="mt-1 text-sm text-[#D1D5DB]">{lang.phonemeChallenges}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">NLP challenges</p>
                    <p className="mt-1 text-sm text-[#D1D5DB]">{lang.nlpChallenges}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Available modalities</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {lang.modalities.map((mod) => {
                        const Icon = modalityIcons[mod];
                        return (
                          <span key={mod} className="flex items-center gap-1.5 rounded-md border border-[#1F2937] bg-[#0F172A] px-2 py-1 text-xs text-[#D1D5DB]">
                            {Icon && <Icon className="size-3.5" />}
                            {mod}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Dataset types</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {lang.datasets.map((ds) => (
                        <Badge key={ds} variant="outline" className="text-xs text-[#D1D5DB]">{ds}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link href="/#request-sample">Request language-specific sample</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
