/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

function Pictureupload() {
  const [fileImage, setFileImage] = useState("");

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  const handleSelect = async (e: any) => {
    const file = e.target.files[0];
    const Image = URL.createObjectURL(file);
    setFileImage(Image);

    e.preventDefault();
    const formData = new FormData();
    formData.append("files", file);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/imgs/",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });
  };

  return (
    <BackgroundImage>
      <Header />
      <div className="flex justify-center items-center ml-[21rem]">
        <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem] p-4 border-4">
          {fileImage && <img alt="sample" id="sample" src={fileImage} />}
        </div>
        <div className="flex justify-center items-center border-dotted h-40 w-40 p-4 border-4 ml-[10rem]">
          <p>규격 안내문</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[3rem]">
        <label
          className="flex justify-center items-center h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ..."
          htmlFor="name"
        >
          사진 선택
          <input
            className="hidden"
            id="name"
            name="imgUpload"
            type="file"
            accept="image/*"
            onChange={handleSelect}
          />
        </label>

        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ...">
          <Link
            to="/Style"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            사진 업로드
          </Link>
        </button>
        <button
          className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ..."
          onClick={() => deleteFileImage()}
        >
          삭제
        </button>
      </div>
    </BackgroundImage>
  );
}

export default Pictureupload;
