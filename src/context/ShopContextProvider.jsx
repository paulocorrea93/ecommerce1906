import React, { createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = () => {
  return <div>Shop-Context</div>;
};

export default ShopContextProvider;
