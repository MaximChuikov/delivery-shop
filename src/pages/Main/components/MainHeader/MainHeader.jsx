import React from 'react';

import Slider from "@Pages/Main/components/MainHeader/Slider/Slider";
import FirstSlide from "@Pages/Main/components/MainHeader/Slides/FirstSlide";
import SecondSlide from "@Pages/Main/components/MainHeader/Slides/SecondSlide";
import HeaderMenu from "@Pages/Main/components/MainHeader/HeaderMenu/HeaderMenu";

const MainHeader = () => {

    return (
        <div>
            <HeaderMenu/>
            <Slider width={'100%'} height={'500px'} autoPlay={true} autoPlayTime={5000} items={[
                <FirstSlide/>, <SecondSlide/>
            ]}/>
        </div>
    );
};
export default MainHeader;
