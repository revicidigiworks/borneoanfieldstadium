import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

import sewaSepatu from "../../assets/images/services/sepatu.png";
import heroDesktop from "../../assets/images/web-banner/web-banner-cs.png";
import heroMobile from "../../assets/images/web-banner/web-banner-cs2.png";

const services = [
  {
    name: "Sewa Sepatu",
    image: {sewaSepatu},
    wa: "https://wa.me/628xxxxxxxxxx",
  },
  {
    name: "Sewa Rompi & Jersey",
    image: "https://images.unsplash.com/photo-1517466788204-8302f37c37ba?q=80&w=1000&auto=format&fit=crop",
    wa: "https://wa.me/628xxxxxxxxxx",
  },
  {
    name: "Wasit Profesional",
    image: "https://images.unsplash.com/photo-1519861531157-ea53805f5025?q=80&w=1000&auto=format&fit=crop",
    wa: "https://wa.me/628xxxxxxxxxx",
  },
  {
    name: "Live YouTube Streaming",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    wa: "https://wa.me/628xxxxxxxxxx",
  },
  {
    name: "Fotografer",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    wa: "https://wa.me/628xxxxxxxxxx",
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
  return (
    <div className="flex flex-col bg-white overflow-hidden">

      {/* 1. HERO SECTION (Premium Dark & Gold Contrast) */}
      <section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-neutral-950 via-(--primary) to-neutral-950">
        {/* Decorative Grid Patterns */}
<img
  src={heroDesktop}
  className="absolute inset-0 w-full h-full object-cover hidden md:block"
/>

<img
  src={heroMobile}
  className="absolute inset-0 w-full h-full object-cover block md:hidden"
/>
        
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles size={16} className="text-[#F6EB61]" />
            <span className="text-white/70 font-bold tracking-[0.3em] uppercase text-xs md:text-sm block">
              Extra Support
            </span>
            <Sparkles size={16} className="text-[#F6EB61]" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter leading-none"
          >
            COMMERCIAL <span className="text-[#F6EB61] italic">SERVICES</span>
          </motion.h1>
          
          <motion.div 
            variants={fadeUp}
            className="w-20 h-1 bg-[#F6EB61] mx-auto mt-6 rounded-full"
          />
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
              Experience the Game
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-(--primary) uppercase tracking-tighter leading-none mb-6">
              Elevate Your <span className="italic font-extralight">Match</span> Experience
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-3xl border-l-2 border-[#F6EB61] pl-6">
              Borneo Anfield Stadium bukan sekadar arena tanding biasa. Kami menghadirkan ekosistem olahraga modern yang lengkap guna mendukung penuh gairah pertandingan Anda. Mulai dari dokumentasi visual kelas pro, perangkat tanding, hingga official berlisensi, semua kami siapkan demi menyajikan atmosfer pertandingan layaknya liga profesional sesungguhnya.
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
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-50">
                    <img
                      src={sewaSepatu}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Shadow overlay at bottom of the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6 md:p-8">
                    <h2 className="text-lg md:text-xl font-bold uppercase text-(--primary) tracking-tight leading-tight group-hover:text-black transition-colors">
                      {service.name}
                    </h2>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto">
                  <div className="pt-5 border-t border-gray-50">
                    <a
                      href={service.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-(--secondary) text-black w-full py-4 rounded-xl hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm group-hover:shadow"
                    >
                      Booking Layanan Ini
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
      <section className="py-20 md:py-24 bg-neutral-50 border-t border-gray-100 relative overflow-hidden">
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
                Layanan <br className="hidden md:block" /> Tambahan
              </h2>
              <div className="w-12 h-1 bg-[#F6EB61] mt-1 rounded-full"></div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                Daftar harga di atas merupakan acuan standar untuk setiap pertandingan di Borneo Anfield Stadium. 
                Pastikan Anda telah memeriksa ketersediaan slot bersama admin kami secara berkala. 
                Untuk menjamin kelancaran jalannya ekosistem tanding, harap lakukan pemesanan layanan minimal <span className="font-bold text-gray-800">H-2</span> sebelum jadwal pertandingan Anda dimulai.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}