"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Section } from "@/src/components/sections/section";
import { cn } from "@/lib/utils";

const metrics = [
  { value: 5, suffix: "+", label: "Languages", description: "African languages with native speaker validation" },
  { value: 50, suffix: "+", label: "Native Annotators", description: "Certified annotators across our network" },
  { value: 3, suffix: "", label: "QA Layers", description: "Quality checkpoints before delivery" },
  { value: 500, suffix: "+", label: "Hours Collected", description: "Transcribed and annotated audio" },
];

function AnimatedMetric({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return <span>{display.toLocaleString()}{suffix}</span>;
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      eyebrow="METRICS"
      title="Scale and reach"
      description="Production-ready infrastructure with native speaker validation."
    >
      <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="glass-card p-6 text-center">
            <p
              className={cn(
                "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
                "bg-gradient-to-r from-primary via-primary/90 to-[#818CF8]",
                "bg-clip-text text-transparent"
              )}
            >
              <AnimatedMetric target={metric.value} suffix={metric.suffix} inView={isInView} />
            </p>
            <p className="mt-2 text-sm font-medium text-white">{metric.label}</p>
            <p className="mt-1 text-xs text-[#9CA3AF]">{metric.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
