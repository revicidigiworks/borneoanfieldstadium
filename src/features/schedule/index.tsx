import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scheduleService } from "@/services/schedule.service";
import { ScheduleSlot } from "@/types/schedule";
import { useTranslation } from "react-i18next";


// Banner Mobile
import bannerPhMobile from "../../assets/images/web-banner/banner-iklan-mobile-ph.webp";
import bannerBasMobile from "../../assets/images/web-banner/banner-iklan-mobile-bas.webp";
import bannerSalonMobile from "../../assets/images/web-banner/banner-iklan-mobile-salon.webp";
import bannerTravelMobile from "../../assets/images/web-banner/banner-iklan-mobile-travel.webp";
import bannerCodaMobile from "../../assets/images/web-banner/banner-iklan-mobile-coda.webp";
import bannerSlotIklanMobile from "../../assets/images/web-banner/web-banner-mobile-slotiklan.webp";

// Banner Desktop
import bannerBas from "../../assets/images/web-banner/bannerBas.webp";
import bannerSalon from "../../assets/images/web-banner/bannerSalon.webp";
import bannerPh from "../../assets/images/web-banner/banner-iklan.webp";
import bannerCoda from "../../assets/images/web-banner/bannerCoda.webp";
import bannerSlotIklan from "../../assets/images/web-banner/bannerSlotIklan.webp";

export default function SchedulePage() {

  type Status = "available" | "booked" | "ended" | "ongoing";
  const { t } = useTranslation("schedule");

  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);

  const banners = [
    {
      desktop: bannerBas,
      mobile: bannerBasMobile,
      link: "https://www.instagram.com/borneoanfieldstadium/",
    },
    {
      desktop: bannerPh,
      mobile: bannerPhMobile,
      link: "https://www.instagram.com/pickleballhouse.bpn/",
    },
    {
      desktop: bannerSalon,
      mobile: bannerSalonMobile,
      link: "https://www.instagram.com/salonaudrymuslimah.bpn/",
    },
    {
      mobile: bannerTravelMobile,
      link: "https://www.instagram.com/cintatravel.bpn/",
    },
    {
      desktop: bannerCoda,
      mobile: bannerCodaMobile,
      link: "https://www.courtdancer.com",
    },
    {
      desktop: bannerSlotIklan,
      mobile: bannerSlotIklanMobile,
      link: "https://wa.me/6282121211892",
    },
  ];

  const totalSlides = banners.length;

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000); // 5 detik

    return () => clearInterval(interval);
  }, [totalSlides]);

  // SWIPE FUNCTION
  const handleSwipe = (endX: number) => {
    const diff = startX - endX;

    if (diff > 50) {
      // swipe kiri
      setCurrent((prev) => (prev + 1) % totalSlides);
    } else if (diff < -50) {
      // swipe kanan
      setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const [slots, setSlots] = useState<ScheduleSlot[]>([]);
  const today = new Date().toLocaleDateString("en-CA");
  const [date, setDate] = useState(today);
  const isToday = date === today;
  const hasScrolled = useRef(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await scheduleService.getByDate(date);
        setSlots(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [date]);

  const navigate = useNavigate();

  // Generate 06:00 -> 05:00
  const times = [
    ...Array.from({ length: 18 }, (_, i) => i + 6),
    ...Array.from({ length: 6 }, (_, i) => i),
  ].map(
    (h) =>
      `${String(h).padStart(2, "0")}:00 - ${String((h + 1) % 24).padStart(
        2,
        "0"
      )}:00`
  );

  const getSlot = (time: string, field: "A" | "B") => {
    const start = time.split(" - ")[0];
    const [hour] = start.split(":").map(Number);

    let targetDate = new Date(date);

    // 🔥 kalau jam 00:00 - 05:00 → masuk ke hari berikutnya
    if (hour >= 0 && hour < 6) {
      targetDate.setDate(targetDate.getDate() + 1);
    }

    const formattedDate = targetDate.toISOString().split("T")[0];

    return slots.find(
      (s) =>
        s.start === start &&
        s.field === field &&
        s.date === formattedDate
    );
  };

  const statusTextStyle = (status: Status) => {
    switch (status) {
      case "available": return "text-emerald-600";
      case "booked": return "text-rose-600";
      case "ended": return "text-slate-400";
      case "ongoing": return "text-amber-600 ";
    }
  };

  const legends = [
    { label: t("legend_available"), color: "bg-emerald-500" },
    { label: t("legend_booked"), color: "bg-rose-500" },
    { label: t("legend_ended"), color: "bg-slate-300" },
    { label: t("legend_ongoing"), color: "bg-(--secondary)" },
  ];
  const liveEffect =
    "relative overflow-hidden animate-[glowSoft_2s_ease-in-out_infinite]";

  const getStatusByTime = (time: string): Status => {
    const [start, end] = time.split(" - ");

    const [sh] = start.split(":").map(Number);
    const [eh] = end.split(":").map(Number);

    const selectedDate = new Date(date);
    const now = new Date();

    // 🔥 kalau jam 00:00 - 05:00 → geser ke hari berikutnya
    if (sh >= 0 && sh < 6) {
      selectedDate.setDate(selectedDate.getDate() + 1);
    }

    const startTime = new Date(selectedDate);
    startTime.setHours(sh, 0, 0, 0);

    const endTime = new Date(selectedDate);
    endTime.setHours(eh, 0, 0, 0);

    // handle lewat tengah malam (tetap dipertahankan)
    if (eh < sh) {
      endTime.setDate(endTime.getDate() + 1);
    }

    // 🔥 compare pakai waktu yang sudah di-adjust
    if (selectedDate.toDateString() !== now.toDateString()) {
      return selectedDate < now ? "ended" : "available";
    }

    if (now >= startTime && now < endTime) return "ongoing";
    if (now > endTime) return "ended";

    return "available";
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isToday) {
      setActiveIndex(null);
      return;
    }

    const run = () => {
      const now = new Date();

      const index = times.findIndex((time) => {
        const [start, end] = time.split(" - ");

        const [sh] = start.split(":").map(Number);
        const [eh] = end.split(":").map(Number);

        const startTime = new Date(now);
        startTime.setHours(sh, 0, 0, 0);

        const endTime = new Date(now);
        endTime.setHours(eh, 0, 0, 0);

        if (eh < sh) endTime.setDate(endTime.getDate() + 1);

        return now >= startTime && now < endTime;
      });

      if (index !== -1) {
        setActiveIndex(index);

        if (!hasScrolled.current) {
          setTimeout(() => {
            rowRefs.current[index]?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 800);

          hasScrolled.current = true;
        }
      }
    };

    run(); // initial

    const interval = setInterval(run, 60000); // update tiap menit

    return () => clearInterval(interval);
  }, [date, isToday, times]);

  useEffect(() => {
    hasScrolled.current = false;
  }, [date]);
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* BANNER SLIDER PREMIUM */}
      <section className="relative z-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">

          <div className="overflow-hidden shadow-md">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onTouchStart={(e) => setStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => handleSwipe(e.changedTouches[0].clientX)}
              onMouseDown={(e) => setStartX(e.clientX)}
              onMouseUp={(e) => handleSwipe(e.clientX)}
            >
              {banners.map((item, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 flex items-center justify-center h-25 sm:h-30 md:h-40 bg-linear-to-r from-slate-50 to-white"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    {/* Desktop */}
                    {item.desktop && (
                      <img
                        src={item.desktop}
                        className="hidden sm:block max-h-full object-contain cursor-pointer"
                      />
                    )}

                    {/* Mobile */}
                    {item.mobile && (
                      <img
                        src={item.mobile}
                        className="block sm:hidden max-h-full object-contain cursor-pointer"
                      />
                    )}

                    {/* fallback desktop */}
                    {!item.desktop && item.mobile && (
                      <img
                        src={item.mobile}
                        className="hidden sm:block max-h-full object-contain cursor-pointer"
                      />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* HERO MINI */}
      <section className="relative py-24 bg-(--primary) text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-white/60 font-bold">{t("live_booking")}</span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mt-2">
            {t("title1")} <span className="text-[#F6EB61]">{t("title2")}</span>
          </h1>
          <p className="mt-4 text-white/75 font-light text-sm md:text-base max-w-xl mx-auto">
            {t("desc")}
          </p>
        </div>
      </section>

      {/* FILTER CARD */}
      <section className="-mt-12 max-w-6xl mx-auto px-5 lg:px-10 relative z-20">
        <div className="bg-white shadow-xl shadow-slate-200/50 rounded-2xl p-5 md:p-6 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

            <div className="md:col-span-4">
              <label className="text-xs font-bold text-slate-500 mb-1.5 block">{t("select_date")}</label>
              <input
                type="date"
                value={date}
                min={today}
                className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-(--primary)/20 focus:border-(--primary) transition outline-none"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="md:col-span-5">
              <label className="text-xs font-bold text-slate-500 mb-1.5 block">{t("information")}</label>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/bookingrules")}
                  className="flex-1 border border-slate-200 rounded-xl py-3 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  {t("booking_rules")}
                </button>
                <button
                  onClick={() => navigate("/pricelist")}
                  className="flex-1 border border-slate-200 rounded-xl py-3 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  {t("price_list")}
                </button>
              </div>
            </div>

            <div className="md:col-span-3 md:self-end">
              <a
                href="https://wa.me/6282121211892"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-(--secondary) text-black py-3 rounded-xl text-sm font-bold hover:opacity-95 transform active:scale-[0.98] transition shadow-lg shadow-(--primary)/20"
              >
                {t("book_whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE GRID */}
      <section className="py-10 max-w-6xl mx-auto px-5 lg:px-10 font-secondary">

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-4">

          {/* LEGEND */}
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start text-xs font-medium text-slate-500 w-full md:w-auto">
            {legends.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${item.color}`} />
                {item.label}
              </div>
            ))}
          </div>

          {/* NOTE */}
          <p className="text-center md:text-right text-xs text-slate-400 font-light w-full md:w-auto">
            ⚠️ {t("note")}
          </p>

        </div>

        <div className="bg-white shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">

          {/* HEADER */}
<div className="grid grid-cols-3 bg-(--primary) border-b border-slate-100 text-white text-[10px] md:text-xs font-bold uppercase divide-x divide-white/20">
  <div className="p-3.5 text-center">{t("time_slot")}</div>
  <div className="p-3.5 text-center">{t("field_a")}</div>
  <div className="p-3.5 text-center">{t("field_b")}</div>
</div>

          {/* ROWS */}
          <div className="divide-y divide-slate-100">
            {times.map((time, index) => {
              const slotA = getSlot(time, "A");
              const slotB = getSlot(time, "B");
              const timeStatus = getStatusByTime(time);

              return (
                <div
                  key={time}
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  className={`relative grid grid-cols-3 text-[10px] md:text-xs items-center transition-all duration-300 ${index === activeIndex ? "bg-amber-50" : ""
                    } ${timeStatus === "ended" ? "opacity-60" : ""} hover:bg-slate-50/50`}
                >
                  {index === activeIndex && (
                    <div className="absolute left-0 top-0 h-full w-1.25 bg-(--secondary) "></div>
                  )}

                  {/* Time */}
                  <div className="p-3.5 pl-5 md:pl-6 text-slate-700 font-semibold md:text-sm">
                    {time}
                  </div>

                  {/* Field A */}
                  <div className="p-2 flex justify-center">
                    {(() => {
                      const statusBase = slotA?.status || timeStatus;

                      let status: Status = statusBase;
                      if (timeStatus === "ended") status = "ended";
                      const isOngoing = status === "ongoing";
                      const activeClass = isOngoing ? liveEffect : "";
                      return (
                        <div
                          className={`inline-flex items-center px-2 py-1 rounded-md font-medium
  ${statusTextStyle(status)}
  ${isOngoing ? liveEffect : ""}`}
                        >
                          <div className="flex items-center justify-center text-center">
                            {slotA ? (
                              <span className="text-[9px] md:text-xs font-medium leading-tight">
                                {slotA.bookedBy}
                              </span>
                            ) : (
                              <span className="text-[9px] md:text-xs font-medium">
                                {timeStatus === "ended" ? t("ended") : t("available")}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Field B */}
                  <div className="p-2 flex justify-center">
                    {(() => {
                      const statusBase = slotB?.status || timeStatus;

                      let status: Status = statusBase;
                      if (timeStatus === "ended") status = "ended";

                      const isOngoing = status === "ongoing";

                      return (
                        <div
                          className={`inline-flex items-center font-medium 
    ${statusTextStyle(status)} 
    ${isOngoing ? liveEffect : ""}`}
                        >
                          <div className="flex items-center justify-center text-center">
                            {slotB ? (
                              <span className="text-[9px] md:text-xs font-medium leading-tight">
                                {slotB.bookedBy}
                              </span>
                            ) : (
                              <span className="text-[9px] md:text-xs font-medium">
                                {timeStatus === "ended" ? t("ended") : t("available")}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
} 