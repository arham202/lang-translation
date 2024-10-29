import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t("footer.contact")}</p>
      <p>{t("footer.rights")}</p>
    </footer>
  );
};

export default Footer;
