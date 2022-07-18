/* eslint-disable react/button-has-type */
import React, {useState} from "react";
import styled from "styled-components";

const Btn = styled.button`
    background-color: #9a9a9a;
    width: 16.875rem;
    height: 4rem;
    border-radius: 50px;
    cursor: pointer;

    margin: 0 auto;
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
`

const Img = styled.img`
    margin: auto;
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
        <div>
            <div>
                {fileImage && (
                    <Img
                    alt = "sample"
                    src={fileImage} />
                )}
                <Container>
                    <label htmlFor="image">
                    <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage} />
                    <Btn onClick={() => deleteFileImage()}>삭제</Btn>
                    </label>
                </Container>
            </div>
        </div>
    );
}

export default Pictureupload;