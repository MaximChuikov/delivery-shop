import React from 'react';
import ButtonComponent from "@Components/ButtonComponent/ButtonComponent";
import './styles.css'
import blank from "@Assets/images/blank.png";

const sliderTwo = {
    name: 'Подписание договора за 1 час',
    desk: `В течение часа наш курьер заберет вашу посылку и подпишет
            с Вами договор о предоставлении услуг.`
}

const SecondSlide = () => {
    return (
        <div className={'slide-container second-slide'} style={{backgroundImage: `url(${blank})`}}>
            <div className="header-main__info">
                <div className="main-header__text">
                    <div className="main-header__text-name">
                        {sliderTwo.name}
                    </div>
                    <div className="main-header__text-desk">
                        {sliderTwo.desk}
                    </div>
                    <ButtonComponent
                        style={{marginTop: 87}}
                        outline={false}
                    >
                        Заказать доставку
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
};

export default SecondSlide;