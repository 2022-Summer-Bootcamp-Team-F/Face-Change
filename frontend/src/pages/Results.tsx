/* eslint-disable react/button-has-type */
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

export default function Results() {
  return (
    <BackgroundImage>
      <Header />
      <div className="container flex justify-center items-center m-auto">
        <div className="overflow-auto h-80 w-12">
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
          <img alt="" src="images/palette.png" />
        </div>
        <div className="flex justify-center items-center border-dotted h-80 w-80 p-4 border-4 ml-3 ...">
          <p>결과 이미지</p>
        </div>
      </div>
      <div className="Container flex justify-center items-center mt-20">
        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ...">
          업로드 이동
        </button>
        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ...">
          선택 이동
        </button>
        <button className="h-10 w-40 rounded-2xl bg-purple-600 text-white ml-4 ...">
          저장하기
        </button>
      </div>
    </BackgroundImage>
  );
}
