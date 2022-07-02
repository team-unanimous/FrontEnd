import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components';
import apis from '../api/main'


const MeetMakeTwo = () => {
  const [input,setInput] = useState([{id:0,title:''}]);
  const [num,setNum] = useState(0);

  const nextId = useRef(1);

  const addMeeting = (meeting) =>{
    return apis.postMeetRoom(meeting);
  };

  const {mutate} = useMutation(addMeeting);


  const handleAddMeeting = ()=>{
    const meeting = {
      
    }
  }

  const addInput = () =>{
    const newinput = {
      id : nextId.current,
      title : ``,
    };
    setInput([...input,newinput]);
    nextId.current +=1;
    setNum(num+1);
    console.log(input)
  }

  const deleteInput=(index)=>{
    setInput(input.filter(item=>item.id!==index));
    setNum(num-1);
  }

  const handleChange=(e,index)=>{
    const inputItemsCopy =JSON.parse(JSON.stringify(input));
    inputItemsCopy[index].title = e.target.value;
    setInput(inputItemsCopy);
  }

  return (
    <StBox>
    <StInputBox>
      <StInput placeholder='title'/>
      <StInput placeholder='date'/>
      {input.map((item,index)=>(
        
        <StPlusBox key={index}>
          <StInput 
            placeholder='안건'
            onChange={e => handleChange(e, index)}
            />
          <StButton  onClick={addInput}>+</StButton>
          {index==num && index>0? 
          <StButton onClick={()=>{deleteInput(item.id)}}>-</StButton>
          : ''}
        </StPlusBox>
      ))}
    </StInputBox>
    </StBox>
  )
}

const StPlusBox = styled.div`
  display:flex;
  align-items: center;
`;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width : 1rem;
  height : 1rem;
  margin : 0 0 0 1rem;
`;

const StInput = styled.input`
  width : 10rem;
  margin : 0.5rem 0 0.5rem 0;
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width : 100;
  background-color: tomato;
`;

const StBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`;

export default MeetMakeTwo