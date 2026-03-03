import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X, Globe, ChevronRight } from "lucide-react"
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import logo2 from "@/assets/images/logo/logo-2.png"
import logo from "@/assets/images/logo/logo.png"

const navItems = [
  "Home",
  "Schedule",
  "Facilities",
  "Services",
  "Competition",
  "Ecosystem",
  "Program",
  "About",
  "Contact"
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [lang, setLang] = useState("EN")

  // 🔒 Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <header className="bg-[var(--primary)] sticky top-0 z-50 shadow-md">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* HAMBURGER */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={26} />
        </button>

        {/* LOGO CENTER MOBILE */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={logo} alt="Borneo Anfield" className="h-10" />
        </div>

        {/* SLOGAN MOBILE */}
        <div className="md:hidden text-white text-[10px] leading-tight text-right font-medium">
          Keeping The <br /> Game Beautiful
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 items-center ml-auto">
          {navItems.map(item => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm tracking-wide transition duration-300
                ${isActive
                  ? "text-black font-semibold"
                  : "text-white hover:text-black"}`
              }
            >
              {item}
            </NavLink>
          ))}

          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className="flex items-center gap-2 text-white text-sm border border-white/40 px-3 py-1 rounded-md hover:bg-[var(--secondary)] hover:text-black transition"
          >
            <Globe size={16} />
            {lang}
          </button>

          <a
            href="#"
            className="bg-black text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-[var(--secondary)] hover:text-black transition"
          >
            BOOK NOW
          </a>
        </nav>
      </div>

      {/* MOBILE PANEL */}
      <div
        className={`md:hidden fixed inset-0 z-40 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >

        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* SIDE PANEL */}
        <div
          className={`absolute left-0 top-0 h-full w-[94%] bg-white shadow-xl flex flex-col
          transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          {/* PANEL HEADER (FIXED) */}
          <div className="flex justify-between items-center px-6 h-20 border-b border-gray-200 shrink-0">
            <img src={logo2} alt="Borneo Anfield" className="h-10" />
            <button onClick={() => setIsOpen(false)}>
              <X size={26} className="text-[#00C5C8]" />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">

            {navItems.map(item => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex justify-between items-center text-lg font-medium transition
                  ${isActive
                    ? "text-[var(--primary)]"
                    : "text-black hover:text-[var(--secondary)]"}`
                }
              >
                {item}
                <ChevronRight size={18} />
              </NavLink>
            ))}

<button
              onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
              className="flex items-center gap-2 text-black border border-gray-300 px-3 py-2 rounded-md w-fit hover:bg-gray-100 transition"
            >
              <Globe size={16} />
              {lang}
            </button>

            <hr className="border-t border-gray-300" />

            {/* JOIN SECTION */}
            <div className="mt-8 bg-[var(--primary)] p-6  text-white">
              <h3 className="text-lg font-semibold mb-3">
                JOIN BAFC
              </h3>

              <p className="text-sm leading-relaxed mb-6">
                Dapatkan akses eksklusif ke jadwal pertandingan,
                event komunitas, promo spesial, dan update terbaru
                dari Borneo Anfield Football Club.
              </p>

              <button className="w-full bg-black text-white py-3 font-semibold hover:bg-[var(--secondary)] hover:text-black transition">
                GABUNG SEKARANG
              </button>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="pt-10 border-t border-gray-300">
            
            <div className="flex justify-center gap-6 mb-6 text-3xl">
  <FaFacebook className="text-[#00C5C8] hover:opacity-70 transition duration-300 cursor-pointer" />
  <FaInstagram className="text-[#00C5C8] hover:opacity-70 transition duration-300 cursor-pointer" />
  <FaYoutube className="text-[#00C5C8] hover:opacity-70 transition duration-300 cursor-pointer" />
  <FaTiktok className="text-[#00C5C8] hover:opacity-70 transition duration-300 cursor-pointer" />
</div>

              <p className="text-center text-xs text-gray-500 tracking-wide">
                Demi Hobi, Bukan Gengsi
              </p>

            </div>

          </div>
        </div>
      </div>
    </header>
  )
}