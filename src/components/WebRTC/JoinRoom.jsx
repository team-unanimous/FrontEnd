import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import React, { Component } from 'react';
import { useParams, withRouter } from 'react-router';
import jwtDecode from 'jwt-decode';
import './JoinRoom.css';

import UserVideoComponent from './UserVideoComponent';
import { getCookie } from '../../Cookie';
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
import cameraIcon from "../../img/btn_changecam.svg"


const OPENVIDU_SERVER_URL = 'https://' + 'dkworld93.shop' + ':8443';
const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

function withParams(Component) { 
    
    return props => <Component {...props} nick={jwtDecode(getCookie('token')).USER_NICKNAME} params={useParams()}/>;
}

// function nickName(Component){
//     return props => <Component {...props} nick={jwtDecode(getCookie('token'))}/>
// }

class JoinRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mySessionId: 'SessionA',
            myUserName: 'Participant' + Math.floor(Math.random() * 100),
            session: undefined,
            mainStreamManager: undefined,
            publisher: undefined,
            subscribers: [],
        };

        this.joinSession = this.joinSession.bind(this);
        this.leaveSession = this.leaveSession.bind(this);
        this.switchCamera = this.switchCamera.bind(this);
        this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
        this.onbeforeunload = this.onbeforeunload.bind(this);
    }

    componentDidMount() {
        let id = this.props.params.sessionid;
        let nickname = this.props.nick;
        this.setState({
            mySessionId:id,
            myUserName:nickname
        })
        window.addEventListener('beforeunload',this.onbeforeunload);
        this.joinSession();
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.onbeforeunload());
    }

    onbeforeunload(event) {
        this.leaveSession();
    }

    handleChangeSessionId(e) {
        this.setState({
            mySessionId: e.target.value,
        });
    }

    handleChangeUserName(e) {
        this.setState({
            myUserName: e.target.value,
        });
    }

    handleMainVideoStream(stream) {
        if (this.state.mainStreamManager !== stream) {
            this.setState({
                mainStreamManager: stream
            });
        }
    }

    deleteSubscriber(streamManager) {
        let subscribers = this.state.subscribers;
        let index = subscribers.indexOf(streamManager, 0);
        if (index > -1) {
            subscribers.splice(index, 1);
            this.setState({
                subscribers: subscribers,
            });
        }
    }

    joinSession() {
        // --- 1) Get an OpenVidu object ---

        this.OV = new OpenVidu();

        // --- 2) Init a session ---

        this.setState(
            {
                session: this.OV.initSession(),
            },
            () => {
                var mySession = this.state.session;

                // --- 3) Specify the actions when events take place in the session ---

                // On every new Stream received...
                mySession.on('streamCreated', (event) => {
                    // Subscribe to the Stream to receive it. Second parameter is undefined
                    // so OpenVidu doesn't create an HTML video by its own
                    var subscriber = mySession.subscribe(event.stream, undefined);
                    var subscribers = this.state.subscribers;
                    subscribers.push(subscriber);

                    // Update the state with the new subscribers
                    this.setState({
                        subscribers: subscribers,
                    });
                });

                // On every Stream destroyed...
                mySession.on('streamDestroyed', (event) => {

                    // Remove the stream from 'subscribers' array
                    this.deleteSubscriber(event.stream.streamManager);
                });

                // On every asynchronous exception...
                mySession.on('exception', (exception) => {
                    console.warn(exception);
                });

                // --- 4) Connect to the session with a valid user token ---

                // 'getToken' method is simulating what your server-side should do.
                // 'token' parameter should be retrieved and returned by your own backend
                this.getToken().then((token) => {
                    // First param is the token got from OpenVidu Server. Second param can be retrieved by every user on event
                    // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
                    mySession
                        .connect(
                            token,
                            { clientData: this.state.myUserName },
                        )
                        .then(async () => {
                            var devices = await this.OV.getDevices();
                            var videoDevices = devices.filter(device => device.kind === 'videoinput');

                            // --- 5) Get your own camera stream ---

                            // Init a publisher passing undefined as targetElement (we don't want OpenVidu to insert a video
                            // element: we will manage it on our own) and with the desired properties
                            let publisher = this.OV.initPublisher(undefined, {
                                audioSource: undefined, // The source of audio. If undefined default microphone
                                videoSource: videoDevices[0].deviceId, // The source of video. If undefined default webcam
                                publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                                publishVideo: true, // Whether you want to start publishing with your video enabled or not
                                resolution: '640x480', // The resolution of your video
                                frameRate: 30, // The frame rate of your video
                                insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
                                mirror: false, // Whether to mirror your local video or not
                            });

                            // --- 6) Publish your stream ---

                            mySession.publish(publisher);

                            // Set the main video in the page to display our webcam and store our Publisher
                            this.setState({
                                currentVideoDevice: videoDevices[0],
                                mainStreamManager: publisher,
                                publisher: publisher,
                            });
                        })
                        .catch((error) => {
                            console.log('There was an error connecting to the session:', error.code, error.message);
                        });
                });
            },
        );
    }

    mute(){
        this.OV.initPublisher.publish.publishAudio(false);
    }

    leaveSession() {
        const mySession = this.state.session;
        if (mySession) {
            mySession.disconnect();
        }
        alert("회의에서 나갑니다.")
        this.OV = null;
        this.setState({
            session: undefined,
            subscribers: [],
            mySessionId: 'SessionA',
            myUserName: 'Participant' + Math.floor(Math.random() * 100),
            mainStreamManager: undefined,
            publisher: undefined
        });
    }



    async switchCamera() {
        try{
            const devices = await this.OV.getDevices()
            var videoDevices = devices.filter(device => device.kind === 'videoinput');

            if(videoDevices && videoDevices.length > 1) {

                var newVideoDevice = videoDevices.filter(device => device.deviceId !== this.state.currentVideoDevice.deviceId)

                if (newVideoDevice.length > 0){
                    // Creating a new publisher with specific videoSource
                    // In mobile devices the default and first camera is the front one
                    var newPublisher = this.OV.initPublisher(undefined, {
                        videoSource: newVideoDevice[0].deviceId,
                        publishAudio: true,
                        publishVideo: true,
                        mirror: true
                    });

                    //newPublisher.once("accessAllowed", () => {
                    await this.state.session.unpublish(this.state.mainStreamManager)

                    await this.state.session.publish(newPublisher)
                    this.setState({
                        currentVideoDevice: newVideoDevice,
                        mainStreamManager: newPublisher,
                        publisher: newPublisher,
                    });
                }
            }
          } catch (e) {
            console.error(e);
          }
    }

    render() {
        const {Theme} = this.props;

        return (
            <div className="container">
               
                {this.state.session !== undefined ? (
                    <div id="session">
                        <div id="session-header">
                           
                            {/* <input
                                className="btn btn-large btn-danger"
                                type="button"
                                id="buttonLeaveSession"
                                onClick={this.leaveSession}
                                value="Leave session"
                            /> */}
                            
                        </div>

                        {this.state.mainStreamManager !== undefined ? (
                            <div id="main-video" className="col-md-6">
                                
                                <StSwitch
                                    className="btn btn-large btn-success"
                                    type="button"
                                    id="buttonSwitchCamera"
                                    onClick={this.switchCamera}
                                    value="Switch Camera"
                                    src={cameraIcon}
                                />
                            </div>
                        ) : null}
                        <StCharacterBox id="video-container" className="col-md-6">
                            {this.state.publisher !== undefined ? (
                                <StBoxUp bottom="718px" left="300px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(this.state.publisher)}>
                                    {Theme==2 ?<StImg src={casualOne}/>:<></>}
                                    {Theme==1 ?<StImg src={officeOne}/>:<></>}
                                    <UserVideoComponent streamManager={this.state.publisher} />
                                </StBoxUp>
                            ) : null}
                            <StTable></StTable>
                            {this.state.subscribers.map((sub, i) => (
                                <div key={i}>
                                {i==0?<StBoxDown key={i} bottom="123px" left="300px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                    {Theme==2 && i==0?<StImg src={casualTwo}/>:<></>}
                                    {Theme==1 && i==0?<StImg src={officeTwo}/>:<></>}
                                    {/* {i==1?<StImg src={casualThree}/>:<></>}
                                    {i==2?<StImg src={casualFour}/>:<></>}
                                    {i==3?<StImg src={casualFive}/>:<></>}
                                    {i==4?<StImg src={casualSix}/>:<></>}
                                    {i==5?<StImg src={casualSeven}/>:<></>}
                                    {i==6?<StImg src={casualEight}/>:<></>sssss}ss */}
                                    <UserVideoComponent streamManager={sub} />
                                </StBoxDown>:<></>}
                                {i==1?
                                <StBoxUp key={i} bottom="718px" left="600px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                    {Theme==2 && i==1?<StImg src={casualThree}/>:<></>}
                                    {Theme==1 && i==1?<StImg src={officeThree}/>:<></>}
                                    <UserVideoComponent streamManager={sub} />
                                </StBoxUp>:<></>}
                                {i==2?
                                <StBoxDown key={i} bottom="123px" left="600px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                    {Theme==2 && i==2?<StImg src={casualFour}/>:<></>}
                                    {Theme==1 && i==2?<StImg src={officeFour}/>:<></>}
                                    <UserVideoComponent streamManager={sub} />
                                </StBoxDown>:<></>}
                                {i==3?
                                <StBoxUp key={i} bottom="718px" left="0px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                    {Theme==2 && i==3?<StImg src={casualFive}/>:<></>}
                                    {Theme==1 && i==3?<StImg src={officeFive}/>:<></>}
                                    <UserVideoComponent streamManager={sub} />
                                </StBoxUp>:<></>}
                                {i==4?
                                <StBoxDown key={i} bottom="123px" left="0px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                    {Theme==2 && i==4?<StImg src={casualSix}/>:<></>}
                                    {Theme==1 && i==4?<StImg src={officeSix}/>:<></>}
                                    <UserVideoComponent streamManager={sub} />
                                </StBoxDown>:<></>}
                                {i==5?
                                <StBoxUp key={i} bottom="718px" left="900px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                    {Theme==2 && i==5?<StImg src={casualSeven}/>:<></>}
                                    {Theme==1 && i==5?<StImg src={officeSeven}/>:<></>}
                                    <UserVideoComponent streamManager={sub} />
                                </StBoxUp>:<></>}
                                {i==6?
                                <StBoxDown key={i} bottom="123px" left="900px" className="stream-container col-md-6 col-xs-6" onClick={() => this.handleMainVideoStream(sub)}>
                                    {Theme==2 && i==6?<StImg src={casualEight}/>:<></>}
                                    {Theme==1 && i==6?<StImg src={officeEight}/>:<></>}
                                    <UserVideoComponent streamManager={sub} />
                                </StBoxDown>:<></>}
                                </div>
                            ))}
                        </StCharacterBox>
                    </div>
                ) : null}
            </div>
        );
    }

    /**
     * --------------------------
     * SERVER-SIDE RESPONSIBILITY
     * --------------------------
     * These methods retrieve the mandatory user token from OpenVidu Server.
     * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
     * the API REST, openvidu-java-client or openvidu-node-client):
     *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
     *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
     *   3) The Connection.token must be consumed in Session.connect() method
     */

    getToken() {
        return this.createSession(this.state.mySessionId).then((sessionId) => this.createToken(sessionId));
    }

    createSession(sessionId) {
        return new Promise((resolve, reject) => {
            var data = JSON.stringify({ customSessionId: sessionId });
            axios
                .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
                    headers: {
                        Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    console.log('CREATE SESION', response);
                    resolve(response.data.id);
                })
                .catch((response) => {
                    var error = Object.assign({}, response);
                    if (error?.response?.status === 409) {
                        resolve(sessionId);
                    } else {
                        console.log(error);
                        console.warn(
                            'No connection to OpenVidu Server. This may be a certificate error at ' +
                            OPENVIDU_SERVER_URL,
                        );
                        if (
                            window.confirm(
                                'No connection to OpenVidu Server. This may be a certificate error at "' +
                                OPENVIDU_SERVER_URL +
                                '"\n\nClick OK to navigate and accept it. ' +
                                'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                                OPENVIDU_SERVER_URL +
                                '"',
                            )
                        ) {
                            window.location.assign(OPENVIDU_SERVER_URL + '/accept-certificate');
                        }
                    }
                });
        });
    }

    createToken(sessionId) {
        return new Promise((resolve, reject) => {
            var data = {};
            axios
                .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + sessionId + "/connection", data, {
                    headers: {
                        Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    console.log('TOKEN', response);
                    resolve(response.data.token);
                })
                .catch((error) => reject(error));
        });
    }
}

const StSwitch = styled.img`
    position :absolute;
    left : 35px;
    bottom : 20px;
    width : 56px;
    height : 56px;
    border-radius: 56px;
`;

const StTable = styled.div`
    position : absolute;
    width: 1168px;
    height: 347px;
    left : 0px;
    top : 280px;
    border-radius: 36px;
    background-color: #F5E8CD;
    z-index: 20;
`;

const StCharacterBox = styled.div`
    position : relative;
    left : 160px;
    display: flex;
    flex-wrap: wrap;
    gap : 500px 10;
    justify-content: space-between;
    width : 950px;
    height : 895px;
`;

const StImg = styled.img`
    position: absolute;
`;

const StBoxUp = styled.div`
    position : absolute;
    bottom : ${props=>props.bottom};
    left : ${props=>props.left};
    display: flex;
    z-index: 10;
`;

const StBoxDown = styled.div`
    position : absolute;
    bottom : ${props=>props.bottom};
    left : ${props=>props.left};
    display: flex;
    z-index: 30;
`;

export default withParams (JoinRoom);