"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  workEmail: z.string().min(1, "Work email is required").email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  useCase: z.string().min(1, "Use case is required"),
  datasetType: z.string().optional(),
  languagesNeeded: z.string().optional(),
  timeline: z.string().optional(),
  ndaRequired: z.boolean().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const useCaseOptions = [
  "ASR / Speech recognition",
  "TTS / Voice synthesis",
  "LLM training",
  "RLHF",
  "Computer vision",
  "Multimodal",
  "Custom data collection",
  "Other",
];

const datasetTypeOptions = ["Speech", "Text", "Vision", "Multimodal", "RLHF", "Custom"];

const selectClasses = "w-full rounded-lg border border-[#374151] bg-[#0F172A] px-3 py-2 text-sm text-[#E5E7EB] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const inputClasses = "border-[#374151] bg-[#0F172A] text-[#E5E7EB] placeholder:text-[#6B7280]";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      workEmail: "",
      company: "",
      useCase: "",
      datasetType: "",
      languagesNeeded: "",
      timeline: "",
      ndaRequired: false,
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.workEmail,
          company: data.company,
          useCase: data.useCase,
          datasetType: data.datasetType,
          languagesNeeded: data.languagesNeeded,
          timeline: data.timeline,
          message: data.message,
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error?.message ?? json.error ?? "Failed to send");
      }
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  if (submitted) {
    return (
      <div className="glass-card flex flex-col items-center justify-center gap-4 p-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20">
          <CheckCircle2 className="size-10 text-emerald-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Message sent</h3>
          <p className="mt-2 text-sm text-[#9CA3AF]">
            We&apos;ll get back to you within 24 hours. Your data is confidential.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <p className="text-xs text-[#D1D5DB]">
          Response within 24 hours. Your data is confidential.
        </p>
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
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#E5E7EB]">Work Email</FormLabel>
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
                  {useCaseOptions.map((type) => (
                    <option key={type} value={type}>{type}</option>
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
                  {datasetTypeOptions.map((type) => (
                    <option key={type} value={type}>{type}</option>
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
          name="ndaRequired"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="size-4 rounded border-[#374151] bg-[#0F172A] accent-primary"
                />
              </FormControl>
              <FormLabel className="!mt-0 text-sm text-[#D1D5DB]">NDA required</FormLabel>
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
                  placeholder="Tell us about your project..."
                  className={`min-h-32 resize-none ${inputClasses}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
