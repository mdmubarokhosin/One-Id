"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "../language-provider";
import { PageHeader } from "./about-page";
import { navigate } from "../use-hash-route";
import { useToast } from "@/hooks/use-toast";
import type { CardData } from "../one-id-card";
import { Alert } from "../alert";
import { submitApplication, applicationToCardData } from "@/lib/store";

interface SubmitResult {
  trackingId: string;
  card: CardData;
}

export function ApplyPage() {
  const { locale } = useLanguage();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [idType, setIdType] = useState<"new" | "migrate">("new");
  const [showWarning, setShowWarning] = useState(false);

  const [form, setForm] = useState({
    nameBn: "", nameEn: "", fatherName: "", motherName: "",
    dob: "", gender: "", blood: "",
    address: "", district: "", upazila: "",
    phone: "", email: "", nidNumber: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const incomplete =
      !form.nameBn.trim() || !form.nameEn.trim() || !form.fatherName.trim() ||
      !form.motherName.trim() || !form.dob || !form.gender ||
      !form.address.trim() || !form.district.trim() || !form.upazila.trim() ||
      !form.phone.trim() ||
      (idType === "migrate" && !form.nidNumber.trim());
    if (incomplete) {
      setShowWarning(true);
      toast({ title: t(i18n.apply.errRequired, locale), variant: "destructive" });
      return;
    }
    setShowWarning(false);
    setSubmitting(true);
    // Simulate a short async delay for UX, then store client-side.
    await new Promise((r) => setTimeout(r, 500));
    try {
      const app = submitApplication({ ...form, idType });
      const card = applicationToCardData(app);
      setResult({ trackingId: app.trackingId, card });
      try { localStorage.setItem("nid-tracking", app.trackingId); } catch {}
      toast({ title: t(i18n.apply.success, locale) });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      toast({
        title: locale === "bn" ? "আবেদন ব্যর্থ" : "Application failed",
        description: err instanceof Error ? err.message : "",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Success screen
  if (result) {
    return (
      <div className="animate-fade-up">
        <PageHeader title={i18n.apply.title} />
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[oklch(0.45_0.13_158/0.3)] bg-gradient-to-br from-[oklch(0.45_0.13_158/0.06)] to-[oklch(0.42_0.16_25/0.04)] p-6 text-center shadow-sm sm:p-10"
          >
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[oklch(0.45_0.13_158/0.14)] text-[oklch(0.45_0.13_158)]">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              {t(i18n.apply.success, locale)}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(i18n.apply.intro, locale)}
            </p>

            {/* Success alert banner */}
            <div className="mx-auto mt-5 max-w-md text-left">
              <Alert
                type="success"
                title={t(i18n.alerts.applySuccess.title, locale)}
                message={t(i18n.alerts.applySuccess.msg, locale)}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <div className="text-xs text-muted-foreground">
                {t(i18n.apply.tracking, locale)}
              </div>
              <div className="mt-1 font-en text-2xl font-bold tracking-wider text-[oklch(0.42_0.16_25)]">
                {result.trackingId}
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("card")}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.42_0.16_25)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[oklch(0.36_0.15_25)] hover:shadow-md"
            >
              <i className="bi bi-credit-card-2-front" />
              {t(i18n.apply.viewCard, locale)}
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const inputCls =
    "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const labelCls = "mb-1.5 block text-sm font-medium text-foreground";
  const sectionCls = "rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6";

  return (
    <div className="animate-fade-up">
      <PageHeader title={i18n.apply.title} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm text-muted-foreground sm:text-base">
          {t(i18n.apply.intro, locale)}
        </p>

        {/* Warning alert when form is incomplete */}
        {showWarning && (
          <div className="mb-4">
            <Alert
              type="warning"
              title={t(i18n.alerts.formIncomplete.title, locale)}
              message={t(i18n.alerts.formIncomplete.msg, locale)}
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Identity type */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={sectionCls}
          >
            <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
              <i className="bi bi-person-vcard text-[oklch(0.42_0.16_25)]" />
              {t(i18n.apply.sectionId, locale)}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                { v: "new", icon: "bi-person-plus", label: t(i18n.apply.idNew, locale) },
                { v: "migrate", icon: "bi-arrow-left-right", label: t(i18n.apply.idMigrate, locale) },
              ] as const).map((opt) => (
                <button
                  key={opt.v}
                  type="button"
                  onClick={() => setIdType(opt.v)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                    idType === opt.v
                      ? "border-[oklch(0.42_0.16_25)] bg-[oklch(0.42_0.16_25/0.06)] ring-1 ring-[oklch(0.42_0.16_25/0.3)]"
                      : "border-border bg-background hover:border-[oklch(0.42_0.16_25/0.4)]"
                  }`}
                >
                  <i className={`${opt.icon} text-2xl ${idType === opt.v ? "text-[oklch(0.42_0.16_25)]" : "text-muted-foreground"}`} />
                  <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  <i className={`bi ${idType === opt.v ? "bi-check-circle-fill text-[oklch(0.45_0.13_158)]" : "bi-circle text-muted-foreground/40"} ml-auto`} />
                </button>
              ))}
            </div>
            {idType === "migrate" && (
              <div className="mt-4">
                <label className={labelCls}>{t(i18n.apply.nidNumber, locale)}</label>
                <input className={inputCls} value={form.nidNumber} onChange={set("nidNumber")} placeholder="1990123456789" />
              </div>
            )}
          </motion.section>

          {/* Personal info */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className={sectionCls}
          >
            <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
              <i className="bi bi-person text-[oklch(0.42_0.16_25)]" />
              {t(i18n.apply.sectionPersonal, locale)}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelCls}>{t(i18n.apply.nameBn, locale)} <span className="text-destructive">*</span></label>
                <input className={inputCls} value={form.nameBn} onChange={set("nameBn")} placeholder={t(i18n.apply.nameBnPh, locale)} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.nameEn, locale)} <span className="text-destructive">*</span></label>
                <input className={`${inputCls} font-en`} value={form.nameEn} onChange={set("nameEn")} placeholder={t(i18n.apply.nameEnPh, locale)} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.fatherName, locale)} <span className="text-destructive">*</span></label>
                <input className={inputCls} value={form.fatherName} onChange={set("fatherName")} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.motherName, locale)} <span className="text-destructive">*</span></label>
                <input className={inputCls} value={form.motherName} onChange={set("motherName")} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.dob, locale)} <span className="text-destructive">*</span></label>
                <input type="date" className={inputCls} value={form.dob} onChange={set("dob")} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.gender, locale)} <span className="text-destructive">*</span></label>
                <select className={inputCls} value={form.gender} onChange={set("gender")}>
                  <option value="">—</option>
                  <option value="male">{t(i18n.apply.male, locale)}</option>
                  <option value="female">{t(i18n.apply.female, locale)}</option>
                  <option value="other">{t(i18n.apply.other, locale)}</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.blood, locale)}</label>
                <select className={inputCls} value={form.blood} onChange={set("blood")}>
                  <option value="">—</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((b) => (
                    <option key={b} value={b} className="font-en">{b}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={sectionCls}
          >
            <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
              <i className="bi bi-geo-alt text-[oklch(0.42_0.16_25)]" />
              {t(i18n.apply.sectionContact, locale)}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelCls}>{t(i18n.apply.address, locale)} <span className="text-destructive">*</span></label>
                <textarea
                  className={`${inputCls} h-auto min-h-[60px] py-2`}
                  value={form.address}
                  onChange={set("address")}
                  placeholder={t(i18n.apply.addressPh, locale)}
                />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.district, locale)} <span className="text-destructive">*</span></label>
                <input className={inputCls} value={form.district} onChange={set("district")} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.upazila, locale)} <span className="text-destructive">*</span></label>
                <input className={inputCls} value={form.upazila} onChange={set("upazila")} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.phone, locale)} <span className="text-destructive">*</span></label>
                <input className={`${inputCls} font-en`} value={form.phone} onChange={set("phone")} placeholder={t(i18n.apply.phonePh, locale)} />
              </div>
              <div>
                <label className={labelCls}>{t(i18n.apply.email, locale)}</label>
                <input type="email" className={`${inputCls} font-en`} value={form.email} onChange={set("email")} />
              </div>
            </div>
          </motion.section>

          {/* Security note */}
          <div className="flex items-start gap-3 rounded-xl border border-[oklch(0.45_0.13_158/0.2)] bg-[oklch(0.45_0.13_158/0.04)] p-4 text-sm">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.45_0.13_158)]" />
            <p className="text-foreground/80">{t(i18n.apply.securityNote, locale)}</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[oklch(0.42_0.16_25)] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[oklch(0.36_0.15_25)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t(i18n.apply.submitting, locale)}
              </>
            ) : (
              <>
                <i className="bi bi-send" />
                {t(i18n.apply.submit, locale)}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
