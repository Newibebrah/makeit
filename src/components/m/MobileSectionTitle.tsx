type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function MobileSectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand-300">
          <span className="h-1 w-1 rounded-full bg-accent" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm leading-relaxed text-surface/55">{subtitle}</p>
      )}
    </div>
  );
}