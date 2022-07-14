import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const BMan = styled.section`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 0rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
`;

const BMan2 = styled.section`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 5.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
`;

const BMan3 = styled.section`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 5.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
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
        <p>BMan</p>
      </BMan2>
      <BMan3>
        <img
          className="BMan"
          alt="bman"
          src="images/gallery_images/BMan3.jpg"
        />
        <p>BMan</p>
      </BMan3>
    </Container>
  );
}
