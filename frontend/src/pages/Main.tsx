import React from "react";

import Header from "../components/Header";
import Comment from "../components/Comment";
import PicturePageBtn from "../components/PicturePageBtn";
import ExamplePictures from "../components/ExamplePictures";
import BackgroundImage from "../components/BackgroundImage";

export default function Main() {
  return (
    <BackgroundImage>
      <div>
        <Header />
        <div className="flex">
          <div className="ml-[5rem] mt-[10rem]">
            <Comment />
            <PicturePageBtn />
          </div>
          <ExamplePictures />
        </div>
      </div>
    </BackgroundImage>
  );
}
