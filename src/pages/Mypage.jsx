import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import apis from "../api/main";
import { removeCookie, getCookie, setCookie } from '../Cookie';
import { useNavigate } from 'react-router'
import ImageModal from "../components/MypageModal/ImageModal";
import NickNameModal from "../components/MypageModal/NickNameModal";
import PasswordModal from "../components/MypageModal/PasswordModal";
import DefaultImg from "../img/DefaultImg.jpg"
import jwt_decode from "jwt-decode";
import Header from "../components/Header"
import boximg from "../img/mypageIntro.svg"
import axis from "../api/sub";

const Mypage = () => {

    // 토큰에서 가져와서 해석하고 userid 가져오기
    const ontoken = jwt_decode(getCookie('token'));
    const usersid = ontoken.userId
    const useremail = ontoken.USER_NAME
    const usernn = ontoken.USER_NICKNAME
    // 토큰에서 이미지 가져오기
    const usersimg = ontoken.USER_IMAGE



    const navigate = useNavigate();
    const [files, setFiles] = useState("");
    // 이미지 미리보기 값 state로박기 
    const [loadimg, setLoadimg] = useState(null);
    const [password, setPassword] = useState("");

    // 모달 열닫 보관
    const [imgmodalopen, setImgmodalopen] = useState(false);
    const [nicknamemodalopen, setNicknamemodalopen] = useState(false);
    const [passwordmodalopen, setPasswordmodalopen] = useState(false);

    //모달 열
    const ImgModalOpen = () => {
        setImgmodalopen(true);
    }

    const NicknameModalOpen = () => {
        setNicknamemodalopen(true);
    }

    const PasswordModalOpen = () => {
        setPasswordmodalopen(true);
    }

    //모달 닫
    const ImgModalCancel = () => {
        setImgmodalopen(false);
    }

    const NicknameModalCancel = () => {
        setNicknamemodalopen(false);
    }

    const PasswordModalCancel = () => {
        setPasswordmodalopen(false);
    }

    // 비밀번호 정규식
    const passwordlock = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{3,16}$/;
    const pwlock = (pw) => {
        return passwordlock.test(pw)
    }

    // 비밀번호모달이동 비활성화 버튼 false일때 활성화
    const DisableFunction = () => {
        if (Boolean(password) === false)
            return true;
        else if (pwlock(password) === false)
            return true;
        else return false;
    }



    // 이미지 등록
    // 이미지넣기  onchange={(e)=>setfiles(e.target.files)}와 같지만 콘솔찍기위해 
    const onLoadFile = (e) => {
        const file = e.target.files[0]
        setFiles(file)
        // 미리보기 부분 > 파일이미지를 url변경후 state에 저장
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => setLoadimg(e.target.result)
    }


    const exfunction = () => {
        picturePostFunction()
        ImgModalCancel()
    }



    // formdata 안에 넣기
    const formData = new FormData();
    formData.append('profileImage', files);

    // 사진 값보기
    // for (let key of formData.keys()) {
    //     console.log(key);
    // }
    // for (let value of formData.values()) {
    //     console.log(value);
    // }

    // 이미지 전송
    // FormData() 새로운 FormData 객체를 생성
    // formdata.append(key,value) 새로운 값을 추가해준다
    // 키값이 있으면 해당 키값으로 데이터만 넣어줌
    // formdata는 key랑 value 값을 확인할 수가 없다 > formdata넣는값은 확인가능
    const picturePost = async (data) => {
        for (let key of data.profileImage.keys()) {
        }
        for (let value of data.profileImage.values()) {
        }
        const formdataimg = await apis.postPicturePost(data);
        setCookie("token", formdataimg.headers.authorization);
        return formdataimg;
    }

    // 이미지 업로드
    const { mutate: pictureGo } = useMutation(picturePost, {
        onSuccess: () => {
            alert("이미지 업로드에 성공하셨니다")
        },
        onError: (error) => {
            alert("이미지 업로드에 실패하셨습니다")
        },
        onSettled: () => {

        }
    })

    // 이미지 버튼
    const picturePostFunction = () => {
        pictureGo({
            profileImage: formData,
            userid: usersid,
        })
    }



    // 기본 이미지 전송

    const defaultPost = async (data) => {
        for (let key of data.profileImage.keys()) {
        }
        for (let value of data.profileImage.values()) {
        }
        const formdataimg = await axis.postPicturePost(data);
        setCookie("token", formdataimg.headers.authorization);
        return formdataimg;
    }

    const { mutate: defaultGo } = useMutation(defaultPost, {
        onSuccess: () => {
            alert("이미지 업로드에 성공하셨니다")
        },
        onError: (error) => {
            alert("이미지 업로드에 실패하셨습니다")
        }
    })

    const form = new FormData();

    const defaultPostFunction = () => {
        form.set('profileImage', "1", null);
        // form.delete('profileImage')
        defaultGo({
            profileImage: form,
            userid: usersid,
        })
    }



    // 비밀번호 변경모달로 이동
    const passwordPost = (data) => {
        return apis.postPasswordChange(data)
            .then((response) => {
                // response.data
                alert("비밀번호가 일치합니다")
                PasswordModalOpen();
            })
            .catch(error => {
                alert("비밀번호를 틀리셨습니다")
            })
    }

    const { mutate: passwordGo } = useMutation(passwordPost, {
        onSuccess: () => {
            // alert("비밀번호가 일치합니다")
        },
        onError: (error) => {
            // alert("비밀번호를 틀리셨습니다")
        }
    })
    const posswordPostFunction = () => {
        passwordGo({
            password: password,
        })
    }

    // 로그아웃
    const UserLogout = () => {
        removeCookie('token')
        navigate('/')
    }

    // 홈으로
    const gohome = () => navigate(-1);


    return (
        <StWrap>
           
            <ImageModal
                open={imgmodalopen}
                select={onLoadFile}
                close={ImgModalCancel}
                save={exfunction}
            />
            <NickNameModal
                open={nicknamemodalopen}
                close={NicknameModalCancel}
            />
            <PasswordModal
                open={passwordmodalopen}
                close={PasswordModalCancel}
            />
            <StUpBox src={boximg} />
            <StBigBox>
                <StProfileBox>
                    <StprofileText>프로필</StprofileText>
                    <StprofileTextmini>프로필 이미지</StprofileTextmini>
                    <StProfile src={usersimg} />
                    <StImgBox>
                        <StImgChangeBtn onClick={ImgModalOpen}>
                            이미지 변경
                        </StImgChangeBtn>
                        <StImgBasicChangeBtn onClick={defaultPostFunction}>
                            기본 이미지
                        </StImgBasicChangeBtn>
                    </StImgBox>
                    <StprofileTextmini>
                        닉네임
                    </StprofileTextmini>
                    <StChangeBox>
                        <StChangeDiv>
                            <StEmailletter>
                                {usernn}
                            </StEmailletter>
                        </StChangeDiv>
                        <StChangeBtn onClick={NicknameModalOpen}>
                            변경
                        </StChangeBtn>
                    </StChangeBox>
                    <StStraightLine />
                    <StprofileText>개인정보</StprofileText>
                    <StprofileTextmini>
                        계정
                    </StprofileTextmini>
                    <StEmailDiv>
                        <StEmailletter>
                            {useremail}
                        </StEmailletter>
                    </StEmailDiv>
                    <StprofileTextmini>
                        비밀번호
                    </StprofileTextmini>
                    <StChangeBox>
                        <StChangeInput onChange={(e) => setPassword(e.target.value)}
                            placeholder="현재 비밀번호를 입력하세요"
                            type='password'
                        />
                        <StChangeBtn onClick={posswordPostFunction}
                            disabled={DisableFunction()}>
                            변경
                        </StChangeBtn>
                    </StChangeBox>
                    <StStraightLine />
                    <StLogoutTitle onClick={UserLogout}>
                        로그아웃
                    </StLogoutTitle>
                </StProfileBox>
                <StBtnBox>
                    <StCancelBtn onClick={gohome}>
                        취소
                    </StCancelBtn>
                </StBtnBox>
            </StBigBox>
        </StWrap >
    );
}

const StImgBasicChangeBtn = styled.button`
                width : 132px;
                height : 54px;
                background-color: white;
                color : black;
                border: solid 1px #063250;
                border-radius: 6px;
                margin-top: 12px;
                cursor: pointer;
                `

const StImgBox = styled.div`
    display: flex;
    justify-content: space-between;
    width : 273px;
    height : 54px;
`

const StUpBox = styled.img`
width: 870px;
height: 114px;
border-radius: 8px;
margin-top: 48px;
margin-bottom: 32px;
object-fit: cover;
`

const StStraightLine = styled.div`
  background-color: #D9D9D9;
  width : 100%;
  height : 1px;
  margin-bottom: 37.25px;
`;

const StLogoutTitle = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #EF6A61;
    cursor: pointer;
`
const StEmailletter = styled.div`
display: flex;
align-items: center;
height: 49px;
font-weight: 500;
font-size: 16px;
line-height: 19px;
`

const StEmailDiv = styled.div`
                width: 526px;
                height: 49px;
                border: 1px solid #000000;
                border-radius: 6px;
                // placeholder 앞간격
                padding-left: 10px;
                `


const StWrap = styled.div`
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width : 100%;
                height : 100%;
                background: #F2F6F9;
                `

const StBigBox = styled.div`
                display: flex;
                flex-direction: column;
                /* align-items: center; */
                padding: 48px;
                width: 754px;
                height: 755px;
                background-color: white;
                border-radius: 8px;
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
                height: 769px;
                `

const StProfile = styled.img`
                width: 117px;
                height: 117px;
                border-radius: 100px;
                `

const StBtnBox = styled.div`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 754px;
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

const StChangeBox = styled.div`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                width: 541px;
                height: 89.75px;
                `

const StChangeInput = styled.input`
width: 400px;
height: 49px;
border: 1px solid #000000;
border-radius: 6px;
// placeholder 앞간격
padding-left: 10px;
`

const StChangeDiv = styled.div`
                width: 400px;
                height: 49px;
                border: 1px solid #000000;
                border-radius: 6px;
                // placeholder 앞간격
                padding-left: 10px;
                `

const StImgChangeBtn = styled.button`
                width : 132px;
                height : 54px;
                background-color: #063250;
                color : white;
                border: solid 1px #063250;
                border-radius: 6px;
                margin-top: 12px;
                cursor: pointer;
                `

const StChangeBtn = styled.button`
                width : 132px;
                height : 52px;
                margin : 0 0 0 9px;
                background-color: #063250;
                color : white;
                border: solid 1px #063250;
                border-radius: 6px;
                cursor: pointer;
                `

const StprofileText = styled.div`
                font-weight: 700;
                font-size: 16px;
                `

const StprofileTextmini = styled.div`
                font-weight: 500;
                font-size: 14px;
                margin-top: 16px;
                margin-bottom: 12px;
                `

export default Mypage;