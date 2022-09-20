/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.css";
import "../components/carousel copy.css";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/Header";
import Slider from "../components/Slide";

function Style() {
  const [count, setCount] = useState(1);
  const { state } = useLocation();

  const onCount = () => {
    setCount((prevCount) => prevCount + 1);
    if (count > 5) {
      setCount(0);
    }
    console.log(count);
  };

  useEffect(() => {
    if (state) console.log(state);
  }, []);

  const onSubmit = async () => {
    const { fileImage } = state as any;
    const formData = new FormData();
    formData.append("files", fileImage);
    formData.append("style_enum", count as any);
    console.log(formData);

    await axios({
      method: "post",
      url: "http://localhost:8000/api/images/",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const slide = () => {
    const image = [
      { id: "1", img: "images/stylegallery_img/Cartoons_00003_01.png" },
      { id: "2", img: "images/stylegallery_img/Hillary_Clinton_C00034.png" },
      { id: "3", img: "images/stylegallery_img/16031200.png" },
      { id: "4", img: "images/stylegallery_img/Cartoons_00038_07.png" },
      { id: "5", img: "images/stylegallery_img/Liv_Tyler_C00009.png" },
      { id: "6", img: "images/stylegallery_img/23075800.png" },
      { id: "7", img: "images/stylegallery_img/Cartoons_00167_01.png" },
    ];

    const [translateValue, setTranslateValue] = useState<number>(0);

    const Right = (): void => {
      if (translateValue !== 70 * (image.length - 1)) {
        setTranslateValue((prev) => prev + 70);
      } else {
        setTranslateValue(0);
      }
    };

    const Left = (): void => {
      if (translateValue !== 0) {
        setTranslateValue((prev) => prev - 70);
      } else {
        setTranslateValue(70 * (image.length - 1));
      }
    };
  };

  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: "url(images/background.png)" }}
    >
      <Header />
      <div className="block items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onClick={(swiper) => {
            swiper.slideNext();
          }}
        >
          <SwiperSlide>
            <div className="inline-block w-[200px] h-[200px] bg-[#ffff00]">
              첫번째 슬라이드
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="inline-block w-[200px] h-[200px] bg-[#ff00ff]">
              두번째 슬라이드
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="inline-block w-[200px] h-[200px] bg-[#0000ff]">
              세번째 슬라이드
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <Carousel
          showArrows
          width="30rem"
          showThumbs={false}
          infiniteLoop
          onChange={onCount}
        >
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            <img
              className="Cartoon"
              id="1"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00003_01.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            <img
              className="Caricature"
              id="2"
              alt="caricature"
              src="images//stylegallery_img/Hillary_Clinton_C00034.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            <img
              className="anime"
              id="3"
              alt="anime"
              src="images//stylegallery_img/16031200.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            <img
              className="Cartoon"
              id="4"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00038_07.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            <img
              className="Caricature"
              id="5"
              alt="caricature"
              src="images//stylegallery_img/Liv_Tyler_C00009.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            <img
              className="anime"
              id="6"
              alt="anime"
              src="images//stylegallery_img/23075800.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            <img
              className="Cartoon"
              id="7"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00167_01.png"
            />
          </div>
        </Carousel> */}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="h-10 w-40 rounded-2xl bg-blue-500 text-white ml-4 ...">
          <Link
            to="/Pictureupload"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            사진 재선택
          </Link>
        </button>
        <button
          className="h-10 w-40 rounded-2xl bg-blue-500 text-white ml-4 ..."
          onClick={onSubmit}
        >
          <Link
            to="/Loading"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            결과 보기
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Style;
