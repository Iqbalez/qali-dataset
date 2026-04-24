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
        "bg-gradient-to-br from-primary/90 via-[#b98533] to-[#92672a]",
        "cta-pattern"
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
        aria-hidden
      />
      <Container className="relative text-center">
        <FadeIn className="flex flex-col items-center gap-8">
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Give your model local ground truth before you put it in front of local users.
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6D4B17] hover:bg-white/92 focus-visible:ring-white/50"
            >
              <Link href="/#pilot">Get a free pilot dataset</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/55 bg-white/10 text-white hover:bg-white/18 hover:text-white focus-visible:ring-white/50"
            >
              <Link href="/contact">Talk to Qali</Link>
            </Button>
          </div>

          <p className="text-sm text-white/90">We usually respond within one business day.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85">
            <span>Free pilot first</span>
            <span className="text-white/45">|</span>
            <span>No generic scraped data</span>
            <span className="text-white/45">|</span>
            <span>Mother-tongue review</span>
            <span className="text-white/45">|</span>
            <span>Custom dataset delivery</span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
