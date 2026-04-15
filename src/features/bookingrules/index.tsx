import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FileText, MessageCircle, Info, ShieldAlert, CloudRain, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";

import i18n from "@/i18n";


import heroImg from "../../assets/images/web-banner/web-banner-mobile-fasilitas.png";

/* ===== ANIMATION ===== */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function BookingRulesPage() {
  const { t, i18n } = useTranslation("bookingrules");

const currentLang = i18n.resolvedLanguage || "id";

type RuleGroup = {
  title: string;
  items: string[];
};

const ruleGroups = (i18n.getResource(
  currentLang,
  "bookingrules",
  "groups"
) || []) as RuleGroup[];

const icons = [
  <MessageCircle className="w-5 h-5" />,
  <CreditCard className="w-5 h-5" />,
  <ShieldAlert className="w-5 h-5" />,
  <CloudRain className="w-5 h-5" />
];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[35vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-(--primary)">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 opacity-40"
        >
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-white/80 font-semibold tracking-[0.3em] uppercase text-xs mb-3 block"
          >
            Terms & Conditions
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black text-white tracking-tight"
          >
            BOOKING <span className="text-[#F6EB61]">RULES</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 md:px-6">
        {/* DISCLAMER BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 bg-blue-50 border-l-4 border-(--primary) p-5 rounded-r-xl flex gap-4"
        >
          <Info className="text-(--primary) shrink-0" />
          <p className="text-sm text-blue-900 leading-relaxed">
            {t("disclaimer")}
          </p>
        </motion.div>

        {/* RULES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
{ruleGroups.map((group, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
  >
    <div className="p-5 border-b border-gray-50 bg-gray-50/50 flex items-center gap-3">
      <div className="p-2 bg-white rounded-lg text-(--primary) shadow-sm">
        {icons[idx]}
      </div>
      <h2 className="font-bold text-gray-800 uppercase tracking-wide text-sm">
        {group.title}
      </h2>
    </div>
    
    <div className="p-5 space-y-4">
      {group.items.map((item, i) => (
        <div key={i} className="flex gap-4 group">
          <span className="text-xs font-bold text-gray-300 group-hover:text-(--primary) transition-colors mt-1">
            {(i + 1).toString().padStart(2, '0')}
          </span>
          <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-2 bg-gray-100 rounded-full text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-widest">
            ⚠️ Management Borneo Anfield Stadium
          </div>
        </motion.div>
      </section>
    </div>
  );
}