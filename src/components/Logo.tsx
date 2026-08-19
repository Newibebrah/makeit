import Link from "next/link";

export default function Logo({
  className = "",
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="MakeIt home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 19L12 5L20 19"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="15" r="1.6" fill="white" />
        </svg>
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Make<span className="text-gradient">It</span>
      </span>
    </Link>
  );
}