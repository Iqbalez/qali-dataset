import { ArrowDown } from "lucide-react";

const layers = [
  {
    number: 1,
    title: "Native Annotation",
    description: "Certified native speakers annotate and self-review each item according to project guidelines.",
  },
  {
    number: 2,
    title: "Peer Review",
    description: "Senior annotators verify a sample of the work, ensuring consistency and catching errors.",
  },
  {
    number: 3,
    title: "Expert Audit",
    description: "Language and domain experts perform final spot-checks before dataset delivery.",
  },
];

export function QADiagram() {
  return (
    <div className="flex flex-col items-center gap-0">
      {layers.map((layer, index) => (
        <div key={layer.title} className="flex flex-col items-center">
          <div className="glass-card w-full max-w-md p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/5 text-sm font-semibold text-primary">
                {layer.number}
              </div>
              <h4 className="text-lg font-semibold text-white">{layer.title}</h4>
            </div>
            <p className="mt-2 text-sm text-[#9CA3AF]">{layer.description}</p>
          </div>

          {index < layers.length - 1 && (
            <div className="flex flex-col items-center py-3" aria-hidden>
              <ArrowDown className="size-6 text-[#374151]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
