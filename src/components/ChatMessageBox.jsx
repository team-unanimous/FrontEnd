import styled from "styled-components";

const ChatMessageBoxMy = (props) => {
    
    // const { message, nickName, createdAt, sender, profileUrl } = props;
    const {createdAt, type, roomId, nickname, sender, message, profileUrl} = props;
    // "createdAt":null,"modifiedAt":null,"id":null,"type":"TALK","roomId":"1","nickname":"asdf",
    // "sender":"limdg01@naver.com","message":"asdf","profileUrl":"https://s3-unanimous.s3.ap-northeast-2.amazonaws.com/defaultImage.jpeg"

    return (
        <>      
            <StBox></StBox>
        </>
    )

}

const StBox = styled.div`
    /* Frame 148 */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 8px;

    width: 320px;
    height: 112px;


    /* Inside auto layout */

    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
` 

export default ChatMessageBoxMy;