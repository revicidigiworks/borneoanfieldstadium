import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import i18n from "@/i18n";
import { Menu, X, Globe, ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import logo2 from "@/assets/images/logo/logo-2.webp";
import logo from "@/assets/images/logo/logo.webp";
import heroDesktop from "../../assets/images/web-banner/web-banner-sidebar.png";
import { useTranslation } from "react-i18next";


export function Navbar() {
  const { t } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language.toUpperCase());

  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
    setLang(newLang.toUpperCase());
  };

  const navItems = [
    { label: t("home"), path: "/" },
    { label: t("schedule"), path: "/schedule" },
    { label: t("facilities"), path: "/facilities" },
    { label: t("services"), path: "/services" },
    { label: t("pricelist"), path: "/pricelist" },
    { label: t("ecosystem"), path: "/ecosystem" },
    { label: t("program"), path: "/program" },
    { label: t("about"), path: "/about" },
    { label: t("contact"), path: "/contact" },
  ];

  // 🔒 Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-(--primary) sticky top-0 z-50 shadow-md">
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
        <div className="md:hidden text-white text-[12px] leading-tight text-right font-medium">
          Keeping The <br /> Game Beautiful
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 items-center ml-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition duration-300
      ${isActive
                  ? "text-[#F6EB61] font-semibold"
                  : "text-white hover:text-[#F6EB61]"
                }
      after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#F6EB61]
      after:transition-all after:duration-300
      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white text-sm border border-white/40 px-3 py-1 rounded-md hover:bg-(--secondary) hover:text-black transition"
          >
            <Globe size={16} />
            {lang}
          </button>

          <a
            href="https://wa.me/6282121211892"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-(--secondary) rounded text-(--dark) font-black uppercase tracking-[0.12em] text-sm hover:bg-white transition-all duration-300 text-center"
          >
            {t("book_now")}
          </a>
        </nav>
      </div>

      {/* MOBILE PANEL */}
      <div
        className={`md:hidden fixed inset-0 z-40 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* SIDE PANEL */}
        <div
          className={`absolute left-0 top-0 h-full w-[94%] bg-white shadow-xl flex flex-col
          transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* PANEL HEADER (FIXED) */}
          <div className="flex justify-between items-center px-6 h-20 border-b border-gray-200 shrink-0">
            <img src={logo2} alt="Borneo Anfield" className="h-10" />
            <button onClick={() => setIsOpen(false)}>
              <X size={26} className="text-(--primary)" />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex justify-between items-center text-lg font-medium transition
      ${isActive
                    ? "text-(--primary)"
                    : "text-black hover:text-(--secondary)"
                  }`
                }
              >
                {item.label}
                <ChevronRight size={18} />
              </NavLink>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-black border border-gray-300 px-3 py-2 rounded-md w-fit hover:bg-gray-100 transition"
            >
              <Globe size={16} />
              {lang}
            </button>

            <hr className="border-t border-gray-300" />

            {/* JOIN SECTION */}
            <div className="mt-6 relative overflow-hidden p-6 text-white">

              {/* BACKGROUND */}
              <img
                src={heroDesktop}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0" />

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3">BORNEO ANFIELD FC</h3>

                <p className="text-sm leading-relaxed mb-6">
                  {t("join_desc")}
                </p>

                <button className="w-full bg-(--secondary) text-black py-3 font-semibold hover:bg-white transition">
                  {t("join_cta")}
                </button>
              </div>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="pt-10 border-t border-gray-300">
              <div className="flex justify-center gap-6 mb-6 text-3xl">
                <FaFacebook className="text-(--primary) hover:opacity-70 transition duration-300 cursor-pointer" />
                <FaInstagram className="text-(--primary) hover:opacity-70 transition duration-300 cursor-pointer" />
                <FaYoutube className="text-(--primary) hover:opacity-70 transition duration-300 cursor-pointer" />
                <FaTiktok className="text-(--primary) hover:opacity-70 transition duration-300 cursor-pointer" />
              </div>

              <p className="text-center text-s text-gray-500 ">
                #DemiHobiBukanGengsi
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
