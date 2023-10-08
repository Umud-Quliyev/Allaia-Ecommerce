import React, { useEffect, useState } from "react";
import style from "./Main_Header.module.css";
import { MdFavorite, MdOutlineDarkMode, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Product_Details from "../Products_Details/Product_Details";
import Products from "../Products/Products";
import Modal from "react-modal";
import { useDebounce } from "usehooks-ts";

function Main_Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const debouncedInputText = useDebounce(inputText, 500);
  const [favoriteModalIsOpen, setFavoriteModalIsOpen] = useState(false);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    fetch("https://651461f4dc3282a6a3cd1852.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  useEffect(() => {
    const filteredData = data.filter((el) => {
      if (debouncedInputText === "") {
        return true;
      }
      return (
        el.name.toLowerCase().includes(debouncedInputText) ||
        el.description.toLowerCase().includes(debouncedInputText)
      );
    });
    props.onSearch(filteredData);
  }, [debouncedInputText, data]);

  const customStyles = {
    content: {
      backgroundColor: "#fff",
      zIndex: "1000",
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

  const openFavoriteModal = () => {
    setFavoriteModalIsOpen(true);
  };

  const closeFavoriteModal = () => {
    setFavoriteModalIsOpen(false);
  };

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
        <input
          type="text"
          placeholder="Search Products"
          onChange={inputHandler}
        />
        <span>
          <MdFavorite onClick={openFavoriteModal} />
          <Modal
            isOpen={favoriteModalIsOpen}
            onRequestClose={closeFavoriteModal}
            style={customStyles}
          >
            <div>
              <h2>Favorite Products</h2>
              <ul>
                {props.favorites && props.favorites.length > 0 ? (
                  props.favorites.map((favoriteProduct, index) => (
                    <li key={index}>
                      {favoriteProduct.name} - {favoriteProduct.description}
                    </li>
                  ))
                ) : (
                  <p>No favorite products yet.</p>
                )}
              </ul>

              <button onClick={closeFavoriteModal}>Close</button>
            </div>
          </Modal>
          <MdOutlineDarkMode />
          <MdMenu onClick={toggleMenu} className={style.menuIcon} />
        </span>
      </div>
    </div>
  );
}

export default Main_Header;
