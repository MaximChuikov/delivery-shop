import React from 'react';

import Slider from "./Slider/Slider";
import FirstSlide from "./Slides/FirstSlide";
import SecondSlide from "./Slides/SecondSlide";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const MainHeader = ({slider}) => {

    return (
        <div>
            <HeaderMenu/>
            {
                slider
                &&
                <div style={{marginTop: "70px"}}>
                    <Slider width={'100%'} height={'500px'} autoPlay={true} autoPlayTime={5000} items={[
                        <FirstSlide/>, <SecondSlide/>
                    ]}/>
                </div>


            }

        </div>
    );
};
export default MainHeader;
