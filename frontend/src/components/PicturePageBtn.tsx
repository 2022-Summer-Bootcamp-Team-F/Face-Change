/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

export default function PicturePageBtn() {
  return (
    <div>
      <div className="absolute flex justify-center items-center w-[100vw] h-[100vh]">
        <svg
          className="absolute fill-[#4354f5] text-[2rem] font-normal w-[15rem] h-[15rem] mr-[61rem] mb-[40rem]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="100 100 300 300"
        >
          <defs>
            <path
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
              id="textcircle_top"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="20s"
                type="rotate"
                from="0 250 250"
                to="360 250 250"
                repeatCount="indefinite"
              />
            </path>
          </defs>
          <text dy="90" textLength="1220">
            <textPath xlinkHref="#textcircle_top">
              사진 선택 + 사진 선택 + 사진 선택 + 사진 선택 +{' '}
            </textPath>
          </text>
        </svg>
        <button className="absolute flex justify-center items-center h-[9.5rem] w-[9.5rem] rounded-[50%] bg-blue-500 text-white text-4xl mr-[61rem] mb-[40rem] ...">
          <Link
            to="/Pictureupload"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            +
          </Link>
        </button>
      </div>
    </div>
  );
}
