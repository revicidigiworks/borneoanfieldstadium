import { ShieldCheck, Target, History, Rocket } from "lucide-react";
import aboutImage from "../../assets/images/hero/gedung2.jpeg";
import safetyImg from "../../assets/images/gallery/bantalan.jpeg";
import ambulance from "../../assets/images/safety/ambulance.png";
import timMedis from "../../assets/images/safety/safety.jpeg";
import firstAid from "../../assets/images/safety/fristAid.png";
import lightingProtect from "../../assets/images/safety/lightingProtect.png";
import sign from "../../assets/images/safety/sign.png";
import pagar from "../../assets/images/safety/pagar.png";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#C8102E]">
        <div className="absolute inset-0 opacity-40">
          <img
            src={aboutImage}
            alt="Borneo Anfield Stadium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-white/80 font-semibold tracking-[0.3em] uppercase text-sm mb-5 block">
            Keeping The Game Beautiful
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            ABOUT BORNEO{" "}
            <span className="text-[#F6EB61]">
              <br />
              ANFIELD STADIUM
            </span>
          </h1>
          <p className="mt-6 text-white/80 max-w-xl mx-auto text-lg">
            More than just a field. A home for football community and
            competitive spirit in Kalimantan.
          </p>
        </div>
      </section>

      {/* 2. STORY & STATS SECTION (Integrated from Home) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#C8102E]">
              <History size={28} />
              <h2 className="text-3xl font-bold uppercase tracking-tight">
                Our Story
              </h2>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              Berdiri sejak 2022, Borneo Anfield Stadium menghadirkan lebih dari
              sekadar lapangan mini soccer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ini adalah ekosistem sepakbola komunitas dengan sistem jadwal yang
              terstruktur, fasilitas premium, dan atmosfer pertandingan yang
              hidup setiap minggu. Kami membangun visi untuk menghadirkan
              atmosfer sepak bola profesional bagi komunitas lokal di
              Kalimantan.
            </p>

            {/* Stats Items */}
            <div className="mt-8 grid grid-cols-2 gap-y-8 gap-x-6 border-t border-gray-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-[#C8102E]">100+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Tournaments
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#C8102E]">30+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Communities
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#C8102E]">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Weekly Players
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#C8102E]">2</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Premium Fields
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F6EB61]/20 rounded-xl -z-10 group-hover:bg-[#F6EB61]/30 transition-colors"></div>
            <img
              src={aboutImage}
              alt="Stadium Atmosphere"
              className="w-full h-[450px] object-cover rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#C8102E]">
              <div className="flex items-center gap-4 mb-6 text-[#C8102E]">
                <Target size={32} />
                <h2 className="text-2xl font-bold uppercase tracking-tight">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Menjadi pusat ekosistem sepak bola modern di Kalimantan dengan
                sistem kompetisi yang terstruktur dan komunitas yang berkembang.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#F6EB61]">
              <div className="flex items-center gap-4 mb-6 text-[#C8102E]">
                <Rocket size={32} />
                <h2 className="text-2xl font-bold uppercase tracking-tight">
                  Our Mission
                </h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2.5 shrink-0"></span>
                  Menyediakan fasilitas lapangan premium dengan standar keamanan
                  tertinggi.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2.5 shrink-0"></span>
                  Membangun sistem manajemen jadwal yang profesional dan
                  transparan.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2.5 shrink-0"></span>
                  Menumbuhkan semangat sportivitas melalui kompetisi komunitas
                  yang sehat.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="italic text-gray-500 text-lg max-w-3xl mx-auto">
              "Creating a professional football atmosphere for every player,
              every match, and every community."
            </p>
          </div>
        </div>
      </section>

      {/* 4. SAFETY & CREDIBILITY SECTION */}
      <section className="py-24 bg-[#C8102E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tight">
              Safety & Credibility
            </h2>
            <div className="w-20 h-1.5 bg-[#F6EB61] mx-auto mt-4"></div>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto">
              Keamanan pemain adalah prioritas utama kami. Seluruh fasilitas dan
              operasional mengikuti standar keamanan yang ketat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Ambulance",
                desc: "Unit ambulans siaga di area stadion untuk penanganan medis darurat yang cepat.",
                img: ambulance,
              },
              {
                title: "Trained Medical Team",
                desc: "Tim operasional dan medis terlatih yang siap siaga selama jadwal pertandingan berlangsung.",
                img: timMedis,
              },
              {
                title: "Lightning Protection",
                desc: "Sistem perlindungan petir modern untuk menjamin keamanan pemain saat cuaca buruk.",
                img: lightingProtect,
              },
              {
                title: "Safety Padding & Fence",
                desc: "Bantalan pengaman di area berisiko dan pagar perimeter untuk perlindungan fisik.",
                img: safetyImg,
              },
              {
                title: "Emergency SOP Sign",
                desc: "Panduan prosedur darurat cedera yang terpampang jelas di setiap sudut lapangan.",
                img: sign,
              },
              {
                title: "Medical First Aid",
                desc: "Keamanan pemain adalah prioritas dengan ketersediaan perlengkapan medis lengkap dan staf siap siaga di area lapangan.",
                img: firstAid, // Pastikan variabel safetyImg sudah di-import di bagian atas file
              },
              {
                title: "Pagar Pengaman Lapangan",
                desc: "Pemasangan pagar pembatas di seluruh pinggir lapangan untuk menjamin keamanan pemain dan menciptakan lingkungan bermain yang terkontrol.",
                img: pagar, // Ganti dengan variabel import gambar yang sesuai
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-black overflow-hidden shadow-xl hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="text-[#C8102E]" size={24} />
                    <h3 className="text-lg font-bold uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-4">
            {[
              "Ambulance Standby",
              "Lightning Protection",
              "Professional SOP",
              "Trained Medics",
              "Safety Padding",
              "Perlengkapan Medis Lengkap",
              "Pagar Pengaman Lapangan",
            ].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 border border-white/30 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-medium bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
