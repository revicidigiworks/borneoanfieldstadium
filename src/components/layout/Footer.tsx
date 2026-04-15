import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";


import sponsor1 from "../../assets/images/sponsors/sponsor1.png";
import sponsor2 from "../../assets/images/sponsors/sponsor2.png";
import sponsor3 from "../../assets/images/sponsors/sponsor3.png";
import sponsor4 from "../../assets/images/sponsors/sponsor4.png";
import sponsor5 from "../../assets/images/sponsors/sponsor5.png";
import sponsor6 from "../../assets/images/sponsors/sponsor6.png";
import sponsor7 from "../../assets/images/sponsors/ph.png";

export function Footer() {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7];

  const { t } = useTranslation("footer");
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

  return (
    <footer className="bg-white  border-gray-200 ">
{/* SPONSORS - PREMIUM MARQUEE */}
<section className="bg-(--primary) py-16 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 mb-10">
    <p className="text-center text-xs tracking-[0.35em] text-(--surface) uppercase">
      Part Of
    </p>
  </div>

  <div className="relative">
    {/* GRADIENT FADE KIRI */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-(--primary) to-transparent z-10" />

    {/* GRADIENT FADE KANAN */}
    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-(--primary) to-transparent z-10" />

    {/* MARQUEE TRACK */}
    <div className="flex w-max animate-marquee gap-16 items-center">
      {[...sponsors, ...sponsors].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`Sponsor ${i + 1}`}
          className="h-16 md:h-20 w-[320px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
        />
      ))}
    </div>
  </div>
</section>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-14">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-(--primary) uppercase">
              Borneo Anfield Stadium
            </h3>

            <p className="text-(--dark) text-sm leading-relaxed mb-6">
              {t("brand_desc")}
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
              {t("navigation")}
            </h4>

            <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600">
{navItems.map((item) => (
  <NavLink
    key={item.path}
    to={item.path}
    className="hover:text-(--primary) transition"
  >
    {item.label}
  </NavLink>
))}
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide mb-5 uppercase text-(--primary)">
              {t("location")}
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
              {t("open_maps")}
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
