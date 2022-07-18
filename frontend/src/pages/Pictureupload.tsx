/* eslint-disable react/button-has-type */
import React, {useState} from "react";

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
        <>
        <h1>이미지 미리보기</h1>
        <table>
            <tr>
                <th>이미지</th>
                <td>
                    <div>
                        {fileImage && (
                            <img
                            alt = "sample"
                            src={fileImage}
                            style={{margin: "auto"}}
                            />
                        )}
                        <div
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        >
                            <label htmlFor="image">
                            <input
                            name="imgUpload"
                            type="file"
                            accept="image/*"
                            onChange={saveFileImage}
                            />
                            <button
                            style={{
                                backgroundColor: "gray",
                                color: "white",
                                width: "55px",
                                height: "40px",
                                cursor: "pointer",
                            }}
                            onClick={() => deleteFileImage()}
                            >삭제</button>
                            </label>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        </>
    );
}

export default Pictureupload;