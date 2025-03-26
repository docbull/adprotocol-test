import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./hobby1.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/hobby1.json";

const Hobby1 = () => {
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
      <div className="min-w-xs overflow-x-hidden bg-h-100 text-h-900 dark:bg-h-800 dark:text-h-200" id="tt-body-page">
      <div className="pl-0 break-all xl:pl-64" style={{height: "auto !important"}}>
      <main className="pb-14 lg:pb-18 relative" id="main" style={{height: "auto !important"}}>
      <div id="permalink" style={{height: "auto !important"}}>
      <header className="h-64 mb-10 flex justify-center items-center border-b border-b-solid border-b-h-200 dark:border-b-h-700 lg:mb-16">
        <div className='thumbnail absolute right-0 top-0 w-full h-64 before:backdrop-blur before:content-[""] before:absolute before:right-0 before:top-0 before:w-full before:h-64 before:bg-h-900/50 before:z-10 [&+.description]:text-h-200'>
          <img
            className="absolute right-0 top-0 w-full h-64 z-0 object-cover"
            src="https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fm8DQ0%2FbtsMci68872%2F8s6qkjJDr3AH4JlScJYtmK%2Fimg.webp"
            alt=""
          />
        </div>
        <div className="description flex flex-col items-center gap-y-3 z-20 relative mx-4 text-h-800 dark:text-h-200 lg:mx-0">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">
            2025 넷플릭스, 역대급 대작 영화 추천 라인업 공개! (최신판)
          </h1>
          <div className="flex gap-x-1 text-sm">
            <time>2025. 2. 7. 18:11</time>
            <a href="/category/%EC%98%81%ED%99%94/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4">
              · 영화/넷플릭스
            </a>
            <span className="admin flex gap-x-1"></span>
          </div>
        </div>
      </header>
      <div className="px-4 w-full lg:max-w-screen-lg lg:w-pem lg:px-0 lg:mx-auto" style={{height: "auto !important"}}>
      <article className="relative" id="content" x-ref="content" style={{height: "auto !important", width: "auto", margin: "0", padding: "0"}}>
      <div x-data="content" style={{height: "auto !important"}}>
      <div id="article" x-ref="article" style={{ height: "auto !important" }}>
        <template x-ref="articleTemplate" x-teleport="#article" />
        <div style={{ height: "auto !important" }}>
          {/* System - START */}
          {/* System - END */}
          <div
            className="tt_article_useless_p_margin contents_style"
            style={{ height: "auto !important" }}
          >
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="2025-넷플릭스-영화-추천-라인업-1.webp"
              data-origin-width={767}
              data-origin-height={767}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 767,
                maxWidth: 767
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/m8DQ0/btsMci68872/8s6qkjJDr3AH4JlScJYtmK/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/m8DQ0/btsMci68872/8s6qkjJDr3AH4JlScJYtmK/img.webp"
                data-alt="2025 넷플릭스, 역대급 대작 영화 추천 라인업"
                style={{ paddingBottom: "100%" }}
              >
                <img
                  alt="2025 넷플릭스, 영화 추천 라인업 썸네일"
                  loading="lazy"
                  width={767}
                  height={767}
                  data-filename="2025-넷플릭스-영화-추천-라인업-1.webp"
                  data-origin-width={767}
                  data-origin-height={767}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/m8DQ0/btsMci68872/8s6qkjJDr3AH4JlScJYtmK/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fm8DQ0%2FbtsMci68872%2F8s6qkjJDr3AH4JlScJYtmK%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fm8DQ0%2FbtsMci68872%2F8s6qkjJDr3AH4JlScJYtmK%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/m8DQ0/btsMci68872/8s6qkjJDr3AH4JlScJYtmK/img.webp"
                />
              </span>
              <figcaption>2025 넷플릭스, 역대급 대작 영화 추천 라인업</figcaption>
            </figure>
            <p />
            <p data-ke-size="size18">
              지난 한 해를 마무리하며 새로운 2025년에는 어떤 작품들이 우리의 밤을
              뜨겁게 달궈줄까요? 넷플릭스는 다양한 장르의 블록버스터급 기대작들을
              준비하여 2025년을 더욱 풍성하게 만들어줄 예정입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            {/* 광고 1 */}
            <Advertise avenue={selectedAvenue[0]} location={"0"} />
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              새로운 2025년에는 넷플릭스에서 어떤 작품들이 공개될까요? 지금부터 함께
              2025년 넷플릭스 글로벌 대작들을 살펴보며 여러분의 시청 리스트를 채워나가
              보세요!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h2
              data-ke-size="size26"
              id="1.%20SF%3A%20%EC%9D%B8%EA%B0%84%EA%B3%BC%2C%20%EB%A1%9C%EB%B4%87%2C%20%EA%B3%B5%EC%A1%B4%EC%9D%98%20%EB%AF%B8%EB%9E%98%EB%A5%BC%20%EB%AC%BB%EB%8B%A4-1"
            >
              <a href="#1.%20SF%3A%20%EC%9D%B8%EA%B0%84%EA%B3%BC%2C%20%EB%A1%9C%EB%B4%87%2C%20%EA%B3%B5%EC%A1%B4%EC%9D%98%20%EB%AF%B8%EB%9E%98%EB%A5%BC%20%EB%AC%BB%EB%8B%A4-1">
                1. SF: 인간과, 로봇, 공존의 미래를 묻다
              </a>
            </h2>
            <h3
              data-ke-size="size23"
              id="%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD%20%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-1"
            >
              <a href="#%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD%20%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-1">
                일렉트릭 스테이트
              </a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="일렉트릭-스테이트.webp"
              data-origin-width={800}
              data-origin-height={1267}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/BeVDr/btsMbt9EwQH/AcsnOHUwl7okySo8XYWfB1/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/BeVDr/btsMbt9EwQH/AcsnOHUwl7okySo8XYWfB1/img.webp"
                data-alt="일렉트릭 스테이트"
                style={{ paddingBottom: "158.375%" }}
              >
                <img
                  alt="일렉트릭 스테이트"
                  loading="lazy"
                  width={800}
                  height={1267}
                  data-filename="일렉트릭-스테이트.webp"
                  data-origin-width={800}
                  data-origin-height={1267}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/BeVDr/btsMbt9EwQH/AcsnOHUwl7okySo8XYWfB1/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBeVDr%2FbtsMbt9EwQH%2FAcsnOHUwl7okySo8XYWfB1%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBeVDr%2FbtsMbt9EwQH%2FAcsnOHUwl7okySo8XYWfB1%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/BeVDr/btsMbt9EwQH/AcsnOHUwl7okySo8XYWfB1/img.webp"
                />
              </span>
              <figcaption>일렉트릭 스테이트</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 3월 14일</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>SF, 모험, 블록버스터</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>루소 형제</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>스티븐 맥필리 외</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>원작</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    그래픽 노블 'The Electric State'
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    밀리 바비 브라운, 크리스 프렛 외
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    <a
                      href="https://youtu.be/lqUJ61rID7M?si=fQfqjwytDwZTSNr-"
                      target="_blank"
                      rel="noopener"
                    >
                      일렉트릭 스테이트 예고편
                    </a>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>시청하기</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    <a
                      href="https://www.netflix.com/title/81601562"
                      target="_blank"
                      rel="noopener"
                    >
                      넷플릭스
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년 3월 14일, 넷플릭스가 야심차게 선보이는 SF 블록버스터 대작, "
              <a
                href="https://1uras.5yuk.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4-%EC%B6%9C%EC%97%B0%EC%A7%84-%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC-%EC%98%88%EA%B3%A0%ED%8E%B8%EA%B9%8C%EC%A7%80"
                target="_blank"
                rel="noopener"
              >
                일렉트릭 스테이트
              </a>
              "가 전 세계 시청자들을 사로잡을 준비를 마쳤습니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              "어벤져스" 시리즈를 연출한 루소 형제가 메가폰을 잡고, "기묘한 이야기"의
              밀리 바비 브라운과 "가디언즈 오브 갤럭시"의 크리스 프랫이 주연을 맡아
              압도적인 스케일과 화려한 볼거리를 예고하고 있는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              영화는 1990년대, 로봇들의 반란으로 황폐화된 지구. 가족을 잃은 소녀
              '미셸'은 동생을 찾기 위해 미스터리한 로봇과 괴짜 떠돌이와 함께 위험한
              여정에 나서는 이야기로 전개되죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              무엇보다 넷플릭스 "일렉트릭 스테이트"는 탄탄한 스토리와 매력적인
              캐릭터는 물론, 최첨단 기술로 구현된 화려한 비주얼과 스펙터클한 액션으로
              시청자들에게 잊지 못할 경험을 선사할 것입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              때문에 2025년, 넷플릭스가 선보이는 SF 블록버스터의 새로운 기준!
              "일렉트릭 스테이트"를 놓치지 마시기 바랍니다! 이 외에도 이 영화에 대해
              좀 더 알고 싶다면 아래 관련 문서를 참고해 주세요!
            </p>
            <ul style={{ listStyleType: "disc" }} data-ke-list-type="disc">
              <li>
                <a
                  href="https://1uras.5yuk.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4-%EC%B6%9C%EC%97%B0%EC%A7%84-%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC-%EC%98%88%EA%B3%A0%ED%8E%B8%EA%B9%8C%EC%A7%80"
                  target="_blank"
                  rel="noopener"
                >
                  넷플릭스 일렉트릭 스테이트 영화 정보 - 출연진, 등장인물, 예고편까지
                </a>
              </li>
            </ul>
            <figure
              id="og_1739026209071"
              data-ke-type="opengraph"
              data-ke-align="alignCenter"
              data-og-type="article"
              data-og-title="넷플릭스 일렉트릭 스테이트 영화 정보 - 출연진, 등장인물, 예고편까지"
              data-og-description="안녕하세요, 영화 팬 여러분! 오늘은 넷플릭스에서 2025년 새롭게 공개되는 글로벌 대작 영화 '일렉트릭 스테이트'에 대해 자세히 알아보려고 합니다. 이 영화는 많은 기대를 받고 있는 넷플릭스"
              data-og-host="1uras.5yuk.com"
              data-og-source-url="https://1uras.5yuk.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4-%EC%B6%9C%EC%97%B0%EC%A7%84-%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC-%EC%98%88%EA%B3%A0%ED%8E%B8%EA%B9%8C%EC%A7%80"
              data-og-url="https://1uras.5yuk.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4-%EC%B6%9C%EC%97%B0%EC%A7%84-%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC-%EC%98%88%EA%B3%A0%ED%8E%B8%EA%B9%8C%EC%A7%80"
              data-og-image="https://scrap.kakaocdn.net/dn/KIgX9/hyYciOSoFY/VfQnSTAs2fRkYwXOxlRlX0/img.jpg?width=800&height=800&face=0_0_800_800,https://scrap.kakaocdn.net/dn/hKL7J/hyYchbjPAB/CBMtrvIz2WIasGpjHd8hmk/img.jpg?width=800&height=800&face=0_0_800_800"
            >
              <a
                href="https://1uras.5yuk.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4-%EC%B6%9C%EC%97%B0%EC%A7%84-%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC-%EC%98%88%EA%B3%A0%ED%8E%B8%EA%B9%8C%EC%A7%80"
                target="_blank"
                rel="noopener"
                data-source-url="https://1uras.5yuk.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%9D%BC%EB%A0%89%ED%8A%B8%EB%A6%AD-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4-%EC%B6%9C%EC%97%B0%EC%A7%84-%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC-%EC%98%88%EA%B3%A0%ED%8E%B8%EA%B9%8C%EC%A7%80"
              >
                <div
                  className="og-image"
                  style={{
                    backgroundImage:
                      'url("https://scrap.kakaocdn.net/dn/KIgX9/hyYciOSoFY/VfQnSTAs2fRkYwXOxlRlX0/img.jpg?width=800&height=800&face=0_0_800_800,https://scrap.kakaocdn.net/dn/hKL7J/hyYchbjPAB/CBMtrvIz2WIasGpjHd8hmk/img.jpg?width=800&height=800&face=0_0_800_800")'
                  }}
                >
                  &nbsp;
                </div>
                <div className="og-text">
                  <p className="og-title" data-ke-size="size16">
                    넷플릭스 일렉트릭 스테이트 영화 정보 - 출연진, 등장인물,
                    예고편까지
                  </p>
                  <p className="og-desc" data-ke-size="size16">
                    안녕하세요, 영화 팬 여러분! 오늘은 넷플릭스에서 2025년 새롭게
                    공개되는 글로벌 대작 영화 '일렉트릭 스테이트'에 대해 자세히
                    알아보려고 합니다.&nbsp;이 영화는 많은 기대를 받고 있는 넷플릭스
                  </p>
                  <p className="og-host" data-ke-size="size16">
                    1uras.5yuk.com
                  </p>
                </div>
              </a>
            </figure>
            <p data-ke-size="size16">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h2
              data-ke-size="size26"
              id="2.%20%EA%B3%B5%ED%8F%AC%3A%20%EA%B3%A0%EC%A0%84%20%EA%B3%B5%ED%8F%AC%EC%9D%98%20%EB%B6%80%ED%99%9C%2C%20%EC%83%88%EB%A1%9C%EC%9A%B4%20%EC%95%85%EB%AA%BD%EC%9D%98%20%ED%83%84%EC%83%9D-1"
            >
              <a href="#2.%20%EA%B3%B5%ED%8F%AC%3A%20%EA%B3%A0%EC%A0%84%20%EA%B3%B5%ED%8F%AC%EC%9D%98%20%EB%B6%80%ED%99%9C%2C%20%EC%83%88%EB%A1%9C%EC%9A%B4%20%EC%95%85%EB%AA%BD%EC%9D%98%20%ED%83%84%EC%83%9D-1">
                2. 공포: 고전 공포의 부활, 새로운 악몽의 탄생
              </a>
            </h2>
            <h3
              data-ke-size="size23"
              id="%ED%94%84%EB%9E%91%EC%BC%84%EC%8A%88%ED%83%80%EC%9D%B8-1"
            >
              <a href="#%ED%94%84%EB%9E%91%EC%BC%84%EC%8A%88%ED%83%80%EC%9D%B8-1">
                프랑켄슈타인
              </a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="프랑켄슈타인.webp"
              data-origin-width={800}
              data-origin-height={1001}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/ev6kN6/btsMaAIchRw/QKMKb7yq6Gp98wGzOGClu0/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/ev6kN6/btsMaAIchRw/QKMKb7yq6Gp98wGzOGClu0/img.webp"
                data-alt="프랑켄슈타인"
                style={{ paddingBottom: "125.125%" }}
              >
                <img
                  alt="프랑켄슈타인"
                  loading="lazy"
                  width={800}
                  height={1001}
                  data-filename="프랑켄슈타인.webp"
                  data-origin-width={800}
                  data-origin-height={1001}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/ev6kN6/btsMaAIchRw/QKMKb7yq6Gp98wGzOGClu0/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fev6kN6%2FbtsMaAIchRw%2FQKMKb7yq6Gp98wGzOGClu0%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fev6kN6%2FbtsMaAIchRw%2FQKMKb7yq6Gp98wGzOGClu0%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/ev6kN6/btsMaAIchRw/QKMKb7yq6Gp98wGzOGClu0/img.webp"
                />
              </span>
              <figcaption>프랑켄슈타인</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>공포, SF, 드라마</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>기예르모 델 토로</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>기예르모 델 토로</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    오스카 아이작, 제이콥 엘로디, 미아 고스 외
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>시청하기</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    <a
                      href="https://www.netflix.com/title/81507921"
                      target="_blank"
                      rel="noopener"
                    >
                      넷플릭스
                    </a>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년 넷플릭스, 전 세계를 전율시킬 SF 호러 블록버스터 대작이
              찾아옵니다. 바로, 메리 셸리의 불멸의 고전 "프랑켄슈타인"을 현대적인
              감각으로 재해석한 영화 "프랑켄슈타인"입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              "판의 미로", "셰이프 오브 워터" 등 독특한 상상력과 섬세한 연출로 Academy
              Award를 수상한 기예르모 델 토로 감독이 메가폰을 잡고, 오스카 아이작이
              프랑켄슈타인 역을 맡아 압도적인 비주얼과 긴장감 넘치는 스토리를
              예고하는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              19세기, 과학에 대한 광적인 집착으로 죽은 자를 되살리려는 빅터
              프랑켄슈타인의 이야기를 통해, 금지된 실험을 하고, 끔찍한 괴물을
              창조해냄으로써 예상치 못한 결과를 맞이하는 이야기로 전개되죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              무엇보다 이 영화가 특별한 이유는 "프랑켄슈타인"은 고전적인 스토리에
              최첨단 SF 기술을 접목하여 지금까지와는 차원이 다른 강렬한 비주얼과
              압도적인 스케일을 자랑한다는 것입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              또한, 인간의 욕망과 생명의 의미에 대한 깊이 있는 메시지를 담고 있어
              단순한 오락 영화를 넘어 예술적인 가치를 지닌 작품으로 기대받고 있죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              때문에 2025년, 넷플릭스가 선사하는 SF 호러 블록버스터의 새로운 기준!
              "프랑켄슈타인"을 놓치지 마시기 바랍니다!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h2
              data-ke-size="size26"
              id="3.%20%EC%9E%AC%EB%82%9C%3A%20%EC%95%95%EB%8F%84%EC%A0%81%EC%9D%B8%20%EC%8A%A4%EC%BC%80%EC%9D%BC%2C%20%EA%B7%B9%ED%95%9C%EC%9D%98%20%EC%83%9D%EC%A1%B4%20%EB%93%9C%EB%9D%BC%EB%A7%88-1"
            >
              <a href="#3.%20%EC%9E%AC%EB%82%9C%3A%20%EC%95%95%EB%8F%84%EC%A0%81%EC%9D%B8%20%EC%8A%A4%EC%BC%80%EC%9D%BC%2C%20%EA%B7%B9%ED%95%9C%EC%9D%98%20%EC%83%9D%EC%A1%B4%20%EB%93%9C%EB%9D%BC%EB%A7%88-1">
                3. 재난: 압도적인 스케일, 극한의 생존 드라마
              </a>
            </h2>
            <h3 data-ke-size="size23" id="%EB%8C%80%ED%99%8D%EC%88%98-1">
              <a href="#%EB%8C%80%ED%99%8D%EC%88%98-1">대홍수</a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="대홍수.webp"
              data-origin-width={800}
              data-origin-height={1000}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/OFtXt/btsMbVj71UU/Rp70cP6rWVsf9ij1nKbnak/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/OFtXt/btsMbVj71UU/Rp70cP6rWVsf9ij1nKbnak/img.webp"
                data-alt="대홍수"
                style={{ paddingBottom: "125%" }}
              >
                <img
                  alt="대홍수"
                  loading="lazy"
                  width={800}
                  height={1000}
                  data-filename="대홍수.webp"
                  data-origin-width={800}
                  data-origin-height={1000}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/OFtXt/btsMbVj71UU/Rp70cP6rWVsf9ij1nKbnak/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOFtXt%2FbtsMbVj71UU%2FRp70cP6rWVsf9ij1nKbnak%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOFtXt%2FbtsMbVj71UU%2FRp70cP6rWVsf9ij1nKbnak%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/OFtXt/btsMbVj71UU/Rp70cP6rWVsf9ij1nKbnak/img.webp"
                />
              </span>
              <figcaption>대홍수</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 4분기</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>재난, SF</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>김병우</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>김병우</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>김다미, 박해수 외</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년, 넷플릭스가 선보이는 한국 영화 "대홍수"는 전례 없는 스케일의 SF
              재난 블록버스터로, 이미 제작 단계부터 뜨거운 기대를 모으고 있습니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              "더 테러 라이브"의 김병우 감독이 메가폰을 잡고, 김다미와 박해수가 주연을
              맡아 긴장감 넘치는 스토리와 압도적인 비주얼을 선사할 것으로
              예상되는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              영화는 대홍수로 뒤덮인 지구의 마지막 날, 인류가 살아남을 수 있는 마지막
              희망을 건 이들이 물에 잠겨가는 아파트 속에서 벌이는 숨 막히는 사투를
              그린 영화입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              무엇보다 이 영화는 거대한 스케일의 재난 장면과 배우들의 열연은
              시청자들에게 손에 땀을 쥐는 긴장감과 깊은 몰입을 선사할 것으로 기대하고
              있다는 것입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              때문에 2025년, 넷플릭스가 선보이는 최대 기대작 중 하나인 "대홍수"! 과연
              인류는 거대한 재앙 속에서 살아남을 수 있을까요? 지금부터 기대해 주세요!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h3 data-ke-size="size23" id="%EA%B5%BF%EB%89%B4%EC%8A%A4-1">
              <a href="#%EA%B5%BF%EB%89%B4%EC%8A%A4-1">굿뉴스</a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="굿뉴스.webp"
              data-origin-width={800}
              data-origin-height={1000}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/OtgcA/btsMcpZlto4/kxamkPtFTRFROgjWD12yk0/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/OtgcA/btsMcpZlto4/kxamkPtFTRFROgjWD12yk0/img.webp"
                data-alt="굿뉴스"
                style={{ paddingBottom: "125%" }}
              >
                <img
                  // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                  alt="굿뉴스"
                  loading="lazy"
                  width={800}
                  height={1000}
                  data-filename="굿뉴스.webp"
                  data-origin-width={800}
                  data-origin-height={1000}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/OtgcA/btsMcpZlto4/kxamkPtFTRFROgjWD12yk0/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOtgcA%2FbtsMcpZlto4%2FkxamkPtFTRFROgjWD12yk0%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOtgcA%2FbtsMcpZlto4%2FkxamkPtFTRFROgjWD12yk0%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/OtgcA/btsMcpZlto4/kxamkPtFTRFROgjWD12yk0/img.webp"
                />
              </span>
              <figcaption>굿뉴스</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 4분기</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>재난, 스릴러, 범죄</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>변성현</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>설경구, 홍경, 류승범 외</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년, 넷플릭스가 선보이는 한국 영화 "굿뉴스"는 1970년대, 납치된
              비행기를 착륙시키기 위한 사람들의 수상한 작전을 그린 작품입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              "불한당: 나쁜 놈들의 세상"과 "킹메이커"를 통해 개성 넘치는 연출력을
              인정받은 변성현 감독이 메가폰을 잡고, 설경구, 홍경, 류승범 배우가 주연을
              맡아 흥미진진한 스토리와 강렬한 연기를 선보일 것으로 기대되고 있죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              영화는 1970년대, 납치된 비행기를 착륙시키기 위해 모인 사람들의 이야기를
              다루며, 그 과정에서 벌어지는 예측 불가능한 사건들을 긴장감 넘치게 그려낼
              예정인데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              특히, 설경구, 홍경, 류승범 배우는 이번 작품에서 지금까지와는 또 다른
              매력을 가진 캐릭터를 연기하며 압도적인 존재감을 드러낼 것으로 예상되고
              있죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              2025년, 넷플릭스가 선보이는 흥미로운 시대극 "굿뉴스"! 과연 이들은 어떤
              작전을 펼칠까요? 지금부터 기대해 주세요!
            </p>

            <Advertise avenue={selectedAvenue[1]} location={"1"} />

            <h2
              data-ke-size="size26"
              id="4.%20%ED%8C%90%ED%83%80%EC%A7%80%3A%20%EC%83%81%EC%83%81%EB%A0%A5%EC%9D%84%20%EC%9E%90%EA%B7%B9%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%84%B8%EA%B3%84-1"
            >
              <a href="#4.%20%ED%8C%90%ED%83%80%EC%A7%80%3A%20%EC%83%81%EC%83%81%EB%A0%A5%EC%9D%84%20%EC%9E%90%EA%B7%B9%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%84%B8%EA%B3%84-1">
                4. 판타지: 상상력을 자극하는 이세계
              </a>
            </h2>
            <h3
              data-ke-size="size23"
              id="%EC%9C%84%EC%B3%90%3A%20%EC%84%B8%EC%9D%B4%EB%A0%8C%EC%9D%98%20%EB%B0%94%EB%8B%A4-1"
            >
              <a href="#%EC%9C%84%EC%B3%90%3A%20%EC%84%B8%EC%9D%B4%EB%A0%8C%EC%9D%98%20%EB%B0%94%EB%8B%A4-1">
                위쳐: 세이렌의 바다
              </a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="위쳐-세이렌의 바다.webp"
              data-origin-width={800}
              data-origin-height={1141}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/7zov8/btsMcghgrha/02Mze9JZsKFyntf0fxH9GK/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/7zov8/btsMcghgrha/02Mze9JZsKFyntf0fxH9GK/img.webp"
                data-alt="위쳐: 세이렌의 바다"
                style={{ paddingBottom: "142.625%" }}
              >
                <img
                  // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                  alt="위쳐: 세이렌의 바다"
                  loading="lazy"
                  width={800}
                  height={1141}
                  data-filename="위쳐-세이렌의 바다.webp"
                  data-origin-width={800}
                  data-origin-height={1141}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/7zov8/btsMcghgrha/02Mze9JZsKFyntf0fxH9GK/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7zov8%2FbtsMcghgrha%2F02Mze9JZsKFyntf0fxH9GK%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7zov8%2FbtsMcghgrha%2F02Mze9JZsKFyntf0fxH9GK%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/7zov8/btsMcghgrha/02Mze9JZsKFyntf0fxH9GK/img.webp"
                />
              </span>
              <figcaption>위쳐: 세이렌의 바다</figcaption>
            </figure>

            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 2월 11일</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>판타지, 액션, 애니</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>강희철</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>더그 코클 외</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    <a
                      href="https://youtu.be/5DbYvV_A5Kw?si=n-V-3VinKlpQp16S"
                      target="_blank"
                      rel="noopener"
                    >
                      위쳐: 세이렌의 바다
                    </a>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>시청하기</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    <a
                      href="https://www.netflix.com/title/81484026"
                      target="_blank"
                      rel="noopener"
                    >
                      넷플릭스
                    </a>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년 넷플릭스, 전 세계를 열광시킨 판타지 대작 "위쳐" 시리즈의 새로운
              애니메이션 "위쳐: 세이렌의 바다"가 공개를 앞두고 있습니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              "위쳐" 게임 시리즈의 주인공 리비아의 게롤트의 새로운 이야기를 담은
              "위쳐: 세이렌의 바다"는 매혹적인 바다를 배경으로 인간과 인어 사이의
              갈등을 다루며 흥미진진한 스토리를 펼쳐낼 예정인데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              특히, "위쳐" 게임 시리즈에서 게롤트의 목소리를 연기한 더그 코클이
              애니메이션에서도 게롤트 역을 맡아 더욱 실감나는 액션과 감동을 선사할
              것으로 기대됩니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              2025년, 넷플릭스가 선보이는 새로운 위쳐 이야기 "위쳐: 세이렌의 바다"!
              게롤트의 새로운 모험을 함께 떠나보세요!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h2
              data-ke-size="size26"
              id="5.%20%EC%95%A1%EC%85%98%3A%20%EC%8B%AC%EC%9E%A5%EC%9D%84%20%EB%A9%8E%EA%B2%8C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%A7%9C%EB%A6%BF%ED%95%9C%20%EC%95%A1%EC%85%98-1"
            >
              <a href="#5.%20%EC%95%A1%EC%85%98%3A%20%EC%8B%AC%EC%9E%A5%EC%9D%84%20%EB%A9%8E%EA%B2%8C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%A7%9C%EB%A6%BF%ED%95%9C%20%EC%95%A1%EC%85%98-1">
                5. 액션: 심장을 멎게 만드는 짜릿한 액션
              </a>
            </h2>
            <h3 data-ke-size="size23" id="%EC%82%AC%EB%A7%88%EA%B7%80-1">
              <a href="#%EC%82%AC%EB%A7%88%EA%B7%80-1">사마귀</a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="사마귀.webp"
              data-origin-width={800}
              data-origin-height={1000}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/b8SIet/btsMafdnCqk/BWqbTZ3FIcLMaNWD9DBeOK/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/b8SIet/btsMafdnCqk/BWqbTZ3FIcLMaNWD9DBeOK/img.webp"
                data-alt="사마귀"
                style={{ paddingBottom: "125%" }}
              >
                <img
                  // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                  alt="사마귀"
                  loading="lazy"
                  width={800}
                  height={1000}
                  data-filename="사마귀.webp"
                  data-origin-width={800}
                  data-origin-height={1000}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/b8SIet/btsMafdnCqk/BWqbTZ3FIcLMaNWD9DBeOK/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8SIet%2FbtsMafdnCqk%2FBWqbTZ3FIcLMaNWD9DBeOK%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8SIet%2FbtsMafdnCqk%2FBWqbTZ3FIcLMaNWD9DBeOK%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/b8SIet/btsMafdnCqk/BWqbTZ3FIcLMaNWD9DBeOK/img.webp"
                />
              </span>
              <figcaption>사마귀</figcaption>
            </figure>

            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 3분기</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>액션, 범죄</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>이태성</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>임시완, 박규영, 조우진 외</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년, 넷플릭스가 선보이는 한국 영화 "사마귀"는 숨 막히는 액션과 긴장감
              넘치는 스토리로 시청자들을 사로잡을 액션 스릴러입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              모든 룰이 무너진 살인청부업계, 긴 휴가 후 컴백한 A급 킬러 '사마귀'와
              그의 훈련생 동기이자 라이벌 '재이', 그리고 은퇴한 레전드 킬러 '독고'가
              1인자 자리를 놓고 벌이는 피 튀기는 대결을 그리는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              무엇보다 임시완, 박규영, 조우진 등 탄탄한 연기력을 자랑하는 배우들의
              강렬한 연기 변신은 기대감을 높이며, 넷플릭스 "길복순"의 스핀오프
              작품으로 흥미로운 세계관을 예고하고 있죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              때문에 화려한 액션과 긴장감 넘치는 스토리, 그리고 매력적인 캐릭터들의
              향연! 2025년, 넷플릭스 "사마귀"가 선사하는 강렬한 액션 스릴러의 세계를
              기대해 주세요!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h2
              data-ke-size="size26"
              id="6.%20%EB%A1%9C%EB%A7%A8%EC%8A%A4%3A%20%EC%8B%AC%EC%9E%A5%EC%9D%84%20%EB%91%90%EA%B7%BC%EA%B1%B0%EB%A6%AC%EA%B2%8C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%A1%9C%EB%A7%A8%ED%8B%B1%20%EC%BD%94%EB%AF%B8%EB%94%94-1"
            >
              <a href="#6.%20%EB%A1%9C%EB%A7%A8%EC%8A%A4%3A%20%EC%8B%AC%EC%9E%A5%EC%9D%84%20%EB%91%90%EA%B7%BC%EA%B1%B0%EB%A6%AC%EA%B2%8C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%A1%9C%EB%A7%A8%ED%8B%B1%20%EC%BD%94%EB%AF%B8%EB%94%94-1">
                6. 로맨스: 심장을 두근거리게 만드는 로맨틱 코미디
              </a>
            </h2>
            <h3
              data-ke-size="size23"
              id="%EA%B3%A0%EB%B0%B1%EC%9D%98%20%EC%97%AD%EC%82%AC-1"
            >
              <a href="#%EA%B3%A0%EB%B0%B1%EC%9D%98%20%EC%97%AD%EC%82%AC-1">
                고백의 역사
              </a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="고백의-역사.webp"
              data-origin-width={800}
              data-origin-height={1000}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/btF1nP/btsMcfQcial/B7SN29gbq2iMGyOvurdaq0/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/btF1nP/btsMcfQcial/B7SN29gbq2iMGyOvurdaq0/img.webp"
                data-alt="고백의 역사"
                style={{ paddingBottom: "125%" }}
              >
                <img
                  // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                  alt="고백의 역사"
                  loading="lazy"
                  width={800}
                  height={1000}
                  data-filename="고백의-역사.webp"
                  data-origin-width={800}
                  data-origin-height={1000}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/btF1nP/btsMcfQcial/B7SN29gbq2iMGyOvurdaq0/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtF1nP%2FbtsMcfQcial%2FB7SN29gbq2iMGyOvurdaq0%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtF1nP%2FbtsMcfQcial%2FB7SN29gbq2iMGyOvurdaq0%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/btF1nP/btsMcfQcial/B7SN29gbq2iMGyOvurdaq0/img.webp"
                />
              </span>
              <figcaption>고백의 역사</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 3분기</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>로맨틱 코미디, 청춘</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>남궁선</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>지춘희, 왕두리</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    공명, 신은수, 차우민, 윤상현, 강미나 외
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년 넷플릭스를 통해 공개될 한국 영화 "고백의 역사"는 풋풋한 첫사랑의
              설렘과 좌충우돌 코미디를 담은 작품입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              1998년, 학교 최고의 인기남에게 반한 열아홉 소녀 박세리. 그의 앞에
              나서려면 악성 곱슬머리를 펴야만 한다?! 전학생 한윤석의 도움을 받아 인생
              첫 고백에 성공하기 위한 대작전이 시작되는 이야기를 담고 있는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              신은수와 공명이 주연을 맡아 풋풋한 케미를 선보이며, 1998년을 배경으로
              추억을 자극하는 다양한 요소들이 더해져 더욱 기대감을 높이고 있죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              무엇보다 "고백의 역사"는 누구나 경험했을 법한 첫사랑의 기억을 유쾌하고
              공감 하는 이야기와 풋풋한 배우들의 케미는 시청자들에게 따뜻한 미소와
              설렘을 선사할 것으로 기대하고 있는 작품입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              때문에 2025년, 넷플릭스가 선보이는 사랑스러운 성장 코미디 "고백의 역사"!
              1998년, 열아홉 소녀의 짜릿한 첫사랑 이야기가 여러분의 마음속에 설렘을
              불어넣어 줄 것입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h2
              data-ke-size="size26"
              id="7.%20%EC%8A%A4%EB%A6%B4%EB%9F%AC%3A%20%EB%AF%B8%EC%8A%A4%ED%84%B0%EB%A6%AC%2C%20%EC%98%88%EC%B8%A1%EB%B8%94%ED%97%88%EC%9D%98%20%EB%B0%98%EC%A0%84-1"
            >
              <a href="#7.%20%EC%8A%A4%EB%A6%B4%EB%9F%AC%3A%20%EB%AF%B8%EC%8A%A4%ED%84%B0%EB%A6%AC%2C%20%EC%98%88%EC%B8%A1%EB%B8%94%ED%97%88%EC%9D%98%20%EB%B0%98%EC%A0%84-1">
                7. 스릴러: 미스터리, 예측블허의 반전
              </a>
            </h2>
            <h3
              data-ke-size="size23"
              id="%EB%82%98%EC%9D%B4%EB%B8%8C%EC%8A%A4%20%EC%95%84%EC%9B%83%3A%20%EC%9B%A8%EC%9D%B4%ED%81%AC%20%EC%97%85%20%EB%8D%B0%EB%93%9C%EB%A7%A8-1"
            >
              <a href="#%EB%82%98%EC%9D%B4%EB%B8%8C%EC%8A%A4%20%EC%95%84%EC%9B%83%3A%20%EC%9B%A8%EC%9D%B4%ED%81%AC%20%EC%97%85%20%EB%8D%B0%EB%93%9C%EB%A7%A8-1">
                나이브스 아웃: 웨이크 업 데드맨
              </a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="나이브스-아웃-웨이크-업-데드맨.webp"
              data-origin-width={800}
              data-origin-height={1000}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/NbDnk/btsMbKXnPdU/xF6DgkCpoEhk8kwAyjTeC1/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/NbDnk/btsMbKXnPdU/xF6DgkCpoEhk8kwAyjTeC1/img.webp"
                data-alt="나이브스 아웃: 웨이크 업 데드맨"
                style={{ paddingBottom: "125%" }}
              >
                <img
                  // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                  alt="나이브스 아웃: 웨이크 업 데드맨"
                  loading="lazy"
                  width={800}
                  height={1000}
                  data-filename="나이브스-아웃-웨이크-업-데드맨.webp"
                  data-origin-width={800}
                  data-origin-height={1000}
                  className="lazyautosizes lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/NbDnk/btsMbKXnPdU/xF6DgkCpoEhk8kwAyjTeC1/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNbDnk%2FbtsMbKXnPdU%2FxF6DgkCpoEhk8kwAyjTeC1%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNbDnk%2FbtsMbKXnPdU%2FxF6DgkCpoEhk8kwAyjTeC1%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/NbDnk/btsMbKXnPdU/xF6DgkCpoEhk8kwAyjTeC1/img.webp"
                />
              </span>
              <figcaption>나이브스 아웃: 웨이크 업 데드맨</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>스릴러, 추리, 블랙 코미디</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>라이언 존슨</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>라이언 존슨</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    대니얼 크레이그, 조쉬 오코너 외
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>
                    <a
                      href="https://youtu.be/TIonqWLqoJM?si=YXhRMJzkuQLBj_kV"
                      target="_blank"
                      rel="noopener"
                    >
                      나브스 아웃: 웨이크 업 데드맨 예고편
                    </a>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년, 전 세계가 손꼽아 기다려온 넷플릭스 영화 "나이브스 아웃" 시리즈의
              세 번째 작품, "나이브스 아웃: 웨이크 업 데드 맨"이 드디어 공개됩니다!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              전작들의 성공을 뛰어넘는 더욱 흥미진진한 미스터리와 화려한 캐스팅으로
              무장한 "나이브스 아웃: 웨이크 업 데드 맨"은 다니엘 크레이그가 연기하는
              브누아 블랑 형사가 새로운 사건에 휘말리며 펼쳐지는 이야기를 다루는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              라이언 존슨 감독이 다시 한번 연출과 각본을 맡아 탄탄한 스토리와 개성
              넘치는 캐릭터들의 향연을 예고하며, 글렌 클로즈, 조슈 브롤린, 밀라 쿠니스
              등 쟁쟁한 배우들이 합류하여 기대감을 더욱 높이고 있습니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              2025년, 넷플릭스가 선보이는 최고의 기대작! "나이브스 아웃: 웨이크 업
              데드 맨"! 과연 브누아 블랑은 이번에는 어떤 기상천외한 진실을 밝혀낼까요?
              지금부터 함께 추리해 보세요!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h3 data-ke-size="size23" id="84%EC%A0%9C%EA%B3%B1%EB%AF%B8%ED%84%B0-1">
              <a href="#84%EC%A0%9C%EA%B3%B1%EB%AF%B8%ED%84%B0-1">84제곱미터</a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="84제곱미터.webp"
              data-origin-width={800}
              data-origin-height={1000}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/cy3ib1/btsMb0r8N7T/JizDKyQLBjfwQ6nQDdLK6k/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/cy3ib1/btsMb0r8N7T/JizDKyQLBjfwQ6nQDdLK6k/img.webp"
                data-alt="84제곱미터"
                style={{ paddingBottom: "125%" }}
              >
                <img
                  onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                  alt="84제곱미터"
                  loading="lazy"
                  width={800}
                  height={1000}
                  data-filename="84제곱미터.webp"
                  data-origin-width={800}
                  data-origin-height={1000}
                  className="lazyautosizes lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/cy3ib1/btsMb0r8N7T/JizDKyQLBjfwQ6nQDdLK6k/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcy3ib1%2FbtsMb0r8N7T%2FJizDKyQLBjfwQ6nQDdLK6k%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcy3ib1%2FbtsMb0r8N7T%2FJizDKyQLBjfwQ6nQDdLK6k%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/cy3ib1/btsMb0r8N7T/JizDKyQLBjfwQ6nQDdLK6k/img.webp"
                />
              </span>
              <figcaption>84제곱미터</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 3분기</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>스릴러</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>김태준</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>강하늘, 염혜란, 서현우 외</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년, 넷플릭스가 선보이는 한국 영화 "84제곱미터"는 대한민국 국민이라면
              누구나 공감할 수 있는 '내 집 마련'의 꿈과 현실 사이의 괴리를 스릴러
              장르에 담아낸 작품입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              84제곱미터, 소위 '국민 평수' 아파트로 내 집 마련에 성공했지만, 행복도
              잠시 정체를 알 수 없는 층간소음에 시달리며 악몽 같은 시간을 보내는
              영끌족 우성의 이야기를 다루는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              강하늘이 주인공 우성 역을 맡아 현실감 넘치는 연기를 선보이며,
              "스마트폰을 떨어뜨렸을 뿐인데"를 연출한 김태준 감독이 메가폰을 잡고
              현실적인 공포와 긴장감을 극대화할 예정이죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              누구나 꿈꾸는 안정적인 보금자리, 하지만 그 이면에 숨겨진 불안과 공포를
              날카롭게 포착하며 대한민국 사회의 현실을 반영하는 "84제곱미터". 2025년,
              넷플릭스에서 만나보세요!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <h3 data-ke-size="size23" id="%EA%B3%84%EC%8B%9C%EB%A1%9D-1">
              <a href="#%EA%B3%84%EC%8B%9C%EB%A1%9D-1">계시록</a>
            </h3>
            <p />
            <figure
              className="imageblock alignCenter"
              data-ke-mobilestyle="widthOrigin"
              data-filename="계시록.webp"
              data-origin-width={800}
              data-origin-height={1000}
              style={{
                marginLeft: "50%",
                transform: "translateX(-50%)",
                width: 800,
                maxWidth: 800
              }}
            >
              <span
                data-url="https://blog.kakaocdn.net/dn/b7Irue/btsMcz1Tmxg/QHM6FYZhLFVAgtuuNv5iR1/img.webp"
                data-phocus="https://blog.kakaocdn.net/dn/b7Irue/btsMcz1Tmxg/QHM6FYZhLFVAgtuuNv5iR1/img.webp"
                data-alt="계시록"
                style={{ paddingBottom: "125%" }}
              >
                <img
                  onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                  alt="계시록"
                  loading="lazy"
                  width={800}
                  height={1000}
                  data-filename="계시록.webp"
                  data-origin-width={800}
                  data-origin-height={1000}
                  className="lazyautosizes ls-is-cached lazyloaded"
                  data-src="https://blog.kakaocdn.net/dn/b7Irue/btsMcz1Tmxg/QHM6FYZhLFVAgtuuNv5iR1/img.webp"
                  data-srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7Irue%2FbtsMcz1Tmxg%2FQHM6FYZhLFVAgtuuNv5iR1%2Fimg.webp"
                  data-sizes="auto"
                  sizes="388px"
                  srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7Irue%2FbtsMcz1Tmxg%2FQHM6FYZhLFVAgtuuNv5iR1%2Fimg.webp"
                  src="https://blog.kakaocdn.net/dn/b7Irue/btsMcz1Tmxg/QHM6FYZhLFVAgtuuNv5iR1/img.webp"
                />
              </span>
              <figcaption>계시록</figcaption>
            </figure>
            <p />
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>공개일</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>2025년 3월</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>장르</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>스릴러, 오컬트, 공포, 범죄</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>연출</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>연상호</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>각본</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>연상호, 최규석</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>출연</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>류준열, 신현빈 외</td>
                </tr>
                <tr>
                  <td style={{ width: "28.1396%", textAlign: "center" }}>
                    <b>예고편</b>
                  </td>
                  <td style={{ width: "71.8604%" }}>-</td>
                </tr>
              </tbody>
            </table>
            <p data-ke-size="size18">
              2025년 넷플릭스, "부산행", "지옥" 등 한국형 장르 영화의 새로운 지평을 연
              연상호 감독의 신작 "계시록"이 공개됩니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              영화는 신의 계시를 맹목적으로 믿는 목사와 죽은 동생의 환영에 시달리는
              형사. 두 사람은 각자의 믿음을 쫓아 잔혹한 진실에 다가서려 하는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              무엇보다 류준열과 신현빈 배우가 주연을 맡아 강렬한 연기를 선보이며,
              종교와 인간, 믿음과 신념에 대한 날카로운 질문을 던지는 웰메이드 스릴러로
              선보여줄 것으로 기대하고 있죠.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              이처럼 2025년, 넷플릭스가 선보이는 연상호 감독의 새로운 마스터피스
              "계시록"! 과연 그들은 어떤 진실과 마주하게 될까요? 지금부터 기대해
              주세요!
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              이 외에도 이 영화가 어떤 작품인지 좀 더 알고 싶다면 아래 관련 문서를
              참고해주세요.
            </p>
            <ul style={{ listStyleType: "disc" }} data-ke-list-type="disc">
              <li>
                <a
                  href="https://1uras.5yuk.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EA%B3%84%EC%8B%9C%EB%A1%9D-%EC%98%81%ED%99%94-%EC%A0%95%EB%B3%B4-%EC%B4%9D%EC%A0%95%EB%A6%AC-%EC%B6%9C%EC%97%B0%EC%A7%84-%EB%93%B1%EC%9E%A5%EC%9D%B8%EB%AC%BC-%EC%8A%A4%ED%8B%B8%EC%BB%B7-%EC%98%88%EA%B3%A0%ED%8E%B8%EA%B9%8C%EC%A7%80"
                  target="_blank"
                  rel="noopener"
                >
                  넷플릭스 계시록 영화 정보 총정리 - 출연진, 등장인물, 스틸컷,
                  예고편까지
                </a>
              </li>
            </ul>
            <p data-ke-size="size18">&nbsp;</p>

            <Advertise avenue={selectedAvenue[2]} location={"2"} />
            
            <p data-ke-size="size18">&nbsp;</p>
            <h2
              data-ke-size="size26"
              id="8.%20%EC%9D%B4%20%EC%99%B8%EC%97%90%20%EA%B8%B0%EB%8C%80%EB%90%98%EB%8A%94%20%EC%B6%94%EC%B2%9C%EC%9E%91%20%EC%86%8C%EA%B0%9C-1"
            >
              <a href="#8.%20%EC%9D%B4%20%EC%99%B8%EC%97%90%20%EA%B8%B0%EB%8C%80%EB%90%98%EB%8A%94%20%EC%B6%94%EC%B2%9C%EC%9E%91%20%EC%86%8C%EA%B0%9C-1">
                8. 이 외에 기대되는 추천작 소개
              </a>
            </h2>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              이렇게 다양성과 품질 면에서 더욱 풍부해진, 2025년 넷플릭스 영화들을
              소개해 드렸습니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              이번 해에도 드라마, 로맨스, 공포, 스릴러, SF, 액션, 판타지 등 다양한
              장르의 콘텐츠가 여러분을 기다리고 있어, 각자의 취향에 맞는 작품을 찾아
              즐길 수 있을 것입니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              이 외에도 시청자들에게 깊은 감동과 울림을 줄 수 있는 다양한 작품들이
              공개하거나 공개를 기다리고 있는데요.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <p data-ke-size="size18">
              흥미진진하고 개인의 취향에 맞는 추천 영화와 드라마를 찾아보고 싶다면
              아래 관련글을 통해 여러분만의 베스트 작품을 확인해 보시는 것도 잊지
              마시기 바랍니다.
            </p>
            <p data-ke-size="size18">&nbsp;</p>
            <ul style={{ listStyleType: "disc" }} data-ke-list-type="disc">
              <li>
                <a
                  href="https://1uras.5yuk.com/entry/2025-%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%ED%95%9C%EA%B5%AD-%EB%B0%8F-%EA%B8%80%EB%A1%9C%EB%B2%8C-%EC%98%81%ED%99%94-%EB%93%9C%EB%9D%BC%EB%A7%88-%EC%98%88%EB%8A%A5-%EB%9D%BC%EC%9D%B8%EC%97%85-%EC%B6%94%EC%B2%9C%EC%9E%91-%EC%B4%9D%EC%A0%95%EB%A6%AC"
                  target="_blank"
                  rel="noopener"
                >
                  2025 넷플릭스 한국 및 글로벌 영화, 드라마, 예능 라인업 추천작 총정리
                </a>
              </li>
            </ul>
            
            <p data-ke-size="size18">&nbsp;</p>
          </div>
        </div>
      </div>
      </div>
      </article>
      </div>
      </div>
      </main>
      </div>
      </div>
    </Game1Wrapper>
  );
};

export default Hobby1;

const Game1Wrapper = styled.div`
  max-width: 860px;
  height: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;