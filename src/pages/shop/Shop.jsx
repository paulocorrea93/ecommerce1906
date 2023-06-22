import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Paulo Correa Tech</h1>
      </div>
      <div className="produtcs">
        {PRODUCTS.map((product) => (
          <Product dat={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
