import React from 'react';
import car from "@Assets/images/car.png";
import ButtonComponent from "@Components/ButtonComponent/ButtonComponent";
import './styles.css'

console.log(car)

const sliderOne = {
    name: 'Срочная доставка день в день',
    desk: `Для тех, кто не может ждать у нас есть услуга
            срочной курьерской доставки корреспондеции и других видов отправлений.`,
    image: car
}

const FirstSlide = () => {
    return (
        <div className={'slide-container first-slide'} style={{backgroundImage: `url(${car})`}}>
            <div className="header-main__info">
                <div>
                    <div className="main-header__text-name">
                        {sliderOne.name}
                    </div>
                    <div className="main-header__text-desk">
                        {sliderOne.desk}
                    </div>
                    <ButtonComponent
                        value="Заказать доставку"
                        style={{marginTop: 87}}
                        styleColor="color-out"
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstSlide;