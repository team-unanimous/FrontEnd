import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-query";

const Mypage = () => {
    const [images, setImages] = useState("");

    // 이미지 등록
    // 이미지넣기  onchange={(e)=>setfiles(e.target.files)}와 같지만 콘솔찍기위해 
    const onLoadFile = (e) => {
        const file = setImages(e.target.files)
        console.log(file);
    }

    // 이미지 전송
    //
    const handleClick = (e) => {
        const formdata = new FormData();
        formdata.append('uploadImage', e.target.files[0])
        apis.postPicturePost(formdata)
    }

    // 이미지 업로드
    const { mutate: PicturePo } = useMutation(handleClick, {
        onSuccess: () => {
            alert("이미지 업로드에 성공하셨니다")
        },
        onError: (error) => {
            alert("이미지 업로드에 실패하셨습니다")
        }
    })

    // 이미지 버튼
    const picturePostFunction = () => {
        console.log(images)
        PicturePo({
            filetype: images,
        })
    }

    return (
        <Stwrap>
            <Stmybox>
                <StMyTitle>
                    마이페이지
                </StMyTitle>
                <Sttext>
                    팀 관련 정보를 관리 및 수정할 수 있습니다.
                </Sttext>
            </Stmybox>
        </Stwrap>
    );
}


const Stwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`

const Stmybox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width : 850px;
  height : 114px;
  background: #EAEAEA;
  border-radius: 16px;
  padding: 30px 0px 30px 30px;
`

const StMyTitle = styled.div`
text-align: center;
font-size: 24px;
font-weight: 600;
width: 121px;
height: 29px;
`
const Sttext = styled.div`
justify-content: center;
width: 249px;
height: 17px;

font-family: 'Inter';
font-weight: 500;
font-size: 14px;
line-height: 17px;
`


export default Mypage;