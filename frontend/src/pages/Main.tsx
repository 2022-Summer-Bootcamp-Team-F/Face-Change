import React from "react";
import styled from "styled-components";

import Header from '../components/Header';
import Comment from '../components/Comment';
import PicturePageBtn from '../components/PicturePageBtn';
import ExamplePictures from '../components/ExamplePictures';
import Gallery from '../components/Gallery';

const BackgroundImage = styled.div`
  background-image: url('images/background.png');
  width:100vw;
  height:100vh;
  background-repeat: no-repeat;
  background-size: cover;
`

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