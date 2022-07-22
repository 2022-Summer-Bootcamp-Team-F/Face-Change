import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Btn = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: #4354f5;
  
  top: 3.3rem;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  font-family: Inter;
  font-size: 8rem;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

const CircleContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  font-family: Inter;
  font-size: 2rem;
  font-weight: 350;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  fill: #4354f5;
`

export default function PicturePageBtn() {
  return (
    <div>
      <CircleContainer>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-850 -450 2200 2200">
        <defs>
          <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
            <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
          </path>
        </defs>
          <text dy="90" textLength="1220">
            <textPath xlinkHref="#textcircle_top">사진 선택 + 사진 선택 + 사진 선택 + 사진 선택 + </textPath>
          </text>
        </svg>
      </CircleContainer>
      <Btn>
        <Link to = "/Pictureupload" style={{color: 'inherit', textDecoration: 'inherit'}}>
          <p className="Btntag">+</p>
        </Link> 
      </Btn>
    </div>
  );
}
