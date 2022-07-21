/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

const list = [
  { id: "1", key: "1", img: "images/palette.png" },
  { id: "2", key: "2", img: "images/caricature2.png" },
  { id: "3", key: "3", img: "images/logo.png" },
  { id: "4", key: "4", img: "images/slider.png" },
  { id: "5", key: "5", img: "images/anime2.png" },
  { id: "6", key: "6", img: "images/cartoon2.png" },
  { id: "7", key: "7", img: "images/background.png" },
  { id: "8", key: "8", img: "images/Spinner.png" },
];

export default function Results() {
  const [image, setImage] = useState("");
  const listImage = list.map(({ key, img }) => (
    <li>
      <img
        alt=""
        src={img}
        onClick={() => {
          setImage(key);
        }}
      />
    </li>
  ));
  const resultImage = list.map(({ key, img }) => (
    <div>{image === key ? <img alt="" src={img} key={key} /> : null}</div>
  ));
  return (
    <BackgroundImage>
      <Header />
      <div className="container flex justify-center items-center m-auto">
        <div className="overflow-auto h-80 w-12">
          <ul>{listImage}</ul>
        </div>
        <div className="flex justify-center items-center border-dotted h-80 w-80 p-4 border-4 ml-3">
          {resultImage}
        </div>
      </div>
      <div className="Container flex justify-center items-center mt-20">
        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ...">
          <Link
            to="/Pictureupload"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            업로드 이동
          </Link>
        </button>
        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ...">
          <Link
            to="/Style"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            선택 이동
          </Link>
        </button>
        <button className="h-10 w-40 rounded-2xl bg-purple-600 text-white ml-4 ...">
          저장하기
        </button>
      </div>
    </BackgroundImage>
  );
}
