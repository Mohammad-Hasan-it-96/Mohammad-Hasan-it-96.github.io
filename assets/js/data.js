/* Portfolio content — single bilingual source of truth.
   Every user-visible string lives here under `en` / `ar`.
   Technology names stay in Latin script in both languages. */

const PROFILE = {
  name:   { en: "Mohamad Hasan",  ar: "محمد حسن" },
  full:   { en: "Mohamad Harfoush Hasan", ar: "محمد حرفوش حسن" },
  role:   { en: "Full-Stack Developer — Flutter & Laravel",
            ar: "مطوّر Full-Stack — Flutter و Laravel" },
  location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
  email: "mohamad.hasan.it.96@gmail.com",
  phone: "+963 983 820 430",
  phoneRaw: "963983820430",
  github: "https://github.com/Mohammad-Hasan-it-96"
};

const CONTENT = {
  en: {
    dir: "ltr",
    nav: { work: "Work", about: "About", skills: "Skills", experience: "Experience", contact: "Contact" },
    langBtn: "العربية",
    hero: {
      eyebrow: "Software Development Portfolio",
      tagline: "I design and ship production mobile apps and backend platforms end to end.",
      intro: "From offline-first Flutter apps with device licensing, thermal printing and push notifications, to Laravel ERPs and multi-vendor marketplaces with clean service layers, role-based access and versioned REST APIs. Plus a hardware side — Arduino and ESP32 control systems running in the real world.",
      ctaWork: "View projects",
      ctaCv: "Download CV",
      ctaPdf: "Portfolio PDF",
      stats: [
        { n: "12", l: "Selected projects" },
        { n: "6",  l: "Years of experience" },
        { n: "5",  l: "Flutter apps" },
        { n: "4",  l: "Laravel backends" }
      ]
    },
    about: {
      title: "About",
      kicker: "Engineer first, developer by trade",
      body: [
        "I'm a Computer Systems Engineer (Automation & Control), graduated with honours from the University of Aleppo, with six years of practical experience spanning software development, IT support, technical sales and embedded electronics.",
        "Most of my work is commercial software that real businesses depend on daily — pharmacies, restaurants, retail shops and distributors. I care about the parts users never see: offline-first data layers that survive a dead connection, licensing that can't be trivially bypassed, migrations that don't lose a single row, and APIs that stay stable as the product grows.",
        "I build Arabic-first (RTL) by default, and I'm equally comfortable soldering a board as I am designing a bounded context."
      ]
    },
    filters: { all: "All", flutter: "Flutter", laravel: "Laravel & Platform", embedded: "Embedded" },
    work: {
      title: "Selected work",
      kicker: "Twelve projects across mobile, backend and hardware",
      open: "Details",
      close: "Close",
      features: "Key features",
      stack: "Tech stack",
      highlights: "Engineering highlights"
    },
    skills: {
      title: "Skills",
      kicker: "What I work with",
      groups: [
        { n: "Mobile",              i: "phone", v: ["Flutter", "Dart", "BLoC", "Provider", "get_it", "Clean Architecture", "Drift", "sqflite", "go_router", "Android"] },
        { n: "Backend",             i: "server", v: ["PHP 8.x", "Laravel 12", "REST API design", "DDD", "Service layer", "Policies & RBAC", "Passport / Sanctum", "Queues & jobs", "WebSockets", "RabbitMQ"] },
        { n: "Frontend",            i: "code", v: ["JavaScript", "TypeScript", "React 18/19", "Next.js", "Tailwind", "Bootstrap", "Blade", "jQuery", "HTML5", "CSS3"] },
        { n: "Data & Infra",        i: "db", v: ["MySQL", "SQLite", "Redis", "Elasticsearch", "Octane & Horizon", "Nginx", "Apache", "Linux", "AWS S3", "Cloudinary", "Git"] },
        { n: "Integrations",        i: "plug", v: ["Firebase FCM", "Stripe", "Razorpay", "MercadoPago", "Telr", "2GIS Maps", "Google Drive API", "Telegram Bot API", "Odoo ERP sync", "PhpSpreadsheet"] },
        { n: "Embedded & hardware", i: "chip", v: ["Arduino", "ESP32", "C / C++", "RTC modules", "Relay control", "Sensors", "LCD / OLED", "ESC & brushless motors", "Wi-Fi / IoT", "Soldering"] },
        { n: "IT support",          i: "tool", v: ["PC & laptop diagnostics", "Component replacement", "Thermal maintenance", "OS installation", "Networking", "User support"] }
      ]
    },
    experience: {
      title: "Experience",
      kicker: "Where I've worked",
      items: [
        { r: "IT Sales Specialist", c: "Global 4 Laptop Shop", l: "Damascus, Syria", d: "2026 – Present",
          p: ["Advise business and individual customers on laptops, components and peripherals, matching specifications to technical requirements and budget.",
              "Pre-sales technical consultation and post-sale support: system configuration, OS installation and troubleshooting."] },
        { r: "Full-Stack Laravel Developer", c: "Rammaz Software", l: "Remote — Turkey", d: "2021 – May 2026",
          p: ["Built and maintained scalable Laravel backends and RESTful APIs serving both web and mobile clients.",
              "Shipped marketplace (e-commerce) platforms and a digital wallet solution.",
              "Integrated third-party APIs and payment gateways into production systems.",
              "Optimised MySQL databases and application performance for high-traffic modules.",
              "Implemented queues, background jobs and asynchronous processing for heavy workloads.",
              "Managed cloud storage on AWS S3 and Cloudinary; contributed to architecture and feature planning."] },
        { r: "Laptop Sales Manager & IT Technician", c: "iApple Shop", l: "Aleppo, Syria", d: "2021 – 2022",
          p: ["Managed sales of the store's non-Apple laptop range, matching hardware to customers' technical needs and budget.",
              "Software services: OS installation, driver setup, system optimisation and troubleshooting.",
              "Light hardware repairs — battery, screen, RAM and storage replacement, board cleaning and thermal paste renewal."] },
        { r: "IT Support Specialist", c: "BeeTronix", l: "Aleppo, Syria", d: "2020 – 2021",
          p: ["Hardware, software and network support for company workstations and peripherals.",
              "System installation, configuration, user account management and preventive maintenance.",
              "Documented recurring faults and fixes to speed up resolution across the support team."] }
      ]
    },
    education: {
      title: "Education",
      degree: "Bachelor of Computer Systems Engineering (Automation & Control)",
      school: "University of Aleppo",
      date: "Graduated 2020",
      note: "GPA 89.7 / 100 — Excellent with Honours",
      langTitle: "Languages",
      langs: [{ n: "Arabic", v: "Native" }, { n: "English", v: "Professional working proficiency" }]
    },
    contact: {
      title: "Let's build something",
      kicker: "Available for Flutter mobile development, Laravel backend engineering and full-stack product delivery.",
      email: "Email me",
      whatsapp: "WhatsApp",
      github: "GitHub",
      cvEn: "CV (English)",
      cvAr: "CV (Arabic)",
      pdf: "Portfolio PDF"
    },
    footer: { built: "Built and hosted on GitHub Pages" },
    photoAlt: "Photo of Mohamad Hasan"
  },

  ar: {
    dir: "rtl",
    nav: { work: "الأعمال", about: "نبذة", skills: "المهارات", experience: "الخبرة", contact: "تواصل" },
    langBtn: "English",
    hero: {
      eyebrow: "معرض أعمال تطوير البرمجيات",
      tagline: "أصمّم وأبني تطبيقات موبايل ومنصات خلفية جاهزة للإنتاج من البداية للنهاية.",
      intro: "من تطبيقات Flutter تعمل دون اتصال بالكامل، مع ترخيص مرتبط بالجهاز وطباعة حرارية وإشعارات فورية، إلى أنظمة ERP على Laravel وأسواق متعدّدة البائعين ببنية خدمات نظيفة وصلاحيات حسب الدور وواجهات REST مُصدَّرة بإصدارات. إضافةً إلى جانب عتادي — أنظمة تحكّم على Arduino و ESP32 تعمل فعلياً على أرض الواقع.",
      ctaWork: "شاهد المشاريع",
      ctaCv: "تحميل السيرة الذاتية",
      ctaPdf: "ملف الأعمال PDF",
      stats: [
        { n: "١٢", l: "مشروع مختار" },
        { n: "٦",  l: "سنوات خبرة" },
        { n: "٥",  l: "تطبيق Flutter" },
        { n: "٤",  l: "نظام Laravel" }
      ]
    },
    about: {
      title: "نبذة",
      kicker: "مهندس أولاً، ومطوّر بحكم المهنة",
      body: [
        "مهندس نظم حاسوبية (أتمتة وتحكّم)، خرّيج جامعة حلب بمرتبة الشرف، بستّ سنوات خبرة عملية تمتدّ على تطوير البرمجيات والدعم الفني والمبيعات التقنية والإلكترونيات المدمجة.",
        "معظم شغلي برمجيات تجارية تعتمد عليها شركات حقيقية يومياً — صيدليات ومطاعم ومحلات تجزئة وشركات توزيع. يهمّني الجزء الذي لا يراه المستخدم: طبقة بيانات تعمل دون اتصال وتصمد عند انقطاع الشبكة، ونظام ترخيص لا يُلتفّ عليه بسهولة، وترحيلات قواعد بيانات لا تُضيّع سطراً واحداً، وواجهات API تبقى مستقرّة مع نمو المنتج.",
        "أبني بالعربية أولاً (RTL) بشكل افتراضي، ومرتاح في لحام لوحة إلكترونية بقدر ارتياحي في تصميم bounded context."
      ]
    },
    filters: { all: "الكل", flutter: "Flutter", laravel: "Laravel والمنصّات", embedded: "الأنظمة المدمجة" },
    work: {
      title: "أعمال مختارة",
      kicker: "اثنا عشر مشروعاً بين الموبايل والخلفيات والعتاد",
      open: "التفاصيل",
      close: "إغلاق",
      features: "أبرز الميزات",
      stack: "التقنيات",
      highlights: "نقاط هندسية بارزة"
    },
    skills: {
      title: "المهارات",
      kicker: "الأدوات التي أعمل بها",
      groups: [
        { n: "الموبايل",            i: "phone", v: ["Flutter", "Dart", "BLoC", "Provider", "get_it", "Clean Architecture", "Drift", "sqflite", "go_router", "Android"] },
        { n: "الخلفيات (Backend)",  i: "server", v: ["PHP 8.x", "Laravel 12", "REST API design", "DDD", "Service layer", "Policies & RBAC", "Passport / Sanctum", "Queues & jobs", "WebSockets", "RabbitMQ"] },
        { n: "الواجهات (Frontend)", i: "code", v: ["JavaScript", "TypeScript", "React 18/19", "Next.js", "Tailwind", "Bootstrap", "Blade", "jQuery", "HTML5", "CSS3"] },
        { n: "البيانات والبنية",     i: "db", v: ["MySQL", "SQLite", "Redis", "Elasticsearch", "Octane & Horizon", "Nginx", "Apache", "Linux", "AWS S3", "Cloudinary", "Git"] },
        { n: "التكاملات",           i: "plug", v: ["Firebase FCM", "Stripe", "Razorpay", "MercadoPago", "Telr", "2GIS Maps", "Google Drive API", "Telegram Bot API", "Odoo ERP sync", "PhpSpreadsheet"] },
        { n: "الإلكترونيات المدمجة", i: "chip", v: ["Arduino", "ESP32", "C / C++", "RTC modules", "Relay control", "Sensors", "LCD / OLED", "ESC & brushless motors", "Wi-Fi / IoT", "لحام الدارات"] },
        { n: "الدعم الفني",         i: "tool", v: ["تشخيص وصيانة الحواسيب واللابتوبات", "استبدال القطع", "الصيانة الحرارية", "تنصيب أنظمة التشغيل", "الشبكات", "دعم المستخدمين"] }
      ]
    },
    experience: {
      title: "الخبرة العملية",
      kicker: "أين عملت",
      items: [
        { r: "أخصائي مبيعات تقنية", c: "Global 4 Laptop Shop", l: "دمشق، سوريا", d: "2026 – حتى الآن",
          p: ["تقديم الاستشارة لعملاء الشركات والأفراد في اللابتوبات والقطع والملحقات، ومطابقة المواصفات مع الاحتياج التقني والميزانية.",
              "استشارة تقنية قبل البيع ودعم بعد البيع: إعداد النظام، تنصيب نظام التشغيل، ومعالجة الأعطال."] },
        { r: "مطوّر Laravel — Full-Stack", c: "Rammaz Software", l: "عن بُعد — تركيا", d: "2021 – أيار 2026",
          p: ["بناء وصيانة أنظمة Laravel خلفية قابلة للتوسّع وواجهات RESTful تخدم عملاء الويب والموبايل.",
              "تطوير وإطلاق منصّات تجارة إلكترونية (marketplace) وحلّ محفظة رقمية.",
              "دمج واجهات طرف ثالث وبوّابات دفع ضمن أنظمة إنتاجية.",
              "تحسين أداء قواعد بيانات MySQL والتطبيق للوحدات عالية الحِمل.",
              "تنفيذ الطوابير والمهام الخلفية والمعالجة غير المتزامنة للأعباء الثقيلة.",
              "إدارة التخزين السحابي على AWS S3 و Cloudinary، والمساهمة في تصميم البنية وتخطيط الميزات."] },
        { r: "مدير مبيعات لابتوبات وفنّي تقني", c: "iApple Shop", l: "حلب، سوريا", d: "2021 – 2022",
          p: ["إدارة مبيعات اللابتوبات غير التابعة لـ Apple في المحل، ومطابقة العتاد مع احتياج الزبون وميزانيته.",
              "خدمات برمجية: تنصيب أنظمة التشغيل والتعريفات، وتحسين أداء النظام، ومعالجة الأعطال.",
              "إصلاحات عتادية خفيفة — تبديل البطارية والشاشة والذاكرة والقرص، وتنظيف اللوحة وتجديد المعجون الحراري."] },
        { r: "أخصائي دعم تقني", c: "BeeTronix", l: "حلب، سوريا", d: "2020 – 2021",
          p: ["دعم عتادي وبرمجي وشبكي لمحطات العمل والملحقات في الشركة.",
              "تنصيب الأنظمة وإعدادها، وإدارة حسابات المستخدمين، والصيانة الوقائية.",
              "توثيق الأعطال المتكرّرة وحلولها لتسريع المعالجة على مستوى فريق الدعم."] }
      ]
    },
    education: {
      title: "التعليم",
      degree: "إجازة في هندسة النظم الحاسوبية (أتمتة وتحكّم)",
      school: "جامعة حلب",
      date: "التخرّج 2020",
      note: "المعدّل 89.7 / 100 — امتياز مع مرتبة الشرف",
      langTitle: "اللغات",
      langs: [{ n: "العربية", v: "اللغة الأم" }, { n: "الإنكليزية", v: "إجادة عملية احترافية" }]
    },
    contact: {
      title: "لنبنِ شيئاً معاً",
      kicker: "متاح لتطوير تطبيقات Flutter، وهندسة الخلفيات على Laravel، وتسليم منتجات Full-Stack كاملة.",
      email: "راسلني بالإيميل",
      whatsapp: "واتساب",
      github: "GitHub",
      cvEn: "السيرة الذاتية (إنكليزي)",
      cvAr: "السيرة الذاتية (عربي)",
      pdf: "ملف الأعمال PDF"
    },
    footer: { built: "مبني ومستضاف على GitHub Pages" },
    photoAlt: "صورة محمد حسن"
  }
};

/* ---------------------------------------------------------------- projects */

const PROJECTS = [
  {
    id: "ecopack", cat: "flutter", num: "01", badge: "Flutter",
    tech: ["Flutter 3.8", "Provider", "REST API (http)", "flutter_stripe", "2GIS Maps SDK", "geolocator", "Firebase Messaging", "local notifications", "secure_storage", "image_picker"],
    en: {
      kicker: "Waste collection · Marketplace",
      title: "EcoPack",
      tagline: "A smart waste-cleaning service — schedule and pay for recycling pickups",
      blurb: "A customer-facing app for scheduling and paying for waste-collection and recycling pickups. Residents register, save home addresses with map-based location picking, browse subscription plans, and place recurring pickup orders (bag counts, days, time slots). Localized for the Russian market, with Stripe payments and Firebase push.",
      meta: [["Domain", "Waste / recycling"], ["Market", "Russia"], ["Backend", "Laravel REST"], ["Payments", "Stripe"]],
      features: ["Token auth, registration and profile with photo upload", "Address book with a 2GIS map picker and geolocation", "Browse subscription offers and discounted plans", "Recurring pickup orders with history and tracking", "Stripe payments for orders", "FCM push, in-app inbox, unread badges, mark-all-read", "Promo banner carousel and light/dark/system theming"],
      highlights: "Full FCM lifecycle (foreground, background and terminated) with token sync back to the backend. 2GIS Maps integration behind a custom location-picker widget with a dynamically fetched API key. Stripe checkout, and English/Russian localization scaffolding."
    },
    ar: {
      kicker: "جمع النفايات · سوق خدمات",
      title: "EcoPack",
      tagline: "خدمة تنظيف ذكية — جدولة ودفع لعمليات جمع النفايات وإعادة التدوير",
      blurb: "تطبيق موجّه للزبون لجدولة ودفع تكاليف جمع النفايات وإعادة التدوير. يسجّل السكّان ويحفظون عناوين منازلهم عبر اختيار الموقع على الخريطة، ويتصفّحون خطط الاشتراك، ويضعون طلبات جمع متكرّرة (عدد الأكياس، الأيام، الفترات الزمنية). موطَّن للسوق الروسي، مع دفع عبر Stripe وإشعارات Firebase.",
      meta: [["المجال", "نفايات / إعادة تدوير"], ["السوق", "روسيا"], ["الخلفية", "Laravel REST"], ["الدفع", "Stripe"]],
      features: ["مصادقة بالتوكن، تسجيل وملف شخصي مع رفع صورة", "دفتر عناوين مع منتقي مواقع على خريطة 2GIS وتحديد جغرافي", "تصفّح عروض الاشتراك والخطط المخفّضة", "طلبات جمع متكرّرة مع سجل ومتابعة", "دفع الطلبات عبر Stripe", "إشعارات FCM، صندوق داخلي، شارات غير المقروء، تعليم الكل كمقروء", "شريط إعلانات دوّار وثيمات فاتح/داكن/حسب النظام"],
      highlights: "دورة FCM كاملة (والتطبيق مفتوح، في الخلفية، ومغلق) مع مزامنة التوكن مع الخادم. تكامل خرائط 2GIS خلف عنصر منتقي موقع مخصّص مع جلب مفتاح API ديناميكياً. دفع عبر Stripe، وبنية توطين إنكليزي/روسي."
    }
  },
  {
    id: "smart-agent", cat: "flutter", num: "02", badge: "Flutter",
    tech: ["Flutter 3.x", "Provider + get_it", "sqflite (v14 schema)", "pdf / printing", "blue_thermal_printer", "qr_flutter", "googleapis (Drive)", "Firebase Messaging", "device_info + crypto"],
    en: {
      kicker: "Offline sales · Field rep",
      title: "Smart Agent",
      native: "المندوب الذكي",
      tagline: "Offline-first order and invoicing app for medicine sales representatives",
      blurb: "A fully offline order-management tool for pharmaceutical sales reps. Reps maintain a local catalog of companies, medicines (USD/SYP pricing), pharmacies, warehouses and gifts, then create orders and invoices exported to PDF or printed on Bluetooth thermal printers. Arabic-first (RTL), targeting the Syrian market, on a licensing model with a trial period.",
      meta: [["Domain", "Pharma sales"], ["Mode", "Offline-first"], ["Database", "SQLite v14"], ["Printing", "Bluetooth ESC/POS"]],
      features: ["Offline CRUD catalogs: companies, medicines, pharmacies, warehouses, gifts", "Orders with line items and optional gift quantities", "PDF invoices (Cairo Arabic font) and filtered PDF reports", "Bluetooth thermal printing with QR codes", "Device activation and subscription licensing with trial mode", "Google Drive backup/restore, plus import, export and share", "Global search and FCM notification history"],
      highlights: "Feature-first architecture (core/ + features/) behind a DI service locator. Licensing split into single-responsibility services — ActivationService, DeviceIdentityService with salted SHA-256, TimeTamperGuard, OfflineLimitGuard and TrialModeService. Versioned SQLite migrations, and full RTL Arabic with custom slide routes."
    },
    ar: {
      kicker: "مبيعات دون اتصال · مندوبون",
      title: "المندوب الذكي",
      native: "Smart Agent",
      tagline: "تطبيق طلبات وفوترة يعمل دون اتصال لمندوبي مبيعات الأدوية",
      blurb: "أداة إدارة طلبات تعمل دون اتصال بالكامل لمندوبي مبيعات الأدوية. يحتفظ المندوب بكتالوغ محلي للشركات والأدوية (تسعير بالدولار والليرة) والصيدليات والمستودعات والهدايا، ثم ينشئ الطلبات والفواتير ويصدّرها PDF أو يطبعها على طابعات حرارية بالبلوتوث. عربي أولاً (RTL)، موجّه للسوق السوري، بنموذج ترخيص مع فترة تجريبية.",
      meta: [["المجال", "مبيعات دوائية"], ["النمط", "يعمل دون اتصال"], ["قاعدة البيانات", "SQLite v14"], ["الطباعة", "Bluetooth ESC/POS"]],
      features: ["كتالوغات كاملة دون اتصال: شركات، أدوية، صيدليات، مستودعات، هدايا", "طلبات ببنود تفصيلية وكميات هدايا اختيارية", "فواتير PDF بخط Cairo العربي وتقارير PDF مفلترة", "طباعة حرارية بالبلوتوث مع رموز QR", "تفعيل مرتبط بالجهاز وترخيص اشتراك مع وضع تجريبي", "نسخ احتياطي واستعادة عبر Google Drive، واستيراد وتصدير ومشاركة", "بحث شامل وسجل إشعارات FCM"],
      highlights: "بنية قائمة على الميزات (core/ + features/) خلف service locator للحقن. نظام الترخيص مقسوم إلى خدمات أحادية المسؤولية — ActivationService، و DeviceIdentityService باستخدام SHA-256 مع salt، و TimeTamperGuard، و OfflineLimitGuard، و TrialModeService. ترحيلات SQLite مُصدَّرة بإصدارات، ودعم عربي RTL كامل مع انتقالات مخصّصة."
    }
  },
  {
    id: "fawateer", cat: "flutter", num: "03", badge: "Flutter",
    tech: ["Flutter 3.x", "BLoC + get_it", "Clean Architecture", "Drift (SQLite v8)", "go_router", "fpdart (Either)", "mobile_scanner", "print_bluetooth_thermal", "Firebase Messaging"],
    en: {
      kicker: "Point of sale · Billing",
      title: "Fawateer",
      native: "فواتير",
      tagline: "Offline-first Arabic POS, billing and invoicing for small shops",
      blurb: "An offline-first point-of-sale app for small retailers — barcode scanning, Bluetooth thermal receipt printing, product and inventory management, and sales invoices with history. It also handles credit sales with a customer debt ledger, and gates commercial use behind subscription licensing. Arabic-first (RTL) with English as a secondary locale.",
      meta: [["Domain", "Retail POS"], ["Architecture", "Clean + BLoC"], ["Database", "Drift v8"], ["Scanning", "mobile_scanner"]],
      features: ["Live continuous barcode scanning in the POS screen", "Bluetooth thermal receipts — Arabic rendered as raster bitmaps", "Product and inventory CRUD with cost and low-stock alerts", "Sell-by-weight with live weight ↔ money entry", "Sales invoices with full stream-backed history", "Customer debt ledger and shareable account statements", "Subscription gate with a 72h offline grace period and FCM live-unlock"],
      highlights: "Clean Architecture per feature (domain / data / presentation) with a typed Failure taxonomy mapped to localized strings. Disciplined append-only Drift migrations (v8) with partial-unique indexes. Device-identity licensing via SHA-256, and a GoRouter StatefulShell with five tabs behind a licensing redirect gate."
    },
    ar: {
      kicker: "نقطة بيع · فوترة",
      title: "فواتير",
      native: "Fawateer",
      tagline: "نقطة بيع وفوترة عربية تعمل دون اتصال للمحلات الصغيرة",
      blurb: "تطبيق نقطة بيع يعمل دون اتصال لمحلات التجزئة الصغيرة — قراءة الباركود، طباعة إيصالات حرارية بالبلوتوث، إدارة المنتجات والمخزون، وفواتير مبيعات مع سجل كامل. كما يدعم البيع بالدَّين عبر دفتر ذمم الزبائن، ويحصر الاستخدام التجاري خلف ترخيص اشتراك. عربي أولاً (RTL) مع الإنكليزية كلغة ثانوية.",
      meta: [["المجال", "نقطة بيع تجزئة"], ["البنية", "Clean + BLoC"], ["قاعدة البيانات", "Drift v8"], ["المسح", "mobile_scanner"]],
      features: ["قراءة باركود مستمرّة ومباشرة ضمن شاشة البيع", "إيصالات حرارية بالبلوتوث — العربية مُرسَّمة كصور نقطية", "إدارة كاملة للمنتجات والمخزون مع الكلفة وتنبيهات نفاد الكمية", "البيع بالوزن مع إدخال حيّ يربط الوزن بالسعر", "فواتير مبيعات مع سجل كامل مبني على streams", "دفتر ذمم الزبائن وكشوف حساب قابلة للمشاركة", "بوابة اشتراك مع مهلة 72 ساعة دون اتصال وفكّ قفل فوري عبر FCM"],
      highlights: "Clean Architecture لكل ميزة (domain / data / presentation) مع تصنيف Failure مُنمَّط يُربط بنصوص مترجمة. ترحيلات Drift منضبطة تضيف فقط (v8) مع فهارس فريدة جزئية. ترخيص مبني على هوية الجهاز عبر SHA-256، و GoRouter StatefulShell بخمسة تبويبات خلف بوابة إعادة توجيه للترخيص."
    }
  },
  {
    id: "accounting-book", cat: "flutter", num: "04", badge: "Flutter",
    tech: ["Flutter 3.10 · M3", "Provider", "sqflite", "pdf / printing", "secure_storage", "local_auth", "workmanager", "sentry_flutter", "crypto (SHA-256)"],
    en: {
      kicker: "Ledger · Accounting",
      title: "Accounting Book",
      native: "دفتر حسابات",
      tagline: "Offline multi-currency ledger for tracking customer debts and credits",
      blurb: "A personal and small-business accounting app that lets a shop owner record who owes them money and whom they owe, organised by customer and group. It works entirely offline on local SQLite, supports multi-currency (local vs. dollar) balances, and generates, prints and shares PDF account statements. Distribution is gated behind device-bound activation.",
      meta: [["Domain", "Accounting"], ["Mode", "Fully offline"], ["Database", "SQLite"], ["Security", "PIN + biometric"]],
      features: ["Customer management with grouping and transaction history", "Debit/credit transactions on a due-vs-paid convention", "Multi-currency accounts with UI filtering by currency", "PDF account statements for print or share", "Import/export with daily background auto-backup", "App lock: PIN with brute-force lockout, plus biometric unlock", "Device activation and in-app update checking"],
      highlights: "Robust startup with runZonedGuarded and a crash service, plus deferred background init for faster launch. Two-layer crash reporting — a local capped log and DSN-gated Sentry. Centralized design-system tokens and shared widgets. PIN stored as salted SHA-256 in encrypted storage, and Arabic-first RTL with capped text scaling."
    },
    ar: {
      kicker: "دفتر حسابات · محاسبة",
      title: "دفتر حسابات",
      native: "Accounting Book",
      tagline: "دفتر متعدّد العملات يعمل دون اتصال لتتبّع ديون الزبائن والذمم",
      blurb: "تطبيق محاسبة شخصي وللأعمال الصغيرة يتيح لصاحب المحل تسجيل من له عليه مال ومن عليه له، منظَّماً حسب الزبون والمجموعة. يعمل كلياً دون اتصال على SQLite محلية، ويدعم أرصدة متعدّدة العملات (المحلية والدولار)، ويولّد كشوف حساب PDF للطباعة أو المشاركة. التوزيع محصور خلف تفعيل مرتبط بالجهاز.",
      meta: [["المجال", "محاسبة"], ["النمط", "دون اتصال كلياً"], ["قاعدة البيانات", "SQLite"], ["الحماية", "رمز PIN + بصمة"]],
      features: ["إدارة الزبائن مع تجميعهم وسجل الحركات", "حركات مدين/دائن وفق اصطلاح المستحق مقابل المدفوع", "حسابات متعدّدة العملات مع فلترة الواجهة حسب العملة", "كشوف حساب PDF للطباعة أو المشاركة", "استيراد وتصدير مع نسخ احتياطي تلقائي يومي في الخلفية", "قفل التطبيق: رمز PIN مع حظر بعد محاولات متكرّرة، وفتح بالبصمة", "تفعيل مرتبط بالجهاز وفحص التحديثات داخل التطبيق"],
      highlights: "إقلاع محصّن باستخدام runZonedGuarded مع خدمة تتبّع الأعطال، وتهيئة خلفية مؤجّلة لتسريع بدء التشغيل. تقارير أعطال بطبقتين — سجل محلي محدود الحجم و Sentry مشروط بالـ DSN. رموز تصميم مركزية وعناصر واجهة مشتركة. رمز PIN مخزَّن كـ SHA-256 مع salt في تخزين مشفَّر، وعربية RTL أولاً مع تحديد سقف لتكبير النص."
    }
  },
  {
    id: "alghadeer-app", cat: "flutter", num: "05", badge: "Flutter",
    tech: ["Flutter 3.10", "webview_flutter", "Firebase Messaging", "local notifications", "connectivity_plus", "url_launcher", "native_splash"],
    en: {
      kicker: "Native WebView wrapper",
      title: "Al Ghadeer",
      native: "ملحمة ومعجنات الغدير",
      tagline: "Native Android shell for the Al Ghadeer butchery and pastries ordering site",
      blurb: "A Flutter WebView wrapper that packages the Al Ghadeer restaurant website (Laravel + React) into a native Android app, layering native capabilities on top of the web experience: push notifications, offline detection, a native splash, and system routing for phone, WhatsApp and email links. Pairs with the Laravel ERP shown below.",
      meta: [["Domain", "Food retail"], ["Type", "WebView shell"], ["Push", "FCM v1"], ["Bridge", "JS channel"]],
      features: ["Full-screen WebView with a native splash and logo screen", "FCM push with foreground and background auto-display", "Deep links — a notification URL opens directly in the WebView", "Offline error screen with auto-retry on reconnect", "Smart back navigation and press-again-to-exit", "tel, mailto, WhatsApp and off-domain links routed to the system", "Auto-granted WebView permissions and native Arabic dialogs"],
      highlights: "A native ↔ web token bridge: a strict JS-channel contract shares the FCM token with the deployed web app. Hardened token acquisition with 5× exponential backoff plus callback polling, a custom User-Agent marker so the React site can detect the native shell, and a documented end-to-end backend ↔ web ↔ Flutter ↔ FCM flow."
    },
    ar: {
      kicker: "غلاف WebView أصلي",
      title: "الغدير",
      native: "ملحمة ومعجنات الغدير",
      tagline: "تطبيق أندرويد أصلي لموقع طلبات ملحمة ومعجنات الغدير",
      blurb: "غلاف WebView بـ Flutter يحزم موقع مطعم الغدير (Laravel + React) داخل تطبيق أندرويد أصلي، ويضيف فوق تجربة الويب قدرات أصلية: إشعارات فورية، كشف انقطاع الاتصال، شاشة بدء أصلية، وتوجيه روابط الهاتف والواتساب والإيميل إلى النظام. يعمل جنباً إلى جنب مع نظام ERP المذكور أدناه.",
      meta: [["المجال", "تجزئة غذائية"], ["النوع", "غلاف WebView"], ["الإشعارات", "FCM v1"], ["الجسر", "JS channel"]],
      features: ["WebView بملء الشاشة مع شاشة بدء وشعار أصليين", "إشعارات FCM مع عرض تلقائي في المقدمة والخلفية", "روابط عميقة — رابط الإشعار يُفتح مباشرة داخل الـ WebView", "شاشة خطأ عند انقطاع الاتصال مع إعادة محاولة تلقائية", "تنقّل رجوع ذكي مع «اضغط مرة أخرى للخروج»", "توجيه روابط tel و mailto والواتساب والنطاقات الخارجية إلى النظام", "منح صلاحيات WebView تلقائياً ومربّعات حوار عربية أصلية"],
      highlights: "جسر توكن بين الأصلي والويب: عقد صارم عبر JS channel يشارك توكن FCM مع تطبيق الويب المنشور. جلب محصّن للتوكن مع 5 محاولات بتراجع أُسّي إضافةً إلى استطلاع بالـ callback، وعلامة User-Agent مخصّصة ليكتشف موقع React أنه يعمل داخل الغلاف الأصلي، وتوثيق كامل لمسار backend ↔ web ↔ Flutter ↔ FCM."
    }
  },
  {
    id: "alghadeer-erp", cat: "laravel", num: "06", badge: "Laravel 12",
    tech: ["Laravel 12 · PHP 8.2", "Service layer", "MySQL", "API Resources", "React 18 SPA (Vite)", "Blade + Bootstrap/Tailwind", "kreait/Firebase FCM", "PhpSpreadsheet"],
    en: {
      kicker: "Restaurant ERP",
      title: "Al Ghadeer Restaurant ERP",
      tagline: "Bilingual restaurant ERP — a Blade admin panel and a React ordering SPA on one API",
      blurb: "A restaurant management backend powering two front-ends from a single codebase: a Blade + Bootstrap/Tailwind admin panel for staff, and a React 18 customer SPA for online ordering. It handles the full order lifecycle (table, delivery, takeaway), menu and catalog, delivery zones, weight-based and customizable products, payments, reporting and Firebase push. It also backs the Al Ghadeer mobile app.",
      meta: [["Domain", "Restaurant"], ["Clients", "SPA + Flutter + admin"], ["API", "REST V1"], ["Push", "FCM"]],
      features: ["Forward-only order workflow: pending → accepted → ready → delivered", "Three order types with scheduled delivery and per-zone fees", "Two-level menu with weight-based and customizable products", "Payment tracking that blocks completion until paid", "Customer SPA ordering with a localStorage cart and token auth", "Reports and analytics — revenue, order type/status, top products", "Bulk Excel product import/export; bilingual AR/EN with RTL"],
      highlights: "Audience-split controllers (Admin / API V1 / Public) sharing an ApiResponse trait. Session isolation via a separate customer-SPA cookie, so customer traffic can't corrupt admin auth. Roles and a ProductPolicy gate. FCM through a google/auth service account dispatched as a queued job. A versioned product cache with model-event busting, and an /api/health DB probe."
    },
    ar: {
      kicker: "نظام ERP للمطاعم",
      title: "نظام ERP لمطعم الغدير",
      tagline: "نظام ERP ثنائي اللغة للمطاعم — لوحة إدارة Blade وتطبيق طلبات React على واجهة API واحدة",
      blurb: "نظام خلفي لإدارة المطاعم يشغّل واجهتين من قاعدة كود واحدة: لوحة إدارة بـ Blade و Bootstrap/Tailwind للموظفين، وتطبيق SPA بـ React 18 للزبائن للطلب أونلاين. يغطي دورة الطلب كاملة (طاولة، توصيل، استلام)، والمنيو والكتالوغ، ومناطق التوصيل، والمنتجات المسعّرة بالوزن والقابلة للتخصيص، والدفع والتقارير وإشعارات Firebase. كما يشغّل تطبيق الغدير للموبايل.",
      meta: [["المجال", "مطاعم"], ["العملاء", "SPA + Flutter + لوحة إدارة"], ["الواجهة", "REST V1"], ["الإشعارات", "FCM"]],
      features: ["مسار طلب أحادي الاتجاه: قيد الانتظار ← مقبول ← جاهز ← مُسلَّم", "ثلاثة أنواع طلبات مع توصيل مجدول ورسوم حسب المنطقة", "منيو من مستويين مع منتجات مسعّرة بالوزن وأخرى قابلة للتخصيص", "تتبّع الدفع يمنع إغلاق الطلب قبل السداد", "طلب الزبون عبر SPA مع سلّة في localStorage ومصادقة بالتوكن", "تقارير وتحليلات — الإيرادات، نوع وحالة الطلبات، المنتجات الأكثر مبيعاً", "استيراد وتصدير منتجات بالجملة عبر Excel؛ ثنائي اللغة عربي/إنكليزي مع RTL"],
      highlights: "متحكّمات مفصولة حسب الجمهور (Admin / API V1 / Public) تتشارك trait موحّد للاستجابات. عزل الجلسات عبر كوكي منفصل لتطبيق الزبائن، بحيث لا تفسد حركة الزبائن جلسة الإدارة. أدوار وصلاحيات عبر ProductPolicy. إشعارات FCM عبر حساب خدمة google/auth تُرسل كمهمة في الطابور. كاش منتجات مُصدَّر بإصدارات يُبطَل عبر أحداث الموديل، ومسبار /api/health لقاعدة البيانات."
    }
  },
  {
    id: "medical-inventory", cat: "laravel", num: "07", badge: "Laravel 12",
    tech: ["Laravel 12 · PHP 8.2", "Service + Policies", "MySQL", "Passport OAuth2", "REST /api/v1", "spatie/activitylog", "PhpSpreadsheet"],
    en: {
      kicker: "Medical inventory ERP",
      title: "Medical Inventory ERP",
      tagline: "Pharmaceutical distribution ERP — stock, sales orders, payments and accounting",
      blurb: "A Laravel backend managing a medical and pharmaceutical distribution business, connecting a central company and warehouse with pharmacies through field sales reps. It tracks product stock and pricing, sales orders placed at pharmacies, payments and collections, and per-pharmacy financial account statements. It exposes a versioned REST API with offline-first sync for a Flutter app, plus a Blade admin panel.",
      meta: [["Domain", "Pharma distribution"], ["Auth", "Passport OAuth2"], ["Sync", "Offline-first"], ["API", "REST V1"]],
      features: ["Product catalog with per-product pricing and stock levels", "Sales order lifecycle: create, confirm and cancel with line items", "Stock-movement tracking through a dedicated StockService", "Payments and collections recorded per pharmacy", "Per-pharmacy financial statements and ledger", "Rep and admin dashboards with aggregates", "Offline-first mobile sync — bootstrap plus incremental changes"],
      highlights: "Clean layered architecture (controllers → services → models) with authorization policies. Role-based scoping, so reps see only their own pharmacies and orders while admins keep broad scope. A company/pharmacy/rep relational model approximating light multi-tenancy, Spatie audit logging, and an accounting layer (account entries and statements) that goes beyond plain inventory."
    },
    ar: {
      kicker: "نظام ERP للمستودعات الطبية",
      title: "نظام ERP للتوزيع الدوائي",
      tagline: "نظام ERP لتوزيع الأدوية — مخزون، طلبات بيع، تحصيلات، ومحاسبة",
      blurb: "نظام خلفي بـ Laravel يدير أعمال توزيع طبي ودوائي، ويربط الشركة والمستودع المركزي بالصيدليات عبر مندوبي مبيعات ميدانيين. يتتبّع مخزون المنتجات وتسعيرها، وطلبات البيع المسجَّلة في الصيدليات، والدفعات والتحصيلات، وكشوف الحساب المالية لكل صيدلية. يوفّر واجهة REST مُصدَّرة بإصدارات مع مزامنة تعمل دون اتصال لتطبيق Flutter، إضافةً إلى لوحة إدارة بـ Blade.",
      meta: [["المجال", "توزيع دوائي"], ["المصادقة", "Passport OAuth2"], ["المزامنة", "تعمل دون اتصال"], ["الواجهة", "REST V1"]],
      features: ["كتالوغ منتجات مع تسعير ومستويات مخزون لكل منتج", "دورة طلب البيع: إنشاء، تأكيد، وإلغاء مع البنود", "تتبّع حركة المخزون عبر StockService مخصّص", "تسجيل الدفعات والتحصيلات لكل صيدلية", "كشوف حساب مالية ودفتر أستاذ لكل صيدلية", "لوحات معلومات للمندوب والإدارة مع تجميعات إحصائية", "مزامنة موبايل تعمل دون اتصال — تحميل أولي ثم التغييرات فقط"],
      highlights: "بنية طبقية نظيفة (متحكّمات ← خدمات ← موديلات) مع Policies للتفويض. تحديد نطاق حسب الدور، فيرى المندوب صيدلياته وطلباته فقط بينما تبقى صلاحية الإدارة شاملة. نموذج علاقات شركة/صيدلية/مندوب يقارب تعدّد المستأجرين الخفيف، وتسجيل تدقيق عبر Spatie، وطبقة محاسبية (قيود وكشوف) تتجاوز إدارة المخزون البسيطة."
    }
  },
  {
    id: "trydos", cat: "laravel", num: "08", badge: "Laravel 12",
    tech: ["Laravel 12 · PHP 8.2", "Domain-Driven Design", "Passport + Sanctum + Socialite", "Redis", "Elasticsearch", "Octane + Horizon", "Stripe / Razorpay / MercadoPago / Telr", "Odoo ERP sync", "Gemini translation"],
    en: {
      kicker: "Multi-vendor marketplace",
      title: "Trydos Market",
      tagline: "Large-scale multi-vendor e-commerce platform with POS, wallet and logistics",
      blurb: "A comprehensive Laravel backend powering a multi-vendor online marketplace serving customers, sellers and administrators. It handles product catalog and inventory, cart and checkout, order processing and returns/refunds, seller shops and boutiques, wallet and loyalty points, and integrations with payment gateways, shipping carriers, search and messaging — built on a Domain-Driven Design.",
      meta: [["Domain", "E-commerce"], ["Architecture", "DDD"], ["Scale", "Octane + Redis + ES"], ["Gateways", "5+"]],
      features: ["Multi-vendor shops, boutiques and seller analytics", "Full catalog: categories, brands, attributes, flash deals, campaigns", "Cart, coupons, wishlists, reviews and abandoned-cart recovery", "Orders, invoices and a return/refund request workflow", "Wallet and loyalty points with withdrawal requests", "POS and delivery-man (last-mile) API endpoints", "Seller ↔ customer chat, tickets and multi-channel notifications"],
      highlights: "Extensive DDD bounded contexts — Orders, Products, Wallet, Returns, Seller, Invoice and more. Granular RBAC including per-seller shop roles with translated names. Multi-gateway payments plus external shipping (SkyNet), Odoo ERP product and order sync, Elasticsearch search, and heavy scheduling and background jobs with Telegram API and comprehensive audit logging."
    },
    ar: {
      kicker: "سوق متعدّد البائعين",
      title: "Trydos Market",
      tagline: "منصّة تجارة إلكترونية واسعة متعدّدة البائعين مع نقطة بيع ومحفظة ولوجستيات",
      blurb: "نظام خلفي شامل بـ Laravel يشغّل سوقاً إلكترونياً متعدّد البائعين يخدم الزبائن والبائعين والمشرفين. يغطّي كتالوغ المنتجات والمخزون، والسلّة وإتمام الشراء، ومعالجة الطلبات والمرتجعات والاستردادات، ومتاجر البائعين والبوتيكات، والمحفظة ونقاط الولاء، والتكامل مع بوّابات الدفع وشركات الشحن والبحث والمراسلة — مبني وفق Domain-Driven Design.",
      meta: [["المجال", "تجارة إلكترونية"], ["البنية", "DDD"], ["التوسّع", "Octane + Redis + ES"], ["بوّابات الدفع", "أكثر من 5"]],
      features: ["متاجر متعدّدة البائعين وبوتيكات وتحليلات لكل بائع", "كتالوغ كامل: تصنيفات، ماركات، خصائص، عروض خاطفة، حملات", "سلّة، كوبونات، قوائم أمنيات، تقييمات، واسترجاع السلال المهجورة", "طلبات وفواتير ومسار طلبات إرجاع واسترداد", "محفظة ونقاط ولاء مع طلبات سحب", "واجهات API لنقطة البيع ولمندوب التوصيل (الميل الأخير)", "محادثة بين البائع والزبون، وتذاكر دعم، وإشعارات متعدّدة القنوات"],
      highlights: "سياقات DDD محدودة وواسعة — الطلبات والمنتجات والمحفظة والمرتجعات والبائعين والفواتير وغيرها. صلاحيات RBAC دقيقة تشمل أدواراً على مستوى متجر كل بائع بأسماء مترجمة. دفع عبر بوّابات متعدّدة إضافةً إلى شحن خارجي (SkyNet)، ومزامنة منتجات وطلبات مع Odoo ERP، وبحث عبر Elasticsearch، وجدولة ومهام خلفية مكثّفة مع Telegram API وتسجيل تدقيق شامل."
    }
  },
  {
    id: "evotech-core", cat: "laravel", num: "09", badge: "Flagship platform", flagship: true,
    tech: ["Laravel 12 · PHP 8.4", "Sanctum 4", "MySQL / SQLite (test)", "Scramble OpenAPI 3.1", "Ed25519 / ext-sodium", "Larastan (max) · Pint · CI", "Next.js 16 · React 19", "TypeScript strict", "Tailwind v4 · shadcn/ui", "TanStack Query", "next-intl · RTL"],
    en: {
      kicker: "Platform · Licensing & billing",
      title: "EvoTech Core",
      tagline: "The control plane and licensing/billing backbone for an entire product ecosystem",
      blurb: "An API-first platform that every EvoTech product — Smart Agent, Fawateer, Accounting Book, the restaurant ERP/POS suite, the pharma warehouse, IoT controllers — authenticates against, is licensed by, billed through and reports to, via one central REST API. Three surfaces in one: a bilingual marketing website, an authenticated subscriptions/licenses/billing dashboard, and a product-to-platform integration API. A Laravel 12 modular monolith built to scale to 100+ products and 1000+ tenants.",
      meta: [["Modules", "14 domains"], ["Auth", "3 audiences"], ["Scale target", "100+ products"], ["Frontend", "Next.js 16"]],
      features: ["Sanctum auth with a password policy and per-account/IP throttling", "Multi-tenant companies with auto-scoped customers", "Subscription lifecycle with plan snapshotting and an expiry sweep", "Licensing: activation slots, suspend/revoke, and an event ledger", "Ed25519-signed offline license tokens for devices and IoT", "Billing: auto-issued invoices and an immutable payment ledger", "Download Center with checksummed releases and product self-update", "Notifications, audit log and KPI reports across modules"],
      highlights: "A modular monolith with microservice-ready seams — 14 auto-discovered domain modules communicating only via contracts and domain events, with no cross-module joins, governed by a formal architecture constitution and ADRs. Strict four-layer modules (presentation → application → domain → infrastructure) with DTO boundaries. URI-versioned /api/v1 with standard {data, meta, links} success envelopes and machine-readable {error:{code, message, trace_id}} failures. Three auth audiences (staff Sanctum, product API-key guard, public signed URLs), UUIDv7 route keys over internal PKs, and event-driven side effects (SubscriptionActivated → auto-license + auto-invoice). Arabic-RTL-default bilingual on both tiers, with decoupled deployment across website / api / app subdomains via PM2 and Nginx."
    },
    ar: {
      kicker: "منصّة · ترخيص وفوترة",
      title: "EvoTech Core",
      tagline: "مستوى التحكّم والعمود الفقري للترخيص والفوترة لمنظومة منتجات كاملة",
      blurb: "منصّة مبنية على الـ API أولاً، يصادق عليها كل منتج من منتجات EvoTech — المندوب الذكي، فواتير، دفتر حسابات، حزمة ERP/POS للمطاعم، المستودع الدوائي، متحكّمات إنترنت الأشياء — ويُرخَّص منها ويُفوتَر عبرها ويرفع تقاريره إليها، من خلال واجهة REST مركزية واحدة. ثلاث واجهات في منصّة واحدة: موقع تعريفي ثنائي اللغة، ولوحة تحكّم مصادَق عليها للاشتراكات والتراخيص والفوترة، وواجهة تكامل بين المنتجات والمنصّة. مونوليث معياري على Laravel 12 مصمَّم ليتوسّع إلى أكثر من 100 منتج وأكثر من 1000 مستأجر.",
      meta: [["الوحدات", "14 نطاقاً"], ["المصادقة", "3 جماهير"], ["هدف التوسّع", "100+ منتج"], ["الواجهة", "Next.js 16"]],
      features: ["مصادقة Sanctum مع سياسة كلمات مرور وتحديد معدّل لكل حساب و IP", "شركات متعدّدة المستأجرين مع تحديد نطاق تلقائي للزبائن", "دورة حياة الاشتراك مع لقطة ثابتة للخطة ومسح دوري للمنتهية", "الترخيص: خانات تفعيل، إيقاف وإلغاء، وسجل أحداث", "توكنات ترخيص موقّعة بـ Ed25519 تعمل دون اتصال للأجهزة و IoT", "الفوترة: فواتير تُصدَر تلقائياً ودفتر مدفوعات غير قابل للتعديل", "مركز تحميل بإصدارات موثّقة بالمجموع التدقيقي وتحديث ذاتي للمنتجات", "إشعارات وسجل تدقيق وتقارير مؤشرات أداء عبر كل الوحدات"],
      highlights: "مونوليث معياري بحدود جاهزة للتقسيم إلى خدمات مصغّرة — 14 وحدة نطاق تُكتشف تلقائياً وتتواصل عبر العقود وأحداث النطاق فقط، دون أي ربط مباشر بين الوحدات، ويحكمها «دستور معماري» رسمي وقرارات ADR موثّقة. وحدات رباعية الطبقات بصرامة (العرض ← التطبيق ← النطاق ← البنية التحتية) مع حدود DTO. مسار /api/v1 مُصدَّر في الرابط مع أغلفة نجاح قياسية {data, meta, links} وأخطاء قابلة للقراءة آلياً {error:{code, message, trace_id}}. ثلاثة جماهير مصادقة (موظفون عبر Sanctum، حارس مفاتيح API للمنتجات، روابط عامة موقّعة)، ومفاتيح مسار UUIDv7 بدل المفاتيح الداخلية، وآثار جانبية مدفوعة بالأحداث (SubscriptionActivated ← ترخيص تلقائي + فاتورة تلقائية). ثنائي اللغة مع العربية RTL افتراضياً في الطبقتين، ونشر منفصل عبر نطاقات فرعية website / api / app باستخدام PM2 و Nginx."
    }
  },
  {
    id: "adhan", cat: "embedded", num: "10", badge: "Embedded",
    tech: ["Arduino", "C / C++", "RTC module (DS3231)", "Relay switching", "LCD display", "Push-button UI"],
    en: {
      kicker: "Microcontroller · Installed in a mosque",
      title: "Automatic Call-to-Prayer System",
      tagline: "A circuit that broadcasts the adhan on time, every day, with no one touching it",
      blurb: "A microcontroller circuit designed and built to broadcast the call to prayer automatically at the correct time each day, with no manual intervention. It is installed and running in a mosque.",
      meta: [["Type", "Embedded control"], ["Status", "Deployed in a mosque"], ["Clock", "RTC module"], ["Output", "Relay → amplifier"]],
      features: ["Real-time clock (RTC) module with stored daily prayer timetables", "Relay switching that drives the mosque amplifier directly", "LCD interface for time display and settings", "Manual override controls for the mosque staff", "Runs unattended — no phone, no internet, no PC required"],
      highlights: "The design goal was zero maintenance: the timetable lives in the device, the RTC keeps time across power cuts, and the relay stage isolates the low-voltage logic from the amplifier line. Manual override was added so staff are never locked out of their own sound system."
    },
    ar: {
      kicker: "متحكّم صغري · مركَّب في جامع",
      title: "نظام أذان آلي",
      tagline: "دارة تبثّ الأذان في وقته كل يوم، دون أن يلمسها أحد",
      blurb: "دارة على متحكّم صغري صُمّمت وبُنيت لبثّ الأذان تلقائياً في وقته الصحيح كل يوم، دون أي تدخّل يدوي. مركَّبة وتعمل فعلياً في أحد الجوامع.",
      meta: [["النوع", "تحكّم مدمج"], ["الحالة", "مركَّب في جامع"], ["الساعة", "وحدة RTC"], ["الخرج", "ريليه ← مضخّم الصوت"]],
      features: ["وحدة ساعة زمن حقيقي (RTC) مع جداول أوقات الصلاة اليومية مخزّنة داخلياً", "تبديل بالريليه يقود مضخّم صوت الجامع مباشرةً", "واجهة LCD لعرض الوقت وضبط الإعدادات", "أزرار تجاوز يدوي لطاقم الجامع", "يعمل دون إشراف — بلا هاتف ولا إنترنت ولا حاسوب"],
      highlights: "هدف التصميم كان صفر صيانة: الجدول مخزَّن داخل الجهاز، ووحدة RTC تحافظ على الوقت رغم انقطاع الكهرباء، وطبقة الريليه تعزل منطق الجهد المنخفض عن خط المضخّم. أُضيف التجاوز اليدوي كي لا يُحرم الطاقم من التحكّم بنظام الصوت الخاص بهم."
    }
  },
  {
    id: "smart-home", cat: "embedded", num: "11", badge: "Embedded",
    tech: ["ESP32", "C / C++", "Wi-Fi", "Telegram Bot API", "Mobile app", "Relay modules"],
    en: {
      kicker: "IoT · Wi-Fi control",
      title: "Smart Home Control System",
      tagline: "Switch the lights from anywhere — over a Telegram bot or a mobile app",
      blurb: "An ESP32-based Wi-Fi controller for household lighting and appliances, operated remotely from anywhere with an internet connection. Control runs through two independent front-ends: a Telegram bot and a mobile application.",
      meta: [["Type", "IoT controller"], ["Board", "ESP32"], ["Control", "Telegram + app"], ["Output", "Relay modules"]],
      features: ["ESP32 Wi-Fi controller for lighting and household appliances", "Control through a Telegram bot — no app install needed", "Control through a dedicated mobile application", "Relay modules switching the mains circuits", "Device status feedback so the user can check each output remotely"],
      highlights: "Two control paths were deliberate: the Telegram bot means any family member can operate the house from a chat they already have open, while the mobile app gives a proper dashboard. Status feedback closes the loop — you always know whether the command actually landed."
    },
    ar: {
      kicker: "إنترنت الأشياء · تحكّم عبر Wi-Fi",
      title: "نظام تحكّم بالمنزل الذكي",
      tagline: "أطفئ الإنارة من أي مكان — عبر بوت تيليغرام أو تطبيق موبايل",
      blurb: "متحكّم على ESP32 يعمل عبر Wi-Fi لإنارة المنزل وأجهزته، يُشغَّل عن بُعد من أي مكان فيه اتصال بالإنترنت. التحكّم يمرّ عبر واجهتين مستقلّتين: بوت تيليغرام وتطبيق موبايل.",
      meta: [["النوع", "متحكّم IoT"], ["اللوحة", "ESP32"], ["التحكّم", "تيليغرام + تطبيق"], ["الخرج", "وحدات ريليه"]],
      features: ["متحكّم ESP32 عبر Wi-Fi للإنارة والأجهزة المنزلية", "تحكّم عبر بوت تيليغرام — دون الحاجة لتثبيت تطبيق", "تحكّم عبر تطبيق موبايل مخصّص", "وحدات ريليه تفصل وتصل دارات التيار المنزلي", "تغذية راجعة بحالة كل مخرج ليتحقّق المستخدم منها عن بُعد"],
      highlights: "وجود مسارَي تحكّم كان قراراً مقصوداً: بوت تيليغرام يتيح لأي فرد في العائلة التحكّم بالمنزل من محادثة مفتوحة أصلاً عنده، بينما يمنح التطبيق لوحة تحكّم كاملة. والتغذية الراجعة تُغلق الحلقة — تعرف دائماً إن كان الأمر قد نُفّذ فعلاً."
    }
  },
  {
    id: "drone", cat: "embedded", num: "12", badge: "Graduation project",
    tech: ["Microcontroller", "C / C++", "Gyroscope + accelerometer", "PID control loop", "Brushless motors + ESC", "RC link", "Power distribution"],
    en: {
      kicker: "Graduation project · University of Aleppo, 2020",
      title: "Unmanned Aerial Vehicle (Drone)",
      tagline: "Built from frame to flight — mechanics, electronics, control software and test flights",
      blurb: "My graduation project for the Computer Systems Engineering degree: a multi-rotor unmanned aerial vehicle designed and built from scratch, covering the mechanical build, the power and motor electronics, the stabilisation control loop, and flight testing.",
      meta: [["Type", "UAV / multi-rotor"], ["Year", "2020"], ["Institution", "University of Aleppo"], ["Scope", "Full build"]],
      features: ["Multi-rotor airframe assembly and balancing", "Stabilisation using gyroscope and accelerometer data in a microcontroller control loop", "Brushless motor and ESC control", "Power distribution and battery management", "Wireless remote-control communication link", "Full cycle: mechanical assembly, electronics, control software, calibration and flight testing"],
      highlights: "The hard part was never the hardware — it was the control loop. Reading the gyroscope and accelerometer is easy; fusing them into a stable attitude estimate and tuning the response so the airframe holds level instead of oscillating is where the project actually lived."
    },
    ar: {
      kicker: "مشروع التخرّج · جامعة حلب، 2020",
      title: "طائرة مسيّرة بدون طيّار (درون)",
      tagline: "بُنيت من الهيكل حتى الطيران — ميكانيك، إلكترونيات، برمجيات تحكّم، وتجارب طيران",
      blurb: "مشروع تخرّجي في هندسة النظم الحاسوبية: طائرة مسيّرة متعدّدة المراوح صُمّمت وبُنيت من الصفر، شاملةً البناء الميكانيكي، وإلكترونيات الطاقة والمحرّكات، وحلقة التحكّم بالاستقرار، وتجارب الطيران.",
      meta: [["النوع", "طائرة مسيّرة متعدّدة المراوح"], ["السنة", "2020"], ["الجامعة", "جامعة حلب"], ["النطاق", "بناء كامل"]],
      features: ["تجميع هيكل متعدّد المراوح وموازنته", "تحقيق الاستقرار عبر بيانات الجيروسكوب ومقياس التسارع ضمن حلقة تحكّم على متحكّم صغري", "التحكّم بالمحرّكات اللاتماسية ووحدات ESC", "توزيع الطاقة وإدارة البطارية", "وصلة اتصال لاسلكية للتحكّم عن بُعد", "الدورة الكاملة: التجميع الميكانيكي، الإلكترونيات، برمجيات التحكّم، المعايرة، وتجارب الطيران"],
      highlights: "الجزء الصعب لم يكن العتاد يوماً — بل حلقة التحكّم. قراءة الجيروسكوب ومقياس التسارع سهلة؛ أما دمجهما في تقدير مستقرّ لوضعية الطائرة وضبط الاستجابة كي يبقى الهيكل متوازناً بدل أن يتذبذب، فهناك كان المشروع الحقيقي."
    }
  }
];
