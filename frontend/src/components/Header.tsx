import React from 'react';

export default function Header() {
  return (
    <div className="Logo">
      <a href="http://localhost:3000/">
        <div className="flex p-[50px]">
          <img className="logoImage" alt="logo" src="images/logo.png" />
          <img
            className="paletteImage"
            alt="palette"
            src="images/palette.png"
          />
        </div>
      </a>
    </div>
  );
}
