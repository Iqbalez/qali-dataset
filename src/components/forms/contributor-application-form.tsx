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

const contributorApplicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  languages: z.string().min(1, "Please list your native language(s)"),
  experience: z.string().min(1, "Please describe your experience"),
  availability: z.string().optional(),
});

type ContributorApplicationFormValues = z.infer<typeof contributorApplicationSchema>;

const inputClasses = "border-[#374151] bg-[#0F172A] text-[#E5E7EB] placeholder:text-[#6B7280]";

export function ContributorApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContributorApplicationFormValues>({
    resolver: zodResolver(contributorApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      languages: "",
      experience: "",
      availability: "",
    },
  });

  function onSubmit(_data: ContributorApplicationFormValues) {
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="glass-card flex flex-col items-center justify-center gap-4 p-8 text-center">
        <CheckCircle2 className="size-12 text-emerald-500" />
        <div>
          <h3 className="text-lg font-semibold text-white">Application received</h3>
          <p className="mt-2 text-sm text-[#9CA3AF]">
            We&apos;ll review your application and get back to you within a few business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#E5E7EB]">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" className={inputClasses} {...field} />
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
              <FormLabel className="text-[#E5E7EB]">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" className={inputClasses} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#E5E7EB]">Native Language(s)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Amharic, Oromo, Somali" className={inputClasses} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#E5E7EB]">Experience</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any annotation, translation, or linguistic experience..."
                  className={`min-h-24 resize-none ${inputClasses}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#E5E7EB]">Availability (optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 10-15 hrs/week, flexible" className={inputClasses} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}
