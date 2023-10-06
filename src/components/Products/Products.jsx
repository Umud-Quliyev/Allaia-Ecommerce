import React, { useEffect, useState } from "react";
import Main_Header from "../Main_Header/Main_Header";
import Footer from "../Footer/Footer";
import style from "./Products.module.css";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Products() {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: null,
    price: {
      "min-value": null,
      "max-value": null,
    },
    color: null,
  });

  const handleSearch = (filteredData) => {
    setSearchResults(filteredData);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetch("https://651461f4dc3282a6a3cd1852.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchResults(data);
      });
  }, []);

  useEffect(() => {
    console.log("Products:", products);
    console.log("Filters:", filters);
    setSearchResults(filterProducts());
  }, [products, filters]);

  const handleFilterChange = (category, minPrice, maxPrice, color) => {
    setFilters({
      category,
      price: { "min-value": minPrice, "max-value": maxPrice },
      color,
    });
  };

  const filterProducts = () => {
    let filteredData = [...products];

    if (filters.category) {
      filteredData = filteredData.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.color) {
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

  return (
    <>
      <Main_Header data={products} onSearch={handleSearch} />

      <div className={style.mainn}>
        <div className={style.sidebarr}>
          <Sidebar handleChange={handleFilterChange} />
        </div>

        <div className={style.products}>
          {searchResults.length === 0 && (
            <div className={style.not_found}>
              <h1>Not Found</h1>
            </div>
          )}

          {searchResults.map((info, index) => (
            <div className={style.product_card} key={info.id}>
              <div className={style.badge}>Hot</div>
              <div
                className={style.product_thumb}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  src={
                    hoveredProduct === index
                      ? info.images.image2
                      : info.images.image1
                  }
                  alt=""
                />
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
                    <a href="">
                      <AiFillHeart />
                    </a>
                    <a href="">
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

      <Footer />
    </>
  );
}

export default Products;
