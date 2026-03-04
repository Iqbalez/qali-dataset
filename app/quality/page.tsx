import { createPageMetadata } from "@/src/lib/seo";
import { QualityContent } from "./quality-content";

export const metadata = createPageMetadata({
  title: "Quality & Methodology | Qali",
  description:
    "Enterprise-grade data validation pipeline. How we ensure accuracy, representativeness, and ethical standards in every dataset.",
});

export default function QualityPage() {
  return <QualityContent />;
}
