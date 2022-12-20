import React, { useEffect, useState } from 'react';
import './MainHeader.css';
import HeaderButton from './HeaderButton/HeaderButton';

import ButtonComponent from '@Components/ButtonComponent/ButtonComponent';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import car from '@Assets/images/car.png';
import blank from '@Assets/images/blank.png';

import { useWindowDimensions } from '@Helpers/useWindowDimensions';

const headerText = {
    sliderOne: {
        name: 'Срочная доставка день в день',
        desk: 'Для тех, кто не может ждать у нас есть услуга\
            срочной курьерской доставки корреспондеции и других видов отправлений.',
        image: car,
        backgroundSize: '510px',
        backgroundPosition: 'right bottom',
    },
    sliderTwo: {
        name: 'Подписание договора за 1 час',
        desk: 'В течение часа наш курьер заберет вашу посылку и подпишет\
            с Вами договор о предоставлении услуг.',
        image: blank,
        backgroundSize: '575px',
        backgroundPosition: 'right bottom',
    },
};

const MainHeader = () => {
    const [header, setHeader] = useState(headerText.sliderOne);
    const { width } = useWindowDimensions();

    return (
        <div>
            <div
                style={{
                    backgroundImage: width < 1150 ? '' : `url(${header.image})`,
                    backgroundPosition: `${header.backgroundPosition}`,
                    backgroundSize: `${header.backgroundSize}`,
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '32px',
                }}
            >
                <HeaderMenu />
                <div className="header-main__info">
                    <div className="main-header__text">
                        <div className="main-header__text-name">
                            {header.name}
                        </div>
                        <div className="main-header__text-desk">
                            {header.desk}
                        </div>
                        <ButtonComponent
                            value="Заказать доставку"
                            style={{ marginTop: 87 }}
                            styleColor="color-out"
                        />
                    </div>
                </div>
                <div className="main-header__buttons">
                    <HeaderButton
                        onClick={() => setHeader(headerText.sliderOne)}
                    />
                    <HeaderButton
                        onClick={() => setHeader(headerText.sliderTwo)}
                    />
                </div>
            </div>
        </div>
    );
};
export default MainHeader;
