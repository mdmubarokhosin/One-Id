"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Locale } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "nid-locale";
const EVENT = "nid-locale-change";

// --- External store backed by localStorage ---------------------------------
function getSnapshot(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "bn" || saved === "en") return saved;
  } catch {
    // ignore
  }
  return "bn";
}

// During SSR we don't have localStorage, so default to "bn".
function getServerSnapshot(): Locale {
  return "bn";
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Subscribe to the localStorage-backed locale. The first client paint may
  // differ from SSR when a saved preference exists; we accept that one-time
  // hydration update just like theme providers do.
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep <html lang> in sync for accessibility (side-effect only, no setState)
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
