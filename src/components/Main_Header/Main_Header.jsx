import React, { useState } from "react";
import style from "./Main_Header.module.css";
import { MdFavorite, MdOutlineDarkMode, MdMenu } from "react-icons/md";

function Main_Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.container}>
      <div>
        <img src="http://www.ansonika.com/allaia/img/logo.svg" alt="logo" />
      </div>
      <div>
        <ul className={isMenuOpen ? style.menuOpen : ""}>
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
            <a href="">All Products</a>
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
