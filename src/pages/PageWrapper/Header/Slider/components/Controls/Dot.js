import React, { useContext } from "react";
import { SliderContext } from "../../Slider";

import "../../styles.css";

export default function Dot({ number }) {
  const { goToSlide, slideNumber, slidesCount } = useContext(SliderContext);

  const currentSlide = slideNumber === -1 ? slidesCount - 1 : slideNumber % slidesCount
  return (
    <div
      className={`dot ${currentSlide === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}
