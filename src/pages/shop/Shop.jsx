import React from "react";
import { PRODUCTS } from "../../products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Paulo Correa Tech</h1>
      </div>
      <div className="produtcs">
        {PRODUCTS.map((product) => (
          <Product />
        ))}
      </div>
    </div>
  );
};

export default Shop;
