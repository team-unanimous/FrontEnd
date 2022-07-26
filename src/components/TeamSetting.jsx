import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import xicon from '../img/delete.png'
import apis from '../api/main';
import useGetTeamMain from '../Hooks/useGetTeamMain'
import jwt_decode from "jwt-decode";
import { getCookie } from '../Cookie';
import ImageModal from './MypageModal/ImageModal';
import LeaderModal from './LeaderModal';
import BanModal from './BanModal';
import InviteMember from './InviteMember';
import TeamManage from '../img/Preferences-20220725T100832Z-001/Preferences/leader/btn1.svg'
import EditTeam from '../img/Preferences-20220725T100832Z-001/Preferences/leader/btn2.svg'
import Introduction from '../img/Preferences-20220725T100832Z-001/Preferences/leader/introduction.svg'
import TIntroduction from '../img/Preferences-20220725T100832Z-001/Preferences/leader/team/0.team_introduction.svg'
import copyIcon from '../img/Preferences-20220725T100832Z-001/Preferences/leader/team/1.btn_copy.svg'
import selectIcon from '../img/Preferences-20220725T100832Z-001/Preferences/leader/team/3.btn_selection.svg'
import inviteIcon from '../img/Preferences-20220725T100832Z-001/Preferences/leader/team/2.invitation/btn_invitation.svg'
import closeIcon from '../img/Preferences-20220725T100832Z-001/Preferences/leader/team/modal/icon_close.svg'





const TeamSetting = (props) => {

    const [state, setState] = useState(0);
    
    const [openLeader,setOpenLeader] = useState(false);
    const [openBan,setOpenBan] = useState(false);
    const [openInvite,setOpenInvite] = useState(false);
    const [userid,setUserid] = useState();


    const teamId = useParams().teamid;

    const navigate = useNavigate();

    // console.log(props.teamLeader)

    const teamLeader = props.teamLeader;

    const decoded = jwt_decode(getCookie('token'));
    const nickname = decoded.USER_NICKNAME;
    const userId = decoded.userId;
    // 팀 정보 받아오기
    const { data } = useGetTeamMain({ teamId });
    const teamid = { data }.data.teamid
    const teamname = useRef("");


    // 복사하기 버튼
    const handleCopyClipBoard = async (text) => {
        await navigator.clipboard.writeText(text);
    };

    // 팀에서 나가기
    const leave = async (data) => {
        const datas = await apis.deleteTeamLeave(data);
        return datas;
    }

    const { mutate: leaves } = useMutation(leave, {
        onSuccess: () => {
            alert("나가기완료");
            navigate(`/teamselect`)
        },
        onError: (error) => {
            alert("나가기 불가");
        }
    });

    const leaving = () => {
        leaves({
            teamId: teamId,
            userId: userId
        })
    }

    // 팀원 추방
    const ban = async (data) => {
        const datas = await apis.deleteTeamMember(data);
        return datas
    }

    const { mutate: bann } = useMutation(ban, {
        onSuccess: () => {
            alert("내보내기 완료");
        },
        onError: () => {
            alert("내보내기 실패");
        }
    })

    const banning = (userId) => {
        bann({
            teamId: teamId,
            userId: userId
        })
    }


    const [imgmodalopen, setImgmodalopen] = useState(false);

    //모달 열
    const ImgModalOpen = () => {
        setImgmodalopen(true);
    }
    //모달 닫
    const ImgModalCancel = () => {
        setImgmodalopen(false);
    }
    // 실행 후 닫기
    const exfunction = () => {
        editingimg()
        ImgModalCancel()
    }


    // 이미지 올리기
    const [imgfiles, setImgfiles] = useState();

    const onLoadFile = (e) => {
        const file = e.target.files[0]
        console.log(file);
        setImgfiles(file)
    }

    const formData = new FormData();
    formData.append('profileTeamImage', imgfiles)
    // for (let key of formData.keys()) {
    //     console.log(key);
    // }
    // for (let value of formData.values()) {
    //     console.log(value);
    // }


    // 팀 프로필이미지 수정
    const editImage = async (data) => {
        console.log(data)
        console.log(data.teamImage)
        const datas = await apis.patchTeamImage(data);
        console.log(datas)
        return datas;
    }

    const { mutate: editimg } = useMutation(editImage, {
        onSuccess: () => {
            alert("수정 완료");
        },
        onError: () => {
            alert("수정 실패");
        }
    });

    const editingimg = () => {
        editimg({
            teamImage: formData,
            teamId: teamid,
        })
    }



    // 팀 프로필닉네임 수정
    const editNick = async (data) => {
        const datas = await apis.patchTeamNick(data);
        return datas;
    }

    const { mutate: editnick } = useMutation(editNick, {
        onSuccess: () => {
            alert("수정 완료");
        },
        onError: () => {
            alert("수정 실패");
        }
    });

    const editingnick = () => {
        editnick({
            teamname: teamname.current.value,
            teamId: teamid,
        })
    }

    const closeLeader = () => {
        setOpenLeader(false);
    }

    const closeBan = () =>{
        setOpenBan(false);
    }

    const closeInvite =() =>{
        setOpenInvite(false);
    }

    return (
        <>
            <ImageModal
            open={imgmodalopen}
            select={onLoadFile}
            save={exfunction}
            close={ImgModalCancel}
            />    
            <LeaderModal 
            open={openLeader} 
            close={closeLeader}
            teamId={teamId}/>
            <BanModal
            open={openBan}
            close={closeBan}
            teamId={teamId}
            userId={userid}
            />
            <InviteMember
            open={openInvite}
            close={closeInvite}
            />
            {teamLeader !== nickname ?
                <StRight>
                    <StTeamOutBox>
                        <StTeamBox>
                            <StIntro src={Introduction}/>
                            
                            <StDown>
                                <StComeOn>
                                    <StBlack>
                                        팀 초대코드
                                    </StBlack>
                                    <StInputBox>
                                        <StInput>{data.uuid}</StInput>
                                        <StCopyBt onClick={() => handleCopyClipBoard(`${data.uuid}`)} src={copyIcon}/>
                                    </StInputBox>
                                </StComeOn>
                                <StListBox>
                                    <StBlack>
                                        팀원 관리
                                    </StBlack>

                                    <img onClick={()=>{setOpenInvite(true);}} src={inviteIcon}/>
                                    <StMateList>
                                        {props?.prop.map((value, index) => {
                                            return <StUserBox key={index}>
                                                <StUserImg />
                                                <StUserInfo>
                                                    <StUserName>{value.nickname}</StUserName>
                                                    <StEmail>{value.username}</StEmail>
                                                </StUserInfo>

                                            </StUserBox>
                                        })}
                                    </StMateList>
                                </StListBox>
                            </StDown>
                            <StLine />
                            <StOut onClick={leaving}>팀 탈퇴하기</StOut>
                        </StTeamBox>
                    </StTeamOutBox></StRight> : <></>}
            {state == 0 && teamLeader == nickname ?
                <StRight>
                    <StBox>
                        <img src={Introduction}/>
                        <StDownBox>
                            <StTeamManage src={TeamManage} onClick={() => { setState(1) }}/>
                            <StTeamManage src={EditTeam} onClick={() => { setState(2) }}/>
                        </StDownBox>
                    </StBox>
                </StRight> : <></>
            }
            {state == 1 && teamLeader == nickname ?
                <StRight>
                    <StTeamOutBox>
                        <StTeamBox>
                            <StTIntro src={TIntroduction}/>
                            <StInBox>
                                <StDown>
                                    <StComeOn>
                                        <StBlack>
                                            팀 초대코드
                                        </StBlack>
                                        <StInputBox>
                                            <StInput>{data.uuid}</StInput>
                                            <StCopyBt onClick={() => handleCopyClipBoard(`${data.uuid}`)} src={copyIcon}/>
                                        </StInputBox>
                                    </StComeOn>
                                    <StListBox>
                                        <StBlack >
                                            팀원 관리
                                        </StBlack>
                                        <StUserBt onClick={()=>{setOpenInvite(true);}} src={inviteIcon}/>
                                        <StMateList>
                                            {props?.prop.map((value, index) => {
                                                return <StUserBox key={index}>
                                                    <StUserImg />
                                                    <StUserInfo>
                                                        <StUserName>{value.nickname}</StUserName>
                                                        <StEmail>{value.username}</StEmail>
                                                    </StUserInfo>
                                                    <StXBox onClick={()=>{setOpenBan(true);setUserid(value.userId);console.log(userid)}}>
                                                        <StXicon src={closeIcon}/>
                                                    </StXBox>
                                                </StUserBox>
                                            })}
                                        </StMateList>
                                    </StListBox>
                                    <StMovePower>
                                        <StBlack>
                                            팀장 권한 위임
                                        </StBlack>
                                        <StUserBt onClick={() => { setOpenLeader(true) }} src={selectIcon}/>
                                    </StMovePower>
                                </StDown>
                                <StLine />
                                <StOut onClick={leaving}>팀 탈퇴하기</StOut>
                                <StBtBox>
                                    <StCancelBt onClick={() => { setState(0) }}>취소</StCancelBt>
                                </StBtBox>
                            </StInBox>
                        </StTeamBox>
                    </StTeamOutBox></StRight> : <></>
            }
            {state == 2 && teamLeader == nickname ?
                <StRight>
                    <StEdit>
                        <StUpBox1>
                            <StSetting>기본 정보 수정</StSetting>
                            <StSmall>팀 정보를 확인하고 쉽게 변경할 수 있습니다.</StSmall>
                        </StUpBox1>
                        <StLine />
                        <StProfile>
                            <StBlack>
                                팀 프로필 이미지
                            </StBlack>
                            <StImg src={{ data }.data.teamImage} />
                            <StImgInput htmlFor='file' onClick={ImgModalOpen}>이미지 추가하기</StImgInput>
                        </StProfile>
                        <StNameBox>
                            <StBlack>
                                팀명
                            </StBlack>
                            <StNameDown>
                                <StNameInput ref={teamname} />
                                <StNameBt onClick={editingnick}>변경</StNameBt>
                            </StNameDown>
                        </StNameBox>
                        <StBtBox>
                            <StCancelBt onClick={() => { setState(0) }}>취소</StCancelBt>
                        </StBtBox>
                    </StEdit>
                </StRight> : <></>
            }
        </>
    )
}

const StIntro = styled.img`
    margin : 48px 0 0 0;
`;

const StUserBt = styled.img`
    width : 160px;
    height : 48px;
    margin : 12px 0 0 0;
    cursor: pointer;
`;

const StCopyBt = styled.img`
    width : 160px;
    height : 48px;

    cursor: pointer;
`;


const StInBox = styled.div`
    width : 1088px;
    background-color: white;
    padding: 48px;
    border-radius: 20px;
`;

const StTIntro = styled.img`
    width : 1184px;
    margin : 48px 0 0 0;
`;

const StTeamManage = styled.img`
    width : 584px;
    height : 517px;
`;

const StEdit = styled.div`
    width : 100%;
    height: 800px;
    padding : 0 0 0 80px;
`;

const StNameBt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 132px;
    height : 49px;
    background-color: black;
    color:white;
    border-radius: 6px;
`;

const StNameInput = styled.input`
    width : 400px;
    height : 45px;
    border: 1px solid black;
    border-radius: 6px;
`;

const StNameDown = styled.div`
    display: flex;
    justify-content: space-between;
    width : 541px;
    height : 49px;
`;

const StNameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width : 541px;
    height : 80px;
    margin : 0 0 80px 0;
`;


const StImgInput = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 125px;
    height : 25px;
    border-radius: 5px;
    border: 1px solid black;
    font-weight: 400;  
    font-size: 14px;
`;

const StImg = styled.img`
    width : 125px;
    height : 125px;
    border-radius: 125px;
    background-color: #E5E7EB;
    margin : 12px 0 12px 0;
    object-fit: cover;
`;

const StProfile = styled.div`
    display: flex;
    flex-direction: column;
    width : 125px;
    height : 195px;
    margin : 0 0 36px 0;
`;

const StXBox = styled.div`
    width : 18px;
    height : 18px;
    margin : 0 10px 0 auto;
    cursor: pointer;
`;

const StXicon = styled.img`
    width : 18px;
    height : 18px;
    cursor: pointer;
`;

const StCancelBt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 200px;
    height : 54px;
    background-color: white;
    color : black;
    border-radius: 6px;
    border : 1px solid black;
`;

const StBtBox = styled.div`
    display: flex;
    justify-content: center;
    width : 418px;
    height : 54px;
    margin : 0 auto 0 auto;
`;

const StMovePower = styled.div`
    display : flex;
    flex-direction : column;
    width: 142px;
    height: 81px;
`;

const StEmail = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color:#818181;
`;

const StUserName = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;

const StUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 124px;
    height: 39px;
    margin : 0 0 0 14px;
`;

const StUserImg = styled.div`
    width : 39px;
    height : 39px;
    border-radius: 39px;
    background-color: grey;
`;

const StUserBox = styled.div`
    display: flex;
    align-items: center;
    width : 400px;
    height: 39px;
    padding : 14px 5px 14px 16px;
    border-radius: 6px;
    background-color: #F1F1F1;
    margin : 5px 0 5px 0;
`;

const StMateList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width : 850px;
    height : 259px;
    margin : 12px 0 20px 0;
    overflow-x: hidden;
    ::-webkit-scrollbar{
    width:10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #2f3542;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-track{
        
        border-radius: 1rem;
    }
`;

const StOut = styled.div`
    width : 98px;
    height : 20px;
    margin : 0 auto 50px 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`;

const StListBox = styled.div`
    display: flex;
    flex-direction: column;
    width : 850px;
    height : 364px;
    margin : 36px 0 0 0;
`;

const StInput = styled.div`
    display: flex;
    padding: 15px;
    width : 710px;
    height : 17px;
    border-radius: 6px;
    border: 1px solid black;
`;

const StInputBox = styled.div`
    display: flex;
    justify-content: space-between;
    
    height: 49px;
`;

const StBlack = styled.div`
    width : 150px;
    height : 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;

const StComeOn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width :850px;
    height : 81px;
`;

const StDown = styled.div`
    width : 850px;
    height : 598px;
`;

const StLine = styled.div`
    width : 850px;
    height : 2px;
    margin : 36px 0 36px 0;
    background-color: #EAEAEA;
`;

const StTeamOutBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 1184px;
    height : 914px;
    overflow-x: hidden;
    ::-webkit-scrollbar{
    width:10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #818181;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-track{
        border-radius: 1rem;
    }
`;

const StTeamBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 1184px;
    height : 814px;
`;



const StDownBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1184px;
    height: 517px;
    margin : 32px 0 0 0;
    cursor: pointer;
`;

const StSmall = styled.div`
    width: 300px;
    height: 17px;
    margin : 0 0 0 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
`;

const StManage = styled.div`
    width: 120px;
    height: 29px;
    margin : 0 0 8px 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
`;

const StSetting = styled.div`
    width: 200px;
    height: 29px;
    margin : 0 0 8px 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
`;

const StUpBox2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width : 825px;
    height : 124px;
    padding : 30px 0 30px 30px;
    background-color: #EAEAEA;
    border-radius: 8px;
`;

const StUpBox1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width : 825px;
    height : 124px;
    padding : 0 0 0 30px;
    background-color: #EAEAEA;
    border-radius: 8px;
`;

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width : 1184px;
    height : 510px;
    margin : 48px 0 0 0;
`;

const StRight = styled.div`
  width : 1184px;
  height : 86.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 181px 36px 38px;
  border-top-left-radius: 20px;
  background-color: #F2F6F9;
`;

export default TeamSetting