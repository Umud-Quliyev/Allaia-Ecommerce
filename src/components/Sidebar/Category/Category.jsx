import style from "../Category/Category.module.css";
import Input from "../../Input/Input.jsx";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className={style.sidebar_title}>Category</h2>

      <div>
        <label className={style.sidebar_label_container}>
          <input
            onChange={() => handleChange(null, null, null, null)}
            type="radio"
            value=""
            name="test"
          />
          <span className={style.checkmark}></span>All
        </label>
        <Input
          onChange={() => handleChange("sneakers", null, null)}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          onChange={() => handleChange("flats", null, null, null)}
          value="flats"
          title="Flats"
          name="test"
          category="flats"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
