import React from "react";
import style from "./Latest.module.scss";

function Latest() {
  return (
    <div>
      <div className={style.title}>
        <h2>Latest News</h2>
        <span>Blog</span>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
      </div>
      <div className={style.latest}>
        <div className={style.blogcard}>
          <div>
            <figure>
              <img
                src="http://www.ansonika.com/allaia/img/blog-thumb-1.jpg"
                alt=""
              />
              <figcaption>
                <strong>28</strong> Dec
              </figcaption>
            </figure>
          </div>
          <div className={style.latesttitle}>
            <ul>
              <li>by Jhon Doe</li>
              <li>20.10.2023</li>
            </ul>
            <h4>Pri oportere scribentur eu</h4>
            <p>
              Cu eum alia elit, usu in eius appareat, deleniti sapientem
              honestatis eos ex. In ius esse ullum vidisse....
            </p>
          </div>
        </div>
        <div className={style.blogcard}>
          <div>
            <figure>
              <img
                src="http://www.ansonika.com/allaia/img/blog-thumb-2.jpg"
                alt=""
              />
              <figcaption>
                <strong>28</strong> Dec
              </figcaption>
            </figure>
          </div>
          <div>
            <ul>
              <li>by Luca Robinson</li>
              <li>20.10.2023</li>
            </ul>
            <h4>Pri oportere scribentur eu</h4>
            <p>
              Cu eum alia elit, usu in eius appareat, deleniti sapientem
              honestatis eos ex. In ius esse ullum vidisse....
            </p>
          </div>
        </div>
        <div className={style.blogcard}>
          <div>
            <figure>
              <img
                src="http://www.ansonika.com/allaia/img/blog-thumb-3.jpg"
                alt=""
              />
              <figcaption>
                <strong>28</strong> Dec
              </figcaption>
            </figure>
          </div>
          <div>
            <ul>
              <li>by Paulo Rodrigez</li>
              <li>20.10.2023</li>
            </ul>
            <h4>Pri oportere scribentur eu</h4>
            <p>
              Cu eum alia elit, usu in eius appareat, deleniti sapientem
              honestatis eos ex. In ius esse ullum vidisse....
            </p>
          </div>
        </div>
        <div className={style.blogcard}>
          <div>
            <figure>
              <img
                src="http://www.ansonika.com/allaia/img/blog-thumb-4.jpg"
                alt=""
              />
              <figcaption>
                <strong>28</strong> Dec
              </figcaption>
            </figure>
          </div>
          <div>
            <ul>
              <li>by Mark Twain</li>
              <li>20.10.2023</li>
            </ul>
            <h4>Pri oportere scribentur eu</h4>
            <p>
              Cu eum alia elit, usu in eius appareat, deleniti sapientem
              honestatis eos ex. In ius esse ullum vidisse....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
