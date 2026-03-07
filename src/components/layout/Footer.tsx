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
    <footer className="bg-[#f8fafc] border-t border-gray-200 mt-24">
      {/* SPONSOR MARQUEE */}
      <div className="overflow-hidden border-b border-gray-200 py-10">
        <p className="text-center text-xs tracking-[0.35em] text-gray-500 uppercase mb-8">
          Official Partners
        </p>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee gap-16 min-w-full">
            {[...sponsors, ...sponsors].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-12 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-14">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Borneo Anfield</h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Mini soccer venue dengan fasilitas modern, sistem keselamatan
              lengkap, dan komunitas pemain aktif yang berkembang setiap minggu.
            </p>

            <div className="flex gap-5 text-xl">
              <FaFacebook className="text-[#00C5C8] hover:scale-110 transition cursor-pointer" />
              <FaInstagram className="text-[#00C5C8] hover:scale-110 transition cursor-pointer" />
              <FaYoutube className="text-[#00C5C8] hover:scale-110 transition cursor-pointer" />
              <FaTiktok className="text-[#00C5C8] hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-5 uppercase text-gray-500">
              Navigation
            </h4>

            <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-[#00C5C8] transition"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-5 uppercase text-gray-500">
              Stadium Location
            </h4>

            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Borneo%20Anfield&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                loading="lazy"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/mn9UUstcrxt8ebPA9?g_st=awb"
              target="_blank"
              className="text-sm text-[#00C5C8] mt-3 inline-block hover:underline"
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
