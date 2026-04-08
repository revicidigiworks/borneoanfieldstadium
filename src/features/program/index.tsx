import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShieldCheck, Star, X } from "lucide-react";
import { useState } from "react";

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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


export default function ProgramPage() {
  const [modal, setModal] = useState<null | string>(null);

  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

const rewardImages = [
  balpRewardsImg2,
  balpRewardsImg2,
  balpRewardsImg2,
  balpRewardsImg2,
  balpRewardsImg2,
  balpRewardsImg2,
  balpRewardsImg2,
  balpRewardsImg2,
  balpRewardsImg2,
];

  const programs = [
    {
      name: "KJB",
      desc: "Kartu Jaminan Booking",
      image: kjbImg,
      actions: [
        { label: "Aturan", action: "kjb-rules" },
        { label: "Kontak", action: "contact" },
      ],
      icon: <ShieldCheck size={20} />,
    },
    {
      name: "BALP",
      desc: "Loyalty Program",
      image: balpImg,
      actions: [
        { label: "Hadiah", action: "balp-rewards" },
        { label: "Aturan", action: "balp-rules" },
      ],
      icon: <Star size={20} />,
    },
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">

      {/* HERO */}
{/* HERO (IMAGE VERSION) */}
<section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
  
  {/* IMAGE MOBILE */}
  <img
    src={heroMobile}
    className="absolute inset-0 w-full h-full object-cover block md:hidden"
  />

  {/* IMAGE DESKTOP */}
  <img
    src={heroDesktop}
    className="absolute inset-0 w-full h-full object-cover hidden md:block"
  />

  {/* TEXT */}
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="relative z-10 text-center px-6"
  >
    <motion.span
      variants={fadeUp}
      className="text-white/70 tracking-[0.3em] uppercase text-xs md:text-sm block mb-3"
    >
      Exclusive Access
    </motion.span>

    <motion.h1
      variants={fadeUp}
      className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
    >
      BORNEO ANFIELD<br />
      <span className="text-[#F6EB61] italic">
        OFFICIAL PROGRAM  
      </span>
    </motion.h1>

    <motion.div
      variants={fadeUp}
      className="w-20 h-1 bg-[#F6EB61] mx-auto mt-6 rounded-full"
    />
  </motion.div>
</section>
      {/* CONTENT */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* INTRO */}
          <motion.div variants={fadeUp} className="max-w-4xl">
            <span className="text-xs font-bold tracking-widest text-(--primary)/60 uppercase mb-3 block">
              Built For Players
            </span>

            <h2 className="text-3xl md:text-6xl font-black text-(--primary) uppercase leading-none mb-6">
              Main Tanpa Ribet <br />
              <span className="italic font-extralight">
                Semua Sudah Diatur
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl border-l-2 border-[#F6EB61] pl-6">
              Kami tahu masalah pemain: booking bentrok, slot hilang, sistem tidak jelas.
              Program ini dibuat untuk kasih kepastian, prioritas, dan benefit nyata.
            </p>
          </motion.div>

          {/* GRID */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group border border-gray-100 rounded-2xl overflow-hidden flex flex-col bg-white hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div
                  onClick={() => setModal(item.name.toLowerCase())}
                  className="relative aspect-4/5 cursor-pointer bg-gray-50 flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-(--primary)">
                    {item.icon}
                    <h2 className="font-bold uppercase">{item.name}</h2>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {item.desc}
                  </p>
                </div>

                {/* BUTTON */}
                <div className="p-6 pt-0 flex gap-2">
                  {item.actions.map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModal(btn.action)}
                      className={`flex-1 text-xs py-3 rounded-lg font-bold ${
                        idx === 1
                          ? "bg-(--secondary) text-black"
                          : "border border-gray-200"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black overflow-y-auto">

          {/* CLOSE */}
          <button
            onClick={() => setModal(null)}
            className="fixed top-6 right-6 text-white z-50"
          >
            <X size={28} />
          </button>

          {/* WRAPPER (fix desktop biar gak kegedean) */}
          <div className="w-full flex justify-center">
            <div className="w-full md:max-w-3xl bg-black">

              {modal === "kjb" && (
                <img src={kjbImg} className="w-full h-auto" />
              )}

              {modal === "balp" && (
                <img src={balpImg} className="w-full h-auto" />
              )}

              {modal === "kjb-rules" && (
                <img src={kjbRulesImg} className="w-full h-auto" />
              )}

              {modal === "balp-rules" && (
                <img src={balpRulesImg} className="w-full h-auto" />
              )}

{modal === "balp-rewards" && (
  <div className="flex flex-col">

    {/* HEADER IMAGE */}
    <img src={balpRewardsImg} className="w-full h-auto" />

    {/* GRID 3x3 */}
<div className="bg-white p-4">
  <div className="grid grid-cols-3 gap-2">
    {rewardImages.map((img, i) => (
      <div
        key={i}
        onClick={() => setViewerIndex(i)}
        className="cursor-pointer relative z-10"
      >
        <img
          src={img}
          className="w-full h-auto pointer-events-none"
        />
      </div>
    ))}
  </div>
</div>

  </div>
)}

              {modal === "contact" && (
                <img src={contactImg} className="w-full h-auto" />
              )}

            </div>
          </div>

        </div>
      )}

    </div>
  );
}