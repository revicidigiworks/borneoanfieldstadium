import { createContext, useContext, useEffect, useState } from "react";

/* ================= TYPES ================= */
type Lang = "id" | "en";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

/* ================= CONTEXT ================= */
const LanguageContext = createContext<LangContextType | null>(null);

/* ================= PROVIDER ================= */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  // load dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLangState(saved);
  }, []);

  // simpan ke localStorage
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleLang = () => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/* ================= HOOK ================= */
export function useLang() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLang must be used inside LangProvider");
  }

  return context;
}