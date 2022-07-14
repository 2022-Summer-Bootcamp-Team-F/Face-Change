import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Cartoon = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 5.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;
`;

const Caricature = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 5.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;
`;

const Anime = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 3.938rem 7.688rem 0.875rem 5.125rem;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;
`;

export default function ExamplePictures() {
  return (
    <Container>
      <Cartoon>
        <img
        className="Cartoon"
        alt="cartoon"
        src="images/cartoon.png" />
        <p>cartoon</p>
      </Cartoon>
      <Caricature>
      <img
          className="Caricature"
          alt="caricature"
          src="images/caricature2.png" />
        <p>caricature</p>
      </Caricature>
      <Anime>
        <img className="anime"
        alt="anime"
        src="images/anime.png" />
        <p>anime</p>
      </Anime>
    </Container>
  );
}
