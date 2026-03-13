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
const PROCESS_ICONS = [Search, LayoutDashboard, Code2, TestTube] as const;
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
      badge: "Leading Salla developer Dubai · UAE & GCC",
      title: "#1 Salla Developer in Dubai – Store Development, Redesign & Support for UAE & GCC",
      subtitle:
        "Dubai-based Salla development agency. We build, redesign, and scale Salla stores for brands across Dubai, UAE, Saudi Arabia, and the GCC. Custom themes, integrations, apps, and ongoing Salla support—all from Dubai.",
      primaryCta: "Start Your Project",
      secondaryCta: "Talk on WhatsApp",
      trust: ["Dubai HQ · UAE", "Salla specialist", "UAE & GCC ecommerce"],
    },
    trustIntro: {
      heading: "The Go-To Salla Development Agency in Dubai for UAE & GCC Brands",
      body: [
        "SouqFlow is a Dubai-based Salla development studio helping brands across the UAE, Saudi Arabia, and the GCC launch and grow on Salla. We focus on Salla store development, Salla store redesign, Salla theme customization, Salla app development, and Salla integrations—so your Dubai or Gulf ecommerce store performs and converts.",
        "Ecommerce brands in Dubai and the Gulf need more than basic Salla setup. They need a dedicated Salla developer in Dubai: fast storefronts, Arabic–English UX, local payment and shipping, and reliable Salla support. That’s what we deliver from our Dubai office.",
      ],
      strip: ["Salla developer Dubai", "Salla store development UAE", "Salla partner Dubai", "Salla ecommerce Dubai"],
    },
    services: {
      heading: "Salla Development Services in Dubai – What We Offer",
      items: [
        {
          title: "Salla Store Development Dubai",
          description:
            "Full Salla store development for Dubai and UAE brands: store structure, branded design, page layouts, payments and shipping, and launch support. The go-to Salla developer in Dubai for new ecommerce stores.",
        },
        {
          title: "Salla Store Redesign UAE & GCC",
          description:
            "Redesign your existing Salla store for better conversion. We improve UX, mobile experience, and storefront design so your Dubai or GCC Salla store looks and performs like a premium brand.",
        },
        {
          title: "Salla Theme Customization Dubai",
          description:
            "Custom Salla theme work for Dubai and UAE merchants: homepage, product and collection pages, mobile optimization, and brand-aligned design. Salla theme customization done right from Dubai.",
        },
        {
          title: "Salla App Development UAE",
          description:
            "Custom Salla apps and features for UAE and GCC merchants: workflow automation, advanced functionality, and integrations. Salla app development by a Dubai-based team that knows the platform.",
        },
        {
          title: "Salla Integrations Dubai & GCC",
          description:
            "Connect Salla to your ERP, CRM, and tools. We plan and build Salla integrations for Dubai and Gulf businesses to cut manual work and streamline operations.",
        },
        {
          title: "Salla Support & Maintenance Dubai",
          description:
            "Ongoing Salla support from Dubai: updates, bug fixes, new features, and a reliable Salla development partner for UAE and GCC brands after launch.",
        },
      ],
    },
    why: {
      heading: "Why Dubai & UAE Brands Choose SouqFlow for Salla",
      items: [
        {
          title: "Salla-Only Focus",
          description:
            "We are a Salla specialist agency in Dubai. Everything we do—store development, redesign, themes, apps, integrations—is built around what Salla merchants in the UAE and GCC actually need.",
        },
        {
          title: "Based in Dubai, Built for UAE & GCC",
          description:
            "Our team is in Dubai. We understand UAE and Gulf ecommerce: Arabic–English stores, local payments, Saudi and UAE shipping, and the expectations of Dubai and GCC shoppers.",
        },
        {
          title: "Design + Development in One Place",
          description:
            "We combine Salla development and design under one roof in Dubai. You get a store that looks premium and is built to convert and scale.",
        },
        {
          title: "Long-Term Salla Partner in Dubai",
          description:
            "We support you at launch and beyond. Many Dubai and UAE brands use us as their ongoing Salla development and support partner.",
        },
      ],
    },
    process: {
      heading: "How We Deliver Salla Projects in Dubai & UAE",
      steps: [
        {
          title: "Discovery",
          description:
            "We learn your brand, products, and goals so we can plan the right Salla store or redesign for your Dubai or UAE business.",
        },
        {
          title: "Structure & UX Planning",
          description:
            "We define store structure, customer journey, and content so your Salla store is clear and conversion-focused for UAE and GCC shoppers.",
        },
        {
          title: "Design & Development",
          description:
            "We build and customize your Salla store in Dubai: theme, features, mobile optimization, and launch-ready storefront.",
        },
        {
          title: "Testing & Launch",
          description:
            "We test flows, content, and responsiveness so your Salla store is ready for Dubai, UAE, and GCC customers.",
        },
      ],
    },
    examples: {
      heading: "Salla Projects We Build for Dubai & UAE Brands",
      items: [
        {
          title: "Branded Salla Store for Dubai Brands",
          description:
            "Custom Salla storefronts for fashion, beauty, and retail brands in Dubai and the UAE—strong identity and a premium shopping experience.",
        },
        {
          title: "Salla Redesign for Higher Conversion",
          description:
            "Redesign of existing Salla stores for Dubai and GCC merchants: clearer journey, better mobile UX, and a more premium look.",
        },
        {
          title: "Advanced Salla Store Setup",
          description:
            "Salla stores with custom sections, workflows, and integrations for UAE and Gulf brands that need more than the basics.",
        },
        {
          title: "Ongoing Salla Support Dubai",
          description:
            "Monthly Salla support for Dubai and UAE brands: updates, fixes, and continuous improvements from a local partner.",
        },
      ],
    },
    industries: {
      heading: "Industries We Serve – Dubai, UAE & GCC",
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
        "Selling online in Dubai, UAE, or the GCC? We help you get a professional Salla store: better design, better UX, and long-term growth. Contact the leading Salla developer in Dubai.",
    },
    faq: {
      heading: "Salla Developer Dubai – FAQ",
      items: [
        {
          question: "Are you a Salla-only agency in Dubai?",
          answer:
            "Yes. SouqFlow is a Salla specialist in Dubai. We do Salla store development, Salla redesign, Salla theme customization, Salla app development, Salla integrations, and Salla support for UAE and GCC brands.",
        },
        {
          question: "Can you redesign our existing Salla store?",
          answer:
            "Yes. We redesign Salla stores for Dubai and UAE brands: better design, structure, mobile experience, and customer journey for higher conversion.",
        },
        {
          question: "Do you do custom Salla features and integrations?",
          answer:
            "Yes. We build custom Salla features, workflows, and integrations for Dubai and GCC merchants—ERP, CRM, and other tools connected to Salla.",
        },
        {
          question: "Do you offer Salla support after launch?",
          answer:
            "Yes. We provide ongoing Salla support from Dubai: updates, bug fixes, new features, and technical help for UAE and GCC stores.",
        },
        {
          question: "Do you work with brands in Dubai, UAE, and Saudi?",
          answer:
            "Yes. We are based in Dubai and work with brands across Dubai, the UAE, Saudi Arabia, and the wider GCC. We’re your Salla developer in Dubai and the Gulf.",
        },
      ],
    },
    form: {
      heading: "Get Your Salla Store Built in Dubai – Get a Quote",
      body:
        "Tell us about your business and what you need: new Salla store, redesign, theme work, integrations, or support. We’ll reply from Dubai within 24 hours.",
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
      intro: "SouqFlow – #1 Salla Developer Dubai · Salla Store Development UAE & GCC",
      tagline: "Leading Salla development agency in Dubai. We build, redesign, and support Salla stores for brands across Dubai, UAE, Saudi Arabia, and the GCC.",
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
    whatsappBubble: "Hi, I need a Salla developer in Dubai for my store. Can you help?",
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
      badge: "أفضل مطور سلة في دبي · الإمارات والخليج",
      title: "مطور متاجر سلة في دبي – تطوير، إعادة تصميم ودعم متاجر سلة للإمارات والخليج",
      subtitle:
        "استوديو تطوير متاجر سلة مقره دبي. نبنى ونصمم وندعم متاجر سلة للعلامات في دبي والإمارات والسعودية والخليج. قوالب مخصصة، تكاملات، تطبيقات سلة ودعم فني مستمر من دبي.",
      primaryCta: "ابدأ مشروعك",
      secondaryCta: "تواصل عبر واتساب",
      trust: ["مقرنا دبي · الإمارات", "متخصصون في سلة", "تجارة إلكترونية الإمارات والخليج"],
    },
    trustIntro: {
      heading: "وكالة تطوير متاجر سلة في دبي للعلامات في الإمارات والخليج",
      body: [
        "SouqFlow استوديو تطوير متاجر سلة مقره دبي، نساعد العلامات في الإمارات والسعودية والخليج على إطلاق وتنمية متاجرها على سلة. نركّز على تطوير متجر سلة، إعادة تصميم متجر سلة، تخصيص قوالب سلة، تطوير تطبيقات سلة وتكاملات سلة—ليكون متجرك في دبي أو الخليج جاهزاً للأداء والتحويل.",
        "علامات التجارة الإلكترونية في دبي والخليج تحتاج أكثر من إعداد سلة أساسي. تحتاج مطور سلة في دبي: متاجر سريعة، واجهة عربية–إنجليزية، دفع وشحن محلي، ودعم سلة موثوق. هذا ما نقدمه من مكتبنا في دبي.",
      ],
      strip: ["مطور سلة دبي", "تطوير متجر سلة الإمارات", "شريك سلة دبي", "متجر سلة دبي"],
    },
    services: {
      heading: "خدمات تطوير سلة في دبي – ما نقدمه",
      items: [
        {
          title: "تطوير متجر سلة في دبي",
          description:
            "تطوير متجر سلة كامل لعلامات دبي والإمارات: هيكلة المتجر، تصميم العلامة التجارية، الصفحات، الدفع والشحن ودعم الإطلاق. مطور سلة في دبي لمتاجر التجارة الإلكترونية الجديدة.",
        },
        {
          title: "إعادة تصميم متجر سلة للإمارات والخليج",
          description:
            "إعادة تصميم متجر سلة الحالي لتحسين التحويل. نحسن تجربة المستخدم والجوال والمظهر ليبدو متجرك على سلة في دبي أو الخليج كعلامة احترافية.",
        },
        {
          title: "تخصيص قوالب سلة في دبي",
          description:
            "تخصيص قوالب سلة لتجار دبي والإمارات: الصفحة الرئيسية، صفحات المنتجات والأقسام، تحسين الجوال والتصميم. تخصيص قوالب سلة من دبي.",
        },
        {
          title: "تطوير تطبيقات سلة في الإمارات",
          description:
            "تطبيقات وخصائص سلة مخصصة لتجار الإمارات والخليج: أتمتة، وظائف متقدمة وتكاملات. تطوير تطبيقات سلة من فريق مقره دبي.",
        },
        {
          title: "تكاملات سلة في دبي والخليج",
          description:
            "ربط سلة بأنظمتك وبرامجك وأدواتك. نخطط وننفذ تكاملات سلة لشركات دبي والخليج لتقليل العمل اليدوي وتبسيط العمليات.",
        },
        {
          title: "دعم وصيانة متجر سلة من دبي",
          description:
            "دعم سلة مستمر من دبي: تحديثات، إصلاحات، مزايا جديدة وشريك تطوير سلة موثوق لعلامات الإمارات والخليج بعد الإطلاق.",
        },
      ],
    },
    why: {
      heading: "لماذا تختار علامات دبي والإمارات SouqFlow لمتاجر سلة",
      items: [
        {
          title: "متخصصون في سلة فقط",
          description:
            "نحن وكالة متخصصة في سلة ومقرها دبي. كل ما نقدمه—تطوير متجر سلة، إعادة تصميم، قوالب، تطبيقات، تكاملات—مبني على ما يحتاجه تجار سلة في الإمارات والخليج.",
        },
        {
          title: "مقرنا دبي، ونبني للإمارات والخليج",
          description:
            "فريقنا في دبي. نفهم تجارة الإلكترونية في الإمارات والخليج: متاجر عربية–إنجليزية، دفع محلي، شحن السعودية والإمارات، وتوقعات متسوقي دبي والخليج.",
        },
        {
          title: "تصميم وتطوير تحت سقف واحد",
          description:
            "نجمع تطوير سلة والتصميم في مكان واحد في دبي. تحصل على متجر يبدو احترافياً ومبني للتحويل والنمو.",
        },
        {
          title: "شريك سلة طويل المدى في دبي",
          description:
            "ندعمك عند الإطلاق وما بعد. كثير من علامات دبي والإمارات يعتمدوننا كشريك تطوير ودعم سلة مستمر.",
        },
      ],
    },
    process: {
      heading: "كيف ننفذ مشاريع سلة في دبي والإمارات",
      steps: [
        {
          title: "الاكتشاف",
          description:
            "نتعرّف على علامتك ومنتجاتك وأهدافك لتخطيط متجر سلة أو إعادة تصميم مناسبة لعملك في دبي أو الإمارات.",
        },
        {
          title: "التخطيط وتجربة المستخدم",
          description:
            "نحدد هيكلة المتجر ورحلة العميل والمحتوى ليصبح متجر سلة واضحاً ومركّزاً على التحويل لمتسوقي الإمارات والخليج.",
        },
        {
          title: "التصميم والتطوير",
          description:
            "نبني ونخصص متجر سلة في دبي: القالب، المزايا، تحسين الجوال ومتجر جاهز للإطلاق.",
        },
        {
          title: "الاختبار والإطلاق",
          description:
            "نختبر التدفق والمحتوى والاستجابة ليصبح متجر سلة جاهزاً لعملاء دبي والإمارات والخليج.",
        },
      ],
    },
    examples: {
      heading: "مشاريع سلة نبنيها لعلامات دبي والإمارات",
      items: [
        {
          title: "متجر سلة بعلامة تجارية لعلامات دبي",
          description:
            "متاجر سلة مخصصة لعلامات الأزياء والجمال والتجزئة في دبي والإمارات—هوية قوية وتجربة شراء احترافية.",
        },
        {
          title: "إعادة تصميم متجر سلة لتحسين التحويل",
          description:
            "إعادة تصميم متاجر سلة قائمة لعلامات دبي والخليج: رحلة أوضح، تجربة جوال أفضل ومظهر أكثر احترافية.",
        },
        {
          title: "إعداد متجر سلة متقدم",
          description:
            "متاجر سلة بأقسام مخصصة وسير عمل وتكاملات لعلامات الإمارات والخليج التي تحتاج أكثر من الأساسيات.",
        },
        {
          title: "دعم سلة مستمر من دبي",
          description:
            "دعم سلة شهري لعلامات دبي والإمارات: تحديثات، إصلاحات وتحسينات مستمرة من شريك محلي.",
        },
      ],
    },
    industries: {
      heading: "القطاعات التي نخدمها – دبي، الإمارات والخليج",
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
        "تبيع أونلاين في دبي أو الإمارات أو الخليج؟ نساعدك في الحصول على متجر سلة احترافي: تصميم أفضل، تجربة أفضل ونمو طويل المدى. تواصل مع أفضل مطور سلة في دبي.",
    },
    faq: {
      heading: "مطور سلة دبي – الأسئلة الشائعة",
      items: [
        {
          question: "هل أنتم وكالة متخصصة في سلة فقط في دبي؟",
          answer:
            "نعم. SouqFlow متخصصون في سلة ومقرنا دبي. نقدم تطوير متجر سلة، إعادة تصميم متجر سلة، تخصيص قوالب سلة، تطوير تطبيقات سلة، تكاملات سلة ودعم سلة لعلامات الإمارات والخليج.",
        },
        {
          question: "هل يمكنكم إعادة تصميم متجر سلة الحالي؟",
          answer:
            "نعم. نعيد تصميم متاجر سلة لعلامات دبي والإمارات: تصميم أفضل، هيكلة، تجربة جوال ورحلة عميل لتحويل أعلى.",
        },
        {
          question: "هل تقدمون مزايا وتكاملات سلة مخصصة؟",
          answer:
            "نعم. نبني مزايا سلة مخصصة وسير عمل وتكاملات لتجار دبي والخليج—ربط ERP وCRM وأدوات أخرى بسلة.",
        },
        {
          question: "هل تقدمون دعم سلة بعد الإطلاق؟",
          answer:
            "نعم. نقدم دعم سلة مستمراً من دبي: تحديثات، إصلاحات، مزايا جديدة ومساعدة تقنية لمتاجر الإمارات والخليج.",
        },
        {
          question: "هل تعملون مع علامات في دبي والإمارات والسعودية؟",
          answer:
            "نعم. مقرنا دبي ونعمل مع علامات في دبي والإمارات والسعودية والخليج. نحن مطور سلة في دبي والخليج.",
        },
      ],
    },
    form: {
      heading: "ابنِ متجر سلة في دبي – احصل على عرض",
      body: "أخبرنا عن نشاطك وما تحتاجه: متجر سلة جديد، إعادة تصميم، قوالب، تكاملات أو دعم. سنرد من دبي خلال 24 ساعة.",
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
      intro: "SouqFlow – أفضل مطور سلة في دبي · تطوير متاجر سلة الإمارات والخليج",
      tagline: "وكالة تطوير سلة رائدة في دبي. نبنى ونصمم وندعم متاجر سلة لعلامات دبي والإمارات والسعودية والخليج.",
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
    whatsappBubble: "مرحباً، أحتاج مطور سلة في دبي لمتجري. هل يمكنكم المساعدة؟",
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
              Salla projects in Dubai & UAE, start to finish.
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
              We help Dubai and UAE brands turn strategy into Salla storefronts that look premium, feel
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
                FAQ: Salla developer Dubai, store development UAE, redesign & support
                Arabia, and the wider GCC.
              </p>
            </div>
            <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              Salla developer Dubai · Salla store development UAE · Salla support
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

