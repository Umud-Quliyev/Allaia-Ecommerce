import style from "../Category/Category.module.css";
import Input from "../../Input/Input.jsx";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className={style.sidebar_title}>Category</h2>

      <div>
        <label className={style.sidebar_label_container}>
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className={style.checkmark}></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
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
