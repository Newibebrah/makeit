"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "./Button";
import type { Dictionary } from "@/i18n/en";

type Status = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  dict: Dictionary["contact"];
};

function PlanPrefill({ onPlan }: { onPlan: (plan: string) => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const p = searchParams.get("plan");
    if (p) onPlan(p);
  }, [searchParams, onPlan]);

  return null;
}

function ContactFormInner({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    hosting: false,
  });

  const update = (field: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const setPlan = (p: string) => {
    const index = p === "static" ? 0 : p === "cms" ? 1 : p === "custom" ? 2 : -1;
    if (index >= 0) {
      setForm((prev) => ({ ...prev, projectType: dict.projectTypes[index] }));
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-white/15 bg-ink/70 px-5 py-3.5 text-sm text-white placeholder:text-surface/40 outline-none transition-all duration-300 focus:border-brand-400 focus:shadow-glow";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          subject: `New project inquiry from ${form.name} (${form.company || "no company"})`,
          from_name: "MakeIt Website",
          name: form.name,
          email: form.email,
          company: form.company,
          project_type: form.projectType,
          budget: form.budget,
          hosting_management: form.hosting ? "Yes" : "No",
          message: form.message,
          botcheck: "",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
        hosting: false,
      });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-brand-400/40 bg-brand-400/10 p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-3xl shadow-glow">
          ✓
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white">{dict.successTitle}</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-surface/60">
          {dict.successDesc}
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          {dict.successAgain}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-ink-700/50 p-8 sm:p-10"
    >
      <h2 className="text-2xl font-bold text-white">{dict.formTitle}</h2>
      <p className="mt-2 text-sm text-surface/60">{dict.formSubtitle}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-surface/40"
          >
            {dict.name} *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={dict.namePh}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-surface/40"
          >
            {dict.email} *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={dict.emailPh}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="company"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-surface/40"
        >
          {dict.company}
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder={dict.companyPh}
          className={inputClass}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-surface/40"
          >
            {dict.projectType} *
          </label>
          <select
            id="projectType"
            required
            value={form.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={`${inputClass} appearance-none [&>option]:bg-ink`}
          >
            <option value="" disabled>
              {dict.projectTypePh}
            </option>
            {dict.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-surface/40"
          >
            {dict.budget} *
          </label>
          <select
            id="budget"
            required
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={`${inputClass} appearance-none [&>option]:bg-ink`}
          >
            <option value="" disabled>
              {dict.budgetPh}
            </option>
            {dict.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-surface/40"
        >
          {dict.message} *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={dict.messagePh}
          className={`${inputClass} resize-none`}
        />
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-ink/60 p-4">
        <input
          type="checkbox"
          checked={form.hosting}
          onChange={(e) => update("hosting", e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-brand-400"
        />
        <span className="text-sm text-surface/60">{dict.hostingHelp}</span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm text-accent-400">
          {dict.error}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-8 w-full">
        {status === "submitting" ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            {dict.submitting}
          </>
        ) : (
          dict.submit
        )}
      </Button>

      <Suspense fallback={null}>
        <PlanPrefill onPlan={setPlan} />
      </Suspense>
    </form>
  );
}

export default function ContactForm({ dict }: ContactFormProps) {
  return <ContactFormInner dict={dict} />;
}