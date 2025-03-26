import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "./hobby3.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/hobby3.json";

const Hobby3 = () => {
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
      <title>[국내여행] 국내 당일치기 여행 추천</title>
      <meta
        name="title"
        content="[국내여행] 국내 당일치기 여행 추천 :: 산다는 건"
      />
      <meta
        name="description"
        content="컴온(Communication On)이 경험하고 바라보는 여행, 일상 경험 등을 공유하고 공감하는 블로그 입니다."
      />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="산다는 건"
        href="https://runner-walker.tistory.com/rss"
      />
      <link
        rel="shortcut icon"
        href="https://runner-walker.tistory.com/favicon.ico"
      />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&subset=korean"
      />
      <link
        rel="stylesheet"
        href="https://tistory1.daumcdn.net/tistory/5632273/skin/style.css?_version_=1738369570"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            ".another_category {\n    border: 1px solid #E5E5E5;\n    padding: 10px 10px 5px;\n    margin: 10px 0;\n    clear: both;\n}\n\n.another_category h4 {\n    font-size: 12px !important;\n    margin: 0 !important;\n    border-bottom: 1px solid #E5E5E5 !important;\n    padding: 2px 0 6px !important;\n}\n\n.another_category h4 a {\n    font-weight: bold !important;\n}\n\n.another_category table {\n    table-layout: fixed;\n    border-collapse: collapse;\n    width: 100% !important;\n    margin-top: 10px !important;\n}\n\n* html .another_category table {\n    width: auto !important;\n}\n\n*:first-child + html .another_category table {\n    width: auto !important;\n}\n\n.another_category th, .another_category td {\n    padding: 0 0 4px !important;\n}\n\n.another_category th {\n    text-align: left;\n    font-size: 12px !important;\n    font-weight: normal;\n    word-break: break-all;\n    overflow: hidden;\n    line-height: 1.5;\n}\n\n.another_category td {\n    text-align: right;\n    width: 80px;\n    font-size: 11px;\n}\n\n.another_category th a {\n    font-weight: normal;\n    text-decoration: none;\n    border: none !important;\n}\n\n.another_category th a.current {\n    font-weight: bold;\n    text-decoration: none !important;\n    border-bottom: 1px solid !important;\n}\n\n.another_category th span {\n    font-weight: normal;\n    text-decoration: none;\n    font: 10px Tahoma, Sans-serif;\n    border: none !important;\n}\n\n.another_category_color_gray, .another_category_color_gray h4 {\n    border-color: #E5E5E5 !important;\n}\n\n.another_category_color_gray * {\n    color: #909090 !important;\n}\n\n.another_category_color_gray th a.current {\n    border-color: #909090 !important;\n}\n\n.another_category_color_gray h4, .another_category_color_gray h4 a {\n    color: #737373 !important;\n}\n\n.another_category_color_red, .another_category_color_red h4 {\n    border-color: #F6D4D3 !important;\n}\n\n.another_category_color_red * {\n    color: #E86869 !important;\n}\n\n.another_category_color_red th a.current {\n    border-color: #E86869 !important;\n}\n\n.another_category_color_red h4, .another_category_color_red h4 a {\n    color: #ED0908 !important;\n}\n\n.another_category_color_green, .another_category_color_green h4 {\n    border-color: #CCE7C8 !important;\n}\n\n.another_category_color_green * {\n    color: #64C05B !important;\n}\n\n.another_category_color_green th a.current {\n    border-color: #64C05B !important;\n}\n\n.another_category_color_green h4, .another_category_color_green h4 a {\n    color: #3EA731 !important;\n}\n\n.another_category_color_blue, .another_category_color_blue h4 {\n    border-color: #C8DAF2 !important;\n}\n\n.another_category_color_blue * {\n    color: #477FD6 !important;\n}\n\n.another_category_color_blue th a.current {\n    border-color: #477FD6 !important;\n}\n\n.another_category_color_blue h4, .another_category_color_blue h4 a {\n    color: #1960CA !important;\n}\n\n.another_category_color_violet, .another_category_color_violet h4 {\n    border-color: #E1CEEC !important;\n}\n\n.another_category_color_violet * {\n    color: #9D64C5 !important;\n}\n\n.another_category_color_violet th a.current {\n    border-color: #9D64C5 !important;\n}\n\n.another_category_color_violet h4, .another_category_color_violet h4 a {\n    color: #7E2CB5 !important;\n}\n"
        }}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://tistory1.daumcdn.net/tistory_admin/userblog/userblog-162c8e39a436ad2444f690db8167cec245343d6c/static/style/revenue.css"
      />
      <link
        rel="canonical"
        href="https://runner-walker.tistory.com/entry/%EA%B5%AD%EB%82%B4%EC%97%AC%ED%96%89-%EA%B5%AD%EB%82%B4-%EB%8B%B9%EC%9D%BC%EC%B9%98%EA%B8%B0-%EC%97%AC%ED%96%89-%EC%B6%94%EC%B2%9C"
      />
      {/* BEGIN STRUCTURED_DATA */}
      {/* END STRUCTURED_DATA */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://tistory1.daumcdn.net/tistory_admin/userblog/userblog-162c8e39a436ad2444f690db8167cec245343d6c/static/style/dialog.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="//t1.daumcdn.net/tistory_admin/www/style/top/font.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://tistory1.daumcdn.net/tistory_admin/userblog/userblog-162c8e39a436ad2444f690db8167cec245343d6c/static/style/postBtn.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://tistory1.daumcdn.net/tistory_admin/userblog/userblog-162c8e39a436ad2444f690db8167cec245343d6c/static/style/tistory.css"
      />
      <amp-auto-ads
        type="adsense"
        data-ad-client="ca-pub-2540283324554655"
      ></amp-auto-ads>
      {/* 사이드바 서랍형일때 wrap-right / wrap-drawer */}
      <div id="wrap" className="wrap-right" style={{ height: "auto !important" }}>
        {/* container */}
        <div id="container" style={{ height: "auto !important" }}>
          <main className="main" style={{ height: "auto !important" }}>
            {/* area-main */}
            <div className="area-main" style={{ height: "auto !important" }}>
              {/* s_list / 카테고리, 검색 리스트 */}
              <div className="area-common"></div>
              {/* // s_list / 카테고리, 검색 리스트 */}
              {/* area-view / 뷰페이지 및 기본 영역 */}
              <div className="area-view" style={{ height: "auto !important" }}>
                {/* s_article_rep */}
                {/* s_permalink_article_rep / 뷰페이지 */}
                {/* 이미지가 없는 경우 article-header-noimg */}
                <div
                  className="article-header"
                  thumbnail="https://img1.daumcdn.net/thumb/R1440x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/tZKY8/btsMbBmAXLw/ESovKJ72kHeibGhvuZFvG0/img.png"
                  style={{
                    backgroundImage:
                      'url("https://img1.daumcdn.net/thumb/R1440x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/tZKY8/btsMbBmAXLw/ESovKJ72kHeibGhvuZFvG0/img.png")'
                  }}
                >
                  <div className="inner-header" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div className="box-meta">
                      <p className="category">2. 국내여행 리뷰</p>
                      <h2 className="title-article">
                        [국내여행] 국내 당일치기 여행 추천
                      </h2>
                      <div className="box-info">
                        <span className="writer">컴온</span>
                        <span className="date">2025. 2. 9. 21:16</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 에디터 영역 */}
                <div className="article-view" style={{ height: "auto !important" }}>
                  <Advertise avenue={selectedAvenue[0]} location={"0"} />
                  <div
                    className="tt_article_useless_p_margin contents_style"
                    style={{ height: "auto !important" }}
                  >
                    <h2 data-ke-size="size26">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        <b>
                          [국내여행]&nbsp;국내&nbsp;당일치기&nbsp;여행&nbsp;추천
                        </b>
                      </span>
                    </h2>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        안녕하세요? 이번시간에는 서울근교에서 당일치기로 잠시 바람을
                        쐬고 오실 수 있는 곳을 소개해 드립니다. 겨울철에는 주로
                        실내를 찾게 되는데, 가끔씩은 아니 아주 가끔일 수 있겠으나
                        시원한 바람을 맞으며 산보하며 마음과 정신을 정화? 하고 싶을
                        때 제격인 곳입니다.
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        이곳은 바로 천리포 수목원(Chollipo Arboretum
                        Foundation)인데요, 우리나라 최고의 수목원이라고 타이틀이
                        달려 있다는 데... 당일치기로 Best Choice 인 곳입니다.
                      </span>
                    </p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        미국에서 귀화한 민병갈 박사(Dr Carl Ferris Miller)가 오랜
                        한국생활 중에 1960년 초부터 구입하기 시작한 천리포 해변에
                        지속적으로 수목원을 조성하였다고 하네요. (참조 : 위키백과)
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <h3 data-ke-size="size23">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        <b>1. 찾아가기</b>
                      </span>
                    </h3>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        차로 약 2시간 소요되는 곳입니다. 서울인근에서 겨울철
                        당일치기 여행으로 가볼 만하실 거 같아요.
                      </span>
                    </p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        [주소 :{" "}
                        <span style={{ color: "#333333", textAlign: "start" }}>
                          충청남도 태안군 소원면 천리포 1길 187 (의항리 114번지)]
                        </span>
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={1032}
                      data-origin-height={601}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/1bAmG/btsMa5BLQJK/D02NlQkOB6oaUMZVSpZzf0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/1bAmG/btsMa5BLQJK/D02NlQkOB6oaUMZVSpZzf0/img.png"
                        data-alt="1. 찾아가기"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/1bAmG/btsMa5BLQJK/D02NlQkOB6oaUMZVSpZzf0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1bAmG%2FbtsMa5BLQJK%2FD02NlQkOB6oaUMZVSpZzf0%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={349}
                          data-origin-width={1032}
                          data-origin-height={601}
                          data-phocus-index={0}
                        />
                      </span>
                      <figcaption>1. 찾아가기</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <h3 data-ke-size="size23">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        <b>2. 둘러보기</b>
                      </span>
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      />
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      />
                    </h3>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        잠시 둘러보시겠습니다. 아래와 같은 분위기(고요한 숲에 형성된
                        연못 같은)는 해외 공원에서나 볼만한 장면이 아닌가 싶습니다.
                        자연경관은 자연만이 아닌 마음도 정화되는 거 같아요.
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/kVuNu/btsMdkqjZYE/c21nCTJ4pVDCWglgdJwcS1/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/kVuNu/btsMdkqjZYE/c21nCTJ4pVDCWglgdJwcS1/img.png"
                        data-alt="2. 고요한 숲속의 연못"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/kVuNu/btsMdkqjZYE/c21nCTJ4pVDCWglgdJwcS1/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkVuNu%2FbtsMdkqjZYE%2Fc21nCTJ4pVDCWglgdJwcS1%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={1}
                        />
                      </span>
                      <figcaption>2. 고요한 숲속의 연못</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/tZKY8/btsMbBmAXLw/ESovKJ72kHeibGhvuZFvG0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/tZKY8/btsMbBmAXLw/ESovKJ72kHeibGhvuZFvG0/img.png"
                        data-alt="3. 연못의 정제된 분위기"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/tZKY8/btsMbBmAXLw/ESovKJ72kHeibGhvuZFvG0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtZKY8%2FbtsMbBmAXLw%2FESovKJ72kHeibGhvuZFvG0%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={2}
                        />
                      </span>
                      <figcaption>3. 연못의 정제된 분위기</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        아래는 갈림길이 보이는 데, 심적으로 고민이 있을 때 보다 보니
                        꼭 인생의 선택에 놓여있는 듯합니다. 그런데 결국은 하나로
                        만나는 거 같아요.
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/vzm4R/btsMceRWXL5/FgaSnzrVyXk28zfexSYfU0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/vzm4R/btsMceRWXL5/FgaSnzrVyXk28zfexSYfU0/img.png"
                        data-alt="4. 갈림길에서"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/vzm4R/btsMceRWXL5/FgaSnzrVyXk28zfexSYfU0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fvzm4R%2FbtsMceRWXL5%2FFgaSnzrVyXk28zfexSYfU0%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={3}
                        />
                      </span>
                      <figcaption>4. 갈림길에서</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        여기는 연못을 보면서 잠시 쉬어가는 코너로 만드신 거
                        같습니다. 겨울철이라.. 정말 잠시만 쉬어가게 되네요.
                      </span>
                    </p>

                    <Advertise avenue={selectedAvenue[1]} location={"1"} />

                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/leCOp/btsMbqlo9Lp/kpwJzWxFYOKoOcpdqQm5fk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/leCOp/btsMbqlo9Lp/kpwJzWxFYOKoOcpdqQm5fk/img.png"
                        data-alt="5. 쉬어가는 코너에서"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/leCOp/btsMbqlo9Lp/kpwJzWxFYOKoOcpdqQm5fk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FleCOp%2FbtsMbqlo9Lp%2FkpwJzWxFYOKoOcpdqQm5fk%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={4}
                        />
                      </span>
                      <figcaption>5. 쉬어가는 코너에서</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bmqnGo/btsMcrXSgRP/Ok8vzm13eWSw2ojwukAk2K/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bmqnGo/btsMcrXSgRP/Ok8vzm13eWSw2ojwukAk2K/img.png"
                        data-alt="6. 노란 집"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bmqnGo/btsMcrXSgRP/Ok8vzm13eWSw2ojwukAk2K/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmqnGo%2FbtsMcrXSgRP%2FOk8vzm13eWSw2ojwukAk2K%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={5}
                        />
                      </span>
                      <figcaption>6. 노란 집</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/7mAUp/btsMaMWF4Sn/iPVKKCoJ5Hnw401CyBk4ak/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/7mAUp/btsMaMWF4Sn/iPVKKCoJ5Hnw401CyBk4ak/img.png"
                        data-alt="7. 기와집"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/7mAUp/btsMaMWF4Sn/iPVKKCoJ5Hnw401CyBk4ak/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7mAUp%2FbtsMaMWF4Sn%2FiPVKKCoJ5Hnw401CyBk4ak%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={6}
                        />
                      </span>
                      <figcaption>7. 기와집</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        중간에 실내 온실이 있는데요, 여기서 잠시 몸을 녹이시면
                        됩니다. 이렇게 온실에 있다 보니, 마음까지도 녹으면서
                        피어있는 꽃들이 더욱더 아름답게 보이네요.
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/tlDSt/btsMdpdXOxt/a3DtxRwhjdkXsyv87e2Hc0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/tlDSt/btsMdpdXOxt/a3DtxRwhjdkXsyv87e2Hc0/img.png"
                        data-alt="8. 온실 속에 화초들"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/tlDSt/btsMdpdXOxt/a3DtxRwhjdkXsyv87e2Hc0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtlDSt%2FbtsMdpdXOxt%2Fa3DtxRwhjdkXsyv87e2Hc0%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={7}
                        />
                      </span>
                      <figcaption>8. 온실 속에 화초들</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        이곳의 또 하나의 별미, 바닷가를 보실 수 있는데요, 답답한
                        마음을 가져오셨다면, 여기서 털어 벌이시면 될 거 같습니다.
                        확실하게 털 수 있게 시원한 바닷바람이 마음까지도 가볍게
                        하려고 도움을 주는 거 같습니다.
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/t9J1r/btsMdsaGDUF/h6VcOFjgV0wmhhQGZm7To0/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/t9J1r/btsMdsaGDUF/h6VcOFjgV0wmhhQGZm7To0/img.png"
                        data-alt="9. 서해 바닷가 바라보기"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/t9J1r/btsMdsaGDUF/h6VcOFjgV0wmhhQGZm7To0/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ft9J1r%2FbtsMdsaGDUF%2Fh6VcOFjgV0wmhhQGZm7To0%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={8}
                        />
                      </span>
                      <figcaption>9. 서해 바닷가 바라보기</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        여름에 왔다면 의자에서 잠시 광합성을 해보지 않았을까 생각해
                        봅니다.
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bEVcdK/btsMbY9z9WW/wc5VpKFGUtriNSRUBWaefK/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bEVcdK/btsMbY9z9WW/wc5VpKFGUtriNSRUBWaefK/img.png"
                        data-alt="10. 바다를 바라보는 의자들"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bEVcdK/btsMbY9z9WW/wc5VpKFGUtriNSRUBWaefK/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbEVcdK%2FbtsMbY9z9WW%2Fwc5VpKFGUtriNSRUBWaefK%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={9}
                        />
                      </span>
                      <figcaption>10. 바다를 바라보는 의자들</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={2000}
                      data-origin-height={924}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bxDwSC/btsMcIE2JbZ/rr41aKmP7ZkWgvTxI4lSVk/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bxDwSC/btsMcIE2JbZ/rr41aKmP7ZkWgvTxI4lSVk/img.png"
                        data-alt="11. 해안가 바라보기"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bxDwSC/btsMcIE2JbZ/rr41aKmP7ZkWgvTxI4lSVk/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxDwSC%2FbtsMcIE2JbZ%2Frr41aKmP7ZkWgvTxI4lSVk%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={277}
                          data-origin-width={2000}
                          data-origin-height={924}
                          data-phocus-index={10}
                        />
                      </span>
                      <figcaption>11. 해안가 바라보기</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={1040}
                      data-origin-height={1125}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/bTh8wt/btsMbxkkM1j/teK0A21mzkqkNVr2o89gk1/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/bTh8wt/btsMbxkkM1j/teK0A21mzkqkNVr2o89gk1/img.png"
                        data-alt="12. 걸어가면서 느껴보는 전경"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/bTh8wt/btsMbxkkM1j/teK0A21mzkqkNVr2o89gk1/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbTh8wt%2FbtsMbxkkM1j%2FteK0A21mzkqkNVr2o89gk1%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={649}
                          data-origin-width={1040}
                          data-origin-height={1125}
                          data-phocus-index={11}
                        />
                      </span>
                      <figcaption>12. 걸어가면서 느껴보는 전경</figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>
                    <p />
                    <figure
                      className="imageblock alignLeft"
                      data-ke-mobilestyle="widthOrigin"
                      data-origin-width={1039}
                      data-origin-height={1125}
                    >
                      <span
                        data-url="https://blog.kakaocdn.net/dn/sHJDV/btsMcjyTcBP/ICanaPUJ35NgVQ2KHS9qEK/img.png"
                        data-phocus="https://blog.kakaocdn.net/dn/sHJDV/btsMcjyTcBP/ICanaPUJ35NgVQ2KHS9qEK/img.png"
                        data-alt="13. 봄을 기다리는 꽃 몽우리들과 파스텔 톤 정원"
                      >
                        <img
                          src="https://blog.kakaocdn.net/dn/sHJDV/btsMcjyTcBP/ICanaPUJ35NgVQ2KHS9qEK/img.png"
                          srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsHJDV%2FbtsMcjyTcBP%2FICanaPUJ35NgVQ2KHS9qEK%2Fimg.png"
                          onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';"
                          loading="lazy"
                          width={600}
                          height={650}
                          data-origin-width={1039}
                          data-origin-height={1125}
                          data-phocus-index={12}
                        />
                      </span>
                      <figcaption>
                        13. 봄을 기다리는 꽃 몽우리들과 파스텔 톤 정원
                      </figcaption>
                    </figure>
                    <p />
                    <p data-ke-size="size16">&nbsp;</p>

                    <Advertise avenue={selectedAvenue[2]} location={"2"} />

                    <h3 data-ke-size="size23">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        <b>3. 마무리하며...</b>
                      </span>
                    </h3>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        1) 이곳은 정말 아름답게 잘 조성해 놓은 바다전망
                        수목원인데요, 전체적으로 다 돌아보지는 못하였는 데 민병갈
                        박사님의 열정에 존경을 표하고 싶을 정도로 아름다운 거
                        같습니다. 태안지역에 가볼 만한 곳으로 추천합니다.
                      </span>
                    </p>
                    <p data-ke-size="size16">&nbsp;</p>
                    <p data-ke-size="size16">
                      <span
                        style={{
                          fontFamily:
                            'AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif'
                        }}
                      >
                        2) 입장료는 유료이며, 봄을 기다리는 마음으로 퇴실 시 화원에
                        들리셔서 오랜만에 꽃과 식물을 키워보시는 것은 어떠신지요.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Game1Wrapper>
  );
};

export default Hobby3;

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