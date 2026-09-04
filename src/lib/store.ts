/**
 * Client-side store for One-ID applications (static-site friendly).
 * Uses localStorage so the app works on Cloudflare Pages with no backend.
 */

import type { CardData } from "@/components/nid/one-id-card";

export interface Application {
  trackingId: string;
  cardNumber: string;
  nameBn: string;
  nameEn: string;
  fatherName: string;
  motherName: string;
  dob: string; // bn formatted
  dobEn: string;
  gender: string;
  blood: string;
  address: string;
  birthPlace: string; // জন্মস্থান
  district: string;
  upazila: string;
  phone: string;
  email: string;
  idType: "new" | "migrate";
  nidNumber: string;
  issueDate: string;
  issueDateEn: string;
  issuingOffice: string;
  createdAt: number;
}

const STORAGE_KEY = "one-id-applications";

function readAll(): Record<string, Application> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Application>) : {};
  } catch {
    return {};
  }
}

function writeAll(data: Record<string, Application>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore quota errors
  }
}

const BANGLA_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
function toBnDigits(s: string): string {
  return s.replace(/[0-9]/g, (d) => BANGLA_DIGITS[Number(d)]);
}
function toEnDigits(s: string): string {
  return s.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)));
}

const BN_MONTHS = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
];
const EN_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatIssueBn(d: Date = new Date()): string {
  return `${toBnDigits(String(d.getDate()))} ${BN_MONTHS[d.getMonth()]} ${toBnDigits(String(d.getFullYear()))}`;
}
export function formatIssueEn(d: Date = new Date()): string {
  return `${d.getDate()} ${EN_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function generateTrackingId(): string {
  const year = new Date().getFullYear();
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `O1D-${year}-${rand}`;
}

function generateCardNumber(): string {
  const part = () => Math.floor(1000 + Math.random() * 9000).toString();
  const check = Math.floor(Math.random() * 10);
  return `1990 ${part()} ${part()} ${part()} ${check}`;
}

export interface SubmitInput {
  nameBn: string;
  nameEn: string;
  fatherName: string;
  motherName: string;
  dob: string; // yyyy-mm-dd
  gender: string;
  blood: string;
  address: string;
  district: string;
  upazila: string;
  phone: string;
  email: string;
  idType: "new" | "migrate";
  nidNumber: string;
}

export function submitApplication(input: SubmitInput): Application {
  const trackingId = generateTrackingId();
  const cardNumber = generateCardNumber();
  const dobParts = input.dob.split("-");
  const dobEn =
    dobParts.length === 3
      ? `${dobParts[2]}/${dobParts[1]}/${dobParts[0]}`
      : input.dob;
  const dobBn = toBnDigits(dobEn);
  const fullAddress = `${input.address}, ${input.upazila}, ${input.district}`;
  const birthPlace = input.district; // জন্মস্থান — district used as place of birth
  const issueDate = formatIssueBn();
  const issueDateEn = formatIssueEn();

  const app: Application = {
    trackingId,
    cardNumber,
    nameBn: input.nameBn.trim(),
    nameEn: input.nameEn.trim(),
    fatherName: input.fatherName.trim(),
    motherName: input.motherName.trim(),
    dob: dobBn,
    dobEn,
    gender: input.gender,
    blood: input.blood,
    address: fullAddress,
    birthPlace,
    district: input.district,
    upazila: input.upazila,
    phone: input.phone.trim(),
    email: input.email.trim(),
    idType: input.idType,
    nidNumber: input.nidNumber.trim(),
    issueDate,
    issueDateEn,
    issuingOffice: "বাংলাদেশ কম্পিউটার কাউন্সিল",
    createdAt: Date.now(),
  };

  const all = readAll();
  all[trackingId] = app;
  writeAll(all);
  return app;
}

export function getApplication(trackingId: string): Application | null {
  const all = readAll();
  const key = trackingId.trim().toUpperCase();
  return all[key] ?? null;
}

export function applicationToCardData(app: Application): CardData {
  return {
    nameBn: app.nameBn,
    nameEn: app.nameEn,
    fatherName: app.fatherName,
    dob: app.dob,
    dobEn: toEnDigits(app.dob),
    birthPlace: app.birthPlace,
    cardNumber: app.cardNumber,
    issueDate: app.issueDate,
    issuingOffice: app.issuingOffice,
  };
}
