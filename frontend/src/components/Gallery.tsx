import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BMan = styled.section`
  width: 24.313rem;
  height: 21.938rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan2 = styled.section`
  width: 24.25rem;
  height: 21.938rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan3 = styled.section`
  width: 24.313rem;
  height: 21.938rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan4 = styled.section`
  width: 24.313rem;
  height: 21.938rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan5 = styled.section`
  width: 24.25rem;
  height: 21.938rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 50px;
  text-align: center;
  font-size: 3rem;
`;

const BMan6 = styled.section`
  width: 24.313rem;
  height: 21.938rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
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
        <p>BMan</p>
      </BMan>
      <BMan2>
        <img
          className="BMan2"
          alt="bman"
          src="images/gallery_images/BMan2.jpg"
        />
        <p>BMan2</p>
      </BMan2>
      <BMan3>
        <img
          className="BMan3"
          alt="bman"
          src="images/gallery_images/BMan3.jpg"
        />
        <p>BMan3</p>
      </BMan3>
      <Container>
        <BMan4>
          <img
            className="BMan4"
            alt="bman"
            src="images/gallery_images/BMan4.jpg"
          />
          <p>BMan3</p>
        </BMan4>
        <BMan5>
          <img
            className="BMan4"
            alt="bman"
            src="images/gallery_images/BMan5.jpg"
          />
          <p>BMan3</p>
        </BMan5>
        <BMan6>
          <img
            className="BMan4"
            alt="bman"
            src="images/gallery_images/BMan6.jpg"
          />
          <p>BMan3</p>
        </BMan6>
      </Container>
    </Container>
  );
}
