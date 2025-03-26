import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Main = ({ post }) => {
    const posts = [
        { title: "2025년 1월(1분기) 신작 애니 추천", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVPW6f%2FbtsMbVrGofb%2F378WmaAUHNH2jOHlBeXft0%2Fimg.jpg", link: "/hobby2" },
        { title: "피자에 토마토소스 없이도 이렇게 맛있다고? 양배추피자 황금레시피", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FONLMp%2FbtsMQgvPa1V%2FwTasasw7bkKSJ383qyeih0%2Fimg.jpg", link: "/food1" },
        { title: "메이플랜드 전대륙 필수 퀘스트 돈되는 퀘스트 총 정리", thumbnail: "https://yulbin.com/wp-content/uploads/2024/07/%EB%8F%88%EB%90%98%EB%8A%94-%ED%80%98%EC%8A%A4%ED%8A%B8.png", link: "/game3" },
        { title: "[내돈내산] 남성 기초 화장품 추천! 비오템 옴므 포스 수프림 라인", thumbnail: "https://blog.kakaocdn.net/dn/ZmtA8/btsrgO6Phk1/DhM9EXfVvc1keEH8xBmBfK/img.png", link: "/beauty1" },
        { title: "2025 넷플릭스, 역대급 대작 영화 추천 라인업 공개! (최신판)", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fm8DQ0%2FbtsMci68872%2F8s6qkjJDr3AH4JlScJYtmK%2Fimg.webp", link: "/hobby1" },
        { title: "스팀게임) 흑인 사무라이와 닌자? 어쌔신 크리드 섀도우스 기본정보, 가격, 사양", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwWYsn%2FbtsMQgg4VmL%2FVVcYrjKypNOivAY9uQ8Jek%2Fimg.png", link: "/game2" },
        { title: "퍼스널 컬러별 환절기 늦 봄에서 초여름 여자 옷 코디 스타일링", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPY187%2FbtrAcaImFtT%2FdAe7qWWPkPkHoStTxwBEYK%2Fimg.png", link: "/beauty2" },
        { title: "서울 가볼만한 카페 5 곳 추천", thumbnail: "https://blog.kakaocdn.net/dn/sAzYv/btsGWK9KBMJ/dNGgGD1oBoHO7K87VeEMu0/img.jpg", link: "/food2" },
        { title: "[국내여행] 국내 당일치기 여행 추천", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkVuNu%2FbtsMdkqjZYE%2Fc21nCTJ4pVDCWglgdJwcS1%2Fimg.png", link: "/hobby3" },
        { title: "서울 송리단길 맛집 몽촌닭갈비 솔직 후기", thumbnail: "https://blog.kakaocdn.net/dn/GW2xw/btsKzTPDMBa/LRq3LMGyVkN0OGW0E85KS0/img.jpg", link: "/food3" },
        { title: "데일리룩 고민 끝! 2025 봄 유행 옷 스타일별 코디 모음", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmLcHf%2FbtsMDJiGcON%2FXNSuxuwvM39BugMjWDZh0K%2Fimg.jpg", link: "/hobby4" },
        { title: "[공략] REPO 공략, 몬스터 종류 소개 / 레포 게임 공략!", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FK2EX8%2FbtsMKxDazXd%2FHXdAk2kivzgrxKizfwgjJK%2Fimg.png", link: "/game1" },
        { title: "저렴하게 집에서 피부관리 하는법!(홈케어,내돈내산)", thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlVbWp%2FbtslbnVNefv%2F5KpSrYzgLWb3DU2gj0XXbK%2Fimg.jpg", link: "/beauty3" },
    ]
    const isPC = useMediaQuery({
        query: "(min-width: 1080px)"
    });
    const [visibleCount, setVisibleCount] = useState(4);

    const navigate = useNavigate();

    useEffect(() => {
        const updateVisibleCount = () => {
          const width = window.innerWidth;
          if (isPC) setVisibleCount(8);
          else if (width > 768) setVisibleCount(3);
          else setVisibleCount(4);
        };
    
        updateVisibleCount(); // 처음 실행
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
      }, []);

    return (
        <>
            {post ? 
            <MediaBoxWrapper>
                {post}
            </MediaBoxWrapper>
            :
            <>
                <MediaBoxWrapper>
                    <PostGrid style={{width: '100%'}}>
                        {posts.map((post, i) => (
                            <PostWrapepr key={i} onClick={() => navigate(post.link)}>
                                <PostThumbnailWrapper>
                                    <PostThumbnail src={post.thumbnail} />
                                </PostThumbnailWrapper>
                                
                                <PostTitle>
                                    {post.title}
                                </PostTitle>
                            </PostWrapepr>
                        ))}
                    </PostGrid>
                </MediaBoxWrapper>
            </>
            }
        </>
    );
};

export default Main;

const MediaBoxWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
`;

const PostGrid = styled.div`
    display: grid;
    gap: 10px;
    padding: 10px;
    max-width: 1080px;
    width: 100%;

    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const PostWrapepr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    // border: 1px solid gray;

    &:hover {
        cursor: pointer;
    }
`;

const PostThumbnailWrapper = styled.div`
    width: 320px;
    height: 180px;
    display: flex;
    align-items: center;

    overflow: hidden;
`;

const PostThumbnail = styled.img`
    width: 100%;
    // height: 100%;
    object-fit: contain;

    overflow: hidden;
`;

const PostTitle = styled.div`
    width: 100%;
    font-weight: bold;
    color: black;
    padding: 0.5rem 0;
`;