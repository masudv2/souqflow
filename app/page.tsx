"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Store,
  Palette,
  Layout,
  Code2,
  Plug,
  Headphones,
  Search,
  LayoutDashboard,
  TestTube,
  TrendingUp,
  Target,
  Globe,
  Handshake,
  RefreshCw,
  Box,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  Heart,
  ShoppingBag,
  Activity,
  Home as HomeIcon,
  Zap,
  Shield,
  Layers,
} from "lucide-react";

type Language = "en" | "ar";

const SERVICE_ICONS = [Store, Palette, Layout, Code2, Plug, Headphones] as const;
const PROCESS_ICONS = [Search, LayoutDashboard, Code2, TestTube, TrendingUp] as const;
const WHY_ICONS = [Target, Globe, Palette, Handshake] as const;
const EXAMPLE_ICONS = [Store, RefreshCw, Box, Headphones] as const;
const INDUSTRY_ICONS = [Shirt, Sparkles, UtensilsCrossed, Heart, ShoppingBag, Activity, HomeIcon, Store] as const;

const FORM_EMAIL = "hello@clickodigital.com";

const HERO_RIGHT_ICONS = [
  { Icon: Store, label: "Salla stores", color: "from-teal-400/20 to-cyan-400/10" },
  { Icon: Globe, label: "UAE & GCC", color: "from-cyan-400/20 to-blue-400/10" },
  { Icon: Zap, label: "Fast launch", color: "from-emerald-400/20 to-teal-400/10" },
  { Icon: Shield, label: "Support", color: "from-teal-400/20 to-emerald-400/10" },
  { Icon: Layers, label: "Integrations", color: "from-cyan-400/20 to-teal-400/10" },
  { Icon: Code2, label: "Custom dev", color: "from-emerald-400/20 to-cyan-400/10" },
] as const;

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
      tagline: "Your Salla development partner in Dubai. We build, customize, and support stores for UAE and GCC brands.",
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
      tagline: "شريكك في تطوير متاجر سلة في دبي. نبنى ونخصص وندعم المتاجر لعلامات الإمارات والخليج.",
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

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

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
          <a href="#" onClick={(e) => { e.preventDefault(); handleScrollTo("hero"); }} className="flex items-center gap-2">
            <Image src="/souqflow-logo.png" alt="SouqFlow" width={140} height={36} className="h-9 w-auto object-contain" priority />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
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
              className="flex items-center rounded-full bg-slate-800/80 p-0.5 text-xs font-medium text-slate-300 ring-1 ring-slate-600/80"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition ${
                  language === "en" ? "bg-slate-50 text-slate-950 shadow-sm" : "hover:text-teal-200"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition ${
                  language === "ar" ? "bg-slate-50 text-slate-950 shadow-sm" : "hover:text-teal-200"
                }`}
              >
                AR
              </button>
            </div>
            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:scale-[1.02] hover:shadow-teal-400/60 md:inline-flex"
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
          className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-200 shadow-sm shadow-teal-500/40 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
              {t.hero.badge}
            </div>

            <div className="space-y-6">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight">
                {t.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:scale-[1.02] hover:shadow-teal-300/70"
              >
                {t.hero.primaryCta}
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-400/60 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-teal-200 shadow-sm shadow-teal-500/30 transition hover:border-teal-300 hover:bg-slate-900/80"
              >
                <MessageCircle className="h-4 w-4" />
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              {t.hero.trust.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-400" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/10 blur-xl" />
              {HERO_RIGHT_ICONS.map(({ Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="relative flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 backdrop-blur-sm transition hover:border-teal-400/40 hover:bg-slate-800/60"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} ring-1 ring-slate-600/50`}>
                    <Icon className="h-5 w-5 text-teal-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{label}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              Dubai · Saudi · GCC
            </div>
          </motion.div>
        </section>

        <motion.section
          id="trust-intro"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/60 px-6 py-8 shadow-[0_16px_55px_rgba(15,23,42,0.9)] ring-1 ring-slate-900/80 md:px-10 md:py-10"
        >
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              {t.trustIntro.heading}
            </h2>
            {t.trustIntro.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-300 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {t.trustIntro.strip.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-slate-200"
              >
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button type="button" onClick={() => handleScrollTo("contact")} className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              {t.hero.primaryCta}
            </button>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-teal-400/60 px-5 py-2.5 text-sm font-semibold text-teal-200 transition hover:bg-teal-400/10">
              <MessageCircle className="h-4 w-4" /> {t.hero.secondaryCta}
            </a>
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
                {t.services.heading}
              </h2>
              <p className="max-w-xl text-base text-slate-400 md:text-lg">
                Salla store development, Salla theme customization, Salla app development, and
                integrations built for ecommerce brands in the UAE and GCC.
              </p>
            </div>
            <span className="rounded-full border border-teal-400/30 bg-slate-900/50 px-4 py-2 text-sm font-medium text-teal-200">
              Salla-focused · Not a generic agency
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, index) => {
              const Icon = SERVICE_ICONS[index];
              return (
                <motion.article
                  key={service.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 ring-1 ring-slate-950/90 transition hover:-translate-y-1 hover:border-teal-400/60 hover:ring-teal-500/50"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16),transparent_60%)]" />
                  </div>
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-400/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ChevronDown className="h-5 w-5 rotate-[-90deg] text-slate-500 opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-50">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="flex justify-center pt-4">
            <button type="button" onClick={() => handleScrollTo("contact")} className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              {t.hero.primaryCta}
            </button>
          </div>
        </motion.section>

        <motion.section
          id="why"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/70 px-6 py-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:px-10 md:py-10"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              {t.why.heading}
            </h2>
            <p className="text-base text-slate-300 md:text-lg">
              SouqFlow is a Salla-focused ecommerce development partner based in Dubai. We help GCC
              brands build, customize, integrate, and scale Salla stores with a long-term technical
              mindset.
            </p>
            <p className="text-base text-slate-400">
              We act as your Salla development partner – not just a one-off implementer – so your
              store can evolve with your business.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.why.items.map((item, index) => {
              const Icon = WHY_ICONS[index];
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-400/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-slate-50">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-center pt-6">
            <button type="button" onClick={() => handleScrollTo("contact")} className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              {t.hero.primaryCta}
            </button>
          </div>
        </motion.section>

        <motion.section
          id="process"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
                {t.process.heading}
              </h2>
              <p className="max-w-xl text-base text-slate-400 md:text-lg">
                A clear, collaborative process designed for ecommerce teams in the UAE and GCC who
                need reliable Salla development.
              </p>
            </div>
            <span className="text-sm text-slate-400">
              From discovery to launch and support.
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-8 md:px-8 md:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(45,212,191,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.08),transparent_55%)]" />
            <ol className="relative z-10 flex flex-col gap-0 md:flex-row md:items-stretch md:gap-0">
              {t.process.steps.map((step, index) => {
                const Icon = PROCESS_ICONS[index];
                const isLast = index === t.process.steps.length - 1;
                return (
                  <motion.li
                    key={step.title}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative flex flex-1 flex-col"
                  >
                    <div className="relative flex flex-1 flex-col rounded-2xl border border-slate-800/90 bg-slate-950/90 p-5 transition hover:border-teal-400/30 md:mx-1">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-teal-400/50 bg-teal-500/10 text-teal-400 ring-2 ring-teal-400/20">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-bold text-teal-300">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-slate-50 md:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                        {step.description}
                      </p>
                    </div>
                    {!isLast && (
                      <div className="hidden shrink-0 items-center px-1 py-4 md:flex md:self-center">
                        <div className="h-0.5 w-6 rounded-full bg-gradient-to-r from-teal-400/60 to-transparent" />
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ol>
          </div>
          <div className="flex justify-center pt-8">
            <button type="button" onClick={() => handleScrollTo("contact")} className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              {t.hero.primaryCta}
            </button>
          </div>
        </motion.section>

        <motion.section
          id="examples"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              {t.examples.heading}
            </h2>
            <p className="max-w-xl text-base text-slate-400 md:text-lg">
              We help GCC brands translate strategy into Salla storefronts that look premium, feel
              fast, and convert consistently.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {t.examples.items.map((item, index) => {
              const Icon = EXAMPLE_ICONS[index];
              return (
                <motion.article
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 ring-1 ring-slate-950/90 transition hover:-translate-y-1.5 hover:border-teal-400/70 hover:ring-teal-500/60"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.2),transparent_60%)]" />
                  </div>
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-400/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-teal-200">
                        Case study
                      </span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-50">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="flex justify-center pt-4">
            <button type="button" onClick={() => handleScrollTo("contact")} className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              {t.hero.primaryCta}
            </button>
          </div>
        </motion.section>

        <motion.section
          id="industries"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              {t.industries.heading}
            </h2>
            <p className="max-w-xl text-base text-slate-400 md:text-lg">
              We focus on ecommerce brands in the UAE and GCC that need a specialist Salla
              development partner, not a generalist agency.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {t.industries.list.map((industry, index) => {
              const Icon = INDUSTRY_ICONS[index];
              return (
                <motion.div
                  key={industry}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-center transition hover:border-teal-400/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-400/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{industry}</span>
                </motion.div>
              );
            })}
          </div>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">{t.industries.paragraph}</p>
          <div className="flex justify-center pt-4">
            <button type="button" onClick={() => handleScrollTo("contact")} className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              {t.hero.primaryCta}
            </button>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-8 md:px-10 md:py-10"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
                {t.faq.heading}
              </h2>
              <p className="max-w-xl text-base text-slate-400 md:text-lg">
                Clear answers about how we partner with Salla merchants across Dubai, UAE, Saudi
                Arabia, and the wider GCC.
              </p>
            </div>
            <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              Salla development · Salla store redesign · Salla support
            </span>
          </div>

          <div className="divide-y divide-slate-800">
            <AnimatePresence initial={false}>
              {t.faq.items.map((item, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <motion.div key={item.question} initial={false} className="py-3">
                    <button
                      type="button"
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-slate-100 md:text-lg"
                    >
                      <span>{item.question}</span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200"
                        aria-hidden
                      >
                        <motion.span
                          initial={false}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="block text-xl leading-none"
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
                          <p className="pb-4 text-sm leading-relaxed text-slate-300 md:text-base">
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
          <div className="space-y-5">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              {t.form.heading}
            </h2>
            <p className="text-base text-slate-300 md:text-lg">{t.form.body}</p>
            <ul className="space-y-2 text-sm text-slate-300 md:text-base">
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
                className="inline-flex items-center gap-3 rounded-full border border-emerald-400/70 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-100 ring-1 ring-emerald-500/50 transition hover:bg-emerald-400/20"
              >
                <MessageCircle className="h-5 w-5" />
                <span>
                  {language === "en"
                    ? "Prefer WhatsApp? Chat with us directly."
                    : "تفضل واتساب؟ تواصل معنا مباشرة."}
                </span>
              </a>
              <p className="text-sm text-slate-400">{t.form.note}</p>
            </div>
          </div>

          <form
            className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.9)] md:p-8"
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.currentTarget;
              setFormStatus("submitting");
              try {
                const body = new FormData(form);
                body.append("_subject", "SouqFlow – New inquiry from website");
                body.append("_template", "table");
                const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
                  method: "POST",
                  body,
                  headers: { Accept: "application/json" },
                });
                if (res.ok) {
                  setFormStatus("success");
                  form.reset();
                } else {
                  setFormStatus("error");
                }
              } catch {
                setFormStatus("error");
              }
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-200">
                  {t.form.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.form.fields.name}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-200">
                  {t.form.fields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.form.fields.email}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-200">
                  {t.form.fields.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.form.fields.phone}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-200">
                  {t.form.fields.company}
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder={t.form.fields.company}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">
                {t.form.fields.projectType}
              </label>
              <select
                name="projectType"
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
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

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-200">
                {t.form.fields.message}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder={t.form.fields.message}
                className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none ring-1 ring-slate-900 transition focus:border-teal-400/80 focus:ring-teal-500/70"
              />
            </div>

            {formStatus === "success" && (
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-200">
                {language === "en"
                  ? "Thanks! We’ll get back to you within 24 hours."
                  : "شكراً! سنتواصل معك خلال 24 ساعة."}
              </div>
            )}
            {formStatus === "error" && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200">
                {language === "en"
                  ? "Something went wrong. Please email us at hello@clickodigital.com or try again."
                  : "حدث خطأ. راسلنا على hello@clickodigital.com أو حاول مرة أخرى."}
              </div>
            )}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:scale-[1.02] hover:shadow-teal-300/70 disabled:pointer-events-none disabled:opacity-60"
              >
                {formStatus === "submitting"
                  ? (language === "en" ? "Sending…" : "جاري الإرسال…")
                  : t.form.submit}
              </button>
              <p className="text-sm text-slate-400">{t.form.note}</p>
            </div>
          </form>
        </motion.section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Image src="/souqflow-logo.png" alt="SouqFlow" width={160} height={42} className="h-10 w-auto object-contain" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                {t.footer.intro}
              </p>
              <p className="mt-3 text-sm text-slate-500">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                {t.footer.servicesHeading}
              </h3>
              <ul className="mt-4 space-y-2">
                {t.footer.services.map((service) => (
                  <li key={service}>
                    <button
                      type="button"
                      onClick={() => handleScrollTo("services")}
                      className="text-sm text-slate-400 transition hover:text-teal-300"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                {t.footer.contactHeading}
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <a href="mailto:hello@souqflow.com" className="text-sm text-slate-400 hover:text-teal-300">
                    hello@souqflow.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <a href="tel:+971563551010" className="text-sm text-slate-400 hover:text-teal-300">
                    +971 56 355 1010
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-teal-300">
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-slate-400">
                    Unit 2003-2, 20th Floor, The Exchange Tower, Business Bay, Dubai, UAE
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8">
            <span className="text-sm text-slate-500">© {new Date().getFullYear()} SouqFlow. All rights reserved.</span>
            <span className="text-sm text-slate-500">{t.footer.powered}</span>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={`whatsapp-fab fixed bottom-6 z-40 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg transition hover:scale-[1.03] hover:bg-emerald-400 ${
          isRTL ? "left-6" : "right-6"
        }`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">
          {language === "en" ? "WhatsApp – Salla project" : "واتساب – مشروع سلة"}
        </span>
      </a>
    </div>
  );
}

