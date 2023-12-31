import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Shop</Link>
        <Link to={"/cart"}>
          <ShoppingCart/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
