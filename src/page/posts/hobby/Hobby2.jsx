import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./hobby2.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/hobby2.json";

const Hobby2 = () => {
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
      <div id="dkIndex">
        {/*웹접근성용 바로가기 링크 모음*/}
        <a href="#dkBody">본문 바로가기</a>
      </div>
      <div id="dkWrap" className="wrap_skin">
        <div
          id="dkContent"
          className="cont_skin"
          role="main"
          style={{ height: "auto !important" }}
        >
          <div id="cMain" style={{ height: "auto !important" }}>
            <div id="mArticle" className="article_skin">
              <div className="index_title">
                <h2 className="tit_skin">
                  <span className="txt_title">Hongdang's Workstation</span>
                </h2>
              </div>
              <h2 id="dkBody" className="screen_out">
                2025년 1월(1분기) 신작 애니 평가 본문
              </h2>
              <div className="area_title">
                <strong className="tit_category">
                  <a href="/category/%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98">
                    애니메이션
                  </a>
                </strong>
                <h3 className="tit_post">2025년 1월(1분기) 신작 애니 평가</h3>
                <span className="info_post">
                  홍당
                  <span className="txt_bar" />
                  2025. 2. 12. 06:21
                </span>
              </div>

              <Advertise avenue={selectedAvenue[0]} location={"0"} />

              <div className="area_view" id="article-view">
                <div className="tt_article_useless_p_margin contents_style">
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-filename="5a6dc99ac43265ead111d0d19ab408fd_1700191606.jpg"
                    data-origin-width={640}
                    data-origin-height={452}
                  >
                    <span
                      data-url="https://blog.kakaocdn.net/dn/VPW6f/btsMbVrGofb/378WmaAUHNH2jOHlBeXft0/img.jpg"
                      data-phocus="https://blog.kakaocdn.net/dn/VPW6f/btsMbVrGofb/378WmaAUHNH2jOHlBeXft0/img.jpg"
                    >
                      <img
                        src="https://blog.kakaocdn.net/dn/VPW6f/btsMbVrGofb/378WmaAUHNH2jOHlBeXft0/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVPW6f%2FbtsMbVrGofb%2F378WmaAUHNH2jOHlBeXft0%2Fimg.jpg"
                        // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={640}
                        height={452}
                        data-filename="5a6dc99ac43265ead111d0d19ab408fd_1700191606.jpg"
                        data-origin-width={640}
                        data-origin-height={452}
                        data-phocus-index={0}
                      />
                    </span>
                  </figure>
                  <p />
                  <p data-ke-size="size16">&nbsp;</p>
                  <p
                    style={{ color: "#333333", textAlign: "start" }}
                    data-ke-size="size16"
                  >
                    <b>
                      ※&nbsp;&nbsp;극히&nbsp;개인적인&nbsp;시점의&nbsp;감상평이&nbsp;작성되어&nbsp;있습니다.
                    </b>
                    <br />
                    언급된&nbsp;작품의&nbsp;원작,&nbsp;기획,&nbsp;정보&nbsp;등을&nbsp;어느&nbsp;정도&nbsp;참고하고&nbsp;있으며&nbsp;작성자의&nbsp;의견에&nbsp;내용을&nbsp;집중했습니다.
                    <br />
                    본&nbsp;포스팅에&nbsp;언급된&nbsp;해당&nbsp;작품들에&nbsp;대한&nbsp;보다&nbsp;나은&nbsp;판단은&nbsp;여러분들의&nbsp;몫입니다.
                    <br />
                    &nbsp;
                    <br />
                    <b>
                      ※&nbsp;&nbsp;대략&nbsp;1화부터&nbsp;3화까지&nbsp;본&nbsp;상태에서&nbsp;간단한&nbsp;평을&nbsp;적어봅니다.
                    </b>
                    <br />
                    해당 분기에 방영된 작품 중 모든 리스트가 아닌 일부만 리뷰합니다.
                    실사 특촬, 분할 시즌, 연속 시리즈, 쇼트 애니, OTT로 방영되는
                    작품들은 특별한 경우가 아니면 생략합니다.
                    <br />
                    <br />
                    <b>
                      ※&nbsp;평가표의&nbsp;경우&nbsp;각&nbsp;분야별&nbsp;점수&nbsp;채점&nbsp;및&nbsp;평가&nbsp;기준은&nbsp;다음과&nbsp;같습니다.
                    </b>
                    <br />
                    코멘터리는 한 줄로 요약하는 만큼 모든 정보가 담겨있지 않을 수
                    있습니다.
                  </p>
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "100%",
                      height: 82
                    }}
                    border={1}
                    data-ke-align="alignLeft"
                  >
                    <tbody>
                      <tr style={{ height: 14 }}>
                        <td
                          style={{
                            width: "14.6124%",
                            textAlign: "center",
                            height: 14
                          }}
                        >
                          <b>항목</b>
                        </td>
                        <td
                          style={{
                            width: "27.0542%",
                            textAlign: "center",
                            height: 14
                          }}
                        >
                          <b>점수</b>
                        </td>
                        <td
                          style={{
                            width: "58.3333%",
                            textAlign: "center",
                            height: 14
                          }}
                        >
                          <b>한줄평</b>
                        </td>
                      </tr>
                      <tr style={{ height: 17 }}>
                        <td style={{ width: "14.6124%", height: 17 }}>
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              textAlign: "start"
                            }}
                          >
                            스토리(특징):
                          </span>
                        </td>
                        <td style={{ width: "27.0542%", height: 17 }}>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            1~4점: 아쉬움, 비추천
                          </span>
                        </td>
                        <td style={{ width: "58.3333%", height: 17 }}>
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              textAlign: "start"
                            }}
                          >
                            작품의 소재와 몰입감, 납득할 수 있는 구조를 갖춘
                            스토리텔링.
                          </span>
                        </td>
                      </tr>
                      <tr style={{ height: 17 }}>
                        <td style={{ width: "14.6124%", height: 17 }}>
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              textAlign: "start"
                            }}
                          >
                            작화(연출):
                          </span>
                        </td>
                        <td style={{ width: "27.0542%", height: 17 }}>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            4~7점: 무난함, 평범
                          </span>
                        </td>
                        <td style={{ width: "58.3333%", height: 17 }}>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            작화 선호는 안정
                          </span>
                          <span style={{ color: "#555555" }}>≤</span>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            개성, 포인트를 부각하는 연출에 주목.
                          </span>
                        </td>
                      </tr>
                      <tr style={{ height: 17 }}>
                        <td style={{ width: "14.6124%", height: 17 }}>
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              textAlign: "start"
                            }}
                          >
                            캐릭터(연기):
                          </span>
                        </td>
                        <td style={{ width: "27.0542%", height: 17 }}>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            8~10점: 기대작, 좋음
                          </span>
                        </td>
                        <td style={{ width: "58.3333%", height: 17 }}>
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              textAlign: "start"
                            }}
                          >
                            개성과 비중은 물론 캐릭터의 활약과 성우 연기와 배역도
                            중요.
                          </span>
                        </td>
                      </tr>
                      <tr style={{ height: 17 }}>
                        <td style={{ width: "14.6124%", height: 17 }}>
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              textAlign: "start"
                            }}
                          >
                            첫인상(평가):
                          </span>
                        </td>
                        <td style={{ width: "27.0542%", height: 17 }}>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            모든 항목은 별개로 채점
                            <br />
                            기준 이상의 점수도 있음(
                          </span>
                          <span style={{ color: "#ee2323" }}>
                            <b>α</b>
                          </span>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            )
                          </span>
                        </td>
                        <td style={{ width: "58.3333%", height: 17 }}>
                          <span style={{ color: "#000000", textAlign: "start" }}>
                            개인적인 안목 위주, 감상완료시 최종평가와 곧장 이어지지
                            않음.<span>&nbsp;</span>
                          </span>
                          <span style={{ color: "#000000" }}>
                            상대적으로 평점이 낮아도 하단 추천작 리스트에 언급됨.
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    style={{ color: "#333333", textAlign: "start" }}
                    data-ke-size="size16"
                  >
                    &nbsp;
                  </p>
                  <p
                    style={{ color: "#333333", textAlign: "start" }}
                    data-ke-size="size16"
                  >
                    ※&nbsp;&nbsp;평가&nbsp;외에&nbsp;서술한&nbsp;부분&nbsp;중에서&nbsp;오타,&nbsp;잘못된&nbsp;정보가&nbsp;있다면&nbsp;지적&nbsp;부탁드리겠습니다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">▼</p>
                  <div
                    data-ke-type="moreLess"
                    data-text-more="더보기"
                    data-text-less="닫기"
                    className="open"
                  >
                    <a className="btn-toggle-moreless">닫기</a>
                    <div className="moreless-content">
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="04_03.jpg"
                        data-origin-width={1000}
                        data-origin-height={563}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/bMz1gr/btsMecglrf3/EzTCG8NuiEdIPj4kBVX1HK/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/bMz1gr/btsMecglrf3/EzTCG8NuiEdIPj4kBVX1HK/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/bMz1gr/btsMecglrf3/EzTCG8NuiEdIPj4kBVX1HK/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMz1gr%2FbtsMecglrf3%2FEzTCG8NuiEdIPj4kBVX1HK%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={360}
                            data-filename="04_03.jpg"
                            data-origin-width={1000}
                            data-origin-height={563}
                            data-phocus-index={1}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>꽃은 피어난다, 수라와 같이</b>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "15.8975%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.06384%",
                                textAlign: "center"
                              }}
                              height={22}
                            >
                              8
                            </td>
                            <td
                              style={{ color: "#000000", width: "79.9223%" }}
                              height={22}
                            >
                              원작 작가 전작인 '울려라 유포니엄'에 비하면 부담없이
                              편한 스타일의 이야기 전개.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "15.8975%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.06384%",
                                textAlign: "center"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "79.9223%" }}>
                              청중 대상에게 느낌을 전달하는 연출법은 과감하게도
                              강렬한 시각적 묘사로 주목하는 방식.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "15.8975%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.06384%",
                                textAlign: "center"
                              }}
                            >
                              9
                            </td>
                            <td style={{ color: "#000000", width: "79.9223%" }}>
                              성우에게도 가장 중요한 연기 기량인 낭독의 '재능'과
                              '실력'과 '기술'에 주목.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "15.8975%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.06384%",
                                textAlign: "center"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "79.9223%" }}>
                              결국 발성의 근본은 배에 주는 힘.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="a5b4472abfe480b14dab1230bb1d89a4.jpg"
                        data-origin-width={1920}
                        data-origin-height={1080}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/buCDhx/btsMfmaZ18H/tj5JMKK298QlaqDEA1jEnk/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/buCDhx/btsMfmaZ18H/tj5JMKK298QlaqDEA1jEnk/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/buCDhx/btsMfmaZ18H/tj5JMKK298QlaqDEA1jEnk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuCDhx%2FbtsMfmaZ18H%2Ftj5JMKK298QlaqDEA1jEnk%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={360}
                            data-filename="a5b4472abfe480b14dab1230bb1d89a4.jpg"
                            data-origin-width={1920}
                            data-origin-height={1080}
                            data-phocus-index={2}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>황혼 호텔</b>
                      </h2>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          width: "100%",
                          height: 82
                        }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr style={{ height: 22 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "15.9155%",
                                height: 22
                              }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.69701%",
                                textAlign: "center",
                                height: 22
                              }}
                              height={22}
                            >
                              6
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "80.2713%",
                                height: 22
                              }}
                              height={22}
                            >
                              오랫만에 보는 이른바 길 잃은 인간들의 군상극.
                            </td>
                          </tr>
                          <tr style={{ height: 20 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "15.9155%",
                                height: 20
                              }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.69701%",
                                textAlign: "center",
                                height: 20
                              }}
                            >
                              6
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "80.2713%",
                                height: 20
                              }}
                            >
                              해결 파트에 역량을 투자하는 방식의 선택과 집중 구성.
                            </td>
                          </tr>
                          <tr style={{ height: 20 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "15.9155%",
                                height: 20
                              }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.69701%",
                                textAlign: "center",
                                height: 20
                              }}
                            >
                              6
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "80.2713%",
                                height: 20
                              }}
                            >
                              하지만 탐정 역할인 히로인을 비롯한 주연들을 빛낼
                              요소들이 부족한게 많이 아쉬움.
                            </td>
                          </tr>
                          <tr style={{ height: 20 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "15.9155%",
                                height: 20
                              }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.69701%",
                                textAlign: "center",
                                height: 20
                              }}
                            >
                              6
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "80.2713%",
                                height: 20
                              }}
                            >
                              생각해보니 비슷한 장르인 '데스 퍼레이드'가 딱 10년
                              되었네 ㄷㄷ.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="Gh1e5HOaoAAAMTF.jpg"
                        data-origin-width={1000}
                        data-origin-height={707}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/bl6p40/btsMetIULL5/rrXgfu1jLtwHTKGjP0XRQK/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/bl6p40/btsMetIULL5/rrXgfu1jLtwHTKGjP0XRQK/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/bl6p40/btsMetIULL5/rrXgfu1jLtwHTKGjP0XRQK/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbl6p40%2FbtsMetIULL5%2FrrXgfu1jLtwHTKGjP0XRQK%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={452}
                            data-filename="Gh1e5HOaoAAAMTF.jpg"
                            data-origin-width={1000}
                            data-origin-height={707}
                            data-phocus-index={3}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>악역 영애 전생 아저씨</b>
                      </h2>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          width: "100%",
                          height: 82
                        }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.259%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "4.15649%"
                              }}
                              height={22}
                            >
                              8
                            </td>
                            <td
                              style={{ color: "#000000", width: "79.4621%" }}
                              height={22}
                            >
                              악역 플래그 다 무시하고 본격 즐겜하는 공무원 전생 오덕
                              아조씨.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.259%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "4.15649%"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "79.4621%" }}>
                              클리셰 분쇄라는 유쾌한 카타르시스 분위기를 충실하게
                              그려냄.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.259%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "4.15649%"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "79.4621%" }}>
                              소재 조합도 신선하지만 성우들의 열연이 몰입감을
                              잡는다.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.259%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "4.15649%"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "79.4621%" }}>
                              <span
                                style={{ color: "#000000", textAlign: "start" }}
                              >
                                여성향 게임의 부성애 플래그를 탑재한 주판 영애로
                                환생해버렸다…
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>

                      <Advertise avenue={selectedAvenue[1]} location={"1"} />

                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="hls0301.jpg"
                        data-origin-width={800}
                        data-origin-height={450}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/OUqep/btsMflJXLBr/dQ45k3kv5MEYkibzJDeiE1/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/OUqep/btsMflJXLBr/dQ45k3kv5MEYkibzJDeiE1/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/OUqep/btsMflJXLBr/dQ45k3kv5MEYkibzJDeiE1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOUqep%2FbtsMflJXLBr%2FdQ45k3kv5MEYkibzJDeiE1%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={360}
                            data-filename="hls0301.jpg"
                            data-origin-width={800}
                            data-origin-height={450}
                            data-phocus-index={4}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>허니 레몬 소다</b>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.5326%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.81331%",
                                textAlign: "center"
                              }}
                              height={22}
                            >
                              7
                            </td>
                            <td
                              style={{ color: "#000000", width: "79.5375%" }}
                              height={22}
                            >
                              <span
                                style={{ color: "#000000", textAlign: "start" }}
                              >
                                변하고자 하는 처음이 항상 어려운 법.
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.5326%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.81331%",
                                textAlign: "center"
                              }}
                            >
                              7
                            </td>
                            <td style={{ color: "#000000", width: "79.5375%" }}>
                              극적인 순간을 조명하는 하이라이트 연출 구성은 청소년
                              드라마의 정석.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.5326%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.81331%",
                                textAlign: "center"
                              }}
                            >
                              7
                            </td>
                            <td style={{ color: "#000000", width: "79.5375%" }}>
                              너무 소심한 여주인공이 성격이 정 반대인 남주가
                              이끌어주는 레몬 꿀빛 황금공식.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.5326%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.81331%",
                                textAlign: "center"
                              }}
                            >
                              7
                            </td>
                            <td style={{ color: "#000000", width: "79.5375%" }}>
                              교복 예쁘다고 함부로 진학 계획을 망치지 말...자?
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="1949e0cb15b58ed6b.jpg"
                        data-origin-width={900}
                        data-origin-height={506}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/eOXV2y/btsMeM2s27V/19S16YaqROAzLH3plkvLxk/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/eOXV2y/btsMeM2s27V/19S16YaqROAzLH3plkvLxk/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/eOXV2y/btsMeM2s27V/19S16YaqROAzLH3plkvLxk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeOXV2y%2FbtsMeM2s27V%2F19S16YaqROAzLH3plkvLxk%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={360}
                            data-filename="1949e0cb15b58ed6b.jpg"
                            data-origin-width={900}
                            data-origin-height={506}
                            data-phocus-index={5}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>사카모토 데이즈</b>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.4044%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.5528%",
                                textAlign: "center"
                              }}
                              height={22}
                            >
                              7
                            </td>
                            <td
                              style={{ color: "#000000", width: "78.9266%" }}
                              height={22}
                            >
                              <span
                                style={{ color: "#000000", textAlign: "start" }}
                              >
                                바람의 존윅 - 편의점 암살자 이야기
                              </span>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.4044%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.5528%",
                                textAlign: "center"
                              }}
                            >
                              9
                            </td>
                            <td style={{ color: "#000000", width: "78.9266%" }}>
                              하이라이트이자 주특기인 액션씬 수준만큼은 이번분기
                              최상위권.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.4044%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.5528%",
                                textAlign: "center"
                              }}
                            >
                              7
                            </td>
                            <td style={{ color: "#000000", width: "78.9266%" }}>
                              은발 아저씨<s>+안경</s>+태클 담당+중국 무술소녀=은혼?
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.4044%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "4.5528%",
                                textAlign: "center"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "78.9266%" }}>
                              캐릭터들의 스펙과 기행들을 보면 충분히
                              '사카모토입니다만?'
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="1943adaba6b4aa746.webp"
                        data-origin-width={750}
                        data-origin-height={422}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/bk564q/btsMd9KJ6ES/kQjMHARfbsEZ1c1ut5KEIK/img.webp"
                          data-phocus="https://blog.kakaocdn.net/dn/bk564q/btsMd9KJ6ES/kQjMHARfbsEZ1c1ut5KEIK/img.webp"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/bk564q/btsMd9KJ6ES/kQjMHARfbsEZ1c1ut5KEIK/img.webp"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbk564q%2FbtsMd9KJ6ES%2FkQjMHARfbsEZ1c1ut5KEIK%2Fimg.webp"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={360}
                            data-filename="1943adaba6b4aa746.webp"
                            data-origin-width={750}
                            data-origin-height={422}
                            data-phocus-index={6}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>상성의 아쿠에리온 Myth of Emotions</b>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2464%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.48236%",
                                textAlign: "center"
                              }}
                              height={22}
                            >
                              4
                            </td>
                            <td
                              style={{ color: "#000000", width: "80.1548%" }}
                              height={22}
                            >
                              시리즈마다 확고했던 주제론의 정립 과정부터가 너무
                              산만&amp;난잡함.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2464%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.48236%",
                                textAlign: "center"
                              }}
                            >
                              5
                            </td>
                            <td style={{ color: "#000000", width: "80.1548%" }}>
                              최신 팝 스타일을 아낌없이 넣었지만 하이라이트를 살릴
                              기량이 한참 모자람.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2464%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.48236%",
                                textAlign: "center"
                              }}
                            >
                              3
                            </td>
                            <td style={{ color: "#000000", width: "80.1548%" }}>
                              신화록이나 운명 같은 전생 설정에 맥없이 끌려가는
                              캐릭터는 주연이 아니라 인형.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2464%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "3.48236%",
                                textAlign: "center"
                              }}
                            >
                              4
                            </td>
                            <td style={{ color: "#000000", width: "80.1548%" }}>
                              때깔만 POP하고 Hip할 뿐 결국 MoE하지 못한 아쿠에리온
                              시리즈 최약체.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="19424fc76f04d58a1.jpg"
                        data-origin-width={900}
                        data-origin-height={506}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/cIU0UF/btsMe07mJzM/sYf1FLMMYdTycdf2AxA6d1/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/cIU0UF/btsMe07mJzM/sYf1FLMMYdTycdf2AxA6d1/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/cIU0UF/btsMe07mJzM/sYf1FLMMYdTycdf2AxA6d1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcIU0UF%2FbtsMe07mJzM%2FsYf1FLMMYdTycdf2AxA6d1%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={360}
                            data-filename="19424fc76f04d58a1.jpg"
                            data-origin-width={900}
                            data-origin-height={506}
                            data-phocus-index={7}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>위벨&nbsp;블라트</b>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.7234%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.47652%"
                              }}
                              height={22}
                            >
                              5
                            </td>
                            <td
                              style={{ color: "#000000", width: "79.6839%" }}
                              height={22}
                            >
                              자극적인 요소를 빼면서 재빠른 전개 속도가 원작의 몇
                              안되는 매력을 깎아먹음.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.7234%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.47652%"
                              }}
                            >
                              5
                            </td>
                            <td style={{ color: "#000000", width: "79.6839%" }}>
                              무거운 판타지에는 절묘한 연출 실력이 중요한데 너무
                              무미건조함.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.7234%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.47652%"
                              }}
                            >
                              4
                            </td>
                            <td style={{ color: "#000000", width: "79.6839%" }}>
                              방대한 세계관에 비해 인물들 역할군과 매력이 단순한게
                              원작의 고질적인 약점
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.7234%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.47652%"
                              }}
                            >
                              5
                            </td>
                            <td style={{ color: "#000000", width: "79.6839%" }}>
                              21년 전 원작 만화가 그 동안 애니화가 안 된 이유가 따로
                              있는게 아님.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="sorairo-utility.jpg"
                        data-origin-width={640}
                        data-origin-height={333}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/RE2O8/btsMdMoIsaZ/nnCXEowJdksZqvF899lmN0/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/RE2O8/btsMdMoIsaZ/nnCXEowJdksZqvF899lmN0/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/RE2O8/btsMdMoIsaZ/nnCXEowJdksZqvF899lmN0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRE2O8%2FbtsMdMoIsaZ%2FnnCXEowJdksZqvF899lmN0%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={333}
                            data-filename="sorairo-utility.jpg"
                            data-origin-width={640}
                            data-origin-height={333}
                            data-phocus-index={8}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>하늘색 유틸리티</b>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2344%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.59868%"
                              }}
                              height={22}
                            >
                              8
                            </td>
                            <td
                              style={{ color: "#000000", width: "80.0505%" }}
                              height={22}
                            >
                              일상의 여유를 즐기는 골프라는 스포츠 본연의 매력을
                              담백하게 담아내다.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2344%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.59868%"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "80.0505%" }}>
                              청량한 파란 하늘 아래 펼쳐지는 드라마와 소재의 절묘한
                              밸런스.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2344%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.59868%"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "80.0505%" }}>
                              나름 알차게 배치된 주요 인물들의 비밀과 포지션 구성.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.2344%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.59868%"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "80.0505%" }}>
                              별로 기대 안했는데 생각보다 즐겁게 볼 수 있는 스포츠
                              일상물.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <iframe
                        src="https://www.youtube.com/embed/H3SUAiwfyp0?si=kxF_1CXaeY4fzr_R"
                        width={640}
                        height={360}
                        frameBorder=""
                        allowFullScreen="true"
                      />
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>메달리스트</b>
                      </h2>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          width: "100%",
                          height: 82
                        }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr style={{ height: 22 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "16.3625%",
                                height: 22
                              }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "7.03637%",
                                height: 22
                              }}
                              height={22}
                            >
                              10
                              <b>
                                <span style={{ color: "#ee2323" }}>α</span>
                              </b>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "76.4845%",
                                height: 22
                              }}
                              height={22}
                            >
                              가장 잔혹한 세계 속에서 어느때보다 필요한 건 노력과
                              응원.
                            </td>
                          </tr>
                          <tr style={{ height: 20 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "16.3625%",
                                height: 20
                              }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "7.03637%",
                                height: 20
                              }}
                            >
                              10
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "76.4845%",
                                height: 20
                              }}
                            >
                              피겨 작화의 3D 모션 캡쳐는 당연&amp;상황에 따른
                              적재적소 감정 묘사도 훌륭하다.
                            </td>
                          </tr>
                          <tr style={{ height: 20 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "16.3625%",
                                height: 20
                              }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "7.03637%",
                                height: 20
                              }}
                            >
                              9
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "76.4845%",
                                height: 20
                              }}
                            >
                              성우 경력 10년차 첫 주연을 맡은 하루세 나츠미의
                              연기력에 주목.
                            </td>
                          </tr>
                          <tr style={{ height: 20 }}>
                            <td
                              style={{
                                color: "#000000",
                                width: "16.3625%",
                                height: 20
                              }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "7.03637%",
                                height: 20
                              }}
                            >
                              &nbsp;10&nbsp;
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                width: "76.4845%",
                                height: 20
                              }}
                            >
                              극적인 계기와 시련이 있어야 비로소 모두가 공감하는
                              열혈이 불타오른다.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="7916623447_494354581_68d02f9bb1d64f13fa6185afe0887c96.png"
                        data-origin-width={1280}
                        data-origin-height={726}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/pwwIM/btsMez9XQog/aDBIwIKvyS6VGq4hqfwYsk/img.png"
                          data-phocus="https://blog.kakaocdn.net/dn/pwwIM/btsMez9XQog/aDBIwIKvyS6VGq4hqfwYsk/img.png"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/pwwIM/btsMez9XQog/aDBIwIKvyS6VGq4hqfwYsk/img.png"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpwwIM%2FbtsMez9XQog%2FaDBIwIKvyS6VGq4hqfwYsk%2Fimg.png"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={363}
                            data-filename="7916623447_494354581_68d02f9bb1d64f13fa6185afe0887c96.png"
                            data-origin-width={1280}
                            data-origin-height={726}
                            data-phocus-index={9}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>전대 레드&nbsp;이세계에서&nbsp;모험가&nbsp;되다</b>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.9858%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.70894%"
                              }}
                              height={22}
                            >
                              6
                            </td>
                            <td
                              style={{ color: "#000000", width: "79.1888%" }}
                              height={22}
                            >
                              <span
                                style={{ color: "#000000", textAlign: "start" }}
                              >
                                이세계 무대에 너무 매몰되지 않게 전대물 측 과거도
                                보여주면서 고유 특색을 유지.
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.9858%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.70894%"
                              }}
                            >
                              7
                            </td>
                            <td style={{ color: "#000000", width: "79.1888%" }}>
                              전대물 특유의 클리셰나 분위기가 너무 본격적인게
                              뿜었다.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.9858%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.70894%"
                              }}
                            >
                              6
                            </td>
                            <td style={{ color: "#000000", width: "79.1888%" }}>
                              신인급 성우들의 청량한 발성 연기+전대물에 나왔던
                              성우들의 까메오에도 주목.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.9858%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "3.70894%"
                              }}
                            >
                              6
                            </td>
                            <td style={{ color: "#000000", width: "79.1888%" }}>
                              이세계 전생물의 소재 조합도 갈수록 다양해지는 중.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="uJlLSL1HbY7RYjQ.jpg"
                        data-origin-width={600}
                        data-origin-height={337}
                      >
                        <span
                          data-url="https://blog.kakaocdn.net/dn/bbr5zj/btsMfdL1oF1/efIQwpqFrNfxhTkjkeCvaK/img.jpg"
                          data-phocus="https://blog.kakaocdn.net/dn/bbr5zj/btsMfdL1oF1/efIQwpqFrNfxhTkjkeCvaK/img.jpg"
                        >
                          <img
                            src="https://blog.kakaocdn.net/dn/bbr5zj/btsMfdL1oF1/efIQwpqFrNfxhTkjkeCvaK/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbbr5zj%2FbtsMfdL1oF1%2FefIQwpqFrNfxhTkjkeCvaK%2Fimg.jpg"
                            // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                            loading="lazy"
                            width={640}
                            height={359}
                            data-filename="uJlLSL1HbY7RYjQ.jpg"
                            data-origin-width={600}
                            data-origin-height={337}
                            data-phocus-index={10}
                          />
                        </span>
                      </figure>
                      <h2 style={{ color: "#000000" }} data-ke-size="size26">
                        <b>전수.</b>{" "}
                        <sup className="footnote">
                          <a
                            href="#footnote_106_1"
                            id="footnote_link_106_1"
                            onmouseover="tistoryFootnote.show(this, 106, 1)"
                            onmouseout="tistoryFootnote.hide(106, 1)"
                            style={{
                              color: "#f9650d",
                              fontFamily: "Verdana, Sans-serif",
                              display: "inline"
                            }}
                          >
                            <span style={{ display: "none" }}>[각주:</span>1
                            <span style={{ display: "none" }}>]</span>
                          </a>
                        </sup>
                      </h2>
                      <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                        border={1}
                        width={216}
                        data-ke-align="alignLeft"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.1419%" }}
                              width={72}
                              height={22}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                스토리(특징)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "6.60715%"
                              }}
                              height={22}
                            >
                              7
                            </td>
                            <td
                              style={{ color: "#000000", width: "77.1344%" }}
                              height={22}
                            >
                              <span
                                style={{ color: "#000000", textAlign: "start" }}
                              >
                                전설의 폭망 극장판 애니<span>&nbsp;</span>
                              </span>
                              <span
                                style={{ color: "#000000", textAlign: "start" }}
                              >
                                『멸망하는 이야기』의 본격 TVA화...?
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.1419%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                작화(연출)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "6.60715%"
                              }}
                            >
                              10
                            </td>
                            <td style={{ color: "#000000", width: "77.1344%" }}>
                              지브리 스타일의 무대 아래<span>&nbsp;</span>
                              <span
                                style={{ color: "#000000", textAlign: "start" }}
                              >
                                스케치풍으로<span>&nbsp;</span>
                              </span>
                              그려내는 유서 깊은 연출 서커스가 핵심.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.1419%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                캐릭터(연기)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "6.60715%"
                              }}
                            >
                              7
                            </td>
                            <td style={{ color: "#000000", width: "77.1344%" }}>
                              사람과 캐릭터에게 생동감을 불어넣는 것이란 작지만
                              소중한 살아가는 계기.
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ color: "#000000", width: "16.1419%" }}
                              width={72}
                            >
                              <span
                                style={{
                                  backgroundColor: "#ffffff",
                                  color: "#000000",
                                  textAlign: "start"
                                }}
                              >
                                첫인상(평가)
                              </span>
                            </td>
                            <td
                              style={{
                                color: "#000000",
                                textAlign: "center",
                                width: "6.60715%"
                              }}
                            >
                              8
                            </td>
                            <td style={{ color: "#000000", width: "77.1344%" }}>
                              우리는 달려간다 멸망하는 나라로 애니 감독 잡혀있는
                              졸작의 소굴로.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                      <p data-ke-size="size16">&nbsp;</p>
                    </div>
                  </div>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-filename="194c60027d34da2fa.jpg"
                    data-origin-width={900}
                    data-origin-height={506}
                  >
                    <span
                      data-url="https://blog.kakaocdn.net/dn/dhAsvT/btsMbVZrK6C/9K9RW0rPRExHo0YTCbAXC0/img.jpg"
                      data-phocus="https://blog.kakaocdn.net/dn/dhAsvT/btsMbVZrK6C/9K9RW0rPRExHo0YTCbAXC0/img.jpg"
                    >
                      <img
                        src="https://blog.kakaocdn.net/dn/dhAsvT/btsMbVZrK6C/9K9RW0rPRExHo0YTCbAXC0/img.jpg"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdhAsvT%2FbtsMbVZrK6C%2F9K9RW0rPRExHo0YTCbAXC0%2Fimg.jpg"
                        // onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={640}
                        height={360}
                        data-filename="194c60027d34da2fa.jpg"
                        data-origin-width={900}
                        data-origin-height={506}
                        data-phocus-index={11}
                      />
                    </span>
                  </figure>
                  <p />
                  <p data-ke-size="size16">대충 여기까지</p>
                  <p data-ke-size="size16">
                    (약칭)
                    <span style={{ color: "#ee2323" }}>
                      <b>시청 추천작은</b>
                    </span>
                    <b> [꽃수라,</b>
                    <b> 사카모토, 하늘유틸, 메달리스트, 전수] 정도</b> 되겠네요
                  </p>

                  {/* 광고 */}
                  <Advertise avenue={selectedAvenue[2]} location={"2"} />

                  <p data-ke-size="size16">
                    20여분&nbsp;분량의&nbsp;일본&nbsp;애니메이션&nbsp;외의&nbsp;이야기를&nbsp;잠깐&nbsp;하자면{" "}
                    <br />
                    최근&nbsp;미디어에서&nbsp;(각&nbsp;편마다)&nbsp;제공되는&nbsp;분량이&nbsp;갈수록&nbsp;짧아지는&nbsp;시장으로&nbsp;변하고&nbsp;있습니다.{" "}
                    <br />
                    주로&nbsp;OTT
                    같은&nbsp;매체&nbsp;기준&nbsp;실사&nbsp;드라마의&nbsp;경우&nbsp;20~60분의&nbsp;들쭉날쭉한&nbsp;분량으로{" "}
                    <br />
                    짧고&nbsp;굵게&nbsp;구성된&nbsp;매체&nbsp;형식이&nbsp;대세가&nbsp;되었습니다.{" "}
                    <br />
                    <br />
                    이유는&nbsp;당연하게도&nbsp;'자극적인&nbsp;소재의&nbsp;압축=가성비&nbsp;효과의&nbsp;오락매체'로{" "}
                    <br />
                    일본&nbsp;애니메이션들이&nbsp;OTT시장에서&nbsp;주목받았던&nbsp;이유&nbsp;또한{" "}
                    <br />
                    짧고&nbsp;굵은&nbsp;시리즈물로서&nbsp;최적의&nbsp;매체였기&nbsp;때문입니다.{" "}
                    <br />
                    <br />
                    극단적인 경우로 아동 시청자들을 대상으로 제작된 '베이비버스
                    시리즈'를 비롯한 아동 컨텐츠의 경우
                    <br />
                    등장인물들이 반복적인 동요와 율동을 아동층에게 그저 집중하는
                    목적으로 치중된 연출이 그렇습니다. <br />
                    화려한 색깔과 쉬운 율동의 반복은 예전 테이프 매체 시절에도
                    존재한 아동 영상물의 기본구성이지만 <br />
                    스마트 컨텐츠의 압도적인 접근성으로 인한 스마트폰 중독과 같은
                    부모님들의 근심을 생각하면 <br />
                    짧지만 강력한 흡입력을 지닌 <b>'쇼츠&nbsp;미디어'</b>
                    의&nbsp;문제점은&nbsp;분명합니다. <br />
                    <br />
                    그렇다고&nbsp;쇼츠&nbsp;미디어가&nbsp;무조건&nbsp;유해한&nbsp;것만이&nbsp;아닌&nbsp;
                    <b>대세가&nbsp;될&nbsp;수밖에&nbsp;없었던&nbsp;이유</b>
                    &nbsp;또한 <br />
                    <b>
                      압도적인 시간 가성비로 오락을 즐길 수 있다는 이점이 매우
                      매력적
                    </b>
                    입니다. <br />
                    인터넷&nbsp;문화가&nbsp;본격적으로&nbsp;전파되기&nbsp;전에는&nbsp;5~10분&nbsp;남짓의&nbsp;쇼트&nbsp;영상들이&nbsp;미디어에&nbsp;등장했고{" "}
                    <br />
                    배속 같은 재생기의 여러 기능은 최근 문화매체에 집중하기 힘든
                    현대인들에게 큰 도움이 됩니다.
                  </p>
                  <p data-ke-size="size16">
                    위에 언급한 아동 콘텐츠 또한 아이의 시선을 사로잡는 점이 육아
                    부모들에게 잠깐의 휴식을 안겨주고 있죠.
                    <br />
                    ... 양심고백하자면 저도 많이 늙었는지 요즘 2배 빠른 재생으로
                    매체를 감상하고 있습니다ㅠ <br />
                    <br />
                    이런&nbsp;쇼츠&nbsp;미디어의&nbsp;명암은&nbsp;단순히&nbsp;영상이나&nbsp;음악뿐만이&nbsp;아닌&nbsp;커뮤니티&nbsp;SNS에서도&nbsp;확인할&nbsp;수&nbsp;있는데{" "}
                    <br />
                    위키나 커뮤니티 분위기만 얼추 파악하면 소재거리를 알 수 있을
                    만큼
                  </p>
                  <p data-ke-size="size16">
                    <b>오락의 압축 </b>시대는
                    갈수록&nbsp;빠르게&nbsp;진행되고&nbsp;있습니다. <br />
                    하지만 상세정보가 생략되는 점은 진실을 곡해하고 음해하며 이윽고
                    왜곡된 정보의 전파로 인해 <br />
                    결국&nbsp;정보의&nbsp;진실보다&nbsp;편향으로&nbsp;정보의&nbsp;가치관이&nbsp;망가지는&nbsp;문제를&nbsp;잊지&nbsp;말아야겠습니다.{" "}
                    <sup className="footnote">
                      <a
                        href="#footnote_106_2"
                        id="footnote_link_106_2"
                        onmouseover="tistoryFootnote.show(this, 106, 2)"
                        onmouseout="tistoryFootnote.hide(106, 2)"
                        style={{
                          color: "#f9650d",
                          fontFamily: "Verdana, Sans-serif",
                          display: "inline"
                        }}
                      >
                        <span style={{ display: "none" }}>[각주:</span>2
                        <span style={{ display: "none" }}>]</span>
                      </a>
                    </sup>{" "}
                    <br />
                    <br />
                    갈수록 삶이 고달프다고 말하지만{" "}
                    <b>선(善)을 행하는 마음을 잊지 않으며</b>
                    <br />
                    <b>
                      {" "}
                      <b>난립하는 정보들을 교차 비교하면서</b> 나 자신과 타인을
                      포용하는 가치관을 확립하는{" "}
                    </b>
                    <br />
                    이른바 시간 들여 학습하는{" "}
                    <b>
                      배움의&nbsp;본질을&nbsp;결코&nbsp;잊어서는&nbsp;안&nbsp;될&nbsp;것입니다.
                    </b>
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p style={{ textAlign: "right" }} data-ke-size="size16">
                    p.s
                  </p>
                  <p style={{ textAlign: "right" }} data-ke-size="size16">
                    포스팅 작성 속도나 시인성 등 여러 면에서 개선을 위해
                  </p>
                  <p style={{ textAlign: "right" }} data-ke-size="size16">
                    최근 평가 템플릿 방식을 동그라미에서 숫자로 변경한 점 참고
                    바랍니다.
                  </p>
                  <p style={{ textAlign: "right" }} data-ke-size="size16">
                    &nbsp;
                  </p>
                  <p style={{ textAlign: "right" }} data-ke-size="size16">
                    p.s2
                  </p>
                  <p style={{ textAlign: "right" }} data-ke-size="size16">
                    작년에도 독감 고생했는데 올해도 찾아왔네요ㅠ
                  </p>
                  <p style={{ textAlign: "right" }} data-ke-size="size16">
                    이번 겨울 날씨가 엄청 추웠는데&nbsp;모두들 감기 조심하세요
                  </p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Game1Wrapper>
  );
};

export default Hobby2;

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