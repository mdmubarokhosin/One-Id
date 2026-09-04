"use client";

import { useEffect, useState } from "react";

export type Route =
  | "home"
  | "about"
  | "services"
  | "apply"
  | "card"
  | "faq"
  | "contact";

const ROUTES: Route[] = [
  "home",
  "about",
  "services",
  "apply",
  "card",
  "faq",
  "contact",
];

function parseHash(): Route {
  if (typeof window === "undefined") return "home";
  const raw = window.location.hash.replace(/^#\/?/, "").split("?")[0].trim();
  if (!raw) return "home";
  const r = raw as Route;
  return ROUTES.includes(r) ? r : "home";
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(
    typeof window !== "undefined" ? parseHash() : "home"
  );

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function navigate(route: Route) {
  if (typeof window === "undefined") return;
  window.location.hash = `/${route}`;
  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: "smooth" });
}
