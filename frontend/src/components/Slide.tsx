/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

export default function Slide() {
  const slide = () => {
    const image = [
      { id: "1", img: "images/stylegallery_img/Cartoons_00003_01.png" },
      { id: "2", img: "images/stylegallery_img/Hillary_Clinton_C00034.png" },
      { id: "3", img: "images/stylegallery_img/16031200.png" },
      { id: "4", img: "images/stylegallery_img/Cartoons_00038_07.png" },
      { id: "5", img: "images/stylegallery_img/Liv_Tyler_C00009.png" },
      { id: "6", img: "images/stylegallery_img/23075800.png" },
      { id: "7", img: "images/stylegallery_img/Cartoons_00167_01.png" },
    ];

    const [translateValue, setTranslateValue] = useState<number>(0);

    const Right = (): void => {
      if (translateValue !== 70 * (image.length - 1)) {
        setTranslateValue((prev) => prev + 70);
      } else {
        setTranslateValue(0);
      }
    };

    const Left = (): void => {
      if (translateValue !== 0) {
        setTranslateValue((prev) => prev - 70);
      } else {
        setTranslateValue(70 * (image.length - 1));
      }
    };
  };
  return <div>null</div>;
}
