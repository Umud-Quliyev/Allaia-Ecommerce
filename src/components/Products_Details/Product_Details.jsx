import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Product_Details.module.css";
import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import Main_Header from "../Main_Header/Main_Header";
import Footer from "../Footer/Footer";
import Select from "react-select";

function Product_Details() {
  const { productId } = useParams();
  const [hoveredProduct, setHoveredProduct] = useState(false);
  const [productsDetails, setProductsDetails] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [count, setCount] = useState(0);

  const options = [
    { value: "s", label: "Small (S)" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
  ];

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

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <>
      <Main_Header />

      <div className={style.productsdetails}>
        <div className={style.detailtitle}>
          <ul>
            <li>
              <a href="">Home</a> <AiOutlineRight />
            </li>
            <li>
              <a href="">Category</a>
              <AiOutlineRight />
            </li>
            <li>Page Active</li>
          </ul>
          <h1>{productsDetails.name}</h1>
        </div>
        <div>
          <img src={productsDetails.images.image1} alt="" />
        </div>
        <div className={style.description}>
          <div className={style.desc}>
            <div className={style.rating}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p>
                <em>4 reviews</em>
              </p>
            </div>
            <small>SKU: MTKRY-001</small>
            <p>{productsDetails.description}</p>
          </div>
          <div className={style.select}>
            <div className={style.color}>
              <h1>Color</h1>
              <ul>
                <li className={style.color1}>
                  <a href=""></a>
                </li>
                <li className={style.color2}>
                  <a href=""></a>
                </li>
                <li className={style.color3}>
                  <a href=""></a>
                </li>
                <li className={style.color4}>
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div className={style.size}>
              <h1>SIZE - Size Guide</h1>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className={style.select}
              />
            </div>
            <div className={style.quantity}>
              <h1>QUANTITY</h1>
              <div className={style.counter}>
                <button onClick={decrement}>
                  <span>-</span>
                </button>
                <p>{count}</p>
                <button onClick={increment}>
                  <span>+</span>
                </button>
              </div>
            </div>
            <div className={style.price}>
              <div>
                <span className={style.newprice}>${productsDetails.price}</span>
                <span className={style.percentage}>-20%</span>
                <span className={style.oldprice}>
                  ${productsDetails.discountpercentage}{" "}
                </span>
              </div>
              <div className={style.add}>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.details}>
          <div className={style.detail_desc}>
            <h1>Details</h1>
            <p>
              Lorem ipsum dolor sit amet, in eleifend
              <strong>inimicus elaboraret</strong> his, harum efficiendi mel ne.
              Sale percipit vituperata ex mel, sea ne essent aeterno sanctus,
              nam ea laoreet civibus electram. Ea vis eius explicari. Quot
              iuvaret ad has.
            </p>
            <p>
              Vis ei ipsum conclusionemque. Te enim suscipit recusabo mea, ne
              vis mazim aliquando, everti insolens at sit. Cu vel modo unum
              quaestio, in vide dicta has. Ut his laudem explicari adversarium,
              nisl <strong>laboramus hendrerit</strong> te his, alia lobortis
              vis ea.
            </p>
            <p>
              Perfecto eleifend sea no, cu audire voluptatibus eam. An alii
              praesent sit, nobis numquam principes ea eos, cu autem constituto
              suscipiantur eam. Ex graeci elaboraret pro. Mei te omnis tantas,
              nobis viderer vivendo ex has.
            </p>
          </div>
          <div className={style.specifications}>
            <h1>Specifications</h1>
            <table>
              <tbody>
                {" "}
                <tr className={style.table}>
                  <td>
                    <strong>Color</strong>
                  </td>
                  <td>Blue, Purple</td>
                </tr>
                <tr>
                  <td>
                    <strong>Size</strong>
                  </td>
                  <td>150x100x1000</td>
                </tr>
                <tr className={style.table}>
                  <td>
                    <strong>Weight</strong>
                  </td>
                  <td>0.6kg</td>
                </tr>
                <tr>
                  <td>
                    <strong>Manifacturer</strong>
                  </td>
                  <td>Manifacturer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product_Details;
