import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Product 1", price: 500 },
  { name: "Product 2", price: 1500 },
];

const Home = ({ currency, locale }) => {
  return (
    <main>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          currency={currency}
          locale={locale}
        />
      ))}
    </main>
  );
};

export default Home;
