import React from "react";
import { useTranslation } from "react-i18next";

const Header = ({ onLanguageChange, onCurrencyChange, currency }) => {
  const { t } = useTranslation();

  console.log(t("header"));
  const header = t("header");

  return (
    <header>
      <h1>{t("header.title")}</h1>
      {/* <h1>{header.title}</h1> */}
      <div className="currency-select">
        <label>
          {t("header.currency")}
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            <option value="INR">INR</option>
            <option value="SAR">SAR</option>
          </select>
        </label>
      </div>
      <div className="language-buttons">
        <button onClick={() => onLanguageChange("en-IN")}>English</button>
        <button onClick={() => onLanguageChange("ar")}>Arabic</button>
      </div>
    </header>
  );
};

export default Header;
