"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/src/components/layout/container";
import { cn } from "@/lib/utils";

const focusAreas = [
  "Call-center audio",
  "Farm imagery",
  "KYC documents",
  "Support tickets",
  "IVR speech",
];

const trustBadges = [
  "Free pilot in 10 business days",
  "Real local data",
  "Mother-tongue review",
  "Training-ready delivery",
];

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border-y border-white/8 bg-[#0E1723] py-16 md:py-20"
    >
      <Container>
        <p className="mx-auto mb-8 max-w-4xl text-center text-sm font-medium leading-6 text-[#9FB0C4] sm:mb-10">
          We build for markets where language, currency, regulation, and daily
          behavior do not map cleanly to imported datasets.
        </p>
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-4",
            "sm:gap-5 md:gap-6"
          )}
        >
          {focusAreas.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.35, delay: 0.05 * i, ease: "easeOut" }}
              className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs font-medium text-[#D8E1EC]"
            >
              {label}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/8 pt-8">
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-xs font-medium text-[#D8E1EC]">
              <span className="text-primary">&#10003;</span>
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
