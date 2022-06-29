import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components';
import apis from '../api/main'


const MeetMake = () => {

  const [input,setInput] = useState([{id:0,title:''}]);
  const [num,setNum] = useState(0);

  const nextId = useRef(1);

  const addMeeting = (meeting) =>{
    return apis.postMeetRoom(meeting);
  };

  const {mutate : addMeet, isLoading, isError,error} = useMutation(addMeeting);


  const handleAddMeeting = ()=>{
    const meeting = {

    }
  }

  if(isLoading){
    return <h2>Loading..</h2>;
  }
  if(isError){
    return <h2>{error.message}</h2>;
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
`;

export default MeetMake