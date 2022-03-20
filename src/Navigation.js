import React from "react";
import "./App.css";
import "./PurchaseNav.css";
import logo from "../src/images/logo.svg";
import PurchaseNav from "./PurchaseNav";

export default function Navigation() {
  return (
    <ul className='navigation col-md-6'>
      <li>
        <img src={logo} alt='logo' className='logo' />
      </li>
      <li>
        <a href='/collections'>Collections</a>
      </li>
      <li>
        <a href='/collections'>Men</a>
      </li>
      <li>
        <a href='/collections'>Women</a>
      </li>
      <li>
        <a href='/collections'>About</a>
      </li>
      <li>
        <a href='/collections'>Contact</a>
      </li>

      <PurchaseNav />
    </ul>
  );
}
