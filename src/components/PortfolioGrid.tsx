"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dictionary } from "@/i18n/en";

type PortfolioGridProps = {
  dict: Dictionary;
};

type FilterValue = "All" | "Static" | "CMS" | "Custom";

export default function PortfolioGrid({ dict }: PortfolioGridProps) {
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
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => {
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "border border-white/15 text-surface/60 hover:border-brand-400/50 hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-ink-700/50"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-white/25 transition-all duration-500 group-hover:scale-125">
                    {project.title[0]}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    {dict.portfolio.viewProject}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-surface/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm text-surface/50">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}