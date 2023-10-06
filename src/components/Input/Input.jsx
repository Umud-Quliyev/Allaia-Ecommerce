import style from "../Sidebar/Category/Category.module.css";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className={style.sidebar_label_container}>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span
        className={style.checkmark}
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
