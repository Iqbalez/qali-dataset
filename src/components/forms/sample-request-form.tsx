"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const sampleIncludes = [
  "5 minutes of speech audio",
  "Aligned transcripts",
  "Speaker and session metadata",
  "QA report with inter-annotator agreement",
];

const sampleRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  companyEmail: z.string().min(1, "Email is required").email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  useCase: z.string().min(1, "Use case is required"),
  intendedUse: z.string().min(1, "Intended use is required"),
  datasetType: z.string().optional(),
  preferredFormat: z.string().optional(),
  languagesNeeded: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

type SampleRequestFormValues = z.infer<typeof sampleRequestSchema>;

const useCaseOptions = [
  "ASR / Speech recognition",
  "TTS / Voice synthesis",
  "LLM training",
  "RLHF",
  "Computer vision",
  "Multimodal",
  "Research",
  "Other",
];

const datasetTypeOptions = ["Speech", "Text", "Vision", "Multimodal", "RLHF", "Custom"];

const formatOptions = [
  "JSON",
  "JSONL",
  "CSV",
  "Parquet",
  "COCO JSON",
  "WAV + TextGrid",
  "WAV + JSON",
  "No preference",
];

const intendedUseOptions = [
  "Internal evaluation / benchmarking",
  "Model training (research)",
  "Model training (commercial product)",
  "Proof of concept / demo",
  "Academic research",
  "Other",
];

const selectClasses = "w-full rounded-lg border border-[#374151] bg-[#0F172A] px-3 py-2 text-sm text-[#E5E7EB] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const inputClasses = "border-[#374151] bg-[#0F172A] text-[#E5E7EB] placeholder:text-[#6B7280]";

export function SampleRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SampleRequestFormValues>({
    resolver: zodResolver(sampleRequestSchema),
    defaultValues: {
      name: "",
      companyEmail: "",
      company: "",
      useCase: "",
      intendedUse: "",
      datasetType: "",
      preferredFormat: "",
      languagesNeeded: "",
      timeline: "",
      message: "",
    },
  });

  async function onSubmit(data: SampleRequestFormValues) {
    setError(null);
    try {
      const res = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.companyEmail,
          company: data.company,
          useCase: data.useCase,
          intendedUse: data.intendedUse,
          datasetType: data.datasetType,
          preferredFormat: data.preferredFormat,
          languagesNeeded: data.languagesNeeded,
          timeline: data.timeline,
          message: data.message,
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error?.message ?? json.error ?? "Failed to submit");
      }
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  if (submitted) {
    return (
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4 lg:border-r lg:border-[#1F2937] lg:pr-8">
          <h3 className="text-lg font-semibold text-white">What&apos;s included</h3>
          <ul className="space-y-2 text-sm text-[#9CA3AF]">
            {sampleIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="glass-card flex flex-col items-center justify-center gap-4 p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20"
            >
              <CheckCircle2 className="size-10 text-emerald-500" />
            </motion.div>
            <p className="text-base font-medium text-white">Sample request received</p>
            <p className="text-sm text-[#9CA3AF]">Response within 24 hours. Your data is confidential.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <div className="space-y-4 lg:border-r lg:border-[#1F2937] lg:pr-8">
        <h3 className="text-lg font-semibold text-white">What&apos;s included</h3>
        <ul className="space-y-2 text-sm text-[#9CA3AF]">
          {sampleIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-primary">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-2 border-t border-[#1F2937] pt-4">
          <p className="text-xs text-[#D1D5DB]">Response within 24 hours</p>
          <p className="text-xs text-[#D1D5DB]">Your data is confidential</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {error && (
              <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>
            )}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" className={inputClasses} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Company Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@company.com" className={inputClasses} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company" className={inputClasses} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="useCase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Use case</FormLabel>
                  <FormControl>
                    <select {...field} className={selectClasses}>
                      <option value="">Select use case</option>
                      {useCaseOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="intendedUse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Intended use for sample</FormLabel>
                  <FormControl>
                    <select {...field} className={selectClasses}>
                      <option value="">How will you use this sample?</option>
                      {intendedUseOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="datasetType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Dataset type</FormLabel>
                  <FormControl>
                    <select {...field} className={selectClasses}>
                      <option value="">Select type</option>
                      {datasetTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredFormat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Preferred file format</FormLabel>
                  <FormControl>
                    <select {...field} className={selectClasses}>
                      <option value="">Select format</option>
                      {formatOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="languagesNeeded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Languages needed</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Amharic, Oromifa" className={inputClasses} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Timeline</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 4 weeks" className={inputClasses} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5E7EB]">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Additional details..."
                      className={`min-h-24 resize-none ${inputClasses}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Get Free Dataset Sample"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
