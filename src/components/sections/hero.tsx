"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Container } from "@/src/components/layout/container";

const trustBadges = [
  "Human-verified transcriptions",
  "Consent-backed sourcing",
  "Annotation matched to the use case",
];

const previewCards = [
  {
    label: "Bank support calls",
    detail: "500 calls, speaker-tagged, transcribed, and formatted for ASR evaluation.",
    modality: "Amharic and Afaan Oromo",
    badge: "Pilot",
  },
  {
    label: "Crop disease photos",
    detail: "Field-shot leaf images labeled by annotators who understand the farming context.",
    modality: "Tomato, maize, coffee",
    badge: "Custom",
  },
  {
    label: "Legal text corpus",
    detail: "Clauses cleaned, segmented, tagged, and prepared for search or clause extraction.",
    modality: "Contracts and filings",
    badge: "Text",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#09111B] py-24 md:py-32",
        "border-b border-white/8"
      )}
    >
      <div className="hero-glow hero-glow--primary" style={{ top: "-200px", right: "-200px" }} />
      <div className="hero-glow hero-glow--accent" style={{ bottom: "-220px", left: "-220px" }} />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-18">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/8 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary"
              >
                Local datasets for enterprise AI
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight text-white md:text-7xl"
            >
              Your AI doesn&apos;t know your world. Let&apos;s fix that.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C7D2E1]"
            >
              Qali builds local datasets for voice, image, and text so your AI
              stops guessing and starts understanding your market, your
              language, and the people it is supposed to serve.
            </motion.p>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-4 max-w-2xl text-sm leading-6 text-[#8FA0B5]"
            >
              We build datasets that make models usable in Amharic, Tigrinya,
              Afaan Oromo, and other African contexts where imported data falls
              short.
            </motion.p>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-[#D6DEEA]">
                  <span className="text-primary">&#10003;</span>
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="#pilot">Get a free pilot dataset</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/10 text-[#E5EDF7] hover:bg-white/[0.06] hover:text-white"
              >
                <Link href="/#catalog">See how it works</Link>
              </Button>
            </motion.div>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-4 text-sm text-[#8FA0B5]"
            >
              Free pilot for qualified teams. Delivered in 10 business days.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card mb-4 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Sample briefs
              </p>
              <p className="mt-3 text-sm leading-6 text-[#D6DEEA]">
                Not stock datasets. Each pilot is scoped to a real workflow, a
                real language mix, and a real failure mode.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8FA0B5]">
                    Typical pilot
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">10 business days</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8FA0B5]">
                    Output
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">Training-ready</p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-4">
              {previewCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.015 }}
                  className="cursor-default"
                >
                  <div className="glass-card p-5 transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/90">
                          {card.modality}
                        </p>
                        <p className="mt-2 text-base font-semibold text-white">{card.label}</p>
                        <p className="mt-2 text-sm leading-6 text-[#9FB0C4]">{card.detail}</p>
                      </div>
                      <Badge variant="secondary" className="border border-white/8 bg-white/[0.04] text-xs text-white">
                        {card.badge}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
