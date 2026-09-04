"use client";

import { motion } from "framer-motion";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "../language-provider";
import { PageHeader } from "./about-page";
import { navigate } from "../use-hash-route";

const COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  rose: { bg: "bg-[oklch(0.6_0.2_20/0.10)]", text: "text-[oklch(0.55_0.2_20)]", border: "border-[oklch(0.6_0.2_20/0.25)]" },
  green: { bg: "bg-[oklch(0.45_0.13_158/0.10)]", text: "text-[oklch(0.45_0.13_158)]", border: "border-[oklch(0.45_0.13_158/0.25)]" },
  amber: { bg: "bg-[oklch(0.74_0.13_80/0.12)]", text: "text-[oklch(0.6_0.14_75)]", border: "border-[oklch(0.74_0.13_80/0.3)]" },
  maroon: { bg: "bg-[oklch(0.42_0.16_25/0.10)]", text: "text-[oklch(0.42_0.16_25)]", border: "border-[oklch(0.42_0.16_25/0.25)]" },
};

export function ServicesPage() {
  const { locale } = useLanguage();
  return (
    <div className="animate-fade-up">
      <PageHeader title={i18n.services.title} />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
          {t(i18n.services.intro, locale)}
        </p>

        {/* 4 service cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {i18n.services.items.map((s, idx) => {
            const c = COLOR_MAP[s.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group rounded-2xl border ${c.border} bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-6`}
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg}`}>
                  <i className={`${s.icon} text-3xl ${c.text}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t(s.title, locale)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(s.desc, locale)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Wallet highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 overflow-hidden rounded-3xl border border-[oklch(0.45_0.13_158/0.25)] bg-gradient-to-br from-[oklch(0.45_0.13_158/0.08)] to-[oklch(0.42_0.16_25/0.06)] p-8 sm:p-10"
        >
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.45_0.13_158/0.14)] text-[oklch(0.45_0.13_158)]">
                <i className="bi bi-wallet2 text-3xl" />
              </div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                {t(i18n.services.walletTitle, locale)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                {t(i18n.services.walletDesc, locale)}
              </p>
              <button
                type="button"
                onClick={() => navigate("apply")}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[oklch(0.42_0.16_25)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[oklch(0.36_0.15_25)] hover:shadow-md"
              >
                <i className="bi bi-person-plus" />
                {t(i18n.home.applyBtn, locale)}
              </button>
            </div>
            {/* Stylized wallet visual */}
            <div className="relative mx-auto hidden aspect-[1.585] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.42_0.16_25)] to-[oklch(0.3_0.12_25)] p-6 shadow-xl lg:block">
              <div className="guilloche-pattern absolute inset-0 opacity-30" />
              <div className="relative flex h-full flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="font-en text-lg font-bold">One-ID Wallet</span>
                  <i className="bi bi-wallet2 text-2xl text-[oklch(0.74_0.13_80)]" />
                </div>
                <div>
                  <div className="font-en text-xs opacity-70">Balance</div>
                  <div className="font-en text-3xl font-bold">৳ ১২,৫০০</div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-en opacity-80">**** **** **** ১২৩৪</span>
                  <span className="rounded bg-white/20 px-2 py-0.5 font-en">One-ID</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
