import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.css";
import "./carousel2.css";
import { Carousel } from "react-responsive-carousel";

const ChangeImage = styled.div`
  width: 40rem;
  height: 40rem;
  margin: 0 auto;
  padding: 2.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 1rem;
  position: relative;
`;

export default function ExamplePictures() {
  return (
    <div className="flex float-right">
      <Carousel
        showArrows
        width="50rem"
        showThumbs={false}
        infiniteLoop
        autoPlay
      >
        <ChangeImage>
          <p>cartoon</p>
          <img className="Cartoon" alt="cartoon" src="images/All.jpg" />
        </ChangeImage>
        <ChangeImage>
          <p>caricature</p>
          <img className="Caricature" alt="caricature" src="images/wman.jpg" />
        </ChangeImage>
        <ChangeImage>
          <p>anime</p>
          <img className="anime" alt="anime" src="images/bManAll.jpg" />
        </ChangeImage>
        <ChangeImage>
          <p>anime</p>
          <img className="anime" alt="anime" src="images/wgirl.jpg" />
        </ChangeImage>
        <ChangeImage>
          <p>anime</p>
          <img className="anime" alt="anime" src="images/rman.jpg" />
        </ChangeImage>
        <ChangeImage>
          <p>anime</p>
          <img className="anime" alt="anime" src="images/girlAll.jpg" />
        </ChangeImage>
      </Carousel>
    </div>
  );
}
