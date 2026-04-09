import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FileText, MessageCircle, Info, ShieldAlert, CloudRain, CreditCard } from "lucide-react";

import heroImg from "../../assets/images/web-banner/web-banner-mobile-fasilitas.png";

/* ===== ANIMATION ===== */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function BookingRulesPage() {
  // Pengelompokan aturan agar lebih mudah dicerna
  const ruleGroups = [
    {
      title: "Proses Booking",
      icon: <MessageCircle className="w-5 h-5" />,
      items: [
        "Cek jadwal lapangan saat ini di Jadwal Online Borneo Anfield Stadium: http://borneoanfieldstadium.com/jadwalonline",
        "Konfirmasi dan booking jadwal lapangan yang tersedia dengan Admin via WhatsApp (Jam operasional: 09:00 - 23:00 WITA).",
        "Lengkapi form booking (Identitas pemesan dan jadwal) yang dikirimkan oleh Admin.",
        "Setelah DP diterima, Admin akan meng-input nama tim Anda di jadwal online.",
        "Tim hanya perlu datang ke BAS dan langsung bermain di hari H setelah pelunasan selesai."
      ]
    },
    {
      title: "Ketentuan Pembayaran",
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        "Tunggu Admin menghitung total biaya sebelum membayar. Anda memiliki waktu 30 menit untuk membayar DP 50%.",
        "Pembayaran di atas batas waktu 30 menit tanpa konfirmasi berisiko jadwal diambil oleh pihak lain.",
        "Pembayaran wajib dilakukan di jam operasional (09:00 - 23:00 WITA).",
        "H-4 Admin akan mengingatkan pelunasan. H-3 booking WAJIB sudah lunas.",
        "Jika tidak lunas di H-3, booking dianggap CANCEL. Uang yang masuk akan dijadikan deposit untuk booking selanjutnya (tidak hangus, tapi wajib langsung pelunasan di booking berikutnya).",
        "Pastikan nominal transfer sesuai. Kesalahan transfer (kelebihan) otomatis masuk sebagai deposit dan tidak bisa di-refund."
      ]
    },
    {
      title: "Kebijakan & Pembatalan",
      icon: <ShieldAlert className="w-5 h-5" />,
      items: [
        "Tidak ada refund (pengembalian uang) dan tidak bisa cancel jadwal yang sudah dibayar.",
        "Reschedule (atur ulang) wajib info maksimal H-7 dan hanya diberikan 1 kali kesempatan.",
        "Pemilihan lapangan (A atau B) adalah kebijakan manajemen. Keduanya memiliki ukuran dan kualitas yang persis sama.",
        "Untuk jam malam (23:00 - 02:00 WITA), mohon menjaga ketenangan. Manajemen berhak menghentikan permainan jika terjadi keributan berlebih."
      ]
    },
    {
      title: "Kondisi Cuaca (Force Majeure)",
      icon: <CloudRain className="w-5 h-5" />,
      items: [
        "Jika hujan deras yang menyebabkan akses banjir/tidak memungkinkan, jadwal dapat diatur ulang.",
        "Jika ada petir, jadwal diundur 15-30 menit. Jika sudah mulai bermain, waktu akan ditambah sesuai durasi pemberhentian setelah hujan reda.",
        "Lapangan selalu siap dipakai. Jadwal tidak bisa dicancel sepihak karena alasan hujan biasa."
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[35vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-(--primary)">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 opacity-40"
        >
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-white/80 font-semibold tracking-[0.3em] uppercase text-xs mb-3 block"
          >
            Terms & Conditions
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black text-white tracking-tight"
          >
            BOOKING <span className="text-[#F6EB61]">RULES</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 md:px-6">
        {/* DISCLAMER BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 bg-blue-50 border-l-4 border-(--primary) p-5 rounded-r-xl flex gap-4"
        >
          <Info className="text-(--primary) shrink-0" />
          <p className="text-sm text-blue-900 leading-relaxed">
            Penting: Semua proses transaksi dan konfirmasi hanya dilakukan melalui <strong>WhatsApp Resmi Admin</strong>. 
            Mohon membaca poin-poin di bawah ini dengan teliti untuk kenyamanan bersama.
          </p>
        </motion.div>

        {/* RULES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {ruleGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-5 border-b border-gray-50 bg-gray-50/50 flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-(--primary) shadow-sm">
                  {group.icon}
                </div>
                <h2 className="font-bold text-gray-800 uppercase tracking-wide text-sm">
                  {group.title}
                </h2>
              </div>
              
              <div className="p-5 space-y-4">
                {group.items.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <span className="text-xs font-bold text-gray-300 group-hover:text-(--primary) transition-colors mt-1">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-2 bg-gray-100 rounded-full text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-widest">
            ⚠️ Management Borneo Anfield Stadium
          </div>
        </motion.div>
      </section>
    </div>
  );
}