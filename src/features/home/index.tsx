import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scheduleService } from "@/services/schedule.service";
import { ScheduleSlot } from "@/types/schedule";
import { getUpcomingSlot } from "@/utils/getUpcoming";
import { SlotCard } from "@/components/schedule/SlotCard";
import hero from "../../assets/images/hero/hero2.png";

export default function HomePage() {
  const [slots, setSlots] = useState<ScheduleSlot[]>([]);
  const [upcoming, setUpcoming] = useState<ScheduleSlot | undefined>();

  useEffect(() => {
    async function load() {
      const data = await scheduleService.getAll();

      console.log("SLOTS:", data);

      setSlots(data);
      setUpcoming(getUpcomingSlot(data));
    }

    load();
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const previewSlots = slots.filter((s) => s.date === today);

  return (
    <div className="flex flex-col">
      {/* 1️⃣ HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Light Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-3xl">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              BORNEO ANFIELD
              <span className="block text-[#00C5C8]">STADIUM</span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Keeping The Game Beautiful — Demi Hobi Bukan Gengsi
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/schedule"
                className="bg-[#00C5C8] text-black px-8 py-4 font-semibold text-center rounded-xl hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                View Schedule
              </Link>

              <a
                href="https://wa.me/6282121211892"
                target="_blank"
                className="border border-white/80 px-8 py-4 font-semibold text-center rounded-xl hover:bg-white hover:text-black transition duration-300"
              >
                Book Now
              </a>
            </div>

            {/* Upcoming Match */}
            {upcoming && (
              <div className="mt-14 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl max-w-md shadow-xl">
                <p className="text-xs uppercase tracking-wider opacity-70 mb-2">
                  Upcoming Match
                </p>

                <p className="font-semibold text-lg">
                  {upcoming.eventType || "Match"}
                </p>

                <p className="text-sm mt-2 opacity-80">
                  Field {upcoming.field} — {upcoming.start}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white opacity-80 animate-bounce">
          <div className="w-[2px] h-10 bg-white/70 mb-2"></div>
          <span className="text-xs tracking-widest">SCROLL</span>
        </div>
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
