import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "pink";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300 will-change-transform";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-brand text-white shadow-glow hover:scale-[1.03] hover:shadow-glow-pink",
    pink: "bg-accent text-white shadow-glow-pink hover:scale-[1.03]",
    outline:
      "border border-white/20 text-white hover:border-brand-400 hover:bg-brand-400/10 hover:scale-[1.02]",
    ghost:
      "text-surface/70 hover:text-white hover:bg-white/5",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}