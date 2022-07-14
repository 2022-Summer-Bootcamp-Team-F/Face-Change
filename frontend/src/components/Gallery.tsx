import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  min-width: 500px;
`;

const BMan = styled.section`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 4.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;
`;

const BMan2 = styled.section`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 4.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;
`;

const BMan3 = styled.section`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 4.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;
`;

const BMan4 = styled.section`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 4.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
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
          className="BMan"
          alt="bman"
          src="images/gallery_images/BMan2.jpg"
        />
        <p>BMan2</p>
      </BMan2>
      <BMan3>
        <img
          className="BMan"
          alt="bman"
          src="images/gallery_images/BMan3.jpg"
        />
        <p>BMan3</p>
      </BMan3>
      <BMan4>
        <img
          className="BMan"
          alt="bman"
          src="images/gallery_images/BMan4.jpg"
        />
        <p>BMan4</p>
      </BMan4>
    </Container>
  );
}
