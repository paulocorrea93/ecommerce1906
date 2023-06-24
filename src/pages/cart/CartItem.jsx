import React, { useContext } from "react";
import ShopContextProvider from "../../context/ShopContextProvider";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {cartItems} = useContext(ShopContextProvider)

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button>-</button>
          <input value={cartItems[id]} />
          <button>+</button>
        </div>
      </div>
    </div>
  );  
};

export default CartItem;
