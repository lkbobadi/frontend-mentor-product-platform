import React, { useState } from "react";
import "./App.css";
import "./PurchaseNav.css";
import logo from "../src/images/logo.svg";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import PurchaseNav from "./PurchaseNav";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState("false");
  let [menu, setMenu] = useState("translateX(0%)");

  function openMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen === true) {
      setMenu("translateX(0%)");
    } else {
      setMenu("translateX(-100%)");
    }
  }
  return (
    <>
      <div className='navburger'>
        <IconContext.Provider
          value={{
            color: "white",
            size: "1.2em",
            className: "global-class-name",
          }}
        >
          <GiHamburgerMenu onClick={openMenu} />
        </IconContext.Provider>
      </div>
      <ul
        className={`navigation col-md-6 ${isMenuOpen ? "" : "translateX(0%)"}`}
        style={{ transform: menu }}
      >
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
    </>
  );
}
