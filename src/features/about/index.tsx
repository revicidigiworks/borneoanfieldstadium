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
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-(--primary)">
        <div className="absolute inset-0 opacity-40">
          <img
            src={aboutImage}
            alt="Borneo Anfield Stadium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-white/80 font-semibold tracking-[0.3em] uppercase text-sm mb-5 block">
            Keeping The Game Beautiful
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            BORNEO ANFIELD{" "}
            <span className="text-[#F6EB61]">
              <br />
              STADIUM
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
            <div className="flex items-center gap-3 text-(--primary)">
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
                <p className="text-3xl font-bold text-(--primary)">100+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Tournaments
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-(--primary)">30+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Communities
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-(--primary)">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Weekly Players
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-(--primary)">2</p>
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
              className="w-full h-112.5 object-cover rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#fa0000]">
              <div className="flex items-center gap-4 mb-6 text-(--primary)">
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
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-(--primary)">
              <div className="flex items-center gap-4 mb-6 text-(--primary)">
                <Rocket size={32} />
                <h2 className="text-2xl font-bold uppercase tracking-tight">
                  Our Mission
                </h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary) mt-2.5 shrink-0"></span>
                  Menyediakan fasilitas lapangan premium dengan standar keamanan
                  tertinggi.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary) mt-2.5 shrink-0"></span>
                  Membangun sistem manajemen jadwal yang profesional dan
                  transparan.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary) mt-2.5 shrink-0"></span>
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

      {/* 4. SAFETY & CREDIBILITY SECTION - BALANCED BENTO GRID */}
      <section className="py-24 bg-(--primary) text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#F6EB61] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Professional Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Safety & <span className="text-white/70">Credibility</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F6EB61] mx-auto mt-6"></div>
            <p className="mt-8 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Keamanan pemain adalah prioritas utama kami. Seluruh fasilitas dan
              operasional mengikuti standar keamanan yang ketat untuk menjamin
              pengalaman bermain terbaik.
            </p>
          </div>

          {/* Menggunakan grid yang responsif dan Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Emergency Ambulance",
                desc: "Unit ambulans siaga di area stadion untuk penanganan medis darurat.",
                img: ambulance,
                span: "lg:col-span-1",
              },
              {
                title: "Trained Medical Team",
                desc: "Tim operasional dan medis terlatih yang siap siaga.",
                img: timMedis,
                span: "lg:col-span-1",
              },
              {
                title: "Lightning Protection",
                desc: "Sistem perlindungan petir modern menjamin keamanan.",
                img: lightingProtect,
                span: "lg:col-span-1",
              },
              {
                title: "Safety Padding & Fence",
                desc: "Bantalan pengaman di area risiko dan pagar perimeter.",
                img: safetyImg,
                span: "lg:col-span-2",
              }, // Item ke-4 diperlebar
              {
                title: "Emergency SOP Sign",
                desc: "Panduan prosedur darurat cedera yang terpampang jelas.",
                img: sign,
                span: "lg:col-span-1",
              },
              {
                title: "Medical First Aid",
                desc: "Ketersediaan perlengkapan medis lengkap dan staf siaga.",
                img: firstAid,
                span: "lg:col-span-1",
              },
              {
                title: "Pagar Pengaman Lapangan",
                desc: "Pagar pembatas untuk menjamin lingkungan bermain terkontrol.",
                img: pagar,
                span: "lg:col-span-2",
              }, // Item ke-7 diperlebar
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group bg-white text-black shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col ${item.span}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="p-8 flex flex-col grow border-b-4 border-transparent group-hover:border-[#F6EB61] transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-(--primary)/10 rounded-lg group-hover:bg-(--primary) transition-colors duration-500">
                      <ShieldCheck
                        className="text-(--primary) group-hover:text-white transition-colors"
                        size={26}
                      />
                    </div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight leading-tight">
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

          {/* Footer Tags tetap sama */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px bg-white/20 grow max-w-25"></div>
              <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">
                Trusted Features
              </span>
              <div className="h-px bg-white/20 grow max-w-25"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
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
                  className="px-6 py-3 border border-white/20 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-bold bg-white/5 backdrop-blur-sm hover:bg-[#F6EB61] hover:text-(--primary) hover:border-[#F6EB61] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
