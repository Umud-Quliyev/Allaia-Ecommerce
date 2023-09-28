import React, { useState } from "react";
import style from "./Main_Header.module.css";
import { MdFavorite, MdOutlineDarkMode, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Product_Details from "../Products_Details/Product_Details";
import Products from "../Products/Products";

function Main_Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={style.container}>
      <div>
        <Link to={"/"}>
          <img src="http://www.ansonika.com/allaia/img/logo.svg" alt="logo" />
        </Link>
      </div>
      <div>
        <ul className={isMenuOpen ? style.menuOpen : ""}>
          <li>
            <Link to={"/"}>
              <a href="">Home</a>
            </Link>
          </li>
          <li>
            <a href="">Category</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <Link to={"/Products"}>
              <a href="">All Products</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.search_bar}>
        <input type="text" placeholder="Search Products" />
        <span>
          <MdFavorite />
          <MdOutlineDarkMode />
          <MdMenu onClick={toggleMenu} className={style.menuIcon} />
        </span>
      </div>
    </div>
  );
}

export default Main_Header;
