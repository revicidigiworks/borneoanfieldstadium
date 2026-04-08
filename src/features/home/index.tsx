import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scheduleService } from "@/services/schedule.service";
import { ScheduleSlot } from "@/types/schedule";
import { getUpcomingSlot } from "@/utils/getUpcoming";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import Asset Image
import heroImage from "../../assets/images/gedung/hero3.webp";
import heroLogo from "../../assets/images/logo/logo-3.webp";
import aboutImage from "../../assets/images/gedung/gedung2.webp";
import lockerImg from "../../assets/images/fasilitas/ruangGanti.webp";
import showerImg from "../../assets/images/fasilitas/showerRoom.webp";
import cafeImg from "../../assets/images/fasilitas/warkops.webp";
import umumLogo from "../../assets/images/logo/ba-umum.png";
import u35Logo from "../../assets/images/logo/ba-u35.webp";
import juniorLogo from "../../assets/images/logo/ba-junior.webp";
import sparingLogo from "../../assets/images/logo/infoSparing.jpeg";
import sewaSepatu from "../../assets/images/services/sepatu.png";
import sewaRompi from "../../assets/images/services/rompi.jpg";
import sewaWasit from "../../assets/images/services/wasit.jpg";
import sewaFotographer from "../../assets/images/services/fotographer.jpg";
import sewaLive from "../../assets/images/services/youtube.jpg";

const services = [
  {
    name: "Sewa Sepatu",
    image: sewaSepatu,
    wa: "https://wa.me/6282121211892",
  },
  {
    name: "Sewa Rompi & Jersey",
    image: sewaRompi,
    wa: "https://wa.me/6282121211892",
  },
  {
    name: "Wasit Profesional",
    image: sewaWasit,
    wa: "https://wa.me/6282121211892",
  },
  {
    name: "Live YouTube Streaming",
    image: sewaLive,
    wa: "https://wa.me/6282121211892",
  },
  {
    name: "Fotografer",
    image: sewaFotographer,
    wa: "https://wa.me/6282121211892",
  }
];

// Import Asset Video
import heroDrone from "../../assets/video/heroDrone.mp4";

export default function HomePage() {
  const [slots, setSlots] = useState<ScheduleSlot[]>([]);
  const [upcoming, setUpcoming] = useState<ScheduleSlot | undefined>();

  useEffect(() => {
    async function load() {
      const data = await scheduleService.getAll();
      setSlots(data);
      setUpcoming(getUpcomingSlot(data));
    }
    load();
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const previewSlots = slots.filter((s) => s.date === today);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const ecosystemPreview = [
    {
      title: "BA FC UMUM",
      logo: umumLogo,
    },
    {
      title: "BA FC U35+",
      logo: u35Logo,
    },
    {
      title: "BA FC JUNIOR",
      logo: juniorLogo,
    },
    {
      title: "INFO SPARING",
      logo: sparingLogo,
    },
  ];


  return (
    <div className="flex flex-col">
      {/* 1 HERO */}
      <section className="relative min-h-[calc(100svh-80px)] md:min-h-[calc(100dvh-80px)] flex items-center justify-center bg-[#1a1a1a] overflow-hidden hero-spotlight pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">

        {/* Background */}
        <div className="absolute inset-0">

          {/* MOBILE VIDEO */}
          <video
            src={heroDrone}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 scale-105 block lg:hidden"
          />

          {/* DESKTOP IMAGE */}
          <img
            src={heroImage}
            alt="Borneo Anfield Stadium"
            className="w-full h-full object-cover opacity-50 hidden lg:block"
          />

          {/* Overlay */}
          <div className="absolute inset-0">

            {/* DESKTOP OVERLAY */}
            <div className="hidden lg:block absolute inset-0 bg-linear-to-r 
    from-(--primary)/95 
    via-(--primary)/50 
    to-black/40"
            />

            {/* MOBILE OVERLAY (clean, no green tint) */}
            <div className="lg:hidden absolute" />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/80 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 items-center gap-12 text-center lg:text-left">

          {/* LOGO — MOBILE */}
          <div className="flex justify-center lg:hidden mb-10">
            <img
              src={heroLogo}
              alt="Borneo Anfield Logo"
              className="w-50 sm:w-55 object-contain logo-entrance drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] logo-float"
            />
          </div>

          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">

            {/* Label */}
            <div className="hidden lg:flex items-center justify-start gap-4 mb-8">
              <div className="hidden lg:block h-0.5 w-12 bg-(--secondary)"></div>
              <span className="text-(--secondary) font-bold text-[11px] uppercase tracking-[0.3em]">
                Balikpapan’s #1 Minisoccer Stadium
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase leading-none mb-10">
              BORNEO <br />
              ANFIELD <br />
              <span className="text-(--secondary)">STADIUM</span>
            </h1>

            {/* Mobile Label */}
            <p className="lg:hidden text-(--secondary) text-sm uppercase tracking-[0.3em] mb-8">
              Balikpapan’s #1 <br /> Minisoccer Stadium
            </p>

            {/* Description */}
            <p className="hidden lg:block text-lg text-white/90 font-light max-w-lg leading-relaxed mb-10 border-l border-white/30 pl-6">
              The ultimate home for football enthusiasts. Experience
              professional-grade facilities, world-class atmosphere, and the
              spirit of the game.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start">
              <Link
                to="/schedule"
                className="px-6 py-3 border border-white text-white font-bold uppercase tracking-[0.12em] text-sm hover:bg-white hover:text-[#C8102E] transition-all duration-300 text-center"
              >
                View Schedule
              </Link>

              <a
                href="https://wa.me/6282121211892"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-(--secondary) text-(--dark) font-black uppercase tracking-[0.12em] text-sm hover:bg-white transition-all duration-300 text-center"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* RIGHT SIDE LOGO — DESKTOP */}
          <div className="hidden lg:flex justify-end order-1 lg:order-2">
            <img
              src={heroLogo}
              alt="Borneo Anfield Logo"
              className="w-90 xl:w-[320px] object-contain logo-entrance drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            />
          </div>
        </div>

        {/* Upcoming Match */}
        {upcoming && (
          <div className="absolute bottom-10 right-6 md:right-12 z-20 text-right hidden md:block">
            <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-2">
              Next Kickoff
            </p>

            <div className="text-white">
              <span className="font-bold uppercase text-sm tracking-widest">
                {upcoming.eventType}
              </span>

              <div className="text-white/60 text-xs mt-1">
                {upcoming.start}
              </div>
            </div>
          </div>
        )}

        <div className="light-sweep"></div>
      </section>

      {/* 2️⃣ ABOUT PREVIEW - MINIMALIST PROFESSIONAL */}
      <section className="py-10 lg:py-32 bg-(--surface) relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* IMAGE AREA - Clean with Border Radius Only */}
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Borneo Anfield Stadium"
                  className="w-full h-87.5 md:h-125 lg:h-150 object-cover rounded-4xl shadow-2xl shadow-black/5"
                />
                {/* Minimalist Location Tag */}
                <div className="absolute top-6 left-6 backdrop-blur-md bg-white/80 border border-gray-100 px-5 py-2.5 rounded-full shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-(--dark)">
                    Balikpapan, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* CONTENT AREA - Elegant Typography */}
            <div className="w-full lg:w-1/2 order-2 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-(--primary)"></span>
                <span className="text-(--primary) font-bold tracking-[0.4em] uppercase text-[10px]">
                  The Stadium
                </span>
              </div>

              {/* Judul dengan spacing yang sangat lega */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-(--dark) leading-[1.15]">
                Elevating the <br />
                <span className="text-(--primary)">Football</span> <br />
                <span className="mt-2 block">Experience.</span>
              </h2>

              <div className="mt-10 space-y-8">
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Borneo Anfield Stadium (BAS) mendefinisikan ulang standar
                  lapangan mini soccer di Kalimantan Timur. Terletak strategis
                  di Jl. AMD LIII, kami menghadirkan fasilitas kelas dunia untuk
                  komunitas lokal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-y border-gray-100">
                  <div className="space-y-2">
                    <h4 className="text-(--dark) font-black uppercase text-sm tracking-widest">
                      Premium Facility
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Dua lapangan 60x40m dengan rumput sintetis pilihan,
                      dirancang untuk performa maksimal format 9 vs 9.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-(--dark) font-black uppercase text-sm tracking-widest">
                      More Than a Pitch
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Lengkap dengan Kafe, area nobar eksklusif, dan layanan
                      penyewaan perlengkapan profesional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile: Full Width Button / Desktop: Auto Width */}
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
                <Link
                  to="/about"
                  className="w-full sm:w-auto px-12 py-5 bg-(--secondary) text-black font-bold uppercase text-[14px] tracking-[0.3em] rounded-full hover:bg-(--primary) transition-all duration-500 text-center"
                >
                  Discover More
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ FACILITIES PREVIEW */}
      <section className="py-10 md:py-24 bg-(--surface)">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-(--primary)">
                Facilities
              </h2>
              <div className="w-12 h-1 bg-[#F6EB61] mt-4"></div>
            </div>

            <p className="text-(--dark) text-sm max-w-md italic">
              Fasilitas premium untuk pengalaman bermain yang nyaman dan
              profesional.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative h-72 overflow-hidden"
            >
              <img
                src={lockerImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-white font-black text-xl uppercase">
                  Locker Room
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  Ruang ganti nyaman & aman untuk pemain.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative h-72 overflow-hidden "
            >
              <img
                src={showerImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-white font-black text-xl uppercase">
                  Shower Room
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  Air bersih & fasilitas bilas modern.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative h-72 overflow-hidden "
            >
              <img
                src={cafeImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-white font-black text-xl uppercase">
                  Warkops Café
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  Nongkrong santai sambil nonton match.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/facilities"
              className="group inline-flex items-center gap-2 text-(--primary) font-bold uppercase tracking-wider text-sm"
            >
              View All Facilities
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5️⃣ ECOSYSTEM PREVIEW */}
      <section className="py-10 md:py-20 bg-[#ffffff]">
        <div className="max-w-325 mx-auto px-6">

          {/* HEADER (MATCH PAGE STYLE) */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-3xl font-black uppercase text-(--primary)">
                Ecosystem
              </h2>
              <div className="w-12 h-1 bg-[#F6EB61] mt-3"></div>
            </div>

            <Link
              to="/ecosystem"
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--primary) hover:text-black transition"
            >
              Explore
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* LIST GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {ecosystemPreview.map((item, i) => (
              <Link
                to="/ecosystem"
                key={i}
                className="group flex items-center justify-between bg-white p-5 md:p-6 rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* TEXT */}
                <span className="text-sm md:text-base font-black uppercase tracking-wide text-gray-800">
                  {item.title}
                </span>

                {/* LOGO */}
                <div className="w-20 h-20 flex items-center justify-center bg-white border border-gray-100 overflow-hidden">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* MOBILE CTA */}
          <Link
            to="/ecosystem"
            className="flex md:hidden items-center justify-center mt-8 text-sm font-bold uppercase tracking-widest text-(--primary)"
          >
            Explore Ecosystem →
          </Link>

        </div>
      </section>


      {/* 6️⃣ SERVICES PREVIEW */}
      <section className="py-10 md:py-20 bg-[#ffffff]">
        <div className="max-w-325 mx-auto px-6">

          {/* HEADER (MATCH ECOSYSTEM) */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-3xl font-black uppercase text-(--primary)">
                Comercial <br />Services
              </h2>
              <div className="w-12 h-1 bg-[#F6EB61] mt-3"></div>
            </div>

            <Link
              to="/services"
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--primary) hover:text-black transition"
            >
              Explore
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* LIST GRID (SAMA PERSIS STRUCTURE NYA) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {services.slice(0, 4).map((service, i) => (
              <a
                href={service.wa}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="group flex items-center justify-between bg-white p-5 md:p-6 rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* TEXT */}
                <span className="text-sm md:text-base font-black uppercase tracking-wide text-gray-800">
                  {service.name}
                </span>

                {/* IMAGE (ganti logo → service image) */}
                <div className="w-20 h-20 flex items-center justify-center bg-white border border-gray-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* MOBILE CTA */}
          <Link
            to="/services"
            className="flex md:hidden items-center justify-center mt-8 text-sm font-bold uppercase tracking-widest text-(--primary)"
          >
            Explore Services →
          </Link>

        </div>
      </section>

{/* 7️⃣ FINAL CONVERSION SECTION */}
<section className="py-16 md:py-24 bg-white border-t border-gray-100">
  <div className="max-w-325 mx-auto px-6">

    {/* HEADER (MATCH SECTION LAIN) */}
    <div className="mb-10">
      <h2 className="text-3xl md:text-3xl font-black uppercase text-(--primary)">
        Booking
      </h2>
      <div className="w-12 h-1 bg-[#F6EB61] mt-3"></div>
    </div>

    {/* CONTENT */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      {/* TEXT */}
      <div className="max-w-xl">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900 leading-snug">
          Jadwal Terbuka & Transparan.
        </h3>

        <p className="text-gray-500 text-sm md:text-base mt-3 leading-relaxed">
          Cek slot pertandingan secara real-time dan lakukan booking tanpa proses ribet. 
          Semua sudah terintegrasi untuk pengalaman bermain yang lebih profesional.
        </p>
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/6282121211892?text=Saya%20ingin%20booking%20lapangan"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-widest bg-(--secondary) text-black rounded-xl hover:bg-neutral-900 hover:text-white transition-all duration-300"
      >
        Book Now
        <ArrowUpRight size={16} />
      </a>

    </div>

  </div>
</section>
    </div>
  );
}
