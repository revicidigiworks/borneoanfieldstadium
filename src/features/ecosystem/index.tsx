import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

import umumBg from "../../assets/images/logo/ba-umum.png";
import u35Bg from "../../assets/images/logo/ba-u35.webp";
import juniorBg from "../../assets/images/logo/ba-junior.webp";
import sparingBg from "../../assets/images/logo/infoSparing.jpeg";
import heroDesktop from "../../assets/images/web-banner/web-banner-ecosystem.png";
import heroMobile from "../../assets/images/web-banner/web-banner-ecosystem-mobile.png";

const groups = [
  {
    title: "BA FC UMUM",
    desc: "Komunitas utama pemain aktif berbagai level.",
    image: umumBg,
    wa: "https://chat.whatsapp.com/Gp2gerSzRyqEo9qG0ayooy?mode=gi_t",
  },
  {
    title: "BA FC U35+",
    desc: "Komunitas pemain senior 35+ dengan jadwal rutin.",
    image: u35Bg,
    wa: "https://chat.whatsapp.com/CpWG6p7MwbNJS4K7IckCpL?mode=gi_t",
  },
  {
    title: "BA FC JUNIOR",
    desc: "Pengembangan usia muda & akademi mini soccer.",
    image: juniorBg,
    wa: "https://chat.whatsapp.com/G3xCNDOT7FuF5yCklT1GZD?mode=gi_t",
  },
  {
    title: "INFO SPARING",
    desc: "Hubungkan tim untuk sparing & match friendly.",
    image: sparingBg,
    wa: "https://chat.whatsapp.com/LchEBx4llUN3qreq9MrQai?mode=gi_t",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function EcosystemPage() {
  return (
    <div className="flex flex-col bg-white">

      {/* HERO */}
<section className="relative h-[38vh] md:h-[50vh] flex items-center justify-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
<img
  src={heroMobile}
  className="absolute inset-0 w-full h-full object-cover block md:hidden"
/>

<img
  src={heroDesktop}
  className="absolute inset-0 w-full h-full object-cover hidden md:block"
/>

  {/* OVERLAY (biar teks kebaca) */}
  <div className="absolute inset-0 " />

  {/* TEXT */}
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="relative z-10 text-center px-6"
  >
    <motion.span
      variants={fadeUp}
      className="text-white/70 tracking-[0.25em] uppercase text-xs md:text-sm block mb-3"
    >
      Join the movement
    </motion.span>

    <motion.h1
      variants={fadeUp}
      className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
    >
      BORNEO ANFIELD <br /> STADIUM <span className="text-[#F6EB61]">ECOSYSTEM</span>
    </motion.h1>
  </motion.div>
</section>

<section className="py-12 md:py-16 border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-8 items-start"
    >

      {/* LEFT TITLE */}
      <motion.div variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight text-(--primary)">
          One Ecosystem
        </h2>
        <div className="w-12 h-1 bg-[#F6EB61] mt-4"></div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div variants={fadeUp} className="md:col-span-2">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Borneo Anfield Stadium menghubungkan seluruh aktivitas komunitas sepak bola dalam satu sistem.
          Dari pemain umum, senior, hingga pengembangan junior dan sparing partner — semua
          terstruktur dalam satu jaringan yang aktif dan berkembang.
        </p>

        {/* MINI POINTS */}
        <div className="flex flex-wrap gap-4 mt-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-(--primary)">
          <span>Community</span>
          <span>Structured</span>
          <span>Active</span>
          <span>Growth</span>
        </div>
      </motion.div>

    </motion.div>
  </div>
</section>

      {/* GRID */}
      <section className="py-14 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
        >
          {groups.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl h-[320px] md:h-[360px]"
            >
              {/* IMAGE (FIX: NO CROP) */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />

              {/* CONTENT (BOTTOM ONLY) */}
              <div className="relative z-10 h-full flex items-end p-5 md:p-8">
                <div className="w-full">

                  <h3 className="text-white text-lg md:text-2xl font-black uppercase italic leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-xs md:text-sm mt-2 leading-relaxed max-w-sm">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
                    <a
                      href={item.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#F6EB61] hover:text-white transition"
                    >
                      <MessageCircle size={16} />
                      Join WhatsApp
                    </a>

                    <div className="text-white/30 group-hover:text-[#F6EB61] transition transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}