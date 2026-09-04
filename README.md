# এক-আইডি (One-ID) Portal

বাংলাদেশ সরকারের **ইউনিফাইড ডিজিটাল আইডেন্টিটি (এক-আইডি)** পোর্টাল — একটি মাল্টি-পেজ, দ্বিভাষিক (বাংলা/English), মোবাইল-ফার্স্ট ওয়েব অ্যাপ্লিকেশন। এটি তথ্য ও যোগাযোগপ্রযুক্তি বিভাগের ডি-স্টার (D-STAR) প্রকল্পের ধারণার উপর ভিত্তি করে তৈরি — "এক নাগরিক, এক পরিচয়, এক ওয়ালেট"।

> ⚠️ এটি একটি প্রদর্শনমূলক পোর্টাল। প্রকৃত এক-আইডি সেবা চালু হলে আপনাকে জানানো হবে।

## ✨ ফিচার

- **৭টি পেজ** — হোম, এক-আইডি কী, সেবাসমূহ, আবেদন, আমার কার্ড, প্রশ্নোত্তর, যোগাযোগ (হ্যাশ-ভিত্তিক ক্লায়েন্ট রাউটিং)
- **দ্বিভাষিক** — বাংলা/English টগল (পছন্দ localStorage-এ সংরক্ষিত, রিলোডে টিকে থাকে)
- **One-ID স্মার্ট কার্ড** — একটি সম্পূর্ণ self-contained **SVG** (সরকারি সীলমোহর, ছবি, ৬টি ফিল্ড, ৪টি সেবা আইকন, গোল্ড চিপ, QR কোড, One-ID লোগো, গিয়োশ নিরাপত্তা প্যাটার্ন)
- **ফাংশনাল আবেদন ফরম** — localStorage-এ সংরক্ষিত, স্বয়ংক্রিয় ট্র্যাকিং নম্বর তৈরি
- **ট্র্যাকিং ভিত্তিক কার্ড পুনরুদ্ধার** — localStorage থেকে ডেটা লোড
- **Alert সিস্টেম** — Success/Info/Warning/Error ব্যানার (Uiverse.io ডিজাইন)
- **১০০% রেসপন্সিভ** — মোবাইল (৩৯০px) থেকে ডেস্কটপ (১২৮০px+) পর্যন্ত নিখুঁত
- **Bootstrap Icons CDN** ও **Tailwind CSS 4** দিয়ে ডিজাইন
- **Noto Sans Bengali** ফন্ট — বাংলা টেক্সট নিখুঁত রেন্ডারিং
- **সম্পূর্ণ static export** — Cloudflare Pages / GitHub Pages / Netlify-তে ডিপ্লয় করার জন্য প্রস্তুত

## 🛠 প্রযুক্তি স্ট্যাক

| ক্যাটাগরি | প্রযুক্তি |
|----------|----------|
| ফ্রেমওয়ার্ক | Next.js 16 (App Router, static export) |
| ভাষা | TypeScript 5 (strict) |
| স্টাইলিং | Tailwind CSS 4 + tw-animate-css |
| আইকন | Bootstrap Icons (CDN) + Lucide React |
| UI কম্পোনেন্ট | shadcn/ui (accordion, sheet, toast, toaster) |
| অ্যানিমেশন | Framer Motion |
| স্টোরেজ | localStorage (কোনো ব্যাকএন্ড নেই) |
| ফন্ট | Inter (Latin) + Noto Sans Bengali |

## 📁 প্রজেক্ট কাঠামো

```
.
├── public/
│   ├── logo-ec.png            # Bangladesh Election Commission logo
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css        # Brand theme + card styles + animations
│   │   ├── layout.tsx         # Fonts, metadata, Bootstrap Icons CDN, LanguageProvider
│   │   └── page.tsx           # Hash router → 7 page views
│   ├── components/
│   │   ├── nid/
│   │   │   ├── alert.tsx              # Success/Info/Warning/Error alerts
│   │   │   ├── language-provider.tsx  # BN/EN context (localStorage-backed)
│   │   │   ├── one-id-card.tsx        # One-ID smart card (pure SVG)
│   │   │   ├── site-header.tsx        # Sticky header + nav + mobile sheet
│   │   │   ├── site-footer.tsx        # Sticky footer + contact info
│   │   │   ├── use-hash-route.ts      # Hash-based client router
│   │   │   └── pages/
│   │   │       ├── home-page.tsx      # Hero + demo card + stats + features
│   │   │       ├── about-page.tsx     # D-STAR project + concept + benefits (+ PageHeader)
│   │   │       ├── services-page.tsx  # 4 service categories + wallet
│   │   │       ├── apply-page.tsx     # Functional application form
│   │   │       ├── card-page.tsx      # Tracking-based card retrieval
│   │   │       ├── faq-page.tsx       # Accordion FAQ
│   │   │       └── contact-page.tsx   # Contact form
│   │   └── ui/               # shadcn/ui (accordion, sheet, toast, toaster only)
│   ├── hooks/
│   │   └── use-toast.ts
│   └── lib/
│       ├── store.ts          # localStorage application store
│       ├── i18n.ts           # All bilingual content
│       └── utils.ts          # cn() helper
├── .gitignore
├── next.config.ts            # output: "export" → produces ./out
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 শুরু করা

### প্রয়োজনীয়তা

- Node.js 18.18+
- npm / bun

### ইনস্টল ও চালানো

```bash
# ডিপেন্ডেন্সি ইনস্টল
npm install
# অথবা: bun install

# ডেভেলপমেন্ট সার্ভার
npm run dev
# → http://localhost:3000

# প্রোডাকশন বিল্ড (→ ./out ডিরেক্টরি তৈরি করে)
npm run build
```

## ☁️ Cloudflare Pages এ ডিপ্লয়

১. **GitHub-এ পুশ করুন** এই সম্পূর্ণ রিপোজিটরিটি।

২. **Cloudflare Dashboard** → Workers & Pages → Create application → Pages → Connect to Git → আপনার রিপো নির্বাচন করুন।

৩. **Build configuration:**
   - **Framework preset:** `Next.js`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** (খালি রাখুন — রিপোর রুটই প্রজেক্ট রুট)

৪. **Deploy** ক্লিক করুন।

বিল্ড সম্পন্ন হলে Cloudflare একটি `*.pages.dev` ডোমেইন দেবে।

> যেহেতু অ্যাপটি সম্পূর্ণ static (কোনো server-side API নেই), তাই Cloudflare Pages-এর ফ্রি প্ল্যানে নিখরচায় হোস্ট করা যায়।

### বিকল্প: GitHub Pages / Netlify / Vercel

যেকোনো static হোস্টিং-এ কাজ করবে। শুধু `out/` ডিরেক্টরিটি সার্ভ করুন।

## 🎨 কাস্টমাইজেশন

### ভাষা/টেক্সট পরিবর্তন
সব টেক্সট `src/lib/i18n.ts`-এ। প্রতিটি স্ট্রিং `{ bn: "...", en: "..." }` ফরম্যাটে। নতুন ভাষা যোগ করতে `Locale` টাইপ ও `t()` হেল্পার আপডেট করুন।

### কার্ড ডিজাইন পরিবর্তন
`src/components/nid/one-id-card.tsx` — এটি একটি একক `<svg>` কম্পোনেন্ট (viewBox: 856×536)। যেকোনো SVG এলিমেন্ট এডিট করে কার্ড কাস্টমাইজ করুন।

### রং পরিবর্তন
`src/app/globals.css`-এ `:root` ও `.dark` CSS variables।

### অ্যাপ্লিকেশন ডেটা
`src/lib/store.ts` — localStorage-ভিত্তিক স্টোর। ভবিষ্যতে এটি একটি REST API বা ডাটাবেস দিয়ে প্রতিস্থাপন করা যাবে (`submitApplication` ও `getApplication` ফাংশন প্রতিস্থাপন করুন)।

## 📝 লাইসেন্স

এই প্রজেক্টটি বাংলাদেশ সরকারের এক-আইডি কনসেপ্টের উপর ভিত্তি করে একটি প্রদর্শনমূলক পোর্টাল। শিক্ষা ও উন্নয়নের জন্য বিনামূল্যে ব্যবহারযোগ্য।
