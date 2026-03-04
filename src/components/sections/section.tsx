import { cn } from "@/lib/utils";

import { Container } from "@/src/components/layout/container";
import { FadeIn } from "@/src/components/animations/fade-in";
import { SectionHeader } from "@/src/components/ui/section-header";

interface SectionProps {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** @deprecated Use description instead */
  subtitle?: string;
  className?: string;
  id?: string;
}

export function Section({
  children,
  eyebrow,
  title,
  description,
  subtitle,
  className,
  id,
}: SectionProps) {
  const desc = description ?? subtitle;

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", className)}
    >
      <FadeIn>
        <Container>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={desc}
          />
          {children}
        </Container>
      </FadeIn>
    </section>
  );
}
