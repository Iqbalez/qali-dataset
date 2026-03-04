import type { Metadata } from "next";

const BASE_KEYWORDS = [
  "African language datasets",
  "Amharic speech dataset",
  "RLHF African languages",
  "Low-resource language AI data",
];

interface GenerateMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  keywords = [],
}: GenerateMetadataOptions): Metadata {
  const allKeywords = [...BASE_KEYWORDS, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
  };
}
