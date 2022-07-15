import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import apis from "../api/main";
import { useSelector } from "react-redux";
import axios from "axios";

const Mypage = () => {
    const [files, setFiles] = useState("");

    // userid값 뽑기
    const usersData = useSelector((state) => state.postReducer.users.userids)
    // console.log(usersData);

    // 이미지 등록
    // 이미지넣기  onchange={(e)=>setfiles(e.target.files)}와 같지만 콘솔찍기위해 
    const onLoadFile = (e) => {
        const file = e.target.files[0]
        console.log(file);
        setFiles(file);
    }


    //     await axios({
    //         method: 'post',
    //         url: 'http://13.125.217.152/api/users/signup/2',
    //         data: formData,
    //         processData: false,
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });
    // }

    // 이미지 전송
    // FormData() 새로운 FormData 객체를 생성
    // formdata.append(key,value) 새로운 값을 추가해준다
    // 키값이 있으면 해당 키값으로 데이터만 넣어줌
    // formdata는 key랑 value 값을 확인할 수가 없다 > formdata넣는값은 확인가능
    const picturePost = async (data) => {
        const formData = new FormData();
        formData.append('profileImage', files)
        // formData.append('profileImage2', files.name)
        console.log(data)
        console.log(files)
        console.log(files.name)
        console.log(formData)
        for (var key of formData.keys()) {
            console.log(key);
        }
        for (var value of formData.values()) {
            console.log(value);
        }
        const formdataimg = await apis.postPicturePost(formData);
        return formdataimg;
    }


    // 이미지 업로드
    const { mutate } = useMutation(picturePost, {
        onSuccess: () => {
            alert("이미지 업로드에 성공하셨니다")
        },
        onError: (error) => {
            alert("이미지 업로드에 실패하셨습니다")
        }
    })

    // 이미지 버튼
    const picturePostFunction = () => {
        mutate({
            profileImage: files,
        })
    }

    return (
        <StWrap>
            <StBigBox>
                <Stmybox>
                    <StTextBox>
                        <StMyTitle>
                            마이페이지
                        </StMyTitle>
                        <Sttext>
                            팀 관련 정보를 관리 및 수정할 수 있습니다.
                        </Sttext>
                    </StTextBox>
                </Stmybox>
                <StProfileBox>
                    <p>프로필</p>
                    <p>프로필 이미지</p>
                    <StProfile type="file" accept='img/*'
                        onChange={onLoadFile} />
                    <StProfileBtn onClick={picturePostFunction}>
                        이미지 추가하기
                    </StProfileBtn>
                </StProfileBox>
                <StChangeBox>
                    <p>닉네임</p>
                    <StChangeInput>
                    </StChangeInput>
                    <StChangeBtn>
                    </StChangeBtn>
                </StChangeBox>
                <StBtnBox>
                    <StCancelBtn>
                        <StCanceltitle>취소</StCanceltitle>
                    </StCancelBtn>
                    <StConfirmBtn>
                        <StConfrimtitle>변경</StConfrimtitle>
                    </StConfirmBtn>
                </StBtnBox>
            </StBigBox>
        </StWrap>
    );
}



const StWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`

const StBigBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 850px;
height: 969px;
margin-top: 194px;
`

const Stmybox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 30px 30px 30px;
  width : 820px;
  height : 84px;
  background: #EAEAEA;
  border-radius: 16px;
`

const StTextBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 30px;
width: 284px;
height: 54px;
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
width: 280px;
height: 17px;
font-family: 'Inter';
font-weight: 500;
font-size: 14px;
line-height: 17px;
`

const StProfileBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 573px;
height: 709px;
margin-top: 60px;
`

const StProfile = styled.input`
width: 117px;
height: 117px;
border-radius: 100px;
background: #E5E7EB;
`

const StProfileBtn = styled.button`
display: flex;
justify-content: center;
width: 120px;
height: 25px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
`

const StBtnBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 18px;
width: 418px;
height: 54px;
`

const StCancelBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 54px;
border: 1px solid #000000;
border-radius: 6px;
background-color: white;
cursor: pointer;
`

const StCanceltitle = styled.div`
width: 37px;
height: 24px;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-align: center;
color: #000000;
`

const StConfirmBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 54px;
border: 1px solid #000000;
border-radius: 6px;
background-color: black;
cursor: pointer;
`

const StConfrimtitle = styled.div`
width: 37px;
height: 24px;
font-weight: 700;
font-size: 20px;
color: #ffffff;
`

const StChangeBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 541px;
height: 78px;
`

const StChangeInput = styled.input`
align-items: center;
padding: 15px;
gap: 10px;
width: 400px;
height: 49px;
border: 1px solid #000000;
border-radius: 6px;
`

const StChangeBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px;
width: 132px;
height: 49px;
background: #000000;
border-radius: 6px;
`

export default Mypage;