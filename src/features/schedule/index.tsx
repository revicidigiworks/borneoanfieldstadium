import { useEffect, useState } from "react";
import { scheduleService } from "@/services/schedule.service";
import { ScheduleSlot } from "@/types/schedule";

type Status = "available" | "booked" | "ended" | "ongoing";

export default function SchedulePage() {
  const [slots, setSlots] = useState<ScheduleSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await scheduleService.getAll();
        setSlots(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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

  const getSlot = (time: string, field: "A" | "B") =>
    slots.find(
      (s) => s.time === time && s.field === field && (!date || s.date === date)
    );

  const statusTextStyle = (status: Status) => {
    switch (status) {
      case "available": return "text-emerald-600";
      case "booked": return "text-rose-600";
      case "ended": return "text-slate-400";
      case "ongoing": return "text-amber-600 font-bold";
    }
  };

  const dotStyle = (status: Status) => {
    switch (status) {
      case "available": return "bg-emerald-500";
      case "booked": return "bg-rose-500";
      case "ended": return "bg-slate-300";
      case "ongoing": return "bg-amber-500 animate-pulse";
    }
  };

  const legends = [
    { label: "Available", color: "bg-emerald-500" },
    { label: "Booked", color: "bg-rose-500" },
    { label: "Ended", color: "bg-slate-300" },
    { label: "Ongoing", color: "bg-amber-500" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-slate-500 font-medium">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-slate-300 border-t-(--primary) rounded-full animate-spin"></div>
          <span>Loading schedules...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO MINI */}
      <section className="relative py-24 bg-(--primary) text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-white/60 font-bold">Live Booking</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-2">
            Match <span className="text-[#F6EB61]">Schedule</span>
          </h1>
          <p className="mt-4 text-white/75 font-light text-sm md:text-base max-w-xl mx-auto">
            Real-time schedule for both premium fields. Find your perfect time and secure your slot.
          </p>
        </div>
      </section>

      {/* FILTER CARD */}
      <section className="-mt-12 max-w-6xl mx-auto px-5 lg:px-10 relative z-20">
        <div className="bg-white shadow-xl shadow-slate-200/50 rounded-2xl p-5 md:p-6 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-4">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Select Date</label>
              <input
                type="date"
                className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-(--primary)/20 focus:border-(--primary) transition outline-none"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="md:col-span-5">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Information</label>
              <div className="flex gap-3">
                <button className="flex-1 border border-slate-200 rounded-xl py-3 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition">
                  Booking Rules
                </button>
                <button className="flex-1 border border-slate-200 rounded-xl py-3 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition">
                  Price List
                </button>
              </div>
            </div>

            <div className="md:col-span-3 md:self-end">
              <button className="w-full bg-(--primary) text-white py-3 rounded-xl text-sm font-bold hover:opacity-95 transform active:scale-[0.98] transition shadow-lg shadow-(--primary)/20">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE GRID */}
      <section className="py-10 max-w-6xl mx-auto px-5 lg:px-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-4">
          
          {/* LEGEND */}
          <div className="flex flex-wrap gap-4 items-center text-xs font-medium text-slate-500">
            {legends.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${item.color}`} />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden border border-slate-100">
          
          {/* HEADER */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-100 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-wider">
            <div className="p-3.5 pl-5 md:pl-6">Time Slot</div>
            <div className="p-3.5 text-center">Field A</div>
            <div className="p-3.5 text-center">Field B</div>
          </div>

          {/* ROWS */}
          <div className="divide-y divide-slate-100">
            {times.map((time) => {
              const slotA = getSlot(time, "A");
              const slotB = getSlot(time, "B");

              return (
                <div
                  key={time}
                  className="grid grid-cols-3 text-[10px] md:text-xs hover:bg-slate-50/50 transition items-center"
                >
                  {/* Time */}
                  <div className="p-3.5 pl-5 md:pl-6 text-slate-700 font-semibold md:text-sm">
                    {time}
                  </div>

                  {/* Field A */}
                  <div className="p-2 flex justify-center">
                    {(() => {
                      const status = (slotA?.status || "available") as Status;
                      return (
<div className={`inline-flex items-center font-bold ${statusTextStyle(status)}`}>
  <span className="text-[9px] md:text-xs">
    { status.toUpperCase()}
  </span>
</div>
                      );
                    })()}
                  </div>

                  {/* Field B */}
                  <div className="p-2 flex justify-center">
                    {(() => {
                      const status = (slotB?.status || "available") as Status;
                      return (
                        <div className={`inline-flex items-center gap-1.5 font-bold ${statusTextStyle(status)}`}>
                          <span className="text-[9px] md:text-xs">
                            {status.toUpperCase()}
                          </span>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-5 font-light">
          ⚠️ 00:00 – 05:00 considered next day session
        </p>
      </section>
    </div>
  );
}