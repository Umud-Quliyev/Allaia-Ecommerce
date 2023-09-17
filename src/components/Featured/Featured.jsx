import React from "react";
import style from "./Featured.module.css";

function Featured() {
  return (
    <div className={style.featured}>
      <div className={style.opacity}>
        <div>
          <h1>
            ARMOR <br />
            AIR COLOR 720
          </h1>
          <p>
            Lightweight cushioning and durable support with a Phylon midsole
          </p>
          <span>
            $90.00 <sub>$170.00</sub>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
