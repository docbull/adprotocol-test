import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "../food/food2.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/food2.json";

const Food2 = () => {
    const [ selectedAvenue, setSelectedAvenue ] = useState([]);

    useEffect(() => {
        const avenues = [ <AdSense />, <Dable />, <Ladder postEmbedding={embedding} /> ];
        const max = avenues.length;

        var ads = [];
        for (var i=0; i<max; i++) {
            const rand = Math.floor(Math.random() * (max - ads.length));
            ads.push(avenues[rand]);
            avenues.splice(rand, 1);
        }
        setSelectedAvenue(ads);
    }, []);

    return (
        <Game1Wrapper id="ladder-content">
            <article id="content" style={{width: "100%", padding: "0", margin: "0"}}>
                <div className="inner" style={{padding: "0"}}>
                    <div
                    className="post-cover"
                    style={{
                        backgroundImage:
                        "url(https://blog.kakaocdn.net/dn/sAzYv/btsGWK9KBMJ/dNGgGD1oBoHO7K87VeEMu0/img.jpg)"
                    }}
                    >
                    <div className="inner" style={{padding: "0"}}>
                        <span className="category">맛있는 세상</span>
                        <h1>서울 가볼만한 카페 5 곳 추천</h1>
                        <span className="meta">
                        <span className="author">by 루-</span>
                        <span className="date">2024. 4. 26.</span>
                        </span>
                    </div>
                    </div>
                    <div className="entry-content">

                    {/* 광고 1 */}
                    <Advertise avenue={selectedAvenue[0]} location={"0"} />

                    <div className="contents_style">
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        서울이 세계에서 가장 가볼만한 카페가 많은 나라라는 인식이 외국의
                        젊은이들에게 있는듯합니다. 한국 카페투어를 하기위해 여행을 오는
                        사람들이 꽤있더군요.그래서 서울에서 젊은이들에게 최근 인기가 많은 카페
                        5곳을 추려보았습니다. 순위가 아니라 개인적으로 적어본 것입니다.5개만
                        고르기엔 좋은 카페가 너무많죠.
                        <br />
                        <br />
                        </p>
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                        <b>1.오설록 티하우스 (북촌점)</b>
                        <br />
                        </h4>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <b>위치</b>: 서울 종로구 북촌로 45
                        <br />
                        특징: 한옥을 개조한 약 3층 정도 되는 건물로, 고즈넉하고 운치 있는
                        북촌점입니다.
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1079}
                        data-origin-height={708}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/sAzYv/btsGWK9KBMJ/dNGgGD1oBoHO7K87VeEMu0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/sAzYv/btsGWK9KBMJ/dNGgGD1oBoHO7K87VeEMu0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/sAzYv/btsGWK9KBMJ/dNGgGD1oBoHO7K87VeEMu0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsAzYv%2FbtsGWK9KBMJ%2FdNGgGD1oBoHO7K87VeEMu0%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1079}
                            height={708}
                            data-origin-width={1079}
                            data-origin-height={708}
                            data-phocus-index={0}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        <br />
                        <b>메뉴</b>: <br />
                        <b>녹차 아이스크림 (Ice Cream Green Tea):</b> 오설록 다원의 유기농
                        녹차가 진하게 들어간 오설록 대표 아이스크림입니다.
                        <br />
                        <b>빙수 (녹차/호지차) (Ice Flake Green Tea/Hojicha):</b> 녹차 또는
                        호지차를 베이스로 한 시원한 빙수입니다.
                        <br />
                        오설록의 차 메뉴들과 차를 베이스로 한 퓨전 메뉴들이 있어 다양합니다.
                        약 60여 가지의 메뉴가 있으며, 가격대는 조금 높은 편입니다.
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1062}
                        data-origin-height={1067}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/bHOuoI/btsGWK2YaFM/m0A5laCd8bz4YuiY6smdG1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/bHOuoI/btsGWK2YaFM/m0A5laCd8bz4YuiY6smdG1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/bHOuoI/btsGWK2YaFM/m0A5laCd8bz4YuiY6smdG1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbHOuoI%2FbtsGWK2YaFM%2Fm0A5laCd8bz4YuiY6smdG1%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1062}
                            height={1067}
                            data-origin-width={1062}
                            data-origin-height={1067}
                            data-phocus-index={1}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        <br />
                        <b>기타</b>: 2022년에는 국내 한옥 최초로 독일 if 디자인 건축상을
                        수상하였고, 서울 6대 한옥으로 선정되었습니다.
                        <br />
                        <br />
                        오설록티하우스 북촌
                        </p>
                        <figure
                        data-ke-type="opengraph"
                        data-og-title="오설록티하우스"
                        data-ke-align="alignCenter"
                        data-og-description="서울 종로구 북촌로 45"
                        data-og-host="map.kakao.com"
                        data-og-source-url="https://kko.to/YlehoI5P7Z"
                        data-og-image="https://scrap.kakaocdn.net/dn/40FTc/hyVS13QC1W/7gKOmt0qTh0PoYzQNkn1KK/img.png?width=800&height=400&face=0_0_800_400"
                        data-og-url="https://map.kakao.com/?itemId=1502729906"
                        >
                        <a
                            href="https://map.kakao.com/?itemId=1502729906"
                            data-source-url="https://kko.to/YlehoI5P7Z"
                        >
                            <div
                            className="og-image"
                            style={{
                                backgroundImage:
                                'url("https://scrap.kakaocdn.net/dn/40FTc/hyVS13QC1W/7gKOmt0qTh0PoYzQNkn1KK/img.png?width=800&height=400&face=0_0_800_400")'
                            }}
                            >
                            {" "}
                            </div>
                            <div className="og-text">
                            <p className="og-title">오설록티하우스</p>
                            <p className="og-desc">서울 종로구 북촌로 45</p>
                            <p className="og-host">map.kakao.com</p>
                            </div>
                        </a>
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        </p>
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                        <b>2. 공명</b>
                        <br />
                        </h4>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <b>위치</b>: 서울 마포구 와우산로 17길 11-8
                        <br />
                        <b>특징</b>: 카페 공명은 연남점과 홍대점 두 곳에서 운영되는 대형
                        카페로, 디저트와 음료 메뉴가 풍부합니다. 공간이 넓은 디저트 맛집으로,
                        홍대점은 광대한 루프탑 카페입니다.
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1074}
                        data-origin-height={1181}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/9FfwL/btsGXBYu7c1/L4TgseOM2slcrdoDFAZmQ1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/9FfwL/btsGXBYu7c1/L4TgseOM2slcrdoDFAZmQ1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/9FfwL/btsGXBYu7c1/L4TgseOM2slcrdoDFAZmQ1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9FfwL%2FbtsGXBYu7c1%2FL4TgseOM2slcrdoDFAZmQ1%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1074}
                            height={1181}
                            data-origin-width={1074}
                            data-origin-height={1181}
                            data-phocus-index={2}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        <br />
                        <b>메뉴</b>: 다양한 음료와 케이크가 있으며, 공명 크림 솔티드 라떼를
                        추천합니다.
                        <br />
                        <br />
                        <b>공명라떼 (Only ice)</b>: 달달한 연유와 시나몬이 들어간 라떼로,
                        크림이 쫀득하고 달달한 맛이 특징입니다.
                        <br />
                        <b>비스킷슈</b>: 부드러운 크림과 진한 카카오의 맛이 어우러진
                        디저트입니다.
                        <br />
                        <b>피스타치오 크림 라떼 [시즌한정]:</b> 풍부한 피스타치오 맛이
                        느껴지는 크림 라떼입니다.
                        <br />
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1080}
                        data-origin-height={1098}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/HU6I1/btsGXt0wI15/mgjptA9nzhGM7x2TOHz8zk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/HU6I1/btsGXt0wI15/mgjptA9nzhGM7x2TOHz8zk/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/HU6I1/btsGXt0wI15/mgjptA9nzhGM7x2TOHz8zk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHU6I1%2FbtsGXt0wI15%2FmgjptA9nzhGM7x2TOHz8zk%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1080}
                            height={1098}
                            data-origin-width={1080}
                            data-origin-height={1098}
                            data-phocus-index={3}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        </p>
                        <figure
                        data-ke-type="opengraph"
                        data-og-title="카페공명"
                        data-ke-align="alignCenter"
                        data-og-description="서울 마포구 와우산로17길 11-8"
                        data-og-host="map.kakao.com"
                        data-og-source-url="https://kko.to/sf7wSxVGQT"
                        data-og-image="https://scrap.kakaocdn.net/dn/b8Ht5h/hyVVLdW04k/rEZNDoyK44N27ABK0TtqL1/img.png?width=800&height=400&face=0_0_800_400"
                        data-og-url="https://map.kakao.com/?itemId=193594597"
                        >
                        <a
                            href="https://map.kakao.com/?itemId=193594597"
                            data-source-url="https://kko.to/sf7wSxVGQT"
                        >
                            <div
                            className="og-image"
                            style={{
                                backgroundImage:
                                'url("https://scrap.kakaocdn.net/dn/b8Ht5h/hyVVLdW04k/rEZNDoyK44N27ABK0TtqL1/img.png?width=800&height=400&face=0_0_800_400")'
                            }}
                            >
                            {" "}
                            </div>
                            <div className="og-text">
                            <p className="og-title">카페공명</p>
                            <p className="og-desc">서울 마포구 와우산로17길 11-8</p>
                            <p className="og-host">map.kakao.com</p>
                            </div>
                        </a>
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        </p>
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20">

                        {/* 광고 2 */}
                        <Advertise avenue={selectedAvenue[1]} location={"1"} />

                        <b>3. 삼다코지</b>
                        </h4>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <b>위치</b>: 서울 마포구 독막로9길 34
                        <br />
                        <b>특징</b>: 삼다코지는 제주를 느낄 수 있는 홍대 대형 카페로, 다양한
                        차 메뉴를 제공합니다. 아래는 삼다코지에서 추천하는 차 메뉴입니다:
                        <br />
                        <br />
                        <b>로맨틱제주</b>: 제주의 로맨틱한 분위기를 느낄 수 있는 차입니다.
                        <br />
                        <b>귤 란</b>: 신선한 제주 귤을 사용한 차로, 과일 향이 풍부합니다.
                        <br />
                        <b>제주레몬</b>: 상큼한 제주 레몬을 활용한 차입니다.
                        <br />
                        <b>댕유지 크림라떼</b>: 댕유지(제주식 미역)를 사용한 크림라떼로,
                        특별한 맛을 즐길 수 있습니다.
                        <br />
                        <b>곶자왈 크림라떼</b>: 제주 곶자왈(해조류)을 활용한 크림라떼입니다.
                        <br />
                        <b>아메리카노</b>: 전통적인 커피를 즐기고 싶으신 분들에게 추천합니다.
                        <br />
                        제주삼다수로 만든 커피와 차가 있는 카페로, 제주의 정취를 재현한
                        플래그쉽 스토어입니다.
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1065}
                        data-origin-height={1054}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/CU3jv/btsGWdYDs0N/OALXHdMX2FBetrtw5wVXy0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/CU3jv/btsGWdYDs0N/OALXHdMX2FBetrtw5wVXy0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/CU3jv/btsGWdYDs0N/OALXHdMX2FBetrtw5wVXy0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCU3jv%2FbtsGWdYDs0N%2FOALXHdMX2FBetrtw5wVXy0%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1065}
                            height={1054}
                            data-origin-width={1065}
                            data-origin-height={1054}
                            data-phocus-index={4}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }} />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1079}
                        data-origin-height={1074}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/EW5uv/btsGVejFXxV/HEqckVX5xvjmxMKvjjbej0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/EW5uv/btsGVejFXxV/HEqckVX5xvjmxMKvjjbej0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/EW5uv/btsGVejFXxV/HEqckVX5xvjmxMKvjjbej0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEW5uv%2FbtsGVejFXxV%2FHEqckVX5xvjmxMKvjjbej0%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1079}
                            height={1074}
                            data-origin-width={1079}
                            data-origin-height={1074}
                            data-phocus-index={5}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1079}
                        data-origin-height={1078}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/OyP2C/btsGVbtI7XS/KVeThcKDUd0XUyfxj7Uao0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/OyP2C/btsGVbtI7XS/KVeThcKDUd0XUyfxj7Uao0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/OyP2C/btsGVbtI7XS/KVeThcKDUd0XUyfxj7Uao0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOyP2C%2FbtsGVbtI7XS%2FKVeThcKDUd0XUyfxj7Uao0%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1079}
                            height={1078}
                            data-origin-width={1079}
                            data-origin-height={1078}
                            data-phocus-index={6}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1079}
                        data-origin-height={1436}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/b60HvU/btsGX0wYXho/FHGKobVi9M1x0KSU2PaHr0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/b60HvU/btsGX0wYXho/FHGKobVi9M1x0KSU2PaHr0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/b60HvU/btsGX0wYXho/FHGKobVi9M1x0KSU2PaHr0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb60HvU%2FbtsGX0wYXho%2FFHGKobVi9M1x0KSU2PaHr0%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1079}
                            height={1436}
                            data-origin-width={1079}
                            data-origin-height={1436}
                            data-phocus-index={7}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }} />
                        <figure
                        data-ke-type="opengraph"
                        data-og-title="삼다코지"
                        data-ke-align="alignCenter"
                        data-og-description="서울 마포구 독막로9길 34"
                        data-og-host="map.kakao.com"
                        data-og-source-url="https://kko.to/C8zvEqxATw"
                        data-og-image="https://scrap.kakaocdn.net/dn/emfnDL/hyVVEFUxFT/Il7DRBkwUBKOi7xuIMz1yK/img.png?width=800&height=400&face=0_0_800_400"
                        data-og-url="https://map.kakao.com/?itemId=340443921"
                        >
                        <a
                            href="https://map.kakao.com/?itemId=340443921"
                            data-source-url="https://kko.to/C8zvEqxATw"
                        >
                            <div
                            className="og-image"
                            style={{
                                backgroundImage:
                                'url("https://scrap.kakaocdn.net/dn/emfnDL/hyVVEFUxFT/Il7DRBkwUBKOi7xuIMz1yK/img.png?width=800&height=400&face=0_0_800_400")'
                            }}
                            >
                            {" "}
                            </div>
                            <div className="og-text">
                            <p className="og-title">삼다코지</p>
                            <p className="og-desc">서울 마포구 독막로9길 34</p>
                            <p className="og-host">map.kakao.com</p>
                            </div>
                        </a>
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        <br />
                        <br />
                        </p>
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                        <b>4.비담 북촌</b>
                        </h4>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <b>
                            <br />
                            위치
                        </b>
                        : 서울 종로구 북촌로8길 5<br />
                        <br />
                        <b>특징</b>: 100년 전통한옥으로, 북촌한옥마을 입구에서 단 1분 거리에
                        위치해 있습니다. 북촌 한옥마을을 찾는 외국인 관광객들에게는 꼭
                        들려야할 한옥 카페입니다.
                        <br />
                        분위기: 대청마루에서는 전통적인 분위기를 느끼며, 커피와 음료, 케이크
                        등을 즐기면서 휴식을 취할 수 있습니다.
                        <br />
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1079}
                        data-origin-height={725}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/cZmop9/btsGXASP75a/Q2WhkYe0hpIbDDHqxZqQPK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cZmop9/btsGXASP75a/Q2WhkYe0hpIbDDHqxZqQPK/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/cZmop9/btsGXASP75a/Q2WhkYe0hpIbDDHqxZqQPK/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZmop9%2FbtsGXASP75a%2FQ2WhkYe0hpIbDDHqxZqQPK%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1079}
                            height={725}
                            data-origin-width={1079}
                            data-origin-height={725}
                            data-phocus-index={8}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        <br />
                        <b>추천 메뉴</b>: 시그니처 음료로 “<b>비담 크림 솔티드 라떼</b>”를
                        추천합니다. 이 음료는 달콤한 크림과 진한 에스프레소, 히말라야
                        핑크솔트의 조화로 인기를 끌고 있으며, 매우 부드럽고 고소한 맛이
                        특징입니다.
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1080}
                        data-origin-height={1153}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/vg8ck/btsGWQaRJvz/RJkaGWPI8XkQP0kmbFV2k1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/vg8ck/btsGWQaRJvz/RJkaGWPI8XkQP0kmbFV2k1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/vg8ck/btsGWQaRJvz/RJkaGWPI8XkQP0kmbFV2k1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fvg8ck%2FbtsGWQaRJvz%2FRJkaGWPI8XkQP0kmbFV2k1%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1080}
                            height={1153}
                            data-origin-width={1080}
                            data-origin-height={1153}
                            data-phocus-index={9}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={966}
                        data-origin-height={1332}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/cXiNI8/btsGVKoTR26/FqXTPIhWEvFYI6vAHfgil1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cXiNI8/btsGVKoTR26/FqXTPIhWEvFYI6vAHfgil1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/cXiNI8/btsGVKoTR26/FqXTPIhWEvFYI6vAHfgil1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcXiNI8%2FbtsGVKoTR26%2FFqXTPIhWEvFYI6vAHfgil1%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={966}
                            height={1332}
                            data-origin-width={966}
                            data-origin-height={1332}
                            data-phocus-index={10}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={999}
                        data-origin-height={1346}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/cxsa4X/btsGUVkaOBY/z5X7hsPKT6dXa4h46Figi0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cxsa4X/btsGUVkaOBY/z5X7hsPKT6dXa4h46Figi0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/cxsa4X/btsGUVkaOBY/z5X7hsPKT6dXa4h46Figi0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcxsa4X%2FbtsGUVkaOBY%2Fz5X7hsPKT6dXa4h46Figi0%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={999}
                            height={1346}
                            data-origin-width={999}
                            data-origin-height={1346}
                            data-phocus-index={11}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }} />
                        <figure
                        data-ke-type="opengraph"
                        data-og-title="비담"
                        data-ke-align="alignCenter"
                        data-og-description="서울 종로구 북촌로8길 5"
                        data-og-host="map.kakao.com"
                        data-og-source-url="https://kko.to/2laTCXUT1U"
                        data-og-image="https://scrap.kakaocdn.net/dn/bppeW5/hyVS648NgB/i1xdgGW6FpGMqKBS86egs1/img.png?width=800&height=400&face=0_0_800_400"
                        data-og-url="https://map.kakao.com/?itemId=1259005616"
                        >
                        <a
                            href="https://map.kakao.com/?itemId=1259005616"
                            data-source-url="https://kko.to/2laTCXUT1U"
                        >
                            <div
                            className="og-image"
                            style={{
                                backgroundImage:
                                'url("https://scrap.kakaocdn.net/dn/bppeW5/hyVS648NgB/i1xdgGW6FpGMqKBS86egs1/img.png?width=800&height=400&face=0_0_800_400")'
                            }}
                            >
                            {" "}
                            </div>
                            <div className="og-text">
                            <p className="og-title">비담</p>
                            <p className="og-desc">서울 종로구 북촌로8길 5</p>
                            <p className="og-host">map.kakao.com</p>
                            </div>
                        </a>
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        </p>

                        {/* 광고 3 */}
                        <Advertise avenue={selectedAvenue[2]} location={"2"} />

                        <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                        <b>5.빠니드 엠 무니 (Mooni):</b>
                        </h4>
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20" />
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <b>특징</b>: 무니는 강남구 압구정에 위치한 대형 카페로, 파스텔 색상과
                        정교한 건축물의 세계로 안내하는 몽환적인 인형의 집 같은 분위기를
                        자랑합니다. 로맨틱한 파스텔톤과 파리지앵 분위기로 방문객들을
                        매료시키는 이곳은 넉넉한 좌석을 갖추고 있어 편안하게 휴식을 취하고
                        방문을 즐길 수 있습니다.
                        <br />
                        <br />
                        <b>메뉴</b>: 무니는 카페이자 베이커리로서, 도넛과 크루아상의 유쾌한
                        퓨전인 전문 "크로넛"을 포함하여 맛있는 빵과 페이스트리로 고객을 기쁘게
                        합니다.
                        <br />
                        <br />
                        </p>
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20" />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1079}
                        data-origin-height={879}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/bnj1Vj/btsGV92YYpN/FudlvvbBq0u4LaDPU5xkKk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/bnj1Vj/btsGV92YYpN/FudlvvbBq0u4LaDPU5xkKk/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/bnj1Vj/btsGV92YYpN/FudlvvbBq0u4LaDPU5xkKk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbnj1Vj%2FbtsGV92YYpN%2FFudlvvbBq0u4LaDPU5xkKk%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1079}
                            height={879}
                            data-origin-width={1079}
                            data-origin-height={879}
                            data-phocus-index={12}
                            />
                        {/* </span> */}
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />이 카페는 서울의 밤을 더욱 황홀하게 만드는 별빛 카페로, 특별한
                        분위기를 찾는 젊은이들에게 인기가 많습니다. 문니에서는 독특한
                        인테리어와 맛있는 디저트를 즐기며 특별한 시간을 보낼 수 있을 것입니다!{" "}
                        <br />
                        <br />
                        <br />
                        <br />
                        </p>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={1079}
                        data-origin-height={1392}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/bzPzuF/btsGVTMFv4I/1hy82TBoERIjZE1cAfXPO1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/bzPzuF/btsGVTMFv4I/1hy82TBoERIjZE1cAfXPO1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/bzPzuF/btsGVTMFv4I/1hy82TBoERIjZE1cAfXPO1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbzPzuF%2FbtsGVTMFv4I%2F1hy82TBoERIjZE1cAfXPO1%2Fimg.jpg"
                            onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={1079}
                            height={1392}
                            data-origin-width={1079}
                            data-origin-height={1392}
                            data-phocus-index={13}
                            />
                        {/* </span> */}
                        </figure>
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20" />
                        <p data-ke-size="size16" style={{ textAlign: "left" }} />
                        <figure
                        data-ke-type="opengraph"
                        data-og-title="압구정무니"
                        data-ke-align="alignCenter"
                        data-og-description="서울 강남구 압구정로56길 16"
                        data-og-host="map.kakao.com"
                        data-og-source-url="https://kko.to/BGWF7ipsIb"
                        data-og-image="https://scrap.kakaocdn.net/dn/bHOnwz/hyVS648Rlw/4ikyStn9YBsKQXYpCUUvhk/img.png?width=800&height=400&face=0_0_800_400"
                        data-og-url="https://map.kakao.com/?itemId=762772674"
                        >
                        <a
                            href="https://map.kakao.com/?itemId=762772674"
                            data-source-url="https://kko.to/BGWF7ipsIb"
                        >
                            <div
                            className="og-image"
                            style={{
                                backgroundImage:
                                'url("https://scrap.kakaocdn.net/dn/bHOnwz/hyVS648Rlw/4ikyStn9YBsKQXYpCUUvhk/img.png?width=800&height=400&face=0_0_800_400")'
                            }}
                            >
                            {" "}
                            </div>
                            <div className="og-text">
                            <p className="og-title">압구정무니</p>
                            <p className="og-desc">서울 강남구 압구정로56길 16</p>
                            <p className="og-host">map.kakao.com</p>
                            </div>
                        </a>
                        </figure>
                        <p data-ke-size="size16" style={{ textAlign: "left" }}>
                        <br />
                        </p>
                        <p data-ke-size="size16" style={{ textAlign: "left" }} />
                        <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                        <br />
                        <br />
                        <br />
                        <br />
                        </h4>
                    </div>
                    </div>
                </div>
            </article>
        </Game1Wrapper>
    );
};

export default Food2;

const Game1Wrapper = styled.div`
//   max-width: 860px;
//   height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;