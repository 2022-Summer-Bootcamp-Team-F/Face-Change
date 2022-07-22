import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.css';
// import '../carousel copy.css';
import { Carousel } from 'react-responsive-carousel';

const ChangeImage = styled.div`
  width: 32rem;
  height: 32rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 1rem;
  position: relative;
`;

export default function ExamplePictures() {
  return (
    <Carousel showArrows width="30rem" showThumbs={false} infiniteLoop>
      <ChangeImage>
        <p>cartoon</p>
        <img className="Cartoon" alt="cartoon" src="images/anime2.png" />
      </ChangeImage>
      <ChangeImage>
        <p>caricature</p>
        <img
          className="Caricature"
          alt="caricature"
          src="images/caricature2.png"
        />
      </ChangeImage>
      <ChangeImage>
        <p>anime</p>
        <img className="anime" alt="anime" src="images/cartoon2.png" />
      </ChangeImage>
    </Carousel>
  );
}
