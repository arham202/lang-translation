import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const { i18n } = useTranslation();
  const [currency, setCurrency] = useState("INR");

  const browserLocale = navigator.language || "en-IN";
  const languageCode = browserLocale.split("-")[0];
  const initialLocale = languageCode === "ar" ? "ar-SA" : "en-IN";
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    i18n.changeLanguage(languageCode);
    const newCurrency = languageCode === "ar" ? "SAR" : "INR";
    setCurrency(newCurrency);
    setLocale(initialLocale);
  }, [i18n, initialLocale, languageCode]);

  const handleLanguageChange = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang);
    setLocale(lang === "ar" ? "ar-SA" : "en-IN");

    const newCurrency = lang === "ar" ? "SAR" : "INR";
    setCurrency(newCurrency);
  };

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="container">
      <Header
        onLanguageChange={handleLanguageChange}
        onCurrencyChange={setCurrency}
        currency={currency}
      />
      <Home currency={currency} locale={locale} />
      {/* <input
        type="text"
        placeholder="أدخل النص هنا" // Arabic placeholder text
        lang="ar"
        autoComplete="off"
      /> */}
      <Footer />
    </div>
  );
}

export default App;
