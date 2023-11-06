import React, { useEffect, useState } from "react";
import Main_Header from "../Main_Header/Main_Header";
import Footer from "../Footer/Footer";
import style from "./Products.module.scss";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { addToFavorites } from "../../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";

function saveCartItems(cartItems) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function loadCartItems() {
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
}

function Products() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const itemsPerPage = 3;
  const [filters, setFilters] = useState({
    category: null,
    price: {
      "min-value": null,
      "max-value": null,
    },
    color: null,
  });

  useEffect(() => {
    fetch("https://651461f4dc3282a6a3cd1852.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchResults(data);
      });
  }, []);

  useEffect(() => {
    setSearchResults(filterProducts());
  }, [products, filters]);

  const handleSearch = (filteredData) => {
    setSearchResults(filteredData);
    setCurrentPage(1);
  };

  const [favorite, setFavorites] = useState([]);

  const handleAddToFavorites = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      dispatch(addToFavorites(product));
      setSnackbarMessage("Product added to favorites");
      setShowSnackbar(true);
    } else {
      dispatch(removeFromFavorites(product));
      setSnackbarMessage("Product removed from favorites");
      setShowSnackbar(true);
    }
  };

  function loadCartItems() {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  }

  const [addedCart, setAddedCart] = useState(loadCartItems());

  const handleAddToAddedCart = (product) => {
    if (!addedCart.some((add) => add.id === product.id)) {
      const updatedCart = [...addedCart, product];
      setAddedCart(updatedCart);
      saveCartItems(updatedCart);
      setSnackbarMessage("Product added to cart");
      setShowSnackbar(true);
    } else {
      const updatedAdded = addedCart.filter((add) => add.id !== product.id);
      setAddedCart(updatedAdded);
      saveCartItems(updatedAdded);
      setSnackbarMessage("Product removed from cart");
      setShowSnackbar(true);
    }
  };

  const handleFilterChange = (category, minPrice, maxPrice, color) => {
    setFilters({
      category,
      price: { "min-value": minPrice, "max-value": maxPrice },
      color,
    });
  };

  const filterProducts = () => {
    let filteredData = [...products];

    if (filters.category !== null) {
      filteredData = filteredData.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.color !== null) {
      filteredData = filteredData.filter(
        (product) => product.color === filters.color
      );
    }

    if (
      filters.price &&
      (filters.price["min-value"] !== null ||
        filters.price["max-value"] !== null)
    ) {
      const minPrice = filters.price["min-value"];
      const maxPrice = filters.price["max-value"];

      filteredData = filteredData.filter((product) => {
        const productPrice = product.price;
        return (
          (minPrice == null || productPrice >= minPrice) &&
          (maxPrice == null || productPrice <= maxPrice)
        );
      });
    }

    return filteredData;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = searchResults.slice(startIndex, endIndex);

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Main_Header
        data={products}
        onSearch={handleSearch}
        favorites={favorites}
        addedCart={addedCart}
        updateFavorites={setFavorites}
      />

      <div className={style.mainn}>
        <div className={style.sidebarr}>
          <Sidebar handleChange={handleFilterChange} />
        </div>

        <div className={style.products}>
          {displayedProducts.length === 0 && (
            <div className={style.not_found}>
              <h1>Not Found</h1>
            </div>
          )}

          {displayedProducts.map((info, index) => (
            <div className={style.product_card} key={info.id}>
              <div className={style.product_thumb}>
                <img src={info.images.image1} alt="" />
              </div>
              <div className={style.product_details}>
                <div className={style.d_title}>
                  <span className={style.product_catagory}>{info.brand}</span>
                  <p>Ratings: {info.rating}</p>
                </div>

                <h4>
                  <a href="">{info.name}</a>
                </h4>
                <p>{info.description}</p>
                <div className={style.product_bottom_details}>
                  <div className={style.product_price}>
                    <span>
                      ${info.price}.00
                      <sup>
                        <small>{info.discountPercentage}</small>
                      </sup>
                    </span>
                  </div>
                  <div className={style.product_links}>
                    <a
                      href="#"
                      onClick={() => handleAddToFavorites(info)}
                      style={{
                        color: favorites.some((fav) => fav.id === info.id)
                          ? "#fbb72c"
                          : "#e1e1e1",
                      }}
                    >
                      <AiFillHeart />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        handleAddToAddedCart(info);
                      }}
                      style={{
                        color: addedCart.some((add) => add.id === info.id)
                          ? "#fbb72c"
                          : "#e1e1e1",
                      }}
                    >
                      <AiOutlineShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.details}>
                <Link to={`/product_detail/${info.id}`}>
                  <button className={style.moreinfo}>More info..</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.pagination}>
        <a
          href="#"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Previous
        </a>
        {Array.from({ length: totalPages }).map((_, index) => (
          <a
            href="#"
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </a>
        ))}
        <a
          href="#"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </a>
      </div>

      <div className={style.toast}>
        {showSnackbar && (
          <figure className={style.notification}>
            <div className={style.notification__body}>
              <div className={style.notification__description}>
                <div className={style.icon__wrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
                {snackbarMessage}
              </div>
            </div>
            <div className={style.notification__progress}></div>
          </figure>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Products;
