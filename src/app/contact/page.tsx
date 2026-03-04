import { Calendar } from "lucide-react";

import { ContactForm } from "@/src/components/forms/contact-form";
import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "African Language AI Data | Qali",
  description:
    "High quality African language datasets for LLMs, ASR, and RLHF.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        title="Contact Us"
        subtitle="Get in touch for custom datasets, enterprise inquiries, or partnership opportunities."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Send a message
            </h2>
            <ContactForm />
          </div>

          {/* Calendly placeholder */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Schedule a call
            </h2>
            <div
              className={cn(
                "flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed bg-muted/20 p-8"
              )}
            >
              <Calendar className="size-12 text-muted-foreground" />
              <p className="text-center text-sm font-medium text-muted-foreground">
                Calendly integration
              </p>
              <p className="text-center text-xs text-muted-foreground">
                Embed your Calendly link or iframe here to let visitors book a meeting.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
