import React from 'react';
import ButtonComponent from "@Components/ButtonComponent/ButtonComponent";
import './MappingSlide.css'
import PropTypes from "prop-types";

export const SlideCard = ({name, description, imageUrl, divClassName}) => {
    return (
        <div className={'slide-container ' + divClassName} style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="header-main__info">
                <div>
                    <div className="main-header__text-name">
                        {name}
                    </div>
                    <div className="main-header__text-desk">
                        {description}
                    </div>
                </div>
                <ButtonComponent
                    style={{whiteSpace: "nowrap"}}
                    outline={false}
                >
                    Заказать доставку
                </ButtonComponent>
            </div>
        </div>
    );
};

SlideCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    divClassName: PropTypes.string
}
export default SlideCard
