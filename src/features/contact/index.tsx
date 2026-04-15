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

export default function ContactPage() {
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
          <img
            src={heroDesktop}
            className="w-full h-full object-cover hidden md:block"
          />
          <img
            src={heroMobile}
            className="w-full h-full object-cover block md:hidden"
          />
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
            Informasi Kontak
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black text-white tracking-tight"
          >
            HUBUNGI <span className="text-[#F6EB61]">KAMI</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >

          {/* LOKASI + DESKRIPSI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* TEXT */}
            <motion.div variants={fadeUp} className="max-w-xl">
              <span className="text-xs font-bold tracking-widest text-(--primary)/60 uppercase mb-3 block">
                Lokasi Stadion
              </span>

              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tighter text-(--primary)">
                INFORMASI <br className="hidden md:block" /> LOKASI
              </h2>

              <div className="w-12 h-1 bg-[#F6EB61] mt-4 mb-6"></div>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Untuk reservasi, pengecekan jadwal, maupun pertanyaan lainnya,
                silakan hubungi admin melalui WhatsApp.
                Pastikan Anda melakukan konfirmasi terlebih dahulu sebelum datang ke lokasi.
              </p>

              {/* ALAMAT */}
              <div className="mt-8 flex items-start gap-4">
                <MapPin size={20} className="text-(--primary) mt-1" />
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
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7028127024505!2d116.86640857448286!3d-1.2614010355984069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14735c40b5471%3A0xe57985806c45c0ad!2sBORNEO%20ANFIELD%20STADIUM!5e1!3m2!1sen!2sid!4v1775619470581!5m2!1sen!2sid"
                  width="100%"
                  height="300"
                  loading="lazy"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/"
                target="_blank"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-(--primary)"
              >
                Buka di Google Maps <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* JAM OPERASIONAL */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-5 border-b border-gray-50 bg-gray-50/50 flex items-center gap-3">
                <Clock className="text-(--primary)" />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm">
                  Jam Operasional Admin
                </h3>
              </div>

              <div className="p-5">
                <p className="text-2xl font-black text-(--primary)">
                  08.00 – 23.00
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Buka setiap hari 24 Jam
                </p>
              </div>
            </motion.div>

            {/* WHATSAPP */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-5 border-b border-gray-50 bg-gray-50/50 flex items-center gap-3">
                <MessageCircle className="text-(--primary)" />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm">
                  Kontak WhatsApp
                </h3>
              </div>

              <div className="p-5">
                <p className="text-gray-500 text-sm mb-5">
                  Hubungi admin untuk reservasi lapangan atau pertanyaan lainnya.
                </p>

                <a
                  href="https://wa.me/6282121211892"
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#F6EB61] text-black w-full py-3 rounded-lg hover:bg-neutral-900 hover:text-white transition"
                >
                  Hubungi Sekarang
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </section>
    </div>
  );
}