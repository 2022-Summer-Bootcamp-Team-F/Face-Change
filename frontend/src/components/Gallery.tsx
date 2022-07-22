import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BMan = styled.section`
  width: 20rem;
  height: 19rem;
  /* border: 3px solid; */
  margin: 0 auto;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan2 = styled.section`
  width: 20rem;
  height: 19rem;
  /* border: 3px solid; */
  margin: 0 auto;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const Img = styled.img`
  width: 19rem;
  height: 18rem;
`;

export default function Gallery() {
  return (
    <Container>
      <BMan>
        <Img className="BMan" alt="bman" src="images/gallery_images/BMan.jpg" />
      </BMan>
      <BMan>
        <Img
          className="BMan2"
          alt="bman"
          src="images/gallery_images/BMan2.jpg"
        />
      </BMan>
      <BMan>
        <Img
          className="BMan3"
          alt="bman"
          src="images/gallery_images/BMan3.jpg"
        />
      </BMan>
      <BMan2>
        <Img
          className="BMan4"
          alt="bman"
          src="images/gallery_images/BMan4.jpg"
        />
      </BMan2>
      <BMan2>
        <Img
          className="BMan4"
          alt="bman"
          src="images/gallery_images/BMan5.jpg"
        />
      </BMan2>
      <BMan2>
        <Img
          className="BMan4"
          alt="bman"
          src="images/gallery_images/BMan6.jpg"
        />
      </BMan2>
    </Container>
  );
}
