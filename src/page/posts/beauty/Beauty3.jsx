import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./beauty3.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/beauty3.json";

const Beauty3 = () => {
    // const avenues = [ <AdSense />, <Dable />, <Ladder /> ];
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
          <div id="wrap" className="wrap-right">
            {/* container */}
            <div id="container">
                <main className="main">
                {/* area-main */}
                <div className="area-main">
                    {/* s_list / 카테고리, 검색 리스트 */}
                    <div className="area-common"></div>
                    {/* // s_list / 카테고리, 검색 리스트 */}
                    {/* area-view / 뷰페이지 및 기본 영역 */}
                    <div className="area-view">
                    {/* s_article_rep */}
                    {/* s_permalink_article_rep / 뷰페이지 */}
                    {/* 이미지가 없는 경우 article-header-noimg */}
                    <div
                        className="article-header"
                        thumbnail="https://img1.daumcdn.net/thumb/R1440x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/6VXX0/btslbwybjEq/HbWFTSAa5REx4UsyA0qPs1/img.jpg"
                        style={{
                        backgroundImage:
                            'url("https://img1.daumcdn.net/thumb/R1440x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/6VXX0/btslbwybjEq/HbWFTSAa5REx4UsyA0qPs1/img.jpg")'
                        }}
                    >
                        <div className="inner-header">
                        <div className="box-meta">
                            <p className="category">
                            평범한 일상에 즐거움 한스푼 :)/후기 모음
                            </p>
                            <h2 className="title-article">
                            저렴하게 집에서 피부관리 하는법!(홈케어,내돈내산)
                            </h2>
                            <div className="box-info">
                            <span className="writer">곰곰젤리</span>
                            <span className="date">2023. 6. 25. 19:24</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* 에디터 영역 */}
                    <div className="article-view" id="article-view">
                        {/* System - START */}

                        <Advertise avenue={selectedAvenue[0]} location={"0"} />

                        {/* System - END */}
                        <div className="tt_article_useless_p_margin contents_style">
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            <br />
                            <br />
                            안녕하세용!
                            <br />
                            <br />
                            <br />
                            <br />
                            곰곰젤리에요
                        </p>
                        <figure
                            data-ke-type="emoticon"
                            data-ke-align="alignCenter"
                            data-emoticon-type="niniz"
                            data-emoticon-name={25}
                            data-emoticon-isanimation="false"
                            data-emoticon-src="https://t1.daumcdn.net/keditor/emoticon/niniz/large/025.gif"
                        >
                            <img
                            src="https://t1.daumcdn.net/keditor/emoticon/niniz/large/025.gif"
                            width={150}
                            />
                        </figure>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            <br />
                            <br />
                            여러분!
                            <br />
                            <br />
                            <br />
                            <br />
                            요즘에 피부과 많이 다니시나요?
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            저는 어릴적 부터 뷰티에 관심이 많았어요!
                            <br />
                            그래서 <br />
                            기초화장품 부터 로드샵 화장품까지 <br />
                            너무너무 관심이 많은데요
                            <br />
                            <br />
                            사실 기본 민낯에 예쁜 얼굴도 <br />
                            중요한 준비물이지만
                            <br />
                            저는 흔녀기 때문에! ㅋㅋㅋㅋ <br />제 얼굴에 잘 어울리는
                            메이크업과 피부관리에 <br />
                            관심이 많은 편이에요!
                            <br />
                            <br />
                            그래서 20대 중반부터 피부과를 다녔어요
                            <br />
                            <br />
                            <br />
                            근데 아시죠 여러분,,
                            <br />
                            <br />
                            <br />
                            같은 피부과여도 금액이 병원마다 천차만별이에요ㅠ
                            <br />
                            너무 비싼 피부과는 가고싶어도 비용때문에 못가고
                            <br />
                            <br />또 <br />
                            <br />
                            저렴한 피부과는 왜 저렴하지? 하면서도
                            <br />
                            매월 하는 이벤트나 해피아워(?)에만 갔었어요
                            <br />
                            우리가 모르는 앰플이나 기계가 있으니 그럴수 있겠지만
                            <br />
                            <br />
                            <br />
                            사실 피부과를 다니지 않아도 <br />
                            우리 예쁜 피부를 가지고 싶잖아요?!
                            <br />
                            <br />큰 비용없이 홈케어가 가능한!
                            <br />
                            특히 30대 중반이 되면서 <br />
                            없었던 칙칙함이랑 말라버린 수분감..
                            <br />전 느껴지더라구요 😭
                            <br />
                            <br />
                            <br />
                            <br />
                            그래서! <br />
                            <br />
                            <br />
                            <br />
                            두둥 <br />
                            <br />
                            <br />
                            탁!
                            <br />
                            <br />
                            <br />
                            제가 이전에도 했던ㅋㅋㅋ
                            <br />
                            (맨날이전)
                            <br />
                            관리였는데요 <br />
                            <br />
                            아프기도 하고 귀찮아서 하다가 말았지만
                            <br />
                            (과거에는 매주1회는 틈틈히 했었어요)
                            <br />
                            그런데도!
                            <br />
                            효과는 엄청났던 피부관리법을 소개시켜 드릴려고 해요!
                            <br />
                            사실 오랜만에 thㅏ서 어제 했었어요
                            <br />
                            <br />
                            후훗
                            <br />
                            <br />
                            남자친구 먼저 피부관리해주고
                            <br />
                            (내가 최고지?!)
                            <br />그 다음에 제가 했어요!
                            <br />
                            <br />
                            이름은 MTS 관리 라고 합니다
                            <br />
                            <br />
                            <Advertise avenue={selectedAvenue[1]} location={"1"} />
                            <br />
                            <br />
                            <b>MTS란?</b>
                            <br />
                            <br />
                            <b>미세한 니들을 이용하여 피부에 문지르며</b>
                            <b>
                            <br />
                            </b>
                            <b>피부 진피층에 자극을 줍니다(약간의 상처) </b>
                            <b>
                            <br />
                            </b>
                            <b>그리고</b>
                            <b>
                            <br />
                            </b>
                            <b>MTS전용 앰플을 바르면 자극을 받은 진피층에 </b>
                            <b>
                            <br />
                            </b>
                            <b>앰플이 스며들고</b>
                            <b>
                            <br />
                            </b>
                            <b>피부가 재생하면서 진피층의 </b>
                            <b>
                            <br />
                            </b>
                            <b>콜라센을 활성화 시켜준다고 해요❤️</b>
                            <b>
                            <br />
                            </b>
                            <b>
                            <br />
                            </b>
                            <b>
                            <br />
                            </b>
                            <b>
                            <br />
                            </b>
                            <br />
                            저는 일단 쿠팡에서 내돈내산 했구요ㅎㅎ
                            <br />
                            (남친표 내돈내산)
                            <br />
                            <br />
                            <b>가격은 39,000원!</b>
                            <br />
                            (미세니들+앰플5개 세트)
                            <br />
                            한주에 한개씩이니 5주 쓴다고 생각하시면 되요!
                            <br />
                            <br />
                            <br />
                            니들은 추가로 또 구매해야되요,, <br />
                            자동 니들이라 편한데 <br />
                            초콤 비싸당 히힛^^ㅋㅋ
                            <br />
                            <br />
                            <br />
                            저는 쿠팡에서
                            <br />
                            MTS 앰플 이라고 검색하니까 다양한 회사 제품들이 <br />
                            나왔는데요 그중에 왠지 가장 신제품 인것 같은
                            <br />
                            파모나 레볼루 C 화이트 앰플과 더마마이크로 나노펜 세트를
                            구매했어요!
                            <br />
                            <br />
                            <br />
                            <br />이 제품입니당
                            <br />
                            구매 링크 클릭!
                            <br />
                            👇👇👇👇👇
                            <br />
                            <a
                            href="https://link.coupang.com/a/17dZ1"
                            target="_blank"
                            rel="noopener"
                            >
                            <span>파모나 MTS 비타민 세트 쿠팡</span>
                            </a>
                        </p>
                        <p />
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={1170}
                            data-origin-height={1793}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/cteCsS/btslagQpAiA/wtzOPUnC559IDZ94Jtkock/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cteCsS/btslagQpAiA/wtzOPUnC559IDZ94Jtkock/img.jpg"
                            data-alt="구매당시 39,000원 이였는데 오늘 기준 할인하네요..?"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/cteCsS/btslagQpAiA/wtzOPUnC559IDZ94Jtkock/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcteCsS%2FbtslagQpAiA%2FwtzOPUnC559IDZ94Jtkock%2Fimg.jpg"
                                loading="lazy"
                                width={1170}
                                height={1793}
                                data-origin-width={1170}
                                data-origin-height={1793}
                                data-phocus-index={0}
                            />
                            </span>
                            <figcaption>
                            구매당시 39,000원 이였는데 오늘 기준 할인하네요..?
                            </figcaption>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            저는 예전에 mts롤러 였는데 <br />
                            효과는 매우 높았지만 진짜 아팠거든요..?
                            <br />
                            근데 마이크노 나노펜이니..덜 아프고 편할것 같아서
                            <br />
                            이번엔 이걸로 구매했어요!😭
                            <br />
                            <br />
                        </p>
                        <p />
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={2871}
                            data-origin-height={2871}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/lVbWp/btslbnVNefv/5KpSrYzgLWb3DU2gj0XXbK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/lVbWp/btslbnVNefv/5KpSrYzgLWb3DU2gj0XXbK/img.jpg"
                            data-alt="짜잔"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/lVbWp/btslbnVNefv/5KpSrYzgLWb3DU2gj0XXbK/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlVbWp%2FbtslbnVNefv%2F5KpSrYzgLWb3DU2gj0XXbK%2Fimg.jpg"
                                loading="lazy"
                                width={2871}
                                height={2871}
                                data-origin-width={2871}
                                data-origin-height={2871}
                                data-phocus-index={1}
                            />
                            </span>
                            <figcaption>짜잔</figcaption>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            막 포장을 뜯었구요
                            <br />
                            사실 평일에 도착했는데
                            <br />
                            퇴근하고 피곤해서 안뜯어…
                            <br />
                            (ㅎ사실 기챠나또..ㅎ)
                            <br />
                            주말에 남자친구랑 같이 하려고 뜯었어요! ㅎㅎㅎ
                            <br />
                            <br />
                        </p>
                        <p />
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={3024}
                            data-origin-height={3435}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/cYvqjL/btslbxcPoQV/M0aG8uBDU7ocP4iovvvzkk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cYvqjL/btslbxcPoQV/M0aG8uBDU7ocP4iovvvzkk/img.jpg"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/cYvqjL/btslbxcPoQV/M0aG8uBDU7ocP4iovvvzkk/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcYvqjL%2FbtslbxcPoQV%2FM0aG8uBDU7ocP4iovvvzkk%2Fimg.jpg"
                                loading="lazy"
                                width={3024}
                                height={3435}
                                data-origin-width={3024}
                                data-origin-height={3435}
                                data-phocus-index={2}
                            />
                            </span>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            이렇게 앰플이 총5개가 들어있고 <br />
                            앰플을 쉽게 도포하기위해 <br />저 고무뚜껑..? 이름이 모지..?
                            <br />
                            암튼 고무어쩌구
                            <br />
                            같은 것도 들어가 있어요!
                            <br />
                            <br />
                        </p>
                        <p />
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={4032}
                            data-origin-height={3024}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/xJLqm/btslagQpAuU/lkL1pW3kBU4RyF35xnc6j0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/xJLqm/btslagQpAuU/lkL1pW3kBU4RyF35xnc6j0/img.jpg"
                            data-alt="칙칙한 피부를 밝게 만들어줄 비타민 앰플 하이루~"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/xJLqm/btslagQpAuU/lkL1pW3kBU4RyF35xnc6j0/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxJLqm%2FbtslagQpAuU%2FlkL1pW3kBU4RyF35xnc6j0%2Fimg.jpg"
                                loading="lazy"
                                width={4032}
                                height={3024}
                                data-origin-width={4032}
                                data-origin-height={3024}
                                data-phocus-index={3}
                            />
                            </span>
                            <figcaption>
                            칙칙한 피부를 밝게 만들어줄 비타민 앰플 하이루~
                            </figcaption>
                        </figure>
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={4032}
                            data-origin-height={3024}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/nWp5l/btsla0zymxy/1CJindu9FNwPJC1He9NKxK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/nWp5l/btsla0zymxy/1CJindu9FNwPJC1He9NKxK/img.jpg"
                            data-alt="마이크로 나노펜!!!"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/nWp5l/btsla0zymxy/1CJindu9FNwPJC1He9NKxK/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnWp5l%2Fbtsla0zymxy%2F1CJindu9FNwPJC1He9NKxK%2Fimg.jpg"
                                loading="lazy"
                                width={4032}
                                height={3024}
                                data-origin-width={4032}
                                data-origin-height={3024}
                                data-phocus-index={4}
                            />
                            </span>
                            <figcaption>마이크로 나노펜!!!</figcaption>
                        </figure>
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={4032}
                            data-origin-height={3024}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/cxAgWr/btslag3W9if/Cq5COq2pdQ2lpL1JEEy4PK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cxAgWr/btslag3W9if/Cq5COq2pdQ2lpL1JEEy4PK/img.jpg"
                            data-alt="펜에 장착될 나노칩? 바늘? 과 건전지가 들어가 있어요"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/cxAgWr/btslag3W9if/Cq5COq2pdQ2lpL1JEEy4PK/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcxAgWr%2Fbtslag3W9if%2FCq5COq2pdQ2lpL1JEEy4PK%2Fimg.jpg"
                                loading="lazy"
                                width={4032}
                                height={3024}
                                data-origin-width={4032}
                                data-origin-height={3024}
                                data-phocus-index={5}
                            />
                            </span>
                            <figcaption>
                            펜에 장착될 나노칩? 바늘? 과 건전지가 들어가 있어요
                            </figcaption>
                        </figure>
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={2810}
                            data-origin-height={1993}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/cpKb1j/btsldPYj2MB/yI0RWWLk1npw5FDi2qxid1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cpKb1j/btsldPYj2MB/yI0RWWLk1npw5FDi2qxid1/img.jpg"
                            data-alt="왜 내 손도 칙칙하지..?"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/cpKb1j/btsldPYj2MB/yI0RWWLk1npw5FDi2qxid1/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcpKb1j%2FbtsldPYj2MB%2FyI0RWWLk1npw5FDi2qxid1%2Fimg.jpg"
                                loading="lazy"
                                width={2810}
                                height={1993}
                                data-origin-width={2810}
                                data-origin-height={1993}
                                data-phocus-index={6}
                            />
                            </span>
                            <figcaption>왜 내 손도 칙칙하지..?</figcaption>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            이렇게 펜에 건전지를 장착하구요!
                            <br />참 펜 분리 할때 살살 해주세요 ㅠ<br />전 힘으로 했다가
                            부셔지는 소리가 났는데
                            <br />
                            부셔지진 않았습니당 ㅎ <br />
                            돌려서 빼시면 되요
                            <br />
                            <br />
                        </p>
                        <p />
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={3024}
                            data-origin-height={2852}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/6VXX0/btslbwybjEq/HbWFTSAa5REx4UsyA0qPs1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/6VXX0/btslbwybjEq/HbWFTSAa5REx4UsyA0qPs1/img.jpg"
                            data-alt="이제 모든 준비는 다 끝났다"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/6VXX0/btslbwybjEq/HbWFTSAa5REx4UsyA0qPs1/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6VXX0%2FbtslbwybjEq%2FHbWFTSAa5REx4UsyA0qPs1%2Fimg.jpg"
                                loading="lazy"
                                width={3024}
                                height={2852}
                                data-origin-width={3024}
                                data-origin-height={2852}
                                data-phocus-index={7}
                            />
                            </span>
                            <figcaption>이제 모든 준비는 다 끝났다</figcaption>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            펜 너무 이뿌죵?
                            <br />
                            나노칩! 까지 장착 했구요
                            <br />
                            장착방법은 쉬워요~ 그냥 끼면됨
                            <br />저 나노칩은 한번 사용하고 꼭 버리세요
                            <br />
                            재탕 금지!
                            <br />
                            <br />
                            글고 나노칩만 따로 구매하셔야되요
                            <br />
                            근데 비용쓰가 쵸곰 있어요 <br />
                            위생으론 좋지만 장기적으로 보면 음..
                            <br />
                            (개인생각 입니다)
                            <br />
                            <br />
                            만약 롤러나 판으로 사용하신다면
                            <br />
                            소독용 알콜을 꼭 구매하셔서 <br />
                            사용하시기전
                            <br />
                            사용후에 담가두고 건조 후 보관하세요!
                            <br />
                            <br />
                            <br />
                            <br />
                            그리고 두둥탁 <br />제 피부 공개..
                            <br />
                            <br />
                        </p>
                        <p />

                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={2120}
                            data-origin-height={1488}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/cQNZHP/btslhcMtXuV/SpE9mIKekdpHOSaNRsJdAk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cQNZHP/btslhcMtXuV/SpE9mIKekdpHOSaNRsJdAk/img.jpg"
                            data-alt="왼쪽"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/cQNZHP/btslhcMtXuV/SpE9mIKekdpHOSaNRsJdAk/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcQNZHP%2FbtslhcMtXuV%2FSpE9mIKekdpHOSaNRsJdAk%2Fimg.jpg"
                                loading="lazy"
                                width={2120}
                                height={1488}
                                data-origin-width={2120}
                                data-origin-height={1488}
                                data-phocus-index={8}
                            />
                            </span>
                            <figcaption>왼쪽</figcaption>
                        </figure>
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={1737}
                            data-origin-height={1226}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/pFYA5/btslhcZ1Rtv/Knxw1pKhqE5z5WBFVEUVNK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/pFYA5/btslhcZ1Rtv/Knxw1pKhqE5z5WBFVEUVNK/img.jpg"
                            data-alt="오른쪽"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/pFYA5/btslhcZ1Rtv/Knxw1pKhqE5z5WBFVEUVNK/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpFYA5%2FbtslhcZ1Rtv%2FKnxw1pKhqE5z5WBFVEUVNK%2Fimg.jpg"
                                loading="lazy"
                                width={1737}
                                height={1226}
                                data-origin-width={1737}
                                data-origin-height={1226}
                                data-phocus-index={9}
                            />
                            </span>
                            <figcaption>오른쪽</figcaption>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            <br />
                            왼쪽은 괜찮은데
                            <br />
                            오른쪽에 뾰루지가 올라왔어요 ㅜ<br />
                            <br />
                            가장 못생긴 부분 ..
                            <br />
                            <br />
                            입주변에 올라와서 은근 스트레스에요!! ㅜㅜ
                            <br />
                            <br />
                            그리고 피지+칙칙한 피부도 ..^^
                            <br />
                            <br />
                            이제 앰플을 도포하고 나노펜으로 롤링 해줍니다!
                            <br />
                            <br />
                        </p>
                        <figure
                            data-ke-type="video"
                            data-ke-style="alignCenter"
                            data-video-host="kakaotv"
                            data-video-url="https://tv.kakao.com/v/439078313"
                            data-video-thumbnail="https://thumb.kakaocdn.net/dna/kamp/source/rvxhhou5wvss6v89feycxubz7/thumbs/6.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33244597799&signature=TQvR3DBPXVC0RwSi0C%2B%2BPy7%2Bqf4%3D"
                            data-video-height="undefined"
                            data-video-origin-width={720}
                            data-video-origin-height={1280}
                            data-ke-mobilestyle="widthContent"
                            data-video-play-service="daum_tistory"
                            data-original-url=""
                            data-video-width=""
                            data-video-title=""
                        >
                            <iframe
                            src="https://play-tv.kakao.com/embed/player/cliplink/439078313?service=daum_tistory"
                            width={710}
                            height="undefined"
                            frameBorder={0}
                            />
                            <figcaption style={{ display: "none" }} />
                        </figure>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            세게 누르지마세요!! <br />
                            부드럽게 마사지 한다는 생각으로 굴러가며 <br />
                            얼굴 전체 피부를 롤링해주면 됩니다
                            <br />
                            그리고 한 부위에 오랫동안 머물면 <br />
                            피부가 상할수 있으니 <br />
                            속도를 살짝 주어서 롤링~
                            <br />
                            <br />
                            <b>방법은</b>
                            <b>
                            <br />
                            </b>
                            <b>
                            <br />
                            </b>
                            <b>세안</b>
                            <b>
                            <br />
                            </b>
                            <b>👇</b>
                            <b>
                            <br />
                            </b>
                            <b>스킨없이 앰플도포(피부결정돈정도는 좋아요)</b>
                            <b>
                            <br />
                            </b>
                            <b>👇</b>
                            <b>
                            <br />
                            </b>
                            <b>앰플 페이스 도포</b>
                            <b>
                            <br />
                            </b>
                            <b>👇</b>
                            <b>
                            <br />
                            </b>
                            <b>나노펜 롤링</b>
                            <b>
                            <br />
                            </b>
                            <b>(한부위 공략 노노)</b>
                            <b>
                            <br />
                            </b>
                            <b>👇</b>
                            <b>
                            <br />
                            </b>
                            <b>앰플이 분명 남으니 </b>
                            <b>
                            <br />
                            </b>
                            <b>남은 앰플을 도포하고 또 롤링</b>
                            <b>
                            <br />
                            </b>
                            <b>(총 8~10분 정도 했어요)</b>
                            <b>
                            <br />
                            </b>
                            <b>tip : 너무 오래하지마시구 꼭 15분 이내로는 해주세요</b>
                            <b>
                            <br />
                            </b>
                            <b>👇</b>
                            <b>
                            <br />
                            </b>
                            <b>얼굴에 남아있는 앰플 손으로 흡수</b>
                            <b>
                            <br />
                            </b>
                            <b>👇</b>
                            <b>
                            <br />
                            </b>
                            <b>냉장고에 보관해두던 팩</b>
                            <b>
                            <br />
                            </b>
                            <b>(팩 10분)</b>
                            <b>
                            <br />
                            </b>
                            <b>👇</b>
                            <b>
                            <br />
                            </b>
                            <b>재생크림으로 마무리</b>
                            <br />
                            <br />
                            제가 사진을 찍고 영상을 찍어가며 해서
                            <br />
                            중간중간 시간이 초콤 길어졌어요 ㅜㅜ
                            <br />
                            제가 한군데 오랫동안 하지말라고 했지만
                            <br />
                            저는 포스팅을 위해 한군데 여러번 했더니
                            <br />
                            사실 후끈후끈하고 초콤..아팠어요 ㅜㅜ
                            <br />
                            <br />
                            저는 그랬지만 여러분은 그러지마세용^^
                            <br />
                            ㅎㅎ
                            <br />
                            <br />
                            마무리 팩 추천으로는 꼭 비싼제품 아니셔도 됩니다
                            <br />
                            <br />
                            시중에 파는 천원팩도 좋구요
                            <br />
                            이왕이면 <br />
                            <span style={{ color: "#006dd7" }}>
                            <b>수딩감</b>
                            </span>{" "}
                            좋은거!(<span style={{ color: "#409d00" }}>알로에</span> 추천)
                            <br />
                            붉어진 피부에 시원하게 팩 해주세요~
                            <br />
                            하고나면 <br />
                            사람마다 다르지만 1~2시간 정도는 <br />
                            후끈후끈 따끔따끔이 느껴질수 있어요
                            <br />
                            길면 하루,이틀 정도 입니다
                            <br />참 그리고 하고 난 후에는 <br />
                            <b>세안을 안하시는걸 추천해요</b>
                            <br />
                            그래서 볼일 다~~ 밖에서 보시고!
                            <br />
                            <b>주무시기전에</b> 하시는게 좋아요
                            <br />
                            <span style={{ color: "#ee2323" }}>
                            <b>선크림 바르지마세요!</b>
                            </span>
                            <br />
                            <br />
                            😍
                            <br />
                            <br />
                            메이크업도 2~3일 정도는 피해주시는게 좋아요
                            <br />
                            (하지만 전 다음날 바로 했지만요 ^^그게 오늘..)
                            <br />
                            <br />
                            저희는 구매했던 나노칩 한개를 사용했기 때문에
                            <br />
                            나노칩만 따로 구매하려구요
                            <br />
                            <br />
                            나노칩 구매 링크 올려드릴게요!
                            <br />
                            클릭!!!
                            <br />
                            👇👇👇👇
                            <br />
                            <a
                            href="https://link.coupang.com/a/17djK"
                            target="_blank"
                            rel="noopener"
                            >
                            <span>나노칩 구매링크 쿠팡</span>
                            </a>
                        </p>
                        <p />
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={1170}
                            data-origin-height={1688}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/dxSSvR/btsljhteIcH/6WcoNockOK1KKET922NcW1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/dxSSvR/btsljhteIcH/6WcoNockOK1KKET922NcW1/img.jpg"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/dxSSvR/btsljhteIcH/6WcoNockOK1KKET922NcW1/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdxSSvR%2FbtsljhteIcH%2F6WcoNockOK1KKET922NcW1%2Fimg.jpg"
                                loading="lazy"
                                width={1170}
                                height={1688}
                                data-origin-width={1170}
                                data-origin-height={1688}
                                data-phocus-index={10}
                            />
                            </span>
                        </figure>
                        <p />
                        <Advertise avenue={selectedAvenue[2]} location={"2"} />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            <br />
                            <br />
                            <br />아 그리고
                            <br />
                            <br />
                            안궁금 하실텐데 <br />ㅎ<br />
                            저는 이 팩을 사용했어요
                            <br />
                            <br />
                        </p>
                        <figure
                            data-ke-type="emoticon"
                            data-ke-align="alignCenter"
                            data-emoticon-type="niniz"
                            data-emoticon-name={25}
                            data-emoticon-isanimation="false"
                            data-emoticon-src="https://t1.daumcdn.net/keditor/emoticon/niniz/large/025.gif"
                        >
                            <img
                            src="https://t1.daumcdn.net/keditor/emoticon/niniz/large/025.gif"
                            width={150}
                            />
                        </figure>
                        <p />
                        <figure
                            className="imageblock alignCenter"
                            data-ke-mobilestyle="widthOrigin"
                            data-origin-width={3024}
                            data-origin-height={4032}
                        >
                            <span
                            data-url="https://blog.kakaocdn.net/dn/ckF17B/btslauOKdzF/BTV0kkFA9TfCF5bRZ5rbjK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/ckF17B/btslauOKdzF/BTV0kkFA9TfCF5bRZ5rbjK/img.jpg"
                            >
                            <img
                                src="https://blog.kakaocdn.net/dn/ckF17B/btslauOKdzF/BTV0kkFA9TfCF5bRZ5rbjK/img.jpg"
                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FckF17B%2FbtslauOKdzF%2FBTV0kkFA9TfCF5bRZ5rbjK%2Fimg.jpg"
                                loading="lazy"
                                width={3024}
                                height={4032}
                                data-origin-width={3024}
                                data-origin-height={4032}
                                data-phocus-index={11}
                            />
                            </span>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            바셀린 보습용 마스크팩!
                            <br />
                            <br />
                            저는 속건조가 완전 심한 타입이라 <br />
                            특히 가을 겨울 되면 피부 자체가 넘 아파요 ㅜㅜ
                            <br />
                            <br />
                            so sick,,,
                            <br />
                            <br />
                            그래서 사본건데
                            <br />
                            사실 요즘 더워서 잘 손이 안가더라구요^^..
                            <br />
                            그래도 많이 쟁여 놨으니 이번 기회로 <br />
                            일주일에 1번은 하려구요!
                            <br />
                            <br />
                            그럼 여러분도 꿀 피부 되세요~~😉😉😉
                            <br />
                            <br />
                            우리 피부 미녀 미남 되쟈구요🫶
                            <br />
                            <br />                            
                            <br />
                            <br />
                            <br />
                            좋은 하루되세용!
                            <br />
                            <br />
                        </p>
                        <figure
                            data-ke-type="emoticon"
                            data-ke-align="alignCenter"
                            data-emoticon-type="friends2"
                            data-emoticon-name={16}
                            data-emoticon-isanimation="false"
                            data-emoticon-src="https://t1.daumcdn.net/keditor/emoticon/friends2/large/016.png"
                        >
                            <img
                            src="https://t1.daumcdn.net/keditor/emoticon/friends2/large/016.png"
                            width={150}
                            />
                        </figure>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                            &nbsp;
                        </p>
                        </div>
                        {/* System - START */}
                        {/* System - END */}
                        
                    </div>
                </div>
                </div>
                </main>
            </div>
            </div>
        </Game1Wrapper>
    );
};

export default Beauty3;

const Game1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;
