import React from 'react';
import styled from 'styled-components';

const Sentence1 = styled.p`
    width: 31.125rem;
    height: 4.813rem;
    font-family: Inter;
    font-size: 4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;

    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const Sentence2 = styled.p`
    width: 44.688rem;
    height: 4.813rem;
    font-family: Inter;
    font-size: 4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;

    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-items: center;
`

export default function Comment() {
    return (
        <div className="Comment">
            <Sentence1 className="sentence1">만화 속의 당신은</Sentence1>
            <Sentence2 className="sentence2">어떤 모습인지 궁금한가요?</Sentence2>
        </div>
    );
}