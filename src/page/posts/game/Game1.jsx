import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "../postStyle.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/game1.json";

const Game1 = () => {
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
        <h1>[공략] REPO 공략, 몬스터 종류 소개 / 레포 게임 공략! </h1>
        <div className="post-meta">
          <span className="author">너르디</span>
          <span className="date">2025. 3. 14. 10:31</span>
        </div>
      </div>

      <div className="entry-content">
        <div className="tt_article_useless_p_margin contents_style">
          {/* 광고 1 */}
          <Advertise avenue={selectedAvenue[0]} location={"0"} />
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              실시간으로 아이템의 가치가 떨어져서 더 조마조마하고 스릴 있는{" "}
              <b>신작 리썰컴퍼니류 게임! R.E.P.O.!</b> 지금 엄청 인기인 이 유쾌한 게임
              <span style={{ color: "#ee2323" }}>
                <b> REPO 공략과 REPO 몬스터 종류와 공략법 소개</b>
              </span>
              를 해보겠습니다.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p />
          <figure
            className="imageblock alignCenter"
            data-ke-mobilestyle="widthOrigin"
            data-filename="edited_레포.PNG"
            data-origin-width={1068}
            data-origin-height={598}
          >
            <span
              data-url="https://blog.kakaocdn.net/dn/K2EX8/btsMKxDazXd/HXdAk2kivzgrxKizfwgjJK/img.png"
              data-phocus="https://blog.kakaocdn.net/dn/K2EX8/btsMKxDazXd/HXdAk2kivzgrxKizfwgjJK/img.png"
            >
              <img
                src="https://blog.kakaocdn.net/dn/K2EX8/btsMKxDazXd/HXdAk2kivzgrxKizfwgjJK/img.png"
                srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FK2EX8%2FbtsMKxDazXd%2FHXdAk2kivzgrxKizfwgjJK%2Fimg.png"
                alt="REPO-공략"
                loading="lazy"
                width={650}
                height={364}
                data-filename="edited_레포.PNG"
                data-origin-width={1068}
                data-origin-height={598}
                data-phocus-index={0}
              />
            </span>
          </figure>
          <p />
          <p data-ke-size="size16">&nbsp;</p>
          <h2 style={{ textAlign: "center" }} data-ke-size="size26">
            <span style={{ color: "#000000" }}>
              <b>REPO 공략</b>
            </span>
          </h2>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              오늘은 <b>간단한 팁과 함께 REPO 몬스터 특징과 모습, 공략법을 소개</b>
              해보겠습니다. 즐거운 플레이에 도움이 되었으면 좋겠네요. 몬스터 정리 목록은
              아래에 있습니다.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              - 일단 가장 먼저 팀 구성! 괴물들을 여러 명이서 들어 올려서 해치워야 하거나
              곁에서 잡힌 동료를 구출해줘야 하는 경우도 많기 때문에
              <b> 두세명씩 짝을 지어 움직이는 걸 추천</b>드립니다. 혼자서 다니다가
              전멸하는 경우도 많습니다.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              - 모든 물건은 인벤토리에 넣을 수 없고 손에 들고 다녀야 합니다. 상점에서
              구매한 도구의 경우에는 인벤토리에 수납이 가능합니다. 무기로는{" "}
              <b>근접무기는 야구배트와 슬레지 해머를 추천</b>드리고{" "}
              <b>원거리는 권총과 마취총도 추천</b>드립니다.&nbsp;
            </span>
          </p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              - 특이하게도 스퓨어라는{" "}
              <b>
                날아다니는 입 형태의 괴물은 플레이어에게 달려들어 입에 기생하면서 몇
                초마다 산성액을 토해내는데 이걸 무기로 사용할 수도
              </b>{" "}
              있습니다. 만약 괴물이 붙었다면 잘 활용해보세요.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              - <b>맵에 아이템은 계속 스폰되는 형식이 아니라 한정</b>되어 있기 때문에
              만약 가치가 높은 아이템들을 다수 터트렸고, 아직 해결해야 할 목표치가 많은
              상황이라면 높은 레벨까지 간 게 아니라면 빠른 전멸을 추천드립니다.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              - 물건을 가져다 두는 곳 네모 안쪽에 정확히 넣지 않고 조금이라도{" "}
              <b>삐져나온 상태로 두게 되면 압착 과정에서 터져</b>나가 정산이 취소될 수도
              있습니다. 꼭 물건을 정확히 네모 선 안쪽에 넣도록 합시다.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              - 내 체력이 10을 넘는 상태라면 체력이 부족한{" "}
              <b>팀원의 등을 좌클릭해서 내 체력으로 상대를 회복</b>시켜 줄 수 있습니다.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              이 게임의 몬스터들은 각 레벨별로 나오는 수와 종류가 정해져 있습니다! 다만
              가끔 낮은 확률로 레벨 3짜리 몬스터가 낮은 레벨의 여러 몬스터로 대체될 수도
              있다는 점 참고하세요.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <b>
              <span style={{ color: "#000000" }}>
                레벨 1~2에서 Lv.1 몹 1마리, Lv.3 몹 1마리. 총 2마리.
              </span>
            </b>
          </p>
          <p data-ke-size="size16">
            <b>
              <span style={{ color: "#000000" }}>
                레벨 3~5에서 Lv.1 몹 1, Lv.2 몹 1, Lv.3 몹 1. 총 3마리.
              </span>
            </b>
          </p>
          <p data-ke-size="size16">
            <b>
              <span style={{ color: "#000000" }}>
                레벨 6~8에서 Lv.1 몹 2, Lv.2 몹 2, Lv.3 몹 2. 총 6마리.
              </span>
            </b>
          </p>
          <p data-ke-size="size16">
            <b>
              <span style={{ color: "#000000" }}>
                레벨 9~10에서&nbsp; Lv.1 몹 2, Lv.2 몹 3, Lv.3 몹 2 총 7마리.
              </span>
            </b>
          </p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              <b>레벨 11 이상에서&nbsp; Lv.1 몹 2, Lv.2 몹 3, Lv.3 몹 3 총 8마리.</b>{" "}
              이렇게 스폰됩니다.&nbsp;
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              그렇다면 <b>본격적으로 REPO 몬스터 소개와 공략법을 정리해 보겠습니다.</b>{" "}
              참고로 괴물들을 해치우면 특정 약한 종류 빼고는 '코어'가 나오는데 잘 깨지니
              주의해서 다룹시다.
            </span>
          </p>
          <div className="ad">
            {/* 광고 2 */}
            <Advertise avenue={selectedAvenue[1]} location={"1"} />
          </div>
          <h3 data-ke-size="size23">
            <span style={{ color: "#000000" }}>
              <b>몬스터</b>
            </span>
          </h3>
          <div className="table-wrap">
            <table
              style={{ borderCollapse: "collapse", width: "100%", height: 527 }}
              border={1}
              data-ke-align="alignLeft"
            >
              <tbody>
                <tr style={{ height: 17 }}>
                  <td style={{ width: "100%", height: 17 }} colSpan={3}>
                    <span style={{ color: "#000000" }}>
                      <b>Lv.1</b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="4.PNG"
                      data-origin-width={182}
                      data-origin-height={182}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bisAbo/btsMKEvvg6p/kU6EXHEaKJo4xFnZkWH0uk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bisAbo/btsMKEvvg6p/kU6EXHEaKJo4xFnZkWH0uk/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bisAbo/btsMKEvvg6p/kU6EXHEaKJo4xFnZkWH0uk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbisAbo%2FbtsMKEvvg6p%2FkU6EXHEaKJo4xFnZkWH0uk%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={182}
                          height={182}
                          data-filename="4.PNG"
                          data-origin-width={182}
                          data-origin-height={182}
                          data-phocus-index={1}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>
                        에이펙스 <br />
                        프레데터
                      </b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>- 작은 오리 형태의 괴물.</span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 비선공몹. 플레이어를 따라다니고 먼저 공격을 하지 않지만 집어들려고
                      건드리는 순간 괴물로 돌변해 공격함. 작아서 책상아래에 숨어서
                      따돌리는것도 불가능.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 손대지 않은채 플레이어를 따라오게 해서 압축기에 올려놓거나
                        구덩이로 유도.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="3.PNG"
                      data-origin-width={459}
                      data-origin-height={459}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/cNRtVt/btsMKE3nJLh/Fw7qghFNNpwzsmecZ2qY2k/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/cNRtVt/btsMKE3nJLh/Fw7qghFNNpwzsmecZ2qY2k/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/cNRtVt/btsMKE3nJLh/Fw7qghFNNpwzsmecZ2qY2k/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcNRtVt%2FbtsMKE3nJLh%2FFw7qghFNNpwzsmecZ2qY2k%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={459}
                          height={459}
                          data-filename="3.PNG"
                          data-origin-width={459}
                          data-origin-height={459}
                          data-phocus-index={2}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>노움</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 3 ~ 4마리가 무리지어 돌아다니는 노움 장식 형태의 괴물.&nbsp;
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 플레이어를 공격하며 플레이어가 모아둔 아이템과 주변
                      아이템들을 공격해 부수는 습성이 있습니다. 때문에 발견시 즉각적인
                      처치가 필요합니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>공략법: 집어들어서 던져서 패대기쳐 부수면 됩니다.</b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="16.PNG"
                      data-origin-width={322}
                      data-origin-height={322}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bHaPPw/btsMKQP3GnP/wnPALIFTNq7xGxH1fxvaS1/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bHaPPw/btsMKQP3GnP/wnPALIFTNq7xGxH1fxvaS1/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bHaPPw/btsMKQP3GnP/wnPALIFTNq7xGxH1fxvaS1/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbHaPPw%2FbtsMKQP3GnP%2FwnPALIFTNq7xGxH1fxvaS1%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={322}
                          height={322}
                          data-filename="16.PNG"
                          data-origin-width={322}
                          data-origin-height={322}
                          data-phocus-index={3}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>눈알</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 천장에 매달린 커다란 눈알 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 반경안에 들어온 플레이어의 시선을 자신에게로 고정시킨채
                      지속 데미지를 넣습니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 공격 당한 상태에서 벗어나려면 방을 나가거나 빠르게
                        숨어야합니다. 혹은 총으로 쏴서 터트릴 수 있습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="이.PNG"
                      data-origin-width={306}
                      data-origin-height={306}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bLHeB0/btsMKSAg42T/XlzwKqOVfkwiZZ7qjDbikk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bLHeB0/btsMKSAg42T/XlzwKqOVfkwiZZ7qjDbikk/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bLHeB0/btsMKSAg42T/XlzwKqOVfkwiZZ7qjDbikk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLHeB0%2FbtsMKSAg42T%2FXlzwKqOVfkwiZZ7qjDbikk%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={306}
                          height={306}
                          data-filename="이.PNG"
                          data-origin-width={306}
                          data-origin-height={306}
                          data-phocus-index={4}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>쉐도우 차일드</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 슬랜더맨 같은 긴 검은 몸에 하얀 아기 얼굴과 6개의 팔을 가진 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 플레이어를 응시하고 자신을 바라보면 공격합니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 대상을 보지 않도록 바닥이나 벽을 보며 멀어져야합니다.
                        시선을 괴물에게 맞추지 않은채 총이나 해머로 쓰러트립니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="6.PNG"
                      data-origin-width={274}
                      data-origin-height={274}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/EdXSk/btsMKrCYrkE/Uqya0ILokgqFTWYBkYG8NK/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/EdXSk/btsMKrCYrkE/Uqya0ILokgqFTWYBkYG8NK/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/EdXSk/btsMKrCYrkE/Uqya0ILokgqFTWYBkYG8NK/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEdXSk%2FbtsMKrCYrkE%2FUqya0ILokgqFTWYBkYG8NK%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={274}
                          height={274}
                          data-filename="6.PNG"
                          data-origin-width={274}
                          data-origin-height={274}
                          data-phocus-index={5}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>스퓨어</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>- 날아다니는 입 모양의 괴물.</span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 플레이어를 발견시 토를 하면서 선공하며 다가와 달라붙어
                      플레이어에게 기생합니다. 기생당한 플레이어는 목소리가 변조되며,
                      주기적으로 산성액을 토해 주변 플레이어에게 데미지를 입힙니다.&nbsp;
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 기생 당하기 전 총이나 해머로 쓰러트리거나 도망쳐서 따돌릴
                        수 있습니다.&nbsp;
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 17 }}>
                  <td
                    style={{ width: "100%", height: 17, textAlign: "left" }}
                    colSpan={3}
                  >
                    <span style={{ color: "#000000" }}>
                      <b>Lv.2</b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="13.PNG"
                      data-origin-width={248}
                      data-origin-height={248}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/HFsx2/btsMJGU7bVJ/maZZCmjR89SjUASBHXB3Fk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/HFsx2/btsMJGU7bVJ/maZZCmjR89SjUASBHXB3Fk/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/HFsx2/btsMJGU7bVJ/maZZCmjR89SjUASBHXB3Fk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHFsx2%2FbtsMJGU7bVJ%2FmaZZCmjR89SjUASBHXB3Fk%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={248}
                          height={248}
                          data-filename="13.PNG"
                          data-origin-width={248}
                          data-origin-height={248}
                          data-phocus-index={6}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>애니멀</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 6개의 다리로 기어다니는 살색 벌레같은 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 비선공몹. 선공몹은 아니지만 빠른 속도로 기어다니며 플레이어를
                      방해합니다. 공격당하면 반격하며 이때 책상 아래로 숨어도 공격하니
                      책상 위로 올라가야합니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 두 사람 이상이 함께 집어들어 패대기쳐 공격하거나 총이나
                        해머로 쓰러트릴 수 있습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="1.PNG"
                      data-origin-width={328}
                      data-origin-height={328}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bp5wGC/btsMJLPrrpT/UavkeOqXcMxliJK3vmUUr1/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bp5wGC/btsMJLPrrpT/UavkeOqXcMxliJK3vmUUr1/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bp5wGC/btsMJLPrrpT/UavkeOqXcMxliJK3vmUUr1/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbp5wGC%2FbtsMJLPrrpT%2FUavkeOqXcMxliJK3vmUUr1%2Fimg.png"
                          alt="repo-몬스터"
                          loading="lazy"
                          width={328}
                          height={328}
                          data-filename="1.PNG"
                          data-origin-width={328}
                          data-origin-height={328}
                          data-phocus-index={7}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>업스크림</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 사람 얼굴을 한 네발로 기어다니는 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 플레이어에게 다가와 얼굴을 드리밀며 소리를 질러 놀래키고
                      집어 날려버립니다. 짧은 스턴을 입힙니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>공략법: 물건이나 무기를 이용해 공격해 쓰러트릴 수 있습니다.</b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="12.PNG"
                      data-origin-width={135}
                      data-origin-height={135}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/sbZsh/btsMJxxaICN/E2KmqbwiOZksMe9WHXtGu1/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/sbZsh/btsMJxxaICN/E2KmqbwiOZksMe9WHXtGu1/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/sbZsh/btsMJxxaICN/E2KmqbwiOZksMe9WHXtGu1/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsbZsh%2FbtsMJxxaICN%2FE2KmqbwiOZksMe9WHXtGu1%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={135}
                          height={135}
                          data-filename="12.PNG"
                          data-origin-width={135}
                          data-origin-height={135}
                          data-phocus-index={8}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>루그랫</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 기저귀를 찬 아기 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 맵을 뛰어다니며 닿은 물건이나 플레이어를 집어들어
                      던져버립니다. 물건을 던져 데미지도 입히고 깨트리기 때문에 발견시
                      빠른 대처가 필요한 몹입니다.&nbsp;
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 두 사람 이상이 함께 집어들어 패대기치거나 구덩이에
                        던져버립니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="일.PNG"
                      data-origin-width={139}
                      data-origin-height={139}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/ATFFw/btsMLyH6tM8/LDTVf4OUePYDLwBzbYKnj0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/ATFFw/btsMLyH6tM8/LDTVf4OUePYDLwBzbYKnj0/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/ATFFw/btsMLyH6tM8/LDTVf4OUePYDLwBzbYKnj0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FATFFw%2FbtsMLyH6tM8%2FLDTVf4OUePYDLwBzbYKnj0%2Fimg.png"
                          alt="repo-공략"
                          loading="lazy"
                          width={139}
                          height={139}
                          data-filename="일.PNG"
                          data-origin-width={139}
                          data-origin-height={139}
                          data-phocus-index={9}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>히든</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 연기 정도만 작게 보이는 투명한 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 공격을 하는건 아니지만 플레이어를 집어들어 랜덤한 공간으로
                      끌고 간 뒤 놓고 옵니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 팀원이 잡혔을때 동료를 집어 구출할 수 있습니다. 체력이
                        높고 모습이 안보여서 어렵긴 하지만 무기로 쓰러트릴 수 있습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="7.PNG"
                      data-origin-width={227}
                      data-origin-height={227}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/mFDsr/btsMKcTBmpx/yjvP8rAMOnUQ41vUT5Iy5k/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/mFDsr/btsMKcTBmpx/yjvP8rAMOnUQ41vUT5Iy5k/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/mFDsr/btsMKcTBmpx/yjvP8rAMOnUQ41vUT5Iy5k/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmFDsr%2FbtsMKcTBmpx%2FyjvP8rAMOnUQ41vUT5Iy5k%2Fimg.png"
                          alt="repo-몬스터"
                          loading="lazy"
                          width={227}
                          height={227}
                          data-filename="7.PNG"
                          data-origin-width={227}
                          data-origin-height={227}
                          data-phocus-index={10}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>셰프</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 요리사 옷을 입은 개구리 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 플레이어를 발견시 직선으로 식칼을 휘두르며 점프합니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 점프해서 공격하기 때문에 동선을 보고 피한 뒤, 개구리가
                        자빠졌을때 다른 사람과 함께 집어 들어 구덩이로 던져버립니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="15.PNG"
                      data-origin-width={290}
                      data-origin-height={290}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/cwoO5g/btsMJF2ZqQe/VtIyLtAHjVbC0GsLuYPxLk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/cwoO5g/btsMJF2ZqQe/VtIyLtAHjVbC0GsLuYPxLk/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/cwoO5g/btsMJF2ZqQe/VtIyLtAHjVbC0GsLuYPxLk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcwoO5g%2FbtsMJF2ZqQe%2FVtIyLtAHjVbC0GsLuYPxLk%2Fimg.png"
                          alt="레포-몬스터"
                          loading="lazy"
                          width={290}
                          height={290}
                          data-filename="15.PNG"
                          data-origin-width={290}
                          data-origin-height={290}
                          data-phocus-index={11}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>보타이</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 하얀색의 뚱뚱한 몸에 빨간 나비넥타이를 한 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 배에서 거대한 입을 벌려 괴성을 지르며 바람으로 플레이어와
                      물건들을 밀어냅니다. 점차 데미지가 들어오고, 공격 후 빠르게
                      도망칩니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 막힌곳이 아닌 넓은 곳으로 피합니다. 총으로 쓰러트릴 수
                        있습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="10.PNG"
                      data-origin-width={456}
                      data-origin-height={456}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/boM3ic/btsMJ1EI3cs/W0j6UdZpuTh6czgAsTwsn0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/boM3ic/btsMJ1EI3cs/W0j6UdZpuTh6czgAsTwsn0/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/boM3ic/btsMJ1EI3cs/W0j6UdZpuTh6czgAsTwsn0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboM3ic%2FbtsMJ1EI3cs%2FW0j6UdZpuTh6czgAsTwsn0%2Fimg.png"
                          alt="레포-몬스터"
                          loading="lazy"
                          width={456}
                          height={456}
                          data-filename="10.PNG"
                          data-origin-width={456}
                          data-origin-height={456}
                          data-phocus-index={12}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>뱅거</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 다이너마이트가 꽂혀있는 해골에 발이 달린 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 여러마리가 몰려다니며 플레이어를 발견시 다이너마이트에
                      불을 붙인채 쫒아옵니다. 일정 시간 후 자폭해 주변과 플레이어에게
                      데미지를 입힙니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 집어들어 패대기치거나 잡아던져 터지게 둡니다. 혹은
                        구덩이로 던져버립니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="14.PNG"
                      data-origin-width={456}
                      data-origin-height={456}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/ekGZaC/btsMKDwDn4i/Nx5Vhyq16f87cRe6ycAfs0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/ekGZaC/btsMKDwDn4i/Nx5Vhyq16f87cRe6ycAfs0/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/ekGZaC/btsMKDwDn4i/Nx5Vhyq16f87cRe6ycAfs0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FekGZaC%2FbtsMKDwDn4i%2FNx5Vhyq16f87cRe6ycAfs0%2Fimg.png"
                          alt="레포-공략"
                          loading="lazy"
                          width={456}
                          height={456}
                          data-filename="14.PNG"
                          data-origin-width={456}
                          data-origin-height={456}
                          data-phocus-index={13}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>멘탈리스트</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 거대한 두뇌를 가진채 공중부양하는 외계인 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 주변 에너지 필드 안의 플레이어와 물건들을 공중에 띄웠다가
                      10초 정도 이후 떨어트려 공격합니다. 떨어질시 큰 데미지를 입습니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 속도가 느리므로 보고 피하거나 잡혔을 시 다른 동료가
                        집어들어주면 구출 할 수 있습니다. 마취 시켜 집어들고 패대기쳐
                        쓰러트릴 수 있습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 17 }}>
                  <td
                    style={{ width: "100%", height: 17, textAlign: "left" }}
                    colSpan={3}
                  >
                    <span style={{ color: "#000000" }}>
                      <b>Lv.3</b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="9.PNG"
                      data-origin-width={404}
                      data-origin-height={404}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/Bff7F/btsMKTMJaGs/1X2ko2330oQKBSzvuGRBLk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/Bff7F/btsMKTMJaGs/1X2ko2330oQKBSzvuGRBLk/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/Bff7F/btsMKTMJaGs/1X2ko2330oQKBSzvuGRBLk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBff7F%2FbtsMKTMJaGs%2F1X2ko2330oQKBSzvuGRBLk%2Fimg.png"
                          alt="R.E.P.O-공략"
                          loading="lazy"
                          width={404}
                          height={404}
                          data-filename="9.PNG"
                          data-origin-width={404}
                          data-origin-height={404}
                          data-phocus-index={14}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>헤드맨</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 둥둥 떠다니는 해골 같은 거대한 머리 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 빠르게 플레이어에게 돌진해 공격합니다. 특히 손전등 빛에
                      크게 반응하고, 어그로가 끌린채면 책상 아래에 숨어도 공격합니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 코너를 돌며 빠르게 도망쳐 시야에서 벗어난 상태에서
                        숨어야합니다. 총 2대로 쓰러트릴 수는 있으나 괴물의 속도가 빨라
                        추천드리지는 않습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="2.PNG"
                      data-origin-width={398}
                      data-origin-height={398}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/c859es/btsMJbg0l33/pdkSKrCJrCtql72paqF1K0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/c859es/btsMJbg0l33/pdkSKrCJrCtql72paqF1K0/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/c859es/btsMJbg0l33/pdkSKrCJrCtql72paqF1K0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc859es%2FbtsMJbg0l33%2FpdkSKrCJrCtql72paqF1K0%2Fimg.png"
                          alt="리포-공략"
                          loading="lazy"
                          width={398}
                          height={398}
                          data-filename="2.PNG"
                          data-origin-width={398}
                          data-origin-height={398}
                          data-phocus-index={15}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>리퍼</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 양 팔에 낫이 달린 여자아이 허수아비 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 플레이어를 발견시 양 팔의 낫을 휘두르며 공격하면서
                      다가옵니다. 어그로가 끌린채면 책상 아래에 숨어도 공격합니다.&nbsp;
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 인식 범위가 좁고 느려 빠르게 시야에서 벗어난 뒤 숨으면
                        됩니다. 체력이 높아도 무기로 쓰러트릴 수 있습니다만 추천드리지는
                        않습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="5.PNG"
                      data-origin-width={315}
                      data-origin-height={315}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/cIgWNA/btsMKAmklfk/ZuWNGiXqigwEFmDjK7OZWK/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/cIgWNA/btsMKAmklfk/ZuWNGiXqigwEFmDjK7OZWK/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/cIgWNA/btsMKAmklfk/ZuWNGiXqigwEFmDjK7OZWK/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcIgWNA%2FbtsMKAmklfk%2FZuWNGiXqigwEFmDjK7OZWK%2Fimg.png"
                          alt="리포-몬스터"
                          loading="lazy"
                          width={315}
                          height={315}
                          data-filename="5.PNG"
                          data-origin-width={315}
                          data-origin-height={315}
                          data-phocus-index={16}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>클라운</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 빨간 입술과 동그란 빨간 코를 가진 광대 얼굴 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 코로 레이저를 발사해 공격하고 빠르게 다가와 발로 찹니다.
                      레이저 발사 기준은 플레이어의 머리 위치로 발사합니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 레이저를 발사할때 Q키로 웅크리거나 앉아서 회피한 뒤
                        도망쳐야합니다.&nbsp;
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 20 }}>
                  <td style={{ width: "15%", height: 20 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="11.PNG"
                      data-origin-width={365}
                      data-origin-height={365}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/cbpLSp/btsMKyIPX1q/JQSJ3TGXKs40TKjHbcjAnk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/cbpLSp/btsMKyIPX1q/JQSJ3TGXKs40TKjHbcjAnk/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/cbpLSp/btsMKyIPX1q/JQSJ3TGXKs40TKjHbcjAnk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcbpLSp%2FbtsMKyIPX1q%2FJQSJ3TGXKs40TKjHbcjAnk%2Fimg.png"
                          alt="repo-게임"
                          loading="lazy"
                          width={365}
                          height={365}
                          data-filename="11.PNG"
                          data-origin-width={365}
                          data-origin-height={365}
                          data-phocus-index={17}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 20, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>헌트맨</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 20 }}>
                    <span style={{ color: "#000000" }}>
                      - 사냥꾼 복장을 하고 장총을 든 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 앞이 보이지 않지만 소리를 내거나 몸에 닿으면 그쪽으로 빠르게 총을
                      발사합니다. 발소리, 목소리, 점프 소리, 물체의 소리 등에 반응하며
                      데미지가 매우 큰편입니다. 가까이 있다면 발로 차기도 합니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 큰 소음이나 다가가지 않도록 조심합니다. 만약 발각되었다면
                        머리 기준이기 때문에 웅크리거나 옆으로 움직이는 등 빠르게 반응해
                        총알을 회피할 수도 있습니다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 17 }}>
                  <td style={{ width: "15%", height: 17 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="8.PNG"
                      data-origin-width={458}
                      data-origin-height={458}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/Ug6ss/btsMKB6C68c/SJwVNRRMU19WPqqHXrKIt0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/Ug6ss/btsMKB6C68c/SJwVNRRMU19WPqqHXrKIt0/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/Ug6ss/btsMKB6C68c/SJwVNRRMU19WPqqHXrKIt0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUg6ss%2FbtsMKB6C68c%2FSJwVNRRMU19WPqqHXrKIt0%2Fimg.png"
                          alt="repo-게임"
                          loading="lazy"
                          width={458}
                          height={458}
                          data-filename="8.PNG"
                          data-origin-width={458}
                          data-origin-height={458}
                          data-phocus-index={18}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 17, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>로브</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 17 }}>
                    <span style={{ color: "#000000" }}>
                      - 검고 긴 로브에 하얀 가면이 씌워진 형태의 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 자신을 바라본 플레이어에게 괴성을 지르며 달려들어
                      공격합니다. 공격 대상이 되면 시야가 흐려집니다.
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 바라보지 않게 조심하고 만약 어그로가 끌렸다면 최대한
                        도망쳐 다른 방으로 이동해 숨어줍시다.
                      </b>
                    </span>
                  </td>
                </tr>
                <tr style={{ height: 17 }}>
                  <td style={{ width: "15%", height: 17 }}>
                    <figure
                      className="imageblock alignCenter"
                      data-ke-mobilestyle="widthOrigin"
                      data-filename="삼.PNG"
                      data-origin-width={452}
                      data-origin-height={452}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/c67SQk/btsMKIEGiBq/krrkGguw86O8uNAweWNqgk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/c67SQk/btsMKIEGiBq/krrkGguw86O8uNAweWNqgk/img.png"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/c67SQk/btsMKIEGiBq/krrkGguw86O8uNAweWNqgk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc67SQk%2FbtsMKIEGiBq%2FkrrkGguw86O8uNAweWNqgk%2Fimg.png"
                          alt="repo-게임-공략"
                          loading="lazy"
                          width={452}
                          height={452}
                          data-filename="삼.PNG"
                          data-origin-width={452}
                          data-origin-height={452}
                          data-phocus-index={19}
                        />
                      </span>
                    </figure>
                  </td>
                  <td style={{ width: "15%", height: 17, textAlign: "center" }}>
                    <span style={{ color: "#000000" }}>
                      <b>트러지</b>
                    </span>
                  </td>
                  <td style={{ width: "70%", height: 17 }}>
                    <span style={{ color: "#000000" }}>
                      - 빨간색의 목이 긴 갑옷을 입은 형태의 거대한 괴물.
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      - 선공몹. 팔에 달린 메이스를 내려쳐 주변 물체와 플레이어를 끌어당겨
                      공격합니다. 속도는 느리지만 숨어 있는 사람도 끌어당기고 즉사급
                      데미지의 광역 공격을 합니다.&nbsp;
                    </span>
                    <br />
                    <br />
                    <span style={{ color: "#000000" }}>
                      <b>
                        공략법: 빠르게 도망쳐 시야에서 벗어난 상태에서 숨어야합니다.
                        시야가 좁아 앉은채로 움직이면 인식을 덜합니다.
                      </b>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 광고 3 */}
          <Advertise avenue={selectedAvenue[2]} location={"2"} />
          <p data-ke-size="size16">&nbsp;</p>
          <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              아직 이 게임을 잘 모르시거나 궁금하신 분들은 아래에 링크해 놓은 게시글에
              이 게임 소개와 한글패치 링크도 함께 담아놨으니 확인해 보세요.
            </span>
          </p>
          <figure
            id="og_1741902590299"
            data-ke-type="opengraph"
            data-ke-align="alignCenter"
            data-og-type="article"
            data-og-title="스팀게임 추천) 천달러짜리 화분이다!! R.E.P.O. 한글패치, 게임소개, 가격, 사양 / REPO 리포"
            data-og-description="원 따우전트 달러?!? 괴물들을 피해 돈이 되는 물건들을 싹 쓸어옵시다! 리썰 컴퍼니 스타일의 꿀잼 게임 신작 등장! 스팀 R.E.P.O. 혹은 리포, REPO입니다.  R.E.P.O. REPO는 괴물들이 등장하는 맵에서"
            data-og-host="subculturer-home.tistory.com"
            data-og-source-url="https://subculturer-home.tistory.com/entry/%EC%8A%A4%ED%8C%80%EA%B2%8C%EC%9E%84-%EC%B6%94%EC%B2%9C-%EC%B2%9C%EB%8B%AC%EB%9F%AC%EC%A7%9C%EB%A6%AC-%ED%99%94%EB%B6%84%EC%9D%B4%EB%8B%A4-REPO-%ED%95%9C%EA%B8%80%ED%8C%A8%EC%B9%98-%EA%B2%8C%EC%9E%84%EC%86%8C%EA%B0%9C-%EA%B0%80%EA%B2%A9-%EC%82%AC%EC%96%91-REPO-%EB%A6%AC%ED%8F%AC"
            data-og-url="https://subculturer-home.tistory.com/entry/%EC%8A%A4%ED%8C%80%EA%B2%8C%EC%9E%84-%EC%B6%94%EC%B2%9C-%EC%B2%9C%EB%8B%AC%EB%9F%AC%EC%A7%9C%EB%A6%AC-%ED%99%94%EB%B6%84%EC%9D%B4%EB%8B%A4-REPO-%ED%95%9C%EA%B8%80%ED%8C%A8%EC%B9%98-%EA%B2%8C%EC%9E%84%EC%86%8C%EA%B0%9C-%EA%B0%80%EA%B2%A9-%EC%82%AC%EC%96%91-REPO-%EB%A6%AC%ED%8F%AC"
            data-og-image="https://scrap.kakaocdn.net/dn/Sruzj/hyYqYJgMoJ/V51aW4F8LBRXL7ChKFKvkk/img.png?width=800&height=447&face=0_0_800_447,https://scrap.kakaocdn.net/dn/AXfap/hyYr34qdN0/WPhZe2Mrm6SZ8G9AfrZ2WK/img.png?width=800&height=447&face=0_0_800_447,https://scrap.kakaocdn.net/dn/bttt8Q/hyYqQxMN3s/jNdaZcssRxjXMehSmH8K80/img.png?width=1123&height=630&face=549_107_785_364"
          >
            <a
              href="https://subculturer-home.tistory.com/entry/%EC%8A%A4%ED%8C%80%EA%B2%8C%EC%9E%84-%EC%B6%94%EC%B2%9C-%EC%B2%9C%EB%8B%AC%EB%9F%AC%EC%A7%9C%EB%A6%AC-%ED%99%94%EB%B6%84%EC%9D%B4%EB%8B%A4-REPO-%ED%95%9C%EA%B8%80%ED%8C%A8%EC%B9%98-%EA%B2%8C%EC%9E%84%EC%86%8C%EA%B0%9C-%EA%B0%80%EA%B2%A9-%EC%82%AC%EC%96%91-REPO-%EB%A6%AC%ED%8F%AC"
              target="_blank"
              rel="noopener"
              data-source-url="https://subculturer-home.tistory.com/entry/%EC%8A%A4%ED%8C%80%EA%B2%8C%EC%9E%84-%EC%B6%94%EC%B2%9C-%EC%B2%9C%EB%8B%AC%EB%9F%AC%EC%A7%9C%EB%A6%AC-%ED%99%94%EB%B6%84%EC%9D%B4%EB%8B%A4-REPO-%ED%95%9C%EA%B8%80%ED%8C%A8%EC%B9%98-%EA%B2%8C%EC%9E%84%EC%86%8C%EA%B0%9C-%EA%B0%80%EA%B2%A9-%EC%82%AC%EC%96%91-REPO-%EB%A6%AC%ED%8F%AC"
            >
              <div
                className="og-image"
                style={{
                  backgroundImage:
                    'url("https://scrap.kakaocdn.net/dn/Sruzj/hyYqYJgMoJ/V51aW4F8LBRXL7ChKFKvkk/img.png?width=800&height=447&face=0_0_800_447,https://scrap.kakaocdn.net/dn/AXfap/hyYr34qdN0/WPhZe2Mrm6SZ8G9AfrZ2WK/img.png?width=800&height=447&face=0_0_800_447,https://scrap.kakaocdn.net/dn/bttt8Q/hyYqQxMN3s/jNdaZcssRxjXMehSmH8K80/img.png?width=1123&height=630&face=549_107_785_364")'
                }}
              >
                &nbsp;
              </div>
              <div className="og-text">
                <p className="og-title" data-ke-size="size16">
                  스팀게임 추천) 천달러짜리 화분이다!! R.E.P.O. 한글패치, 게임소개,
                  가격, 사양 / REPO 리포
                </p>
                <p className="og-desc" data-ke-size="size16">
                  원 따우전트 달러?!? 괴물들을 피해 돈이 되는 물건들을 싹 쓸어옵시다!
                  리썰 컴퍼니 스타일의 꿀잼 게임 신작 등장! 스팀 R.E.P.O. 혹은 리포,
                  REPO입니다.&nbsp;&nbsp;R.E.P.O.&nbsp;REPO는 괴물들이 등장하는 맵에서
                </p>
                <p className="og-host" data-ke-size="size16">
                  subculturer-home.tistory.com
                </p>
              </div>
            </a>
          </figure>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">
            <span style={{ color: "#000000" }}>
              이상, <b>REPO 공략, 몬스터 종류 소개 정리였습니다.</b> 물건을 조심히
              다뤄야만 하는 리썰컴퍼니! 소소한 팁과 몬스터 정보가 즐거운 레포 플레이에
              도움이 되었으면 좋겠습니다.
            </span>
          </p>
          <p data-ke-size="size16">&nbsp;</p>
        </div>
      </div>
    </Game1Wrapper>
  );
};

export default Game1;

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