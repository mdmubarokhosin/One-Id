"use client";

import { motion } from "framer-motion";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "../language-provider";

type LocalizedText = { bn: string; en: string };

export function PageHeader({ title }: { title: LocalizedText }) {
  const { locale } = useLanguage();
  return (
    <div className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <i className="bi bi-house-door" />
          <span>/</span>
          <span className="font-medium text-foreground">{t(title, locale)}</span>
        </nav>
        <h1 className={locale === "bn" ? "font-bangla text-2xl font-bold text-foreground sm:text-3xl" : "font-en text-2xl font-bold text-foreground sm:text-3xl"}>
          {t(title, locale)}
        </h1>
      </div>
    </div>
  );
}

export function AboutPage() {
  const { locale } = useLanguage();
  return (
    <div className="animate-fade-up">
      <PageHeader title={i18n.about.title} />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
            {t(i18n.about.intro, locale)}
          </p>
        </motion.div>

        {/* D-STAR project */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.45_0.13_158/0.12)] text-[oklch(0.45_0.13_158)]">
              <i className="bi bi-diagram-3 text-xl" />
            </div>
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              {t(i18n.about.projectTitle, locale)}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
            {t(i18n.about.projectDesc, locale)}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { icon: "bi-calendar3", label: locale === "bn" ? "মেয়াদ" : "Timeline", val: locale === "bn" ? "২০২৬–২০৩১" : "2026–2031" },
              { icon: "bi-building", label: locale === "bn" ? "বাস্তবায়নকারী" : "Implementer", val: locale === "bn" ? "বাংলাদেশ কম্পিউটার কাউন্সিল" : "Bangladesh Computer Council" },
              { icon: "bi-bank", label: locale === "bn" ? "অর্থায়ন" : "Funding", val: locale === "bn" ? "সরকার + বিশ্বব্যাংক" : "Govt + World Bank" },
            ].map((b, i) => (
              <div key={i} className="rounded-xl border border-border bg-muted/40 p-4">
                <i className={`${b.icon} text-lg text-[oklch(0.42_0.16_25)]`} />
                <div className="mt-2 text-xs text-muted-foreground">{b.label}</div>
                <div className="text-sm font-semibold text-foreground">{b.val}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Concept */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-[oklch(0.42_0.16_25/0.2)] bg-gradient-to-br from-[oklch(0.42_0.16_25/0.04)] to-[oklch(0.45_0.13_158/0.04)] p-6 shadow-sm sm:p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.42_0.16_25/0.10)] text-[oklch(0.42_0.16_25)]">
              <i className="bi bi-lightbulb text-xl" />
            </div>
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              {t(i18n.about.conceptTitle, locale)}
            </h2>
          </div>
          <blockquote className="border-l-4 border-[oklch(0.42_0.16_25)] pl-4 text-sm font-medium italic text-foreground/90 sm:text-base">
            “{locale === "bn" ? "একজন নাগরিক, একটি ডিজিটাল পরিচয়, একটি ওয়ালেট" : "One Citizen, One Digital ID, One Wallet"}”
          </blockquote>
          <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
            {t(i18n.about.conceptDesc, locale)}
          </p>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="mb-4 text-lg font-semibold text-foreground sm:text-xl">
            {t(i18n.about.benefitsTitle, locale)}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {i18n.about.benefits.map((b, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill mt-0.5 text-lg text-[oklch(0.45_0.13_158)]" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{t(b.t, locale)}</h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{t(b.d, locale)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Cost */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.74_0.13_80/0.14)] text-[oklch(0.74_0.13_80)]">
              <i className="bi bi-cash-coin text-xl" />
            </div>
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              {t(i18n.about.costTitle, locale)}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
            {t(i18n.about.costDesc, locale)}
          </p>
        </motion.section>
      </div>
    </div>
  );
}
