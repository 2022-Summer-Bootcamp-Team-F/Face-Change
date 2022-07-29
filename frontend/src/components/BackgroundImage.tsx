/* eslint-disable react/self-closing-comp */
import React from 'react';

function BackgroundImage() {
  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: 'url(images/background.png)' }}
    ></div>
  );
}
export default BackgroundImage;
