import React from "react";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "../utils/formatting";

const ProductCard = ({ product, currency, locale }) => {
  const { t } = useTranslation();
  const formattedPrice = formatCurrency(product.price, locale, currency);

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{t("product.description")}</p>
      {/* <p>{t("product.price", { price: formattedPrice })}</p> */}
      <p>{t("product.price", { price: product.price, currency })}</p>
      <button>{t("product.buy_now")}</button>
    </div>
  );
};

export default ProductCard;
