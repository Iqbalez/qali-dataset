import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  if (!eyebrow && !title && !description) return null;

  return (
    <div className={cn("mb-8 sm:mb-12", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3 max-w-2xl text-[#9CA3AF] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
