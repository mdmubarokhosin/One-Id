"use client";

import { useLanguage } from "./language-provider";
import { i18n, t } from "@/lib/i18n";

export type AlertType = "success" | "info" | "warning" | "error";

interface AlertProps {
  type: AlertType;
  title?: string;
  message?: string;
  className?: string;
}

// Style map matching the provided Uiverse.io HTML exactly
const STYLES: Record<
  AlertType,
  {
    container: string;
    iconColor: string;
    path: string;
  }
> = {
  success: {
    container:
      "bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800",
    iconColor: "text-green-600",
    path: "M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  info: {
    container:
      "bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800",
    iconColor: "text-blue-600",
    path: "M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  warning: {
    container:
      "bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-800",
    iconColor: "text-yellow-600",
    path: "M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  error: {
    container:
      "bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-800",
    iconColor: "text-red-600",
    path: "M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
};

/**
 * Alert banner — matches the provided Uiverse.io HTML design exactly.
 * Pure HTML + TailwindCSS. Bilingual (BN/EN).
 */
export function Alert({ type, title, message, className = "" }: AlertProps) {
  const { locale } = useLanguage();
  const style = STYLES[type];

  // Default to the generic alert copy if no custom title/message given
  const defaultTitle = t(i18n.alerts[type].title, locale);
  const defaultMsg = t(i18n.alerts[type].msg, locale);
  const titleText = title ?? defaultTitle;
  const msgText = message ?? defaultMsg;

  return (
    <div
      role="alert"
      className={`p-2 rounded-lg flex items-center transition duration-300 ease-in-out transform hover:scale-[1.02] ${style.container} ${className}`}
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 flex-shrink-0 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d={style.path}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-xs font-semibold">
        <span className="font-bold">{titleText}</span>
        {" — "}
        {msgText}
      </p>
    </div>
  );
}
