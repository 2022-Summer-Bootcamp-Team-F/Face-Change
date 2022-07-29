import React from 'react';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';

export default function Loading() {
  return (
    <div>
      <BackgroundImage />
      <Header />
      <div className="flex w-[16rem] h-[16rem] m-auto justify-center align-items mt-[5rem]">
        <img alt="spinner" src="images/Spinner.png" />
      </div>
      <div className="flex w-[55rem] h-[4rem] m-auto justify-center align-items mt-[5rem] font-bold text-6xl">
        당신을 위한 만화를 그리고 있습니다.
      </div>
      <div className="flex w-[45rem] h-[4rem] m-auto justify-center align-items mt-[3rem] font-bold text-6xl">
        잠시만 기다려 주세요...
      </div>
    </div>
  );
}
