/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';

function Pictureupload() {
  const [fileImage, setFileImage] = useState('');

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  const handleFileOnChange = async (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('img', file);

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 500,
    };

    try {
      const response = await axios.put('localhost:3000/Pictureupload');
      console.log(response);

      const compressedFile = await imageCompression(file, options);

      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setFileImage(result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BackgroundImage />
      <Header />
      <div className="flex justify-center items-center ml-[21rem]">
        <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem] p-4 border-4">
          {fileImage && <img alt="sample" src={fileImage} />}
        </div>
        <div className="flex justify-center items-center border-dotted h-40 w-40 p-4 border-4 ml-[10rem]">
          <p>규격 안내문</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[3rem]">
        <form>
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
              onChange={handleFileOnChange}
            />
          </label>
        </form>
        <button className="h-10 w-40 rounded-2xl bg-gray-400 text-white ml-4 ...">
          <Link
            to="/Style"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
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
    </div>
  );
}

export default Pictureupload;
