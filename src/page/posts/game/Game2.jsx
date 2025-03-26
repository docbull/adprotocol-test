import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "../postStyle.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/game2.json";

const Game2 = () => {
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
          <div className="hgroup">
            <div className="category">게임</div>
            <h1>
              스팀게임) 흑인 사무라이와 닌자? 어쌔신 크리드 섀도우스 기본정보, 가격,
              사양{" "}
            </h1>
            <div className="post-meta">
              <span className="author">너르디</span>
              <span className="date">2025. 3. 21. 17:46</span>
            </div>
          </div>

          <div className="entry-content">
            <div className="tt_article_useless_p_margin contents_style">
              {/* 광고 1 */}
              <Advertise avenue={selectedAvenue[0]} location={"0"} />
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <b>흑인 사무라이와 쿠노이츠로 즐기는 전투와 암살 액션?!</b>{" "}
                  <b>
                    과연 진짜 망했을까요?<span> </span>
                  </b>
                  더블 주인공으로 즐기는 두 가지 스타일! 익숙한 그 맛!{" "}
                  <b>
                    <span style={{ color: "#ee2323" }}>
                      스팀 어쌔신 크리드 섀도우스
                    </span>
                  </b>
                  입니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p />
              <figure
                className="imageblock alignCenter"
                data-ke-mobilestyle="widthOrigin"
                data-filename="어쌔신 크리드 섀도우스.PNG"
                data-origin-width={861}
                data-origin-height={397}
              >
                <span
                  data-url="https://blog.kakaocdn.net/dn/wWYsn/btsMQgg4VmL/VVcYrjKypNOivAY9uQ8Jek/img.png"
                  data-phocus="https://blog.kakaocdn.net/dn/wWYsn/btsMQgg4VmL/VVcYrjKypNOivAY9uQ8Jek/img.png"
                >
                  <img
                    src="https://blog.kakaocdn.net/dn/wWYsn/btsMQgg4VmL/VVcYrjKypNOivAY9uQ8Jek/img.png"
                    srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwWYsn%2FbtsMQgg4VmL%2FVVcYrjKypNOivAY9uQ8Jek%2Fimg.png"
                    onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                    alt="어쌔신-크리드-섀도우스"
                    loading="lazy"
                    width={650}
                    height={300}
                    data-filename="어쌔신 크리드 섀도우스.PNG"
                    data-origin-width={861}
                    data-origin-height={397}
                    data-phocus-index={0}
                  />
                </span>
              </figure>
              <p />
              <h2 style={{ textAlign: "center" }} data-ke-size="size26">
                <span style={{ color: "#000000" }}>
                  <b>어쌔신 크리드 섀도우스</b>
                </span>
              </h2>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <b>
                    어쌔신 크리드 섀도우스는{" "}
                    <span style={{ color: "#ee2323" }}>봉건 시대 일본</span>을 배경으로,{" "}
                    <span style={{ color: "#ee2323" }}>
                      더블 주인공으로 암살과 전투
                    </span>
                    를 벌이는{" "}
                    <span style={{ color: "#ee2323" }}>오픈월드 액션 RPG 게임</span>
                  </b>
                  입니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <blockquote data-ke-style="style3">
                <span
                  style={{
                    fontFamily: '"Noto Sans Demilight", "Noto Sans KR"',
                    color: "#000000"
                  }}
                >
                  <b>목차</b>
                </span>
                <br />
                <br />
                <span style={{ color: "#000000" }}>
                  <b>
                    <span
                      style={{ fontFamily: '"Noto Sans Demilight", "Noto Sans KR"' }}
                    >
                      1. 어쌔신 크리드 섀도우스 기본정보, 스토리
                    </span>
                  </b>
                </span>
                <br />
                <span style={{ color: "#000000" }}>
                  <b>
                    <span
                      style={{ fontFamily: '"Noto Sans Demilight", "Noto Sans KR"' }}
                    >
                      2. 스팀 어쌔신 크리드 섀도우스 가격
                    </span>
                  </b>
                </span>
                <br />
                <span style={{ color: "#000000" }}>
                  <b>
                    <span
                      style={{ fontFamily: '"Noto Sans Demilight", "Noto Sans KR"' }}
                    >
                      3. 게임 컴퓨터 사양
                    </span>
                  </b>
                </span>
              </blockquote>
              <p data-ke-size="size16">&nbsp;</p>
              <h3 data-ke-size="size23">
                <span style={{ color: "#000000" }}>
                  <b>어쌔신 크리드 섀도우스 기본정보, 스토리</b>
                </span>
              </h3>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000", textAlign: "start" }}>
                  {" "}
                  <b>
                    어쌔신 크리드 섀도우스는<span>&nbsp;</span>
                    <span style={{ color: "#ee2323" }}>봉건 시대 일본</span>을 배경으로,
                    <span>&nbsp;</span>
                    <span style={{ color: "#ee2323" }}>
                      더블 주인공으로 암살과 전투
                    </span>
                    를 벌이는<span>&nbsp;</span>
                    <span style={{ color: "#ee2323" }}>오픈월드 액션 RPG 게임</span>
                  </b>
                  <span style={{ color: "#000000", textAlign: "start" }}>입니다.</span>
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <b>어쌔신 크리드 섀도우스 스토리</b>는 센코쿠 시대 일본을 배경으로,{" "}
                  <b>이국에서 온 흑인 남성 야스케</b>가 오다 노부나가의 눈에 들어
                  호위무사가 된 시점과 그의 군단에 공격받은 <b>시노비 나오에</b>의
                  시점을 오가며 시작됩니다.&nbsp;
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p />
              <figure
                className="imageblock alignCenter"
                data-ke-mobilestyle="widthOrigin"
                data-filename="edited_edited_어쌔신 크리드 섀도우스 기본정보.PNG"
                data-origin-width={1076}
                data-origin-height={600}
              >
                <span
                  data-url="https://blog.kakaocdn.net/dn/dVuCb8/btsMQfjtWI1/IefvWGkGWCIANpDVgYEkYk/img.png"
                  data-phocus="https://blog.kakaocdn.net/dn/dVuCb8/btsMQfjtWI1/IefvWGkGWCIANpDVgYEkYk/img.png"
                >
                  <img
                    src="https://blog.kakaocdn.net/dn/dVuCb8/btsMQfjtWI1/IefvWGkGWCIANpDVgYEkYk/img.png"
                    srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdVuCb8%2FbtsMQfjtWI1%2FIefvWGkGWCIANpDVgYEkYk%2Fimg.png"
                    onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                    alt="어쌔신-크리드-섀도우스"
                    loading="lazy"
                    width={650}
                    height={362}
                    data-filename="edited_edited_어쌔신 크리드 섀도우스 기본정보.PNG"
                    data-origin-width={1076}
                    data-origin-height={600}
                    data-phocus-index={1}
                  />
                </span>
              </figure>
              <p />
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <span style={{ color: "#ee2323" }}>
                    <b>흑인 사무라이인 야스케의 거칠고 시원한 전투</b>
                  </span>
                  와{" "}
                  <b>
                    <span style={{ color: "#ee2323" }}>
                      여성 시노비 나오에의 조용하고 재빠른 닌자 암살 스타일
                    </span>
                  </b>
                  을 오가며 플레이 하는{" "}
                  <b>더블 주인공 형태의 오픈월드 암살 &amp; 전투 게임</b>입니다.
                  퀘스트를 따라 세상을 다니며 스토리를 진행하게 됩니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  나오에를 통해{" "}
                  <b>특색있는 닌자 스타일의 조용하고 민첩한 암살 플레이</b>를 즐길 수
                  있는 것은 기존의 어쌔신 크리드와 비슷한 느낌을 줍니다. 많은 팬분들이
                  기대하는 부분도 바로 이런 요소라고 생각하는데요. 이 부분만큼은{" "}
                  <b>확실히 특색도 느껴지고 심장이 쫄깃한 긴장감</b>을 주며 낭만을
                  선보여 잘 만들어져 있었습니다.
                </span>
              </p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  팬들이 어쌔신 크리드에 기대하는
                  <b>
                    {" "}
                    은밀한 잠입 암살!{" "}
                    <span style={{ color: "#ee2323" }}>
                      닌자와 암살이 만나며 확실히 여러 새로운 장면들
                    </span>
                  </b>
                  이 나오며 발각 당했을때의 아슬아슬한 전투 난이도도 상당히 스릴
                  있습니다. 나오에 캐릭터의 피지컬 자체는 약하기 때문에 발각당해 직접
                  전투를 벌이게 되면 꽤 집중해야 합니다. 결국 다 죽이면 암살이긴 하지만
                  강한 적들을 몰래 학살하는 게 암살의 묘미죠.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <u>
                    <b>
                      닌자가 되어 쿠나이를 던지고, 갈고리 줄을 타고 어둠 속에 잠겨
                      지붕위를 타고 다니며, 날렵한 파쿠르 액션을 선보입니다!
                    </b>
                  </u>{" "}
                  원하는 스킬을 찍어 사용해보세요.{" "}
                  <b>
                    <span style={{ color: "#ee2323" }}>
                      닌자 컨셉에 제대로 어울리는 암살 시스템이 확실히 매력 있습니다.
                    </span>
                  </b>{" "}
                  확실히 이래저래 말이 많아도 이만한 잠입 액션 게임이 없다는 게 맞긴
                  합니다.{" "}
                  <span style={{ color: "#ee2323" }}>
                    <b>사실상 진 주인공은 나오에</b>
                  </span>
                  라는 느낌이 강합니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p />
              <figure
                className="imageblock alignCenter"
                data-ke-mobilestyle="widthOrigin"
                data-filename="edited_어쌔신 크리드 쉐도우스.PNG"
                data-origin-width={1076}
                data-origin-height={602}
              >
                <span
                  data-url="https://blog.kakaocdn.net/dn/bmjjxp/btsMQfKzl9R/V7HAH7Jc813bqkU2Yz95Z1/img.png"
                  data-phocus="https://blog.kakaocdn.net/dn/bmjjxp/btsMQfKzl9R/V7HAH7Jc813bqkU2Yz95Z1/img.png"
                >
                  <img
                    src="https://blog.kakaocdn.net/dn/bmjjxp/btsMQfKzl9R/V7HAH7Jc813bqkU2Yz95Z1/img.png"
                    srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbmjjxp%2FbtsMQfKzl9R%2FV7HAH7Jc813bqkU2Yz95Z1%2Fimg.png"
                    onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                    alt="어쌔신-크리드-섀도우스-스팀"
                    loading="lazy"
                    width={650}
                    height={364}
                    data-filename="edited_어쌔신 크리드 쉐도우스.PNG"
                    data-origin-width={1076}
                    data-origin-height={602}
                    data-phocus-index={2}
                  />
                </span>
              </figure>
              <p />
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <b>
                    흑인 사무라이 야스케 시점으로 플레이 할때는{" "}
                    <span style={{ color: "#ee2323" }}>
                      시원한 타격감과 적들을 피지컬로 찍어 누르는, 나오에와 정 반대의
                      플레이
                    </span>
                  </b>
                  를 즐길 수 있습니다. 누구보다 '목격자를 다 없애면 암살'이라는 말과
                  어울리는 느낌의 플레이 방식이지만 이 캐릭터로도 암살과 잠입을 플레이할
                  수 있습니다. 이목을 많이 끌어 확실히 더 어렵긴 하지만요.{" "}
                  <b>캐릭터들 간의 장단점이 정 반대인 느낌</b>입니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  솔직히 <b>야스케는 호불호가 강하게 갈릴법한 캐릭터가 맞습니다.</b>{" "}
                  플레이 스타일부터 같이 딸려온 여러 논란까지요. 하지만{" "}
                  <b>플레이 자체는 시원시원한 액션과 타격감으로 나쁘지 않은 느낌</b>
                  이었습니다. 이 게임에 기대하던 바는 아니었지만요.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  어쌔신 크리드 섀도우스는{" "}
                  <span style={{ color: "#ee2323" }}>
                    <b>높은 퀄리티의 그래픽과 넓은 오픈 월드 속 멋지고 아름다운 배경</b>
                  </span>
                  이 눈에 띄고, 오픈 월드 특유의 자유로움을 즐길 수 있습니다. 역시
                  즐길거리가 다양한 편이에요. 멋진 풍경을 감상하며 그 속에서 풀숲에 숨어
                  적들에게 표창을 날리는 재미가 쏠쏠합니다. 최적화도 나름 좋아서 쾌적한
                  편입니다.
                </span>
              </p>
              <div className="ad">
                {/* 광고 2 */}
                <Advertise avenue={selectedAvenue[1]} location={"1"} />
              </div>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <b>AI 인식 범위 등의 시스템이 살짝 아쉬운 느낌</b>이 있긴 하지만
                  전체적으로 난이도가 크게 높지 않아 편안하게 플레이가 가능합니다.
                  전체적으로 확실히 아쉬운 부분도 있지만 게임을 플레이하다 보면 무난하게
                  재밌는 것도 맞습니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p />
              <figure
                className="imageblock alignCenter"
                data-ke-mobilestyle="widthOrigin"
                data-filename="edited_흑인 사무라이.PNG"
                data-origin-width={1071}
                data-origin-height={604}
              >
                <span
                  data-url="https://blog.kakaocdn.net/dn/cG18YL/btsMQ58qa97/KNfh2Xy8c5KAKVhMAlOCp1/img.png"
                  data-phocus="https://blog.kakaocdn.net/dn/cG18YL/btsMQ58qa97/KNfh2Xy8c5KAKVhMAlOCp1/img.png"
                >
                  <img
                    src="https://blog.kakaocdn.net/dn/cG18YL/btsMQ58qa97/KNfh2Xy8c5KAKVhMAlOCp1/img.png"
                    srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcG18YL%2FbtsMQ58qa97%2FKNfh2Xy8c5KAKVhMAlOCp1%2Fimg.png"
                    onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                    alt="어쌔신-크리드-섀도우스-흑인"
                    loading="lazy"
                    width={650}
                    height={367}
                    data-filename="edited_흑인 사무라이.PNG"
                    data-origin-width={1071}
                    data-origin-height={604}
                    data-phocus-index={3}
                  />
                </span>
              </figure>
              <p />
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  출시 전 부터 여러 논란에 휩싸이며 사람들의 이목을 끌었던 어쌔신 크리드
                  섀도우스,{" "}
                  <u>
                    <b>출시 이후의 평가는</b> '여러 아쉽고 짜치는 부분이 분명히 있지만
                    무난한 평작 ~ 평작 이상이다.' '익숙한 그 맛'
                  </u>
                  이라는 평가를 받고 있습니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  {" "}
                  엄청난 고증으로 유명해 이 게임을 하면 그 시대의 그 나라를 여행하는
                  것과도 비슷한 느낌을 준다고 유명했던 어쌔신 크리드가 게임의 고증을
                  지키는 게 목적이 아니라는 모순적인 인터뷰와 함께 봉건 시대 일본 배경
                  게임의 주인공으로 굳이 흑인 남성을 선택한 것에 대해 여러 논란이
                  있었는데요. 실제 이것이 어떤 의도였든{" "}
                  <b>아시아인에 대한 차별과 역사 왜곡 문제로 좋지 못한 여론</b>을
                  받고있습니다.{" "}
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  <u>
                    게임 자체만 보면 무난하게 재밌으나 확실히 '암살' 게임이라는 가장 큰
                    키워드를 뒤집는듯한 직접 돌격하는 사무라이 스타일의 등장과{" "}
                    <b>
                      개발진의 무리한 태도와 여러 논란에 의해 호불호가 강하게 갈리고
                      있으니 참고
                    </b>
                  </u>
                  하세요. 이런 부분을 크게 신경 쓰지 않는다면 게임 자체의 퀄리티는
                  나쁘지 않은 편이라 할 수 있겠습니다.
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <p style={{ color: "#000000", textAlign: "start" }} data-ke-size="size18">
                <b>
                  <span style={{ color: "#1b711d" }}>· 이런분께 추천해요!: </span>
                </b>
                <span style={{ color: "#1b711d" }}>
                  <span>
                    <span>
                      <span style={{ color: "#000000" }}>
                        <b>
                          어쌔신 크리드 시리즈의 팬 분, 닌자 스타일의 어쌔신 크리드를
                          즐기고 싶으신 분,
                        </b>{" "}
                        오픈월드 게임을 좋아하시는 분, 시원한 액션과 높은 그래픽을
                        원하시는 분.
                      </span>
                    </span>
                  </span>
                </span>
                <br />
                <b>
                  <span style={{ color: "#ee2323" }}>· 이런분껜 비추해요!: </span>
                </b>
                <span style={{ color: "#ee2323" }}>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span style={{ color: "#000000" }}>
                                <b>
                                  이번 논란에 불쾌함을 느끼시는 분, 몰입도가 깨지는
                                  게임은 꺼려지시는 분,
                                </b>{" "}
                                오픈월드 게임을 지루해하시는 분, 잠입 액션 게임을 별로
                                안 좋아하시는 분.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </p>
              <p data-ke-size="size16">&nbsp;</p>
              <h3 data-ke-size="size23">
                <span style={{ color: "#000000" }}>
                  <b>게임 가격</b>
                </span>
              </h3>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size18">
                <span style={{ color: "#000000" }}>
                  <b>스팀 어쌔신 크리드 섀도우스 가격: 79,000원.</b>
                </span>
              </p>

              {/* 광고 3 */}
              <Advertise avenue={selectedAvenue[2]} location={"2"} />
              
              <p data-ke-size="size16">&nbsp;</p>
              <h3 data-ke-size="size23">
                <span style={{ color: "#000000" }}>
                  <b>게임 사양</b>
                </span>
              </h3>
              <div className="table-wrap">
                <table
                  style={{ borderCollapse: "collapse", width: "100%", height: 139 }}
                  border={1}
                  data-ke-style="style2"
                  data-ke-align="alignLeft"
                >
                  <tbody>
                    <tr style={{ height: 20 }}>
                      <td
                        style={{ width: "99.9999%", height: 20, textAlign: "center" }}
                        colSpan={3}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>시스템 요구사항</b>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: 17 }}>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        &nbsp;
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>최소사양</b>
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>권장사양</b>
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: 17 }}>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>운영체제</b>
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>Windows 10/11</span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>Windows 10/11</span>
                      </td>
                    </tr>
                    <tr style={{ height: 17 }}>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>프로세서</b>
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          Intel® Core™ i7 8700k/AMD Ryzen™ 5 3600
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          Intel® Core™ i5 11600k/AMD Ryzen™ 5 5600x
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: 17 }}>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>메모리</b>
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>16 GB RAM</span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>16 GB RAM</span>
                      </td>
                    </tr>
                    <tr style={{ height: 17 }}>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>그래픽카드</b>
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          Nvidia® GeForce GTX™ 1070 8GB/AMD Radeon™ RX 5700 8GB/Intel®
                          Arc™ A580 8GB (REBAR ON)
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          Nvidia® GeForce RTX™ 3060Ti 8GB/AMD Radeon™ RX 6700 XT
                          12GB/Intel® Arc™ B580 12GB (REBAR ON)
                        </span>
                      </td>
                    </tr>
                    <tr style={{ height: 17 }}>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>API</b>
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>DirectX: 버전 12</span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>DirectX: 버전 12</span>
                      </td>
                    </tr>
                    <tr style={{ height: 17 }}>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>
                          <b>저장공간</b>
                        </span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>115 GB 사용 가능 공간</span>
                      </td>
                      <td
                        style={{ width: "33.3333%", height: 17, textAlign: "center" }}
                      >
                        <span style={{ color: "#000000" }}>115 GB 사용 가능 공간</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p data-ke-size="size16">&nbsp;</p>
              <p data-ke-size="size16">
                <span style={{ color: "#000000" }}>
                  이상,{" "}
                  <b>
                    혼자 할만한 스팀게임 추천 흑인 사무라이와 닌자? 어쌔신 크리드
                    섀도우스 기본정보, 가격, 사양 정보였습니다.
                  </b>{" "}
                  여러 안좋은 여론과 논란에도 불구하고 게임 자체는 무난히 뽑혀 유저들의
                  선택에 달린 게임이었습니다.
                </span>
              </p>
            </div>
          </div>
        </Game1Wrapper>
    );
};

export default Game2;

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