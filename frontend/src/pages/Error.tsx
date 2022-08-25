/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: 'url(images/ErrorBackImg.png)' }}
    >
      <div className="flex justify-center items-center m-auto xl:w-[40rem] lg:w-[30rem] md:w-[20rem] sm:w-[10rem] mt-[1rem]">
        <img className="ErrorIcon" alt="erroricon" src="images/ErrorIcon.png" />
      </div>
      <div className="font-bold m-auto xl:text-5xl lg:text-4xl md:text-2xl sm:text-1xl xl:w-[100rem] lg:w-[40rem] md:w-[30rem] sm:w-[20rem]">
        <div className="flex m-auto mt-2 justify-center items-center">
          <p>오류</p>
        </div>
      </div>
      <div className="font-bold m-auto xl:text-5xl lg:text-4xl md:text-2xl sm:text-1xl xl:w-[100rem] lg:w-[40rem] md:w-[30rem] sm:w-[20rem]">
        <div className="flex m-auto mt-7 justify-center items-center">
          <p>만화 그리기에 실패했습니다.</p>
        </div>
      </div>
      <div className="font-bold m-auto xl:text-5xl lg:text-4xl md:text-2xl sm:text-1xl xl:w-[100rem] lg:w-[40rem] md:w-[30rem] sm:w-[20rem]">
        <div className="flex m-auto justify-center items-center">
          <p>주의 사항을 읽어보시고 다시 사진을 업로드해주세요.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <button className="h-[4rem] xl:w-[17rem] lg:w-[15rem] md:w-[12rem] sm:w-[10rem] rounded-full rounded-4xl bg-blue-500 text-white xl:text-2xl lg:text-1.5xl md:text-1xl sm:text=0.5xl ml-4 ...">
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
