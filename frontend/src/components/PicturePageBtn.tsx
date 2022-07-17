import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Btn = styled.button`
  width: 18.063rem;
  height: 4.25rem;
  padding: 0.625rem 4rem 0.625rem 4.188rem;
  border-radius: 30px;
  background-color: #4354f5;

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Inter;
  font-size: 2.5rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

export default function PicturePageBtn() {
  return (
    <Btn>
      <Link to = "/Pictureupload" style={{textDecoration: 'inherit'}}>
        <p className="Btntag">사진 선택</p>
      </Link> 
    </Btn>
  );
}
