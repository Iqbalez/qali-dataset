import { FileCheck, Shield, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/src/components/forms/contact-form";
import { CalendlyEmbed } from "@/src/components/calendly-embed";
import { createPageMetadata } from "@/src/lib/seo";
import { Section } from "@/src/components/sections/section";

export const metadata = createPageMetadata({
  title: "Contact Us | Qali",
  description: "Get in touch for custom datasets, enterprise inquiries, or partnership opportunities.",
});

export default function ContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <Section
      eyebrow="CONTACT"
      title="Enterprise Inquiry"
      description="Get in touch for custom datasets, enterprise projects, or partnership opportunities."
    >
      <div className="mb-12 flex flex-wrap items-center gap-4">
        <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-[#D1D5DB]">
          <FileCheck className="size-3.5" />
          Response within 24 hours
        </Badge>
        <Badge variant="outline" className="px-3 py-1 text-[#D1D5DB]">NDA available</Badge>
      </div>
      <div className="mb-12 flex flex-wrap gap-6 text-sm text-[#9CA3AF]">
        <span className="flex items-center gap-2">
          <Shield className="size-4 text-primary" />
          Secure transfer
        </span>
        <span className="flex items-center gap-2">
          <Lock className="size-4 text-primary" />
          Consent-based data
        </span>
        <span>GDPR-ready</span>
      </div>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-6 text-xl font-semibold text-white">Send a message</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="mb-6 text-xl font-semibold text-white">Schedule a call</h2>
          <CalendlyEmbed url={calendlyUrl} />

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-white">Direct contact</h3>
            <div className="space-y-3 text-sm text-[#D1D5DB]">
              <p>
                <span className="text-[#9CA3AF]">Email: </span>
                <a href="mailto:contact@qali.et" className="text-primary hover:text-primary/80">
                  contact@qali.et
                </a>
              </p>
              <p>
                <span className="text-[#9CA3AF]">Location: </span>
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
