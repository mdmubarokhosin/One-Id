"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, FilePlus2 } from "lucide-react";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "../language-provider";
import { navigate } from "../use-hash-route";
import { OneIdCard, type CardData } from "../one-id-card";
import { Alert } from "../alert";

// Demo card shown on home hero
const DEMO_CARD: CardData = {
  nameBn: "মোহাম্মদ রহিম উদ্দিন",
  nameEn: "MOHAMMAD RAHIM UDDIN",
  fatherName: "মোহাম্মদ আব্দুল করিম",
  dob: "১৫/০৬/১৯৯৫",
  dobEn: "15/06/1995",
  birthPlace: "ঢাকা",
  cardNumber: "1990 1234 5678 9012 3",
  issueDate: "০৩ সেপ্টেম্বর ২০২৬",
  issuingOffice: "বাংলাদেশ কম্পিউটার কাউন্সিল",
};

export function HomePage() {
  const { locale } = useLanguage();
  return (
    <div className="animate-fade-up">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b border-border hero-pattern">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[oklch(0.45_0.13_158)] via-[oklch(0.74_0.13_80)] to-[oklch(0.42_0.16_25)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-16">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.45_0.13_158)]" />
              {t(i18n.home.badge, locale)}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-en text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
            >
              {t(i18n.home.heroTitle, locale)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className={
                locale === "bn"
                  ? "font-bangla mt-3 text-2xl font-semibold text-[oklch(0.42_0.16_25)] sm:text-3xl"
                  : "font-en mt-3 text-2xl font-semibold text-[oklch(0.42_0.16_25)] sm:text-3xl"
              }
            >
              {t(i18n.home.heroSub, locale)}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base lg:mx-0"
            >
              {t(i18n.home.heroDesc, locale)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={() => navigate("apply")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.42_0.16_25)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[oklch(0.36_0.15_25)] hover:shadow-md"
              >
                <FilePlus2 className="h-4 w-4" />
                {t(i18n.home.applyBtn, locale)}
              </button>
              <button
                type="button"
                onClick={() => navigate("card")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[oklch(0.45_0.13_158)] bg-[oklch(0.45_0.13_158/0.06)] px-6 py-3 text-sm font-semibold text-[oklch(0.45_0.13_158)] transition-all hover:bg-[oklch(0.45_0.13_158)] hover:text-white hover:shadow-md"
              >
                <i className="bi bi-credit-card-2-front" />
                {t(i18n.home.cardBtn, locale)}
              </button>
            </motion.div>
          </div>

          {/* Right: demo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[680px]">
              <OneIdCard data={DEMO_CARD} locale={locale} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-xl font-semibold text-foreground sm:text-2xl">
            {t(i18n.home.statsTitle, locale)}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {i18n.home.stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm sm:p-6"
              >
                <div
                  className={
                    locale === "bn"
                      ? "font-bangla text-2xl font-bold text-[oklch(0.42_0.16_25)] sm:text-3xl"
                      : "font-en text-2xl font-bold text-[oklch(0.42_0.16_25)] sm:text-3xl"
                  }
                >
                  {locale === "bn" ? s.value : s.valueEn}
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                  {t(s.label, locale)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-xl font-semibold text-foreground sm:text-2xl">
            {t(i18n.home.featuresTitle, locale)}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {i18n.home.features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.42_0.16_25/0.08)] text-[oklch(0.42_0.16_25)]">
                  <i className={`${f.icon} text-2xl`} />
                </div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {t(f.title, locale)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(f.desc, locale)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-xl font-semibold text-foreground sm:text-2xl">
            {t(i18n.home.howTitle, locale)}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {i18n.home.howSteps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.45_0.13_158)] text-sm font-bold text-white">
                  {locale === "bn" ? ["১", "২", "৩", "৪"][idx] : idx + 1}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {t(s.title, locale)}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {t(s.desc, locale)}
                </p>
                {idx < i18n.home.howSteps.length - 1 && (
                  <ArrowRight className="absolute -right-2 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground/40 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== System status / notification alerts ===== */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-center text-xl font-semibold text-foreground sm:text-2xl">
            {locale === "bn" ? "সিস্টেম বার্তা" : "System notifications"}
          </h2>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            {locale === "bn"
              ? "গুরুত্বপূর্ণ আপডেট ও স্থিতি সম্পর্কে অবহিত থাকুন"
              : "Stay informed about important updates and status"}
          </p>
          <div className="space-y-2 p-1 sm:p-4">
            <Alert type="success" />
            <Alert type="info" />
            <Alert type="warning" />
            <Alert type="error" />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[oklch(0.45_0.13_158/0.3)] bg-gradient-to-br from-[oklch(0.45_0.13_158/0.08)] to-[oklch(0.42_0.16_25/0.06)] p-8 text-center sm:p-12">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              {t(i18n.home.ctaTitle, locale)}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {t(i18n.home.ctaDesc, locale)}
            </p>
            <button
              type="button"
              onClick={() => navigate("apply")}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.42_0.16_25)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[oklch(0.36_0.15_25)] hover:shadow-md"
            >
              <FilePlus2 className="h-4 w-4" />
              {t(i18n.home.applyBtn, locale)}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
