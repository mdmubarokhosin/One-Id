"use client";

import { SiteHeader } from "@/components/nid/site-header";
import { SiteFooter } from "@/components/nid/site-footer";
import { useHashRoute } from "@/components/nid/use-hash-route";
import { HomePage } from "@/components/nid/pages/home-page";
import { AboutPage } from "@/components/nid/pages/about-page";
import { ServicesPage } from "@/components/nid/pages/services-page";
import { ApplyPage } from "@/components/nid/pages/apply-page";
import { CardPage } from "@/components/nid/pages/card-page";
import { FaqPage } from "@/components/nid/pages/faq-page";
import { ContactPage } from "@/components/nid/pages/contact-page";

export default function Home() {
  const route = useHashRoute();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {route === "home" && <HomePage />}
        {route === "about" && <AboutPage />}
        {route === "services" && <ServicesPage />}
        {route === "apply" && <ApplyPage />}
        {route === "card" && <CardPage />}
        {route === "faq" && <FaqPage />}
        {route === "contact" && <ContactPage />}
      </main>
      <SiteFooter />
    </div>
  );
}
