import React, { useState } from "react";
import "./PurchaseNav.css";
import iconcart from "../src/images/icon-cart.svg";
import profileart from "../src/images/image-avatar.png";

export default function PurchaseNav() {
  let [cartPopper, setCartPopper] = useState("");

  function checkCart() {
    setCartPopper("Nothing is in the cart...");
  }
  return (
    <div className='purchase-navigation col-md-6'>
      <ul className='purchase-links'>
        <li>
          <img
            src={iconcart}
            alt='cart'
            height={20}
            onClick={checkCart}
            className={`cart-menu ${cartPopper ? "empty" : "full"}`}
          />
        </li>
        <li>
          <img
            src={profileart}
            alt='profile icon'
            height={50}
            className='profile-menu'
          />
        </li>
      </ul>
    </div>
  );
}
