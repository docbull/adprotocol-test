import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

import ad1 from "./images/adsense/1.jpeg";
import ad2 from "./images/adsense/2.jpeg";
import ad3 from "./images/adsense/3.jpeg";
import ad4 from "./images/adsense/4.jpeg";
import ad5 from "./images/adsense/5.jpeg";
import ad6 from "./images/adsense/6.png";
import ad7 from "./images/adsense/7.jpeg";
import ad8 from "./images/adsense/8.png";

const AdSense = () => {
    const ads = [ ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8 ];
    const [ selectedAd, setSelectedAd ] = useState();

    useEffect(() => {
        // 무작위로 광고 선택
        const max = ads.length;
        const rand = Math.floor(Math.random() * max);
        setSelectedAd(rand);
    }, []);

    return (
        <AdvertiseWrapper>
            <AdvertiseImage src={ads[selectedAd]} />
        </AdvertiseWrapper>
    );
};

export default AdSense;

const AdvertiseWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const AdvertiseImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;