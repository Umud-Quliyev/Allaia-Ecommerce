// Price.js
import React from "react";
import Input from "../../Input/Input.jsx";
import style from "./Price.module.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className={style.ml}>
        <h2 className={`${style.sidebar_title} ${style.price_title}`}>Price</h2>
        <label className={style.sidebar_label_container}>
          <input
            onChange={() => handleChange(null, null, null, null)}
            type="radio"
            value=""
            name="test2"
          />
          <span className={style.checkmark}></span>All
        </label>

        <Input
          handleChange={() => handleChange(null, 50, 100, null)}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          handleChange={() => handleChange(null, 100, 150, null)}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          handleChange={() => handleChange(null, 150, 200, null)}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          handleChange={() => handleChange(null, 200, null, null)}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
