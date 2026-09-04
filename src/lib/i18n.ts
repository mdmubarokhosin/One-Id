// Bilingual content (Bengali + English) for the One-ID (এক-আইডি) portal.
// Based on the Bangladesh Government "Unified Digital Identity" / D-STAR project.

export type Locale = "bn" | "en";

type L = { bn: string; en: string };

export const i18n = {
  brand: {
    name: { bn: "এক-আইডি", en: "One-ID" },
    full: { bn: "ইউনিফাইড ডিজিটাল আইডেন্টিটি", en: "Unified Digital Identity" },
    org: { bn: "বাংলাদেশ সরকার", en: "Government of Bangladesh" },
    orgSub: { bn: "তথ্য ও যোগাযোগপ্রযুক্তি বিভাগ", en: "ICT Division" },
    tagline: { bn: "এক নাগরিক, এক পরিচয়, এক ওয়ালেট", en: "One Citizen, One Identity, One Wallet" },
  },

  nav: {
    home: { bn: "হোম", en: "Home" },
    about: { bn: "এক-আইডি কী", en: "About One-ID" },
    services: { bn: "সেবাসমূহ", en: "Services" },
    apply: { bn: "আবেদন", en: "Apply" },
    card: { bn: "আমার কার্ড", en: "My Card" },
    faq: { bn: "প্রশ্নোত্তর", en: "FAQ" },
    contact: { bn: "যোগাযোগ", en: "Contact" },
    login: { bn: "লগইন", en: "Login" },
  },

  home: {
    badge: { bn: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার", en: "Government of the People's Republic of Bangladesh" },
    heroTitle: { bn: "এক-আইডি", en: "One-ID" },
    heroSub: { bn: "এক নাগরিক, এক পরিচয়, এক ওয়ালেট", en: "One Citizen, One Identity, One Wallet" },
    heroDesc: {
      bn: "জন্মের পর থেকেই দেশের প্রতিটি নাগরিককে একটি একক ডিজিটাল পরিচয় দেওয়া হবে। এই পরিচয়পত্র নাগরিকের আজীবন স্থায়ী ও স্বতন্ত্র পরিচয় হিসেবে ব্যবহৃত হবে — জাতীয় পরিচয়পত্র, ফ্যামিলি কার্ড, কৃষক কার্ড সব এক কার্ডে।",
      en: "Every citizen will receive a single digital identity from birth. This card will be a permanent, unique identity for life — replacing NID, family card, farmer card and more.",
    },
    applyBtn: { bn: "এক-আইডির জন্য আবেদন", en: "Apply for One-ID" },
    cardBtn: { bn: "আমার কার্ড দেখুন", en: "View My Card" },
    statsTitle: { bn: "প্রকল্পের পরিসংখ্যান", en: "Project at a Glance" },
    stats: [
      { value: "১৮ কোটি", valueEn: "180 Million", label: { bn: "নাগরিক পাবেন এক-আইডি", en: "Citizens to receive One-ID" } },
      { value: "২০ কোটি", valueEn: "200 Million", label: { bn: "কার্ড উৎপাদন ও মুদ্রণ", en: "Cards to be printed" } },
      { value: "৯,১৯৩ কোটি ৳", valueEn: "৳ 9,193 Cr", label: { bn: "প্রকল্প ব্যয় (ডি-স্টার)", en: "Project cost (D-STAR)" } },
      { value: "২০২৬–২০৩১", valueEn: "2026–2031", label: { bn: "প্রকল্পের মেয়াদ", en: "Project timeline" } },
    ],
    featuresTitle: { bn: "এক-আইডির সুবিধা", en: "Benefits of One-ID" },
    features: [
      {
        icon: "bi-person-check",
        title: { bn: "জন্মেই পরিচয়", en: "Identity from birth" },
        desc: { bn: "জন্মের পরপরই শিশু পাবে একক ডিজিটাল পরিচয়। আর কোনো কার্ডের প্রয়োজন নেই।", en: "A newborn gets a unique digital identity immediately — no other card needed." },
      },
      {
        icon: "bi-shield-check",
        title: { bn: "এক পরিচয়েই সব সেবা", en: "All services, one ID" },
        desc: { bn: "সরকারি বিভিন্ন দপ্তরে একই তথ্য বারবার দেওয়ার প্রয়োজন নেই।", en: "No need to provide the same information repeatedly across offices." },
      },
      {
        icon: "bi-credit-card-2-front",
        title: { bn: "একাধিক কার্ড একত্রে", en: "Multiple cards unified" },
        desc: { bn: "এনআইডি, ফ্যামিলি কার্ড, কৃষক কার্ড — সব এক-আইডিতে একীভূত।", en: "NID, family card, farmer card — all unified into One-ID." },
      },
      {
        icon: "bi-heart-pulse",
        title: { bn: "স্বাস্থ্যসেবা", en: "Healthcare access" },
        desc: { bn: "স্বাস্থ্য রেকর্ড ও সেবা পেতে সহজ প্রবেশাধিকার।", en: "Easy access to health records and services." },
      },
      {
        icon: "bi-mortarboard",
        title: { bn: "শিক্ষা সেবা", en: "Education services" },
        desc: { bn: "শিক্ষার্থীর সম্পূর্ণ একাডেমিক রেকর্ড এক আইডিতে।", en: "Complete academic records linked to one ID." },
      },
      {
        icon: "bi-wallet2",
        title: { bn: "ডিজিটাল ওয়ালেট", en: "Digital wallet" },
        desc: { bn: "এক পরিচয়েই ডিজিটাল লেনদেহ ও আর্থিক সেবা।", en: "Digital transactions & financial services with one identity." },
      },
    ] as ReadonlyArray<{ icon: string; title: L; desc: L }>,
    howTitle: { bn: "কীভাবে কাজ করে", en: "How it works" },
    howSteps: [
      { title: { bn: "আবেদন করুন", en: "Apply" }, desc: { bn: "অনলাইনে আবেদন পূরণ করুন", en: "Fill out the online application" } },
      { title: { bn: "যাচাই ও অনুমোদন", en: "Verification & approval" }, desc: { bn: "তথ্য যাচাই করে কার্ড তৈরি", en: "Data verified and card generated" } },
      { title: { bn: "কার্ড গ্রহণ", en: "Receive card" }, desc: { bn: "পলিকার্বোনেট চিপ কার্ড পান", en: "Receive polycarbonate chip card" } },
      { title: { bn: "সব সেবা এক কার্ডে", en: "All services, one card" }, desc: { bn: "স্বাস্থ্য, শিক্ষা, পরিবার সব সেবা", en: "Health, education, family — all services" } },
    ] as ReadonlyArray<{ title: L; desc: L }>,
    ctaTitle: { bn: "আজই আপনার এক-আইডির জন্য আবেদন করুন", en: "Apply for your One-ID today" },
    ctaDesc: { bn: "ভবিষ্যতের ডিজিটাল বাংলাদেশে প্রস্তুত থাকুন", en: "Get ready for a digital Bangladesh" },
  },

  about: {
    title: { bn: "এক-আইডি কী?", en: "What is One-ID?" },
    intro: {
      bn: "‘ইউনিফাইড ডিজিটাল আইডেন্টিটি’ বা ‘এক-আইডি’ হলো বাংলাদেশ সরকারের একটি উদ্যোগ, যার মাধ্যমে দেশের প্রতিটি নাগরিককে জন্মের পরই একটি একক, স্থায়ী ও স্বতন্ত্র ডিজিটাল পরিচয় দেওয়া হবে। এই পরিচয়পত্র নাগরিকের আজীবন স্থায়ী ও স্বতন্ত্র পরিচয় হিসেবে ব্যবহৃত হবে।",
      en: "‘Unified Digital Identity’ or ‘One-ID’ is a Government of Bangladesh initiative giving every citizen a single, permanent and unique digital identity from birth — used as a lifelong identity.",
    },
    projectTitle: { bn: "ডি-স্টার প্রকল্প", en: "D-STAR Project" },
    projectDesc: {
      bn: "তথ্য ও যোগাযোগপ্রযুক্তি বিভাগ ‘ডিজিটাল সার্ভিস ট্রান্সফরমেশন ফর অ্যাকসেস অ্যান্ড রেজিলিয়েন্স’ বা ‘ডি-স্টার’ নামে একটি প্রকল্প হাতে নিয়েছে। বাংলাদেশ কম্পিউটার কাউন্সিল প্রকল্পটি বাস্তবায়ন করবে। ২০২৬ থেকে ২০৩১ সাল পর্যন্ত প্রকল্প বাস্তবায়নের সময়কাল নির্ধারণ করা হয়েছে। অনুমোদনের জন্য প্রকল্পের প্রস্তাব পরিকল্পনা কমিশনে পাঠানো হয়েছে।",
      en: "The ICT Division has undertaken ‘Digital Service Transformation for Access and Resilience’ (D-STAR). Bangladesh Computer Council will implement it during 2026–2031. The proposal has been sent to the Planning Commission for approval.",
    },
    conceptTitle: { bn: "মূল ধারণা", en: "Core concept" },
    conceptDesc: {
      bn: "তথ্য ও প্রযুক্তি উপদেষ্টা রেহান আসিফ আসাদ নতুন ব্যবস্থার ধারণাকে ‘একজন নাগরিক, একটি ডিজিটাল পরিচয়, একটি ওয়ালেট’ হিসেবে তুলে ধরেছেন। এর অর্থ হলো, একজন নাগরিকের একটি পরিচয়পত্র থাকবে, যা একই সঙ্গে তার ডিজিটাল পরিচয় হিসেবে কাজ করবে। এর মাধ্যমে ভবিষ্যতে ডিজিটাল লেনদেনের সুবিধাও দেওয়ার পরিকল্পনা রয়েছে।",
      en: "ICT Advisor Rehan Asif Asad described the concept as ‘One Citizen, One Digital ID, One Wallet’. A citizen will have one card that serves as their digital identity, with future support for digital transactions.",
    },
    benefitsTitle: { bn: "কী কী সুবিধা মিলতে পারে", en: "Expected benefits" },
    benefits: [
      { t: { bn: "জন্মের পরই একক পরিচয়", en: "Single identity from birth" }, d: { bn: "নতুন জন্ম নেওয়া একটি শিশুও এই কার্ড পাবে। আর কোনো কার্ডের প্রয়োজন হবে না।", en: "Even a newborn gets this card. No other card is needed." } },
      { t: { bn: "এক পরিচয়েই বিভিন্ন সরকারি সেবা", en: "Govt services through one ID" }, d: { bn: "সরকারি বিভিন্ন দফতরে একই তথ্য বারবার দেওয়ার প্রয়োজন কমবে।", en: "No need to repeatedly provide the same info across offices." } },
      { t: { bn: "একাধিক কার্ডের ব্যবহার কমবে", en: "Multiple cards reduced" }, d: { bn: "এনআইডি, ফ্যামিলি কার্ড, কৃষক কার্ড — সব এক-আইডিতে একীভূত হবে।", en: "NID, family card, farmer card — all unified into One-ID." } },
      { t: { bn: "স্বাস্থ্যসেবায় সহজ প্রবেশাধিকার", en: "Easy access to healthcare" }, d: { bn: "নাগরিকের পরিচয় ডিজিটাল ব্যবস্থার সঙ্গে যুক্ত থাকবে।", en: "Citizen identity linked to a digital health system." } },
      { t: { bn: "ডিজিটাল ওয়ালেট", en: "Digital wallet" }, d: { bn: "একই পরিচয় দিয়ে ডিজিটাল লেনদেন ও আর্থিক সেবা।", en: "Digital transactions and financial services with the same identity." } },
      { t: { bn: "আন্তর্জাতিক অভিজ্ঞতা", en: "International experience" }, d: { bn: "যুক্তরাষ্ট্র, সিঙ্গাপুর, এস্তোনিয়া ও ভারতের অভিজ্ঞতা বিবেচনায় নেওয়া হচ্ছে।", en: "Experiences of the US, Singapore, Estonia and India are being considered." } },
    ] as ReadonlyArray<{ t: L; d: L }>,
    costTitle: { bn: "কার্ডপ্রতি ব্যয়", en: "Cost per card" },
    costDesc: {
      bn: "প্রতিটি পলিকার্বোনেট চিপ কার্ড উৎপাদন ও মুদ্রণে ব্যয় ২ মার্কিন ডলার (প্রায় ২৪৬ টাকা)। বিতরণ ও সরবরাহে ১ ডলার (প্রায় ১২৩ টাকা)। মোট প্রতি কার্ডে ব্যয় প্রায় ৩৬৯ টাকা। প্রকল্পের মোট ব্যয় ৯,১৯৩ কোটি টাকা — সরকারের নিজস্ব অর্থায়ন ৭,৬৬৩ কোটি ও বিশ্বব্যাংক ঋণ ১,৫৩০ কোটি টাকা।",
      en: "Each polycarbonate chip card costs $2 (≈৳246) for production/printing and $1 (≈৳123) for distribution — about ৳369 per card. Total project cost ৳9,193 crore: ৳7,663 crore government funding + ৳1,530 crore World Bank loan.",
    },
  },

  services: {
    title: { bn: "সেবাসমূহ", en: "Services" },
    intro: {
      bn: "এক-আইডির মাধ্যমে স্বাস্থ্য, শিক্ষা, পরিবার ও ডিজিটাল সেবামূলক সেবা — সবকিছু এক কার্ডে।",
      en: "With One-ID — health, education, family and digital services, all in one card.",
    },
    items: [
      {
        icon: "bi-heart-pulse",
        color: "rose",
        title: { bn: "স্বাস্থ্য", en: "Health" },
        desc: { bn: "নাগরিকের সম্পূর্ণ স্বাস্থ্য রেকর্ড, টিকাকরণ ইতিহাস, ও চিকিৎসা সেবা এক-আইডির সাথে যুক্ত থাকবে। যেকোনো হাসপাতালে দ্রুত সেবা পাওয়া যাবে।", en: "Complete health records, vaccination history and medical services linked to One-ID. Fast service at any hospital." },
      },
      {
        icon: "bi-mortarboard",
        color: "green",
        title: { bn: "শিক্ষা", en: "Education" },
        desc: { bn: "শিক্ষার্থীর একাডেমিক রেকর্ড, ফলাফল, বৃত্তি ও ভর্তি সেবা — সব এক-আইডিতে। বারবার তথ্য দেওয়ার প্রয়োজন নেই।", en: "Academic records, results, scholarships and admissions — all in One-ID. No repeated paperwork." },
      },
      {
        icon: "bi-people",
        color: "amber",
        title: { bn: "পরিবার", en: "Family" },
        desc: { bn: "ফ্যামিলি কার্ডের সব সেবা এক-আইডিতে একীভূত হবে। পরিবারের সদস্যদের তথ্য একসাথে পরিচালনা।", en: "All family-card services unified into One-ID. Manage family member info together." },
      },
      {
        icon: "bi-phone",
        color: "maroon",
        title: { bn: "ডিজিটাল সেবামূলক", en: "Digital Services" },
        desc: { bn: "ডিজিটাল ওয়ালেট, অনলাইন লেনদেন, সরকারি ভাতা ও কৃষক কার্ডের সেবা — সব এক পরিচয়ে।", en: "Digital wallet, online transactions, government allowances and farmer card services — all with one identity." },
      },
    ] as ReadonlyArray<{ icon: string; color: string; title: L; desc: L }>,
    walletTitle: { bn: "এক নাগরিক, এক ওয়ালেট", en: "One Citizen, One Wallet" },
    walletDesc: {
      bn: "এক-আইডি শুধু একটি পরিচয়পত্র নয় — এটি একই সাথে একটি ডিজিটাল ওয়ালেট। এর মাধ্যমে নাগরিক ডিজিটাল লেনদেন, সরকারি ভাতা গ্রহণ ও আর্থিক সেবা পাবেন।",
      en: "One-ID is not just an identity card — it is also a digital wallet. Citizens can make digital transactions, receive government allowances and access financial services.",
    },
  },

  apply: {
    title: { bn: "এক-আইডির জন্য আবেদন", en: "Apply for One-ID" },
    intro: {
      bn: "নিচের ফরমটি পূরণ করে আপনার এক-আইডির জন্য আবেদন করুন। আবেদন সফল হলে আপনি একটি ট্র্যাকিং নম্বর পাবেন।",
      en: "Fill out the form below to apply for your One-ID. On success you will receive a tracking number.",
    },
    sectionPersonal: { bn: "ব্যক্তিগত তথ্য", en: "Personal information" },
    sectionContact: { bn: "যোগাযোগের ঠিকানা", en: "Contact address" },
    sectionId: { bn: "পরিচয়ের ধরন", en: "Identity type" },
    nameBn: { bn: "নাম (বাংলায়)", en: "Name (Bengali)" },
    nameEn: { bn: "নাম (ইংরেজিতে)", en: "Name (English)" },
    nameBnPh: { bn: "যেমনঃ মোহাম্মদ রহিম উদ্দিন", en: "e.g. Mohammad Rahim Uddin" },
    nameEnPh: { bn: "যেমনঃ MOHAMMAD RAHIM UDDIN", en: "e.g. MOHAMMAD RAHIM UDDIN" },
    fatherName: { bn: "পিতার নাম / স্বামীর নাম", en: "Father's / Spouse's name" },
    motherName: { bn: "মাতার নাম", en: "Mother's name" },
    dob: { bn: "জন্ম তারিখ", en: "Date of birth" },
    gender: { bn: "লিঙ্গ", en: "Gender" },
    male: { bn: "পুরুষ", en: "Male" },
    female: { bn: "নারী", en: "Female" },
    other: { bn: "অন্যান্য", en: "Other" },
    blood: { bn: "রক্তের গ্রুপ", en: "Blood group" },
    address: { bn: "ঠিকানা", en: "Address" },
    addressPh: { bn: "গ্রাম/মহল্লা, ডাকঘর", en: "Village/Mahalla, Post office" },
    district: { bn: "জেলা", en: "District" },
    upazila: { bn: "উপজেলা/থানা", en: "Upazila/Thana" },
    phone: { bn: "মোবাইল নম্বর", en: "Mobile number" },
    phonePh: { bn: "যেমনঃ ০১৭xxxxxxxx", en: "e.g. 017xxxxxxxx" },
    email: { bn: "ইমেইল (ঐচ্ছিক)", en: "Email (optional)" },
    idType: { bn: "আবেদনের ধরন", en: "Application type" },
    idNew: { bn: "নতুন এক-আইডি", en: "New One-ID" },
    idMigrate: { bn: "এনআইডি থেকে এক-আইডিতে স্থানান্তর", en: "Migrate from NID to One-ID" },
    nidNumber: { bn: "বর্তমান এনআইডি নম্বর", en: "Current NID number" },
    submit: { bn: "আবেদন জমা দিন", en: "Submit application" },
    submitting: { bn: "জমা হচ্ছে...", en: "Submitting..." },
    errRequired: { bn: "অনুগ্রহ করে প্রয়োজনীয় সকল তথ্য প্রদান করুন", en: "Please fill in all required fields" },
    success: { bn: "আবেদন সফলভাবে জমা হয়েছে!", en: "Application submitted successfully!" },
    tracking: { bn: "আপনার ট্র্যাকিং নম্বর", en: "Your tracking number" },
    viewCard: { bn: "আমার কার্ড দেখুন", en: "View my card" },
    securityNote: { bn: "আপনার তথ্য সুরক্ষিত ও গোপনীয় থাকবে।", en: "Your information is secure and confidential." },
  },

  card: {
    title: { bn: "আমার এক-আইডি কার্ড", en: "My One-ID Card" },
    intro: { bn: "আপনার ট্র্যাকিং নম্বর দিয়ে কার্ডটি দেখুন", en: "View your card with the tracking number" },
    trackingLabel: { bn: "ট্র্যাকিং নম্বর", en: "Tracking number" },
    trackingPh: { bn: "ট্র্যাকিং নম্বর লিখুন", en: "Enter tracking number" },
    load: { bn: "কার্ড দেখুন", en: "Show card" },
    notFound: { bn: "এই ট্র্যাকিং নম্বরে কোনো কার্ড পাওয়া যায়নি", en: "No card found for this tracking number" },
    loading: { bn: "লোড হচ্ছে...", en: "Loading..." },
    download: { bn: "ডাউনলোড", en: "Download" },
    // Card face labels (matching the traced SVG template)
    govt: { bn: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার", en: "Government of the People's Republic of Bangladesh" },
    authority: { bn: "ইলেকট্রনিক পরিচয়পত্র (এক-আইডি)", en: "Electronic Identity Card (One-ID)" },
    cardTag: { bn: "এক নাগরিক, এক পরিচয়", en: "One Citizen, One Identity" },
    photo: { bn: "ছবি", en: "Photo" },
    fName: { bn: "নাম:", en: "Name:" },
    fFather: { bn: "পিতা:", en: "Father:" },
    fDob: { bn: "জন্ম তারিখ:", en: "Date of birth:" },
    fBirthPlace: { bn: "জন্মস্থান:", en: "Place of birth:" },
    fIssue: { bn: "ইস্যুর তারিখ:", en: "Issue date:" },
    fOffice: { bn: "পরিচয় প্রদানকারী অফিস:", en: "Issuing office:" },
    office: { bn: "বাংলাদেশ কম্পিউটার কাউন্সিল", en: "Bangladesh Computer Council" },
    sHealth: { bn: "স্বাস্থ্য", en: "Health" },
    sEdu: { bn: "শিক্ষা", en: "Education" },
    sFamily: { bn: "পরিবার", en: "Family" },
    sDigital: { bn: "ডিজিটাল সেবামূলক", en: "Digital Services" },
    back: { bn: "নতুন ট্র্যাকিং নম্বর", en: "New tracking number" },
  },

  faq: {
    title: { bn: "সাধারণ জিজ্ঞাসা", en: "Frequently Asked Questions" },
    items: [
      {
        q: { bn: "এক-আইডি কী?", en: "What is One-ID?" },
        a: { bn: "এক-আইডি বা ইউনিফাইড ডিজিটাল আইডেন্টিটি হলো বাংলাদেশ সরকারের একটি উদ্যোগ, যার মাধ্যমে প্রতিটি নাগরিককে জন্মের পরই একটি একক, স্থায়ী ও স্বতন্ত্র ডিজিটাল পরিচয় দেওয়া হবে।", en: "One-ID (Unified Digital Identity) is a Government of Bangladesh initiative giving every citizen a single, permanent and unique digital identity from birth." },
      },
      {
        q: { bn: "এক-আইডির সাথে এনআইডির পার্থক্য কী?", en: "How is One-ID different from NID?" },
        a: { bn: "এনআইডি ১৮ বছর বয়সে দেওয়া হয়। কিন্তু এক-আইডি জন্মের পরপরই দেওয়া হবে এবং আজীবন স্থায়ী থাকবে। ধীরে ধীরে এনআইডি, ফ্যামিলি কার্ড ও কৃষক কার্ড এক-আইডিতে একীভূত হবে।", en: "NID is issued at age 18. One-ID is issued at birth and is permanent for life. NID, family card and farmer card will gradually be unified into One-ID." },
      },
      {
        q: { bn: "এক-আইডি দিয়ে কী কী সেবা পাওয়া যাবে?", en: "What services can I get with One-ID?" },
        a: { bn: "স্বাস্থ্য, শিক্ষা, পরিবার ও ডিজিটাল সেবামূলক সেবা — সব এক-আইডির মাধ্যমে। এছাড়া ডিজিটাল ওয়ালেটের মাধ্যমে লেনদেন ও আর্থিক সেবাও পাওয়া যাবে।", en: "Health, education, family and digital services — all through One-ID. Plus digital wallet transactions and financial services." },
      },
      {
        q: { bn: "কার্ডটির খরচ কত?", en: "How much does the card cost?" },
        a: { bn: "প্রতিটি পলিকার্বোনেট চিপ কার্ড উৎপাদন, মুদ্রণ, বিতরণ ও সরবরাহ মিলিয়ে প্রায় ৩৬৯ টাকা। প্রকল্পের মোট ব্যয় ৯,১৯৩ কোটি টাকা।", en: "Each polycarbonate chip card costs about ৳369 (production, printing, distribution). Total project cost is ৳9,193 crore." },
      },
      {
        q: { bn: "প্রকল্পটি কখন থেকে চালু হবে?", en: "When does the project start?" },
        a: { bn: "ডি-স্টার প্রকল্পের মেয়াদ ২০২৬ থেকে ২০৩১ সাল পর্যন্ত। অনুমোদনের জন্য প্রস্তাব পরিকল্পনা কমিশনে পাঠানো হয়েছে।", en: "The D-STAR project runs from 2026 to 2031. The proposal has been sent to the Planning Commission for approval." },
      },
      {
        q: { bn: "এক-আইডি প্রকল্প কে বাস্তবায়ন করছে?", en: "Who implements the One-ID project?" },
        a: { bn: "তথ্য ও যোগাযোগপ্রযুক্তি বিভাগের অধীনে বাংলাদেশ কম্পিউটার কাউন্সিল ডি-স্টার প্রকল্প বাস্তবায়ন করবে।", en: "Bangladesh Computer Council under the ICT Division implements the D-STAR project." },
      },
    ] as ReadonlyArray<{ q: L; a: L }>,
  },

  contact: {
    title: { bn: "যোগাযোগ", en: "Contact" },
    intro: { bn: "এক-আইডি সংক্রান্ত যেকোনো প্রশ্ন বা সহায়তার জন্য যোগাযোগ করুন", en: "Contact us for any One-ID related questions or support" },
    org: { bn: "বাংলাদেশ কম্পিউটার কাউন্সিল", en: "Bangladesh Computer Council" },
    dept: { bn: "তথ্য ও যোগাযোগপ্রযুক্তি বিভাগ", en: "ICT Division" },
    project: { bn: "ডি-স্টার (D-STAR) প্রকল্প", en: "D-STAR Project" },
    address: { bn: "এ-কর্ণার, বিসিসি ভবন, ই-১৪, আগারগাঁও, শেরেবাংলা নগর, ঢাকা-১২০৭", en: "E-14, BCC Bhaban, Agargaon, Sher-e-Bangla Nagar, Dhaka-1207" },
    emailLabel: { bn: "ই-মেইল", en: "Email" },
    email: "info@nidw.gov.bd",
    helplineLabel: { bn: "হেল্পলাইন", en: "Helpline" },
    helpline: "১০৫",
    helplineEn: "105",
    phoneLabel: { bn: "ফোন", en: "Phone" },
    phone: "+৮৮ ০১৭০৮-৫০১২৬১",
    phoneEn: "+880 1708-501261",
    hoursLabel: { bn: "যোগাযোগের সময়", en: "Office hours" },
    hours: { bn: "রবিবার–বৃহস্পতিবার, সকাল ৯:০০ – বিকাল ৫:০০", en: "Sunday–Thursday, 9:00 AM – 5:00 PM" },
    formTitle: { bn: "বার্তা পাঠান", en: "Send a message" },
    formName: { bn: "আপনার নাম", en: "Your name" },
    formEmail: { bn: "ই-মেইল", en: "Email" },
    formMsg: { bn: "বার্তা", en: "Message" },
    formSend: { bn: "পাঠান", en: "Send" },
    formSent: { bn: "বার্তা প্রেরিত হয়েছে। ধন্যবাদ!", en: "Message sent. Thank you!" },
  },

  footer: {
    rights: { bn: "© গণপ্রজাতন্ত্রী বাংলাদেশ সরকার। সর্বস্বত্ব সংরক্ষিত।", en: "© Government of Bangladesh. All rights reserved." },
    developed: { bn: "তথ্য ও যোগাযোগপ্রযুক্তি বিভাগ কর্তৃক ডি-স্টার প্রকল্পের অধীনে উন্নয়নকৃত", en: "Developed under the D-STAR project by the ICT Division" },
    quickLinks: { bn: "দ্রুত লিংক", en: "Quick links" },
    contact: { bn: "যোগাযোগ", en: "Contact" },
    note: { bn: "এটি একটি প্রদর্শনমূলক পোর্টাল। প্রকৃত এক-আইডি সেবা চালু হলে আপনাকে জানানো হবে।", en: "This is a demonstration portal. You will be notified when the actual One-ID service launches." },
  },

  // Alert banners (matching the provided Uiverse.io design: success/info/warning/error)
  alerts: {
    success: {
      title: { bn: "সফল", en: "Success" },
      msg: { bn: "সবকিছু সফলভাবে সম্পন্ন হয়েছে!", en: "Everything went smoothly!" },
    },
    info: {
      title: { bn: "তথ্য", en: "Info" },
      msg: { bn: "এটি আপনার জন্য একটি তথ্যবার্তা।", en: "This is some information for you." },
    },
    warning: {
      title: { bn: "সতর্কতা", en: "Warning" },
      msg: { bn: "পরবর্তী ধাপে সাবধানতা অবলম্বন করুন।", en: "Be careful with this next step." },
    },
    error: {
      title: { bn: "ত্রুটি", en: "Error" },
      msg: { bn: "কিছু ভুল হয়েছে।", en: "Something went wrong." },
    },
    // Context-specific alert messages used across pages
    applySuccess: {
      title: { bn: "আবেদন সফল হয়েছে", en: "Application successful" },
      msg: { bn: "আপনার এক-আইডি আবেদন সফলভাবে জমা হয়েছে। নিচের ট্র্যাকিং নম্বর সংরক্ষণ করুন।", en: "Your One-ID application has been submitted successfully. Save the tracking number below." },
    },
    formIncomplete: {
      title: { bn: "সতর্কতা", en: "Warning" },
      msg: { bn: "অনুগ্রহ করে প্রয়োজনীয় সকল তথ্য পূরণ করুন।", en: "Please fill in all required fields." },
    },
    cardNotFound: {
      title: { bn: "ত্রুটি", en: "Error" },
      msg: { bn: "এই ট্র্যাকিং নম্বরে কোনো কার্ড পাওয়া যায়নি। নম্বরটি যাচাই করুন।", en: "No card found for this tracking number. Please verify." },
    },
    cardInfo: {
      title: { bn: "তথ্য", en: "Info" },
      msg: { bn: "আবেদন করার পর প্রাপ্ত ট্র্যাকিং নম্বর দিয়ে আপনার এক-আইডি কার্ড দেখুন।", en: "Enter the tracking number received after applying to view your One-ID card." },
    },
    contactSent: {
      title: { bn: "সফল", en: "Success" },
      msg: { bn: "আপনার বার্তা সফলভাবে প্রেরিত হয়েছে। ধন্যবাদ!", en: "Your message has been sent successfully. Thank you!" },
    },
  },
} as const;

// Helper to pick the localized value
export function t(node: { bn: string; en: string } | string, locale: Locale): string {
  if (typeof node === "string") return node;
  return node[locale];
}
