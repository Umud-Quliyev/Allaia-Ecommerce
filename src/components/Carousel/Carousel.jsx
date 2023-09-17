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

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  const renderBullets = () => {
    return images.map((_, index) => (
      <span
        key={index}
        className={index === currentSlide ? style.activeBullet : style.bullet}
        onClick={() => handleBulletClick(index)}
      ></span>
    ));
  };

  return (
    <div className={style.carousel}>
      <div className={style.slide}>
        <img src={images[currentSlide].url} alt={`Slide ${currentSlide + 1}`} />
        <div className={style.title}>{images[currentSlide].title}</div>
      </div>
      <div className={style.bulletsContainer}>{renderBullets()}</div>
    </div>
  );
}

export default Carousel;
