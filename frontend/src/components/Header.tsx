import React from 'react';

export default function Header() {
  return (
    <div className="flex p-[50px]">
      <img className="logoImage" alt="logo" src="images/logo.png" />
      <img className="paletteImage" alt="palette" src="images/palette.png" />
    </div>
  );
}
