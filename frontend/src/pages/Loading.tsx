import React from "react";
import styled from "styled-components";

const LoadingMent = styled.div`
    width: 45.313rem;
    height: 3.625rem;
    margin: 0 auto;
    font-family: Inter;
    font-size: 3rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;

    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    display: flex;
`

const Img = styled.img`
    width: 12rem;
    height: 13rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 15rem;
`


export default function Loading() {
    return(
        <div>
            <Img
            alt="spinner"
            src="images/spinner.png"/>
            <LoadingMent>
                당신을 위한 만화를 그리고 있습니다.
                잠시만 기다려 주세요...
            </LoadingMent>
        </div>
    );
}