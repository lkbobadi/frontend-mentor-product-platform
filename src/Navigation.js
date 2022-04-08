import React from "react";
import "./App.css";
import "./PurchaseNav.css";
import logo from "../src/images/logo.svg";
import PurchaseNav from "./PurchaseNav";

export default function Navigation() {
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

      <PurchaseNav />
    </ul>
  );
}
