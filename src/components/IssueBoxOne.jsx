import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query';
import styled from 'styled-components';
import apis from '../api/main';
import editIcon from '../img/edit.png'
import deleteIcon from '../img/delete.png'
import completeIcon from '../img/confirm.png'

const IssueBox = (prop) => {

    const [isEdit,setIsEdit] = useState(false);

    const editItem = useRef()
    

    // 수정 부분
    const editIssue = async(data)=>{
      const datas = await apis.patchStartMeetIssue(data);
      return datas;
    }

    const { mutate:editing } = useMutation(editIssue,{
        onSuccess:()=>{
            alert("수정 완료");
        },
        onError:()=>{
            alert("수정 실패");
        }
    })

    const complete = () =>{
        setIsEdit(false);
        editing({
            issueContent : editItem.current.value,
            meetingId : prop.meetId,
            issueId : prop.issueId
        })
    }

    const edit = () =>{
      setIsEdit(true);
    }


    // 삭제 부분
    const deleteIssue = async(data) =>{
      const datas = await apis.deleteStartMeetIssue(data);
      return datas;
    }
    
    const { mutate:deleting } = useMutation(deleteIssue,{
      onSuccess:()=>{
        alert("삭제 완료");
      },
      onError:()=>{
        alert("삭제 실패");
      }
    })

    const delet=()=>{
      deleting({
        meetingId : prop.meetId,
        issueId : prop.issueId
      })
    }

    
  return (
    <StIssueBox>
        <StInfo>
            <StIssueTitle>&#183; 안건</StIssueTitle>
            {isEdit?<StIssueEdit ref={editItem} defaultValue={prop.prop}/>:
            <StIssue> {prop.prop}</StIssue>}
        </StInfo>
        {isEdit?
         <StBtBox>
            <StBts onClick={complete}>
                <StIcon src={completeIcon}/>완료
            </StBts>
        </StBtBox>:
        <StBtBox>
            <StBts onClick={edit}><StIcon src={editIcon}/>수정</StBts>
            <StBts onClick={delet}><StIcon src={deleteIcon}/>삭제</StBts>
        </StBtBox>}
    </StIssueBox>
  )
}

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 120px;
  height : 20px;
`;

const StIcon = styled.img`
  width : 15px;
  height : 15px;
`;

const StBts = styled.button`
  display: flex;
  align-items: center;
  width: 55px;
  height: 20px;
  font-weight: 700;
  font-size: 12px;
  border: none;
  background-color: tomato;
  cursor: pointer;
`;


const StIssueEdit = styled.input`
  display: flex;
  width : 600px;
  height : 20px;
  margin : 5px 0 0 10px;
`;

const StIssue = styled.div`
  display: flex;
  width : 600px;
  height : 20px;
  margin : 5px 0 0 10px;
`;

const StIssueTitle = styled.div`
  width : 60px;
  height : 20px;
  font-weight: 700;
  font-size: 18px;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  width : 670px;
  height : 45px;
  margin : 0 20px 0 0;
`;

const StIssueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 835px;
  height : 83px;
  margin : 10px 0 10px 0;
  border-radius: 8px;
  background-color: #EFEFEF;
`;


export default IssueBox