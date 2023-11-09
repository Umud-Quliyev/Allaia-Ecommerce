import React, { useEffect, useState } from "react";
import style from "./Main_Header.module.scss";
import { MdFavorite, MdOutlineDarkMode, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useDebounce } from "usehooks-ts";
import { AiOutlineShoppingCart } from "react-icons/ai";

function loadCartItems() {
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
}

function Main_Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const debouncedInputText = useDebounce(inputText, 500);
  const [favoriteModalIsOpen, setFavoriteModalIsOpen] = useState(false);
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [addedCart, setAddedCart] = useState(loadCartItems());

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

  const openCartModal = (product) => {
    setAddedProduct(product);
    setCartModalIsOpen(true);
  };

  const closeCartModal = () => {
    setCartModalIsOpen(false);
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
          <li className={style.dropdown}>
            <a className={style.dropbtn} href="">
              Category
            </a>
            <div className={style.dropdown_content}>
              <a href="#">Example 1</a>
              <a href="#">Example 2</a>
              <a href="#">Example 3</a>
            </div>
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
              <div className={style.favoriteproduct}>
                {props.favorites && props.favorites.length > 0 ? (
                  props.favorites.map((favoriteProduct, index) => (
                    <div
                      className={style.product_card}
                      key={favoriteProduct.id}
                    >
                      <div
                        className={style.product_thumb}
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                      >
                        <img
                          src={
                            hoveredProduct === index
                              ? favoriteProduct.images.image2
                              : favoriteProduct.images.image1
                          }
                          alt=""
                        />
                      </div>
                      <div className={style.product_details}>
                        <div className={style.d_title}>
                          <span className={style.product_catagory}>
                            {favoriteProduct.brand}
                          </span>
                          <p>Ratings: {favoriteProduct.rating}</p>
                        </div>

                        <h4>
                          <a href="">{favoriteProduct.name}</a>
                        </h4>
                        <p>{favoriteProduct.description}</p>
                        <div className={style.product_bottom_details}>
                          <div className={style.product_price}>
                            <span>
                              ${favoriteProduct.price}.00
                              <sup>
                                <small>
                                  {favoriteProduct.discountPercentage}
                                </small>
                              </sup>
                            </span>
                          </div>
                          <div className={style.product_links}>
                            <a href="">
                              <AiOutlineShoppingCart />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No favorite products yet.</p>
                )}
              </div>
            </div>
            <button onClick={closeFavoriteModal} className={style.close}>
              Close
            </button>
          </Modal>
          <AiOutlineShoppingCart onClick={openCartModal} />
          <p className={style.shoppingsize}>
            {props.addedCart && props.addedCart.length}
          </p>

          <Modal
            isOpen={cartModalIsOpen}
            onRequestClose={closeCartModal}
            style={customStyles}
          >
            <div>
              <h2>Added Products</h2>
              <div className={style.favoriteproduct}>
                {props.addedCart && props.addedCart.length > 0 ? (
                  props.addedCart.map((addedCartProduct, index) => (
                    <div
                      className={style.product_card}
                      key={addedCartProduct.id}
                    >
                      <div
                        className={style.product_thumb}
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                      >
                        <img
                          src={
                            hoveredProduct === index
                              ? addedCartProduct.images.image2
                              : addedCartProduct.images.image1
                          }
                          alt=""
                        />
                      </div>
                      <div className={style.product_details}>
                        <div className={style.d_title}>
                          <span className={style.product_catagory}>
                            {addedCartProduct.brand}
                          </span>
                          <p>Ratings: {addedCartProduct.rating}</p>
                        </div>

                        <h4>
                          <a href="">{addedCartProduct.name}</a>
                        </h4>
                        <p>{addedCartProduct.description}</p>
                        <div className={style.product_bottom_details}>
                          <div className={style.product_price}>
                            <span>
                              ${addedCartProduct.price}.00
                              <sup>
                                <small>
                                  {addedCartProduct.discountPercentage}
                                </small>
                              </sup>
                            </span>
                          </div>
                          <div className={style.product_links}>
                            <a href="">
                              <AiOutlineShoppingCart />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No added products yet.</p>
                )}
              </div>
            </div>
            <div className={style.buttons}>
              <button onClick={closeCartModal} className={style.close}>
                Close
              </button>
              {
                <button onClick={closeCartModal} className={style.close}>
                  Submit
                </button>
              }
            </div>
          </Modal>
          <MdMenu onClick={toggleMenu} className={style.menuIcon} />
        </span>
      </div>
    </div>
  );
}

export default Main_Header;
