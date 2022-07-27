import styled from "styled-components";

const ChatMessageBox = (props) => {
    
    // const { message, nickName, createdAt, sender, profileUrl } = props;
    const {createdAt, nickname, msg, profileUrl} = props;
    // "createdAt":null,"modifiedAt":null,"id":null,"type":"TALK","roomId":"1","nickname":"asdf",
    // "sender":"limdg01@naver.com","message":"asdf","profileUrl":"https://s3-unanimous.s3.ap-northeast-2.amazonaws.com/defaultImage.jpeg"

    return (
        <>      
            <StBox>
                <StUserWrapper>
                    <StUserProfile>
                        <img src={profileUrl}/>
                    </StUserProfile>
                    <StUserNickname>
                        {"Guest"||nickname}
                    </StUserNickname>
                </StUserWrapper>
                <StMessageWrapper>
                    <StMessageBody>
                        {msg}
                    </StMessageBody>
                    <StMessageDate>
                        {"00:00"||createdAt}
                    </StMessageDate>
                </StMessageWrapper>

            </StBox>
        </>
    )

}

const StBox = styled.div`
    /* Frame 147 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    margin-top: 20px;

    width: 320px;
    height: fit-content;

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
`
const StUserWrapper = styled.div`
    /* Frame 125 */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 81px;
    height: 24px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StUserProfile = styled.div`
    /* meeting/chat/profile */
    width: 24px;
    height: 24px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StUserNickname = styled.div`
    /* 아무개 */
    width: 45px;
    height: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: #5C5C5C;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StMessageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
`
const StMessageBody = styled.div`
    /* Frame 126 */
    display: flex;
    display: inline-block;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;
    margin-top: 7px;

    width: 273px;
    height: fit-content;

    background: #F1F1F1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 0px 8px 8px 8px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    word-wrap: break-word;
    color: black;
`
// const StChattingMessageBox = styled.div`
//    /* Frame 126 */
//     display: flex;
//     display: inline-block;
//     flex-direction: row;
//     justify-self: flex-end;
//     margin-left: auto;
//     padding: 16px;
//     gap: 10px;
//     margin-top: 20px;

//     width: 273px;
//     height: fit-content;

//     background: linear-gradient(180deg, rgba(35, 150, 240, 0.8) 0%, rgba(73, 182, 255, 0.8) 100%);
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
//     border-radius: 8px 0px 8px 8px;

//     flex: none;
//     order: 0;
//     align-self: stretch;
//     flex-grow: 0;
//     word-wrap: break-word;
//     color: white;
// `
const StMessageDate = styled.div`
    /* 00:00 */
    width: 39px;
    height: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    color: #818181;

    flex: none;
    order: 1;
    flex-grow: 0;
    align-self: flex-end;
    margin-left: 8px;
`
export default ChatMessageBox;