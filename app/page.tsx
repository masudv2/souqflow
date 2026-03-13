"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Language = "en" | "ar";

const whatsappNumber = "971563551010"; // +971 56 355 1010

const content = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Salla partner UAE · GCC",
      title: "Salla Development Partner in Dubai for Growing GCC Brands",
      subtitle:
        "We build, customize, and scale Salla stores with modern design, advanced integrations, custom features, and ongoing technical support for ecommerce businesses in the UAE and across the GCC.",
      primaryCta: "Start Your Project",
      secondaryCta: "Talk on WhatsApp",
      trust: ["Based in Dubai UAE", "Bilingual Support", "Built for GCC Ecommerce"],
    },
    trustIntro: {
      heading: "Specialized Salla Development for Serious Ecommerce Businesses",
      body: [
        "SouqFlow helps brands launch and grow on Salla with a strong focus on performance, design quality, custom functionality, and operational efficiency. Whether you need a new store, a redesign, app-like features, custom integrations, or long-term support, we help you build a Salla store that is ready for real business growth.",
        "We understand that ecommerce brands in the Gulf need more than basic setup. They need fast storefronts, clean customer journeys, localized experiences, strong technical support, and integrations that reduce manual work. That is where we focus.",
      ],
      strip: ["Salla development", "Salla partner UAE", "Salla developer Dubai", "Salla ecommerce development"],
    },
    services: {
      heading: "Our Salla Services",
      items: [
        {
          title: "Salla Store Development",
          description:
            "We build custom Salla stores for brands launching a new ecommerce business or moving to a more scalable setup. This includes store structure, branded design direction, page layouts, feature setup, payment and shipping configuration, and complete launch support.",
        },
        {
          title: "Salla Store Redesign",
          description:
            "If your current Salla store feels outdated or is not performing as expected, we redesign the customer experience, improve the storefront presentation, and create a more polished ecommerce journey focused on trust and conversion.",
        },
        {
          title: "Salla Theme Customization",
          description:
            "We customize Salla themes to match your brand identity, improve usability, and create a more premium shopping experience. This includes homepage sections, product pages, collection pages, mobile optimization, and custom design enhancements.",
        },
        {
          title: "Salla App Development",
          description:
            "We develop custom features, business tools, and app-style experiences for Salla merchants who need more than the standard setup. This can include workflow automation, advanced store functionality, integrations, and custom ecommerce tools.",
        },
        {
          title: "Salla Integrations",
          description:
            "We connect Salla with your business systems, internal workflows, and third-party tools where needed. This includes integration planning, operational automation, and technical implementation to improve efficiency and reduce repetitive manual work.",
        },
        {
          title: "Salla Support & Ongoing Improvements",
          description:
            "We provide ongoing support for merchants who need continuous improvements, bug fixing, feature updates, technical troubleshooting, and a reliable development partner to support growth after launch.",
        },
      ],
    },
    why: {
      heading: "Why Businesses Choose SouqFlow",
      items: [
        {
          title: "Focused on Salla",
          description:
            "We are building SouqFlow specifically around the Salla ecosystem, which means our positioning, service model, and development approach are focused on what Salla merchants actually need.",
        },
        {
          title: "Built for UAE and GCC Ecommerce",
          description:
            "We understand regional ecommerce requirements including bilingual storefront expectations, localized customer journeys, and practical support for businesses selling in the Gulf market.",
        },
        {
          title: "Design + Development Thinking",
          description:
            "We do not just set up stores. We think about customer experience, structure, branding, technical setup, and scalability together.",
        },
        {
          title: "Long-Term Technical Partner",
          description:
            "We aim to support businesses not only at launch, but also through ongoing improvements, custom features, and growth-related development.",
        },
      ],
    },
    process: {
      heading: "Our Process",
      steps: [
        {
          title: "Discovery",
          description:
            "We understand your brand, products, goals, and technical requirements before planning the best Salla setup for your business.",
        },
        {
          title: "Structure & UX Planning",
          description:
            "We map out the store structure, customer journey, content blocks, and user experience with a focus on clarity and conversion.",
        },
        {
          title: "Design & Development",
          description:
            "We customize your store, implement required features, optimize the mobile experience, and prepare the full storefront for launch.",
        },
        {
          title: "Testing & Launch",
          description:
            "We test store flow, content, responsiveness, and important customer interactions before launch.",
        },
        {
          title: "Support & Growth",
          description:
            "After launch, we can continue supporting your store with updates, improvements, and new features.",
        },
      ],
    },
    examples: {
      heading: "What We Can Help You Build on Salla",
      items: [
        {
          title: "Branded Ecommerce Store",
          description:
            "A custom Salla storefront for a fashion, beauty, lifestyle, or retail brand that needs a stronger visual identity and better shopping experience.",
        },
        {
          title: "Redesign for Better Conversion",
          description:
            "A redesign project for an existing Salla store that needs a cleaner customer journey, stronger mobile UX, and a more premium look.",
        },
        {
          title: "Feature-Rich Merchant Setup",
          description:
            "A Salla store with advanced sections, custom content experiences, workflow enhancements, and operational improvements.",
        },
        {
          title: "Ongoing Technical Support",
          description:
            "A monthly support setup for growing brands that need a dependable partner for updates, fixes, and continuous store improvements.",
        },
      ],
    },
    industries: {
      heading: "Industries We Commonly Support",
      list: [
        "Fashion and Apparel",
        "Beauty and Skincare",
        "Food and Beverage",
        "Lifestyle Brands",
        "Retail and Consumer Products",
        "Health and Wellness",
        "Home and Decor",
        "Specialty Ecommerce Brands",
      ],
      paragraph:
        "If your business is selling online in the UAE or GCC and wants a more professional Salla store, we can help you create a storefront that looks better, works better, and supports long-term growth.",
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Do you only work on Salla?",
          answer:
            "SouqFlow is focused on the Salla ecosystem for this brand, with services built specifically around Salla store development, customization, and support.",
        },
        {
          question: "Can you redesign an existing Salla store?",
          answer:
            "Yes. We can improve the design, structure, mobile experience, content flow, and overall customer journey of an existing Salla store.",
        },
        {
          question: "Do you help with custom features and integrations?",
          answer:
            "Yes. We support custom functionality, workflow enhancements, and integration-related work where required for the business.",
        },
        {
          question: "Do you offer ongoing support after launch?",
          answer:
            "Yes. We can continue supporting your Salla store with updates, fixes, technical help, and future improvements.",
        },
        {
          question: "Do you work with UAE and Saudi businesses?",
          answer:
            "Yes. We are based in Dubai and aim to support brands across the UAE, Saudi Arabia, and the wider GCC.",
        },
      ],
    },
    form: {
      heading: "Let’s Build Your Salla Store",
      body:
        "Tell us about your business, your store, and what you need help with. We’ll review your requirements and get back to you.",
      note: "We usually respond within 24 hours.",
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone / WhatsApp",
        company: "Company Name",
        projectType: "Project Type",
        message: "Message",
      },
      submit: "Send Inquiry",
      secondary: "Prefer WhatsApp? Chat with us directly.",
    },
    footer: {
      intro: "SouqFlow – Salla Development in Dubai for UAE and GCC Brands",
      servicesHeading: "Services",
      contactHeading: "Contact",
      services: [
        "Salla Store Development",
        "Salla Theme Customization",
        "Salla App Development",
        "Salla Integrations",
        "Salla Support",
      ],
      powered: "Powered by Clicko Digital LLC, Dubai UAE",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
    },
    whatsappBubble: "Hi, I’m interested in Salla development for my business.",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      process: "طريقة العمل",
      faq: "الأسئلة الشائعة",
      contact: "تواصل",
    },
    hero: {
      badge: "شريك سلة في الإمارات والخليج",
      title: "شريك تطوير متاجر سلة في دبي للعلامات التجارية المتنامية في الخليج",
      subtitle:
        "نقوم ببناء وتخصيص وتطوير متاجر سلة مع تصميم حديث، تكاملات متقدمة، مزايا مخصصة، ودعم فني مستمر للشركات في الإمارات ودول الخليج.",
      primaryCta: "ابدأ مشروعك",
      secondaryCta: "تواصل عبر واتساب",
      trust: ["مقرنا دبي، الإمارات", "دعم باللغتين", "حلول مخصصة للتجارة الإلكترونية في الخليج"],
    },
    trustIntro: {
      heading: "خدمات متخصصة في تطوير متاجر سلة للشركات الجادة",
      body: [
        "تساعد SouqFlow العلامات التجارية على إطلاق وتنمية متاجرها على منصة سلة مع التركيز على الأداء، جودة التصميم، الخصائص المخصصة، والكفاءة التشغيلية. سواء كنت تحتاج إلى متجر جديد، إعادة تصميم، خصائص متقدمة، تكاملات، أو دعم فني مستمر، فنحن نساعدك على بناء متجر سلة جاهز للنمو الحقيقي.",
        "نحن نؤمن أن شركات التجارة الإلكترونية في الخليج تحتاج إلى أكثر من مجرد إعداد أساسي. تحتاج إلى واجهات سريعة، تجربة مستخدم واضحة، تجربة محلية مناسبة، دعم فني قوي، وتكاملات تقلل العمل اليدوي. وهنا يأتي دورنا.",
      ],
      strip: ["تطوير متاجر سلة", "شريك سلة في الإمارات", "مطور سلة في دبي", "حلول سلة للتجارة الإلكترونية"],
    },
    services: {
      heading: "خدماتنا في سلة",
      items: [
        {
          title: "تطوير متجر سلة",
          description:
            "نقوم ببناء متاجر سلة مخصصة للشركات التي تطلق مشروع تجارة إلكترونية جديد أو ترغب في الانتقال إلى إعداد أكثر احترافية وقابلية للتوسع. يشمل ذلك هيكلة المتجر، التوجيه البصري للعلامة التجارية، تصميم الصفحات، إعداد الخصائص، تجهيز وسائل الدفع والشحن، ودعم الإطلاق الكامل.",
        },
        {
          title: "إعادة تصميم متجر سلة",
          description:
            "إذا كان متجرك الحالي على سلة يبدو قديماً أو لا يحقق النتائج المطلوبة، فنحن نعيد تصميم تجربة المستخدم، نحسن عرض المتجر، ونبني رحلة شراء أكثر احترافية وثقة وتحويلاً.",
        },
        {
          title: "تخصيص قوالب سلة",
          description:
            "نقوم بتخصيص قوالب سلة لتتناسب مع هوية علامتك التجارية، وتحسين سهولة الاستخدام، وتقديم تجربة تسوق أكثر احترافية. يشمل ذلك الصفحة الرئيسية، صفحات المنتجات، صفحات الأقسام، تحسين تجربة الجوال، وإضافات تصميم مخصصة.",
        },
        {
          title: "تطوير تطبيقات وخصائص مخصصة لسلة",
          description:
            "نقوم بتطوير خصائص مخصصة وأدوات أعمال وتجارب متقدمة لتجار سلة الذين يحتاجون إلى أكثر من الإعداد التقليدي. ويشمل ذلك الأتمتة، الخصائص المتقدمة، التكاملات، وأدوات التجارة الإلكترونية المخصصة.",
        },
        {
          title: "تكاملات سلة",
          description:
            "نربط منصة سلة بأنظمتك الداخلية، سير العمل في شركتك، والأدوات الخارجية عند الحاجة. يشمل ذلك تخطيط التكامل، أتمتة العمليات، والتنفيذ التقني لتحسين الكفاءة وتقليل العمل اليدوي المتكرر.",
        },
        {
          title: "الدعم المستمر وتحسين المتجر",
          description:
            "نوفر دعماً مستمراً للمتاجر التي تحتاج إلى تحسينات متواصلة، إصلاحات، تحديثات للخصائص، معالجة المشاكل التقنية، وشريك تطوير موثوق لدعم النمو بعد الإطلاق.",
        },
      ],
    },
    why: {
      heading: "لماذا تختار الشركات SouqFlow",
      items: [
        {
          title: "تركيز كامل على سلة",
          description:
            "نقوم ببناء SouqFlow خصيصاً حول منظومة سلة، لذلك فإن خدماتنا وطريقة عملنا موجهة لما يحتاجه تجار سلة فعلياً.",
        },
        {
          title: "حلول مناسبة للإمارات والخليج",
          description:
            "نفهم متطلبات التجارة الإلكترونية في المنطقة، بما في ذلك توقعات المتاجر الثنائية اللغة، وتجربة العميل المحلية، والدعم المناسب للشركات التي تبيع في الخليج.",
        },
        {
          title: "تفكير يجمع بين التصميم والتطوير",
          description:
            "نحن لا نقوم بإعداد المتجر فقط، بل نفكر في تجربة المستخدم، والهيكلة، والهوية البصرية، والإعداد التقني، وقابلية التوسع بشكل متكامل.",
        },
        {
          title: "شريك تقني طويل المدى",
          description:
            "هدفنا ليس فقط إطلاق المتجر، بل دعمه على المدى الطويل من خلال التحسينات المستمرة والخصائص الجديدة والتطوير المرتبط بالنمو.",
        },
      ],
    },
    process: {
      heading: "طريقة عملنا",
      steps: [
        {
          title: "الاكتشاف",
          description:
            "نفهم علامتك التجارية، منتجاتك، أهدافك، واحتياجاتك التقنية قبل تحديد أفضل طريقة لبناء متجر سلة مناسب لك.",
        },
        {
          title: "التخطيط وتجربة المستخدم",
          description:
            "نرسم هيكلة المتجر، رحلة العميل، المحتوى، وتجربة الاستخدام مع التركيز على الوضوح والتحويل.",
        },
        {
          title: "التصميم والتطوير",
          description:
            "نخصص متجرك، نطبق الخصائص المطلوبة، نحسن تجربة الجوال، ونجهز المتجر للإطلاق.",
        },
        {
          title: "الاختبار والإطلاق",
          description:
            "نختبر تدفق المتجر، المحتوى، سرعة التصفح، وتجربة الشراء قبل الإطلاق.",
        },
        {
          title: "الدعم والنمو",
          description:
            "بعد الإطلاق، نستمر في دعم متجرك بالتحديثات والتحسينات والخصائص الجديدة حسب الحاجة.",
        },
      ],
    },
    examples: {
      heading: "ماذا يمكننا أن نبني لك على سلة",
      items: [
        {
          title: "متجر إلكتروني بهوية متكاملة",
          description:
            "متجر سلة مخصص لعلامات الأزياء أو الجمال أو التجزئة التي تحتاج إلى هوية أقوى وتجربة شراء أفضل.",
        },
        {
          title: "إعادة تصميم لتحسين التحويل",
          description:
            "مشروع إعادة تصميم لمتجر قائم على سلة يحتاج إلى رحلة عميل أوضح وتجربة جوال أقوى وشكل أكثر احترافية.",
        },
        {
          title: "متجر بخصائص متقدمة",
          description:
            "متجر سلة يحتوي على أقسام متقدمة وتجارب محتوى مخصصة وتحسينات تشغيلية وخصائص إضافية.",
        },
        {
          title: "دعم تقني مستمر",
          description:
            "خطة دعم شهرية للعلامات التجارية التي تحتاج إلى شريك يعتمد عليه للتحديثات، الإصلاحات، والتحسينات المستمرة.",
        },
      ],
    },
    industries: {
      heading: "القطاعات التي نخدمها",
      list: [
        "الأزياء والملابس",
        "الجمال والعناية",
        "الأغذية والمشروبات",
        "العلامات التجارية الاستهلاكية",
        "التجزئة والمنتجات",
        "الصحة والعافية",
        "المنزل والديكور",
        "المتاجر المتخصصة",
      ],
      paragraph:
        "إذا كنت تدير مشروع تجارة إلكترونية في الإمارات أو الخليج وتريد متجر سلة أكثر احترافية، فنحن نستطيع مساعدتك في بناء متجر يبدو أفضل ويعمل بشكل أفضل ويدعم نموك على المدى الطويل.",
    },
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        {
          question: "هل تعملون فقط على سلة؟",
          answer:
            "نعم، يتمحور هذا الموقع والخدمات تحت SouqFlow حول تطوير وتخصيص ودعم متاجر سلة بشكل أساسي.",
        },
        {
          question: "هل يمكنكم إعادة تصميم متجر سلة قائم؟",
          answer:
            "نعم، يمكننا تحسين التصميم، الهيكلة، تجربة الجوال، طريقة عرض المحتوى، وتجربة المستخدم لمتجرك الحالي.",
        },
        {
          question: "هل تقدمون خصائص مخصصة وتكاملات؟",
          answer:
            "نعم، ندعم تطوير الخصائص المخصصة والتحسينات التشغيلية وأعمال التكامل عند الحاجة.",
        },
        {
          question: "هل تقدمون دعماً مستمراً بعد الإطلاق؟",
          answer:
            "نعم، يمكننا دعم متجرك بشكل مستمر من خلال التحديثات والإصلاحات والتحسينات المستقبلية.",
        },
        {
          question: "هل تعملون مع شركات في الإمارات والسعودية؟",
          answer:
            "نعم، نحن مقرنا دبي ونستهدف دعم العلامات التجارية في الإمارات والسعودية ودول الخليج.",
        },
      ],
    },
    form: {
      heading: "لنبدأ تطوير متجر سلة الخاص بك",
      body: "أخبرنا عن نشاطك التجاري ومتجرك واحتياجاتك، وسنراجع التفاصيل ونتواصل معك.",
      note: "عادة ما نرد خلال 24 ساعة.",
      fields: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف / واتساب",
        company: "اسم الشركة",
        projectType: "نوع المشروع",
        message: "الرسالة",
      },
      submit: "إرسال الطلب",
      secondary: "تفضل واتساب؟ تواصل معنا مباشرة.",
    },
    footer: {
      intro: "SouqFlow – تطوير متاجر سلة في دبي للشركات في الإمارات والخليج",
      servicesHeading: "الخدمات",
      contactHeading: "تواصل معنا",
      services: [
        "تطوير متجر سلة",
        "تخصيص قوالب سلة",
        "تطوير تطبيقات سلة",
        "تكاملات سلة",
        "دعم متاجر سلة",
      ],
      powered: "بدعم من Clicko Digital LLC - دبي، الإمارات",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      whatsappLabel: "واتساب",
    },
    whatsappBubble: "مرحباً، أنا مهتم بخدمات تطوير متجر سلة لمشروعي.",
  },
} as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.06, duration: 0.4 },
  }),
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const t = useMemo(() => content[language], [language]);
  const dir = language === "ar" ? "rtl" : "ltr";
  const isRTL = dir === "rtl";

  const encodedWhatsAppMessage = encodeURIComponent(
    language === "en" ? content.en.whatsappBubble : content.ar.whatsappBubble,
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodedWhatsAppMessage}`;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-50 selection:bg-teal-500/30 selection:text-teal-100"
      dir={dir}
    >
      <div className="fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-panel flex w-full max-w-6xl items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/80 px-4 py-2.5 backdrop-blur-md lg:px-6"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 text-xs font-semibold tracking-tight text-slate-950 shadow-lg shadow-teal-500/40">
              SF
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-slate-50">
                SouqFlow
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                Salla Development Studio
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <button
              className="transition-colors hover:text-teal-300"
              onClick={() => handleScrollTo("hero")}
            >
              {t.nav.home}
            </button>
            <button
              className="transition-colors hover:text-teal-300"
              onClick={() => handleScrollTo("services")}
            >
              {t.nav.services}
            </button>
            <button
              className="transition-colors hover:text-teal-300"
              onClick={() => handleScrollTo("process")}
            >
              {t.nav.process}
            </button>
            <button
              className="transition-colors hover:text-teal-300"
              onClick={() => handleScrollTo("faq")}
            >
              {t.nav.faq}
            </button>
            <button
              className="transition-colors hover:text-teal-300"
              onClick={() => handleScrollTo("contact")}
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center rounded-full bg-slate-800/80 p-0.5 text-[11px] font-medium text-slate-300 ring-1 ring-slate-600/80"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition ${
                  language === "en" ? "bg-slate-50 text-slate-950 shadow-sm" : "hover:text-teal-200"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition ${
                  language === "ar" ? "bg-slate-50 text-slate-950 shadow-sm" : "hover:text-teal-200"
                }`}
              >
                AR
              </button>
            </div>
            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:scale-[1.02] hover:shadow-teal-400/60 md:inline-flex"
            >
              {language === "en" ? "Start Project" : "ابدأ المشروع"}
            </button>
          </div>
        </motion.header>
      </div>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-28 md:pt-32 lg:px-6 lg:pb-24 lg:pt-36">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
          <div className="gradient-hero absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1)_0,_#020617_60%)]" />
        </div>

        <section
          id="hero"
          className="relative grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-teal-200 shadow-sm shadow-teal-500/40 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span className="uppercase tracking-[0.16em]">{t.hero.badge}</span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl sm:leading-tight lg:text-[2.65rem]">
                {t.hero.title}
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:scale-[1.02] hover:shadow-teal-300/70"
              >
                {t.hero.primaryCta}
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-teal-400/60 bg-slate-900/40 px-4 py-2.5 text-xs font-semibold text-teal-200 shadow-sm shadow-teal-500/30 transition hover:border-teal-300 hover:bg-slate-900/80"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              {t.hero.trust.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="glass-panel relative overflow-hidden rounded-3xl border border-slate-700/60 p-5 shadow-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(45,212,191,0.15),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(56,189,248,0.15),transparent_55%)] opacity-80" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Salla development overview
                  </p>
                  <p className="max-w-[15rem] text-xs text-slate-200">
                    Salla store development, theme customization, app development, integrations, and
                    support for GCC ecommerce.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 text-right">
                  <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
                    Live in UAE & KSA
                  </span>
                  <span className="text-[10px] text-slate-400">SouqFlow · Salla partner</span>
                </div>
              </div>

              <div className="grid gap-4 text-[11px] text-slate-200 md:grid-cols-2">
                <div className="space-y-2 rounded-2xl border border-slate-700/70 bg-slate-900/60 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Core focus
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-teal-400" />
                      <span>Salla store development</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-teal-400" />
                      <span>Salla theme customization</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-teal-400" />
                      <span>Salla app development & integrations</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 rounded-2xl border border-slate-700/70 bg-slate-900/60 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Built for
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center justify-between gap-2">
                      <span className="text-slate-200">UAE & GCC ecommerce brands</span>
                      <span className="rounded-full bg-teal-400/10 px-2 py-0.5 text-[10px] text-teal-300">
                        Priority
                      </span>
                    </li>
                    <li className="flex items-center justify-between gap-2">
                      <span className="text-slate-200">Arabic + English UX</span>
                      <span className="text-[10px] text-slate-400">Localized</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Optimized for conversion & performance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-8 rounded-full bg-gradient-to-r from-slate-600 via-teal-400 to-emerald-300" />
                  <span>SouqFlow technology studio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="trust-intro"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/60 px-5 py-6 shadow-[0_16px_55px_rgba(15,23,42,0.9)] ring-1 ring-slate-900/80 md:px-8 md:py-8"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {t.trustIntro.heading}
            </h2>
            {t.trustIntro.body.map((paragraph) => (
              <p key={paragraph} className="text-xs leading-relaxed text-slate-300 md:text-sm">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
            {t.trustIntro.strip.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-slate-200"
              >
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400" />
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="services"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                {t.services.heading}
              </h2>
              <p className="max-w-xl text-xs text-slate-400 md:text-sm">
                Salla store development, Salla theme customization, Salla app development, and
                integrations built for ecommerce brands in the UAE and GCC.
              </p>
            </div>
            <span className="rounded-full border border-teal-400/30 bg-slate-900/50 px-3 py-1 text-[11px] font-medium text-teal-200">
              Salla-focused · Not a generic agency
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, index) => (
              <motion.article
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 ring-1 ring-slate-950/90 transition hover:-translate-y-1 hover:border-teal-400/60 hover:ring-teal-500/50"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16),transparent_60%)]" />
                </div>
                <div className="relative space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold tracking-tight text-slate-50">
                      {service.title}
                    </h3>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 text-[10px] text-teal-300 ring-1 ring-slate-700/80">
                      <span className="h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400" />
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="why"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:px-8 md:py-8"
        >
          <div className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {t.why.heading}
            </h2>
            <p className="text-xs text-slate-300 md:text-sm">
              SouqFlow is a Salla-focused ecommerce development partner based in Dubai. We help GCC
              brands build, customize, integrate, and scale Salla stores with a long-term technical
              mindset.
            </p>
            <p className="text-xs text-slate-400 md:text-sm">
              We act as your Salla development partner – not just a one-off implementer – so your
              store can evolve with your business.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.why.items.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-1.5 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400/80 to-cyan-300/90" />
                  <h3 className="text-xs font-semibold tracking-tight text-slate-50 md:text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="process"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="space-y-1.5">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                {t.process.heading}
              </h2>
              <p className="max-w-xl text-xs text-slate-400 md:text-sm">
                A clear, collaborative process designed for ecommerce teams in the UAE and GCC who
                need reliable Salla development.
              </p>
            </div>
            <span className="text-[11px] text-slate-400">
              From discovery to launch and support.
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 px-4 py-5 md:px-6 md:py-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(45,212,191,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.08),transparent_55%)]" />
            <ol className="relative z-10 grid gap-4 md:grid-cols-5">
              {t.process.steps.map((step, index) => (
                <motion.li
                  key={step.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex flex-col gap-2 rounded-2xl border border-slate-800/90 bg-slate-950/90 p-3 text-[11px] text-slate-200"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-teal-300 ring-1 ring-slate-700">
                      {index + 1}
                    </span>
                    <span className="h-1 flex-1 rounded-full bg-gradient-to-r from-teal-400/70 via-cyan-400/70 to-emerald-400/70" />
                  </div>
                  <h3 className="text-[11px] font-semibold tracking-tight text-slate-50">
                    {step.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-slate-300">{step.description}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.section>

        <motion.section
          id="examples"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5"
        >
          <div className="space-y-1.5">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {t.examples.heading}
            </h2>
            <p className="max-w-xl text-xs text-slate-400 md:text-sm">
              We help GCC brands translate strategy into Salla storefronts that look premium, feel
              fast, and convert consistently.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {t.examples.items.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-4 ring-1 ring-slate-950/90 transition hover:-translate-y-1.5 hover:border-teal-400/70 hover:ring-teal-500/60"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.2),transparent_60%)]" />
                </div>
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-slate-50">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-300">{item.description}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/80 text-xs text-teal-300 ring-1 ring-slate-700/80">
                      <span className="h-4 w-6 rounded-xl bg-gradient-to-r from-slate-600 via-teal-400 to-emerald-300" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-[10px] text-slate-400">
                    <span>
                      Salla store development · Salla store redesign · Salla ecommerce development
                    </span>
                    <span className="hidden rounded-full bg-slate-900/90 px-2 py-1 text-[10px] text-teal-200 md:inline">
                      Case-study style setup
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="industries"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          <div className="space-y-1.5">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {t.industries.heading}
            </h2>
            <p className="max-w-xl text-xs text-slate-400 md:text-sm">
              We focus on ecommerce brands in the UAE and GCC that need a specialist Salla
              development partner, not a generalist agency.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {t.industries.list.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-slate-200 transition hover:border-teal-400/60 hover:text-teal-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {industry}
              </span>
            ))}
          </div>
          <p className="max-w-2xl text-xs text-slate-300 md:text-sm">{t.industries.paragraph}</p>
        </motion.section>

        <motion.section
          id="faq"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-6 md:px-8 md:py-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="space-y-1.5">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                {t.faq.heading}
              </h2>
              <p className="max-w-xl text-xs text-slate-400 md:text-sm">
                Clear answers about how we partner with Salla merchants across Dubai, UAE, Saudi
                Arabia, and the wider GCC.
              </p>
            </div>
            <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
              Salla development · Salla store redesign · Salla support
            </span>
          </div>

          <div className="divide-y divide-slate-800 text-sm">
            <AnimatePresence initial={false}>
              {t.faq.items.map((item, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <motion.div key={item.question} initial={false} className="py-3">
                    <button
                      type="button"
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left text-xs font-medium text-slate-100 md:text-sm"
                    >
                      <span>{item.question}</span>
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-[14px] text-slate-200"
                        aria-hidden
                      >
                        <motion.span
                          initial={false}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="block h-3 w-3 origin-center"
                        >
                          +
                        </motion.span>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.24,
                            ease: "easeOut",
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-[11px] leading-relaxed text-slate-300 md:text-xs">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/90 px-5 py-6 shadow-[0_22px_65px_rgba(15,23,42,0.9)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] md:px-8 md:py-8"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {t.form.heading}
            </h2>
            <p className="text-xs text-slate-300 md:text-sm">{t.form.body}</p>
            <ul className="space-y-1.5 text-[11px] text-slate-300 md:text-xs">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span>
                  Strategy, design, and development aligned to Salla and GCC ecommerce realities.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span>
                  Built for bilingual storefronts, localized experiences, and long-term support.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span>
                  Salla development, Salla store redesign, Salla app development, and more.
                </span>
              </li>
            </ul>
            <div className="space-y-2 pt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold text-emerald-100 ring-1 ring-emerald-500/50 transition hover:bg-emerald-400/20"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] text-emerald-950">
                  WA
                </span>
                <span>
                  {language === "en"
                    ? "Prefer WhatsApp? Chat with us directly."
                    : "تفضل واتساب؟ تواصل معنا مباشرة."}
                </span>
              </a>
              <p className="text-[11px] text-slate-400 md:text-xs">{t.form.note}</p>
            </div>
          </div>

          <form
            className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-xs shadow-[0_18px_55px_rgba(15,23,42,0.9)] md:p-5"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium text-slate-200">
                  {t.form.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.form.fields.name}
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium text-slate-200">
                  {t.form.fields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.form.fields.email}
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium text-slate-200">
                  {t.form.fields.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.form.fields.phone}
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-medium text-slate-200">
                  {t.form.fields.company}
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder={t.form.fields.company}
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-slate-200">
                {t.form.fields.projectType}
              </label>
              <select
                name="projectType"
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {t.form.fields.projectType}
                </option>
                <option value="new-store">
                  {language === "en" ? "New Salla store" : "إطلاق متجر سلة جديد"}
                </option>
                <option value="redesign">
                  {language === "en" ? "Redesign existing Salla store" : "إعادة تصميم متجر سلة قائم"}
                </option>
                <option value="custom-dev">
                  {language === "en"
                    ? "Custom features or app development"
                    : "خصائص مخصصة أو تطوير تطبيقات"}
                </option>
                <option value="integrations">
                  {language === "en" ? "Integrations & workflow" : "تكاملات وأتمتة"}
                </option>
                <option value="support">
                  {language === "en" ? "Ongoing support" : "دعم وتحسينات مستمرة"}
                </option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-slate-200">
                {t.form.fields.message}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder={t.form.fields.message}
                className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:scale-[1.02] hover:shadow-teal-300/70"
              >
                {t.form.submit}
              </button>
              <p className="text-[11px] text-slate-400 md:text-xs">{t.form.note}</p>
            </div>
          </form>
        </motion.section>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/95 px-4 py-6 text-[11px] text-slate-400 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="max-w-md text-xs text-slate-200">{t.footer.intro}</p>
            <p className="text-[10px] text-slate-500">
              Salla development · Salla store development · Salla theme customization · Salla app
              development · Salla integrations · Salla support
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="space-y-1.5">
              <h3 className="text-[11px] font-semibold text-slate-200">
                {t.footer.servicesHeading}
              </h3>
              <ul className="space-y-1 text-[11px]">
                {t.footer.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-[11px] font-semibold text-slate-200">
                {t.footer.contactHeading}
              </h3>
              <ul className="space-y-1 text-[11px]">
                <li>
                  {t.footer.emailLabel}:{" "}
                  <span className="text-slate-300">hello@souqflow.com</span>
                </li>
                <li>
                  {t.footer.phoneLabel}:{" "}
                  <span className="text-slate-300">+971 56 355 1010</span>
                </li>
                <li>
                  {t.footer.whatsappLabel}:{" "}
                  <span className="text-slate-300">+971 56 355 1010</span>
                </li>
                <li>
                  <span className="text-slate-500">
                    Unit 2003-2, 20th Floor, The Exchange Tower, Business Bay, Dubai, UAE
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t border-slate-900 pt-3 text-[10px] text-slate-500">
          <span>© {new Date().getFullYear()} SouqFlow. All rights reserved.</span>
          <span>{t.footer.powered}</span>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={`whatsapp-fab fixed bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-[11px] font-semibold text-emerald-950 shadow-lg transition hover:scale-[1.03] hover:bg-emerald-300 ${
          isRTL ? "left-4" : "right-4"
        }`}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-950/10 text-[10px]">
          WA
        </span>
        <span className="hidden sm:inline">
          {language === "en" ? "WhatsApp – Salla project" : "واتساب – مشروع سلة"}
        </span>
      </a>
    </div>
  );
}

