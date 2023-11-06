import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import style from "./Sidebar.module.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className={style.sidebar}>
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
