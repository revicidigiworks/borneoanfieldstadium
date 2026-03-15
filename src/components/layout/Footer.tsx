import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import sponsor1 from "../../assets/images/sponsors/sponsor1.png";
import sponsor2 from "../../assets/images/sponsors/sponsor2.png";
import sponsor3 from "../../assets/images/sponsors/sponsor3.png";
import sponsor4 from "../../assets/images/sponsors/sponsor4.png";
import sponsor5 from "../../assets/images/sponsors/sponsor5.png";
import sponsor6 from "../../assets/images/sponsors/sponsor6.png";

const navItems = [
  "Home",
  "Schedule",
  "Facilities",
  "Services",
  "Competition",
  "Ecosystem",
  "Program",
  "About",
  "Contact",
];

export function Footer() {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6];

  return (
    <footer className="bg-white  border-gray-200 ">
      {/* SPONSORS */}
      <div className="bg-(--primary) pt-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.35em] text-(--surface) uppercase mb-12">
            Official Partners
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-12 gap-y-10 items-center justify-items-center">
            {sponsors.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Borneo Anfield Sponsor ${i + 1}`}
                className="h-20 md:h-24 object-contain transition duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* WAVE DIVIDER */}
        <div className="mt-16">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C240,120 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-14">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-(--primary) uppercase">
              Borneo Anfield Stadium
            </h3>

            <p className="text-(--dark) text-sm leading-relaxed mb-6">
              Mini soccer venue dengan fasilitas modern, sistem keselamatan
              lengkap, dan komunitas pemain aktif yang berkembang setiap minggu.
            </p>

            <div className="flex gap-5 text-xl">
              <a href="#" title="Facebook">
                <FaFacebook className="text-(--primary) hover:scale-110 transition cursor-pointer" />
              </a>

              <a href="#" title="Instagram">
                <FaInstagram className="text-(--primary) hover:scale-110 transition cursor-pointer" />
              </a>

              <a href="#" title="YouTube">
                <FaYoutube className="text-(--primary) hover:scale-110 transition cursor-pointer" />
              </a>

              <a href="#" title="TikTok">
                <FaTiktok className="text-(--primary) hover:scale-110 transition cursor-pointer" />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-5 uppercase text-(--primary)">
              Navigation
            </h4>

            <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-(--primary) transition"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-5 uppercase text-(--primary)">
              Stadium Location
            </h4>

            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Borneo%20Anfield&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                title="Borneo Anfield Stadium Location"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/mn9UUstcrxt8ebPA9?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-(--primary) mt-3 inline-block hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 py-6 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Borneo Anfield Stadium — Keeping The Game
          Beautiful.
        </p>
      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/6282121211892"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition"
      >
        <FaWhatsapp className="text-xl" />
        <span className="text-sm font-medium hidden sm:inline">Chat Admin</span>
      </a>
    </footer>
  );
}
