import { Languages } from "@/src/components/sections/languages";
import { createPageMetadata } from "@/src/lib/seo";

export const metadata = createPageMetadata({
  title: "African Languages | Qali",
  description:
    "High quality datasets for Amharic, Oromifa, Somali, Tigrinya, and Harari. Native speaker workforce for low-resource language AI.",
});

export default function LanguagesPage() {
  return <Languages />;
}
