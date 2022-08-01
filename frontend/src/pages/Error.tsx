/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: "url(images/ErrorBackImg.png)" }}
    >
      <div className="flex justify-center items-center m-auto mt-[3rem] w-[20rem] h-[20rem]">
        <img className="ErrorIcon" alt="erroricon" src="images/ErrorIcon.png" />
      </div>
      <div className="flex justify-center items-center text-5xl mt-10 font-bold">
        <p>오류</p>
      </div>
      <div className="flex justify-center items-center text-center text-5xl mt-[3rem] font-bold">
        <p>
          만화 그리기에 실패했습니다.
          <br />
          주의 사항을 읽어보시고 다시 사진을 업로드해주세요.
        </p>
      </div>
      <div className="flex justify-center items-center mt-20">
        <button className="h-[4rem] w-[17rem] rounded-full rounded-4xl bg-blue-500 text-white text-2xl ml-4 ...">
          <Link
            to="/Pictureupload"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            사진 재 선택
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Error;
