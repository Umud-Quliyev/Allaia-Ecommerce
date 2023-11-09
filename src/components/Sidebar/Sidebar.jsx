import React, { useEffect } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import style from "./Sidebar.module.css";
import Aos from "aos";

const Sidebar = ({ handleChange }) => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <section data-aos="fade-left" className={style.sidebar}>
        <div className={style.logo_container}>
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
