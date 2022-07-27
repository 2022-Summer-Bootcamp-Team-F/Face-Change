import React, { useState, Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.css';
import '../components/carousel copy.css';
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';

const Sentence = styled.p`
  width: 12rem;
  height: 7.25rem;
  font-family: Inter;
  font-size: clamp(1.3rem, 10vw, 1rem);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const ChangeImage = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 1rem;

  position: relative;
`;

const Btn = styled.button`
  background-color: #9a9a9a;
  width: 16.875rem;
  height: 4rem;
  border-radius: 50px;
  border: 0;
  outline: 0;
  cursor: pointer;

  margin: 2.063rem 1.625rem 0 0.063rem;
  padding: 1.063rem 5.375rem 1.063rem 2.5rem;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  position: absolute;
  margin-left: 35%;
  bottom: 15rem;
  align-items: center;
  justify-content: center;
`;

const handleOnClick = async (index: number, item: any) => {
  console.log(item.props.children.props.id);

  const formData = new FormData();
  formData.append('selectedFile', item.props.children.props.id);

  await axios({
    method: 'post',
    url: 'http://127~~',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
};

export default function Style() {
  return (
    <BackgroundImage>
      <Header />
      <div className="flex items-center justify-center ">
        <Carousel
          showArrows
          width="30rem"
          showThumbs={false}
          infiniteLoop
          onChange={handleOnClick}
        >
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[18.75rem]">
            <img
              className="Cartoon"
              id="1"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00003_01.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[18.75rem]">
            <img
              className="Caricature"
              id="2"
              alt="caricature"
              src="images//stylegallery_img/Hillary_Clinton_C00034.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[18.75rem]">
            <img
              className="anime"
              id="3"
              alt="anime"
              src="images//stylegallery_img/16031200.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[18.75rem]">
            <img
              className="Cartoon"
              id="4"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00038_07.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[18.75rem]">
            <img
              className="Caricature"
              id="5"
              alt="caricature"
              src="images//stylegallery_img/Liv_Tyler_C00009.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[18.75rem]">
            <img
              className="anime"
              id="6"
              alt="anime"
              src="images//stylegallery_img/23075800.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[18.75rem]">
            <img
              className="Cartoon"
              id="7"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00167_01.png"
            />
          </div>
        </Carousel>
        {/* <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ...">
        <Link
          to="/Pictureupload"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          사진 선택으로 돌아가기
        </button>
        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ..." onClick={() => console.log('선택 완료')}>
          화풍선택
        </button> */}
      </div>
      <BtnContainer>
        <Btn>
          <Link
            to="/Pictureupload"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <Sentence>사진 선택으로 돌아가기</Sentence>
          </Link>
        </Btn>
        <Btn onClick={() => console.log('선택 완료')}>
          <Sentence>화풍 선택</Sentence>
        </Btn>
      </BtnContainer>
    </BackgroundImage>
  );
}
