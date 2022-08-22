/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const list = [
  { id: "1", key: "1", img: "images/test/test1.jpg" },
  { id: "2", key: "2", img: "images/test/test2.jpg" },
  { id: "3", key: "3", img: "images/test/test3.jpg" },
  { id: "4", key: "4", img: "images/test/test4.jpg" },
  { id: "5", key: "5", img: "images/test/test5.jpg" },
  { id: "6", key: "6", img: "images/test/test6.jpg" },
];

export default function Results() {
  const [image, setImage] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const serverURL = "http://127.0.0.1:8000/api/imgs/";
  // const imageList = async () => {
  //   try {
  //     setError("");
  //     setImage([]);
  //     setLoading(true);
  //     const response = await axios.get(serverURL);
  //     setImage(response.data);
  //   } catch (e: any) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   imageList();
  // }, []);

  // if (loading) return <Link to="/Loading" />;
  // if (error) return <Link to="/Error" />;
  // if (!image) return null;

  const listImage = list.map(({ key, img }) => (
    <li className="mt-[1rem]">
      <img
        alt=""
        src={img}
        onClick={() => {
          setImage(key);
        }}
      />
    </li>
  ));

  const resultImage = list.map(({ key, img }) => (
    <div>{image === key ? <img alt="" src={img} key={key} /> : null}</div>
  ));

  const downloadImage = () => {
    const url = window.URL.createObjectURL(new Blob([image]));
    const link = document.createElement("a");
    link.href = url;
    link.download = "resultImage.png";
    link.click();
  };

  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: "url(images/background.png)" }}
    >
      <Header />
      <div className="container flex justify-center items-center m-auto ml-[2rem]">
        <div className="overflow-auto h-[30rem] w-[5rem]">
          <ul>{listImage}</ul>
        </div>
        <div className="flex justify-center items-center border-dotted h-[30rem] w-[30rem] p-4 border-4 ml-[3rem]">
          {resultImage}
        </div>
      </div>
      <div className="Container flex justify-center items-center mt-20 xl:text-[1rem] sm:text-[0.7rem]">
        <button className="h-10 w-40 rounded-2xl bg-blue-500 text-white ...">
          <Link
            to="/Pictureupload"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            업로드 이동
          </Link>
        </button>
        <button className="h-10 w-40 rounded-2xl bg-blue-500 text-white ml-4 ...">
          <Link
            to="/Style"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            선택 이동
          </Link>
        </button>
        <button
          id="download"
          className="h-10 w-40 rounded-2xl bg-purple-600 text-white ml-4 ..."
          onClick={downloadImage}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
