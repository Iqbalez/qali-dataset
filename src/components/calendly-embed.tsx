"use client";

import { Calendar } from "lucide-react";

interface CalendlyEmbedProps {
  url?: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  if (!url) {
    return (
      <div className="glass-card flex min-h-[400px] flex-col items-center justify-center gap-4 p-8">
        <Calendar className="size-12 text-[#9CA3AF]" />
        <p className="text-center text-sm font-medium text-[#D1D5DB]">
          Calendar scheduling coming soon
        </p>
        <p className="text-center text-xs text-[#9CA3AF]">
          Send us a message and we&apos;ll schedule a call within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden">
      <iframe
        src={url}
        width="100%"
        height="630"
        frameBorder="0"
        title="Schedule a call"
        className="rounded-2xl"
      />
    </div>
  );
}
