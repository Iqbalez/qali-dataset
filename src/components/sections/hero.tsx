"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Container } from "@/src/components/layout/container";

const trustBadges = [
  "NDA available",
  "Enterprise security",
  "Human-verified annotations",
  "24-hour response",
];

const previewCards = [
  { label: "Amharic ASR", detail: "120h corpus", modality: "Speech", badge: "Available" },
  { label: "Harari Speech", detail: "40h conversational", modality: "Speech", badge: "Available" },
  { label: "Oromifa TTS", detail: "85h multi-speaker", modality: "Speech", badge: "Available" },
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
        "bg-[#0B0F19] py-24 md:py-32",
        "border-b border-[#1F2937]"
      )}
    >
      <div className="hero-glow hero-glow--primary" style={{ top: "-200px", right: "-200px" }} />
      <div className="hero-glow hero-glow--accent" style={{ bottom: "-200px", left: "-200px" }} />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="max-w-xl"
          >
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="font-display text-5xl font-semibold tracking-tight text-white md:text-6xl"
            >
              Production-ready African AI datasets.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-6 text-lg leading-relaxed text-[#D1D5DB]"
            >
              Speech, vision, and multilingual data across real-world Ethiopian
              environments. Built by native speakers. Verified by linguists.
            </motion.p>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-[#D1D5DB]">
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
                <Link href="#request-sample">Request Sample</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#374151] text-[#E5E7EB] hover:bg-[#1E293B] hover:text-white"
              >
                <Link href="/#catalog">View Datasets</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative flex flex-col gap-4">
              {previewCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-default"
                >
                  <div className="glass-card overflow-hidden p-5 transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{card.label}</p>
                        <p className="mt-1 text-sm text-[#9CA3AF]">{card.modality} · {card.detail}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
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
