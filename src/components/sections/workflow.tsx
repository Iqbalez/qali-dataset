"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Section } from "@/src/components/sections/section";

const steps = [
  {
    label: "You tell us the goal.",
    description:
      "Chatbot for Amharic support? Voice assistant for an IVR? Crop disease detection from photos? We listen.",
  },
  {
    label: "We deliver a pilot.",
    description:
      "A small, high-quality dataset that proves what is possible. No risk.",
  },
  {
    label: "You train & test.",
    description:
      "See the accuracy jump when your model is fed local truth.",
  },
  {
    label: "We scale to full dataset.",
    description:
      "Custom volume, custom annotation, custom structure. On your timeline.",
  },
  {
    label: "You integrate.",
    description:
      "Your AI goes live knowing your world. And we remain on standby for updates.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.1 * i },
  }),
};

export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section
      eyebrow="WORKFLOW"
      title="Five steps. No mystery."
      description="You bring the problem. We bring the local data operation."
      className="bg-[#111827]"
    >
      <div ref={ref}>
        <div className="hidden md:block">
          <div className="relative flex items-start">
            <motion.div
              className="absolute left-0 right-0 top-7 h-0.5 origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {steps.map((step, index) => (
              <Fragment key={step.label}>
                <motion.div
                  className="relative z-10 flex flex-1 flex-col items-center"
                  variants={stepVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-[#0B0F19] text-base font-semibold text-primary transition-colors hover:border-primary/80 hover:ring-2 hover:ring-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label={`Step ${index + 1}: ${step.label}`}
                        suppressHydrationWarning
                      >
                        {index + 1}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={12} className="max-w-xs border-0 px-4 py-3 text-sm">
                      <p className="font-semibold">{step.label}</p>
                      <p className="mt-1 font-normal opacity-90">{step.description}</p>
                    </TooltipContent>
                  </Tooltip>
                  <p className="mt-4 max-w-36 text-center text-sm font-medium text-white">
                    {step.label}
                  </p>
                </motion.div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:hidden">
          {steps.map((step, index) => (
            <Fragment key={step.label}>
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-[#0B0F19] text-sm font-semibold text-primary transition-colors hover:border-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`Step ${index + 1}: ${step.label}`}
                      suppressHydrationWarning
                    >
                      {index + 1}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={8} className="max-w-xs border-0 px-4 py-3 text-sm">
                    <p className="font-semibold">{step.label}</p>
                    <p className="mt-1 font-normal opacity-90">{step.description}</p>
                  </TooltipContent>
                </Tooltip>
                <div className="pt-2">
                  <p className="text-sm font-medium text-white">{step.label}</p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">{step.description}</p>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="ml-5 mt-2 h-6 w-0.5 bg-primary/30" aria-hidden />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}
