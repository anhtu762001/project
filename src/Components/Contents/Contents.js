import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";
import { SmoothHorizontalScrolling } from "../../utils";

const movies = [
    "https://www.themoviedb.org/t/p/w1280/uLluouDdIqqtB5Yrvdvt8DzAEs6.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/gNObfXTTfqX6oOxV7DUlyqVGc9R.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/sBJtfHcvefWbAw1ojiQDoOW9vn9.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/8Vhp6ZoPSsaWYytWRkm783g5heN.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/jGmC7aMqoLU0ALRKHkz3pQVV1pg.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/dKjjVuPawiREBYjREb3U5SCtfrt.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/g4PXYuqSCCroNgP94yjDDQeGS7I.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/9nq8ViDNUDM7GMAc0Shg7KsTP2Y.jpg"
];
function Contents(props) {
    const sliderRef = useRef();
    const movieRef = useRef();

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        console.log(maxScrollLeft);
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current, 250,
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft
            )
        };
    }

    const handleScrollLeft = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        console.log(maxScrollLeft);
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current, 250,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft
            )
        };
    }

    return (
        <MoviesRowContainer>
            <h1 className="heading">Hiện đang thịnh hành</h1>
            <Moviesslider ref={sliderRef}>
                {
                    movies.map((movie, index) => (
                        <div key={index} className="movieItem" ref={movieRef}>
                            <img src={movie} alt="" />
                            <div className="movieName">Movie Name</div>
                        </div>
                    ))
                }
            </Moviesslider>
            <div className="btnLeft" onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className="btnRight" onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </MoviesRowContainer>
    )
}
export default Contents;

const MoviesRowContainer = styled.div`
 background-color: var( --color-background);
 color: var(--color-white);
 padding: 20px 20px 0;
 position: relative;
 width: 100%;
 height: 100%;

 .heading{
    font-size: 18px;
    user-select: none;
 }

 .btnLeft{
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.5);
    height: 100px;
    width: 50px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover{
        background-color: rgba(0,0,0,0.8);
    }
    &:hover svg{
        opacity: 1;
        transform: scale(1.2);
    }

    svg{
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
 }
 .btnRight{
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.5);
    height: 100px;
    width: 50px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover{
        background-color: rgba(0,0,0,0.8);
    }
    &:hover svg{
        opacity: 1;
        transform: scale(1.2);
    }

    svg{
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
 }
 
 }
 `;

const Moviesslider = styled.div`
 display: grid;
 gap: 6px;
 grid-template-columns: repeat(${movies.length}, 360px);
 transition: all 0.3s linear;
 user-select: none;
 overflow-y: hidden;
 overflow-x: auto;
 overflow: hidden;
 padding-top: 28px;
 padding-bottom: 28px;
 scroll-behavior: smooth;

 &:hover .movieItem{
    opacity: 0.5;
 }
 
 .movieItem{
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover{
        opacity: 1;
        transform: scale(1.1);
        z-index: 10;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .movieName{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        text-align: center;
        font-size: 14px;
        background-color: rgba(0,0,0,0.65);
    }
 }
`;