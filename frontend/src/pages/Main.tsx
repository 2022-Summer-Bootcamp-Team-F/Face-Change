import React from "react";
import styled from "styled-components";

import Header from '../components/Header';
import Comment from '../components/Comment';
import PicturePageBtn from '../components/PicturePageBtn';
import ExamplePictures from '../components/ExamplePictures';
import Gallery from '../components/Gallery';
import BackgroundImage from '../components/BackgroundImage';

export default function Main() {
    return(
    <BackgroundImage>
      <Header />
      <Comment />
      <PicturePageBtn />
      <ExamplePictures />
      <Gallery />
    </BackgroundImage>
    );
}