"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/en";

type FilterValue = "All" | "Static" | "CMS" | "Custom";

export default function MobilePortfolioGrid({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState<FilterValue>("All");

  const filters: { value: FilterValue; label: string }[] = [
    { value: "All", label: dict.portfolio.filters.all },
    { value: "Static", label: dict.portfolio.filters.static },
    { value: "CMS", label: dict.portfolio.filters.cms },
    { value: "Custom", label: dict.portfolio.filters.custom },
  ];

  const projects =
    active === "All"
      ? dict.portfolio.projects
      : dict.portfolio.projects.filter((p) => p.category === active);

  return (
    <div className="px-4">
      <div className="mb-4 flex gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((filter) => {
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`shrink-0 rounded-full px-4 py-2 font-display text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "border border-white/15 text-surface/60"
              }`}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-ink-700/40"
          >
            <div
              className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              <span className="absolute inset-0 flex items-center justify-center font-display text-2xl font-bold text-white/25">
                {project.title[0]}
              </span>
            </div>
            <div className="p-3">
              <p className="font-display text-[13px] font-bold leading-snug text-white">
                {project.title}
              </p>
              <p className="mt-1 text-[11px] text-surface/50">
                {project.tags.slice(0, 2).join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}