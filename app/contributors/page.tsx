import { createPageMetadata } from "@/src/lib/seo";
import { ContributorsContent } from "./contributors-content";

export const metadata = createPageMetadata({
  title: "Contributors & Enterprise | Qali",
  description:
    "Join our annotator network or leverage our scalable workforce for enterprise AI data projects.",
});

export default function ContributorsPage() {
  return <ContributorsContent />;
}
