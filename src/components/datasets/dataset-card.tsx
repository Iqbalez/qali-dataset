"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, FlaskConical, Shield, Users } from "lucide-react";

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

const statusConfig: Record<Dataset["status"], { label: string; color: string }> = {
  available: { label: "Available", color: "border-emerald-500/50 text-emerald-400" },
  "in-progress": { label: "In progress", color: "border-amber-500/50 text-amber-400" },
  pilot: { label: "Pilot", color: "border-blue-500/50 text-blue-400" },
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

  const status = statusConfig[dataset.status];

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
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 pb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {modalityLabels[dataset.modality]}
          </Badge>
          <Badge variant="outline" className={`text-xs ${status.color}`}>
            {status.label}
          </Badge>
        </div>
        <h3 className="font-display text-lg font-semibold text-white">{dataset.title}</h3>

        <div className="mt-4 flex-1 space-y-4">
          {/* Size + language */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs text-[#D1D5DB]">{dataset.language}</Badge>
            {sizeDisplay && (
              <span className="font-mono text-xs tabular-nums text-[#D1D5DB]">{sizeDisplay}</span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-[#9CA3AF]">{dataset.description}</p>

          {/* Transparent metadata */}
          <div className="space-y-2 rounded-lg border border-[#1F2937] bg-[#0B0F19]/50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Metadata</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <span className="text-[#9CA3AF]">Version</span>
              <span className="text-[#D1D5DB]">v{dataset.version}</span>
              <span className="text-[#9CA3AF]">Updated</span>
              <span className="text-[#D1D5DB]">{dataset.lastUpdated}</span>
              <span className="text-[#9CA3AF]">Format</span>
              <span className="text-[#D1D5DB]">{dataset.deliveryFormat}</span>
              <span className="text-[#9CA3AF]">License</span>
              <span className="text-[#D1D5DB]">{dataset.license}</span>
              <span className="text-[#9CA3AF]">Collection</span>
              <span className="text-[#D1D5DB]">{dataset.collectionMethod}</span>
              {dataset.demographics && (
                <>
                  <span className="text-[#9CA3AF]">Demographics</span>
                  <span className="text-[#D1D5DB]">{dataset.demographics}</span>
                </>
              )}
            </div>
          </div>

          {/* Proof of quality */}
          <div className="space-y-2 rounded-lg border border-[#1F2937] bg-[#0B0F19]/50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Quality proof</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#D1D5DB]">
                <CheckCircle2 className="size-3 text-emerald-400" />
                IAA: {dataset.qualityDetails.iaa}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D1D5DB]">
                <Clock className="size-3 text-primary" />
                {dataset.qualityDetails.reviewStages}-stage review
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D1D5DB]">
                <Users className="size-3 text-primary" />
                {dataset.qualityDetails.nativeSpeakers ? "Native speakers" : "Trained annotators"}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D1D5DB]">
                {dataset.qualityDetails.biasChecked ? (
                  <><Shield className="size-3 text-emerald-400" />Bias checked</>
                ) : (
                  <><FlaskConical className="size-3 text-[#9CA3AF]" />Bias check planned</>
                )}
              </div>
            </div>
          </div>

          {/* Annotation types */}
          {dataset.annotationTypes.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Annotations</p>
              <p className="mt-1 text-sm text-[#D1D5DB]">{dataset.annotationTypes.join(", ")}</p>
            </div>
          )}

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className={`text-xs ${status.color}`}>
              {dataset.securityBadge === "NDA" ? "NDA required" : "Consented data"}
            </Badge>
            {dataset.sampleAvailable && (
              <Badge variant="outline" className="border-emerald-500/50 text-xs text-emerald-400">
                Sample available
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          {dataset.sampleAvailable ? (
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link href={`/#request-sample?dataset=${dataset.id}`}>Request sample</Link>
            </Button>
          ) : (
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link href="/contact">Contact for access</Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
