import React from "react";
import styled, {keyframes} from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const FadeIn = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0;
    }
`;

const FadeOut = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const Cartoon = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;

  position: relative;
`;

const Caricature = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;

  position: relative;
`;

const Anime = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;

  position: relative;
`;

const ChangeImage = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;

  position: absolute;
  top: 0;
  left: 0;

  // 마우스 올렸을 시 서서히 이미지 변환
  &:hover {
      animation: ${FadeIn} 0.5s ease-in 1 forwards;
  }
  // 마우스 내렸을 시 서서히 이미지 변환
  animation: ${FadeOut} 0.5s ease-in 1 forwards;
`;

export default function ExamplePictures() {
  return (
    <Container>
      <Cartoon>
        <img
        className="Cartoon"
        alt="cartoon"
        src="images/cartoon2.png" />
        <p>cartoon</p>
        <ChangeImage>
          <img
          className="Changeimage"
          alt="changeimage"
          src="images/beforeimage.png"/>
        </ChangeImage>
      </Cartoon>
      <Caricature>
      <img
          className="Caricature"
          alt="caricature"
          src="images/caricature2.png" />
        <p>caricature</p>
        <ChangeImage>
          <img
          className="Changeimage"
          alt="changeimage"
          src="images/beforeimage.png"/>
        </ChangeImage>
      </Caricature>
      <Anime>
        <img className="anime"
        alt="anime"
        src="images/anime2.png" />
        <p>anime</p>
        <ChangeImage>
          <img
          className="Changeimage"
          alt="changeimage"
          src="images/beforeimage.png"/>
        </ChangeImage>
      </Anime>
    </Container>
  );
}
