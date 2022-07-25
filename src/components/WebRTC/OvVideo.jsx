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
    width : 200px;
    height : 200px;
    border-radius: 200px;
    object-fit: cover;
`;