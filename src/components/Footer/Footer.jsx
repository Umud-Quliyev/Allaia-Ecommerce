import React from "react";
import style from "./Footer.module.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineDoubleRight,
  AiOutlineMail,
  AiTwotoneHome,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        <div className={style.links}>
          <h2>QUICK LINKS</h2>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Faq</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
        <div className={style.categories}>
          <h2>CATEGORIES</h2>
          <ul>
            <li>
              <a href="">Clothes</a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Furniture</a>
            </li>
            <li>
              <a href="">Glasses</a>
            </li>
            <li>
              <a href="">Shoes</a>
            </li>
            <li>
              <a href="">Watches</a>
            </li>
          </ul>
        </div>
        <div className={style.contacts}>
          <h2>CONTACTS</h2>
          <ul>
            <li>
              <span>
                <AiTwotoneHome />
              </span>
              <h3>
                97845 Baker st. 567 <br />
                Los Angeles - US
              </h3>
            </li>
            <li>
              <span>
                <BsFillTelephoneFill />
              </span>
              <h3>+94 423-23-221</h3>
            </li>
            <li>
              <span>
                <AiOutlineMail />
              </span>
              <h3>info@allaia.com</h3>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <h2>KEEP IN TOUCH</h2>
          <div className={style.email}>
            <input type="text" placeholder="Your email" />
            <button>
              <AiOutlineDoubleRight />
            </button>
          </div>
          <br />
          <h3>Follow Us</h3>
          <div className={style.icons}>
            <a href="">
              <AiFillTwitterSquare />
            </a>
            <a href="">
              <AiFillFacebook />
            </a>
            <a href="">
              <AiFillInstagram />
            </a>
            <a href="">
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <h3>Copyright © 2023 All Rights Reserved.</h3>
      </div>
    </footer>
  );
}

export default Footer;
