import React, { Component } from 'react';
import styled from 'styled-components';
import casualOne from '../../img/5.MeetingRoom/1.videochat/casual/frame1.svg'
import casualTwo from '../../img/5.MeetingRoom/1.videochat/casual/frame2.svg'
import casualThree from '../../img/5.MeetingRoom/1.videochat/casual/frame3.svg'
import casualFour from '../../img/5.MeetingRoom/1.videochat/casual/frame4.svg'
import casualFive from '../../img/5.MeetingRoom/1.videochat/casual/frame5.svg'
import casualSix from '../../img/5.MeetingRoom/1.videochat/casual/frame6.svg'
import casualSeven from '../../img/5.MeetingRoom/1.videochat/casual/frame7.svg'
import casualEight from '../../img/5.MeetingRoom/1.videochat/casual/frame8.svg'

import officeOne from '../../img/5.MeetingRoom/1.videochat/office/frame1.svg'
import officeTwo from '../../img/5.MeetingRoom/1.videochat/office/frame2.svg'
import officeThree from '../../img/5.MeetingRoom/1.videochat/office/frame3.svg'
import officeFour from '../../img/5.MeetingRoom/1.videochat/office/frame4.svg'
import officeFive from '../../img/5.MeetingRoom/1.videochat/office/frame5.svg'
import officeSix from '../../img/5.MeetingRoom/1.videochat/office/frame6.svg'
import officeSeven from '../../img/5.MeetingRoom/1.videochat/office/frame7.svg'
import officeEight from '../../img/5.MeetingRoom/1.videochat/office/frame8.svg'

export default class OpenViduVideoComponent extends Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidUpdate(props) {
        if (props && !!this.videoRef) {
            this.props.streamManager.addVideoElement(this.videoRef.current);
        }
    }

    componentDidMount() {
        if (this.props && !!this.videoRef) {
            this.props.streamManager.addVideoElement(this.videoRef.current);
        }
    }

    render() {
        return <StBox>
                    <StVideo autoPlay={true} ref={this.videoRef} />
                    <StCharacter src={casualOne}/>
                </StBox>;
    }
}

const StBox = styled.div`
    position: relative;
    width : 260px;
    height : 310px;
`;

const StCharacter = styled.img`
    position : absolute;
    top:25px;
    width : 260px;
    height : 300px;

    object-fit: cover;
    z-index: 10;
`;

const StVideo = styled.video`
    position: absolute;
    top : 65px;
    left : 44px;
    width : 192px;
    height : 192px;
    border-radius: 200px;
    object-fit: cover;
    z-index: 20;;
`;