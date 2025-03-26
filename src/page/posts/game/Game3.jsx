import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./game3.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/game3.json";

const Game3 = () => {
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
        <div id="body-div" style={{display: "flex", alignItems: "center", justifyContent: "center"}} class="post-template-default single single-post postid-913 single-format-standard ast-header-break-point ast-separate-container ast-right-sidebar astra-4.9.0 ast-blog-single-style-1 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled">
            <div id="content" className="site-content" style={{height: "auto !important", width: "100%", padding: "0", margin: "0" }}>
            <div className="ast-container" style={{height: "auto !important", display: "flex", justifyContent: "center"}}>
            <div id="primary" className="content-area primary">
                <main id="main" className="site-main">
                    <article
                    className="post-913 post type-post status-publish format-standard has-post-thumbnail hentry category-mapleland ast-article-single"
                    id="post-913"
                    itemType="https://schema.org/CreativeWork"
                    itemScope="itemscope"
                    >
                    <div className="ast-post-format- single-layout-1">
                        <header className="entry-header ">
                        <h1 className="entry-title" itemProp="headline">
                            메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리
                        </h1>
                        <div className="entry-meta">
                            <span className="posted-on">
                            <span className="published" itemProp="datePublished">
                                {" "}
                                7월 26, 2024{" "}
                            </span>
                            </span>
                        </div>
                        </header>
                        {/* .entry-header */}
                        <div className="entry-content clear" itemProp="text">
                        {/* 광고 1 */}
                        <Advertise avenue={selectedAvenue[0]} location={"0"} />
                        <p>
                            이번에는 메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트를 총 정리
                            해보는 시간을 가져보겠습니다. 메이플랜드에서는 정말 값비싼 보상을
                            주는 퀘스트들이 많은데요. 특히나 ‘장갑 공격력 주문서’ 혹은 ‘무기
                            공격력 주문서’ 등 다른 퀘스트보다 월등히 뛰어넘은 보상을 주는
                            퀘스트들이 존재합니다. ‘빅토리아 아일랜드’, ‘오르비스’, ‘루디브리엄’
                            3개의 메이플랜드 전지역 필수 퀘스트들을 총 정리해서 한눈에
                            알아봅시다.
                        </p>
                        <figure
                            id="attachment_914"
                            aria-describedby="caption-attachment-914"
                            style={{ width: 512 }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            fetchpriority="high"
                            decoding="async"
                            className="wp-image-914 size-full"
                            src="https://yulbin.com/wp-content/uploads/2024/07/돈되는-퀘스트.png"
                            alt="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리"
                            width={512}
                            height={512}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 1"
                            srcSet="https://yulbin.com/wp-content/uploads/2024/07/돈되는-퀘스트.png 512w, https://yulbin.com/wp-content/uploads/2024/07/돈되는-퀘스트-300x300.png 300w, https://yulbin.com/wp-content/uploads/2024/07/돈되는-퀘스트-150x150.png 150w"
                            sizes="(max-width: 512px) 100vw, 512px"
                            />
                            <figcaption id="caption-attachment-914" className="wp-caption-text">
                            메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리
                            </figcaption>
                        </figure>
                        <div
                            id="ez-toc-container"
                            className="ez-toc-v2_0_73 counter-hierarchy ez-toc-counter ez-toc-grey ez-toc-container-direction"
                        >
                            <div className="ez-toc-title-container">
                            <p className="ez-toc-title" style={{ cursor: "inherit" }}>
                                페이지 목차
                            </p>
                            <span className="ez-toc-title-toggle">
                                <a
                                href="#"
                                className="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle ez-toc-loaded"
                                aria-label="Toggle Table of Content"
                                >
                                <span className="ez-toc-js-icon-con">
                                    <span className="">
                                    <span className="eztoc-hide" style={{ display: "none" }}>
                                        Toggle
                                    </span>
                                    <span className="ez-toc-icon-toggle-span">
                                        <svg
                                        style={{ fill: "#999", color: "#999" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="list-377408"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        >
                                        <path
                                            d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z"
                                            fill="currentColor"
                                        />
                                        </svg>
                                        <svg
                                        style={{ fill: "#999", color: "#999" }}
                                        className="arrow-unsorted-368013"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10px"
                                        height="10px"
                                        viewBox="0 0 24 24"
                                        version="1.2"
                                        baseProfile="tiny"
                                        >
                                        <path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z" />
                                        </svg>
                                    </span>
                                    </span>
                                </span>
                                </a>
                            </span>
                            </div>
                            <nav>
                            <ul className="ez-toc-list ez-toc-list-level-1 ">
                                <li className="ez-toc-page-1 ez-toc-heading-level-2">
                                <a
                                    className="ez-toc-link ez-toc-heading-1"
                                    href="#%EB%A9%94%EC%9D%B4%ED%94%8C%EB%9E%9C%EB%93%9C_%EC%A0%84%EB%8C%80%EB%A5%99_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8_%EB%8F%88%EB%90%98%EB%8A%94_%ED%80%98%EC%8A%A4%ED%8A%B8_%EC%B4%9D_%EC%A0%95%EB%A6%AC"
                                    title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리"
                                >
                                    메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리
                                </a>
                                <ul className="ez-toc-list-level-3">
                                    <li className="ez-toc-heading-level-3">
                                    <a
                                        className="ez-toc-link ez-toc-heading-2"
                                        href="#%EB%A9%94%EC%9D%B4%ED%94%8C%EB%9E%9C%EB%93%9C_%EC%A0%84%EB%8C%80%EB%A5%99_%EB%8F%88%EB%90%98%EB%8A%94_%ED%80%98%EC%8A%A4%ED%8A%B8_%ED%95%9C%EB%88%88%EC%97%90_%EB%B3%B4%EA%B8%B0"
                                        title="메이플랜드 전대륙 돈되는 퀘스트 한눈에 보기"
                                    >
                                        메이플랜드 전대륙 돈되는 퀘스트 한눈에 보기
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="ez-toc-page-1 ez-toc-heading-level-2">
                                <a
                                    className="ez-toc-link ez-toc-heading-3"
                                    href="#%EB%A9%94%EC%9D%B4%ED%94%8C%EB%9E%9C%EB%93%9C_%EC%A0%84%EB%8C%80%EB%A5%99_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8_%EC%9E%AC%EB%A3%8C_%EC%83%81%EC%84%B8_%EC%A0%95%EB%A6%AC"
                                    title="메이플랜드 전대륙 필수 퀘스트 재료 상세 정리"
                                >
                                    메이플랜드 전대륙 필수 퀘스트 재료 상세 정리
                                </a>
                                <ul className="ez-toc-list-level-3">
                                    <li className="ez-toc-heading-level-3">
                                    <a
                                        className="ez-toc-link ez-toc-heading-4"
                                        href="#%EB%B9%85%ED%86%A0%EB%A6%AC%EC%95%84_%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                                        title="빅토리아 아일랜드 필수 퀘스트"
                                    >
                                        빅토리아 아일랜드 필수 퀘스트
                                    </a>
                                    <ul className="ez-toc-list-level-4">
                                        <li className="ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-5"
                                            href="#%EC%97%B0%EA%B8%88%EC%88%A0%EC%82%AC_%EC%A0%9C%EC%9D%B8_%EC%9E%A5%EA%B3%B5%ED%80%98140%EB%A0%88%EB%B2%A8"
                                            title="연금술사 제인 장공퀘1(40레벨)"
                                        >
                                            연금술사 제인 장공퀘1(40레벨)
                                        </a>
                                        </li>
                                        <li className="ez-toc-page-1 ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-6"
                                            href="#%EC%9D%B4%EC%B9%B4%EB%A3%A8%EC%8A%A4%EC%9D%98_%ED%95%98%EB%8A%98%EC%9D%84_%EB%82%98%EB%8A%94%EC%95%BD42%EB%A0%88%EB%B2%A8"
                                            title="이카루스의 하늘을 나는약(42레벨)"
                                        >
                                            이카루스의 하늘을 나는약(42레벨)
                                        </a>
                                        </li>
                                        <li className="ez-toc-page-1 ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-7"
                                            href="#%EC%9D%B4%EC%96%80%EC%9D%98_%EB%8A%AA%EC%A7%80%EB%8C%80%EC%9D%98_%EC%95%85%EC%96%B4_%ED%80%98%EC%8A%A4%ED%8A%B8_2%EA%B0%9C52%EB%A0%88%EB%B2%A8"
                                            title="이얀의 늪지대의 악어 퀘스트 2개(52레벨)"
                                        >
                                            이얀의 늪지대의 악어 퀘스트 2개(52레벨)
                                        </a>
                                        </li>
                                        <li className="ez-toc-page-1 ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-8"
                                            href="#%EB%8C%80%EC%99%95%EC%A7%80%EB%84%A4_%ED%80%98%EC%8A%A4%ED%8A%B845%EB%A0%88%EB%B2%A8"
                                            title="대왕지네 퀘스트(45레벨)"
                                        >
                                            대왕지네 퀘스트(45레벨)
                                        </a>
                                        </li>
                                        <li className="ez-toc-page-1 ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-9"
                                            href="#%EC%9C%A0%EC%A0%81_%EB%B0%9C%EA%B5%B4%EB%8B%A8%EC%9D%98_%EA%B3%B5%EA%B3%A0%EB%AC%B860%EB%A0%88%EB%B2%A8"
                                            title="유적 발굴단의 공고문(60레벨)"
                                        >
                                            유적 발굴단의 공고문(60레벨)
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="ez-toc-page-1 ez-toc-heading-level-3">
                                    <a
                                        className="ez-toc-link ez-toc-heading-10"
                                        href="#%EC%98%A4%EB%A5%B4%EB%B9%84%EC%8A%A4_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                                        title="오르비스 필수 퀘스트"
                                    >
                                        오르비스 필수 퀘스트
                                    </a>
                                    <ul className="ez-toc-list-level-4">
                                        <li className="ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-11"
                                            href="#%EC%83%88%EB%A1%9C%EC%9A%B4_%EC%84%B8%EA%B3%84%EB%A1%9C40%EB%A0%88%EB%B2%A8"
                                            title="새로운 세계로(40레벨)"
                                        >
                                            새로운 세계로(40레벨)
                                        </a>
                                        </li>
                                        <li className="ez-toc-page-1 ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-12"
                                            href="#%EC%8A%A4%EC%B9%B4%EB%91%90%EB%A5%B4%EC%9D%98_%EC%83%88%EB%A1%9C%EC%9A%B4_%EB%AA%A8%ED%94%BC60%EB%A0%88%EB%B2%A8"
                                            title="스카두르의 새로운 모피(60레벨)"
                                        >
                                            스카두르의 새로운 모피(60레벨)
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="ez-toc-page-1 ez-toc-heading-level-3">
                                    <a
                                        className="ez-toc-link ez-toc-heading-13"
                                        href="#%EB%A3%A8%EB%94%94%EB%B8%8C%EB%A6%AC%EC%97%84_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                                        title="루디브리엄 필수 퀘스트"
                                    >
                                        루디브리엄 필수 퀘스트
                                    </a>
                                    <ul className="ez-toc-list-level-4">
                                        <li className="ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-14"
                                            href="#%EC%97%90%EC%98%A4%EC%8A%A4%ED%83%91%EC%9D%98_%ED%8F%89%ED%99%94_%EC%9E%A5%EA%B3%B5%ED%80%98240%EB%A0%88%EB%B2%A8"
                                            title="에오스탑의 평화 장공퀘2(40레벨)"
                                        >
                                            에오스탑의 평화 장공퀘2(40레벨)
                                        </a>
                                        </li>
                                        <li className="ez-toc-page-1 ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-15"
                                            href="#%EC%96%B4%EB%91%A0%EC%9D%98_%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%EC%9B%90%EC%84%9D31%EB%A0%88%EB%B2%A8"
                                            title="어둠의 크리스탈 원석(31레벨)"
                                        >
                                            어둠의 크리스탈 원석(31레벨)
                                        </a>
                                        </li>
                                        <li className="ez-toc-page-1 ez-toc-heading-level-4">
                                        <a
                                            className="ez-toc-link ez-toc-heading-16"
                                            href="#%EC%A0%9C%ED%83%80_%EB%A0%88%ED%8B%B0%ED%81%98%EB%9E%80%EC%9D%98_%EC%97%AD%EC%82%AC45%EB%A0%88%EB%B2%A8"
                                            title="제타 레티큘란의 역사(45레벨)"
                                        >
                                            제타 레티큘란의 역사(45레벨)
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="ez-toc-page-1 ez-toc-heading-level-3">
                                    <a
                                        className="ez-toc-link ez-toc-heading-17"
                                        href="#%EC%95%84%EC%BF%A0%EC%95%84%EB%A6%AC%EC%9B%80_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                                        title="아쿠아리움 필수 퀘스트"
                                    >
                                        아쿠아리움 필수 퀘스트
                                    </a>
                                    </li>
                                    <li className="ez-toc-page-1 ez-toc-heading-level-3">
                                    <a
                                        className="ez-toc-link ez-toc-heading-18"
                                        href="#%EC%9D%BC%EB%B3%B8_%EC%87%BC%EC%99%80_%EB%A7%88%EC%9D%84_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                                        title="일본 쇼와 마을 필수 퀘스트"
                                    >
                                        일본 쇼와 마을 필수 퀘스트
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        <h2>
                            <span
                            className="ez-toc-section"
                            id="%EB%A9%94%EC%9D%B4%ED%94%8C%EB%9E%9C%EB%93%9C_%EC%A0%84%EB%8C%80%EB%A5%99_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8_%EB%8F%88%EB%90%98%EB%8A%94_%ED%80%98%EC%8A%A4%ED%8A%B8_%EC%B4%9D_%EC%A0%95%EB%A6%AC"
                            ez-toc-data-id="#메이플랜드_전대륙_필수_퀘스트_돈되는_퀘스트_총_정리"
                            />
                            메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리
                            <span className="ez-toc-section-end" />
                        </h2>
                        <p>
                            <strong>
                            ‘빅토리아 아일랜드’, ‘오르비스’, ‘루디브리엄’, 아쿠아리움 4가지의
                            대륙의 크게 돈 되는 메이플랜드 필수 퀘스트
                            </strong>
                            들을 한번에 총 정리해서 모아보았습니다.
                        </p>
                        <p>
                            60레벨에 할 수 있는 ‘스카두르 퀘스트’와 ‘유적 발굴단의 공고문’
                            퀘스트만 제외하면 대체로{" "}
                            <strong>52레벨까지 달성하였다면 대부분 클리어가 가능</strong>합니다.
                        </p>
                        <p>
                            ※ 메이플랜드가 지속적으로 패치되면서 몇몇 고 레벨 퀘스트도
                            추가되었습니다.
                        </p>
                        <p>
                            <strong>
                            전부 다 클리어 하여 판매한다면 2024년 7월 시세 기준 대략 3000만 ~
                            4000만 메소
                            </strong>
                            를 벌 수 있습니다.
                        </p>
                        <p>
                            시세의 변동은 게임의 시기마다 달라지기 때문에 유의해 주세요! 바로
                            아래부터&nbsp; 퀘스트들을 한눈에 보기 쉽게 정리했습니다.
                        </p>
                        <h3>
                            <span
                            className="ez-toc-section"
                            id="%EB%A9%94%EC%9D%B4%ED%94%8C%EB%9E%9C%EB%93%9C_%EC%A0%84%EB%8C%80%EB%A5%99_%EB%8F%88%EB%90%98%EB%8A%94_%ED%80%98%EC%8A%A4%ED%8A%B8_%ED%95%9C%EB%88%88%EC%97%90_%EB%B3%B4%EA%B8%B0"
                            ez-toc-data-id="#메이플랜드_전대륙_돈되는_퀘스트_한눈에_보기"
                            />
                            메이플랜드 전대륙 돈되는 퀘스트 한눈에 보기
                            <span className="ez-toc-section-end" />
                        </h3>
                        <p style={{display: 'flex', justifyContent: "center"}}>
                            <img
                            decoding="async"
                            className="aligncenter wp-image-917 "
                            src="https://yulbin.com/wp-content/uploads/2024/07/펭펭.png"
                            alt="펭펭"
                            width={152}
                            height={122}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 2"
                            />
                        </p>
                        <ul style={{paddingLeft: '20px'}}>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                빅토리아 아일랜드 : ‘장공퀘1’ 연금술사 제인(레벨 40) – 장갑
                                공격력 주문서 60% or 10% 랜덤 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                빅토리아 아일랜드 : 이카루스의 하늘을 나는 약(레벨 42) –
                                이카루스의 망토(★★★이동속도 10/ 점프력 5 /회피15 중 랜덤 1개)
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                빅토리아 아일랜드 : 페리온 이얀 퀘스트 2가지 (레벨 52) – 각각
                                직업별 무기 공격력 주문서 10% 선택 1장, 망토 주문서 60% 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                빅토리아 아일랜드 : 유적 발굴단의 공고문(레벨60) – 각각 직업별
                                무기 공격력 주문서 10% 선택 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                오르비스 : 크리엘 퀘스트 새로운 세계로(레벨 40 / 요정 윙 선행퀘
                                존재) – 랜덤 무기 주문서 60% 1장(장공 60% 포함)
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                오르비스 : 스카두르의 새로운 모피(레벨 60) – 전신 갑옷 주문서
                                60% 4종 중 1개
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                루디브리엄 : ‘장공퀘2’ 에오스탑의 평화(레벨 40) – 장갑 공격력
                                주문서 60% or 10% 랜덤 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                루디브리엄(지구방위본부) : 어둠의 크리스탈 원석 (레벨 31) – 전신
                                갑옷 민첩 / 지력 / 행운 주문서 10% or 60% 중 랜덤 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                루디브리엄(지구방위본부) : 제타 레티큘란의 역사 (레벨 45) –
                                직업별 무기 공격력 주문서 10% 선택 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                빅토리아 아일랜드 세계여행 중국 : 대왕지네 퀘스트(레벨 45) –
                                뇌전 수리검, 장갑 공격력 주문서 60%을 포함한 여러 주문서 중 랜덤
                                보상 1개
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                아쿠아리움 : 바다의 풍경(레벨 30) – 신발 이동속도, 점프력 주문서
                                10% or 60% 랜덤 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                쇼와 마을(일본) : 신문을 읽자(레벨 25) – 전신 갑옷 민첩 주문서
                                10% 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                쇼와 마을(일본) : 사쿠라와 물개 인형(레벨 45) –&nbsp;장갑 공격력
                                주문서 10% 1장
                            </strong>
                            </li>
                            <li style={{marginBottom: '10px'}}>
                            <strong>
                                쇼와 마을(일본) : 어둠으로부터의 해방(레벨 90) –&nbsp;(장공,
                                아공 등을 포함한 10% 주문서) 중 랜덤 1장
                            </strong>
                            </li>
                        </ul>
                        <p>
                            위의 퀘스트들을 최대한 빠르게 돌파한 후{" "}
                            <strong>가격이 가장 비싼 최대 보상을 획득</strong>하면 글을 쓴
                            작성일 기준 <strong>최대 약 4000만 메소</strong> 까지 벌 수
                            있습니다. 최근 메이플랜드 고레벨 유저분들이 빠르게 부캐를 생성하고
                            위의 퀘스트들을 빠르게 돌파하면서 주요 주문서 보상들을 습득하시기도
                            합니다.
                        </p>
                        <p>
                            <strong>
                            추가로 2024년 9월 6일 쇼와 마을이 추가되면서 퀘스트로 인해 더욱
                            값비싼 보상을&nbsp; 획득할 수 있는 기회가 생겼습니다.
                            </strong>
                        </p>
                        <p>
                            그리고 언제 시세가 변할지 모르지만 예전과는 다르게 10% 주문서들이
                            비싼 가격에 거래가 되고 있는데요. 이중에서 특히나 가격이 비싼 ‘아대
                            공격력 주문서 10%’가 가장 비싸게 거래가 되기 때문에 도적으로 새로
                            키우시면서 보상을 획득하는 유저분들도 많이 존재합니다. 게다가 10%
                            주문서가 무기나 장비에 성공적으로 발린다면 수 배에 달하는 엄청난
                            가격으로 판매할 수도 있습니다.
                        </p>
                        <h2>
                            <span
                            className="ez-toc-section"
                            id="%EB%A9%94%EC%9D%B4%ED%94%8C%EB%9E%9C%EB%93%9C_%EC%A0%84%EB%8C%80%EB%A5%99_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8_%EC%9E%AC%EB%A3%8C_%EC%83%81%EC%84%B8_%EC%A0%95%EB%A6%AC"
                            ez-toc-data-id="#메이플랜드_전대륙_필수_퀘스트_재료_상세_정리"
                            />
                            메이플랜드 전대륙 필수 퀘스트 재료 상세 정리
                            <span className="ez-toc-section-end" />
                        </h2>
                        <h3>
                            <span
                            className="ez-toc-section"
                            id="%EB%B9%85%ED%86%A0%EB%A6%AC%EC%95%84_%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                            ez-toc-data-id="#빅토리아_아일랜드_필수_퀘스트"
                            />
                            빅토리아 아일랜드 필수 퀘스트
                            <span className="ez-toc-section-end" />
                        </h3>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%97%B0%EA%B8%88%EC%88%A0%EC%82%AC_%EC%A0%9C%EC%9D%B8_%EC%9E%A5%EA%B3%B5%ED%80%98140%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#연금술사_제인_장공퀘140레벨"
                            />
                            연금술사 제인 장공퀘1(40레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <figure
                            id="attachment_928"
                            aria-describedby="caption-attachment-928"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            decoding="async"
                            className="wp-image-928 "
                            src="https://yulbin.com/wp-content/uploads/2024/07/제인.png"
                            alt="메이플랜드 제인"
                            width={135}
                            height={154}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 3"
                            />
                            <figcaption id="caption-attachment-928" className="wp-caption-text">
                            메이플랜드 제인
                            </figcaption>
                        </figure>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 리스항구</strong>
                            </li>
                            <li>
                            <strong>NPC – 제인&nbsp;</strong>
                            </li>
                            <li>
                            <strong>
                                재료 – 이상한 느낌의 약 130개, 멜러디의 개구리 50개, 맑은 물
                                1개, 드레이크의 피 3개, 머쉬맘의 포자 1개, 용의 가죽 20개,
                                고목나무 수액 10개, 달의 돌1개
                            </strong>
                            </li>
                            <li>
                            <strong>보상 – 장갑 공격력 주문서 60% or 10% 랜덤 1장</strong>
                            </li>
                        </ul>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%9D%B4%EC%B9%B4%EB%A3%A8%EC%8A%A4%EC%9D%98_%ED%95%98%EB%8A%98%EC%9D%84_%EB%82%98%EB%8A%94%EC%95%BD42%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#이카루스의_하늘을_나는약42레벨"
                            />
                            이카루스의 하늘을 나는약(42레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <p>
                            10레벨, 32레벨, 37레벨에 할 수 있는 엘리니아의 ‘요정 윙’과
                            ‘이카루스’의 모든 선행 퀘스트를 클리어 해야합니다.
                        </p>
                        <figure
                            id="attachment_927"
                            aria-describedby="caption-attachment-927"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-927 "
                            src="https://yulbin.com/wp-content/uploads/2024/07/이카루스.png"
                            alt="메이플랜드 이카루스"
                            width={142}
                            height={171}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 4"
                            />
                            <figcaption id="caption-attachment-927" className="wp-caption-text">
                            메이플랜드 이카루스
                            </figcaption>
                        </figure>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 커닝시티</strong>
                            </li>
                            <li>
                            <strong>NPC – 이카루스</strong>
                            </li>
                            <li>
                            <strong>
                                재료(모든 선행퀘스트 포함) – 나뭇가지 70개, 물컹한 액체 70개,
                                슬라임의 방울 10개, 스티지의 날개 50개, 뻣뻣한 깃털 50개, 가공된
                                나무 10개, 식탁보 100개, 악어가죽 주머니 10개(퀘스트 재료),
                                이상한 느낌의 약 50개, 마녀풀 잎사귀 20개
                            </strong>
                            </li>
                            <li>
                            <strong>
                                보상 – 이카루스의 망토(★★★이동속도 10/ 점프력 5 /회피15 중 랜덤
                                1개)
                            </strong>
                            </li>
                        </ul>
                        <p className="entry-title" style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%9d%b4%ec%b9%b4%eb%a3%a8%ec%8a%a4-%eb%a7%9d%ed%86%a0-%ed%80%98%ec%8a%a4%ed%8a%b8-%eb%b9%a0%eb%a5%b4%ea%b2%8c-%ec%95%8c%ec%95%84%eb%b3%b4%ea%b8%b0/">
                            <strong>&gt;&gt;이카루스 망토 퀘스트 상세 공략&lt;&lt;</strong>
                            </a>
                        </p>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%9D%B4%EC%96%80%EC%9D%98_%EB%8A%AA%EC%A7%80%EB%8C%80%EC%9D%98_%EC%95%85%EC%96%B4_%ED%80%98%EC%8A%A4%ED%8A%B8_2%EA%B0%9C52%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#이얀의_늪지대의_악어_퀘스트_2개52레벨"
                            />
                            이얀의 늪지대의 악어 퀘스트 2개(52레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <p>
                            10레벨에 할 수 있는 헤네시스의 ‘브루스’에게 선행 퀘스트를
                            완료해야합니다. 이 퀘스트는 ‘늪지대의 악어1’과 ‘늪지대의 악어2’ 두
                            가지 퀘스트가 존재합니다.
                        </p>
                        <figure
                            id="attachment_926"
                            aria-describedby="caption-attachment-926"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-926 "
                            src="https://yulbin.com/wp-content/uploads/2024/07/이얀.png"
                            alt="메이플랜드 이얀"
                            width={112}
                            height={156}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 5"
                            />
                            <figcaption id="caption-attachment-926" className="wp-caption-text">
                            메이플랜드 이얀
                            </figcaption>
                        </figure>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 페리온</strong>
                            </li>
                            <li>
                            <strong>NPC – 이얀</strong>
                            </li>
                            <li>
                            <strong>
                                재료(선행퀘스트 포함) – 스포아의 포자 10개, 주황버섯의 갓 40개,
                                주니어 네키 가죽 20개, 리게이터 가죽 50개
                            </strong>
                            </li>
                            <li>
                            <strong>보상 –</strong>{" "}
                            <strong>
                                각각 직업별 무기 공격력 주문서 10% 선택 1장, 망토 주문서 60% 1장
                            </strong>
                            </li>
                        </ul>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EB%8C%80%EC%99%95%EC%A7%80%EB%84%A4_%ED%80%98%EC%8A%A4%ED%8A%B845%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#대왕지네_퀘스트45레벨"
                            />
                            대왕지네 퀘스트(45레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <p>
                            세계여행을 위해 각 마을에 있는 스피넬을 통해서 중국으로 이동해
                            주세요.
                        </p>
                        <figure
                            id="attachment_925"
                            aria-describedby="caption-attachment-925"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-925 size-full"
                            src="https://yulbin.com/wp-content/uploads/2024/07/양씨-아저씨.png"
                            alt="메이플랜드 양씨 아저씨"
                            width={152}
                            height={168}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 6"
                            />
                            <figcaption id="caption-attachment-925" className="wp-caption-text">
                            메이플랜드 양씨 아저씨
                            </figcaption>
                        </figure>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 세계여행 중국 서주갈림길</strong>
                            </li>
                            <li>
                            <strong>NPC – 양씨 아저씨</strong>
                            </li>
                            <li>
                            <strong>재료 – 양털, 흰 뿔, 검은 뿔, 코뚜레 각각 100개 씩</strong>
                            </li>
                            <li>
                            <strong>
                                보상 – 뇌전 수리검, 장갑 공격력 주문서 60%을 포함한 여러 주문서
                                중 랜덤 보상 1개
                            </strong>
                            </li>
                        </ul>
                        <p>
                            자세한 퀘스트 진행 내용은 아래의 링크를 확인하시면 상세하게 알 수
                            있습니다.
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%eb%87%8c%ec%a0%84-%ed%80%98%ec%8a%a4%ed%8a%b8-%ea%b3%b5%eb%9e%b5/">
                            <strong>&gt;&gt;메이플랜드 뇌전 퀘스트 공략&lt;&lt;</strong>
                            </a>
                        </p>

                        {/* 광고 2 */}
                        <Advertise avenue={selectedAvenue[1]} location={"1"} />

                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%9C%A0%EC%A0%81_%EB%B0%9C%EA%B5%B4%EB%8B%A8%EC%9D%98_%EA%B3%B5%EA%B3%A0%EB%AC%B860%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#유적_발굴단의_공고문60레벨"
                            />
                            유적 발굴단의 공고문(60레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <figure
                            id="attachment_1170"
                            aria-describedby="caption-attachment-1170"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-1170 size-full"
                            src="https://yulbin.com/wp-content/uploads/2024/07/유적-발굴단.png"
                            alt="메이플랜드 유적발굴단 게시판"
                            width={374}
                            height={255}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 7"
                            srcSet="https://yulbin.com/wp-content/uploads/2024/07/유적-발굴단.png 374w, https://yulbin.com/wp-content/uploads/2024/07/유적-발굴단-300x205.png 300w"
                            sizes="auto, (max-width: 374px) 100vw, 374px"
                            />
                            <figcaption
                            id="caption-attachment-1170"
                            className="wp-caption-text"
                            >
                            메이플랜드 유적발굴단 게시판
                            </figcaption>
                        </figure>
                        <p>
                            해당 퀘스트는 2024년 8월 중순 아쿠아리움 지역 출시와 함께
                            메이플랜드에 출시되었습니다.
                        </p>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 페리온 유적발굴단 캠프</strong>
                            </li>
                            <li>
                            <strong>NPC – 메이플랜드 유적발굴단 게시판</strong>
                            </li>
                            <li>
                            <strong>재료 – 갈비뼈 60개, 골반뼈 40개, 말머리뼈 20개</strong>
                            </li>
                            <li>
                            <strong>보상 –</strong>{" "}
                            <strong>각각 직업별 무기 공격력 주문서 10% 선택 1장</strong>
                            </li>
                        </ul>
                        <p>
                            해당 퀘스트는 몬스터 처지도 같이 해야 하기 때문에 퀘스트를 먼저 꼭
                            받고 진행해 주세요!
                        </p>
                        <h3>
                            <span
                            className="ez-toc-section"
                            id="%EC%98%A4%EB%A5%B4%EB%B9%84%EC%8A%A4_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                            ez-toc-data-id="#오르비스_필수_퀘스트"
                            />
                            오르비스 필수 퀘스트
                            <span className="ez-toc-section-end" />
                        </h3>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%83%88%EB%A1%9C%EC%9A%B4_%EC%84%B8%EA%B3%84%EB%A1%9C40%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#새로운_세계로40레벨"
                            />
                            새로운 세계로(40레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <figure
                            id="attachment_924"
                            aria-describedby="caption-attachment-924"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-924 "
                            src="https://yulbin.com/wp-content/uploads/2024/07/크리엘.png"
                            alt="메이플랜드 크리엘"
                            width={154}
                            height={201}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 8"
                            />
                            <figcaption id="caption-attachment-924" className="wp-caption-text">
                            메이플랜드 크리엘
                            </figcaption>
                        </figure>
                        <p>
                            이 퀘스트는 엘리니아에 있는 ‘요정 윙’의 선행 퀘스트를
                            완료해야합니다.
                        </p>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>
                                장소 – 엘리니아(요정 윙에게서 퀘스트 시작) → 오르비스 잡화점
                            </strong>
                            </li>
                            <li>
                            <strong>NPC – 요정 윙, 요정 크리엘</strong>
                            </li>
                            <li>
                            <strong>
                                재료 – 빈 물약별(오르비스 상자 파괴), 단단한 뿔 200개, 네펜데스
                                씨앗 50개
                            </strong>
                            </li>
                            <li>
                            <strong>보상 – 랜덤 무기 주문서 60% 1장(장공 60% 포함)</strong>
                            </li>
                        </ul>
                        <p className="entry-title" style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%83%88%eb%a1%9c%ec%9a%b4-%ec%84%b8%ea%b3%84%eb%a1%9c-%ed%80%98-%ec%a0%95%eb%a6%ac-%ec%9a%94%ec%a0%95-%ed%81%ac%eb%a6%ac%ec%97%98/">
                            <strong>
                                &gt;&gt;메이플랜드 새로운 세계로 퀘스트 정리 보러가기&lt;&lt;
                            </strong>
                            </a>
                        </p>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%8A%A4%EC%B9%B4%EB%91%90%EB%A5%B4%EC%9D%98_%EC%83%88%EB%A1%9C%EC%9A%B4_%EB%AA%A8%ED%94%BC60%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#스카두르의_새로운_모피60레벨"
                            />
                            스카두르의 새로운 모피(60레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <figure
                            id="attachment_923"
                            aria-describedby="caption-attachment-923"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-923 size-full"
                            src="https://yulbin.com/wp-content/uploads/2024/07/스카두르.png"
                            alt="메이플랜드 스카두르"
                            width={162}
                            height={144}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 9"
                            />
                            <figcaption id="caption-attachment-923" className="wp-caption-text">
                            메이플랜드 스카두르
                            </figcaption>
                        </figure>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 엘나스</strong>
                            </li>
                            <li>
                            <strong>
                                NPC -스카두르 (퀘스트 시작은 오르비스의 리사에게 시작)
                            </strong>
                            </li>
                            <li>
                            <strong>
                                재료 – 헥터의 꼬리 300개, 화이트팽의 꼬리 300개, 예티의 뿔
                                100개, 사파이어의 원석 60개
                            </strong>
                            </li>
                            <li>
                            <strong>
                                보상 – 전신 갑옷 주문서 60% 4종 중 1개(민첩, 행운, 지력, 방어력)
                            </strong>
                            </li>
                        </ul>
                        <p className="entry-title" style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%8a%a4%ec%b9%b4%eb%91%90%eb%a5%b4%ec%9d%98-%eb%aa%a8%ed%94%bc-%ed%80%98%ec%8a%a4%ed%8a%b8-%eb%b9%a0%eb%a5%b8-%ec%a0%95%eb%a6%ac/">
                            <strong>
                                &gt;&gt;메이플랜드 스카두르의 모피 퀘스트 빠른 정리&lt;&lt;
                            </strong>
                            </a>
                        </p>
                        <h3>
                            <span
                            className="ez-toc-section"
                            id="%EB%A3%A8%EB%94%94%EB%B8%8C%EB%A6%AC%EC%97%84_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                            ez-toc-data-id="#루디브리엄_필수_퀘스트"
                            />
                            루디브리엄 필수 퀘스트
                            <span className="ez-toc-section-end" />
                        </h3>
                        <figure
                            id="attachment_922"
                            aria-describedby="caption-attachment-922"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-922"
                            src="https://yulbin.com/wp-content/uploads/2024/07/마르셀-1.png"
                            alt="메이플랜드 마르셀"
                            width={125}
                            height={235}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 10"
                            />
                            <figcaption id="caption-attachment-922" className="wp-caption-text">
                            메이플랜드 마르셀
                            </figcaption>
                        </figure>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%97%90%EC%98%A4%EC%8A%A4%ED%83%91%EC%9D%98_%ED%8F%89%ED%99%94_%EC%9E%A5%EA%B3%B5%ED%80%98240%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#에오스탑의_평화_장공퀘240레벨"
                            />
                            에오스탑의 평화 장공퀘2(40레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 루디브리엄</strong>
                            </li>
                            <li>
                            <strong>NPC – 마르셀</strong>
                            </li>
                            <li>
                            <strong>
                                재료 – 재료보다는 몬스터 처치가 주된 퀘스트 입니다. 자세한
                                퀘스트 내용은 아래 에서 확인하실 수 있습니다.
                            </strong>
                            </li>
                            <li>
                            <strong>보상 – 장갑 공격력 주문서 60% or 10% 랜덤 1장</strong>
                            </li>
                        </ul>
                        <p className="entry-title" style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%eb%a3%a8%eb%94%94%eb%b8%8c%eb%a6%ac%ec%97%84-%ec%9e%a5%ea%b3%b5%ed%80%98-%ed%95%9c%eb%88%88%ec%97%90-%eb%b3%b4%ea%b8%b0/">
                            <strong>
                                &gt;&gt;메이플랜드 루디브리엄 장공퀘 공략 자세히 보기&lt;&lt;
                            </strong>
                            </a>
                        </p>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%96%B4%EB%91%A0%EC%9D%98_%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%EC%9B%90%EC%84%9D31%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#어둠의_크리스탈_원석31레벨"
                            />
                            어둠의 크리스탈 원석(31레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <figure
                            id="attachment_921"
                            aria-describedby="caption-attachment-921"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-921"
                            src="https://yulbin.com/wp-content/uploads/2024/07/마에스터-장군-.png"
                            alt="메이플랜드 마에스터 장군"
                            width={166}
                            height={239}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 11"
                            />
                            <figcaption id="caption-attachment-921" className="wp-caption-text">
                            메이플랜드 마에스터 장군
                            </figcaption>
                        </figure>
                        <ul style={{paddingLeft: '20px'}}>
                            <li>
                            <strong>장소 – 루디브리엄 지구방위본부</strong>
                            </li>
                            <li>
                            <strong>NPC – 마에스터 장군</strong>
                            </li>
                            <li>
                            <strong>
                                재료 – 해당 퀘스트도 재료보다는 퀘스트 라인의 따라서 몬스터를
                                잡고 퀘스트재료를 모아야 하기 때문에 상세한 공략은 아래 링크에서
                                확인하실 수 있습니다.
                            </strong>
                            </li>
                            <li>
                            <strong>
                                보상 – 전신 갑옷 민첩 / 지력 / 행운 주문서 10% or 60% 중 랜덤
                                1장
                            </strong>
                            </li>
                        </ul>
                        <p style={{ textAlign: "center" }}>
                            <a
                            style={{
                                fontSize: 16,
                                fontWeight: "var(--ast-blog-title-font-weight,normal)",
                                textAlign: "center",
                                backgroundColor: "#ffffff"
                            }}
                            href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%eb%b9%9b%ec%9d%84-%ec%9e%83%ec%9d%80-%ed%81%ac%eb%a6%ac%ec%8a%a4%ed%83%88-%ed%80%98%ec%8a%a4%ed%8a%b8-%ec%a0%84%eb%af%bc-%ec%a3%bc%eb%8a%94-%ed%80%98/"
                            >
                            <strong>
                                &gt;&gt;메이플랜드 빛을 잃은 크리스탈 퀘스트 공략 자세히
                                보기&lt;&lt;
                            </strong>
                            </a>
                        </p>
                        <h4>
                            <span
                            className="ez-toc-section"
                            id="%EC%A0%9C%ED%83%80_%EB%A0%88%ED%8B%B0%ED%81%98%EB%9E%80%EC%9D%98_%EC%97%AD%EC%82%AC45%EB%A0%88%EB%B2%A8"
                            ez-toc-data-id="#제타_레티큘란의_역사45레벨"
                            />
                            제타 레티큘란의 역사(45레벨)
                            <span className="ez-toc-section-end" />
                        </h4>
                        <figure
                            id="attachment_920"
                            aria-describedby="caption-attachment-920"
                            style={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                            className="wp-caption aligncenter"
                        >
                            <img
                            loading="lazy"
                            decoding="async"
                            className="wp-image-920"
                            src="https://yulbin.com/wp-content/uploads/2024/07/메소레인저-블랙.png"
                            alt="메이플랜드 메소레인저 블랙"
                            width={177}
                            height={305}
                            title="메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리 12"
                            />
                            <figcaption id="caption-attachment-920" className="wp-caption-text">
                            메이플랜드 메소레인저 블랙
                            </figcaption>
                        </figure>
                        <p>
                            <strong>장소 – 루디브리엄 지구방위본부 쿨란초원1</strong>
                        </p>
                        <p>
                            <strong>NPC – 메소레인저 블랙</strong>
                        </p>
                        <p>
                            <strong>
                            재료 – 해당 퀘스트도 재료보다 진행하면서 몬스터를 잡고 퀘스트
                            재료를 모으는 것으로 이루어진 퀘스트입니다.
                            </strong>
                        </p>
                        <p>
                            <strong>보상 – 직업별 무기 공격력 주문서 10% 선택 1장</strong>
                        </p>
                        <p className="entry-title" style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%a0%9c%ed%83%80-%eb%a0%88%ed%8b%b0%ed%81%98%eb%9e%80%ec%9d%98-%ec%97%ad%ec%82%ac/">
                            <strong>
                                &gt;&gt;메이플랜드 제타 레티큘란의 역사 무기 주문서
                                퀘스트&lt;&lt;
                            </strong>
                            </a>
                        </p>
                        <h3>
                            <span
                            className="ez-toc-section"
                            id="%EC%95%84%EC%BF%A0%EC%95%84%EB%A6%AC%EC%9B%80_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                            ez-toc-data-id="#아쿠아리움_필수_퀘스트"
                            />
                            아쿠아리움 필수 퀘스트
                            <span className="ez-toc-section-end" />
                        </h3>
                        <p>
                            2024년 8월 아쿠아리움 지역이 출시되면서 여러가지 퀘스트가
                            추가되었습니다.
                        </p>
                        <p>
                            여기서 2가지 정도의 필수 퀘스트가 존재하는데요. 아래 링크를 통해서
                            자세히 확인하실 수 있습니다.
                        </p>
                        <p className="entry-title" style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%95%84%ec%bf%a0%ec%95%84%eb%a6%ac%ec%9b%80-%ed%95%84%ec%88%98-%ed%80%98%ec%8a%a4%ed%8a%b8-%ec%a0%95%eb%a6%ac/">
                            <strong>
                                &gt;&gt;메이플랜드 아쿠아리움 필수 퀘스트 정리&lt;&lt;
                            </strong>
                            </a>
                        </p>
                        <h3>
                            <span
                            className="ez-toc-section"
                            id="%EC%9D%BC%EB%B3%B8_%EC%87%BC%EC%99%80_%EB%A7%88%EC%9D%84_%ED%95%84%EC%88%98_%ED%80%98%EC%8A%A4%ED%8A%B8"
                            ez-toc-data-id="#일본_쇼와_마을_필수_퀘스트"
                            />
                            일본 쇼와 마을 필수 퀘스트
                            <span className="ez-toc-section-end" />
                        </h3>
                        <p>
                            2024년 9월 세계여행 일본에서 갈 수 있는 쇼와 마을이라는 신규 지역이
                            추가 되었습니다.
                        </p>
                        <p>
                            이와 동시에 여러가지 필수 퀘스트들이 출시되었는데요. 아래 링크를
                            통해서 자세히 확인 가능합니다.
                        </p>
                        <p className="entry-title" style={{ textAlign: "center" }}>
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%87%bc%ec%99%80-%eb%a7%88%ec%9d%84-%ed%80%98%ec%8a%a4%ed%8a%b8-%ed%95%84%ec%88%98-%ec%a3%bc%eb%ac%b8%ec%84%9c-%ed%80%98-%ec%a0%95%eb%a6%ac/">
                            <strong>
                                &gt;&gt;메이플랜드 쇼와 마을 퀘스트 필수 주문서 퀘 정리&lt;&lt;
                            </strong>
                            </a>
                        </p>

                        {/* 광고 3 */}
                        <Advertise avenue={selectedAvenue[2]} location={"2"} />

                        <h5>마치며</h5>
                        <p>
                            이번 포스팅에서는 메이플랜드 전지역 필수 퀘스트와 전지역 돈되는
                            퀘스트에 대해서 알아보았습니다. 물론 최대 보상이 떠야 많은 메소를 벌
                            수 있지만 메이플랜드를 처음 시작하거나 자주 플레이 하지 않는 직장인
                            분들에게는 정말 도움이 되는 퀘스트들 이라고 생각합니다. 제 글을
                            보시는 모든 분들에게 행운이 따라 최상의 보상을 획득하셨으면 합니다.
                        </p>
                        <h5>같이 보면 좋은글</h5>
                        <p className="entry-title">
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%9e%90%ec%bf%b0%ec%9d%98-%ed%88%ac%ea%b5%ac-%ea%b5%ac%eb%a7%a4-%ea%b0%80%ec%9d%b4%eb%93%9c/">
                            <strong>메이플랜드 자쿰의 투구 구매 가이드</strong>
                            </a>
                        </p>
                        <p className="entry-title">
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%9e%a5%ea%b3%b5-%eb%93%9c%eb%9e%8d-%eb%aa%ac%ec%8a%a4%ed%84%b0-%eb%aa%a8%eb%93%a0-%ec%9e%a5%ea%b3%b5-%ed%80%98%ec%8a%a4%ed%8a%b8-%ec%a0%95%eb%a6%ac/">
                            <strong>메이플랜드 장공 드랍 몬스터 모든 장공 퀘스트 정리</strong>
                            </a>
                        </p>
                        <p className="entry-title">
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ea%b7%80%ec%a7%80-%eb%93%9c%eb%9e%8d-%eb%aa%ac%ec%8a%a4%ed%84%b0-%ec%a2%85%eb%a5%98-%eb%b0%8f-%ed%99%95%eb%a5%a0-%ec%9c%84%ec%b9%98/">
                            <strong>메이플랜드 귀지 드랍 몬스터 종류 및 확률 위치</strong>
                            </a>
                        </p>
                        <p className="entry-title">
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%a0%84%eb%af%bc-%eb%93%9c%eb%9e%8d-%eb%aa%ac%ec%8a%a4%ed%84%b0-%ec%a2%85%eb%a5%98-%eb%b0%8f-%ed%99%95%eb%a5%a0-%ec%9c%84%ec%b9%98/">
                            <strong>메이플랜드 전민 드랍 몬스터 종류 및 확률 위치</strong>
                            </a>
                        </p>
                        <p className="entry-title">
                            <a href="https://yulbin.com/%eb%a9%94%ec%9d%b4%ed%94%8c%eb%9e%9c%eb%93%9c-%ec%95%84%ea%b3%b5-%eb%93%9c%eb%9e%8d-%eb%aa%ac%ec%8a%a4%ed%84%b0-%ed%99%95%eb%a5%a0-%ec%9c%84%ec%b9%98-%ec%a0%95%eb%a6%ac/">
                            <strong>메이플랜드 아공 드랍 몬스터 확률 위치 정리</strong>
                            </a>
                        </p>
                        {/* CONTENT END 2 */}
                        </div>
                        {/* .entry-content .clear */}
                    </div>
                    </article>
                </main>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Game3;

const Game1Wrapper = styled.div`
  max-width: 860px;
  height: 100%;

  padding: 0 18px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;