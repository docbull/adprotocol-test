import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "../postStyle.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/food1.json";

const Food1 = () => {
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
            <div className="jb-column jb-column-content">
                <div className="jb-cell jb-cell-content jb-cell-content-article">
                    <article>
                        <header style={{unicodeBidi: 'isolate'}}>
                            <div className="jb-content-title jb-content-title-article">
                                <h2>
                                    <a href="/entry/%ED%94%BC%EC%9E%90%EC%97%90-%ED%86%A0%EB%A7%88%ED%86%A0%EC%86%8C%EC%8A%A4-%EC%97%86%EC%9D%B4%EB%8F%84-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%A7%9B%EC%9E%88%EB%8B%A4%EA%B3%A0-%EC%96%91%EB%B0%B0%EC%B6%94%ED%94%BC%EC%9E%90-%ED%99%A9%EA%B8%88%EB%A0%88%EC%8B%9C%ED%94%BC">
                                    피자에 토마토소스 없이도 이렇게 맛있다고? 양배추피자 황금레시피
                                    </a>
                                </h2>
                                <div className="jb-article-information">
                                    <ul>
                                    <li>
                                        <span className="jb-article-information-category">
                                        <a href="/category/%EB%A7%9B%EC%9E%88%EB%8A%94%20%EB%A0%88%EC%8B%9C%ED%94%BC%20">
                                            맛있는 레시피{" "}
                                        </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="jb-article-information-date">
                                        2025. 3. 21. 07:00
                                        </span>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        
                        <section>
                            <div className="jb-content jb-content-article">
                                <div className="jb-article">
                                    <div itemProp="articleBody">
                                        <div className="tt_article_useless_p_margin contents_style">
                                            {/* 광고 1 */}
                                            <Advertise avenue={selectedAvenue[0]} location={"0"} />

                                            <h2 style={{ textAlign: "center" }} data-ke-size="size26">
                                                <span style={{ color: "#1b711d" }}>
                                                    <b>
                                                    피자에 토마토소스 없이도 이렇게 맛있다고? 양배추피자
                                                    황금레시피
                                                    </b>
                                                </span>
                                            </h2>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_15-메인.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/ONLMp/btsMQgvPa1V/wTasasw7bkKSJ383qyeih0/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/ONLMp/btsMQgvPa1V/wTasasw7bkKSJ383qyeih0/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/ONLMp/btsMQgvPa1V/wTasasw7bkKSJ383qyeih0/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FONLMp%2FbtsMQgvPa1V%2FwTasasw7bkKSJ383qyeih0%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_15-메인.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={0}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                피자 하면 가장 먼저 떠오르는건 빨간 토마토스스죠.{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                하지만&nbsp;꼭&nbsp;토마토소스가&nbsp;있어야만&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                맛있는&nbsp;피자가&nbsp;완성되는건&nbsp;아니에요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                토마토소스&nbsp;없이도&nbsp;충분히&nbsp;맛있는&nbsp;피자를&nbsp;만들&nbsp;수&nbsp;있어요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                한입&nbsp;먹으면&nbsp;반할&nbsp;수&nbsp;밖에&nbsp;없는&nbsp;특별한&nbsp;피자,{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                다같이&nbsp;즐길&nbsp;준비&nbsp;되셨죠?!{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <center>
                                            <ins
                                                className="adsbygoogle"
                                                style={{ display: "inline-block", width: 336, height: 280 }}
                                                data-ad-client="ca-pub-1398680491512997"
                                                data-ad-slot={8379396551}
                                                data-adsbygoogle-status="done"
                                            >
                                                <iframe
                                                id="aswift_2"
                                                style={{
                                                    height: "1px !important",
                                                    maxHeight: "1px !important",
                                                    maxWidth: "1px !important",
                                                    width: "1px !important"
                                                }}
                                                >
                                                &lt;iframe id="google_ads_frame2"&gt;
                                                </iframe>
                                            </ins>
                                            </center>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                모양만 피자와 같을 뿐…{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                익숙한&nbsp;피자&nbsp;재료가&nbsp;아닌&nbsp;색다른&nbsp;재료의&nbsp;조합으로{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                양배추피자를&nbsp;만들어&nbsp;볼게요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_1.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/1nCG9/btsMRejNnIb/AIADBMcQV4JuGe9l0xKE21/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/1nCG9/btsMRejNnIb/AIADBMcQV4JuGe9l0xKE21/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/1nCG9/btsMRejNnIb/AIADBMcQV4JuGe9l0xKE21/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1nCG9%2FbtsMRejNnIb%2FAIADBMcQV4JuGe9l0xKE21%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_1.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={1}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                재료는 양배추, 또띠아, 소시지, 모짜렐라치즈,{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                딸기잼,&nbsp;마요네즈,&nbsp;다진마늘,&nbsp;케첩&nbsp;준비했어요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_2.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/D1lj9/btsMRjL3Ztb/R594gKghG88ury4kk6YMX1/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/D1lj9/btsMRjL3Ztb/R594gKghG88ury4kk6YMX1/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/D1lj9/btsMRjL3Ztb/R594gKghG88ury4kk6YMX1/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FD1lj9%2FbtsMRjL3Ztb%2FR594gKghG88ury4kk6YMX1%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_2.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={2}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>&nbsp;</span>
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                양배추 깨끗하게 씻어서 얇게 채 썰어주시고요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_3.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/9rCsH/btsMSynFuzl/9FhTcU0rHugl3r07QvH4yk/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/9rCsH/btsMSynFuzl/9FhTcU0rHugl3r07QvH4yk/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/9rCsH/btsMSynFuzl/9FhTcU0rHugl3r07QvH4yk/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9rCsH%2FbtsMSynFuzl%2F9FhTcU0rHugl3r07QvH4yk%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_3.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={3}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>&nbsp;</span>
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                소시지는 취향대로 썰어주세요.{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                저는&nbsp;길쭉길쭉&nbsp;큼직하게&nbsp;썰었어요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_4.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/J2cSp/btsMQClaFol/xbpAsHv5XPEltSqKTEKVg0/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/J2cSp/btsMQClaFol/xbpAsHv5XPEltSqKTEKVg0/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/J2cSp/btsMQClaFol/xbpAsHv5XPEltSqKTEKVg0/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJ2cSp%2FbtsMQClaFol%2FxbpAsHv5XPEltSqKTEKVg0%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_4.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={4}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                후라이팬에 올리브오일 두르고 다진마늘을 볶아주세요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                바삭하게&nbsp;튀기듯이&nbsp;볶아야&nbsp;더&nbsp;맛있어요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_5.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/bc9KZt/btsMRkYsEtR/6b9yFZwYNxT7JJZAouNhX0/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/bc9KZt/btsMRkYsEtR/6b9yFZwYNxT7JJZAouNhX0/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/bc9KZt/btsMRkYsEtR/6b9yFZwYNxT7JJZAouNhX0/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbc9KZt%2FbtsMRkYsEtR%2F6b9yFZwYNxT7JJZAouNhX0%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_5.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={5}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <center>
                                            {/* 꿀336_280-2 */}
                                            <ins
                                                className="adsbygoogle"
                                                style={{ display: "inline-block", width: 336, height: 280 }}
                                                data-ad-client="ca-pub-1398680491512997"
                                                data-ad-slot={1047701444}
                                                data-adsbygoogle-status="done"
                                            >
                                                <iframe
                                                id="aswift_3"
                                                style={{
                                                    height: "1px !important",
                                                    maxHeight: "1px !important",
                                                    maxWidth: "1px !important",
                                                    width: "1px !important"
                                                }}
                                                >
                                                &lt;iframe id="google_ads_frame3"&gt;
                                                </iframe>
                                            </ins>
                                            </center>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                마늘이 향 제대로 뿜으면서 갈색으로 변하면{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                건져내서&nbsp;키친타월로&nbsp;기름기&nbsp;제거해&nbsp;주시고요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_6.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/cTbf2a/btsMQfRgVAg/zKtJzv3Sh1124g4syu2Q80/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/cTbf2a/btsMQfRgVAg/zKtJzv3Sh1124g4syu2Q80/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/cTbf2a/btsMQfRgVAg/zKtJzv3Sh1124g4syu2Q80/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcTbf2a%2FbtsMQfRgVAg%2FzKtJzv3Sh1124g4syu2Q80%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_6.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={6}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>&nbsp;</span>
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                마요네즈에 넣어서 골고루 섞어주세요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                이게&nbsp;진정한&nbsp;마성의&nbsp;소스랍니다.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                일명&nbsp;갈릭마요&nbsp;ㅎㅎㅎ{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_7.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/b0mSPn/btsMQfwU6oJ/x8JrvGbtbY9PKJmjp96mZk/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/b0mSPn/btsMQfwU6oJ/x8JrvGbtbY9PKJmjp96mZk/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/b0mSPn/btsMQfwU6oJ/x8JrvGbtbY9PKJmjp96mZk/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0mSPn%2FbtsMQfwU6oJ%2Fx8JrvGbtbY9PKJmjp96mZk%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_7.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={7}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                저는 마늘향이 진한게 좋아서 거의 1:1로 섞었는데요.{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                비율은&nbsp;입맛에&nbsp;맞게&nbsp;조절해주시면&nbsp;돼요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_8.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/ShWRL/btsMR2CK8xD/oi93ukpizxjw9khx6jiqkK/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/ShWRL/btsMR2CK8xD/oi93ukpizxjw9khx6jiqkK/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/ShWRL/btsMR2CK8xD/oi93ukpizxjw9khx6jiqkK/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FShWRL%2FbtsMR2CK8xD%2Foi93ukpizxjw9khx6jiqkK%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_8.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={8}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>&nbsp;</span>
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                또띠아 위에 딸기잼을 얇게 펴 발라주세요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                그리고&nbsp;갈릭마요도&nbsp;골고루&nbsp;발라주시고요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_9.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/cLSupq/btsMRuNiCEW/TsHFC9SKXr0BRAXjK3DpR1/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/cLSupq/btsMRuNiCEW/TsHFC9SKXr0BRAXjK3DpR1/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/cLSupq/btsMRuNiCEW/TsHFC9SKXr0BRAXjK3DpR1/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcLSupq%2FbtsMRuNiCEW%2FTsHFC9SKXr0BRAXjK3DpR1%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_9.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={9}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                채 썬 양배추랑 소시지 올리고{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                모짜렐라치즈&nbsp;골고루&nbsp;뿌려주세요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_10.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/ek5xSz/btsMRiTVEhB/1sFOKb3CJkqFcMcF9JP9h0/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/ek5xSz/btsMRiTVEhB/1sFOKb3CJkqFcMcF9JP9h0/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/ek5xSz/btsMRiTVEhB/1sFOKb3CJkqFcMcF9JP9h0/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fek5xSz%2FbtsMRiTVEhB%2F1sFOKb3CJkqFcMcF9JP9h0%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_10.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={10}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <center>
                                            {/* 광고2 */}
                                            <Advertise avenue={selectedAvenue[1]} location={"1"} />
                                            
                                            </center>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                오븐은 200도로 10분,{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                에어프라이어는&nbsp;180도로&nbsp;7~8분&nbsp;구워주세요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_11.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/df41vD/btsMRxcbGiP/havXB2FVY0nQeNKhkKCp8k/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/df41vD/btsMRxcbGiP/havXB2FVY0nQeNKhkKCp8k/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/df41vD/btsMRxcbGiP/havXB2FVY0nQeNKhkKCp8k/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdf41vD%2FbtsMRxcbGiP%2FhavXB2FVY0nQeNKhkKCp8k%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_11.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={11}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                마지막에 케첩 뿌려서 마무리하면 맛있는 양배추피자
                                                완성입니당~{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_12.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/MMXy6/btsMRwqMZE0/pl9DRKgQ0XJaVEtLUiyPz1/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/MMXy6/btsMRwqMZE0/pl9DRKgQ0XJaVEtLUiyPz1/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/MMXy6/btsMRwqMZE0/pl9DRKgQ0XJaVEtLUiyPz1/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMMXy6%2FbtsMRwqMZE0%2Fpl9DRKgQ0XJaVEtLUiyPz1%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_12.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={12}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>&nbsp;</span>
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                달콤한 딸기잼과 고소한 갈릭마요, 새콤한 케첩까지&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                모두&nbsp;자기주장&nbsp;뚜렷한&nbsp;소스들인데&nbsp;조합이&nbsp;너무&nbsp;좋아요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_13.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/beipmg/btsMSatVjf4/dZ4mnJ8yCGgkupBDEK6JBk/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/beipmg/btsMSatVjf4/dZ4mnJ8yCGgkupBDEK6JBk/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/beipmg/btsMSatVjf4/dZ4mnJ8yCGgkupBDEK6JBk/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbeipmg%2FbtsMSatVjf4%2FdZ4mnJ8yCGgkupBDEK6JBk%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_13.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={13}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>&nbsp;</span>
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }}>
                                                특히 갈릭마요는 바삭한 마늘칩이 느끼함을 잡아주고요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_14.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/bqFrWQ/btsMSwpXqID/KhMnz5wKPK4NRcTCxdzdFK/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/bqFrWQ/btsMSwpXqID/KhMnz5wKPK4NRcTCxdzdFK/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/bqFrWQ/btsMSwpXqID/KhMnz5wKPK4NRcTCxdzdFK/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqFrWQ%2FbtsMSwpXqID%2FKhMnz5wKPK4NRcTCxdzdFK%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_14.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={14}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                풍성하게 올린 양배추가 자극적인 소스맛을&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                달큰한&nbsp;맛과&nbsp;아삭한&nbsp;식감으로&nbsp;밸런스를&nbsp;맞춰줘요.&nbsp;{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_15.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/sZu2V/btsMP9Q7Lxv/tyecelYyFRcENQku9zVg1k/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/sZu2V/btsMP9Q7Lxv/tyecelYyFRcENQku9zVg1k/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/sZu2V/btsMP9Q7Lxv/tyecelYyFRcENQku9zVg1k/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsZu2V%2FbtsMP9Q7Lxv%2FtyecelYyFRcENQku9zVg1k%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_15.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={15}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            &nbsp;
                                            </p>
                                            <p style={{ textAlign: "center" }} data-ke-size="size18">
                                            <span style={{ color: "#000000" }} />
                                            <span style={{ color: "#000000" }}>
                                                토마토소스 없는 피자도 정말 맛있네요~{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                주말에&nbsp;가족과&nbsp;함께&nbsp;별미로&nbsp;즐기기&nbsp;딱&nbsp;좋은&nbsp;요리랍니다.{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }}>
                                                양배추피자&nbsp;꼭&nbsp;드셔보세요.{" "}
                                            </span>
                                            <br />
                                            <span style={{ color: "#000000" }} />
                                            </p>
                                            <p />
                                            <figure
                                            className="imageblock alignCenter"
                                            data-ke-mobilestyle="widthOrigin"
                                            data-filename="a_16.jpg"
                                            data-origin-width={1843}
                                            data-origin-height={1382}
                                            >
                                            <span
                                                data-url="https://blog.kakaocdn.net/dn/bmScVO/btsMRuT4giN/IpmsGpm5PfQcoZK2htED21/img.jpg"
                                                data-phocus="https://blog.kakaocdn.net/dn/bmScVO/btsMRuT4giN/IpmsGpm5PfQcoZK2htED21/img.jpg"
                                            >
                                                <img
                                                src="https://blog.kakaocdn.net/dn/bmScVO/btsMRuT4giN/IpmsGpm5PfQcoZK2htED21/img.jpg"
                                                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmScVO%2FbtsMRuT4giN%2FIpmsGpm5PfQcoZK2htED21%2Fimg.jpg"
                                                loading="lazy"
                                                width={1843}
                                                height={1382}
                                                data-filename="a_16.jpg"
                                                data-origin-width={1843}
                                                data-origin-height={1382}
                                                data-phocus-index={16}
                                                />
                                            </span>
                                            </figure>
                                            <p />
                                            <center>
                                            {/* 꿀336_280-4 */}
                                            {/* 광고 3 */}
                                            <Advertise avenue={selectedAvenue[2]} location={"2"} />
                                            <ins
                                                className="adsbygoogle"
                                                style={{ display: "inline-block", width: 336, height: 280 }}
                                                data-ad-client="ca-pub-1398680491512997"
                                                data-ad-slot={7546452760}
                                                data-adsbygoogle-status="done"
                                            >
                                                <iframe
                                                id="aswift_5"
                                                style={{
                                                    height: "1px !important",
                                                    maxHeight: "1px !important",
                                                    maxWidth: "1px !important",
                                                    width: "1px !important"
                                                }}
                                                >
                                                &lt;iframe id="google_ads_frame5"&gt;
                                                </iframe>
                                            </ins>
                                            </center>
                                            <hr
                                            contentEditable="false"
                                            data-ke-type="horizontalRule"
                                            data-ke-style="style5"
                                            />
                                            <p
                                            style={{
                                                maxWidth: "100%",
                                                color: "#1b1b1b",
                                                fontFamily: '"Apple SD Gothic Neo"',
                                                fontSize: 18,
                                                lineHeight: 2
                                            }}
                                            data-ke-size="size16"
                                            >
                                            <span style={{ color: "#000000" }}>
                                                ★ 아래 링크에서 다양한 생활건강정보 채널을 만날 수 있어요~ ★
                                            </span>
                                            </p>
                                            <p
                                            style={{
                                                maxWidth: "100%",
                                                color: "#1b1b1b",
                                                fontFamily: '"Apple SD Gothic Neo"',
                                                fontSize: 18,
                                                lineHeight: 2
                                            }}
                                            data-ke-size="size16"
                                            >
                                            <span style={{ color: "#000000" }}>
                                                업데이트는 매일 진행됩니다.&nbsp;
                                            </span>
                                            </p>
                                            <p
                                            style={{
                                                maxWidth: "100%",
                                                color: "#1b1b1b",
                                                fontFamily: '"Apple SD Gothic Neo"',
                                                fontSize: 18,
                                                lineHeight: 2
                                            }}
                                            data-ke-size="size16"
                                            >
                                            <span style={{ color: "#1b1b1b", textAlign: "start" }}>
                                                ☞
                                            </span>
                                            <span style={{ color: "#0900ff" }}>&nbsp;</span>
                                            <span style={{ color: "#0900ff", maxWidth: "100%" }}>
                                                <a
                                                style={{ color: "#416ed2", maxWidth: "100%" }}
                                                href="https://inpk.link/cocohouse15"
                                                target="_blank"
                                                rel="noopener"
                                                >
                                                <span style={{ color: "#0900ff" }}>
                                                    "생활건강정보" 프로필
                                                </span>
                                                </a>
                                            </span>
                                            </p>
                                            <hr
                                            contentEditable="false"
                                            data-ke-type="horizontalRule"
                                            data-ke-style="style5"
                                            />
                                            <div
                                            className="txc-textbox"
                                            style={{
                                                border: "1px solid #fefeb8",
                                                backgroundColor: "#fefeb8",
                                                padding: 10
                                            }}
                                            >
                                                <span>
                                                    <span style={{ fontSize: "18.6667px" }}>
                                                    <b>제 글을 읽어주신 분들 고맙습니다.</b>
                                                    </span>
                                                </span>
                                                <br />
                                                <p
                                                    style={{
                                                    boxSizing: "border-box",
                                                    fontSize: 12,
                                                    marginRight: 0,
                                                    outline: "none",
                                                    lineHeight: 2,
                                                    color: "#666666",
                                                    fontFamily: "Arial, 돋움, Dotum, AppleGothic, sans-serif",
                                                    padding: "0px !important 0px 0px !important 0px"
                                                    }}
                                                    data-ke-size="size16"
                                                >
                                                    <span
                                                    style={{
                                                        boxSizing: "border-box",
                                                        color: "#ff0000",
                                                        fontFamily: "Helvetica",
                                                        fontSize: "14pt",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <span
                                                        style={{
                                                        boxSizing: "border-box",
                                                        color: "#000000",
                                                        fontSize: "14pt",
                                                        fontFamily: "Helvetica"
                                                        }}
                                                    >
                                                        도움이 되셨다면
                                                    </span>
                                                    </span>
                                                </p>
                                                <p
                                                    style={{
                                                    boxSizing: "border-box",
                                                    marginRight: "auto",
                                                    marginLeft: "auto",
                                                    outline: "none",
                                                    fontSize: 16,
                                                    lineHeight: 2,
                                                    color: "#666666",
                                                    fontFamily: '"Noto Sans", sans-serif',
                                                    padding: "0px !important 0px 0px !important 0px"
                                                    }}
                                                    data-ke-size="size16"
                                                >
                                                    <span
                                                    style={{
                                                        boxSizing: "border-box",
                                                        color: "#ff0000",
                                                        fontFamily: "Helvetica",
                                                        fontSize: "18.66666603088379px",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    <span
                                                        style={{
                                                        boxSizing: "border-box",
                                                        color: "#000000",
                                                        fontSize: "14pt",
                                                        fontFamily: "Helvetica"
                                                        }}
                                                    >
                                                        로그인이 필요없는 ↓
                                                    </span>
                                                    <span
                                                        style={{ fontSize: "14pt", fontFamily: "Helvetica" }}
                                                    >
                                                        ♡공감
                                                    </span>
                                                    </span>
                                                    <span
                                                    style={{
                                                        boxSizing: "border-box",
                                                        color: "#000000",
                                                        fontFamily: "Helvetica",
                                                        fontSize: "14pt",
                                                        fontWeight: "bold"
                                                    }}
                                                    >
                                                    ↓ 꼭 눌러주세요~
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </Game1Wrapper>
    );
};

export default Food1;

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