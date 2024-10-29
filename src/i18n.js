import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-IN",
    debug: true,
    returnObjects: true,
    resources: {
      "en-IN": {
        translation: require("./locales/en-IN.json"),
      },
      ar: {
        translation: require("./locales/ar.json"),
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

/* How to fetch from server

npm install i18next-http-backend

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Load translations from the server
  .use(LanguageDetector) // Detect the user’s language
  .use(initReactI18next) // Integrate with React
  .init({
    fallbackLng: "en-IN",
    debug: false,
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to fetch translations
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

*/

/* Pluralization and Formatting
{
    "key_one": "1 item",
    "key_other": "{{count}} items"
  }

  How to use: return <p>{t("key", { count: itemCount })}</p>;
*/
