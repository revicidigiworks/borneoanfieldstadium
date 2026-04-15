import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import sewaSepatu from "../../assets/images/services/sepatu.png";
import sewaRompi from "../../assets/images/services/rompi.jpg";
import sewaJersey from "../../assets/images/services/jersey.jpg";
import sewaWasit from "../../assets/images/services/wasit.jpg";
import sewaFotographer from "../../assets/images/services/foto.jpg";
import sewaLive from "../../assets/images/services/youtube.jpg";
import heroDesktop from "../../assets/images/web-banner/web-banner-cs.png";
import heroMobile from "../../assets/images/web-banner/web-banner-cs2.png";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "shoe",
    image: sewaSepatu,
    wa: "https://wa.me/6282121211892",
  },
  {
    key: "vest",
    image: sewaRompi,
    wa: "https://wa.me/6282121211892",
  },
  {
    key: "jersey",
    image: sewaJersey,
    wa: "https://wa.me/6282121211892",
  },
  {
    key: "referee",
    image: sewaWasit,
    wa: "https://wa.me/6282121211892",
  },
  {
    key: "live",
    image: sewaLive,
    wa: "https://wa.me/6282121211892",
  },
  {
    key: "photo",
    image: sewaFotographer,
    wa: "https://wa.me/6282121211892",
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for smoother feel
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

export default function ServicesPage() {

  const { t } = useTranslation("services");
  return (
    <div className="flex flex-col bg-white overflow-hidden">

      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-(--primary)">
        {/* IMAGE BG */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 opacity-40"
        >
          <img
            src={heroDesktop}
            className="w-full h-full object-cover hidden md:block"
          />
          <img
            src={heroMobile}
            className="w-full h-full object-cover block md:hidden"
          />
        </motion.div>

        {/* CONTENT */}
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
            {t("services.hero.subtitle")}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] py-4"
          >
            {t("services.hero.title1")} <br />
            <span className="text-[#F6EB61]">{t("services.hero.title2")}</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* 2. PRICELIST GRID & BRANDING INTRO */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 w-full relative">
        {/* Subtle background glow for section */}
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-[#F6EB61]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-40 left-0 -z-10 w-96 h-96 bg-(--primary)/5 blur-3xl rounded-full" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* ================= BRANDING INTRO SECTION ================= */}
          <motion.div variants={fadeUp} className="max-w-4xl">
            <span className="text-xs font-bold tracking-widest text-(--primary)/60 uppercase mb-3 block">
              {t("services.match.subtitle")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter text-(--primary)">
{t("services.match.title")}
            </h2>

            <div className="w-12 h-1 bg-[#F6EB61] mt-4 mb-6"></div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
              {t("services.match.desc")}
            </p>
          </motion.div>

          {/* GRID FOTO PRICELIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col justify-between bg-white hover:border-[#F6EB61]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 transform-gpu"
              >
                <div>
                  <div className="relative w-full overflow-hidden bg-gray-50">
                    <img
                      src={service.image}
                      alt={service.key}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Shadow overlay at bottom of the image */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6 md:p-8">
                    <h2 className="text-lg md:text-xl font-bold uppercase text-(--primary) tracking-tight leading-tight group-hover:text-black transition-colors">
                      <h2>
  {t(`services.items.${service.key}.name`)}
</h2>
                    </h2>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto">
                  <div className=" border-t border-gray-50">
                    <a
                      href={service.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-(--secondary) text-black w-full py-4 rounded-xl hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm group-hover:shadow"
                    >
                      {t("services.cta")}
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. ABOUT/DISCLAIMER (Sleek Clean Footer Card) */}
      <section className="py-20 md:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cube.png')]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 md:gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="md:col-span-1 text-left flex flex-col items-start gap-3">
              <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100 text-[#F6EB61]">
                <ShieldCheck size={24} className="fill-(--primary) stroke-(--primary)" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tighter text-(--primary)">
                {t("services.info.title")}
              </h2>

              <div className="w-12 h-1 bg-[#F6EB61] mt-4"></div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                "{t("services.info.desc")}"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}