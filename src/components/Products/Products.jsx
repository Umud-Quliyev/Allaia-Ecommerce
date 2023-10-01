import React, { useEffect, useState } from "react";
import Main_Header from "../Main_Header/Main_Header";
import Footer from "../Footer/Footer";
import style from "./Products.module.css";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    setSearchResults(products);
  }, [products]);

  return (
    <>
      <Main_Header data={products} onSearch={handleSearch} />

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
                <span className={style.product_catagory}>{info.category}</span>
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

      <Footer />
    </>
  );
}

export default Products;
