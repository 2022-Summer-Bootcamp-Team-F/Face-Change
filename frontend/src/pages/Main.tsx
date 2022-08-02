import React from "react";

import Header from "../components/Header";
import Comment from "../components/Comment";
import PicturePageBtn from "../components/PicturePageBtn";
import ExamplePictures from "../components/ExamplePictures";

export default function Main() {
  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: "url(images/background.png)" }}
    >
      <Header />
      <div className="flex">
        <div className="mt-[5rem]">
          <Comment />
          <PicturePageBtn />
        </div>
        <ExamplePictures />
      </div>
    </div>
  );
}
