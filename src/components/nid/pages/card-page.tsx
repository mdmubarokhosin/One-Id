"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Search, AlertCircle, CreditCard } from "lucide-react";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "../language-provider";
import { PageHeader } from "./about-page";
import { OneIdCard, type CardData } from "../one-id-card";
import { useToast } from "@/hooks/use-toast";
import { Alert } from "../alert";
import { getApplication, applicationToCardData } from "@/lib/store";

// Read saved tracking once on first render (lazy initial state — no effect).
function getSavedTracking(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem("nid-tracking") ?? "";
  } catch {
    return "";
  }
}

export function CardPage() {
  const { locale } = useLanguage();
  const { toast } = useToast();
  const [tracking, setTracking] = useState(getSavedTracking);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState<CardData | null>(null);
  const [error, setError] = useState(false);

  const fetchCard = async (id: string) => {
    if (!id.trim()) return;
    setLoading(true);
    setError(false);
    setCard(null);
    // Short delay for UX; data is read from localStorage.
    await new Promise((r) => setTimeout(r, 300));
    try {
      const app = getApplication(id);
      if (!app) {
        setError(true);
        toast({
          title: t(i18n.card.notFound, locale),
          variant: "destructive",
        });
      } else {
        setCard(applicationToCardData(app));
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void fetchCard(tracking);
  };

  const inputCls =
    "h-12 w-full rounded-lg border border-input bg-background pl-11 pr-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div className="animate-fade-up">
      <PageHeader title={i18n.card.title} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm text-muted-foreground sm:text-base">
          {t(i18n.card.intro, locale)}
        </p>

        {/* Lookup form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            {t(i18n.card.trackingLabel, locale)}
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              className={`${inputCls} font-en`}
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
              placeholder={t(i18n.card.trackingPh, locale)}
              autoCapitalize="characters"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !tracking.trim()}
            className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[oklch(0.42_0.16_25)] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[oklch(0.36_0.15_25)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t(i18n.card.loading, locale)}
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                {t(i18n.card.load, locale)}
              </>
            )}
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin text-[oklch(0.42_0.16_25)]" />
            <p className="mt-3 text-sm">{t(i18n.card.loading, locale)}</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-lg"
          >
            <div className="mb-3 flex flex-col items-center justify-center py-6 text-center">
              <AlertCircle className="h-10 w-10 text-red-500" />
            </div>
            <Alert
              type="error"
              title={t(i18n.alerts.cardNotFound.title, locale)}
              message={t(i18n.alerts.cardNotFound.msg, locale)}
            />
          </motion.div>
        )}

        {/* Card result */}
        {!loading && card && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex justify-center">
              <OneIdCard data={card} locale={locale} />
            </div>

            {/* card meta info */}
            <div className="grid gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:grid-cols-2 sm:p-6">
              {[
                { icon: "bi-person", label: t(i18n.card.fName, locale), val: locale === "bn" ? card.nameBn : card.nameEn },
                { icon: "bi-people", label: t(i18n.card.fFather, locale), val: card.fatherName },
                { icon: "bi-calendar3", label: t(i18n.card.fDob, locale), val: locale === "bn" ? card.dob : card.dobEn },
                { icon: "bi-geo-alt", label: t(i18n.card.fBirthPlace, locale), val: card.birthPlace },
                { icon: "bi-upc-scan", label: t(i18n.card.fIssue, locale), val: card.issueDate, mono: true },
                { icon: "bi-credit-card", label: "Card No", val: card.cardNumber, mono: true },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <i className={`${m.icon} mt-0.5 text-lg text-[oklch(0.42_0.16_25)]`} />
                  <div>
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                    <div className={`text-sm font-medium text-foreground ${m.mono ? "font-en" : ""}`}>{m.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setCard(null);
                setTracking("");
                setError(false);
                try { localStorage.removeItem("nid-tracking"); } catch {}
              }}
              className="mx-auto flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <i className="bi bi-arrow-left-right" />
              {t(i18n.card.back, locale)}
            </button>
          </motion.div>
        )}

        {/* Empty state — info alert */}
        {!loading && !card && !error && (
          <div className="mx-auto max-w-lg py-8">
            <div className="mb-6 flex flex-col items-center justify-center text-center text-muted-foreground">
              <i className="bi bi-credit-card-2-front text-5xl text-[oklch(0.42_0.16_25/0.3)]" />
            </div>
            <Alert
              type="info"
              title={t(i18n.alerts.cardInfo.title, locale)}
              message={t(i18n.alerts.cardInfo.msg, locale)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
