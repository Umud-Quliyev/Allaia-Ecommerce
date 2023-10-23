import React from "react";
import Main_Header from "../Main_Header/Main_Header";
import style from "./Contacts.module.scss";
import Footer from "../Footer/Footer";
import { TfiSupport } from "react-icons/tfi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

function Contacts() {
  function handleSearch(filteredData) {}
  return (
    <div>
      <Main_Header onSearch={handleSearch} />

      <div className={style.contact}>
        <div>
          <div className={style.contact_title}>
            <h1>Contact Allalia</h1>
            <p>
              Euismod phasellus ac lectus fusce parturient cubilia a nisi
              blandit sem cras nec tempor adipiscing rcu ullamcorper ligula.
            </p>
          </div>
          <div className={style.contact_boxs}>
            <div className={style.box}>
              <TfiSupport />
              <h2>Allalia Help Center</h2>
              <a href="">+94 423-23-221 - </a>
              <a href="">help@allaia.com</a>
              <div>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
            <div className={style.box}>
              <FaMapMarkedAlt />
              <h2>Allalia Showroom</h2>
              <div>6th Forrest Ray, London - 10001 UK</div>
              <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
            </div>
            <div className={style.box}>
              <BsBoxSeam />
              <h2>Allalia Orders</h2>
              <a href="">+94 423-23-221 - </a>
              <a href="">help@allaia.com</a>
              <div>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
          </div>
        </div>
        <div className={style.drop}>
          <div className={style.form}>
            <h1>Drop Us a Line</h1>
            <input
              className={style.form_input}
              type="text"
              placeholder="Name *"
            />
            <input
              className={style.form_input}
              type="text"
              placeholder="Email *"
            />
            <input
              className={style.form_input_message}
              type="text"
              placeholder="Message *"
            />
            <button>Submit</button>
          </div>
          <div className={style.map}>
            <iframe
              width="100%"
              height="370"
              order="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Baku%2028%20mall+(Projects)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Calculate population in area
              </a>
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacts;
