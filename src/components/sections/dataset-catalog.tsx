"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { DatasetCard } from "@/src/components/datasets/dataset-card";
import { datasets, type Dataset } from "@/src/data/datasets";
import { FadeIn } from "@/src/components/animations/fade-in";
import { Section } from "@/src/components/sections/section";

const modalityFilters: Array<{ value: Dataset["modality"] | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "speech", label: "Speech" },
  { value: "vision", label: "Vision" },
  { value: "text", label: "Text" },
];

const languages = ["All", "Amharic", "Harari", "Oromifa", "Somali", "Tigrinya"];
const industries = ["All", "Tech", "Research", "Retail", "Agriculture", "Education", "Media", "Telecom", "Fintech", "Government"];
const annotationTypes = ["All", "Transcript", "Bounding boxes", "Preference ranking", "OCR", "Segmentation masks", "Phoneme alignment"];

const selectClasses = "w-full rounded-lg border border-[#374151] bg-[#0F172A] px-3 py-2 text-sm text-[#E5E7EB] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

const MOBILE_INITIAL_COUNT = 3;

export function DatasetCatalog() {
  const [modality, setModality] = useState<Dataset["modality"] | "all">("all");
  const [language, setLanguage] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [annotation, setAnnotation] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = datasets.filter((d) => {
    if (modality !== "all" && d.modality !== modality) return false;
    if (language !== "All" && d.language !== language) return false;
    if (industry !== "All" && !d.industry?.includes(industry)) return false;
    if (
      annotation !== "All" &&
      !d.annotationTypes?.some((a) => a.toLowerCase().includes(annotation.toLowerCase()))
    )
      return false;
    return true;
  });

  const hasActiveFilter = modality !== "all" || language !== "All" || industry !== "All" || annotation !== "All";
  const visibleDatasets = showAll || hasActiveFilter ? filtered : filtered.slice(0, MOBILE_INITIAL_COUNT);
  const hiddenCount = filtered.length - MOBILE_INITIAL_COUNT;

  function resetFilters() {
    setModality("all");
    setLanguage("All");
    setIndustry("All");
    setAnnotation("All");
    setShowAll(false);
  }

  return (
    <Section
      id="catalog"
      eyebrow="DATASET CATALOG"
      title="What We Can Build for You"
      description="On-demand African language datasets. Each project is scoped, collected, and delivered to your specifications."
    >
      <div className="space-y-8">
        <FadeIn>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Modality</p>
            <div className="flex flex-wrap gap-2">
              {modalityFilters.map(({ value, label }) => (
                <Button
                  key={value}
                  variant={modality === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => { setModality(value); setShowAll(false); }}
                  className={
                    modality === value
                      ? ""
                      : "border-[#374151] text-[#D1D5DB] hover:bg-[#1E293B] hover:text-white"
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/80">Language</p>
              <select value={language} onChange={(e) => { setLanguage(e.target.value); setShowAll(false); }} className={selectClasses}>
                {languages.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/80">Industry</p>
              <select value={industry} onChange={(e) => { setIndustry(e.target.value); setShowAll(false); }} className={selectClasses}>
                {industries.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/80">Annotation type</p>
              <select value={annotation} onChange={(e) => { setAnnotation(e.target.value); setShowAll(false); }} className={selectClasses}>
                {annotationTypes.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>
        </FadeIn>

        <div className="flex items-center justify-between">
          <p className="text-sm text-[#9CA3AF]">
            {filtered.length} dataset{filtered.length !== 1 ? "s" : ""} found
          </p>
          {hasActiveFilter && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="text-[#9CA3AF] hover:text-white">
              Clear filters
            </Button>
          )}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {visibleDatasets.length > 0 ? (
              visibleDatasets.map((dataset) => (
                <DatasetCard key={dataset.id} dataset={dataset} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center gap-4 py-16 text-center"
              >
                <p className="text-lg font-medium text-white">No datasets match your filters</p>
                <p className="text-sm text-[#9CA3AF]">Try adjusting your criteria or clear all filters.</p>
                <Button variant="outline" size="sm" onClick={resetFilters} className="border-[#374151] text-[#D1D5DB]">
                  Clear filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {!showAll && !hasActiveFilter && hiddenCount > 0 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="border-[#374151] text-[#D1D5DB] hover:bg-[#1E293B] hover:text-white"
            >
              Show {hiddenCount} more dataset{hiddenCount !== 1 ? "s" : ""}
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
