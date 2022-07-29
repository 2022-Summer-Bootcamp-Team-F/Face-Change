import React from 'react';

import Header from '../components/Header';
import Comment from '../components/Comment';
import PicturePageBtn from '../components/PicturePageBtn';
import ExamplePictures from '../components/ExamplePictures';
import Gallery from '../components/Gallery';

export default function Main() {
  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: 'url(images/background.png)' }}
    >
      <Header />
      <Comment />
      <PicturePageBtn />
      <ExamplePictures />
      <Gallery />
    </div>
  );
}
