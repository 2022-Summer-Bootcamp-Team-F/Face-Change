/* eslint-disable react/button-has-type */
import React, {useState, useRef} from "react";
import styled from "styled-components";

const Btn = styled.button`
    background-color: #9a9a9a;
    width: 16.875rem;
    height: 4rem;
    border-radius: 50px;
    cursor: pointer;

    margin: 2.063rem 1.625rem 0 0.063rem;
    padding: 1.063rem 5.375rem 1.063rem 5.313rem;
    
    font-family: Inter;
    font-size: 1.563rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
`;

const Container = styled.div`
    align-Items: center;
    justify-Content: center;
    margin: 0 auto;
`

const Img = styled.img`
    margin: auto;
`

const InputFile = styled.input`
    display: none;
`

const Label = styled.label`
    background-color: #9a9a9a;
    width: 16.875rem;
    height: 4rem;
    border-radius: 50px;
    cursor: pointer;

    margin: 2.063rem 1.625rem 0 0.063rem;
    padding: 1.063rem 5.375rem 1.063rem 5.313rem;
    
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

function Pictureupload() {
    const [fileImage, setFileImage] = useState("");

    const saveFileImage = (e: any) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };

    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };

    return (
        <Container>
            <div>
                {fileImage && (
                    <Img
                    alt = "sample"
                    src={fileImage} />
                )}
                <div>
                    <Label htmlFor="name">
                        사진 선택
                    <InputFile
                    id="name"
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage} />
                    </Label>
                    <Btn onClick={() => deleteFileImage()}>삭제</Btn>
                </div>
            </div>
        </Container>
    );
}

export default Pictureupload;