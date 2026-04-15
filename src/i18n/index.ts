import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/* AUTO LOAD ALL JSON VIA VITE */
const modules = import.meta.glob("./locales/**/*.json", { eager: true });

function buildResources() {
  const resources: any = {};

  Object.keys(modules).forEach((path) => {
    const match = path.match(/locales\/(.*)\/(.*)\.json$/);

    if (!match) return;

    const lang = match[1]; // id / en
    const ns = match[2];   // common / navbar / etc

    if (!resources[lang]) {
      resources[lang] = {};
    }

    resources[lang][ns] = (modules[path] as any).default;
  });

  return resources;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: buildResources(),

    fallbackLng: "id",
    lng: "id",

    ns: [
      "common",
      "navbar",
      "footer",
      "home",
      "program",
      "contact",
      "services",
      "facilities",
      "about",
      "bookingrules",
      "ecosystem",
      "pricelist",
      "schedule",
    ],

    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;