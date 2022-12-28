import React, {useContext, useEffect, useRef, useState} from "react";
import Slide from "./Slide";
import {SliderContext} from "../Slider";

import "../styles.css";

export default function SlidesList() {
    const {slideNumber, items, goToSlide, slidesCount} = useContext(SliderContext);
    const firstSlideCopy = items[0]
    const lastSlideCopy = items[items.length - 1]
    const itemsWithCopy = useRef([lastSlideCopy, ...items, firstSlideCopy])

    function onTrEnd() {
        if (slideNumber >= slidesCount || slideNumber <= -1) {
            const cont = document.getElementById('slider-container')
            cont.style.transitionDuration = '0s'
            if (slideNumber >= slidesCount)
                goToSlide(0)
            else
                goToSlide(slidesCount - 1)
            setTimeout(() => {
                cont.style.transitionDuration = '0.5s'
            }, 20)
        }
    }


    return (
        <div id={'slider-container'}
             style={{
                 transform: `translateX(-${(slideNumber + 1) * 100}%)`,
                 transition: 'ease-in-out 0.5s'
             }}
             className={'slide-list'}
             onTransitionEnd={() => onTrEnd()}
        >
            {
                itemsWithCopy.current.map((slide, index) => (
                    <Slide key={index} data={slide}/>
                ))
            }
        </div>
    );
}
