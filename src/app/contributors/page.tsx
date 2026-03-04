import {
  DollarSign,
  Laptop,
  Sparkles,
  Users,
} from "lucide-react";

import { ContributorApplicationForm } from "@/src/components/forms/contributor-application-form";
import { Section } from "@/src/components/sections/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Fair Compensation",
    description:
      "Competitive pay for your time and expertise. We believe in valuing native speakers properly.",
  },
  {
    icon: Laptop,
    title: "Work Remotely",
    description:
      "Contribute from anywhere with a reliable internet connection. Set your own schedule within project deadlines.",
  },
  {
    icon: Sparkles,
    title: "Skill Development",
    description:
      "Gain experience in AI data annotation, quality assurance, and linguistic technology.",
  },
  {
    icon: Users,
    title: "Meaningful Impact",
    description:
      "Help build AI systems that understand and serve African languages and communities.",
  },
];

const requirements = [
  "Native or near-native fluency in one or more of our supported languages",
  "Reliable internet connection and a quiet environment for recording/annotation",
  "Strong attention to detail and consistency",
  "Ability to follow guidelines and complete calibration tasks",
  "Commitment to meet project deadlines",
];

export const metadata = {
  title: "African Language AI Data | Qali",
  description:
    "High quality African language datasets for LLMs, ASR, and RLHF.",
};

export default function ContributorsPage() {
  return (
    <>
      <Section
        title="Become a Contributor"
        subtitle="Join our network of native speakers helping build the future of African language AI."
      >
        <div className="space-y-16">
          {/* Benefits */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Benefits
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Requirements
            </h2>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Form */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Apply Now
            </h2>
            <div className="mx-auto max-w-lg">
              <ContributorApplicationForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
