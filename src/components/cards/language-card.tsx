"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface LanguageCardProps {
  name: string;
  speakerCount: string;
  datasetTypes: string[];
  hours?: string;
  modalities?: string[];
  dialectCoverage?: string;
  lowResource?: boolean;
  modalityIcons?: Record<string, LucideIcon>;
}

export function LanguageCard({
  name,
  speakerCount,
  datasetTypes,
  hours,
  modalities,
  dialectCoverage,
  lowResource = false,
  modalityIcons = {},
}: LanguageCardProps) {
  return (
    <div className="glass-card flex h-full flex-col p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
      <div className="flex flex-row items-start gap-4">
        <div
          className="flex h-10 w-14 shrink-0 items-center justify-center rounded-md border border-[#1F2937] bg-[#0F172A]"
          aria-hidden
        />
        <div className="min-w-0 flex-1 space-y-2">
          <h3 className="font-display font-semibold text-white">{name}</h3>
          {lowResource ? (
            <Badge variant="outline" className="border-amber-500/50 bg-amber-500/10 text-xs text-amber-400">
              Low-resource language
            </Badge>
          ) : (
            <Badge variant="secondary" className="text-xs">{speakerCount} speakers</Badge>
          )}
        </div>
      </div>

      <div className="mt-4 flex-1 space-y-4">
        {hours && (
          <p className="font-mono text-sm tabular-nums text-[#D1D5DB]">{hours}</p>
        )}
        {modalities && modalities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {modalities.map((mod) => {
              const Icon = modalityIcons[mod];
              return (
                <span
                  key={mod}
                  className="flex items-center gap-1.5 rounded-md border border-[#1F2937] bg-[#0F172A] px-2 py-1 text-xs text-[#D1D5DB]"
                >
                  {Icon && <Icon className="size-3.5" />}
                  {mod}
                </span>
              );
            })}
          </div>
        )}
        {dialectCoverage && (
          <p className="text-xs text-[#9CA3AF]">Dialect coverage: {dialectCoverage}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {datasetTypes.map((type) => (
            <Badge key={type} variant="outline" className="text-xs text-[#D1D5DB]">{type}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-2">
        <Button asChild size="sm" className="w-full sm:w-auto">
          <Link href="/#pilot">Request pilot</Link>
        </Button>
      </div>
    </div>
  );
}
