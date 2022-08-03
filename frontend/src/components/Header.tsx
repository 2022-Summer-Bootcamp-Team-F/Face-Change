import React from 'react';

export default function Header() {
  return (
    <div className="Logo">
      <div className="flex p-[50px]">
        <a className="flex" href="http://localhost/">
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
