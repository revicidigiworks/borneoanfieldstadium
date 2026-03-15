import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scheduleService } from "@/services/schedule.service";
import { ScheduleSlot } from "@/types/schedule";
import { getUpcomingSlot } from "@/utils/getUpcoming";
import { SlotCard } from "@/components/schedule/SlotCard";
import heroImage from "../../assets/images/hero/hero3.JPG";
import heroLogo from "../../assets/images/logo/logo-3.png";
import aboutImage from "../../assets/images/hero/gedung2.jpeg";

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

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[calc(100svh-80px)] md:min-h-[calc(100dvh-80px)] flex items-center justify-center bg-[#1a1a1a] overflow-hidden hero-spotlight pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Borneo Anfield Stadium"
            className="w-full h-full object-cover opacity-50"
          />

          <div
            className="absolute inset-0 bg-linear-to-r 
  from-(--primary)/95 
  via-(--primary)/50 
  to-black/40"
          >
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/80 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 items-center gap-12 text-center lg:text-left">
          {/* LOGO — MOBILE FIRST */}
          <div className="flex justify-center lg:hidden mb-10">
            <img
              src={heroLogo}
              alt="Borneo Anfield Logo"
              className="w-50 sm:w-55 object-contain logo-entrance drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] logo-float"
            />
          </div>

          {/* LEFT SIDE */}
          <div className=" order-2 lg:order-1">
            {/* Label */}
            <div className="hidden lg:flex items-center justify-start gap-4 mb-8">
              {/* Hidden line on mobile */}
              <div className="hidden lg:block h-0.5 w-12 bg-(--secondary)"></div>

              <span className="text-(--secondary) font-bold text-[11px] uppercase tracking-[0.3em]">
                Balikpapan’s #1 Minisoccer Stadium
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white uppercase leading-[0.9] mb-10">
              BORNEO <br />
              ANFIELD <br />
              <span className="text-(--secondary)  font-weight">STADIUM</span>
            </h1>
            <p className="lg:hidden text-(--secondary) text-sm uppercase tracking-[0.3em] mb-8">
              Balikpapan’s #1 Minisoccer Stadium
            </p>

            {/* Description */}
            <p className="hidden lg:block text-lg text-white/90 font-light max-w-lg leading-relaxed mb-10 border-l border-white/30 pl-6">
              The ultimate home for football enthusiasts. Experience
              professional-grade facilities, world-class atmosphere, and the
              spirit of the game.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link
                to="/schedule"
                className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#C8102E] transition-all duration-300 text-center"
              >
                View Schedule
              </Link>

              <Link
                to="/booking"
                className="px-8 py-4 bg-(--secondary) text-(--dark) font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 text-center"
              >
                Book Now
              </Link>
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

              <div className="text-white/60 text-xs mt-1">{upcoming.start}</div>
            </div>
          </div>
        )}
        <div className="light-sweep"></div>
      </section>

      {/* 2️⃣ ABOUT PREVIEW - MINIMALIST PROFESSIONAL */}
      <section className="py-20 lg:py-32 bg-(--surface) relative overflow-hidden">
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
                  className="w-full sm:w-auto px-12 py-5 bg-(--dark) text-white font-bold uppercase text-[11px] tracking-[0.3em] rounded-full hover:bg-(--primary) transition-all duration-500 text-center"
                >
                  Discover More
                </Link>

                <a
                  href="https://maps.google.com"
                  className="flex items-center gap-4 text-(--dark) font-black uppercase text-[10px] tracking-[0.2em] group"
                >
                  View on Maps
                  <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-(--primary) group-hover:text-white transition-all">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ FACILITIES PREVIEW */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Facilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="h-64 bg-gray-200 rounded-xl p-6 flex items-end font-semibold">
              Field A
            </div>
            <div className="h-64 bg-gray-200 rounded-xl p-6 flex items-end font-semibold">
              Field B
            </div>
            <div className="h-64 bg-gray-200 rounded-xl p-6 flex items-end font-semibold">
              Premium Interior
            </div>
          </div>

          <Link
            to="/facilities"
            className="inline-block mt-10 text-[#00C5C8] font-semibold"
          >
            View All Facilities →
          </Link>
        </div>
      </section>

      {/* 4️⃣ SCHEDULE PREVIEW (CORE BUSINESS) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Today’s Schedule</h2>

          {previewSlots.length ? (
            <div className="space-y-4">
              {previewSlots.map((slot) => (
                <SlotCard key={slot.id} slot={slot} />
              ))}
            </div>
          ) : (
            <p className="opacity-60">No schedule available today.</p>
          )}

          <Link
            to="/schedule"
            className="inline-block mt-8 text-[#00C5C8] font-semibold"
          >
            View Full Schedule →
          </Link>
        </div>
      </section>

      {/* 5️⃣ ECOSYSTEM PREVIEW */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Ecosystem</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "BA FC UMUM",
              "BA FC U35+",
              "BA FC JUNIOR",
              "Open Gate Nobar",
              "Cari Sparing",
              "Copa 9’s",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl border font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            to="/ecosystem"
            className="inline-block mt-10 text-[#00C5C8] font-semibold"
          >
            Explore Ecosystem →
          </Link>
        </div>
      </section>

      {/* 6️⃣ SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Commercial Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Sewa Sepatu",
              "Rompi & Jersey",
              "Wasit Profesional",
              "Live YouTube",
              "Fotografer",
            ].map((service) => (
              <div
                key={service}
                className="bg-[#F9F9F9] p-6 rounded-xl border font-semibold"
              >
                {service}
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-block mt-10 text-[#00C5C8] font-semibold"
          >
            View Services →
          </Link>
        </div>
      </section>

      {/* 7️⃣ FINAL CONVERSION SECTION */}
      <section className="py-24 bg-[#00C5C8] text-black text-center">
        <h2 className="text-4xl font-bold max-w-3xl mx-auto">
          Jadwal Terbuka. Slot Transparan. Booking Tanpa Ribet.
        </h2>

        <a
          href="#"
          className="inline-block mt-10 bg-black text-white px-8 py-4 font-semibold"
        >
          BOOK YOUR SLOT NOW
        </a>
      </section>
    </div>
  );
}
