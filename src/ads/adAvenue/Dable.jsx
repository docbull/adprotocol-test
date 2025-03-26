import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

import ad1 from "./images/dable/1.webp";
import ad2 from "./images/dable/2.webp";
import ad3 from "./images/dable/3.webp";
import ad4 from "./images/dable/4.webp";
import ad5 from "./images/dable/5.webp";
import ad6 from "./images/dable/6.webp";
import ad7 from "./images/dable/7.webp";

const Dable = () => {
  let ads = [
    { img: ad1, text: `'건선피부' 집에서 90% 해결한 방법(꿀팁)` },
    { img: ad2, text: `'쥐젖' 뜯지말고 '이렇게' 해결하세요` },
    { img: ad3, text: `맘카페에서 난리난 '눈밑 꺼짐' 없애는 법` },
    { img: ad4, text: `쇼피로 동남아 진출! 맞춤 전략 공개` },
    { img: ad5, text: `역류성식도염 스스로 고치는 '단 한가지' 방법` },
    { img: ad6, text: `유럽에서 핫한 15일 다이어트 '이것'` },
    { img: ad7, text: `정수리 탈모, 집에서 2달만에 해결했습니다..` },
  ];
  const [ selectedAds, setSelectedAds ] = useState([]);

  useEffect(() => {
    // 무작위 4개 광고 선택
    const max = ads.length;

    var a = [];
    for (var i=0; i<3; i++) {
      const rand = Math.floor(Math.random() * (max - a.length));
      a.push(ads[rand]);
      ads.splice(rand, 1);
    }
    setSelectedAds(a);
  }, []);

  return (
      <AdvertiseWrapper>
        {selectedAds.map((ad, index) => {
          return (
            <AdvertiseList key={`dable-${index}`}>
              <AdvertiseImage src={ad.img} />
              <AdvertiseText> {ad.text} </AdvertiseText>
            </AdvertiseList>
          )
        })}
      </AdvertiseWrapper>
  );
};

export default Dable;

const AdvertiseWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const AdvertiseList = styled.div`
  height: 100%;
  position: relative;
  display: inline-block;
`;

const AdvertiseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const AdvertiseText = styled.div`
  position: absolute;
  font-weight: bold;
  bottom: 0;

  font-size: 1rem;
  color: white;
  background: rgba(0, 0, 0, 0.3);

  text-align: center;
`;