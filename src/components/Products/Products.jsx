import React, { useEffect, useState } from "react";
import style from "./Products.module.css";
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

function Products() {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    fetch("https://651461f4dc3282a6a3cd1852.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className={style.title}>
        <h2>Top Selling</h2>
        <span>Products</span>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
      </div>
      <div className={style.products}>
        {products.map((info, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
