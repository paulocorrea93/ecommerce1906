import React from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id,  productName, price, productImage } = props.data;
  const addToCart = useState(ShopContext)

  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
  )
};

export default Product;
