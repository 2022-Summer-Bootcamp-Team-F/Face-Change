/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorBackImg = styled.div`
  background-image: url('images/ErrorBackImg.png');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ErrorIcon = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;

  position: relative;
`;

const Sentence = styled.p`
  width: 31.125rem;
  height: 4.813rem;
  font-family: Inter;
  font-size: 4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;

  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export default function Error() {
  return (
    <ErrorBackImg>
      <ErrorIcon>
        <img className="Cartoon" alt="cartoon" src="images/ErrorIcon.png" />
        <div className="Comment">
          <Sentence className="sentence1">오류</Sentence>
        </div>
        <div className="Comment2">
          <Sentence className="sentence2">
            만화 그리기에 실패했습니다. 다른 사진으로 다시 시도해보세요.
          </Sentence>
        </div>
      </ErrorIcon>
      <button>
        <Link
          to="/Pictureupload"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          사진 재 선택
        </Link>
      </button>
    </ErrorBackImg>
  );
}
