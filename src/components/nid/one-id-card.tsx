"use client";

import { i18n, t, type Locale } from "@/lib/i18n";

export interface CardData {
  nameBn: string;
  nameEn: string;
  fatherName: string;
  dob: string;
  dobEn: string;
  birthPlace: string;
  cardNumber: string;
  issueDate: string;
  issuingOffice: string;
}

/**
 * One-ID Smart Card — uses the traced SVG template as a background image
 * and overlays dynamic data as absolutely-positioned HTML text.
 *
 * Field positions were derived by programmatically analyzing every <path>
 * in the traced SVG (via getBoundingClientRect) to find the exact underline
 * coordinates. Each value sits precisely on its corresponding underline.
 *
 * Template viewBox: 600 × 366 (ISO/IEC 7810 ID-1 ratio).
 * Container uses `container-type: inline-size` so `cqw` units scale text
 * proportionally with card width on every screen.
 *
 * Verified underlines (viewBox coords):
 *   নাম          Y=126  X:237→425  (w=188)
 *   পিতা         Y=145  X:261→425  (w=164)
 *   জন্ম তারিখ   Y=182  X:293→427  (w=134)
 *   জন্মস্থান     Y=222  X:298→431  (w=133)
 *   ইস্যুর তারিখ  inside box Y=250, X=201, W=269, H=23
 *   Card number   near bottom Y≈300
 */
export function OneIdCard({
  data,
  locale,
}: {
  data: CardData;
  locale: Locale;
}) {
  const banglaClass = locale === "bn" ? "font-bangla" : "font-en";
  const textColor = "#0d1b3a";

  // Convert viewBox coords to CSS percentages.
  // top%  = (underlineY - textHeight) / 366 * 100
  // left% = startX / 600 * 100
  // width% = (endX - startX) / 600 * 100
  // Text uses `align-items: flex-end` so it sits just above the underline.
  // Font size in container-query width units.
  // At 600px container → 18px; at 358px (mobile) → 10.7px.
  // lineHeight: 1 ensures the text box is exactly fontSize tall, so adjacent
  // fields (19 viewBox units apart ≈ 11px on mobile) never overlap.
  const fs = 3; // cqw

  // Each text div is positioned so its baseline sits just above the underline.
  // top% = (underlineY - fontSizeVB) / 366 * 100, where fontSizeVB ≈ fs * 6
  // (6 viewBox units per cqw when container is 600px wide).
  const textH = fs * 6; // approximate text height in viewBox units

  const fields: {
    top: string; left: string; width: string; value: string;
  }[] = [
    {
      // নাম (Name) — underline Y=126, X:237→425
      top: `${((126 - textH) / 366) * 100}%`,
      left: `${(237 / 600) * 100}%`,
      width: `${(188 / 600) * 100}%`,
      value: data.nameBn,
    },
    {
      // পিতা (Father) — underline Y=145, X:261→425
      top: `${((145 - textH) / 366) * 100}%`,
      left: `${(261 / 600) * 100}%`,
      width: `${(164 / 600) * 100}%`,
      value: data.fatherName,
    },
    {
      // জন্ম তারিখ (DOB) — underline Y=182, X:293→427
      top: `${((182 - textH) / 366) * 100}%`,
      left: `${(293 / 600) * 100}%`,
      width: `${(134 / 600) * 100}%`,
      value: locale === "bn" ? data.dob : data.dobEn,
    },
    {
      // জন্মস্থান (Place of Birth) — underline Y=222, X:298→431
      top: `${((222 - textH) / 366) * 100}%`,
      left: `${(298 / 600) * 100}%`,
      width: `${(133 / 600) * 100}%`,
      value: data.birthPlace,
    },
  ];

  // Issue date — inside the bordered box (Y=250, X=201, W=269, H=23)
  // Center text vertically in the box.
  const issueTop = `${((250 + (23 - textH) / 2) / 366) * 100}%`;
  const issueLeft = `${(208 / 600) * 100}%`;
  const issueWidth = `${(255 / 600) * 100}%`;

  // Card number — printed near bottom
  const cardNumTop = `${(296 / 366) * 100}%`;
  const cardNumLeft = `${(160 / 600) * 100}%`;
  const cardNumWidth = `${(290 / 600) * 100}%`;

  const overlayStyle = (top: string, left: string, width: string): React.CSSProperties => ({
    position: "absolute",
    top,
    left,
    width,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: textColor,
    fontSize: `${fs}cqw`,
    fontWeight: 700,
    lineHeight: 1,
    zIndex: 5,
    pointerEvents: "none",
  });

  return (
    <div className="w-full max-w-[680px]">
      <div
        className="relative w-full overflow-hidden rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-1 ring-black/10"
        style={{
          aspectRatio: "600 / 366",
          containerType: "inline-size",
        }}
      >
        {/* Base: traced SVG template (the exact card visual) */}
        <img
          src="/nid-card-template.svg"
          alt="One-ID card template"
          className="absolute inset-0 h-full w-full select-none"
          draggable={false}
        />

        {/* === Dynamic data overlays — each sits precisely on its underline === */}
        {fields.map((f, idx) => (
          <div
            key={idx}
            className={banglaClass}
            style={overlayStyle(f.top, f.left, f.width)}
          >
            {truncate(f.value, 32)}
          </div>
        ))}

        {/* ইস্যুর তারিখ (Issue Date) — inside bordered box */}
        <div
          className={banglaClass}
          style={overlayStyle(issueTop, issueLeft, issueWidth)}
        >
          {truncate(data.issueDate, 40)}
        </div>

        {/* Card number — printed near bottom */}
        <div
          className="font-en"
          style={{
            ...overlayStyle(cardNumTop, cardNumLeft, cardNumWidth),
            letterSpacing: "0.1em",
          }}
        >
          {data.cardNumber}
        </div>
      </div>
    </div>
  );
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}
