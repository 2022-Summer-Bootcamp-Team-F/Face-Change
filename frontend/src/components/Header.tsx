import React from 'react';

export default function Header() {
  return (
    <div className="Logo">
      <div className="flex p-[50px] w-[30rem] h-[11.3rem]">
        <a className="flex" href="http://localhost:3000/">
          <img className="logoImage" alt="logo" src="images/logo.png" />
          <img
            className="paletteImage"
            alt="palette"
            src="images/palette.png"
          />
        </a>
      </div>
    </div>
  );
}
