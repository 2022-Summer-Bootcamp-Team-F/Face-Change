/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Pictureupload() {
  const [fileImage, setFileImage] = useState("");
  const [fileIma, setFileIma] = useState("");
  const [visible, setVisible] = useState(false);

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    URL.revokeObjectURL(fileIma);
    setFileIma("");
    setFileImage("");
    setVisible(false);
  };

  const handleSelect = async (e: any) => {
    const file = e.target.files[0];
    const Image = URL.createObjectURL(file);
    setFileIma(Image);
    setFileImage(file);
    setVisible(true);
  };

  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: "url(images/background.png)" }}
    >
      <Header />
      <div className="flex justify-center items-center xl:ml-[26.5rem] md:ml-[15rem] sm:ml-[12rem] sml:ml-[7rem] xl:mt-0 md:mt-[3rem] sm:mt-[5rem] sml:mt-[8rem]">
        <div className="flex justify-center items-center border-dotted xl:w-[30rem] md:w-[27rem] sm:w-[50rem] sml:w-[80rem] xl:h-[30rem] md:h-[25rem] sm:h-[20rem] sml:h-[20rem] p-4 border-4">
          {fileIma && <img alt="sample" id="sample" src={fileIma} />}
        </div>
        <div className="flex justify-center items-center border-dotted xl:w-[15rem] md:w-[10rem] xl:h-[20rem] md:h-[15rem] xl:visible md:visible sm:invisible sml:invisible p-4 border-4 xl:ml-[11rem] md:ml-[5rem]">
          <p>
            <p className="text-center">주의 사항</p>
            <br />
            1. 이목구비가 잘 나오도록 정면 사진만 넣어주세요.
            <br />
            2. 단체 사진, 동물 사진 등은 적용 안됩니다.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[3rem] text-[1rem]">
        <label
          className="flex justify-center items-center xl:w-40 sml:w-[7rem] h-10 rounded-2xl bg-blue-500 text-white"
          htmlFor="name"
        >
          사진 업로드
          <input
            className="hidden"
            id="name"
            name="imgUpload"
            type="file"
            accept="image/*"
            onChange={handleSelect}
          />
        </label>
        {visible && (
          <button className="xl:w-40 sml:w-[7rem] h-10 rounded-2xl bg-blue-500 text-white ml-4">
            <Link
              to={{ pathname: "/Style" }}
              state={{ fileImage }}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              화풍 선택
            </Link>
          </button>
        )}
        <button
          className="xl:w-40 sml:w-[7rem] h-10 rounded-2xl bg-red-500 text-white ml-4"
          onClick={() => deleteFileImage()}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default Pictureupload;
