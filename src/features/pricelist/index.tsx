import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import priceList from "../../assets/images/services/pricing2.webp";


export default function PriceListPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="relative py-24 bg-(--primary) text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-white/60 font-bold">
            Pricing
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mt-2">
            Price <span className="text-[#F6EB61]">List</span>
          </h1>
          <p className="mt-4 text-white/75 text-sm md:text-base">
            Tap image to zoom and view full details.
          </p>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="py-10 max-w-5xl mx-auto px-5">
        
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-3">
          
          {/* IMAGE */}
          <div
            onClick={() => setOpen(true)}
            className="cursor-zoom-in group relative overflow-hidden rounded-xl"
          >
            <img
              src={priceList} // <-- ganti path gambar lo
              alt="Price List"
              className="w-full h-auto object-contain transition duration-300 group-hover:scale-[1.02]"
            />

            {/* overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center">
              <span className="text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 bg-black/50 px-3 py-1 rounded-full">
                Tap to zoom
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-white text-xl font-bold bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur"
            >
              ✕
            </button>

            {/* IMAGE FULL */}
            <motion.img
              src={priceList}
              alt="Price List Full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-full object-contain px-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}