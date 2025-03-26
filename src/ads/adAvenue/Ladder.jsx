import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

import ad1 from "./images/ladder/1.jpg";
import ad2 from "./images/ladder/2.jpeg";
import ad3 from "./images/ladder/3.jpeg";
import ad4 from "./images/ladder/4.webp";
import ad5 from "./images/ladder/5.png";
import ad6 from "./images/ladder/6.jpg";
import ad7 from "./images/ladder/7.webp";
import ad8 from "./images/ladder/8.png"

import embedding1 from "../../embedding/ad/no1.json";
import embedding2 from "../../embedding/ad/no2.json";
import embedding3 from "../../embedding/ad/no3.json";
import embedding4 from "../../embedding/ad/no4.json";
import embedding5 from "../../embedding/ad/no5.json";
import embedding6 from "../../embedding/ad/no6.json";
import embedding7 from "../../embedding/ad/no7.json";
import embedding8 from "../../embedding/ad/no8.json";

const Ladder = ({ postEmbedding }) => {
  const ads = [
    { img: ad1, embedding: embedding1 },
    { img: ad2, embedding: embedding2 },
    { img: ad3, embedding: embedding3 },
    { img: ad4, embedding: embedding4 },
    { img: ad5, embedding: embedding5 },
    { img: ad6, embedding: embedding6 },
    { img: ad7, embedding: embedding7 },
    { img: ad8, embedding: embedding8 },
  ];
  const [ selectedAd, setSelectedAd ] = useState({});

  useEffect(() => {
    // 유사도 검사 후 적절한 광고 선택
    let highest = 0;
    ads.forEach((ad, index) => {
      const similarity = cosineSimilarity(postEmbedding, ad.embedding);
      // console.log(similarity);
      if (similarity > highest) {
        highest = similarity;
        // console.log(`highest similarity: ${index} -> ${highest}`);
        setSelectedAd({ img: ad.img });
      }
    });
  }, []);

  function cosineSimilarity(embedding1, embedding2) {
    const dotProduct = dot(embedding1, embedding2);
    const normA = norm(embedding1);
    const normB = norm(embedding2);
    const cosineSimilarity = dotProduct / (normA * normB);

    return cosineSimilarity;
  }

  function dot(a, b) {
    if (a.length !== b.length) {
        throw new Error('The vectors must have the same length');
    }
  
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result += a[i] * b[i];
    }
    return result;
  }

  function norm(vector) {
    if (vector.length === 0) {
      return 0;
    }
  
    let sumOfSquares = 0;
    for (let i = 0; i < vector.length; i++) {
      sumOfSquares += Math.pow(vector[i], 2);
    }
  
    return Math.sqrt(sumOfSquares);
  }

  return (
    <AdvertiseWrapper>
        <AdvertiseImage src={selectedAd.img} />
    </AdvertiseWrapper>
  );
};

export default Ladder;

const AdvertiseWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AdvertiseImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;