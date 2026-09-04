"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "./language-provider";
import { useHashRoute, navigate, type Route } from "./use-hash-route";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { key: keyof typeof i18n.nav; route: Route }[] = [
  { key: "home", route: "home" },
  { key: "about", route: "about" },
  { key: "services", route: "services" },
  { key: "apply", route: "apply" },
  { key: "card", route: "card" },
  { key: "faq", route: "faq" },
  { key: "contact", route: "contact" },
];

export function SiteHeader() {
  const { locale, setLocale } = useLanguage();
  const route = useHashRoute();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85">
      {/* Top brand strip */}
      <div className="border-b border-border bg-[oklch(0.42_0.16_25)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1 text-center">
          <img src="/logo-ec.png" alt="EC" className="h-5 w-5" />
          <span className="text-[11px] font-medium sm:text-xs">
            {t(i18n.brand.org, locale)} · {t(i18n.brand.orgSub, locale)}
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo + brand */}
        <button
          type="button"
          onClick={() => navigate("home")}
          className="flex items-center gap-3 text-left"
        >
          <img
            src="/logo-ec.png"
            alt="Bangladesh Election Commission logo"
            className="h-11 w-11 shrink-0 rounded-full ring-2 ring-[oklch(0.45_0.13_158/0.3)]"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-bold text-foreground">
              {t(i18n.brand.name, locale)}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {t(i18n.brand.full, locale)}
            </span>
          </span>
          <span className="flex flex-col leading-tight sm:hidden">
            <span className="text-sm font-bold text-foreground">
              {t(i18n.brand.name, locale)}
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.route}
              type="button"
              onClick={() => navigate(item.route)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                route === item.route
                  ? "bg-[oklch(0.42_0.16_25/0.08)] text-[oklch(0.42_0.16_25)]"
                  : "text-foreground/75 hover:bg-accent hover:text-foreground"
              )}
            >
              {t(i18n.nav[item.key], locale)}
            </button>
          ))}

          {/* Language switch */}
          <div className="ml-2 flex items-center gap-1 rounded-full border border-border bg-muted/60 p-0.5">
            <Globe className="ml-1 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            <button
              type="button"
              onClick={() => setLocale("bn")}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium font-bangla transition-colors",
                locale === "bn"
                  ? "bg-[oklch(0.42_0.16_25)] text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={locale === "bn"}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium font-en transition-colors",
                locale === "en"
                  ? "bg-[oklch(0.42_0.16_25)] text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <div className="flex items-center rounded-full border border-border bg-muted/60 p-0.5">
            <button
              type="button"
              onClick={() => setLocale("bn")}
              className={cn(
                "rounded-full px-2 py-1 text-[11px] font-medium font-bangla",
                locale === "bn"
                  ? "bg-[oklch(0.42_0.16_25)] text-white"
                  : "text-muted-foreground"
              )}
              aria-pressed={locale === "bn"}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "rounded-full px-2 py-1 text-[11px] font-medium font-en",
                locale === "en"
                  ? "bg-[oklch(0.42_0.16_25)] text-white"
                  : "text-muted-foreground"
              )}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetHeader className="flex flex-row items-center justify-between border-b border-border p-4">
                <SheetTitle className="text-left">
                  <span className="block text-sm font-semibold">
                    {t(i18n.brand.name, locale)}
                  </span>
                  <span className="block text-[11px] font-normal text-muted-foreground">
                    {t(i18n.brand.full, locale)}
                  </span>
                </SheetTitle>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md p-1 text-muted-foreground hover:bg-accent"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetHeader>
              <nav className="flex flex-col p-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.route}
                    type="button"
                    onClick={() => {
                      navigate(item.route);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "rounded-md px-3 py-3 text-left text-sm font-medium transition-colors",
                      route === item.route
                        ? "bg-[oklch(0.42_0.16_25/0.08)] text-[oklch(0.42_0.16_25)]"
                        : "text-foreground/90 hover:bg-accent"
                    )}
                  >
                    {t(i18n.nav[item.key], locale)}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
