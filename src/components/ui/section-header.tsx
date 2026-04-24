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
    <div className={cn("mb-10 sm:mb-14", className)}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-3xl text-[#9FB0C4] sm:text-[1.05rem]">
          {description}
        </p>
      )}
    </div>
  );
}
