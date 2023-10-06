import React, { useState } from "react";
import style from "./Main_Header.module.css";
import { MdFavorite, MdOutlineDarkMode, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Product_Details from "../Products_Details/Product_Details";
import Products from "../Products/Products";
import Modal from "react-modal";

function Main_Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      width: "90%",
      height: "450px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="">Category</a>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <Link to={"/products"}>All Products</Link>
          </li>
        </ul>
      </div>
      <div className={style.search_bar}>
        <input type="text" placeholder="Search Products" />
        <span>
          <MdFavorite onClick={openModal} />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            onFavoritedResort="handlFavoriteResort"
          ></Modal>
          <MdOutlineDarkMode />
          <MdMenu onClick={toggleMenu} className={style.menuIcon} />
        </span>
      </div>
    </div>
  );
}

export default Main_Header;
