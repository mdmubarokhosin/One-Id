"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "../language-provider";
import { PageHeader } from "./about-page";
import { useToast } from "@/hooks/use-toast";
import { Alert } from "../alert";

export function ContactPage() {
  const { locale } = useLanguage();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);
    toast({ title: t(i18n.contact.formSent, locale) });
    setForm({ name: "", email: "", message: "" });
    // Auto-hide the success alert after 6 seconds
    setTimeout(() => setSent(false), 6000);
  };

  const inputCls =
    "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const contactItems = [
    { icon: "bi-building", label: t(i18n.contact.org, locale), val: t(i18n.contact.org, locale) },
    { icon: "bi-diagram-3", label: t(i18n.contact.dept, locale), val: t(i18n.contact.dept, locale) },
    { icon: "bi-geo-alt", label: locale === "bn" ? "ঠিকানা" : "Address", val: t(i18n.contact.address, locale) },
    { icon: "bi-envelope", label: t(i18n.contact.emailLabel, locale), val: i18n.contact.email, mono: true },
    { icon: "bi-telephone", label: t(i18n.contact.helplineLabel, locale), val: locale === "bn" ? i18n.contact.helpline : i18n.contact.helplineEn, mono: true },
    { icon: "bi-clock", label: t(i18n.contact.hoursLabel, locale), val: t(i18n.contact.hours, locale) },
  ];

  return (
    <div className="animate-fade-up">
      <PageHeader title={i18n.contact.title} />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm text-muted-foreground sm:text-base">
          {t(i18n.contact.intro, locale)}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <img src="/logo-ec.png" alt="EC" className="h-12 w-12 rounded-full" />
              <div>
                <h2 className="text-base font-semibold text-foreground">
                  {t(i18n.contact.org, locale)}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {t(i18n.contact.project, locale)}
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {contactItems.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.42_0.16_25/0.08)] text-[oklch(0.42_0.16_25)]">
                    <i className={`${c.icon} text-base`} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className={`text-sm font-medium text-foreground ${c.mono ? "font-en" : ""}`}>{c.val}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
          >
            <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
              <i className="bi bi-chat-dots text-[oklch(0.42_0.16_25)]" />
              {t(i18n.contact.formTitle, locale)}
            </h2>
            {sent && (
              <div className="mb-4">
                <Alert
                  type="success"
                  title={t(i18n.alerts.contactSent.title, locale)}
                  message={t(i18n.alerts.contactSent.msg, locale)}
                />
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  {t(i18n.contact.formName, locale)}
                </label>
                <input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  {t(i18n.contact.formEmail, locale)}
                </label>
                <input type="email" className={`${inputCls} font-en`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  {t(i18n.contact.formMsg, locale)}
                </label>
                <textarea
                  className={`${inputCls} h-auto min-h-[120px] py-2`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[oklch(0.42_0.16_25)] px-6 text-sm font-semibold text-white transition-all hover:bg-[oklch(0.36_0.15_25)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {t(i18n.contact.formSend, locale)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
