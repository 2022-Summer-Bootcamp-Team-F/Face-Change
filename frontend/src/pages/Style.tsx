/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.css';
import '../components/carousel copy.css';
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';

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
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[30rem]">
            <img
              className="Cartoon"
              id="1"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00003_01.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[30rem]">
            <img
              className="Caricature"
              id="2"
              alt="caricature"
              src="images//stylegallery_img/Hillary_Clinton_C00034.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[30rem]">
            <img
              className="anime"
              id="3"
              alt="anime"
              src="images//stylegallery_img/16031200.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[30rem]">
            <img
              className="Cartoon"
              id="4"
              alt="cartoon"
              src="images/stylegallery_img/Cartoons_00038_07.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[30rem]">
            <img
              className="Caricature"
              id="5"
              alt="caricature"
              src="images//stylegallery_img/Liv_Tyler_C00009.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[30rem]">
            <img
              className="anime"
              id="6"
              alt="anime"
              src="images//stylegallery_img/23075800.png"
            />
          </div>
          <div className="flex justify-center items-center border-dotted h-[38rem] w-[30rem]">
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
        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ...">
          <Link
            to="/Pictureupload"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            사진 선택으로 돌아가기
          </Link>
        </button>
        <button
          className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ..."
          onClick={() => console.log('선택 완료')}
        >
          <Link
            to="/Results"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            화풍선택
          </Link>
        </button>
      </div>
    </BackgroundImage>
  );
}
