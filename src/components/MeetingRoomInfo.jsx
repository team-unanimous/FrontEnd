import styled from "styled-components";

const MeetingRoomInfo = (props)=> {
    const { thumbnail } = props
    console.log(thumbnail);

    return(
        <>
            <StContainer>
                <StWrapper>
                </StWrapper>
            </StContainer>
        </>
    )
}

const StContainer = styled.div`
    /* Frame 488 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;

    width: 360px;
    height: 177px;

    background: #FCF3E9;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    box-sizing: border-box;
`
const StWrapper = styled.div`
    /* Frame 490 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    width: 304px;
    height: 129px;

    flex: none;
    order: 0;
    flex-grow: 0;

`

export default MeetingRoomInfo;