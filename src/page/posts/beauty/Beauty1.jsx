import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./beauty1.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/beauty1.json";

const Beauty1 = () => {
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
          <div id="wrap" style={{height: "auto !important"}}>
          <section id="container" style={{height: "auto !important"}}>
          <ContentWrapper className="content-wrap" style={{height: "auto !important"}}>
          <article id="content" style={{height: "auto !important", width: "100%", padding: "0", margin: "0"}}>
            <div className="inner" style={{ height: "auto !important" }}>
              <div
                className="post-cover"
                style={{
                  backgroundImage:
                    "url(https://blog.kakaocdn.net/dn/ZmtA8/btsrgO6Phk1/DhM9EXfVvc1keEH8xBmBfK/img.png)"
                }}
              >
                <div className="inner">
                  <span className="category">뷰티</span>
                  <h1>[내돈내산] 남성 기초 화장품 추천! 비오템 옴므 포스 수프림 라인</h1>
                  <span className="meta">
                    <span className="author">by 바다창고</span>
                    <span className="date">2023. 8. 16.</span>
                  </span>
                </div>
              </div>
              <div className="entry-content" style={{ height: "auto !important" }}>
                {/* 광고 1 */}
                <Advertise avenue={selectedAvenue[0]} location={"0"} />
                <div
                  className="tt_article_useless_p_margin contents_style"
                  style={{ height: "auto !important" }}
                >
                  <p data-ke-size="size16">
                    필자는 36년 가까이 스킨/로션/선크림을 바르지 않고 살았다.
                  </p>
                  <p data-ke-size="size16">
                    귀찮기도 하거니와 중학교 시절 스킨, 로션 바르고나면 여드름이 생긴다고
                    생각하여 바르지 않았다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">
                    어느 날 아내 피부를 보고나서 주름이 자글자글하여 랑콤 압솔뤼 세트를
                    사줬는데,&nbsp;
                  </p>
                  <p data-ke-size="size16">내 피부도 보고나니 별반 다르지 않았다.&nbsp;</p>
                  <p data-ke-size="size16">
                    모공도 크고, 코에 피지도 많이 보이고 얼굴이 거칠고 피부가 더러워
                    보인다...
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">관리하는 남자 vs 관리하지 않는 남자</p>
                  <p data-ke-size="size16">
                    20대 후반까지는 느끼지 못할 수도 있지만 그 차이는 30대 중후반 부터
                    극명하게 갈린다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">
                    남자는 남성호르몬인 테스토스테론이 진피층을 두껍게 만들어 피부를
                    탄력있게 만들어 주어,
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    주름이 좀 더 늦게 생기긴 하는데,&nbsp;<span>&nbsp;</span>주름이 한번
                    생기면 훨씬 깊게 생긴다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    특히 남성 호르몬으로 인해 여자보다 피지선이 발달하여 피지가 매우 많이
                    분비된다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    남성과 여성의 차이가 절대적인 것은 아니기 때문에 각 피부에 맞게
                    기초화장품을 선택하는 것이 중요하다.
                  </p>
                  <p data-ke-size="size16">
                    피부는 여간해선 좋아지지 않는다. 노화를 늦출 뿐.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <blockquote
                    style={{ color: "#666666", textAlign: "left" }}
                    data-ke-style="style2"
                  >
                    남성들도 관리해야 하는 시대다!
                  </blockquote>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    &nbsp;
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    남자들은 예로부터 귀찮기도 하고, 피부 관리하는 사람들도 거의 없기 때문에
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    기초화장품을 대부분 스킨/로션만 쓰는 사람들이 대부분이다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    &nbsp;
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    여자들은 아이크림, 아이세럼, 토너, 크림, 수분크림이 종류별로 기초 화장품
                    한번 바를 때 어마무시하다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    기초화장품에 투자하는 비용이 어마어마하다. 좀 쓴다 싶으면 100만원이
                    훌쩍넘어간다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    &nbsp;
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    남자들은 스킨/로션 세트에 대부분의 브랜드가 10만원 미만이다
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    남자들도 관리해야 하는 시대다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    요새 어릴 때부터 관리하는 남자들과 관리하지 않은 남자들의 피부상태는
                    격이 다르다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    같은 나이라도 폭삭 늙어보이는 사람과, 탱글탱글하고 뽀샤시한 피부를 가진
                    사람이 같이 있으면
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    상대적으로 비교되기 쉽다.
                  </p>
                  <p style={{ color: "#333333", textAlign: "start" }} data-ke-size="size16">
                    &nbsp;
                  </p>
                  <blockquote data-ke-style="style2">비오템 포스 수프림&nbsp;</blockquote>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">
                    이미 망해버린 내 피부를 보며, 뭐라도 해야한다고 생각했다.
                  </p>
                  <p data-ke-size="size16">30대 후반인 나에게 맞는 기초 화장품은 뭘까!?</p>
                  <p data-ke-size="size16">
                    피부가 이미 노화가 시작되어 망해버린 내 피부에 어떤 것을 써야할까?
                  </p>
                  <p data-ke-size="size16">
                    한참을 고민하다보니, 이왕 사는거 좋은 제품을 구매하기로 결정했다.
                  </p>
                  <p data-ke-size="size16">
                    특히 안티에이징(노화방지) 케어에 중점을 뒀고,&nbsp;
                  </p>
                  <p data-ke-size="size16">
                    비오템 포스 수프림 세트를 구매했다. 대략 1년정도 발라보았고, 만족도는
                    최상이다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p style={{ textAlign: "center" }} data-ke-size="size16">
                    비오템 옴므 포스 수프림 세트
                  </p>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1184}
                    data-origin-height={851}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/ZmtA8/btsrgO6Phk1/DhM9EXfVvc1keEH8xBmBfK/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/ZmtA8/btsrgO6Phk1/DhM9EXfVvc1keEH8xBmBfK/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/ZmtA8/btsrgO6Phk1/DhM9EXfVvc1keEH8xBmBfK/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZmtA8%2FbtsrgO6Phk1%2FDhM9EXfVvc1keEH8xBmBfK%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={600}
                        height={431}
                        data-origin-width={1184}
                        data-origin-height={851}
                        data-phocus-index={0}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <p data-ke-size="size16">
                    일단 비오템 옴므 포스 수프림은 남성라인 중에 최상위 라인이다.
                  </p>
                  <p data-ke-size="size16">
                    구성은 GEL, 로션, 에센스, 세럼, 크림 6종으로 이뤄져있다. GEL(겔)은
                    공식홈페이지에는 모이스춰라이저 라고 써있다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">
                    포스 수프림에는 프로 레티놀, 라이프 플랑크톤, 블루 알개 추출물,
                    아데노신의 4가지 대표 성분이 들어가는데
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">□ 레티놀</p>
                  <p data-ke-size="size16">
                    레티놀은 피부노화 및 주름개선의 대표적인 성분으로 여드름, 기미 주근깨,
                    피부각질제거와 피지분비를 억제하고 약간의 미백 효과가 있다.&nbsp;
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">□ 라이프 플랑크톤</p>
                  <p data-ke-size="size16">
                    피부 생태계를 건강하게 유지하고 활성화 시켜 피부 근본을 강화 시키는 성분
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">□ 블루 알개 추출물</p>
                  <p data-ke-size="size16">
                    35억 년 전부터 지구상에 존재한 해양 생물로 인디언들이 신이 내린
                    선물이라고 부를 정도로 번식력과 자생력이 뛰어난 청조류다. 생명력과 영양
                    성분이 가득한 블루 알개 추출물이 들어있어 피부 효과가 있다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">□ 아데노신</p>
                  <p data-ke-size="size16">주름 개선 기능성 주 성분</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={753}
                    data-origin-height={745}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/kyzGD/btsrguU2AgP/lX3qNvX22rJVyVkGwipQT1/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/kyzGD/btsrguU2AgP/lX3qNvX22rJVyVkGwipQT1/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/kyzGD/btsrguU2AgP/lX3qNvX22rJVyVkGwipQT1/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkyzGD%2FbtsrguU2AgP%2FlX3qNvX22rJVyVkGwipQT1%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={753}
                        height={745}
                        data-origin-width={753}
                        data-origin-height={745}
                        data-phocus-index={1}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">{/* 8월2 */}</p>
                  <Advertise avenue={selectedAvenue[1]} location={"1"} />
                  <p />
                  <p data-ke-size="size16"></p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <blockquote data-ke-style="style2">
                    비오템 옴므 포스 수프림 제품 소개
                  </blockquote>
                  <blockquote data-ke-style="style3">
                    1. 비오템 옴므 포스 수프림 로션 (200ml, 96,000원)
                    <br />
                    <br />
                    로션이다. 그러나 GEL이 보통 일반적으로 부르는 로션이고, 이것은 약간
                    토너의 개념이라고 한다.
                    <br />
                    실제로 써보면 묽은 제형의 로션과 다를 바 없고 로션처럼 사용한다.
                    <br />
                    <br />
                    셀러도 로션 대용으로 사용하는 것을 추천한다.
                    <br />
                    포스 수프림 라인에 세럼, 에센스, 크림도 사용해야 하기 때문에
                    <br />
                    <br />
                    포스 수프림 수분감 높은 로션을 추천한다.
                  </blockquote>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={352}
                    data-origin-height={773}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/cdvv0j/btsrgkybZgx/lmAnbrvFC98YXxY0XaVKoK/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/cdvv0j/btsrgkybZgx/lmAnbrvFC98YXxY0XaVKoK/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/cdvv0j/btsrgkybZgx/lmAnbrvFC98YXxY0XaVKoK/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcdvv0j%2FbtsrgkybZgx%2FlmAnbrvFC98YXxY0XaVKoK%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={200}
                        height={439}
                        data-origin-width={352}
                        data-origin-height={773}
                        data-phocus-index={2}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <blockquote data-ke-style="style3">
                    2. 비오템 옴므 포스 수프림 라이프 에센스 (150ml, 111,000원)
                    <br />
                    <br />
                    워터 타입의 에센스다.
                    <br />
                    라이프 플랑크톤, L-오크롤레우카 추출물, 아데노신 성분이 들어 있어,{" "}
                    <br />
                    피부 환경 개선, 유연한 피부, 탄력있는 피부를 만들어준다.
                    <br />
                    <br />
                    내부에{" "}
                    <b>
                      에센스 워터와 내부에 하얀 가루같은 것이 들어있어 사용 전 위 아래로
                      충분히 흔들어 얼굴 전체에 바른다.
                    </b>
                  </blockquote>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={272}
                    data-origin-height={796}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/b251Bg/btsq5c2zrRl/a1aNhwI3QGekwtEehwpve0/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/b251Bg/btsq5c2zrRl/a1aNhwI3QGekwtEehwpve0/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/b251Bg/btsq5c2zrRl/a1aNhwI3QGekwtEehwpve0/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb251Bg%2Fbtsq5c2zrRl%2Fa1aNhwI3QGekwtEehwpve0%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={200}
                        height={585}
                        data-origin-width={272}
                        data-origin-height={796}
                        data-phocus-index={3}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <blockquote data-ke-style="style3">
                    3. 비오템 옴므 포스 수프림 블루 세럼 (50ml, 176,000원)
                    <br />
                    <br />
                    세럼이다.. 남성들이 세럼하면 조금 생소할 것이다.
                    <br />
                    스페셜 안티에이징으로 나온 고기능성 세럼으로 남성 관리의 핵심이다.
                    <br />
                    <br />
                    블루 세럼에는 프로-레티놀 성분이 들어 있어, 햇빛을 받을 경우 자극이 올
                    수 있으니 꼭 자외선 차단제와 같이 발라주어야 한다. 귀찮으니 저녁때만
                    사용하는 것을 추천한다.
                    <br />
                    <br />
                    강력한 주름 개선과 탄력있으면서 부드러운 피부를 만들어준다.
                  </blockquote>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={297}
                    data-origin-height={637}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/denphT/btsrgRCuJGJ/tOpvTV6Exa3Kowg3ikVbak/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/denphT/btsrgRCuJGJ/tOpvTV6Exa3Kowg3ikVbak/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/denphT/btsrgRCuJGJ/tOpvTV6Exa3Kowg3ikVbak/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdenphT%2FbtsrgRCuJGJ%2FtOpvTV6Exa3Kowg3ikVbak%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={297}
                        height={637}
                        data-origin-width={297}
                        data-origin-height={637}
                        data-phocus-index={4}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">{/* 본문광고1 */}</p>
                  
                  <p />
                  <p data-ke-size="size16"></p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <blockquote data-ke-style="style3">
                    4. 비오템 옴므 포스 수프림 크림 (50ml, 185,000원)
                    <br />
                    <br />
                    크림... 또 남자들이 안바르는 제품이다..&nbsp;
                    <br />
                    남성들도 저녁에 자기전에 크림 좀 발라라...안되면 수분 크림이라도..
                    <br />
                    주름 개선, 탄력 증가 및 고영양의 토탈 안티에이징 크림이다
                    <br />
                    <br />
                    기억해라 기초 화장품 루틴은 토너 → 에센스 → 로션 → 세럼 → 크림 순이다..
                    <br />
                    위에 루틴으로 바르고 자고 일어나면 아침에 세수할 때 피부가 다르다.
                  </blockquote>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={458}
                    data-origin-height={346}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/kT5OX/btsrf2xJaBE/yFgqTYV4yuuY0gCFvaSuN1/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/kT5OX/btsrf2xJaBE/yFgqTYV4yuuY0gCFvaSuN1/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/kT5OX/btsrf2xJaBE/yFgqTYV4yuuY0gCFvaSuN1/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkT5OX%2Fbtsrf2xJaBE%2FyFgqTYV4yuuY0gCFvaSuN1%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={458}
                        height={346}
                        data-origin-width={458}
                        data-origin-height={346}
                        data-phocus-index={5}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">
                    전체적으로 번들거리지 않고, 바를 때 흡수감이 굉장히 좋다.
                  </p>
                  <p data-ke-size="size16">
                    자고 일어났을 때, 피부에 수분을 충분히 잡고 있어 자고 일어났을 때
                    퍼석퍼석한 피부를 벗어나
                  </p>
                  <p data-ke-size="size16">번들거리지 않고 윤기있어보이는 피부가 된다.</p>
                  <p data-ke-size="size16">
                    아침에 세수할 때 특히 피부의 보들보들함이 여과없이 느껴진다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">
                    특히 성공한 남자를 연상시키는 시더우드 향이 굉장히 매력적이다.
                  </p>
                  <p data-ke-size="size16">
                    묵직하고 따뜻하며 살짝 스파이시하기도 한 굉장히 매력적인 향기이다.
                  </p>
                  <p data-ke-size="size16">
                    푸석푸석하고 매마른 나무껍질같은 피부와 퀘퀘한 냄새를 풍기면 사람의
                    매력은 여과없이 떨어진다.
                  </p>
                  <p data-ke-size="size16">
                    비오템 옴므 포스 수프림 제품을 쓰면, 향수를 따로 쓰지 않아도 굉장히
                    매력적인 향기를 풍길 수 있다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <blockquote data-ke-style="style2">포스 수프림 라인 가격 정리</blockquote>
                  <figure
                    data-ke-type="image"
                    data-ke-style="alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                  />
                  <p data-ke-size="size16">토탈 56만 8천원, ml당 8,440원이다.</p>
                  <p data-ke-size="size16">
                    노화되는 30대 중반이상, 그동안 관리해본적이 없다. 기초 화장품도 제대로
                    안 발랐다 하는 분들이 있으면
                  </p>
                  <p data-ke-size="size16">과감히 자신에게 투자해보기 바란다.</p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">
                    내 블로그 다른 포스팅에 여성 기초 화장품 비교 글이 있다.
                  </p>
                  <p data-ke-size="size16">
                    랑콤 vs 디올 기초 화장품 비교인데 여성용 기초는 1세트에 185만원,
                    241만원이다.. ml당 단가도 6만원, 7만원대이다.
                  </p>
                  <p data-ke-size="size16">&nbsp;</p>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={978}
                    data-origin-height={421}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/d9A1LT/btsrgn9uX99/ioxPxjU1ZTZ2HZLyJTwHak/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/d9A1LT/btsrgn9uX99/ioxPxjU1ZTZ2HZLyJTwHak/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/d9A1LT/btsrgn9uX99/ioxPxjU1ZTZ2HZLyJTwHak/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd9A1LT%2Fbtsrgn9uX99%2FioxPxjU1ZTZ2HZLyJTwHak%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={978}
                        height={421}
                        data-origin-width={978}
                        data-origin-height={421}
                        data-phocus-index={6}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">{/* 8월 */}</p>
                  <p />
                  {/* 광고 3 */}
                  <Advertise avenue={selectedAvenue[2]} location={"2"} />
                  <p data-ke-size="size16">
                    56.8만원 한번 사면 꽤나 오래쓴다. 월 10만원정도 자신에게 투자는 가능하지
                    않을까라는 생각을 할 수 있도록
                  </p>
                  <p data-ke-size="size16">
                    아래 여성용 기초화장품 비교 금액을 보며 포스팅을 마친다.
                  </p>
                  <p />
                  <figure
                    className="imageblock alignCenter"
                    data-ke-mobilestyle="widthOrigin"
                    data-origin-width={1081}
                    data-origin-height={528}
                  >
                    {/* <span
                      data-url="https://blog.kakaocdn.net/dn/bVMdpw/btsrgOsd2y9/SfvF0scrxKTBvyxS8hLgZk/img.png"
                      data-phocus="https://blog.kakaocdn.net/dn/bVMdpw/btsrgOsd2y9/SfvF0scrxKTBvyxS8hLgZk/img.png"
                    > */}
                      <img
                        src="https://blog.kakaocdn.net/dn/bVMdpw/btsrgOsd2y9/SfvF0scrxKTBvyxS8hLgZk/img.png"
                        srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVMdpw%2FbtsrgOsd2y9%2FSfvF0scrxKTBvyxS8hLgZk%2Fimg.png"
                        onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                        loading="lazy"
                        width={1081}
                        height={528}
                        data-origin-width={1081}
                        data-origin-height={528}
                        data-phocus-index={7}
                      />
                    {/* </span> */}
                  </figure>
                  <p />
                  <p data-ke-size="size16">&nbsp;</p>
                  <p data-ke-size="size16">&nbsp;</p>
                </div>
              </div>
            </div>
          </article>
          </ContentWrapper>
          </section>
          </div>
        </Game1Wrapper>
    );
};

export default Beauty1;

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

const ContentWrapper = styled.div`
  height: auto !important;

  &::before {
    background-color: black;
  }
`;