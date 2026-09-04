"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { i18n, t } from "@/lib/i18n";
import { useLanguage } from "../language-provider";
import { PageHeader } from "./about-page";

export function FaqPage() {
  const { locale } = useLanguage();
  return (
    <div className="animate-fade-up">
      <PageHeader title={i18n.faq.title} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full">
          {i18n.faq.items.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="overflow-hidden rounded-lg border border-border bg-background px-4 shadow-sm transition-colors data-[state=open]:border-[oklch(0.42_0.16_25/0.4)] [&:not(:first-child)]:mt-3"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[oklch(0.42_0.16_25/0.08)] text-xs font-semibold text-[oklch(0.42_0.16_25)]">
                    {locale === "bn" ? ["১", "২", "৩", "৪", "৫", "৬"][idx] : idx + 1}
                  </span>
                  <span className="font-medium text-foreground">
                    {t(item.q, locale)}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-10 text-sm text-muted-foreground">
                {t(item.a, locale)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
