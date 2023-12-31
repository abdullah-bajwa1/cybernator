import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  margin: 0;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12.5vw;
  height: 21vh;
  border: 1px solid lightgray;
  border-radius: 15px;
  box-sizing: border-box;
  
`;

const Count = styled.h1`
  height: fit-content;
  font-size: 9.5vh;
  line-height: 100%;
`;

const Caption = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 1.2vh;
  height: fit-content;
`;



const ActionStatus = ({ count, caption }) => {
  const [value, setValue] = useState(0);
  const duration = 3000;
  const interval = 150;
  useEffect(()=> {
    const step = Math.ceil(count/(duration/interval))
    const updateValue = ()=> {
      if(step > count-value){
        setValue(count)
      }else{
        setValue(value+step)
      }


    }
    const intervalId = setInterval(() => {
      if (value < count) {
          updateValue();
      } else {
        clearInterval(intervalId);
      }
      }, interval);

    return (() => {
      clearInterval(intervalId);
    })


  },[value, count] );
  
  return (
    <TileContainer>
      <Caption><h2>{caption}</h2></Caption>
      <Count>{value}</Count>    
      
    </TileContainer>
  );
};

export default ActionStatus;
