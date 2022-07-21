import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  display: flex;
`;

const Sentence = styled.p`
  width: 12rem;
  height: 7.25rem;
  font-family: Inter;
  font-size: clamp(1.3rem, 10vw, 1rem);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const Cartoon = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 1rem;

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
  font-size: 1rem;

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
  font-size: 1rem;

  position: relative;
`;

const Btn = styled.button`
  background-color: #9a9a9a;
  width: 16.875rem;
  height: 4rem;
  border-radius: 50px;
  border: 0;
  outline: 0;
  cursor: pointer;

  margin: 2.063rem 1.625rem 0 0.063rem;
  padding: 1.063rem 5.375rem 1.063rem 2.5rem;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  position: absolute;
  margin-left: 30%;
  bottom: 8.25rem;
  align-items: center;
  justify-content: center;
`;

export default function Style() {
  return (
    <Container>
      <AiFillCaretLeft className="left" color="black" size="30rem" />
      {/* <Carousel className="flex"> */}
      <Cartoon>
        <p>cartoon</p>
        <img
          className="Cartoon"
          alt="cartoon"
          src="images/stylegallery_img/cartoons.png"
        />
      </Cartoon>
      <Caricature>
        <p>caricature</p>
        <img
          className="Caricature"
          alt="caricature"
          src="images//stylegallery_img/caricatures.png"
        />
      </Caricature>
      <Anime>
        <p>anime</p>
        <img
          className="anime"
          alt="anime"
          src="images//stylegallery_img/animes.png"
        />
      </Anime>
      <Cartoon>
        <p>cartoon</p>
        <img
          className="Cartoon"
          alt="cartoon"
          src="images/stylegallery_img/cartoons2.png"
        />
      </Cartoon>
      <Caricature>
        <p>caricature</p>
        <img
          className="Caricature"
          alt="caricature"
          src="images//stylegallery_img/caricatures2.png"
        />
      </Caricature>
      <Anime>
        <p>anime</p>
        <img
          className="anime"
          alt="anime"
          src="images//stylegallery_img/animes2.png"
        />
      </Anime>
      <Cartoon>
        <p>cartoon</p>
        <img
          className="Cartoon"
          alt="cartoon"
          src="images/stylegallery_img/cartoons3.png"
        />
      </Cartoon>
      {/* </Carousel> */}
      <AiFillCaretRight className="left" color="black" size="30rem" />
      <BtnContainer>
        <Btn>
          <Link
            to="/Pictureupload"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <Sentence>사진 선택으로 돌아가기</Sentence>
          </Link>
        </Btn>
        <Btn>
          <Sentence>화풍 선택</Sentence>
        </Btn>
      </BtnContainer>
    </Container>
  );
}
