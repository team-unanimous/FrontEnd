import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const MeetingRoom = () => {

    const videoRef = useRef(null);
    const [video,setVideo] = useState(true);
    const [cameraSelect,setCameraSelect] = useState();
    const [cameraIdSelect,setCameraIdSelect] = useState();
    const [cameraList , setCameraList] = useState();
    const [cameraIdLists , setCameraIdLists] = useState();

    const cameraLabelList = [];
    const cameraIdList = [];
    const [clicked,setClicked] = useState(false);

    // 미디어 권한 요청
    const openMediaDevices = async (constraints)=>{
        return await navigator.mediaDevices.getUserMedia(constraints);
    }

    useEffect(()=>{
        
        // 유저의 미디어 기기 가져오기
        const getConnectedDevices=async()=>{
            const devices = await navigator.mediaDevices.enumerateDevices();
            const cameras = devices.filter(device=>device.kind=="videoinput");
            cameras.forEach(camera=>{
                cameraIdList.push(camera.deviceId);
                cameraLabelList.push(camera.label);
            })
            setCameraList(cameraLabelList);
            setCameraIdLists(cameraIdList);
            return cameras
        }

        const videoList = getConnectedDevices();
        
        // 영상 재생하기
        const playVideoFromCamera=async()=>{
            try{
                const stream = openMediaDevices({
                    video:video,
                    audio:true,
                });
                videoRef.current.srcObject =await stream;
            } catch (error){
                console.log(error);
            }
        };
        playVideoFromCamera();
    },[])

    //  카메라 바꿔주기
    const changeCamera = async(deviceId)=>{
        try{
            const stream = openMediaDevices({
                video:{deviceId:video},
                audio:true,
            })
        }catch(error){
            console.log(error)
        }
    }

    const changing = (value) => {
        setClicked(!clicked);
        setCameraSelect(value);
        console.log(cameraSelect)

        setIndex(cameraList.indexOf(cameraSelect));
        console.log(index);
        setCameraIdSelect(cameraIdLists[index]);
        changeCamera(cameraIdSelect)
    }

    const mute =()=>{
        const a = document.getElementById('video');
        a.muted = !a.muted;
        console.log(a);
    }

    const autoplay = async()=>{
        try{ 
            const stream = openMediaDevices({
            video:!video,
            audio:true,
            });
            videoRef.current.srcObject=await stream;
            setVideo(!video);
        }catch(error){
            console.log(error)
        }
    };

  return (
    <StUserBox>n
        <StVideo id='video' ref={videoRef} autoPlay muted playsInline controls={false}/>
        <StBtBox>
            <StMute onClick={mute}>M</StMute>
            <StAuto onClick={autoplay}>A</StAuto>
            <StDropBox>
                    <StDefault onClick={()=>{setClicked(!clicked)}}></StDefault>
                    <StOption clicked = {clicked}>
                        <StHidden id='cameras'>
                            {cameraList?.map((value,index)=>{
                                return <StTime key={index} onClick={()=>{changing(value)}}>{value}</StTime>
                            })}
                        </StHidden>
                    </StOption>
            </StDropBox>
        </StBtBox>
    </StUserBox>
  )
}

const StBtBox = styled.div`
    display: flex;
`;

const StAuto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 30px;
    height : 30px;
    background-color: blue;
`;

const StMute = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 30px;
    height : 30px;
    background-color: red;
`;

const StVideo = styled.video`
    width : 200px;
    height : 200px;
    object-fit: cover;
    border-radius: 200px;
    background-color: black;
`;

const StUserBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const StOption = styled.div`
  position: absolute;
  display: ${props=>(props.clicked ? "" :"none")};
  top : 55px;
  left : 0;
  width: 160px;
  height: 100px;
  padding : 20px;
  border-radius: 8px;
  border : 1px solid black;
  background-color: white;
`;

const StTime = styled.div`
  width : 135px;
  height : 15px;
  padding : 10px 0 10px 0;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  &:hover{
    background-color: #EAEAEA;
  }
  cursor: pointer;
`;

const StDefault = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  bottom : 0;
  width : 160px;
  height : 6px;
  padding : 20px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
`;

const StHidden = styled.div`
  width : 145px;
  height : 180px;
  overflow-x: hidden;
  z-index: 3;

`;

const StDropBox = styled.div`
    display : flex;
  position: relative;
  width : 155px;
  height : 20px;
  padding : 15px;
`;

export default MeetingRoom