import React, { useEffect, useState } from "react";
import style from "./Products.module.css";
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
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
        {products.map((info) => (
          <div className={style.product_card}>
            <div className={style.badge}>Hot</div>
            <div className={style.product_thumb}>
              <img src={info.thumbnail} alt="" />
            </div>
            <div className={style.product_details}>
              <div className={style.d_title}>
                <span className={style.product_catagory}>{info.category}</span>
                <p>Ratings: {info.rating}</p>
              </div>

              <h4>
                <a href="">{info.title}</a>
              </h4>
              <p>{info.description}</p>
              <div className={style.product_bottom_details}>
                <div className={style.product_price}>
                  {info.price}
                  <sup>
                    <small>{info.discountPercentage}</small>
                  </sup>
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
