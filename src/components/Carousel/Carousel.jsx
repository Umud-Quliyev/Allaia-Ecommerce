import React, { useState, useEffect } from "react";
import style from "./Carousel.module.css";

const images = [
  {
    url: "http://www.ansonika.com/allaia/img/slides/slide_home_1.jpg",
    title: "Attack Air Max 720 Sage Low",
    desc: "Limited items available at this price",
  },
  {
    url: "http://www.ansonika.com/allaia/img/slides/slide_home_2.jpg",
    title: "Attack Air Max VaporMax Flyknit 3",
    desc: "Limited items available at this price",
  },
  {
    url: "http://www.ansonika.com/allaia/img/slides/slide_home_3.jpg",
    title: "Attack Air Max Monarch IV SE",
    desc: "Limited items available at this price",
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={style.carousel}>
      <div className={style.opacity}></div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Slide ${index + 1}`}
          style={{
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          }}
        />
      ))}
      <div className={style.title}>
        <h1>{images[currentSlide].title}</h1>
        <p>{images[currentSlide].desc}</p>
      </div>

      <div className={style.carouselDots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? style.activeDot : style.dot}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
