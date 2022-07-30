import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import JoinRoom from '../components/WebRTC/JoinRoom'

const MeetingRoom = () => {

    const navigate = useNavigate();

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
            //   .then(function (stream) {
            //     videoRef.current.srcObject = stream;
            //   })
            //   .catch(function (error) {
            //     alert("카메라가 인식되지않습니다. 카메라를 확인해주세요.");
            //     console.log(error);
            // return navigate('/');
            //   });
        }


  return (
    <div>
        <JoinRoom/>
    </div>
  )
}

export default MeetingRoom