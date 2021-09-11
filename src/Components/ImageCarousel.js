import React, { useState } from "react";
import { ImageData } from "./ImageData";
import { Icon } from 'semantic-ui-react';

const ImageCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }


  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <Icon name="arrow alternate circle left" className="left-arrow" onClick={prevSlide} />
      <Icon name="arrow alternate circle right" className="right-arrow" onClick={nextSlide} />
      {ImageData.map((slide, index) => {
        return (
          <div className={index === current ? 'active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="Food images" className="imageslider" />)}
          </div>
        );
      })}
    </section>
  );
};

export default ImageCarousel;
