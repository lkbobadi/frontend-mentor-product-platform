import React, { useState } from "react";
import "./App.css";
import "./PurchaseNav.css";
import logo from "../src/images/logo.svg";
import iconcart from "../src/images/icon-cart.svg";
import profileart from "../src/images/image-avatar.png";

export default function Navigation() {
  let [cartPopper, setCartPopper] = useState("");

  function checkCart() {
    setCartPopper("Nothing is in the cart...");
  }
  return (
    <ul className='navigation col-md-6'>
      <div className='collapse-navigation'>
        <div className='navigation-box'>
          <div className='nav-lines'></div>
        </div>
      </div>
      <li>
        <img src={logo} alt='logo' className='logo' />
      </li>
      <li>
        <a href='/collections'>Collections</a>
      </li>
      <li>
        <a href='/men'>Men</a>
      </li>
      <li>
        <a href='/women'>Women</a>
      </li>
      <li>
        <a href='/collections'>About</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
      <li className='push'>
        <img
          src={iconcart}
          alt='cart'
          height={20}
          onClick={checkCart}
          className={`cart-menu ${cartPopper ? "empty" : "full"}`}
        />

        <img
          src={profileart}
          alt='profile icon'
          height={50}
          className='profile-menu'
        />
      </li>
    </ul>
  );
}
