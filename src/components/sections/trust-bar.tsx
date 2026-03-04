"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/src/components/layout/container";
import { cn } from "@/lib/utils";

const LOGO_COUNT = 5;

const trustBadges = [
  "NDA available",
  "Custom data collection",
  "On-demand annotation",
  "Secure delivery",
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
      className="border-y border-[#1F2937] bg-[#111827] py-16 md:py-20"
    >
      <Container>
        <p className="mb-8 text-center text-sm font-medium text-[#9CA3AF] sm:mb-10">
          Trusted by AI teams building for Africa
        </p>
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-8",
            "sm:gap-10 md:gap-12 lg:gap-16"
          )}
        >
          {Array.from({ length: LOGO_COUNT }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.35, delay: 0.05 * i, ease: "easeOut" }}
              className="flex h-12 w-24 shrink-0 items-center justify-center rounded-lg border border-[#1F2937] bg-[#0F172A] sm:h-14 sm:w-28 md:h-16 md:w-32"
              aria-hidden
            />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#1F2937] pt-8">
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-xs font-medium text-[#D1D5DB]">
              <span className="text-primary">&#10003;</span>
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
