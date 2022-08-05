import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './carousel2.css';
import { Carousel } from 'react-responsive-carousel';

const exampleList = [
  { id: '1', key: '1', img: 'images/All.jpg' },
  {
    id: '2',
    key: '2',
    img: 'images/wman.jpg',
  },
  { id: '3', key: '3', img: 'images/bManAll.jpg' },
  { id: '4', key: '4', img: 'images/wgirl.jpg' },
  { id: '5', key: '5', img: 'images/rman.jpg' },
  { id: '6', key: '6', img: 'images/girlAll.jpg' },
];

export default function ExamplePictures() {
  const exampleImage = exampleList.map(({ key, img }) => (
    <img alt="" src={img} key={key} />
  ));
  return (
    <div className="flex float-right mr-[10rem]">
      <Carousel
        showArrows
        width="50rem"
        showThumbs={false}
        infiniteLoop
        autoPlay
      >
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[35rem] w-[35rem]">
          {exampleImage.shift()}
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[35rem] w-[35rem]">
          {exampleImage.shift()}
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[35rem] w-[35rem]">
          {exampleImage.shift()}
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[35rem] w-[35rem]">
          {exampleImage.shift()}
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[35rem] w-[35rem]">
          {exampleImage.shift()}
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[35rem] w-[35rem]">
          {exampleImage.shift()}
        </div>
      </Carousel>
    </div>
  );
}
