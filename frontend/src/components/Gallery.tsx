import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BMan = styled.section`
  width: 24rem;
  height: 23rem;
  border: 6px solid;
  margin: 0 auto;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan2 = styled.section`
  width: 24rem;
  height: 23rem;
  border: 6px solid;
  margin: 0 auto;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan3 = styled.section`
  width: 24rem;
  height: 23rem;
  border: 6px solid;
  margin: 0 auto;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan4 = styled.section`
  width: 24rem;
  height: 23rem;
  border: 6px solid;
  margin: 84px;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan5 = styled.section`
  width: 24rem;
  height: 23rem;
  border: 6px solid;
  margin: 84px;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan6 = styled.section`
  width: 24rem;
  height: 23rem;
  border: 6px solid;
  margin: 84px;
  padding: 2rem 2.5rem 1rem 2rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

export default function Gallery() {
  return (
    <Container>
      <BMan>
        <img className="BMan" alt="bman" src="images/gallery_images/BMan.jpg" />
      </BMan>
      <BMan2>
        <img
          className="BMan2"
          alt="bman"
          src="images/gallery_images/BMan2.jpg"
        />
      </BMan2>
      <BMan3>
        <img
          className="BMan3"
          alt="bman"
          src="images/gallery_images/BMan3.jpg"
        />
      </BMan3>
      <Container>
        <BMan4>
          <img
            className="BMan4"
            alt="bman"
            src="images/gallery_images/BMan4.jpg"
          />
        </BMan4>
        <BMan5>
          <img
            className="BMan4"
            alt="bman"
            src="images/gallery_images/BMan5.jpg"
          />
        </BMan5>
        <BMan6>
          <img
            className="BMan4"
            alt="bman"
            src="images/gallery_images/BMan6.jpg"
          />
        </BMan6>
      </Container>
    </Container>
  );
}
