import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./hobby4.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/hobby4.json";

const Hobby4 = () => {
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
      <>
        <div id="wrap" style={{ height: "auto !important" }}>
          <section id="container" style={{ height: "auto !important", margin: "0", display: "flex", justifyContent: "center" }}>
            <div className="content-wrap" style={{ height: "auto !important", display: "flex", justifyContent: "center" }}>
              <article id="content" style={{ height: "auto !important", margin: "0" }}>
                {/* 제목위 광고 */}
                <div className="inner" style={{ height: "auto !important" }}>
                  {/*<div class="post-cover" >*/}
                  <div className="inner">
                    <span className="category">카테고리 없음</span>
                    <h1>데일리룩 고민 끝! 2025 봄 유행 옷 스타일별 코디 모음</h1>
                    <span className="meta">
                      <span className="author">by 프로게이머 트롤</span>
                      <span className="date">2025. 3. 6.</span>
                    </span>
                  </div>
                  {/*</div>*/}
                  <div
                    className="entry-content"
                    id="article-view"
                    style={{ height: "auto !important", minHeight: "0px !important" }}
                  >
                    <div
                      className="tt_article_useless_p_margin contents_style"
                      style={{ height: "auto !important" }}
                    >
                      {" "}
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n .highlight {\n position: relative;\n font-weight: bold;\n display: inline-block;\n padding: 0 5px; /* 텍스트 양옆에 여백 */\n }\n\n .highlight::after {\n content: '';\n position: absolute;\n bottom: 0; /* 텍스트의 아래쪽에 배경색이 위치하도록 설정 */\n left: 0;\n right: 0;\n height: 50%; /* 텍스트 높이의 절반만 배경색을 적용 */\n background-color: #FFEB3B; /* 지정한 배경색 */\n            z-index: -1; /* 텍스트 뒤에 배경색이 위치하도록 설정 */\n        }\n    "
                        }}
                      />
                      <figure className="imageblock alignCenter" width="100%">
                        {/* <span
                          data-url="https://blog.kakaocdn.net/dn/mLcHf/btsMDJiGcON/XNSuxuwvM39BugMjWDZh0K/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/mLcHf/btsMDJiGcON/XNSuxuwvM39BugMjWDZh0K/img.jpg"
                        > */}
                          <img
                            src="https://blog.kakaocdn.net/dn/mLcHf/btsMDJiGcON/XNSuxuwvM39BugMjWDZh0K/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmLcHf%2FbtsMDJiGcON%2FXNSuxuwvM39BugMjWDZh0K%2Fimg.jpg"
                            width="100%"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            data-phocus-index={0}
                          />
                        {/* </span> */}
                      </figure>
                      <h2
                        data-ke-size="size26"
                        id="인기-아이템-추천"
                        style={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#0f172a",
                          margin: "80px 0 40px 0",
                          paddingBottom: 16,
                          borderBottom: "3px solid #aaaaff",
                          position: "relative",
                          letterSpacing: "-0.03em",
                          lineHeight: "1.3"
                        }}
                      >
                        인기 아이템 추천
                      </h2>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        2025년 봄은 더없이 화사하고 생기 넘치는 스타일로 풍성할
                        예정이에요. 많은 사람들이 자주 입는 데일리룩에 대한 고민이
                        많았을 텐데, 요즘 유행하는 아이템들을 함께 알아보면 정말 좋을
                        것 같아요! 🌸 그럼 어떤 아이템들이 여러분의 의상 한켠을
                        빛내줄지 살펴볼까요?
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        먼저, 스테디 셀러인 <strong>느슨한 원피스</strong>를
                        추천해드려요. 여름까지 쭉 입을 수 있는 가벼운 소재로 제작됐고,
                        다양한 패턴이 있어 선택의 폭이 넓답니다. 다양한 악세서리와
                        함께 매치하면 완벽한 데일리룩이 탄생할 수 있어요! 😍
                        다음으로는{" "}
                        <b style={{ backgroundColor: "#ffe58a" }}>버킷햇</b>입니다.
                        햇살이 따사롭게 내리쬐는 봄날에 햇볕을 피하면서도 스타일을
                        챙길 수 있는 아이템이죠. 감각적인 색상이나 재미있는 프린트가
                        돋보이는 버킷햇으로 개성을 살려보세요! 🔆
                      </p>
                      <h3
                        data-ke-size="size23"
                        id="2025-봄-트렌드"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        2025 봄 트렌드
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        올 봄에는 <strong>벨벳 재킷</strong>과 같은 고급스러운
                        아이템이 큰 인기를 끌 거예요. 일반적인 봄 재킷보다 좀 더
                        특별하고 스타일리시하게 연출할 수 있답니다. 슬랙스나 스커트와
                        매치하면 정말 세련된 느낌! 🧥 또한, 벨트를 활용해 허리를
                        강조하면 여성스러움을 더할 수 있어요. 여기에 더해{" "}
                        <b style={{ backgroundColor: "#ffcc67" }}>
                          유니크한 패턴의 블라우스
                        </b>
                        도 많은 사랑을 받을 예정이에요. 플로럴, 스트라이프, 도트 같은
                        다양한 디자인으로 개성을 뽐내기 완벽하지요. 이런 블라우스를
                        선택할 때에는 간결한 하의와 함께 매치하면 조화로움을 잃지 않을
                        수 있어요! 🌷
                      </p>
                      <blockquote data-ke-style="style1" style={{ margin: 60 }}>
                        "스타일링은 당신의 개성을 표현하는 훌륭한 방법입니다!"
                      </blockquote>
                      <h3
                        data-ke-size="size23"
                        id="코디-팁"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        코디 팁
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        코디를 할 때는 항상 <strong>레이어링</strong> 기술을
                        기억하세요! 여름에는 가벼운 얇은 톱에 카디건을 더하고, 봄에는
                        조끼를 추가하는 것처럼 말이죠. 이렇게 레이어링을 조화롭게
                        잘하면 신선한 느낌을 줄 수 있답니다. 그렇다고 너무 많은 겹으로
                        부피감 부족한 선택은 피해야겠죠? 😊 또한,{" "}
                        <strong>악세서리</strong>도 매우 중요한 포인트에요. 가벼운
                        목걸이나 귀걸이는 여러분의 룩에 감각적이면서도 세련된 포인트를
                        주는 법! 적절한 타이밍에 추가해서 더욱 빛나는 데일리룩으로
                        만들어 보세요. 마지막으로, 🌈{" "}
                        <b style={{ backgroundColor: "#90e0ef" }}>컬러 조합</b>을
                        염두해 두면 자연스럽고 균형 잡힌 룩이 완성된답니다.
                      </p>
                      <p data-ke-size="size16">
                        <a
                          className="btn-rounded"
                          href="https://search.naver.com/search.naver?query=2025봄옷스타일"
                          style={{
                            display: "block",
                            width: "90%",
                            maxWidth: 600,
                            padding: "clamp(12px, 3vw, 20px) clamp(20px, 5vw, 48px)",
                            animation:
                              "smoothColorChange 1s ease-in-out infinite, smoothShadowChange 1s ease-in-out infinite",
                            backgroundColor: "#ff6b6b",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: 50,
                            fontSize: "clamp(16px, 5vw, 22px)",
                            fontWeight: "bold",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow:
                              "0 clamp(6px, 2vw, 8px) clamp(15px, 4vw, 20px) rgba(255, 45, 45, 0.3)",
                            textAlign: "center",
                            margin: "clamp(12px, 3vw, 24px) auto",
                            letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
                            textTransform: "uppercase",
                            WebkitTapHighlightColor: "transparent"
                          }}
                        >
                          여름철 멋진 스타일 찾아보기 🌺
                        </a>
                      </p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <Advertise avenue={selectedAvenue[0]} location={"0"} />
                      <p data-ke-size="size16">&nbsp;</p>
                      <h2
                        data-ke-size="size26"
                        id="컬러-트렌드-분석"
                        style={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#0f172a",
                          margin: "80px 0 40px 0",
                          paddingBottom: 16,
                          borderBottom: "3px solid #aaaaff",
                          position: "relative",
                          letterSpacing: "-0.03em",
                          lineHeight: "1.3"
                        }}
                      >
                        컬러 트렌드 분석
                      </h2>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        2025년 봄에 눈여겨봐야 할 <strong>컬러 트렌드</strong>가
                        무엇인지 알아볼까요?😉 매년 봄 시즌이 다가올 때마다 다양한
                        색상이 유행하는데, 이 컬러들은 단순한 트렌드가 아니라 우리의
                        기분과 스타일을 표현하는 중요한 요소입니다. 최근 유행하는{" "}
                        <strong>색상들</strong>을 살펴보면, 화사하면서도 따뜻한 느낌을
                        주는 <b style={{ backgroundColor: "#ffff99" }}>파스텔 톤</b>이
                        큰 인기를 끌 전망입니다. 특히, 연한 분홍색과 민트색 조합은
                        봄의 상징과도 같아요.🌸
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        또한, <strong>지속 가능한 패션</strong>이 주목받으면서
                        자연에서 영감을 받은{" "}
                        <b style={{ backgroundColor: "#99ff99" }}>녹색 계열</b>이
                        트렌드에 등장하고 있습니다. 환경을 생각한 색상 선택이 더 나은
                        세상을 위한 작은 발걸음이 되지 않을까요?🤗 이미 여러
                        디자이너들 사이에서는 이러한 트렌드가 뜨거운 관심을 받고
                        있어요. 따라서 올해 봄에는 단순히 유행을 따르는 것이 아니라,
                        본인이 좋아하고 잘 어울리는 색상을 선택해 보는 것이
                        중요합니다.
                      </p>
                      <h3
                        data-ke-size="size23"
                        id="2025-봄-컬러-트렌드-표"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        2025 봄 컬러 트렌드 표
                      </h3>
                      <table
                        data-ke-align="alignLeft"
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          margin: "25px 0",
                          borderRadius: 16,
                          overflow: "hidden",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                backgroundColor: "#aaaaff",
                                color: "#FFFFFF",
                                fontWeight: 600,
                                padding: "12px 15px",
                                textAlign: "left",
                                border: "1px solid #eaeaea"
                              }}
                            >
                              컬러
                            </th>
                            <th
                              style={{
                                backgroundColor: "#aaaaff",
                                color: "#FFFFFF",
                                fontWeight: 600,
                                padding: "12px 15px",
                                textAlign: "left",
                                border: "1px solid #eaeaea"
                              }}
                            >
                              느낌
                            </th>
                            <th
                              style={{
                                backgroundColor: "#aaaaff",
                                color: "#FFFFFF",
                                fontWeight: 600,
                                padding: "12px 15px",
                                textAlign: "left",
                                border: "1px solid #eaeaea"
                              }}
                            >
                              활용 아이템
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              <b style={{ backgroundColor: "#ffff99" }}>
                                파스텔 핑크
                              </b>
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              사랑스럽고 부드러운 느낌
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              원피스, 니트
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              <b style={{ backgroundColor: "#99ff99" }}>민트색</b>
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              상쾌하고 청량한 느낌
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              팬츠, 자켓
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              <b style={{ backgroundColor: "#ffd1d1" }}>
                                소프트 레드
                              </b>
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              따뜻하고 활기찬 느낌
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              블라우스, 스커트
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <blockquote data-ke-style="style1" style={{ margin: 60 }}>
                        매일의 룩을 새롭게 해줄 색상을 선택하세요.💖
                      </blockquote>
                      <h3
                        data-ke-size="size23"
                        id="컬러-조화-팁"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        컬러 조화 팁
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        컬러 트렌드를 활용하기 위해서는 <strong>색상 조화</strong>가
                        정말 중요해요! 잘 선택된 색상끼리 조화를 이루면 당신의 룩이
                        한층 더 세련되게 변신할 수 있습니다. 가장 기본적인 방법은{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>원색과 중간 색상</b>
                        을 조화롭게 매치하는 것입니다. 예를 들어, 파스텔 핑크와 짙은
                        베이지는 서로 멋진 대조를 이루면서도 부드러운 느낌을 주죠.
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        혹은, 비슷한 색조의 그라데이션을 활용하는 방법도 있답니다.
                        같은 컬러 계열의 색상들을 선택해 서서히 변화하는 느낌을 연출할
                        수 있어요. 예를 들어, 소프트 레드와 코랄 색상 조합으로
                        따뜻하고 활기찬 분위기를 만들어낼 수 있지요!😎 작은 변화로 큰
                        스타일 변화를 이끌어낼 수 있는 이런 팁들을 활용해 보세요.
                      </p>
                      <p data-ke-size="size16">
                        <a
                          className="btn-rounded"
                          href="https://search.naver.com/search.naver?query=2025봄컬러"
                          style={{
                            display: "block",
                            width: "90%",
                            maxWidth: 600,
                            padding: "clamp(12px, 3vw, 20px) clamp(20px, 5vw, 48px)",
                            animation:
                              "smoothColorChange 1s ease-in-out infinite, smoothShadowChange 1s ease-in-out infinite",
                            backgroundColor: "#ff6b6b",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: 50,
                            fontSize: "clamp(16px, 5vw, 22px)",
                            fontWeight: "bold",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow:
                              "0 clamp(6px, 2vw, 8px) clamp(15px, 4vw, 20px) rgba(255, 45, 45, 0.3)",
                            textAlign: "center",
                            margin: "clamp(12px, 3vw, 24px) auto",
                            letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
                            textTransform: "uppercase",
                            WebkitTapHighlightColor: "transparent"
                          }}
                        >
                          2025 봄 옷 스타일 더 알아보기! 🌼
                        </a>
                      </p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <h2
                        data-ke-size="size26"
                        id="스타일별-키-포인트"
                        style={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#0f172a",
                          margin: "80px 0 40px 0",
                          paddingBottom: 16,
                          borderBottom: "3px solid #aaaaff",
                          position: "relative",
                          letterSpacing: "-0.03em",
                          lineHeight: "1.3"
                        }}
                      >
                        스타일별 키 포인트
                      </h2>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        2025년 봄 컬렉션! 이 시즌 가장 핫한 아이템들을 살펴보고,
                        어떻게 조합할 수 있을지 함께 고민해보려고 해요. 하지만 이렇게
                        옷을 고르면서 고민을 거듭하다가 결국 같은 옷장 대란에 빠지게
                        되곤 하죠. 😅 그래서 오늘은 각 스타일별로 꼭 필요한{" "}
                        <strong>키 포인트</strong>를 알아보려고 해요. 스타일별로
                        어떻게 코디해볼 수 있는지 안내해드릴게요.
                      </p>
                      <h3
                        data-ke-size="size23"
                        id="캐주얼-스타일"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        캐주얼 스타일
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        캐주얼 룩은 언제나 사랑받는 스타일 중 하나죠! 올해 봄에는{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>
                          오버사이즈 티셔츠와 스트레이트 핏의 청바지 조합
                        </b>
                        이 특히 핫하답니다. 여기에{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>스니커즈</b>나{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>샌들</b>을 매치하면
                        캐주얼한 느낌을 물씬 살릴 수 있어요. 또, 액세서리 하나로
                        포인트를 더하고 싶다면, 큰 귀걸이나 플리츠 백을 착용해보세요.
                        이렇게 작은 변화만으로도 전체적인 분위기가 확 달라질 수
                        있어요!✨
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        특히 올해는{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>컬러 블로킹</b>이
                        유행할 예정이니, 반짝이는 오렌지와 딥 블루 색 조합을
                        활용해보세요. 신선하면서도 세련된 느낌을 전해줄 거예요. 이
                        스타일은 일상에서 좀 더 자연스럽고 쿨한 이미지로 변신할 수
                        있도록 도와줄 뿐 아니라, 주말 나들이 코디로도 그만이에요!😉
                      </p>
                      <blockquote data-ke-style="style1" style={{ margin: 60 }}>
                        패션은 자기 표현의 첫걸음이다.
                      </blockquote>
                      <h3
                        data-ke-size="size23"
                        id="세미포멀-스타일"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        세미포멀 스타일
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        세미포멀 스타일은 조금 더 차분하고 세련된 룩을 원하시는 분들께
                        추천드려요.{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>화이트 셔츠</b>와{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>블랙 슬랙스</b>{" "}
                        조합은 절대적이죠. 여기에{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>
                          가벼운 트렌치 코트
                        </b>
                        를 걸치면 더욱 완벽해요. 이 조합은 직장에서도 멋있고,
                        데이트에서도 사랑받는 룩이랍니다.❤
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        또한,{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>간결한 클러치백</b>
                        과 <b style={{ backgroundColor: "#ffff99" }}>클래식한 힐</b>을
                        매치해보세요. 미니멀리즘의 패러다임이 올 봄에도 여전히 유행할
                        테니, 부드러운 색조를 선택해보는 것이 좋습니다. 최근에는{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>
                          부드러운 파스텔 색상
                        </b>
                        들이 인기이니 참고해보세요!🌼
                      </p>
                      <h3
                        data-ke-size="size23"
                        id="트렌디-스타일"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        트렌디 스타일
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        마지막으로, 가장 트렌디한 스타일에 대해 이야기해볼게요. 올
                        봄은 <b style={{ backgroundColor: "#ffff99" }}>체크 패턴</b>이
                        매우 유행할 예정이에요. 체크 원피스나 체크 재킷을 활용해
                        패셔너블한 느낌을 줄 수 있고, 여기에{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>플랫폼 슈즈</b>를
                        착용하면 스텝의 경쾌함을 더할 수 있어요. 이제 저먼 플랫폼에도
                        주목해보세요!🌟
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        주목하고 싶은 점은, 다양한{" "}
                        <b style={{ backgroundColor: "#ffff99" }}>레이어링 기법</b>을
                        활용하여 스타일을 한층 업그레이드할 수 있다는 점입니다. 위에
                        긴 재킷을 걸치고 아랫부분에 하는 패턴을 미니멀하게 조합하세요.
                        패션이란 과감함과 창의성이 필요하니까요!💕
                      </p>
                      <p data-ke-size="size16">
                        <a
                          className="btn-rounded"
                          href="https://search.naver.com/search.naver?query=2025봄패션"
                          style={{
                            display: "block",
                            width: "90%",
                            maxWidth: 600,
                            padding: "clamp(12px, 3vw, 20px) clamp(20px, 5vw, 48px)",
                            animation:
                              "smoothColorChange 1s ease-in-out infinite, smoothShadowChange 1s ease-in-out infinite",
                            backgroundColor: "#ff6b6b",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: 50,
                            fontSize: "clamp(16px, 5vw, 22px)",
                            fontWeight: "bold",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow:
                              "0 clamp(6px, 2vw, 8px) clamp(15px, 4vw, 20px) rgba(255, 45, 45, 0.3)",
                            textAlign: "center",
                            margin: "clamp(12px, 3vw, 24px) auto",
                            letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
                            textTransform: "uppercase",
                            WebkitTapHighlightColor: "transparent"
                          }}
                        >
                          👉 2025 봄 패션 더 알아보기!
                        </a>
                      </p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <Advertise avenue={selectedAvenue[1]} location={"1"} />
                      <p data-ke-size="size16">&nbsp;</p>
                      <h2
                        data-ke-size="size26"
                        id="주요-패턴-소개"
                        style={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#0f172a",
                          margin: "80px 0 40px 0",
                          paddingBottom: 16,
                          borderBottom: "3px solid #aaaaff",
                          position: "relative",
                          letterSpacing: "-0.03em",
                          lineHeight: "1.3"
                        }}
                      >
                        주요 패턴 소개
                      </h2>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        2025년 봄 시즌, 여러분의 데일리룩을 완성하기 위해 떠오르는
                        패턴을 함께 알아볼게요. 요즘은 옷장에 어떤 패턴들이 있는지가
                        스타일의 성패를 좌우하기도 하죠. 그래서 저도 옷장 속에 있는
                        다양한 패턴을 확인해보고, 어떤 느낌이 나올지 고민하는게 참
                        재미있더라고요! 😊 이 글을 읽고 나면, 여러분도 꼭 새로운
                        패턴을 시도해 보게 될 거예요.
                      </p>
                      <h3
                        data-ke-size="size23"
                        id="플로럴패턴"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        플로럴 패턴 🌸
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        봄의 기운을 가득 느낄 수 있는 <strong>플로럴 패턴</strong>은
                        매년 사랑받는 클래식입니다. 실제로, 다양한 꽃들이 담긴
                        디자인은 상큼한 이미지로 여러분의 룩을 더욱 밝고 기분 좋게
                        만들어 주어요. 상의에 플로럴 탑을 활용하고, 하의는 단색의
                        스커트나 팬츠를 매치하면 정말 멋지죠. 여러분의 개성을 표현할
                        수 있는 방법이기도 해요! 이 패턴을 활용할 땐, 볼드한
                        액세서리와 함께 하시면 더욱 세련된 느낌을 낼 수 있습니다. 💖
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        자, 이제 '플로럴 패턴'을 한번 더 살펴볼까요? 아래의 테이블은
                        플로럴 패턴을 활용한 다양한 스타일의 조합을 보여준답니다:
                      </p>
                      <table
                        data-ke-align="alignLeft"
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          margin: "25px 0",
                          borderRadius: 16,
                          overflow: "hidden",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                backgroundColor: "#aaaaff",
                                color: "#FFFFFF",
                                fontWeight: 600,
                                padding: "12px 15px",
                                textAlign: "left",
                                border: "1px solid #eaeaea"
                              }}
                            >
                              스타일
                            </th>
                            <th
                              style={{
                                backgroundColor: "#aaaaff",
                                color: "#FFFFFF",
                                fontWeight: 600,
                                padding: "12px 15px",
                                textAlign: "left",
                                border: "1px solid #eaeaea"
                              }}
                            >
                              설명
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              플로럴 드레스
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              로맨틱한 분위기로 휴양지룩에 딱이죠!
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              플로럴 블라우스
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              기본 데님 팬츠와 매치하기 좋은 선택이랍니다.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p />
                      <h3
                        data-ke-size="size23"
                        id="지오메트릭패턴"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        지오메트릭 패턴 🔹
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        친숙하면서도 현대적인 느낌을 주는{" "}
                        <strong>지오메트릭 패턴</strong>은 2025 봄 시즌에 특히 주목
                        받고 있어요! 다양한 도형과 색상의 조합은 보는 이에게 신선함을
                        줍니다. 이런 패턴을 활용할 땐, 단순한 베이직 아이템과 조합하는
                        것이 핵심이에요. 예를 들어, 스트라이프나 체크와 함께 매치하면
                        더욱 재미있는 스타일을 만들 수 있답니다. 👍
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        또한, 지오메트릭 패턴은 미래지향적인 감성을 전달해 주기
                        때문에, 패널리프 등 다양한 아우터와도 잘 어울린답니다. 이
                        패턴을 통해 여러분의 옷장에서 새로운 스타일을 발견해 보세요.
                        😍
                      </p>
                      <blockquote data-ke-style="style1" style={{ margin: 60 }}>
                        올 봄, 새로운 스타일로 한층 더 매력적인 데일리룩을 만들어
                        보세요!
                      </blockquote>
                      <p data-ke-size="size16">
                        <a
                          className="btn-rounded"
                          href="https://search.naver.com/search.naver?query=2025봄패션"
                          style={{
                            display: "block",
                            width: "90%",
                            maxWidth: 600,
                            padding: "clamp(12px, 3vw, 20px) clamp(20px, 5vw, 48px)",
                            animation:
                              "smoothColorChange 1s ease-in-out infinite, smoothShadowChange 1s ease-in-out infinite",
                            backgroundColor: "#ff6b6b",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: 50,
                            fontSize: "clamp(16px, 5vw, 22px)",
                            fontWeight: "bold",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow:
                              "0 clamp(6px, 2vw, 8px) clamp(15px, 4vw, 20px) rgba(255, 45, 45, 0.3)",
                            textAlign: "center",
                            margin: "clamp(12px, 3vw, 24px) auto",
                            letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
                            textTransform: "uppercase",
                            WebkitTapHighlightColor: "transparent"
                          }}
                        >
                          2025 봄패션 더 알아보기! 🌼
                        </a>
                      </p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <Advertise avenue={selectedAvenue[2]} location={"2"} />
                      <p data-ke-size="size16">&nbsp;</p>
                      <h2
                        data-ke-size="size26"
                        id="액세서리-매칭법"
                        style={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#0f172a",
                          margin: "80px 0 40px 0",
                          paddingBottom: 16,
                          borderBottom: "3px solid #aaaaff",
                          position: "relative",
                          letterSpacing: "-0.03em",
                          lineHeight: "1.3"
                        }}
                      >
                        액세서리 매칭법
                      </h2>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        이번 봄에는 어떤 스타일로 데일리룩을 꾸며볼까 고민하는 분들
                        많으시죠? 그런 고민을 덜어드리기 위해, 액세서리 매칭법을 함께
                        알아보려고 해요. 액세서리는 그날의 스타일을 한층 더 살려주는
                        중요한 역할을 하죠. 특히 2025년 봄 유행을 반영한 세련된 코디를
                        원하신다면, 액세서리 활용이 필수랍니다. 🌸
                      </p>
                      <h3
                        data-ke-size="size23"
                        id="액세서리-베이직"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        1. 기본 스타일의 액세서리 매칭
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        기본 스타일, 즉 간편한 청바지와 흰 티셔츠에 액세서리를 매칭할
                        때는 미니멀리즘을 잊지 마세요. 예를 들어, 얇은 체인 목걸이나,
                        심플한 이어링은 기본 룩을 한층 더 고급스럽게 만들어줍니다.{" "}
                        <b style={{ backgroundColor: "#ffeb3b" }}>
                          휴대폰 케이스나 가방도 같은 색감으로 통일하면 세련된
                          느낌이죠!
                        </b>
                        🎒 또한, 레이어드된 팔찌를 추가해주면 조금 더 개성을 부여할 수
                        있어요.
                      </p>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        특히, 지금 계절에 잘 어울리는 색상으로는 파스텔톤과 뉴트럴
                        컬러가 있어요. 이렇게 색상 일치를 반복하면 뚜렷한 캐주얼
                        분위기를 더욱 강조할 수 있답니다. 또, 평범한 옷에 포인트를
                        주기 위해 선글라스를 추가해보는 건 어떨까요? 기능성과 스타일을
                        동시에 채울 수 있답니다. 🕶️
                      </p>
                      <h3
                        data-ke-size="size23"
                        id="액세서리-테마별"
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#334155",
                          margin: "48px 0 24px 0",
                          paddingLeft: 16,
                          borderLeft: "4px solid #aaaaff",
                          letterSpacing: "-0.02em",
                          lineHeight: "1.4"
                        }}
                      >
                        2. 테마별 액세서리 매칭
                      </h3>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        가끔은 특정 테마를 정해 액세서리를 매칭하는 것이 좋습니다.
                        예를 들어, '봄 나들이'를 주제로 하신다면 화사한 꽃무늬
                        드레스와 함께 플라워 모티프의 액세서리를 매치하는 것이
                        효과적이에요. 🌼 아래와 같이 테이블로 정리해 보았습니다.
                      </p>
                      <table
                        data-ke-align="alignLeft"
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          margin: "25px 0",
                          borderRadius: 16,
                          overflow: "hidden",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                backgroundColor: "#aaaaff",
                                color: "#FFFFFF",
                                fontWeight: 600,
                                padding: "12px 15px",
                                textAlign: "left",
                                border: "1px solid #eaeaea"
                              }}
                            >
                              테마
                            </th>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              액세서리 제안
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              봄 나들이
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              플라워 귀걸이, 브라이트 색상의 손목 시계
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              저녁 모임
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              클래식 진주 귀걸이, 미니 백
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              운동 후
                            </td>
                            <td
                              style={{
                                padding: "12px 15px",
                                border: "1px solid #eaeaea",
                                color: "#333"
                              }}
                            >
                              간단한 스포츠 시계, 밴드
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p
                        data-ke-size="size16"
                        style={{
                          fontSize: 16,
                          lineHeight: "1.8",
                          color: "#333",
                          margin: "16px 0"
                        }}
                      >
                        이렇게 테마를 정하고 액세서리를 매치하면 같은 옷도 다양한
                        분위기로 연출할 수 있어서 참 매력적이에요. 각자의 스타일에
                        맞는 매칭법을 찾아보세요. 그럼 다양한 계절의 액세서리를
                        활용하여 나만의 스타일을 더욱 빛내주는 거죠!
                      </p>
                      <p data-ke-size="size16">
                        <a
                          className="btn-rounded"
                          href="https://search.naver.com/search.naver?query=2025%EB%B0%98%EB%8B%A8%EB%B3%84%EC%95%85%EC%84%B8%EB%A6%AC%EB%B0%98%EB%8B%A8"
                          style={{
                            display: "block",
                            width: "90%",
                            maxWidth: 600,
                            padding: "clamp(12px, 3vw, 20px) clamp(20px, 5vw, 48px)",
                            animation:
                              "smoothColorChange 1s ease-in-out infinite, smoothShadowChange 1s ease-in-out infinite",
                            backgroundColor: "#ff6b6b",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: 50,
                            fontSize: "clamp(16px, 5vw, 22px)",
                            fontWeight: "bold",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow:
                              "0 clamp(6px, 2vw, 8px) clamp(15px, 4vw, 20px) rgba(255, 45, 45, 0.3)",
                            textAlign: "center",
                            margin: "clamp(12px, 3vw, 24px) auto",
                            letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
                            textTransform: "uppercase",
                            WebkitTapHighlightColor: "transparent"
                          }}
                        >
                          💖 액세서리 더 알아보기
                        </a>
                      </p>
                      <div
                        style={{
                          textAlign: "center",
                          marginTop: 60,
                          marginBottom: 30,
                          position: "relative",
                          paddingBottom: 0,
                          width: "100%"
                        }}
                      >
                        <h2
                          id="-같이보면-좋은-정보글"
                          style={{
                            fontSize: 28,
                            fontWeight: "bold",
                            width: "100%",
                            color: "#111827",
                            letterSpacing: "-0.02em",
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            margin: "0 0 30px 0",
                            padding: "0 0 20px 0",
                            position: "relative",
                            justifyContent: "center",
                            textAlign: "center",
                            borderBottom: "1px solid #e5e7eb"
                          }}
                          data-ke-size="size26"
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 24,
                              width: 40,
                              height: 40,
                              background: "rgba(37, 99, 235, 0.08)",
                              borderRadius: 10,
                              marginRight: 4
                            }}
                          >
                            🔗
                          </span>{" "}
                          <span>같이보면 좋은 정보글!</span>{" "}
                          <span
                            style={{
                              content: '""',
                              position: "absolute",
                              bottom: "-1px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "60%",
                              height: 3,
                              background: "#aaaaff",
                              borderRadius: 2
                            }}
                          />
                        </h2>
                      </div>
                      <div style={{ margin: "15px auto", padding: 0 }}>
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: 16
                          }}
                          data-ke-list-type="none"
                        >
                          <li style={{ margin: 0, transition: "all 0.3s ease" }}>
                            <a
                              style={{
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "#1f2937",
                                background: "#ffffff",
                                padding: "18px 32px",
                                borderRadius: 16,
                                border: "1px solid #e5e7eb",
                                transition: "all 0.3s ease",
                                fontSize: 16,
                                fontWeight: 500,
                                lineHeight: "1.6",
                                position: "relative",
                                overflow: "hidden",
                                letterSpacing: "-0.01em",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                justifyContent: "space-between",
                                gap: 16,
                                backdropFilter: "blur(8px)"
                              }}
                              href="https://hrogamer.tistory.com/entry/3%EC%9B%94-%EB%88%88%EA%B3%BC-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-%EB%AA%85%EC%83%81%EA%B3%BC-%EC%B9%98%EC%9C%A0-%EC%84%A4%EA%B2%BD-%EC%86%8D%EC%97%90%EC%84%9C-%EC%B0%BE%EB%8A%94-%EB%82%B4%EB%A9%B4%EC%9D%98-%ED%8F%89%ED%99%94"
                              rel="noopener noreferrer"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: 20
                                }}
                              >
                                <h3
                                  id='"3월-눈과-함께하는-명상과-치유:-설경-속에서-찾는-내면의-평화"'
                                  style={{
                                    flex: 1,
                                    margin: 0,
                                    fontSize: 18,
                                    fontWeight: "normal"
                                  }}
                                  data-ke-size="size23"
                                >
                                  👉 "3월 눈과 함께하는 명상과 치유: 설경 속에서 찾는
                                  내면의 평화"
                                </h3>
                                <span
                                  style={{
                                    content: '"→"',
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 18,
                                    color: "#aaaaff",
                                    opacity: "0.8",
                                    transition: "all 0.3s ease",
                                    transform: "translateX(0)",
                                    flexShrink: 0,
                                    width: 32,
                                    height: 32,
                                    background: "rgba(37, 99, 235, 0.08)",
                                    borderRadius: 8
                                  }}
                                  className="arrow"
                                >
                                  →
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </>
    </Game1Wrapper>
  );
};

export default Hobby4;

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