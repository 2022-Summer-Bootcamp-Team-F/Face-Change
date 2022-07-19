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

export default function Error() {
  return (
    <ErrorBackImg>
      <ErrorIcon>
        <img className="Cartoon" alt="cartoon" src="images/ErrorIcon.png" />
      </ErrorIcon>
      <div>error</div>
    </ErrorBackImg>
  );
}
