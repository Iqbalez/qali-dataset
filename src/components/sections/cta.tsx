"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Container } from "@/src/components/layout/container";
import { FadeIn } from "@/src/components/animations/fade-in";

export function CTA() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-20 md:py-28",
        "flex items-center justify-center",
        "bg-gradient-to-br from-primary/90 via-primary to-primary/80",
        "cta-pattern"
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
        aria-hidden
      />
      <Container className="relative text-center">
        <FadeIn className="flex flex-col items-center gap-8">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start building AI that understands Africa.
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 focus-visible:ring-white/50"
            >
              <Link href="/#request-sample">Request Sample</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/60 bg-white/10 text-white hover:bg-white/20 hover:text-white focus-visible:ring-white/50"
            >
              <Link href="/contact">Contact Enterprise</Link>
            </Button>
          </div>

          <p className="text-sm text-white/90">Response within 24 hours</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span>NDA available</span>
            <span className="text-white/40">|</span>
            <span>Secure transfer</span>
            <span className="text-white/40">|</span>
            <span>Consent-based data</span>
            <span className="text-white/40">|</span>
            <span>GDPR-ready</span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
