/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.css";
import "../components/carousel copy.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../components/Header";

function Style() {
  const { state } = useLocation();
  const handleOnClick = (index: number, e: any) => {
    const list = e.props.children.key;
    console.log(list);
  };

  useEffect(() => {
    if (state) console.log(state);
  }, []);

  const onSubmit = async (index: number, e: any) => {
    const file = e.target.files[0];
    const list = e.props.children.props.id;
    const formData = new FormData();
    formData.append("files", file);
    const formData2 = new FormData();
    formData2.append("id", list);

    console.log(list);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/style/",
      data: { formData, formData2 },
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });
  };

  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: "url(images/background.png)" }}
    >
      <Header />
      <div className="flex items-center justify-center">
        <Carousel
          showArrows
          width="30rem"
          showThumbs={false}
          infiniteLoop
          onChange={handleOnClick}
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
        </Carousel>
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
          onClick={() => onSubmit}
        >
          <Link
            to="/Results"
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
