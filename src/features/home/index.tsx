import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scheduleService } from "@/services/schedule.service";
import { ScheduleSlot } from "@/types/schedule";
import { getUpcomingSlot } from "@/utils/getUpcoming";
import { SlotCard } from "@/components/schedule/SlotCard";
import heroImage from "../../assets/images/hero/hero3.JPG";
import heroLogo from "../../assets/images/logo/logo-3.png";

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
      <section className="relative min-h-[91.5vh] flex items-center bg-[#1a1a1a] overflow-hidden">
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
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 items-center gap-12">
          {/* LOGO — MOBILE FIRST */}
          <div className="flex justify-center lg:hidden mb-10">
            <img
              src={heroLogo}
              alt="Borneo Anfield Logo"
              className="w-40 sm:w-52 object-contain logo-entrance drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Label */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {/* Hidden line on mobile */}
              <div className="hidden lg:block h-0.5 w-12 bg-(--secondary)"></div>

              <span className="text-(--secondary) font-bold text-[11px] uppercase tracking-[0.3em]">
                Kalimantan's Finest Stadium
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-xl lg:text-8xl font-black text-white uppercase leading-[0.9] mb-10">
              BORNEO <br />
              ANFIELD <br />
              <span className="text-(--secondary)  font-weight">STADIUM</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 font-light max-w-lg leading-relaxed mb-10 mx-auto lg:mx-0 border-l-0 lg:border-l border-white/30 lg:pl-6">
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
      </section>

      {/* 2️⃣ ABOUT PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 bg-gray-200 rounded-xl" />
          <div>
            <h2 className="text-3xl font-bold">
              Stadion yang Dibangun untuk Struktur
            </h2>
            <p className="mt-6 opacity-70 leading-relaxed">
              Borneo Anfield bukan sekadar lapangan. Ini adalah sistem. Dengan
              jadwal transparan, fasilitas premium, dan ekosistem komunitas yang
              aktif.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-[#00C5C8] font-semibold"
            >
              Explore About →
            </Link>
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
