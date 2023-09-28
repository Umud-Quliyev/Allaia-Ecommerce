import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Product_Details.module.css";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Main_Header from "../Main_Header/Main_Header";
import Footer from "../Footer/Footer";

function Product_Details() {
  const { productId } = useParams();
  const [hoveredProduct, setHoveredProduct] = useState(false);
  const [productsDetails, setProductsDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://651461f4dc3282a6a3cd1852.mockapi.io/api/v1/products/${productId}`
    )
      .then((res) => res.json())
      .then((data) => setProductsDetails(data));
  }, [productId]);

  if (!productsDetails.id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Main_Header />
      <div className={style.a}>
        <div className={style.product_card} key={productsDetails.id}>
          <div className={style.badge}>Hot</div>
          <div
            className={style.product_thumb}
            onMouseEnter={() => setHoveredProduct(true)}
            onMouseLeave={() => setHoveredProduct(false)}
          >
            <img
              src={
                hoveredProduct
                  ? productsDetails.images.image2
                  : productsDetails.images.image1
              }
              alt=""
            />
          </div>
          <div className={style.product_details}>
            <div className={style.d_title}>
              <span className={style.product_catagory}>
                {productsDetails.category}
              </span>
              <p>Ratings: {productsDetails.rating}</p>
            </div>

            <h4>
              <a href="">{productsDetails.name}</a>
            </h4>
            <p>{productsDetails.description}</p>
            <div className={style.product_bottom_details}>
              <div className={style.product_price}>
                <span>
                  ${productsDetails.price}.00
                  <sup>
                    <small>{productsDetails.discountpercentage}</small>
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
            <button className={style.moreinfo}>Buy Now</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product_Details;
