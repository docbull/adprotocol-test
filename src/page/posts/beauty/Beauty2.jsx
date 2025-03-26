import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./beauty2.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/beauty2.json";

const Beauty2 = () => {
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
          <div id="content-inner">
            <div id="head">
                <h2>
                <a>
                    퍼스널 컬러별 환절기 늦 봄에서 초여름 여자 옷 코디 스타일링
                </a>
                </h2>
                <div className="date">2022. 4. 24. 23:43</div>
            </div>
            <div id="body" className="entry">
                <div className="tag_label">
                <span>
                    <a href="/tag/%EB%B4%84%EC%98%B7" rel="tag">
                    봄옷
                    </a>
                    ,{" "}
                    <a href="/tag/%EC%97%AC%EC%9E%90%EB%B4%84%EC%98%B7" rel="tag">
                    여자봄옷
                    </a>
                    ,{" "}
                    <a
                    href="/tag/%EC%97%AC%EC%9E%90%ED%99%98%EC%A0%88%EA%B8%B0%EC%BD%94%EB%94%94"
                    rel="tag"
                    >
                    여자환절기코디
                    </a>
                    ,{" "}
                    <a href="/tag/%ED%99%98%EC%A0%88%EA%B8%B0%EC%98%B7" rel="tag">
                    환절기옷
                    </a>
                </span>
                <div className="clear" />
                </div>
                <div className="article">

                {/* 광고 1 */}
                <Advertise avenue={selectedAvenue[0]} location={"0"} />

                <div className="tt_article_useless_p_margin contents_style">
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    환절기 날씨가 계속되고 있는데요, 퍼스널컬러별 환절기~늦 봄에서
                    초여름까지 옷 코디 스타일링을 소개해드리려고 합니다. 로맨틱룩, 하객룩,
                    캐주얼
                    <br /> 환절기 코디 알아볼게요. <br />
                    <br />
                    퍼스널 컬러에 대한 다른 이전 글들도 참고해주세요
                    </p>
                    <figure
                    data-ke-type="opengraph"
                    data-og-title="퍼스널컬러 알아보기 ①(퍼스널 컬러 뜻, 퍼스널 컬러 종류, 웜톤 쿨톤구분,사계절 컬러구분,브"
                    data-ke-align="alignCenter"
                    data-og-description="안녕하세요 이거보고가세요의 이보요입니다. 이미지에 영향을 주는 퍼스널컬러에 대해서 얘기해볼게요. 퍼스널컬러는 본인이 갖고 있는 고유의 피부, 머리카락,눈동자 색에 어울리는 색을 찾"
                    data-og-host="pleasereadthis.tistory.com"
                    data-og-source-url="https://pleasereadthis.tistory.com/m/12"
                    data-og-image="https://scrap.kakaocdn.net/dn/bJ0r63/hyN9KgrFol/HXEApTZebg1pfFAhKVAMk1/img.png?width=800&height=771&face=0_0_800_771"
                    data-og-url="https://pleasereadthis.tistory.com/12"
                    >
                    <a
                        href="https://pleasereadthis.tistory.com/12"
                        target="_blank"
                        data-source-url="https://pleasereadthis.tistory.com/m/12"
                    >
                        <div
                        className="og-image"
                        style={{
                            backgroundImage:
                            'url("https://scrap.kakaocdn.net/dn/bJ0r63/hyN9KgrFol/HXEApTZebg1pfFAhKVAMk1/img.png?width=800&height=771&face=0_0_800_771")'
                        }}
                        ></div>
                        <div className="og-text">
                        <p className="og-title">
                            퍼스널컬러 알아보기 ①(퍼스널 컬러 뜻, 퍼스널 컬러 종류, 웜톤
                            쿨톤구분,사계절 컬러구분,브
                        </p>
                        <p className="og-desc">
                            안녕하세요 이거보고가세요의 이보요입니다. 이미지에 영향을 주는
                            퍼스널컬러에 대해서 얘기해볼게요. 퍼스널컬러는 본인이 갖고 있는
                            고유의 피부, 머리카락,눈동자 색에 어울리는 색을 찾
                        </p>
                        <p className="og-host">pleasereadthis.tistory.com</p>
                        </div>
                    </a>
                    </figure>
                    <figure
                    data-ke-type="opengraph"
                    data-og-title="퍼스널 컬러 알아보기②(브라이트,뮤트,트루,딥 어울리는 색상과 이미지)"
                    data-ke-align="alignCenter"
                    data-og-description="안녕하세요 이거보고가세요의 이보요입니다. 지난번 글에 이어서 퍼스널 컬러 알아보기 2편 작성해보도록 하겠습니다. 퍼스널 컬러가 무엇인지 궁금하신 분들, 자세히 아시고 싶은 분들은 아래"
                    data-og-host="pleasereadthis.tistory.com"
                    data-og-source-url="https://pleasereadthis.tistory.com/m/13"
                    data-og-image="https://scrap.kakaocdn.net/dn/d4gjBD/hyN9N5h6a5/lnMZ7JKcBgnvLjh8WnenL0/img.png?width=800&height=495&face=0_0_800_495"
                    data-og-url="https://pleasereadthis.tistory.com/13"
                    >
                    <a
                        href="https://pleasereadthis.tistory.com/13"
                        target="_blank"
                        data-source-url="https://pleasereadthis.tistory.com/m/13"
                    >
                        <div
                        className="og-image"
                        style={{
                            backgroundImage:
                            'url("https://scrap.kakaocdn.net/dn/d4gjBD/hyN9N5h6a5/lnMZ7JKcBgnvLjh8WnenL0/img.png?width=800&height=495&face=0_0_800_495")'
                        }}
                        ></div>
                        <div className="og-text">
                        <p className="og-title">
                            퍼스널 컬러 알아보기②(브라이트,뮤트,트루,딥 어울리는 색상과
                            이미지)
                        </p>
                        <p className="og-desc">
                            안녕하세요 이거보고가세요의 이보요입니다. 지난번 글에 이어서
                            퍼스널 컬러 알아보기 2편 작성해보도록 하겠습니다. 퍼스널 컬러가
                            무엇인지 궁금하신 분들, 자세히 아시고 싶은 분들은 아래
                        </p>
                        <p className="og-host">pleasereadthis.tistory.com</p>
                        </div>
                    </a>
                    </figure>
                    <hr data-ke-type="horizontalRule" data-ke-style="style7" />
                    <h3 style={{ textAlign: "justify" }} data-ke-size="size23">
                    {" "}
                    1. 봄 웜톤 환절기 코디
                    </h3>
                    <p data-ke-size="size16" style={{ textAlign: "justify" }}>
                    <br />봄 웜톤 분들이 잘 어울리는 코디를 먼저 알아보겠습니다.
                    <br />
                    <br />
                    </p>
                    <h4 style={{ textAlign: "justify" }} data-ke-size="size20">
                    1-1. 봄웜 로맨틱 데이트 룩
                    </h4>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1170}
                    data-origin-height={1170}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/PY187/btrAcaImFtT/dAe7qWWPkPkHoStTxwBEYK/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/PY187/btrAcaImFtT/dAe7qWWPkPkHoStTxwBEYK/img.png"
                        data-alt="봄 라이트 봄웜 페미닌 룩"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/PY187/btrAcaImFtT/dAe7qWWPkPkHoStTxwBEYK/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPY187%2FbtrAcaImFtT%2FdAe7qWWPkPkHoStTxwBEYK%2Fimg.png"
                        loading="lazy"
                        width={1170}
                        height={1170}
                        data-origin-width={1170}
                        data-origin-height={1170}
                        data-phocus-index={0}
                        />
                    </span>
                    <figcaption>봄 라이트 봄웜 페미닌 룩</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    {" "}
                    봄 라이트톤에게 어울릴 소프트한 느낌의 분홍색 반팔 니트와
                    아이보리&nbsp;&nbsp;빛 플리츠 스커트로 여성스러면서 여리여리하면서 봄
                    ~여름 사이의 느낌을 살려줬어요.
                    <br />
                    <br />
                    </p>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={445}
                    data-origin-height={659}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/bhJvg0/btrAdYml3Me/k6rtnZC52fHZp2cJeBwJKK/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bhJvg0/btrAdYml3Me/k6rtnZC52fHZp2cJeBwJKK/img.png"
                        data-alt="봄웜 하객룩"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/bhJvg0/btrAdYml3Me/k6rtnZC52fHZp2cJeBwJKK/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhJvg0%2FbtrAdYml3Me%2Fk6rtnZC52fHZp2cJeBwJKK%2Fimg.png"
                        loading="lazy"
                        width={445}
                        height={659}
                        data-origin-width={445}
                        data-origin-height={659}
                        data-phocus-index={1}
                        />
                    </span>
                    <figcaption>봄웜 하객룩</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    결혼식이 많은 봄, 봄 웜 분들 이런 파스텔 노란 빛깔의 원피스가 얼굴에
                    형광등을 켜줄 거예요. 특히 봄 라이트 분들에게 이런 파스텔 아주 잘
                    어울린답니다.
                    <br />
                    <br />
                    </p>
                    <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                    <span style={{ color: "#000000" }}>1-2. 봄웜 캐주얼 룩</span>
                    </h4>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={986}
                    data-origin-height={1286}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/dn4MUt/btrAfD24Wu7/ieUY9mOKsO6xRnzJVXmS61/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/dn4MUt/btrAfD24Wu7/ieUY9mOKsO6xRnzJVXmS61/img.jpg"
                        data-alt="봄 트루, 봄 브라이트 캐쥬얼 룩"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/dn4MUt/btrAfD24Wu7/ieUY9mOKsO6xRnzJVXmS61/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdn4MUt%2FbtrAfD24Wu7%2FieUY9mOKsO6xRnzJVXmS61%2Fimg.jpg"
                        loading="lazy"
                        width={986}
                        height={1286}
                        data-origin-width={986}
                        data-origin-height={1286}
                        data-phocus-index={2}
                        />
                    </span>
                    <figcaption>봄 트루, 봄 브라이트 캐쥬얼 룩</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    봄 브라이트, 봄 트루 타입분에게 잘 어울릴 캐주얼한 느낌의 감성
                    코디입니다. 흰색 상의에 살짝 비비드한 톤의&nbsp;&nbsp;분홍색 가디건이
                    상큼함을 더해주고, 과하지 않은 와이드 핏의 청바지, 플랫슈즈로 매치하여
                    경쾌한 느낌을 줍니다
                    <br />
                    <br />
                    <br />
                    <br />                    
                    </p>
                    {/* 광고 2 */}
                    <Advertise avenue={selectedAvenue[1]} location={"1"} />
                    <h3 style={{ textAlign: "left" }} data-ke-size="size23">
                    2. 여름 쿨톤 환절기 코디
                    </h3>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    여름 쿨톤 분에게 어울릴 봄~여름 코디 알려드릴게요
                    <br />
                    <br />
                    </p>
                    <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                    2-1. 여름 쿨톤 로맨틱 데이트 룩
                    </h4>
                    <p data-ke-size="size16" style={{ textAlign: "left" }} />
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={480}
                    data-origin-height={436}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/b0iSNr/btrAcvepk4A/IrMZBSJkWNe1r8oh4xnIMk/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/b0iSNr/btrAcvepk4A/IrMZBSJkWNe1r8oh4xnIMk/img.jpg"
                        data-alt="여름쿨톤 셋업"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/b0iSNr/btrAcvepk4A/IrMZBSJkWNe1r8oh4xnIMk/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0iSNr%2FbtrAcvepk4A%2FIrMZBSJkWNe1r8oh4xnIMk%2Fimg.jpg"
                        loading="lazy"
                        width={480}
                        height={436}
                        data-origin-width={480}
                        data-origin-height={436}
                        data-phocus-index={3}
                        />
                    </span>
                    <figcaption>여름쿨톤 셋업</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    <br />
                    아이보리색 셋업에 파스텔 톤의 하늘색 빛으로 귀여우면서 여성스러운
                    느낌을 연출한 룩이에요.
                    <br /> 상의만 변경하면 어떤 톤에도 매치가능하답니다.
                    <br />
                    지금은 살짝 여유로운 사이즈의 셋업이지만 조금 더 붙는 느낌으로
                    입어주신다면 세미정장으로 하객룩으로도 소화하실 수 있어요
                    <br />
                    살짝 덥다면 반팔 자켓을 입어도 좋아요.
                    <br />
                    <br />
                    </p>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={986}
                    data-origin-height={1288}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/bzfhRq/btrAdYgXRlb/wgwFUf5jI7CikbIoDyGZI0/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/bzfhRq/btrAdYgXRlb/wgwFUf5jI7CikbIoDyGZI0/img.jpg"
                        data-alt="여름쿨톤 데이트룩"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/bzfhRq/btrAdYgXRlb/wgwFUf5jI7CikbIoDyGZI0/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbzfhRq%2FbtrAdYgXRlb%2FwgwFUf5jI7CikbIoDyGZI0%2Fimg.jpg"
                        loading="lazy"
                        width={986}
                        height={1288}
                        data-origin-width={986}
                        data-origin-height={1288}
                        data-phocus-index={4}
                        />
                    </span>
                    <figcaption>여름쿨톤 데이트룩</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    민무늬 흰색 블라우스에 뷔스티에 원피스 조합은 언제나 옳습니다
                    데이트룩으로도 좋고, 여름쿨톤 하객룩으로도 적합해요! <br />
                    <br />
                    <br />
                    </p>
                    <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                    2-2. 여름 쿨톤 캐주얼 룩
                    </h4>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={480}
                    data-origin-height={600}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/bPHAk5/btrAdZMlYoV/5SHrTSjRzXl01pn6d714G1/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/bPHAk5/btrAdZMlYoV/5SHrTSjRzXl01pn6d714G1/img.jpg"
                        data-alt="소희 가디건"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/bPHAk5/btrAdZMlYoV/5SHrTSjRzXl01pn6d714G1/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPHAk5%2FbtrAdZMlYoV%2F5SHrTSjRzXl01pn6d714G1%2Fimg.jpg"
                        loading="lazy"
                        width={480}
                        height={600}
                        data-origin-width={480}
                        data-origin-height={600}
                        data-phocus-index={5}
                        />
                    </span>
                    <figcaption>소희 가디건</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    상큼한 연둣빛 무늬로 가디건으로 상큼함을 살리고 독특한 개성까지
                    살렸어요. 여기서 양말을 벗어도 좋고 아니면 특이한 색으로 개성을
                    살려줘도 좋아요.
                    </p>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={997}
                    data-origin-height={1248}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/wxai9/btrAePJvj6W/tm3DVWcfCuIMNBxHvVcLhk/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/wxai9/btrAePJvj6W/tm3DVWcfCuIMNBxHvVcLhk/img.jpg"
                        data-alt="여름 라이트, 여름 뮤트"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/wxai9/btrAePJvj6W/tm3DVWcfCuIMNBxHvVcLhk/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fwxai9%2FbtrAePJvj6W%2Ftm3DVWcfCuIMNBxHvVcLhk%2Fimg.jpg"
                        loading="lazy"
                        width={997}
                        height={1248}
                        data-origin-width={997}
                        data-origin-height={1248}
                        data-phocus-index={6}
                        />
                    </span>
                    <figcaption>여름 라이트, 여름 뮤트</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    라벤더 빛의 반팔에 아래를 흰 바지로
                    매치해주었는데요,&nbsp;&nbsp;흰색이 섞인 라벤더의 색감이
                    라이트~뮤트톤에 어울릴 것 같네요 이런 정도의 니트 반팔은 지금 계절
                    아니면 더워서 못 입어요~
                    </p>
                    <h3 style={{ textAlign: "left" }} data-ke-size="size23">
                    3. 가을 웜톤 환절기 코디
                    </h3>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    낮엔 덥지만 밤에는 쌀쌀한 이런 날엔 가볍게 하나만 입는 가디건을 걸치는
                    코디나 재킷을 이용한 코디가&nbsp;&nbsp;대세라고 생각하는데요, 트렌치
                    재킷이 가장 잘 어울리는 톤은 가을 웜톤이라고 생각합니다.
                    <br />
                    <br />
                    </p>
                    <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                    3-1. 가을 웜톤 환절기 로맨틱 룩<br />
                    </h4>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1024}
                    data-origin-height={1280}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/bJi9oW/btrAfDciUSs/UaKlUxjUGP86TazbsPEmL1/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/bJi9oW/btrAfDciUSs/UaKlUxjUGP86TazbsPEmL1/img.jpg"
                        data-alt="이해리님 가을웜톤 정석코디"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/bJi9oW/btrAfDciUSs/UaKlUxjUGP86TazbsPEmL1/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJi9oW%2FbtrAfDciUSs%2FUaKlUxjUGP86TazbsPEmL1%2Fimg.jpg"
                        loading="lazy"
                        width={1024}
                        height={1280}
                        data-origin-width={1024}
                        data-origin-height={1280}
                        data-phocus-index={7}
                        />
                    </span>
                    <figcaption>이해리님 가을웜톤 정석코디</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    성숙하고 세련된 이미지의 다비치 이해리 님의 코디 중 딱 이 코디가 정말
                    이건 가을웜톤 정석이예요. 트루 딥 뮤트 구분 없이 잘 어울릴만한
                    코디이고, 색감이 다 갈색이라 살짝 더워 보일 수 있지만 흰색 셔츠를
                    오픈해 시원하게 만들어줬어요. <br />
                    <br />
                    </p>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={480}
                    data-origin-height={694}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/bbs24r/btrAh9uPqwD/utfkaxzjiLGLXLY8mjpKL1/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/bbs24r/btrAh9uPqwD/utfkaxzjiLGLXLY8mjpKL1/img.jpg"
                        data-alt="가을웜톤 하객룩"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/bbs24r/btrAh9uPqwD/utfkaxzjiLGLXLY8mjpKL1/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbbs24r%2FbtrAh9uPqwD%2FutfkaxzjiLGLXLY8mjpKL1%2Fimg.jpg"
                        loading="lazy"
                        width={480}
                        height={694}
                        data-origin-width={480}
                        data-origin-height={694}
                        data-phocus-index={8}
                        />
                    </span>
                    <figcaption>가을웜톤 하객룩</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    가을 웜톤이 입었을 때 잘 어울릴만한 데이트룩, 하객룩입니다. 이 색은
                    가을 뮤트 가을 딥 분들까지 잘 어울릴만한 색입니다.
                    <br />
                    <br />
                    </p>
                    <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                    3-2. 가을웜톤 캐쥬얼 룩<br />
                    </h4>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1024}
                    data-origin-height={691}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/bUllwo/btrAh7RjNYo/FtmPlQrge4Z8OoaWTu1a2k/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/bUllwo/btrAh7RjNYo/FtmPlQrge4Z8OoaWTu1a2k/img.jpg"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/bUllwo/btrAh7RjNYo/FtmPlQrge4Z8OoaWTu1a2k/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbUllwo%2FbtrAh7RjNYo%2FFtmPlQrge4Z8OoaWTu1a2k%2Fimg.jpg"
                        loading="lazy"
                        width={1024}
                        height={691}
                        data-origin-width={1024}
                        data-origin-height={691}
                        data-phocus-index={9}
                        />
                    </span>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    가을 웜톤들은 빈티지한 느낌이 잘 어울리는 경우가 많은데요, 위 사진같이
                    잔 꽃무늬가 들어간 원피스나 상의에 청바지를 매치해도 좋아요. 날씨가
                    쌀쌀하다면 베이지톤이나 옅은 갈색의 트렌치를 매치하면 딱! 가을 트루톤
                    분들에게 찰떡일 거 같아요.
                    <br />
                    <br />
                    </p>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1080}
                    data-origin-height={1073}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/ueCcY/btrAhdqHGLO/ianwrWbgsrK2qISJ6KXm5K/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/ueCcY/btrAhdqHGLO/ianwrWbgsrK2qISJ6KXm5K/img.jpg"
                        data-alt="뉴트럴코디 "
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/ueCcY/btrAhdqHGLO/ianwrWbgsrK2qISJ6KXm5K/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FueCcY%2FbtrAhdqHGLO%2FianwrWbgsrK2qISJ6KXm5K%2Fimg.jpg"
                        loading="lazy"
                        width={1080}
                        height={1073}
                        data-origin-width={1080}
                        data-origin-height={1073}
                        data-phocus-index={10}
                        />
                    </span>
                    <figcaption>뉴트럴코디 </figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    가을웜톤라고 정말 웜한 색만 어울리는 게 아니라 요런 쿨톤일 것 같지만
                    사실 웜쿨 상관없이 어울리는 톤도 어울리는 색감이 있어요
                    <br />
                    중간 명도가 어울리는 분들은 이런 색감에도 도전해보세요. 뮤트,딥톤
                    추천!&nbsp;&nbsp;라이트 분들은 아마 황톳빛이 될 수도 있어서
                    패스해주세요
                    <br />
                    <br />
                    </p>

                    {/* 광고 3 */}
                    <Advertise avenue={selectedAvenue[2]} location={"2"} />

                    <h3 style={{ textAlign: "left" }} data-ke-size="size23">
                    4. 겨울 쿨톤 환절기 코디
                    </h3>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    겨울 쿨톤의 제일 색이 한정적인데요, 그나마 좋은 건 무채색이 가장 잘
                    받는다는 점이에요.
                    <br />
                    그리고 옷은 무채색이 가장 많다는 점!
                    <br />
                    겨울 브라이트 분들은 원색도 정말 잘 받는답니다.
                    <br />
                    <br />
                    </p>
                    <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                    4-1. 겨울 쿨톤 환절기 로맨틱 룩<br />
                    </h4>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1076}
                    data-origin-height={1350}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/RGHS4/btrAfEvXabG/CIaGPiAXEwLlKkomOQFxoK/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/RGHS4/btrAfEvXabG/CIaGPiAXEwLlKkomOQFxoK/img.jpg"
                        data-alt="겨울쿨톤 가디건코디"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/RGHS4/btrAfEvXabG/CIaGPiAXEwLlKkomOQFxoK/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRGHS4%2FbtrAfEvXabG%2FCIaGPiAXEwLlKkomOQFxoK%2Fimg.jpg"
                        loading="lazy"
                        width={1076}
                        height={1350}
                        data-origin-width={1076}
                        data-origin-height={1350}
                        data-phocus-index={11}
                        />
                    </span>
                    <figcaption>겨울쿨톤 가디건코디</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    아이보리색에 흰 바지는 기본 룩이죠, 모든 톤에 사실 잘 어울리는
                    코디예요! 그렇지만 보라색 구두는 흔하지 않다는 거 겨울 브라이트 분들
                    옷으로 원색이 부담스럽다면 구두 가방 등을 저런 튀는 색으로
                    도전해보세요 <br />
                    <br />
                    </p>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1077}
                    data-origin-height={1491}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/b0Nvb4/btrAnEOkCN5/lhpTFvjMEXn0aX8OMxTkRK/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/b0Nvb4/btrAnEOkCN5/lhpTFvjMEXn0aX8OMxTkRK/img.jpg"
                        data-alt="겨울쿨톤 트위드 반팔 재킷 코디"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/b0Nvb4/btrAnEOkCN5/lhpTFvjMEXn0aX8OMxTkRK/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0Nvb4%2FbtrAnEOkCN5%2FlhpTFvjMEXn0aX8OMxTkRK%2Fimg.jpg"
                        loading="lazy"
                        width={1077}
                        height={1491}
                        data-origin-width={1077}
                        data-origin-height={1491}
                        data-phocus-index={12}
                        />
                    </span>
                    <figcaption>겨울쿨톤 트위드 반팔 재킷 코디</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    트위드 재킷을 이너를 대충 입어도&nbsp;&nbsp;챙겨 입은 듯한 느낌이
                    들어서 좋답니다 여름 반팔로도 얇은 버전으로 나오니 참고해주세요 무채색
                    코디로만 이루어진 코디인데 너무 화사해 보이지 않나요?
                    <br />
                    겉이 검은색, 안이 흰색으로 안팎을 바꿔 입으면 하객룩으로도 가능할 거
                    같아요
                    </p>
                    <h4 style={{ textAlign: "left" }} data-ke-size="size20">
                    4-2. 겨울 쿨톤 환절기 캐주얼 룩
                    </h4>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1073}
                    data-origin-height={1277}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/bgTTn1/btrAnFNecv5/rwEhHMZNnTrQE5dgADb0A1/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/bgTTn1/btrAnFNecv5/rwEhHMZNnTrQE5dgADb0A1/img.jpg"
                        data-alt="겨울쿨톤 반팔 니트 코디"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/bgTTn1/btrAnFNecv5/rwEhHMZNnTrQE5dgADb0A1/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgTTn1%2FbtrAnFNecv5%2FrwEhHMZNnTrQE5dgADb0A1%2Fimg.jpg"
                        loading="lazy"
                        width={1073}
                        height={1277}
                        data-origin-width={1073}
                        data-origin-height={1277}
                        data-phocus-index={13}
                        />
                    </span>
                    <figcaption>겨울쿨톤 반팔 니트 코디</figcaption>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    진회색 반팔 니트는 겨울 쿨톤 중 립톤이 가장 잘 어울릴 거예요. 시크한
                    느낌도 나면서 니트의 재질과 모양 때문에 어딘가 귀여운 느낌도 살아요.
                    <br />
                    <br />
                    <br />
                    </p>
                    <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={480}
                    data-origin-height={600}
                    >
                    <span
                        data-url="https://blog.kakaocdn.net/dn/c3PSNg/btrAfDqkpiY/MxfJh3IfK6qjfTKk0CLqlk/img.jpg"
                        data-phocus="https://blog.kakaocdn.net/dn/c3PSNg/btrAfDqkpiY/MxfJh3IfK6qjfTKk0CLqlk/img.jpg"
                    >
                        <img
                        src="https://blog.kakaocdn.net/dn/c3PSNg/btrAfDqkpiY/MxfJh3IfK6qjfTKk0CLqlk/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc3PSNg%2FbtrAfDqkpiY%2FMxfJh3IfK6qjfTKk0CLqlk%2Fimg.jpg"
                        loading="lazy"
                        width={480}
                        height={600}
                        data-origin-width={480}
                        data-origin-height={600}
                        data-phocus-index={14}
                        />
                    </span>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }}>
                    귀염 시크의 대표주자 소희님의 멜빵 코디도 있어요
                    <br />
                    저렇게 과감한 스타일링은 평소에 하기 어려우니 기본 반팔티를 안에 입고
                    입어주면 데일리로 딱이겠죠?
                    <br />
                    <br />
                    여기까지 퍼스널 컬러 톤 별 환절기 코디를 알아보았습니다. 다음에 또
                    다양한 스타일로 찾아올게요. <br />
                    <br />
                    </p>

                    <figure
                    data-ke-type="opengraph"
                    data-og-title="퍼스널 컬러별 여자 봄 옷 스타일"
                    data-ke-align="alignCenter"
                    data-og-description="안녕하세요 여러분의 매력을 업그레이드 시켜드릴 이보요입니다. 곽윤기 님 퍼스널컬러 중요성 사진 보셨나요? 나에게 어울리는 색감 매치의 중요성이 보이는 사진이었어요 봄 옷 어떤 걸 사야"
                    data-og-host="pleasereadthis.tistory.com"
                    data-og-source-url="https://pleasereadthis.tistory.com/m/17"
                    data-og-image="https://scrap.kakaocdn.net/dn/bXU0Dg/hyN9X07BLC/5asJmroNnkYlGvQNJpciqk/img.jpg?width=800&height=937&face=0_0_800_937"
                    data-og-url="https://pleasereadthis.tistory.com/17"
                    >
                    <a
                        href="https://pleasereadthis.tistory.com/17"
                        target="_blank"
                        data-source-url="https://pleasereadthis.tistory.com/m/17"
                    >
                        <div
                        className="og-image"
                        style={{
                            backgroundImage:
                            'url("https://scrap.kakaocdn.net/dn/bXU0Dg/hyN9X07BLC/5asJmroNnkYlGvQNJpciqk/img.jpg?width=800&height=937&face=0_0_800_937")'
                        }}
                        ></div>
                        <div className="og-text">
                        <p className="og-title">퍼스널 컬러별 여자 봄 옷 스타일</p>
                        <p className="og-desc">
                            안녕하세요 여러분의 매력을 업그레이드 시켜드릴 이보요입니다.
                            곽윤기 님 퍼스널컬러 중요성 사진 보셨나요? 나에게 어울리는 색감
                            매치의 중요성이 보이는 사진이었어요 봄 옷 어떤 걸 사야
                        </p>
                        <p className="og-host">pleasereadthis.tistory.com</p>
                        </div>
                    </a>
                    </figure>
                    <figure
                    data-ke-type="opengraph"
                    data-og-title="퍼스널 컬러별 헤어 염색 컬러 종류"
                    data-ke-align="alignCenter"
                    data-og-description="지금 내가 하고있는 머리색상이 나랑 어울리는지 궁금하신가요? 퍼스널컬러별로 어울리는 모발 색상 알고싶으시다구요?  트렌드에 맞는 유행색상, 그리고 직장인들도 가능한 스테디한 색상 함"
                    data-og-host="pleasereadthis.tistory.com"
                    data-og-source-url="https://pleasereadthis.tistory.com/25"
                    data-og-image="https://scrap.kakaocdn.net/dn/bfMl2h/hyN9Rmj8yX/V93uzjWa6ZMMcbS0xxNpEk/img.gif?width=670&height=585&face=193_107_430_365"
                    data-og-url="https://pleasereadthis.tistory.com/25"
                    >
                    <a
                        href="https://pleasereadthis.tistory.com/25"
                        target="_blank"
                        data-source-url="https://pleasereadthis.tistory.com/25"
                    >
                        <div
                        className="og-image"
                        style={{
                            backgroundImage:
                            'url("https://scrap.kakaocdn.net/dn/bfMl2h/hyN9Rmj8yX/V93uzjWa6ZMMcbS0xxNpEk/img.gif?width=670&height=585&face=193_107_430_365")'
                        }}
                        ></div>
                        <div className="og-text">
                        <p className="og-title">퍼스널 컬러별 헤어 염색 컬러 종류</p>
                        <p className="og-desc">
                            지금 내가 하고있는 머리색상이 나랑 어울리는지 궁금하신가요?
                            퍼스널컬러별로 어울리는 모발 색상 알고싶으시다구요?
                            &nbsp;트렌드에 맞는 유행색상, 그리고 직장인들도 가능한 스테디한
                            색상 함
                        </p>
                        <p className="og-host">pleasereadthis.tistory.com</p>
                        </div>
                    </a>
                    </figure>
                    <p data-ke-size="size16" style={{ textAlign: "left" }} />
                </div>
                {/* System - START */}
                {/* System - END */}
                </div>
                </div>
            </div>
        </Game1Wrapper>
    );
};

export default Beauty2;

const Game1Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 18px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;
