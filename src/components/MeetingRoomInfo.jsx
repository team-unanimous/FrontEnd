import styled from "styled-components";
import thumbnail1 from "../img/thumbnail1.png"
import thumbnail2 from "../img/thumbnail2.png"
import thumbnail3 from "../img/thumbnail3.png"
import thumbnail4 from "../img/thumbnail4.png"
import thumbnail5 from "../img/thumbnail5.png"

const MeetingRoomInfo = (props)=> {
    const { thumbnail, title } = props

    return(
        <>
            <StContainer>
                <StWrapper>
                    <StWrapUpper>
                        <StThumbnailImg src={thumbnail1}/>
                    </StWrapUpper>
                    <StWrapLower>
                        {"세상에서 가장 완벽한 회의"||title}
                    </StWrapLower>
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

    width: 304px;
    height: 129px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StWrapUpper = styled.div`
    /* Frame 79 */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 44px;
    height: 37px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StThumbnailImg = styled.img`
    background-image: url(${thumbnail1});
    background-size: cover;
`
const StWrapLower = styled.div`
    /* Frame 79 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;

    width: 90%;
    height: 48px;

    flex: none;
    order: 1;
    flex-grow: 0;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;

    color: #000000;
    margin-top: 24px;
    margin-left: 10px;
`

export default MeetingRoomInfo;