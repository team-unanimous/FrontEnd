import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetTeamInfo } from "../Hooks/useGetTeamInfo"
import styled from "styled-components"
import apis from "../api/main"
import { useMutation } from "react-query"
import teamSelectImg from "../img/teamSelect.png";
import { useEffect } from "react"
import { getCookie } from "../Cookie"

//테스트
// import axis from '../api/sub'



const TeamSelect = () => {
    const token = getCookie('token')
    const navigate = useNavigate();
    
    const teamJoin = async (data) => {
        return apis.postTeamJoin(data);
    }
    const { mutate: joinMutate } = useMutation(teamJoin, {
        onSuccess: (data) => {
            console.log(data);
            console.log(data.data);
            () => navigate('/teamboard/1');
        },
        onError: (error) => {
            console.log(error);
        }
    })
    const unaTeamJoin = async () => {
        return apis.postUnaTeamJoin();
    }
    const { mutate: unaJoinMutate } = useMutation(unaTeamJoin, {
        onSuccess: (data) => {
            console.log(data);
            alert("성공! 팀으로 이동합니다");
            () => navigate('/teamboard/1');
        },
        onError: (error) => {
            alert(error.response.data.error)
        }
    })

    const unaTeamJoinHandler = () => {
        console.log("성공")
        unaJoinMutate();
    }

    const { data } = useGetTeamInfo();

    if (!data) {
        return <>Something wrong!</>
    }
    return (
        <>
            <StBox>
                <StContainer>
                    <StTitleWrapper>
                        <StTitle>접속할 팀 페이지를 선택해주세요</StTitle>
                        {/* <StUnanimousTeamJoin
                            onClick={unaTeamJoinHandler}
                        >Unanimous팀에 참여하시겠습니까?</StUnanimousTeamJoin> */}
                    </StTitleWrapper>
                    <StTeamBox>
                        {data.map((team, index) => (
                                <StTeamItemBox 
                                key={index}>
                                    <StTeamItem
                                        key={index}
                                        className="team-title"
                                        onClick={() => { navigate(`/teamboard/${team.teamId}`) }}
                                        src={{ data }.data[0].teamImage}
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
                            data.length > 4
                            ? <></>
                            : <StTeamItemBox>
                            <StTeamItem
                            onClick={() => { navigate(`/teammake`) }}
                            >
                            </StTeamItem>
                            <StTeamName 
                            style={{color:"grey"}}
                            onClick={() => { navigate(`/teammake`) }}
                            >
                                새로 만들기
                            </StTeamName>
                        </StTeamItemBox>
                        }

                    </StTeamBox>
                    <StButtonWrapper>
                        <StInvitedButton onClick={() => navigate("/teaminvited")}>
                            이미 초대된 팀 페이지에 접속하고 싶으신가요?
                        </StInvitedButton>
                        <StTeamMakeButton onClick={unaTeamJoinHandler}>
                            Unanimous 둘러보기 (체험용)
                        </StTeamMakeButton>
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
    background-color: rebeccapurple;
    `

const StTeamItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background-color: red;
    `
const StTeamItem = styled.img`
    width: 180px;
    height: 180px;
    
    background-color: #D9D9d9;
    border-radius: 87px;
    object-fit: cover;
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
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 18px 25px;
    /* gap: 10px; */
    box-sizing: border-box;

    width: 353px;
    height: 53px;

    background: #F5F5F5;
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
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 18px 25px;
    gap: 10px;
    box-sizing: border-box;

    width: 309px;
    height: 53px;

    background: #F5F5F5;
    border-radius: 100px;
    font-size: 14px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
`


export default TeamSelect;