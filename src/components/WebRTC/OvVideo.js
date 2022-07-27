import React, { Component } from 'react';
import styled from 'styled-components';

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
        return <StVideo autoPlay={true} ref={this.videoRef} />;
    }

}

const StVideo = styled.video`
    position: relative;
    top:47px;
    left : 44px;
    width : 192px;
    height : 192px;
    border-radius: 192px;
    object-fit: cover;
    z-index: 10;
`;
