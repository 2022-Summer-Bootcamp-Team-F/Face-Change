import React from "react";

export default function Header() {
  return (
    <div className="Logo">
      <div className="flex p-[50px] xl:w-[30rem] md:w-[25rem] sm:w-[20rem] sml:w-[20rem] mt-[1rem]">
        <a className="flex" href="http://localhost:3000/">
          <img className="logoImage" alt="logo" src="images/logo.png" />
        </a>
      </div>
    </div>
  );
}
