import React, { useState, useEffect } from "react";
import style from "./Carousel.module.css";

const images = [
  {
    url: "http://www.ansonika.com/allaia/img/slides/slide_home_1.jpg",
  },
  {
    url: "http://www.ansonika.com/allaia/img/slides/slide_home_2.jpg",
  },
  {
    url: "http://www.ansonika.com/allaia/img/slides/slide_home_3.jpg",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className={style.carousel}>
      <div className={style.opacity}></div>
      <img src={images[currentSlide].url} alt={`Slide ${currentSlide + 1}`} />
      <div className={style.title}></div>
    </div>
  );
}

export default Carousel;
