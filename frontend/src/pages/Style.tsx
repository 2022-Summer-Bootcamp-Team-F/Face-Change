import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  position: relative;
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

  position: relative;
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
  padding: 1.063rem 5.375rem 1.063rem 5.313rem;

  font-family: Inter;
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const BtnContainer = styled.div`
  position: absolute;
  bottom: 8.25rem;
  align-items: center;
  justify-content: center;
`;

export default function Style() {
  return (
    <Container>
      <Cartoon>
        <img className="Cartoon" alt="cartoon" src="images/cartoon2.png" />
        <p>cartoon</p>
      </Cartoon>
      <Caricature>
        <img
          className="Caricature"
          alt="caricature"
          src="images/caricature2.png"
        />
        <p>caricature</p>
      </Caricature>
      <Anime>
        <img className="anime" alt="anime" src="images/anime2.png" />
        <p>anime</p>
      </Anime>
      <BtnContainer>
        <Btn>
          <Link
            to="/Pictureupload"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            사진 선택으로 돌아가기
          </Link>
        </Btn>
        <Btn>화풍 선택</Btn>
      </BtnContainer>
    </Container>
  );
}
