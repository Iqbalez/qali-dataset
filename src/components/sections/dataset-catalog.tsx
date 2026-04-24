import { Section } from "@/src/components/sections/section";

const workflowCards = [
  {
    title: "Pilot Dataset",
    label: "Step 01",
    meta: "10 business days | zero cost",
    body:
      "A small, targeted sample built for your exact use case. You test it on your stack, measure the lift, and decide whether a larger engagement is worth it.",
    example:
      "Example: 500 transcribed Amharic customer service calls for a bank chatbot pilot.",
  },
  {
    title: "Full Custom Dataset",
    label: "Step 02",
    meta: "Custom timeline | production scope",
    body:
      "Volume, annotation complexity, and structure are tailored to your production requirements. We handle sourcing, cleaning, labeling, and QA, then deliver the dataset in a format your team can use immediately.",
    example:
      "Example: 50,000 labeled images for crop disease detection across Ethiopian farms.",
  },
];

export function DatasetCatalog() {
  return (
    <Section
      id="catalog"
      eyebrow="PILOT TO CUSTOM"
      title="Start with a pilot. Scale to custom."
      description="You should not commit budget to a full dataset before seeing whether local data actually changes model behavior. So we do not ask you to."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {workflowCards.map((card) => (
          <div
            key={card.title}
            className="glass-card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 lg:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {card.label}
              </p>
              <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8FA0B5]">
                {card.meta}
              </span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold text-white">{card.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-[#C7D2E1]">{card.body}</p>

            <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/90">
                Example brief
              </p>
              <p className="mt-2 text-sm leading-6 text-[#9FB0C4]">{card.example}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
