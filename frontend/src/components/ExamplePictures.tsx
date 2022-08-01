import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import "./carousel2.css";
import { Carousel } from "react-responsive-carousel";

export default function ExamplePictures() {
  return (
    <div className="flex float-right mr-[10rem]">
      <Carousel
        showArrows
        width="50rem"
        showThumbs={false}
        infiniteLoop
        autoPlay
      >
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[40rem] w-[40rem]">
          <img className="Cartoon" alt="cartoon" src="images/All.jpg" />
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[40rem] w-[40rem]">
          <img className="Caricature" alt="caricature" src="images/wman.jpg" />
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[40rem] w-[40rem]">
          <img className="anime" alt="anime" src="images/bManAll.jpg" />
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[40rem] w-[40rem]">
          <img className="anime" alt="anime" src="images/wgirl.jpg" />
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[40rem] w-[40rem]">
          <img className="anime" alt="anime" src="images/rman.jpg" />
        </div>
        <div className="flex justify-center items-center m-auto rounded-[100px] h-[40rem] w-[40rem]">
          <img className="anime" alt="anime" src="images/girlAll.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
