"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuControl = () => {
    setMenu(!menu);
  };

  return (
    <nav className="nav-main">
      <div className="logo-div">
        <h2 className="logo text-yellow-500">
          D<span>K</span>
        </h2>
      </div>
      <div className="menu-div" onClick={menuControl}>
        {menu ? (
          <AiOutlineClose className="close-icon" />
        ) : (
          <AiOutlineMenuFold className="open-icon" />
        )}
      </div>
      <ul className={menu ? "openMenu" : "openMenu closeMenu"}>
        <Link href="#about">
          <li onClick={menuControl} className="nav_bg_1">
            About
          </li>
        </Link>
        <Link href="#skills">
          <li onClick={menuControl} className="nav_bg_2">
            Skills
          </li>
        </Link>
        <Link href="#projects">
          <li onClick={menuControl} className="nav_bg_3">
            Project
          </li>
        </Link>
        <Link href="#contact">
          <li onClick={menuControl}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
