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
  "A small dataset matched to your use case",
  "Delivered in 10 business days",
  "Structured for training or evaluation",
  "A low-risk way to validate fit before full scope",
];

const sampleRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  need: z.string().min(1, "Please tell us what you need data for"),
});

type SampleRequestFormValues = z.infer<typeof sampleRequestSchema>;

const inputClasses = "border-white/10 bg-white/[0.03] text-[#E5EDF7] placeholder:text-[#708199] focus-visible:ring-primary/40";

export function SampleRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SampleRequestFormValues>({
    resolver: zodResolver(sampleRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      need: "",
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
          email: data.email,
          company: data.company,
          useCase: data.need,
          message: data.need,
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
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4 lg:border-r lg:border-white/8 lg:pr-8">
          <h3 className="text-lg font-semibold text-white">What arrives first</h3>
          <ul className="space-y-2 text-sm text-[#9FB0C4]">
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
              <CheckCircle2 className="size-10 text-emerald-400" />
            </motion.div>
            <p className="text-base font-medium text-white">Pilot request received</p>
            <p className="text-sm text-[#9FB0C4]">
              We usually respond within one business day.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-4 lg:border-r lg:border-white/8 lg:pr-8">
        <h3 className="text-lg font-semibold text-white">What arrives first</h3>
        <ul className="space-y-2 text-sm text-[#9FB0C4]">
          {sampleIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-primary">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
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
                  <FormLabel className="text-[#E5EDF7]">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" className={inputClasses} {...field} />
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
                  <FormLabel className="text-[#E5EDF7]">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company" className={inputClasses} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5EDF7]">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@company.com" className={inputClasses} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="need"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#E5EDF7]">What do you need data for?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Example: We need Amharic support-call transcripts to improve a bank chatbot."
                      className={`min-h-32 resize-none ${inputClasses}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting} suppressHydrationWarning>
              {form.formState.isSubmitting ? "Submitting..." : "Send me a pilot"}
            </Button>
            <p className="text-center text-xs text-[#9FB0C4]">
              We usually respond within one business day.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
