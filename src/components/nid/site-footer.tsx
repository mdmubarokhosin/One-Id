"use client";

import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "./language-provider";
import { navigate, type Route } from "./use-hash-route";

const FOOTER_LINKS: { key: keyof typeof i18n.nav; route: Route }[] = [
  { key: "home", route: "home" },
  { key: "about", route: "about" },
  { key: "services", route: "services" },
  { key: "apply", route: "apply" },
  { key: "card", route: "card" },
  { key: "faq", route: "faq" },
  { key: "contact", route: "contact" },
];

export function SiteFooter() {
  const { locale } = useLanguage();
  return (
    <footer className="mt-auto bg-[oklch(0.18_0.02_30)] text-muted-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo-ec.png" alt="EC logo" className="h-12 w-12 rounded-full" />
            <div>
              <p className="text-base font-bold text-white">
                {t(i18n.brand.name, locale)}
              </p>
              <p className="text-xs text-muted-foreground">
                {t(i18n.brand.full, locale)}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {t(i18n.brand.tagline, locale)}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {t(i18n.footer.note, locale)}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            {t(i18n.footer.quickLinks, locale)}
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {FOOTER_LINKS.map((item) => (
              <li key={item.route}>
                <button
                  type="button"
                  onClick={() => navigate(item.route)}
                  className="text-muted-foreground transition-colors hover:text-white"
                >
                  {t(i18n.nav[item.key], locale)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            {t(i18n.footer.contact, locale)}
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <i className="bi bi-geo-alt mt-0.5 text-[oklch(0.74_0.13_80)]" />
              <span>{t(i18n.contact.address, locale)}</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-envelope text-[oklch(0.74_0.13_80)]" />
              <span className="font-en">{i18n.contact.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-telephone text-[oklch(0.74_0.13_80)]" />
              <span>
                {t(i18n.contact.helplineLabel, locale)}:{" "}
                <span className="font-en">
                  {locale === "bn" ? i18n.contact.helpline : i18n.contact.helplineEn}
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-clock mt-0.5 text-[oklch(0.74_0.13_80)]" />
              <span>{t(i18n.contact.hours, locale)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p>{t(i18n.footer.rights, locale)}</p>
          <p className="text-muted-foreground/70">
            {t(i18n.footer.developed, locale)}
          </p>
        </div>
      </div>
    </footer>
  );
}
