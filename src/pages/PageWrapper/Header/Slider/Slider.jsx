import React, {useEffect, useState, createContext} from "react";
import PropTypes from "prop-types";

import Dots from "./components/Controls/Dots";

import SlidesList from "./components/SlidesList";

export const SliderContext = createContext(undefined, undefined);

const Slider = function ({width, height, autoPlay, autoPlayTime, items}) {
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    const changeSlide = (direction = 1) => {
        setSlide(slide + direction)
    };

    const goToSlide = (number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const animationTime = 500
        let animationDuring = autoPlayTime
        if (slide === 0) {
            animationDuring -= animationTime
        }

        const interval = setInterval(() => {
            changeSlide(1);
        }, animationDuring);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]);

    return (
        <div
            style={{width, height}}
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <SlidesList/>
                <Dots/>
            </SliderContext.Provider>
        </div>
    );
};

Slider.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    items: PropTypes.array
};

Slider.defaultProps = {
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%"
};

export default Slider;
