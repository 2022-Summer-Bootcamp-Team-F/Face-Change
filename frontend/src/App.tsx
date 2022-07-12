import React from 'react';

import Header from './components/Header';
import Comment from './components/Comment';
import PicturePageBtn from './components/PicturePageBtn';
import ExamplePictures from './components/ExamplePictures';
import Scroll from './components/Scroll';
import Gallery from './components/Gallery';

function App() {
  return (
   <>
    <Header />
    <Comment />
    <PicturePageBtn />
    <ExamplePictures />
    <Scroll />
    <Gallery />
   </>
  );
}

export default App;