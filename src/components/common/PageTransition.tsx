import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "@/assets/images/logo/logo-2.webp";

// Konstanta durasi agar mudah disinkronkan
const ANIM_DURATION = 0.8; 
const EXIT_DURATION = 0.5;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Gunakan requestAnimationFrame jika ingin lebih presisi, 
    // tapi timeout 800-900ms sudah cukup ideal untuk UX.
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* PAGE CONTENT - Smooth Fade & Scale */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
          transition={{ 
            duration: EXIT_DURATION, 
            ease: [0.22, 1, 0.36, 1] // Quint Ease Out
          }}
          className="will-change-transform" // Optimasi Browser
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* PREMIUM OVERLAY LOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            // Menggunakan transform 3D (translateY) lebih enteng daripada top/bottom
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: ANIM_DURATION, 
              ease: [0.76, 0, 0.24, 1] // Custom Golden Ratio-like easing
            }}
            style={{ translateZ: 0 }} // Force Hardware Acceleration
            className="fixed inset-0 z-9999 flex items-center justify-center bg-(--surface) will-change-transform"
          >
            <div className="relative flex items-center justify-center">
              
              {/* Glow Effect - Dibuat berdenyut (Pulse) agar terasa 'hidup' */}
              <motion.div 
                className="absolute w-64 h-64 bg-[#F6EB61]/20 blur-[80px] rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />

              {/* LOGO - Pop up dengan damping yang tinggi (tidak goyang berlebih) */}
              <motion.img
                src={logo}
                alt="Logo"
                className="w-48 md:w-72 relative z-10"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.1, opacity: 0, filter: "blur(5px)" }}
                transition={{
                  scale: { type: "spring", damping: 20, stiffness: 100 },
                  opacity: { duration: 0.4 },
                  y: { duration: 0.5 }
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}