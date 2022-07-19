import React from "react";
import styled from "styled-components";

const LoadingMent = styled.div`
    width: 45.313rem;
    height: 3.625rem;
    margin: 5.438rem 0 1.625rem 19.688rem;
    font-family: Inter;
    font-size: 3rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
`

export default function Roading() {
    return(
        <div>
            <LoadingMent>
                당신을 위한 만화를 그리고 있습니다.
            </LoadingMent>
        </div>
    );
}