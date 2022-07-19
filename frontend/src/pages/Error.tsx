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

export default function Error() {
  return (
    <ErrorBackImg>
      <div>error</div>
    </ErrorBackImg>
  );
}
