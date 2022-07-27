import React, { useState, Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.css';
import '../components/carousel copy.css';
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header';

const BackgroundImage = styled.div`
  background-image: url('images/background.png');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

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
  console.log(item.props.children.props);

  //   await axios({
  //     method: "post",
  //     url: "http://127~~",
  //     data: FormData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Accept: "application/json"
  //     }
  //   })
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
          <ChangeImage>
            <img
              className="Cartoon"
              id="10"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00003_01.png"
            />
          </ChangeImage>
          <ChangeImage>
            <img
              className="Caricature"
              id="0"
              alt="caricature"
              src="images//stylegallery_img/Hillary_Clinton_C00034.png"
            />
          </ChangeImage>
          <ChangeImage>
            <img
              className="anime"
              id="17"
              alt="anime"
              src="images//stylegallery_img/16031200.png"
            />
          </ChangeImage>
          <ChangeImage>
            <img
              className="Cartoon"
              id="53"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00038_07.png"
            />
          </ChangeImage>
          <ChangeImage>
            <img
              className="Caricature"
              id="187"
              alt="caricature"
              src="images//stylegallery_img/Liv_Tyler_C00009.png"
            />
          </ChangeImage>
          <ChangeImage>
            <img
              className="anime"
              id="48"
              alt="anime"
              src="images//stylegallery_img/23075800.png"
            />
          </ChangeImage>
          <ChangeImage>
            <img
              className="Cartoon"
              id="26"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00167_01.png"
            />
          </ChangeImage>
        </Carousel>
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
        <Btn>
          <Sentence>화풍 선택</Sentence>
        </Btn>
      </BtnContainer>
    </BackgroundImage>
  );
}
