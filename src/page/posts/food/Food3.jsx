import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import "../postStyle.css";

import Advertise from "../../../ads/Advertise";
import AdSense from "../../../ads/adAvenue/AdSense";
import Dable from "../../../ads/adAvenue/Dable";
import Ladder from "../../../ads/adAvenue/Ladder";

import embedding from "../../../embedding/post/food3.json";

const Food3 = () => {
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
            <article id="content" style={{padding: "0", margin: "0"}}>
                <div className="inner" style={{padding: "0"}}>
                    <div
                    className="post-cover"
                    style={{
                        backgroundImage:
                        "url(https://blog.kakaocdn.net/dn/blSxfO/btsKzrTCIyt/sx0UaWZ0rHhpGbByfu0e10/img.png)"
                    }}
                    >
                    <div className="inner">
                        <span className="category">카테고리 없음</span>
                        <h1>서울 송리단길 맛집 몽촌닭갈비 솔직 후기</h1>
                        <span className="meta">
                        <span className="author">by 쭈까부부</span>
                        <span className="date">2024. 11. 7.</span>
                        </span>
                    </div>
                    </div>
                    <div className="entry-content" id="article-view">
                    {/* 광고 1 */}
                    <Advertise avenue={selectedAvenue[0]} location={"0"} />

                    <div className="contents_style">
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        안녕하세요
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        쭈까부부입니다:-)
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        2월달쯤에 가서 먹었던 곳인데 추워지니까 닭갈비가 또 생각이나더라구요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        이 날은 일보구 남편이랑 남편 친구들이랑 송리단길을 다녀왔어요.
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        오늘 저녁 메뉴는 바로바로 닭갈비입니다~!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={900}
                        data-origin-height={676}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/GW2xw/btsKzTPDMBa/LRq3LMGyVkN0OGW0E85KS0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/GW2xw/btsKzTPDMBa/LRq3LMGyVkN0OGW0E85KS0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/GW2xw/btsKzTPDMBa/LRq3LMGyVkN0OGW0E85KS0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGW2xw%2FbtsKzTPDMBa%2FLRq3LMGyVkN0OGW0E85KS0%2Fimg.jpg"
                            loading="lazy"
                            width={764}
                            height={574}
                            data-origin-width={900}
                            data-origin-height={676}
                            data-phocus-index={0}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        맛집은 역시 웨이팅이 있는걸까요...?
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        저는 음식을 먹으러갈때 웨이팅이 있으면 아무리 맛집이라도 패스하는데
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        남편은 기다리고 맛있는걸 먹는 위주라 같이 기다렸습니다ㅎㅎ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={466}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/kOLOa/btsKzmrt1Fo/JW7Jn5dBu0y7K6lKNxWz5K/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/kOLOa/btsKzmrt1Fo/JW7Jn5dBu0y7K6lKNxWz5K/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/kOLOa/btsKzmrt1Fo/JW7Jn5dBu0y7K6lKNxWz5K/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkOLOa%2FbtsKzmrt1Fo%2FJW7Jn5dBu0y7K6lKNxWz5K%2Fimg.jpg"
                            loading="lazy"
                            width={466}
                            height={466}
                            data-origin-width={466}
                            data-origin-height={466}
                            data-phocus-index={1}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        날씨가 추워서 어떻게 기다리지 했는데 밖에 대기하는 곳에&nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        난로를 이렇게 준비해두셨더라구요!
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={621}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/dGmoP1/btsKAAvi6Tt/eaTzFHC447l4uf0Z00jWlK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/dGmoP1/btsKAAvi6Tt/eaTzFHC447l4uf0Z00jWlK/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/dGmoP1/btsKAAvi6Tt/eaTzFHC447l4uf0Z00jWlK/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdGmoP1%2FbtsKAAvi6Tt%2FeaTzFHC447l4uf0Z00jWlK%2Fimg.jpg"
                            loading="lazy"
                            width={466}
                            height={621}
                            data-origin-width={466}
                            data-origin-height={621}
                            data-phocus-index={2}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        사진에 보이시는거처럼 난로가 있어서 좋지만 머리위만 따뜻해ㅋㅋㅋㅋ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        하긴 머리랑 발만 따뜻하면 다 따뜻하니까...이렇게 긍정적으로 생각하고
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        저희 차례가 오기만을 기다렸습니다!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={621}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/dJRWUK/btsKALi0oT9/2aQjGBLWvnIg1VX2V5ksa0/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/dJRWUK/btsKALi0oT9/2aQjGBLWvnIg1VX2V5ksa0/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/dJRWUK/btsKALi0oT9/2aQjGBLWvnIg1VX2V5ksa0/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdJRWUK%2FbtsKALi0oT9%2F2aQjGBLWvnIg1VX2V5ksa0%2Fimg.jpg"
                            loading="lazy"
                            width={395}
                            height={526}
                            data-origin-width={466}
                            data-origin-height={621}
                            data-phocus-index={3}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={466}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/dpYmCh/btsKAHBaZyI/FdaM9AFNkTVdIxmuZr4BA1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/dpYmCh/btsKAHBaZyI/FdaM9AFNkTVdIxmuZr4BA1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/dpYmCh/btsKAHBaZyI/FdaM9AFNkTVdIxmuZr4BA1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdpYmCh%2FbtsKAHBaZyI%2FFdaM9AFNkTVdIxmuZr4BA1%2Fimg.jpg"
                            loading="lazy"
                            width={393}
                            height={393}
                            data-origin-width={466}
                            data-origin-height={466}
                            data-phocus-index={4}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        주차 안내도 한번 확인 해 주세요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        영업시간 : 11시30분 ~ 21시30분
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        평일 브레이크 타임 15시 ~ 17시30분
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        주말 브레이크 타임 15시 ~ 17시
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        라스트오더 14시 / 20시30분
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        주말과 평일 브레이크타임이 다르니 꼭 확인 해 주세요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={900}
                        data-origin-height={1200}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/bJ9lAB/btsKBonk4mF/vhw0bd6WzjkKUxkkOUC5zk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/bJ9lAB/btsKBonk4mF/vhw0bd6WzjkKUxkkOUC5zk/img.jpg"
                            data-alt="거울샷 (의미없음)" */}
                        {/* > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/bJ9lAB/btsKBonk4mF/vhw0bd6WzjkKUxkkOUC5zk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJ9lAB%2FbtsKBonk4mF%2Fvhw0bd6WzjkKUxkkOUC5zk%2Fimg.jpg"
                            loading="lazy"
                            width={671}
                            height={895}
                            data-origin-width={900}
                            data-origin-height={1200}
                            data-phocus-index={5}
                            />
                        {/* </span> */}
                        <figcaption>거울샷 (의미없음)</figcaption>
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        밖에서 기다리다가 너무 추워서 가게 안에 들어가서 기다렸어요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        정말 사람이 무지막지하게 너무너무 많더라구요~~~~
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={900}
                        data-origin-height={676}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/cXgsVH/btsKzzxm0jG/kk568byWnuKZs70e9MJ111/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cXgsVH/btsKzzxm0jG/kk568byWnuKZs70e9MJ111/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/cXgsVH/btsKzzxm0jG/kk568byWnuKZs70e9MJ111/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcXgsVH%2FbtsKzzxm0jG%2Fkk568byWnuKZs70e9MJ111%2Fimg.jpg"
                            loading="lazy"
                            width={643}
                            height={483}
                            data-origin-width={900}
                            data-origin-height={676}
                            data-phocus-index={6}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        자리 만석인거 보세요...와우
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        그런데 식당이 넓어서 그런지 회전률은 좋았어요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={900}
                        data-origin-height={1200}
                        >
                        
                        {/* 광고 2 */}
                        <Advertise avenue={selectedAvenue[1]} location={"1"} />

                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/WOX41/btsKzThQt1F/LQKtOFF6tejKByK7QZv8A1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/WOX41/btsKzThQt1F/LQKtOFF6tejKByK7QZv8A1/img.jpg"
                            data-alt="메뉴판" */}
                        {/* > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/WOX41/btsKzThQt1F/LQKtOFF6tejKByK7QZv8A1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWOX41%2FbtsKzThQt1F%2FLQKtOFF6tejKByK7QZv8A1%2Fimg.jpg"
                            loading="lazy"
                            width={612}
                            height={816}
                            data-origin-width={900}
                            data-origin-height={1200}
                            data-phocus-index={7}
                            />
                        {/* </span> */}
                        <figcaption>메뉴판</figcaption>
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        메뉴판이에요
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        정말 요즘 음식점은 음식점 같지 않네요..ㅎㅎㅎ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        메뉴는 크게 한방 닭갈비와 몽촌 닭갈비로 나뉘는데 저희는
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        한방 닭갈비 4인분으로 주문했습니다.
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        공기밥 4개도 같이 주문했어요
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={621}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/tFqlF/btsKA7TJg4H/hbe02MHld5cm0V2UFhjiDk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/tFqlF/btsKA7TJg4H/hbe02MHld5cm0V2UFhjiDk/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/tFqlF/btsKA7TJg4H/hbe02MHld5cm0V2UFhjiDk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtFqlF%2FbtsKA7TJg4H%2Fhbe02MHld5cm0V2UFhjiDk%2Fimg.jpg"
                            loading="lazy"
                            width={423}
                            height={564}
                            data-origin-width={466}
                            data-origin-height={621}
                            data-phocus-index={8}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={621}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/eNukQP/btsKAhbFY1x/RXuKJVkCRWwXdaWIejtTI1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/eNukQP/btsKAhbFY1x/RXuKJVkCRWwXdaWIejtTI1/img.jpg"
                            data-alt="물은 보리차" */}
                        {/* > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/eNukQP/btsKAhbFY1x/RXuKJVkCRWwXdaWIejtTI1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeNukQP%2FbtsKAhbFY1x%2FRXuKJVkCRWwXdaWIejtTI1%2Fimg.jpg"
                            loading="lazy"
                            width={416}
                            height={554}
                            data-origin-width={466}
                            data-origin-height={621}
                            data-phocus-index={9}
                            />
                        {/* </span> */}
                        <figcaption>물은 보리차</figcaption>
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        기본 반찬은 아주 간단합니다.
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        양파김치 / 샐러드 / 양배추샐러드(?) / 깻잎
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        양배추 샐러드인지는 모르겠지만 무튼 이 반찬은&nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        겨자랑 식초가 소스의 베이스가 되었는지 새콤하고 자꾸 끌리는 맛이면서도
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        너무 맛있더라구요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={621}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/FPxmj/btsKzm58lzh/eCzTn4fgo72ZWpPe8rmIO1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/FPxmj/btsKzm58lzh/eCzTn4fgo72ZWpPe8rmIO1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/FPxmj/btsKzm58lzh/eCzTn4fgo72ZWpPe8rmIO1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFPxmj%2FbtsKzm58lzh%2FeCzTn4fgo72ZWpPe8rmIO1%2Fimg.jpg"
                            loading="lazy"
                            width={466}
                            height={621}
                            data-origin-width={466}
                            data-origin-height={621}
                            data-phocus-index={10}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        주문한지 10분도 안되서 나온 한방 닭갈비 4인분!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        닭갈비인데 왜 고기가 없냐구요?
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        저 많은 야채들 밑에 숨어있습니다ㅋㅋㅋㅋ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        야채는 익으면 숨이 죽잖아여~~~~
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        야채들만 너무 많아서 '배가 부르겠나?' 했는데
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        밥이랑 같이 먹으니까 은근 배가 부르더라구요
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        (저는 개인적으로 양배추 러버, 남편은 야채 극혐^^)
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={900}
                        data-origin-height={1200}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/0twEL/btsKACmnC8H/7WVT66VksuMJK170EK9sq1/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/0twEL/btsKACmnC8H/7WVT66VksuMJK170EK9sq1/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/0twEL/btsKACmnC8H/7WVT66VksuMJK170EK9sq1/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0twEL%2FbtsKACmnC8H%2F7WVT66VksuMJK170EK9sq1%2Fimg.jpg"
                            loading="lazy"
                            width={539}
                            height={719}
                            data-origin-width={900}
                            data-origin-height={1200}
                            data-phocus-index={11}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        직원분이 한방 닭갈비를 셋팅해주고 저 귀여운 타이머로&nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        10분을 맞추고 가주셨어요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        밑에 부분만 타지 않도록 잘 저어주라고 얘기하는데&nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        다른 직원분들이 돌아다니시면서 조리도 다 해주시니
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        너무너무 편하더라구요!
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={621}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/uaABU/btsKAK5wSht/gQiSSg2jNH1ClfJRyQNj3K/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/uaABU/btsKAK5wSht/gQiSSg2jNH1ClfJRyQNj3K/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/uaABU/btsKAK5wSht/gQiSSg2jNH1ClfJRyQNj3K/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuaABU%2FbtsKAK5wSht%2FgQiSSg2jNH1ClfJRyQNj3K%2Fimg.jpg"
                            loading="lazy"
                            width={404}
                            height={538}
                            data-origin-width={466}
                            data-origin-height={621}
                            data-phocus-index={12}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={621}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/oIs6w/btsKA52EHaw/CVd5M451ZsjgAwWik5yKOk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/oIs6w/btsKA52EHaw/CVd5M451ZsjgAwWik5yKOk/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/oIs6w/btsKA52EHaw/CVd5M451ZsjgAwWik5yKOk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoIs6w%2FbtsKA52EHaw%2FCVd5M451ZsjgAwWik5yKOk%2Fimg.jpg"
                            loading="lazy"
                            width={395}
                            height={526}
                            data-origin-width={466}
                            data-origin-height={621}
                            data-phocus-index={13}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        야채랑 고기가 익을때 쯤 부추랑 당면을 넣어서&nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        마지막으로 조리를 해 주십니다!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        이건 진짜 국룰인데 닭갈비에는 당면사리 아니면 라면사리 필수죠!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={900}
                        data-origin-height={1200}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/chEbAN/btsKALpP74l/bsBauRAeGO3Z3eviHakKeK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/chEbAN/btsKALpP74l/bsBauRAeGO3Z3eviHakKeK/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/chEbAN/btsKALpP74l/bsBauRAeGO3Z3eviHakKeK/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FchEbAN%2FbtsKALpP74l%2FbsBauRAeGO3Z3eviHakKeK%2Fimg.jpg"
                            loading="lazy"
                            width={496}
                            height={661}
                            data-origin-width={900}
                            data-origin-height={1200}
                            data-phocus-index={14}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        그리고 이 소스!!!!!!!!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        땅콩소스 진짜 너 뭐야~~~~ 너무 맛있잖아~~~
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        닭갈비를 마무리로 조리 해주실때쯤 저 소스를 넣어주시는데
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        넣어주기 전에 땅콩 알러지가 있는지 먼저 여부를 여쭤봐주시더라구요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        저희 일행들을 없어서 바로 넣어달라고 했습니다
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        저 소스가 들어가서 그런지 닭갈비가 더 고소하니 맛있더라구요
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-filename="videoframe_95.png"
                        data-origin-width={374}
                        data-origin-height={500}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/b81PLL/btsKBI7bnCQ/JxyElT1UE8nzwUXMkGSUk1/img.png"
                            data-phocus="https://blog.kakaocdn.net/dn/b81PLL/btsKBI7bnCQ/JxyElT1UE8nzwUXMkGSUk1/img.png"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/b81PLL/btsKBI7bnCQ/JxyElT1UE8nzwUXMkGSUk1/img.png"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb81PLL%2FbtsKBI7bnCQ%2FJxyElT1UE8nzwUXMkGSUk1%2Fimg.png"
                            loading="lazy"
                            width={374}
                            height={500}
                            data-filename="videoframe_95.png"
                            data-origin-width={374}
                            data-origin-height={500}
                            data-phocus-index={15}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        부추랑 당면넣고 땅콩소스로 마무리!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        개인접시에 땅콩소스를 따로 주시는데 그거는
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        야채랑 고기를 찍어먹으라고 알려주시더라구요!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        닭갈비랑 땅콩소스 조합이 이렇게 잘 맞을줄이야~~~
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        (땅콩소스가 더 필요하신분은 셀프바에 있으니 마음껏 이용하시면
                        되세요^^)
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={466}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/kP40Y/btsKABgLNGw/tzNGkK6089Yh10HDYBz9Xk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/kP40Y/btsKABgLNGw/tzNGkK6089Yh10HDYBz9Xk/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/kP40Y/btsKABgLNGw/tzNGkK6089Yh10HDYBz9Xk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkP40Y%2FbtsKABgLNGw%2FtzNGkK6089Yh10HDYBz9Xk%2Fimg.jpg"
                            loading="lazy"
                            width={413}
                            height={413}
                            data-origin-width={466}
                            data-origin-height={466}
                            data-phocus-index={16}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={466}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/GtZi9/btsKAG98hrV/iH5tAcxDpXRrGKAkf5A6Uk/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/GtZi9/btsKAG98hrV/iH5tAcxDpXRrGKAkf5A6Uk/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/GtZi9/btsKAG98hrV/iH5tAcxDpXRrGKAkf5A6Uk/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGtZi9%2FbtsKAG98hrV%2FiH5tAcxDpXRrGKAkf5A6Uk%2Fimg.jpg"
                            loading="lazy"
                            width={408}
                            height={408}
                            data-origin-width={466}
                            data-origin-height={466}
                            data-phocus-index={17}
                            />
                        {/* </span> */}
                        </figure>
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={466}
                        data-origin-height={466}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/cB9V1a/btsKBo8L00i/YGKNSoQny8LVPcOiVVEq81/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/cB9V1a/btsKBo8L00i/YGKNSoQny8LVPcOiVVEq81/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/cB9V1a/btsKBo8L00i/YGKNSoQny8LVPcOiVVEq81/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcB9V1a%2FbtsKBo8L00i%2FYGKNSoQny8LVPcOiVVEq81%2Fimg.jpg"
                            loading="lazy"
                            width={403}
                            height={403}
                            data-origin-width={466}
                            data-origin-height={466}
                            data-phocus-index={18}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p data-ke-size="size16">&nbsp;</p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        저는 고기보다 야채가 우선이라서 양배추를 먹어봤는데...
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        진짜 양념 맛있다...라는 말밖에 안나오더군요ㅋㅋㅋ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        양배추도 너무 익으면 물컹하니 맛이없는데 적당히 익어서&nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        식감은 아삭하고 양념은 닭갈비 양념이라 조합이 아주 그냥 말이
                        필요없었어요ㅎㅎ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        {/* 광고 3 */}
                        <Advertise avenue={selectedAvenue[2]} location={"2"} />
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        닭갈비에 있는 고기는 뭐 말할것도 없이 양념도 너무 잘 베이고
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        잡내도 안나서 완전 전투적으로 먹었던 기억이..ㅋㅋㅋㅋ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p />
                        <figure
                        className="imageblock alignCenter"
                        data-ke-mobilestyle="widthOrigin"
                        data-origin-width={900}
                        data-origin-height={900}
                        >
                        {/* <span
                            data-url="https://blog.kakaocdn.net/dn/bhmoj7/btsKAFQZbGL/eipxV5MCwlje8ZTiad6koK/img.jpg"
                            data-phocus="https://blog.kakaocdn.net/dn/bhmoj7/btsKAFQZbGL/eipxV5MCwlje8ZTiad6koK/img.jpg"
                        > */}
                            <img
                            src="https://blog.kakaocdn.net/dn/bhmoj7/btsKAFQZbGL/eipxV5MCwlje8ZTiad6koK/img.jpg"
                            srcSet="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbhmoj7%2FbtsKAFQZbGL%2FeipxV5MCwlje8ZTiad6koK%2Fimg.jpg"
                            loading="lazy"
                            width={591}
                            height={591}
                            data-origin-width={900}
                            data-origin-height={900}
                            data-phocus-index={19}
                            />
                        {/* </span> */}
                        </figure>
                        <p />
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        닭갈비든 고기든 뭐든 다 쌈싸먹어야 더 맛있는거 아시죠?
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        저는 상추보다 깻잎파라서 깻잎에 싸먹어 봤는데
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        확실히 그냥 먹는거보다 쌈싸먹는게 훨씬 맛있어요!!
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        한방 닭갈비라 그런지 너무 자극적이지도 않으면서&nbsp;
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        계속 생각나는 맛이었네요ㅎㅎ
                        </p>
                        <p style={{ textAlign: "center" }} data-ke-size="size16">
                        &nbsp;
                        </p>
                    </div>
                    </div>
                </div>
            </article>
        </Game1Wrapper>
    );
};

export default Food3;

const Game1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;