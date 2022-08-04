/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.css';
import '../components/carousel copy.css';
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header';

const slideList = [
  { id: '1', key: '1', img: 'images/stylegallery_img/Cartoons_00003_01.png' },
  {
    id: '2',
    key: '2',
    img: 'images//stylegallery_img/Hillary_Clinton_C00034.png',
  },
  { id: '3', key: '3', img: 'images//stylegallery_img/16031200.png' },
  { id: '4', key: '4', img: 'images/stylegallery_img/Cartoons_00038_07.png' },
  { id: '5', key: '5', img: 'images//stylegallery_img/Liv_Tyler_C00009.png' },
  { id: '6', key: '6', img: 'images//stylegallery_img/23075800.png' },
  { id: '7', key: '7', img: 'images/stylegallery_img/Cartoons_00167_01.png' },
];

function Style() {
  const handleOnClick = (index: number, e: any) => {
    const list = e.props.children.props.id;
    console.log(list);
  };

  const onSubmit = async (index: number, e: any) => {
    const list = e.props.children.props.id;
    console.log(list);

    const { state } = useLocation();
    console.log(state);

    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/style/',
      data: { id: list },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const listImage = slideList.map(({ key, img }) => (
    <img alt="" src={img} key={key} />
  ));

  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: 'url(images/background.png)' }}
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
            {listImage.shift()}
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            {listImage.shift()}
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            {listImage.shift()}
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            {listImage.shift()}
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            {listImage.shift()}
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            {listImage.shift()}
          </div>
          <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem]">
            {listImage.shift()}
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="h-10 w-40 rounded-2xl bg-blue-500 text-white ml-4 ...">
          <Link
            to="/Pictureupload"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
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
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            결과 보기
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Style;
