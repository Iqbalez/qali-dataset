"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Dataset } from "@/src/data/datasets";

interface DatasetCardProps {
  dataset: Dataset;
}

const modalityLabels: Record<Dataset["modality"], string> = {
  speech: "Speech",
  vision: "Vision",
  text: "Text",
};

export function DatasetCard({ dataset }: DatasetCardProps) {
  const sizeDisplay =
    dataset.hours != null
      ? `${dataset.hours}h`
      : dataset.images != null
        ? `${dataset.images.toLocaleString()} images`
        : dataset.tokens != null
          ? `${dataset.tokens} tokens`
          : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="glass-card flex h-full flex-col p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20">
        <div className="space-y-3 pb-4">
          <Badge variant="secondary" className="w-fit text-xs font-medium">
            {modalityLabels[dataset.modality]}
          </Badge>
          <h3 className="font-display text-lg font-semibold text-white">{dataset.title}</h3>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs text-[#D1D5DB]">
              {dataset.language}
            </Badge>
            {sizeDisplay && (
              <span className="font-mono text-xs tabular-nums text-[#D1D5DB]">{sizeDisplay}</span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-[#9CA3AF]">{dataset.description}</p>
          {dataset.annotationTypes && dataset.annotationTypes.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                Annotation types
              </p>
              <p className="mt-1 text-sm text-[#D1D5DB]">{dataset.annotationTypes.join(", ")}</p>
            </div>
          )}
          {dataset.collectionMethod && (
            <p className="text-xs text-[#9CA3AF]">Collection: {dataset.collectionMethod}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {dataset.qualityScore != null && (
              <Badge variant="outline" className="font-mono text-xs tabular-nums text-primary">
                {dataset.qualityScore}% QA pass
              </Badge>
            )}
            {dataset.securityBadge && (
              <Badge variant="outline" className="border-emerald-500/50 text-xs text-emerald-400">
                {dataset.securityBadge === "NDA" ? "NDA" : "Consented"}
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {dataset.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-[#D1D5DB]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <Button asChild size="sm" className="w-full sm:w-auto">
            <Link href={`/#request-sample?dataset=${dataset.id}`}>Request access</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full gap-2 border-[#374151] text-[#D1D5DB] hover:bg-[#1E293B] sm:w-auto"
            asChild
          >
            <Link href="/#request-sample">
              <Download className="size-4" />
              Overview PDF
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
