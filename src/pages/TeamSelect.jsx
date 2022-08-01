import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetTeamInfo } from "../Hooks/useGetTeamInfo"
import { useGetTeamMain } from "../Hooks/useGetTeamMain"
import styled from "styled-components"
import apis from "../api/main"
import { useMutation } from "react-query"
import teamSelectImg from "../img/teamSelect.png";
import { useEffect } from "react"
import { getCookie } from "../Cookie"
import icon_participate from "../img/icon_participate.svg"
import icon_add from "../img/icon_add.svg"
import teamAddProfile from "../img/TeamAddProfile.png"
import teamtuto1 from '../img/teamtuto1.png';
import tutoBt from '../img/tutoBt1.png';

const TeamSelect = () => {
    const token = getCookie('token')
    const navigate = useNavigate();

    const teamJoin = async (data) => {
        return apis.postTeamJoin(data);
    }
    const { mutate: joinMutate } = useMutation(teamJoin, {
        onSuccess: (data) => {
            () => navigate('/teamboard/1');
        },
        onError: (error) => {
        }
    })
    const unaTeamJoin = async () => {
        return apis.postUnaTeamJoin();
    }
    const { mutate: unaJoinMutate } = useMutation(unaTeamJoin, {
        onSuccess: (data) => {
            alert("성공! 팀으로 이동합니다");
            () => navigate('/teamboard/1');
        },
        onError: (error) => {
            alert(error.response.data.error)
        }
    })

    const unaTeamJoinHandler = () => {
        unaJoinMutate();
    }

    const { data } = useGetTeamInfo();
    // const teamId = useParams().teamid;
    // const { data } = useGetTeamMain({ teamId });

    const [openone, setOpenone] = useState(false);
    const [opentwo, setOpentwo] = useState(false);

    // if (!data) {
    //     return <>Something wrong!</>
    // }
    return (
        <>
        {openone?<StTutorial onClick={()=>{setOpenone(false)}} src={teamtuto1}/>:<></>}
            <StBox>
                <StContainer>
                    <StTitleWrapper>
                        <StTitle>접속할 팀 페이지를 선택해주세요</StTitle>
                        {/* <StUnanimousTeamJoin
                            onClick={unaTeamJoinHandler}
                        >Unanimous팀에 참여하시겠습니까?</StUnanimousTeamJoin> */}
                    </StTitleWrapper>
                    <StTeamBox>
                        {data?.map((team, index) => (
                            <StTeamItemBox
                                key={index}>
                                    <StTeamItem
                                        key={index}
                                        className="team-title"
                                        onClick={() => { navigate(`/teamboard/${team.teamId}`) }}
                                        src={{ data }.data[index].teamImage}
                                    >
                                    </StTeamItem>
                                    <StTeamName
                                    onClick={() => { navigate(`/teamboard/${team.teamId}`) }}
                                    >
                                        {team.teamname}
                                    </StTeamName>
                                </StTeamItemBox>
                        ))}
                        {
                            data?.length > 4
                            ? <></>
                            : <StTeamItemBox>
                            <StTeamItemDiv>
                            <StNewTeamItem
                            onClick={() => { navigate(`/teammake`) }}>
                            </StNewTeamItem>
                            </StTeamItemDiv>    
                            <StTeamName 
                            style={{color:"#888888"}}
                            onClick={() => { navigate(`/teammake`) }}
                            >
                                팀 추가하기
                            </StTeamName>
                        </StTeamItemBox>
                        }

                    </StTeamBox>
                    <StButtonWrapper>
                        <StInvitedButton onClick={() => navigate("/teaminvited")}>
                            <StImage imgsrc={icon_participate}>
                            </StImage>
                            이미 초대코드를 받으셨습니까?
                        </StInvitedButton>
                        <StTeamMakeButton onClick={unaTeamJoinHandler}>
                            <StImage imgsrc={icon_add}>
                            </StImage>
                            Unanimous 둘러보기 (체험용)
                        </StTeamMakeButton>
                        <StTutorialBt src={tutoBt} onClick={()=>{setOpenone(true)}}/>
                    </StButtonWrapper>
                </StContainer>
            </StBox>
        </>
    )
}


const StBox = styled.div`
  width : 100%;
  height : 100vh;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding : 0;
  justify-content: center;
  align-items: center;
  background-image: url(${teamSelectImg});
  background-repeat: no-repeat;
  background-size: cover;
  `;

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    
    /* position: relative; */
    width: 1028px;
    height: 562px;
    /* left: 446px;
    top: 352px; */
    `
const StTitleWrapper = styled.div`
    /* Frame 318 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    
    width: 654px;
    height: 101px;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    `
const StTitle = styled.div`
    width: 800px;
    height: 58px;
    margin-bottom: 24px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 43px;
    line-height: 58px;
    /* identical to box height */
    
    text-align: center;
    
    color: #000000;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    `
const StUnanimousTeamJoin = styled.div`
    /* Unanimous팀에 참여하시겠습니까? */
    width: 300px;
    height: 19px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    
    margin-bottom: 20px;
    
    color: #000000;
    
    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
    `
const StTeamBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 60px;
    `

const StTeamItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    /* background-color: red; */
    width: 180px;
    height: 228px;
    `
const StTeamItem = styled.img`
    width: 180px;
    height: 180px;
    
    border-radius: 87px;
    object-fit: cover;
    cursor: pointer;
    `

const StTeamItemDiv = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StNewTeamItem = styled.img`
    width: 107px;
    height: 107px;
    border-radius: 100px;
    background-image: url(${teamAddProfile});
    cursor: pointer;
`
const StTeamName = styled.div`
    /* 팀이름 */
    
    width: 100px;
    height: 24px;
    margin-top: 24px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    
    color: #000000;
    
    /* Inside auto layout */
    
    flex: none;
    order: 0;
    flex-grow: 0;
    `
const StButtonWrapper = styled.div`
    /* Frame 282 */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    /* gap: 290px; */
    
    width: 1028px;
    height: 53px;
    
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    
    margin-top: 120px;
`
const StInvitedButton = styled.div`
    /* Frame 281 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 25px;
    /* gap: 10px; */
    box-sizing: border-box;

    width: 250px;
    height: 53px;

    background: #EBF7FF;
    border-radius: 100px;

    /* Inside auto layout */
    font-size: 14px;

    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
`
const StTeamMakeButton = styled.div`
    /* Frame 282 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 18px 25px;
    gap: 10px;
    box-sizing: border-box;

    width: 260px;
    height: 53px;

    background: #EBF7FF;
    border-radius: 100px;
    font-size: 14px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
`
const StImage = styled.div`
    width: 14px;
    height: 14px;
    background-image: ${props=>`url(${props.imgsrc})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    /* background-color: black; */
    z-index: 100;
    margin-right: 10px;
`
const StTutorialBt = styled.img`
  position : absolute;
  bottom : 40px;
  left : 190px;
  width : 60px;
  height: 60px;
  cursor: pointer;
`;

const StTutorial = styled.img`
  position : fixed;
  width: 100vw;
  height : 100vh;
  z-index: 10;
`;


export default TeamSelect;