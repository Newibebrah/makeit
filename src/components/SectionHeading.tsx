import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-surface/60 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}