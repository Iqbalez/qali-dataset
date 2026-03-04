import { about, whyUs } from "@/data/content";
import { Section } from "@/src/components/sections/section";

export function About() {
  return (
    <Section
      title="About"
      subtitle={about.mission}
    >
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">
          Why us
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {whyUs.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-muted-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
