import React from 'react';

import Slider from "./Slider/Slider";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SlideCard from "@Pages/PageWrapper/Header/Slides/MappingSlide";
import car from "@Assets/images/car.png";
import blank from "@Assets/images/blank.png";

export const slidesInfo = [
    {
        name: 'Срочная доставка день в день',
        desk: `Для тех, кто не может ждать у нас есть услуга
            срочной курьерской доставки корреспондеции и других видов отправлений.`,
        image: car,
        class: 'first-slide'
    },
    {
        name: 'Подписание договора за 1 час',
        desk: `В течение часа наш курьер заберет вашу посылку и подпишет
            с Вами договор о предоставлении услуг.`,
        image: blank,
        class: 'second-slide'
    }
]

const MainHeader = ({slider}) => {

    return (
        <div>
            <HeaderMenu/>
            {
                slider
                &&
                <div style={{marginTop: "70px"}}>
                    <Slider width={'100%'}
                            height={'500px'}
                            autoPlay={true}
                            autoPlayTime={5000}
                            items={slidesInfo.map((e) => <SlideCard name={e.name}
                                                                    description={e.desk}
                                                                    imageUrl={e.image}
                                                                    divClassName={e.class}/>)}/>
                </div>


            }

        </div>
    );
};
export default MainHeader;
