import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

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

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center">
        <img
          src={heroMobile}
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
        />
        <img
          src={heroDesktop}
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-white/80 tracking-[0.3em] uppercase text-xs md:text-sm block mb-3"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight"
          >
            CONTACT <br />
            <span className="text-[#F6EB61] italic">BORNEO ANFIELD</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="w-16 h-1 bg-[#F6EB61] mx-auto mt-6"
          />
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-20"
        >

          {/* LOCATION + STORY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* TEXT */}
            <motion.div variants={fadeUp} className="max-w-xl">
              <span className="text-xs font-bold tracking-widest text-(--primary)/60 uppercase mb-3 block">
                Stadium Location
              </span>

              <h2 className="text-3xl md:text-6xl font-black text-(--primary) uppercase leading-none mb-6">
                Datang Langsung <br />
                <span className="italic font-extralight">
                  Rasakan Atmosfernya
                </span>
              </h2>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed border-l-2 border-[#F6EB61] pl-6">
                Untuk informasi ketersediaan lapangan, reservasi, maupun
                pertanyaan lainnya, tim kami siap membantu Anda setiap hari.
                Kami memastikan setiap proses berjalan dengan jelas, cepat,
                dan tanpa kendala.
              </p>

              {/* LOCATION */}
              <div className="mt-10 flex items-start gap-4">
                <MapPin size={22} className="text-(--primary) mt-1" />
                <div>
                  <p className="font-bold text-(--primary)">
                    Borneo Anfield Stadium
                  </p>
                  <p className="text-sm text-gray-500">
                    Unnamed Road, Damai, Kecamatan Balikpapan Selatan,
                    Kota Balikpapan, Kalimantan Timur 76114
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div variants={fadeUp}>
              <div className="rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7028127024505!2d116.86640857448286!3d-1.2614010355984069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14735c40b5471%3A0xe57985806c45c0ad!2sBORNEO%20ANFIELD%20STADIUM!5e1!3m2!1sen!2sid!4v1775619470581!5m2!1sen!2sid"
                  width="100%"
                  height="350"
                  loading="lazy"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/"
                target="_blank"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-(--primary)"
              >
                Open in Maps <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* JAM OPERASIONAL */}
            <motion.div
              variants={fadeUp}
              className="p-8 border border-gray-100 rounded-2xl"
            >
              <Clock size={28} className="text-(--primary)" />

              <h3 className="mt-4 font-black uppercase text-xl">
                Jam Operasional
              </h3>

              <p className="text-4xl font-black mt-3 text-(--primary)">
                08.00 – 23.00
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Buka setiap hari (WITA)
              </p>
            </motion.div>

            {/* WHATSAPP */}
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-(--primary) text-white"
            >
              <MessageCircle size={28} className="text-[#F6EB61]" />

              <h3 className="mt-4 font-black uppercase text-xl">
                WhatsApp Admin
              </h3>

              <p className="text-white/70 text-sm mt-2 mb-6">
                Hubungi kami untuk reservasi lapangan atau informasi program secara langsung.
              </p>

              <a
                href="https://wa.me/6282121211892"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[#F6EB61] text-black py-4 rounded-xl font-bold text-sm uppercase"
              >
                Hubungi via WhatsApp <ArrowRight size={16} />
              </a>
            </motion.div>

          </div>

        </motion.div>
      </section>
    </div>
  );
}