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

const ErrorIcon = styled.img`
  width: 21.375rem;
  height: 24.438rem;
  margin: 0 auto;
  padding: 4.563rem 2.5rem 1.063rem 3.125rem;
  object-fit: contain;
  border-radius: 100px;
  text-align: center;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Sentence = styled.p`
  width: 11.063rem;
  height: 7.25rem;
  font-family: Inter;
  font-size: 6rem;
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

const Sentence2 = styled.p`
  width: 65rem;
  height: 3rem;
  font-family: Inter;
  font-size: 2.5rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;

  margin: 0 auto;
  margin-top: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 16.875rem;
  height: 4rem;
  padding: 1.063rem 4.5rem 1.063rem 4.375rem;
  border-radius: 50px;
  background-color: #4354f5;

  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Inter;
  font-size: 1.563rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

export default function Error() {
  return (
    <ErrorBackImg>
      <ErrorIcon className="Cartoon" alt="cartoon" src="images/ErrorIcon.png" />
      <Sentence className="sentence1">오류</Sentence>
      <Sentence2 className="sentence2">
        만화 그리기에 실패했습니다. 다른 사진으로 다시 시도해보세요.
      </Sentence2>
      <Btn>
        <Link
          to="/Pictureupload"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          사진 재 선택
        </Link>
      </Btn>
    </ErrorBackImg>
  );
}
