import React from "react";
import styled, {keyframes} from "styled-components";

const FrontImage = styled.div`
    width: 18.75rem;
    height: 18.75rem;
    margin: 3.938rem 7.688rem 0.875rem 5.125rem;
    padding: 4.563rem 2.5rem 1.063rem 3.125rem;
    object-fit: contain;
    border-radius: 100px;

    position: relative;
`

const FadeIn = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0;
    }
`

const FadeOut = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`

const BackImage = styled.div`
    width: 18.75rem;
    height: 18.75rem;
    margin: 0 auto;
    padding: 4.563rem 2.5rem 1.063rem 3.125rem;
    object-fit: contain;
    border-radius: 100px;

    position: absolute;
    top: 0;
    left: 0;

    // 마우스 올렸을 시 서서히 이미지 변환
    &:hover {
        animation: ${FadeIn} 0.5s ease-in 1 forwards;
    }
    // 마우스 내렸을 시 서서히 이미지 변환
    animation: ${FadeOut} 0.5s ease-in 1 forwards;
`



export default function Scroll() {
    return (
        <FrontImage>
            <img alt="cartoon" src="images/cartoon.png"/>
            <BackImage>
                <img alt="anime" src="images/anime.png"/>
            </BackImage>
        </FrontImage>
    );
}