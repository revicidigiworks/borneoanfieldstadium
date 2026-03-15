import {
  Coffee,
  Church, // Ikon untuk Musholla
  ShowerHead,
  Shirt,
  BatteryCharging,
  ParkingCircle,
  Maximize2,
  Layers,
  Activity,
  Navigation,
} from "lucide-react";

import facilitiesHero from "../../assets/images/gallery/lapMalam.jpeg";
import lockerImg from "../../assets/images/gallery/lokerRoom.jpeg";
import showerImg from "../../assets/images/gallery/showerRoom.jpeg";
import mushollaImg from "../../assets/images/gallery/bantalan.jpeg";
import cafeImg from "../../assets/images/gallery/warkops.jpeg";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-(--primary)">
        <div className="absolute inset-0 opacity-40">
          <img
            src={facilitiesHero}
            alt="Stadium Facilities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-white/80 font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-5 block">
            World Class Standards
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            STADIUM <span className="text-[#F6EB61]">FACILITIES</span>
          </h1>
        </div>
      </section>

      {/* 2. TECHNICAL SPECIFICATIONS */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1 text-left">
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tighter text-(--primary)">
              Technical <br className="hidden md:block" /> Specs
            </h2>
            <div className="w-12 h-1 bg-[#F6EB61] mt-4"></div>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Detail teknis standar arena yang kami gunakan untuk menjamin
              performa dan kenyamanan maksimal.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="border-t border-gray-100">
              {[
                {
                  label: "Field Dimensions",
                  value: "60m x 40m (International Standard)",
                  icon: <Maximize2 size={18} />,
                },
                {
                  label: "Turf Type",
                  value: "Premium Monofilament Synthetic Grass 50mm",
                  icon: <Layers size={18} />,
                },
                {
                  label: "Safety Zone",
                  value: "2 Meters Perimeter with High-Density Padding",
                  icon: <Activity size={18} />,
                },
                {
                  label: "Drainage System",
                  value: "Advanced Vertical Drainage Technology",
                  icon: <Navigation size={18} />,
                },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-5 md:py-6 border-b border-gray-100 group hover:bg-gray-50 transition-colors px-4 gap-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 group-hover:text-(--primary)">
                      {spec.icon}
                    </span>
                    <span className="font-bold uppercase tracking-wider text-xs md:text-sm text-gray-800">
                      {spec.label}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs md:text-sm font-medium sm:text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM INTERIOR - UNIFIED TEXT POSITIONING */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-black text-(--primary) uppercase tracking-tight text-left">
                Premium Interior
              </h2>
              <div className="w-12 h-1 bg-[#F6EB61] mt-4"></div>
            </div>
            <p className="text-gray-500 max-w-md text-sm text-left md:text-right italic">
              "Kenyamanan sebelum dan sesudah pertandingan adalah prioritas kami
              dalam membangun atmosfer profesional."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[300px]">
            {/* 1. Changing Room (Sudah Benar) */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-none md:rounded-2xl">
              <img
                src={lockerImg}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Locker"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <Shirt className="text-[#F6EB61] mb-3" size={32} />
                <h3 className="text-white text-xl md:text-2xl font-black uppercase italic leading-tight">
                  Locker & Changing Room
                </h3>
                <p className="text-white/70 text-xs md:text-sm mt-2">
                  Personal locker dengan ruang ganti privat.
                </p>
              </div>
            </div>

            {/* 2. Shower Room (DIPERBAIKI: Teks pindah ke pojok kiri bawah) */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-none md:rounded-2xl">
              <img
                src={showerImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Shower"
              />
              {/* Overlay gradien gelap di bawah agar teks terbaca */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Tata letak konten: Ikon di atas h3, di pojok kiri bawah */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <ShowerHead className="text-[#F6EB61] mb-2" size={30} />
                <h3 className="text-white font-black uppercase tracking-widest text-lg md:text-xl leading-tight">
                  Shower Room
                </h3>
                <p className="text-white/70 text-xs mt-1 md:mt-2">
                  Fasilitas bilas bersih dengan air hangat.
                </p>
              </div>
            </div>

            {/* 3. Musholla (DIPERBAIKI: Teks pindah ke pojok kiri bawah) */}
            <div className="md:col-span-1 group relative overflow-hidden rounded-none md:rounded-2xl text-left">
              <img
                src={mushollaImg}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Musholla"
              />
              {/* Overlay gradien gelap di bawah agar teks terbaca */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Tata letak konten: Ikon di atas h3, di pojok kiri bawah */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <Church className="text-[#F6EB61] mb-2" size={24} />
                <h3 className="text-white font-black uppercase text-sm tracking-widest leading-tight">
                  Musholla
                </h3>
                <p className="text-white/70 text-xs mt-1">
                  Ruang ibadah yang tenang dan bersih.
                </p>
              </div>
            </div>

            {/* 4. Charging Area (Sudah Benar) */}
            <div className="md:col-span-1 group relative bg-(--primary) rounded-none md:rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-(--primary)/90 transition-all">
              <BatteryCharging className="text-[#F6EB61]" size={40} />
              <div>
                <h3 className="text-white font-black uppercase text-lg leading-tight">
                  Free Charging Area
                </h3>
                <p className="text-white/40 text-xs mt-2 italic">
                  High-speed USB & Power Outlet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXTERNAL AREA & CAFE */}
      <section className="py-16 md:py-24 bg-(--primary) text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all">
              <ParkingCircle size={40} className="text-[#F6EB61] mb-6" />
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
                Parking Area
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Area parkir luas yang mampu menampung puluhan mobil dan ratusan
                motor dengan sistem keamanan terpantau CCTV 24 jam.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4 md:gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#F6EB61]">
                <span>Safe</span>
                <span>Spacious</span>
                <span>Monitored</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-0 hover:bg-white/10 transition-all">
              <img
                src={cafeImg}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                alt="Cafe Background"
              />
              <div className="relative p-8 md:p-10">
                <Coffee size={40} className="text-[#F6EB61] mb-6" />
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
                  Warkops Café
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Tempat berkumpul komunitas. Menyediakan kopi berkualitas dan
                  makanan pendamping sambil menyaksikan pertandingan secara
                  langsung.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4 md:gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#F6EB61]">
                  <span>Chill</span>
                  <span>Community Hub</span>
                  <span>Food & Drinks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
