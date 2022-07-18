/* eslint-disable react/button-has-type */
import React, {useState} from "react";
import styled from "styled-components";
import imageCompression from "browser-image-compression";
import {Link} from "react-router-dom";

const Btn = styled.button`
    background-color: #9a9a9a;
    width: 16.875rem;
    height: 4rem;
    border-radius: 50px;
    border: 0;
    outline: 0;
    cursor: pointer;

    margin: 2.063rem 1.625rem 0 0.063rem;
    padding: 1.063rem 5.375rem 1.063rem 5.313rem;
    
    font-family: Inter;
    font-size: 1.3rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
`;

const Container = styled.div`
    align-Items: center;
    justify-Content: center;
    display: flex;
`

const Img = styled.img`
    margin-top: 18.188rem;
    box-sizing: border-box;

    background: #FFFFFF;
    border: 5px dashed #D9D9D9;
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
    font-size: 1.3rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
`

const BtnContainer = styled.div`
    position: absolute;
    bottom: 8.25rem;
    align-items: center;
    justify-content: center;
`

const RuleBox = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 14.688rem;
    height: 9.938rem;
    margin: 17.625rem 0 16.125rem 5.75rem;
    padding: 3.375rem 2.438rem 3.688rem 2.5rem;

    background: #FFFFFF;
    border: 5px dashed #C0BABA;
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

    const handleFileOnChange = async (e: any) => {
        const file = e.target.files[0];

        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 500,
        }

        try {
            const compressedFile = await imageCompression(file, options);

            const promise = imageCompression.getDataUrlFromFile(compressedFile);
            promise.then(result => {
                setFileImage(result);
            })
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <RuleBox>
                <p>규격 안내문</p>
            </RuleBox>
        <Container>
            {fileImage && (
                <Img
                alt = "sample"
                src={fileImage} />
            )}
            <BtnContainer>
                <Label htmlFor="name">
                    사진 선택
                <InputFile
                id="name"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={handleFileOnChange} />
                </Label>
                <Btn>
                    <Link to = "/Style" style={{color: 'inherit', textDecoration: 'inherit'}}>
                        사진 업로드
                    </Link>
                </Btn>
                <Btn onClick={() => deleteFileImage()}>삭제</Btn>
            </BtnContainer>
        </Container>
        </div>
    );
}

export default Pictureupload;