/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: 'url(images/ErrorBackImg.png)' }}
    >
      <div className="flex justify-center items-center">
        <img className="ErrorIcon" alt="erroricon" src="images/ErrorIcon.png" />
      </div>
      <div className="flex justify-center items-center text-9xl mt-10">
        <p>오류</p>
      </div>
      <div className="flex justify-center items-center text-6xl mt-20">
        <p>만화 그리기에 실패했습니다. 다른 사진으로 다시 시도해보세요.</p>
      </div>
      <div className="flex justify-center items-center mt-20">
        <button className="h-[4rem] w-[17rem] rounded-full rounded-4xl bg-blue-500 text-white text-2xl ml-4 ...">
          <Link
            to="/Pictureupload"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            사진 재 선택
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Error;
