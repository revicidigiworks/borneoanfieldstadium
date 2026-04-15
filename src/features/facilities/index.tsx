import {
  Coffee,
  Landmark,
  ShowerHead,
  Shirt,
  BatteryCharging,
  ParkingCircle,
  Maximize2,
  Layers,
  Activity,
  Navigation,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import facilitiesHero from "../../assets/images/web-banner/web-banner-mobile-fasilitas.png";
import lockerImg from "../../assets/images/gallery/lokerRoom.jpeg";
import showerImg from "../../assets/images/fasilitas/showerRoom.webp";
import mushollaImg from "../../assets/images/fasilitas/Musholla.webp";
import cafeImg from "../../assets/images/fasilitas/warkops2.webp";
import parkingImg from "../../assets/images/fasilitas/parking.jpeg";
import freeCharging from "../../assets/images/fasilitas/freeCharging.webp";

/* ===== ANIMATION CONFIG (GLOBAL, NON-DESTRUCTIVE) ===== */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function FacilitiesPage() {

  const { t } = useTranslation("facilities");
  return (

    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-(--primary)">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 opacity-40"
        >
          <img
            src={facilitiesHero}
            alt="Stadium Facilities"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute"></div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-white/80 font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-5 block"
          >
            {t("facilities.hero.subtitle")}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] md:leading-[1.15] py-4 "
          >
            {t("facilities.hero.title1")}<br /> <span className="text-[#F6EB61]">{t("facilities.hero.title2")}</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* 2. TECHNICAL SPECIFICATIONS */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-12 items-start"
        >
          <motion.div variants={fadeUp} className="md:col-span-1 text-left">
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tighter text-(--primary)">
              {t("facilities.spec.title1")} <br className="hidden md:block" /> {t("facilities.spec.title2")}
            </h2>
            <div className="w-12 h-1 bg-[#F6EB61] mt-4"></div>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              {t("facilities.spec.desc")}
            </p>
          </motion.div>

          <div className="md:col-span-2">
            <div className="border-t border-gray-100">
              {[
                {
                  label: t("facilities.spec.field"),
                  value: t("facilities.spec.fieldValue"),
                  icon: <Maximize2 size={18} />,
                },
                {
                  label: t("facilities.spec.turf"),
                  value: t("facilities.spec.turfValue"),
                  icon: <Layers size={18} />,
                },
                {
                  label: t("facilities.spec.safety"),
                  value: t("facilities.spec.safetyValue"),
                  icon: <Activity size={18} />,
                },
                {
                  label: t("facilities.spec.drainage"),
                  value: t("facilities.spec.drainageValue"),
                  icon: <Navigation size={18} />,
                },
              ].map((spec, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-5 md:py-6 border-b border-gray-100 group hover:bg-gray-50 transition-colors px-4 gap-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 group-hover:text-(--primary)">
                      {spec.icon}
                    </span>
                    <span className="font-bold uppercase tracking-wider text-xs md:text-sm text-gray-800">
                      {spec.label}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs md:text-sm font-medium sm:text-right">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PREMIUM INTERIOR */}
      <section className="py-16 md:py-24 bg-(--surface)">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
          >
            <div className="w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-black text-(--primary) uppercase tracking-tight text-left">
                {t("facilities.interior.title")}
              </h2>
              <div className="w-12 h-1 bg-[#F6EB61] mt-4"></div>
            </div>
            <p className="text-gray-500 max-w-md text-sm text-left md:text-right italic">
              "{t("facilities.interior.quote")}"
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[300px]"
          >
            {/* 1. Changing Room */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-none md:rounded-2xl"
            >
              <img
                src={lockerImg}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Locker"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <Shirt className="text-[#F6EB61] mb-3" size={32} />
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide leading-tight">
                  {t("facilities.locker.title")}
                </h3>
                <p className="text-white/70 text-xs md:text-sm mt-2">
                  {t("facilities.locker.desc")}
                </p>
              </div>
            </motion.div>

            {/* 2. Shower */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 group relative overflow-hidden rounded-none md:rounded-2xl"
            >
              <img
                src={showerImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Shower"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <ShowerHead className="text-[#F6EB61] mb-2" size={30} />
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide leading-tight">
                  {t("facilities.shower.title")}
                </h3>
                <p className="text-white/70 text-xs mt-1 md:mt-2">
                  {t("facilities.shower.desc")}
                </p>
              </div>
            </motion.div>

            {/* 3. Musholla */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-1 group relative overflow-hidden rounded-none md:rounded-2xl text-left"
            >
              <img
                src={mushollaImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Musholla"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <Landmark className="text-[#F6EB61] mb-2" size={24} />
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide leading-tight">
                  {t("facilities.musholla.title")}
                </h3>
                <p className="text-white/70 text-xs mt-1">
                  {t("facilities.musholla.desc")}
                </p>
              </div>
            </motion.div>

            {/* 4. Charging */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="md:col-span-1 group relative rounded-none md:rounded-2xl overflow-hidden flex flex-col justify-between p-6 md:p-8"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={freeCharging}
                alt="Free Charging Area"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY (biar teks kebaca) */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <BatteryCharging className="text-[#F6EB61]" size={40} />

                <div>
                  <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide leading-tight">
                    {t("facilities.charging.title")}
                  </h3>
                  <p className="text-white/70 text-xs mt-2 ">
                    {t("facilities.charging.desc")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 5. Parking */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 group relative overflow-hidden rounded-none md:rounded-2xl"
            >
              <img
                src={parkingImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Parking Area"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <ParkingCircle className="text-[#F6EB61] mb-2" size={30} />
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide leading-tight">
                  {t("facilities.parking.title")}
                </h3>
                <p className="text-white/70 text-xs mt-1 md:mt-2">
                  {t("facilities.parking.desc")}
                </p>
              </div>
            </motion.div>

            {/* 6. Warkops */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 group relative overflow-hidden rounded-none md:rounded-2xl"
            >
              <img
                src={cafeImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Warkops Cafe"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <Coffee className="text-[#F6EB61] mb-2" size={30} />
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide leading-tight">
                  {t("facilities.cafe.title")}
                </h3>
                <p className="text-white/70 text-xs mt-1 md:mt-2">
                  {t("facilities.cafe.desc")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
