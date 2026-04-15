import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShieldCheck, Star, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import kjbImg from "../../assets/images/kjb/kjb.jpeg";
import balpImg from "../../assets/images/balp/balp.jpeg";
import kjbRulesImg from "../../assets/images/kjb/aturanKjb.png";
import balpRulesImg from "../../assets/images/balp/aturanBalp.png";
import balpRewardsImg from "../../assets/images/balp/hadiahBalp.png";
import balpRewardsImg2 from "../../assets/images/balp/hadiah1.png";
import contactImg from "../../assets/images/kontakKjb.png";

import heroDesktop from "../../assets/images/web-banner/web-banner-desktop-program.png";
import heroMobile from "../../assets/images/web-banner/web-banner-mobile-program.png";

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

export default function ProgramPage() {
  const [modal, setModal] = useState<null | string>(null);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const rewardImages = Array(9).fill(balpRewardsImg2);

  const { t } = useTranslation("program");

const programs = [
  {
    key: "kjb",
    image: kjbImg,
    actions: ["rules", "contact"],
    icon: <ShieldCheck size={18} />,
  },
  {
    key: "balp",
    image: balpImg,
    actions: ["rewards", "rules"],
    icon: <Star size={18} />,
  },
];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative h-[35vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-(--primary)">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 opacity-40"
        >
          <img src={heroDesktop} className="w-full h-full object-cover hidden md:block" />
          <img src={heroMobile} className="w-full h-full object-cover block md:hidden" />
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
            {t("program.hero.subtitle")}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black text-white tracking-tight"
          >
            {t("program.hero.title1")} <br /> <span className="text-[#F6EB61]"> {t("program.hero.title2")}</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-12"
        >

          {/* INTRO */}
          <motion.div variants={fadeUp} className="max-w-3xl">


            <h2 className="text-3xl md:text-4xl font-black uppercase leading-9 tracking-tighter text-(--primary)">
              {t("program.section.title")}
            </h2>

            <div className="w-12 h-1 bg-[#F6EB61] mt-4 mb-6"></div>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {t("program.section.desc")}
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* IMAGE */}
                <div
                  onClick={() => setModal(item.key)}
                  className="relative w-full bg-gray-50 cursor-pointer"
                >
                  <img
                    src={item.image}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* HEADER */}
                <div className="p-5 border-t border-gray-50 flex items-center gap-3">
                  <div className="text-(--primary)">
                    {item.icon}
                  </div>
                  <h2 className="font-bold text-gray-800 uppercase tracking-wide text-sm">
                    {t(`program.items.${item.key}.name`)}
                  </h2>
                </div>

                {/* DESC */}
                <div className="px-5 pb-5">
                  <p className="text-gray-500 text-sm">
                   {t(`program.items.${item.key}.desc`)}
                  </p>
                </div>

                {/* BUTTON */}
                <div className="px-5 pb-5 flex gap-2">
     {item.actions.map((action, idx) => (
  <button
    key={idx}
     onClick={() => setModal(`${item.key}-${action}`)}
    className={`flex-1 text-xs py-3 rounded-lg font-bold ${
      idx === 1
        ? "bg-[#F6EB61] text-black"
        : "border border-gray-200 text-gray-700"
    }`}
  >
    {t(`program.actions.${action}`)}
  </button>
))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black overflow-y-auto">

          <button
            onClick={() => setModal(null)}
            className="fixed top-6 right-6 text-white z-50"
          >
            <X size={28} />
          </button>

          <div className="w-full flex justify-center">
            <div className="w-full md:max-w-3xl bg-black">

              {modal === "kjb" && <img src={kjbImg} className="w-full h-auto" />}
              {modal === "balp" && <img src={balpImg} className="w-full h-auto" />}
              {modal === "kjb-rules" && <img src={kjbRulesImg} className="w-full h-auto" />}
              {modal === "balp-rules" && <img src={balpRulesImg} className="w-full h-auto" />}

              {modal === "balp-rewards" && (
                <div className="flex flex-col">
                  <img src={balpRewardsImg} className="w-full h-auto" />

                  <div className="bg-white p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {rewardImages.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => setViewerIndex(i)}
                          className="cursor-pointer"
                        >
                          <img src={img} className="w-full h-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {modal === "kjb-contact" && <img src={contactImg} className="w-full h-auto" />}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}