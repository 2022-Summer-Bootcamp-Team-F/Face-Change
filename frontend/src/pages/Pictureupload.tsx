import React from "react";
import styled from "styled-components";

const Rectangle1 = styled.div`
      width: 35.375rem;
  height: 31.5rem;
  margin: 0 auto;
  padding: 12.5rem 6.063rem 4.875rem 6rem;
`
const Container = styled.div`
    display:flex;
`

const ChoiceBtn = styled.button`
width: 16.875rem;
  height: 4rem;
  margin: 2.063rem 1.625rem 0 0.063rem;
  padding: 1.063rem 5.375rem 1.063rem 5.313rem;
  border-radius: 50px;
  background-color: #9a9a9a;

  display: flex;
  justify-content: center;
  align-items: center;
    
  font-family: Inter;
  font-size: 1.563rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`

const UploadBtn = styled.button`
      width: 16.875rem;
  height: 4rem;
  margin: 2.063rem 5.75rem 0 1.625rem;
  padding: 1.063rem 4.625rem;
  border-radius: 50px;
  background-color: #9a9a9a;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Inter;
  font-size: 1.563rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`

export default function Pictureupload() {
    return(
        <><Rectangle1>
            <img
                className="Rectangle1"
                alt="rectangle1"
                src="images/Rectangle1.png" />
        </Rectangle1>
        <Container>
                <ChoiceBtn>
                    <p>사진 선택</p>
                </ChoiceBtn>
                <UploadBtn>
                    <p>사진 업로드</p>
                </UploadBtn>
                </Container></>
    );
}