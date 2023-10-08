import React from "react";
import style from "./Colors.module.css";
import Input from "../../Input/Input.jsx";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className={style.filtercolor}>
        <h2 className={`${style.sidebar_title} ${style.color_title}`}>
          Colors
        </h2>
        <label className={style.sidebar_label_container}>
          <input
            onChange={() => handleChange(null, null, null, null)}
            type="radio"
            value=""
            name="test1"
          />
          <span className={style.checkmark}></span>All
        </label>

        <Input
          handleChange={() => handleChange(null, null, null, "black")}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={() => handleChange(null, null, null, "blue")}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={() => handleChange(null, null, null, "red")}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={() => handleChange(null, null, null, "green")}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className={style.sidebar_label_container}>
          <input
            onChange={() => handleChange(null, null, null, "white")}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className={style.checkmark}
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
