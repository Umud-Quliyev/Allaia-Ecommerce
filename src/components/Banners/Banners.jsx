import React from "react";
import style from "./Banners.module.css";

function Banners() {
  return (
    <div className={style.banners}>
      <ul>
        <li>
          <img src="http://www.ansonika.com/allaia/img/banner_1.jpg" alt="" />
          <div className={style.bannerTitle}>MEN'S COLLECTION</div>
          <div className={style.bannerOverlay}>
            <button className={style.bannerButton}>Shop Now</button>
          </div>
        </li>
        <li>
          <img src="http://www.ansonika.com/allaia/img/banner_2.jpg" alt="" />
          <div className={style.bannerTitle}>WOMEN'S COLLECTION</div>
          <div className={style.bannerOverlay}>
            <button className={style.bannerButton}>Shop Now</button>
          </div>
        </li>
        <li>
          <img src="http://www.ansonika.com/allaia/img/banner_3.jpg" alt="" />
          <div className={style.bannerTitle}>KID'S COLLECTION</div>
          <div className={style.bannerOverlay}>
            <button className={style.bannerButton}>Shop Now</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Banners;
