import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "@/assets/images/logo/logo-2.webp";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // durasi total animasi

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* PAGE CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* LOADER (ONLY WHEN ROUTE CHANGE) */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }} // Kurva luncurnya dibuat lebih mulus
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-(--surface)"
          >
            {/* CONTAINER UNTUK LOGO & EFEK CAHAYA */}
            <div className="relative flex items-center justify-center">
              
              {/* Efek Pendaran Cahaya (Glow) Lembut di Belakang Logo */}
              <motion.div 
                className="absolute w-60 h-60 bg-[#F6EB61]/15 blur-3xl rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* LOGO */}
              <motion.img
                src={logo}
                alt="Logo"
                className="w-50 md:w-80 relative z-10" // Tetap berukuran besar pilihanmu
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ 
                  scale: [0.6, 1.05, 1], // Efek pop-up memantul halus (Overshoot)
                  opacity: 1 
                }}
                exit={{ 
                  scale: 0.9, 
                  opacity: 0,
                  transition: { duration: 0.3, ease: "easeIn" } 
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1], // Custom cubic-bezier untuk efek pegas yang mantap
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}