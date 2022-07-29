import React, { Component } from 'react';
import styled from 'styled-components';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';

export default class UserVideoComponent extends Component {

    getNicknameTag() {
        // Gets the nickName of the user
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    }

    render() {
        return (
            <div>
                {this.props.streamManager !== undefined ? (
                    <div className="streamcomponent">
                        <OpenViduVideoComponent streamManager={this.props.streamManager} />
                        <StName><p>{this.getNicknameTag()}</p></StName>
                    </div>
                ) : null}
            </div>
        );
    }
}

const StName = styled.div`
    position: absolute;
    bottom : -88px;
    left : 74px;
    display: flex;
    justify-content: center;
    width : 96px;
    color : white;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 100px;
    padding: 6px 12px;
`;
