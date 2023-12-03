import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {BiSolidUpArrow, BiSolidDownArrow} from 'react-icons/bi'

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
  font-size: 7vh;
  line-height: 100%;
`;

const Caption = styled.h5`
  text-align: center;
  font-size: 1.2vh;
  height: fit-content;
  font-weight: 100;
  font-style: 
`;

const History = styled.h5`
  padding: 10px;
  text-align: center;
  font-size: 0.9vh;
  height: fit-content;
  font-weight: 100;
  font-style: 
`;


const Last = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

const ActionStatusHistory = ({ count, lastCount, caption }) => {
  const [value, setValue] = useState(0);
  const diff = value - lastCount;
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
      <Count>{(value < 1000) ? value : `${parseFloat((value / 1000).toFixed(1))}K`}</Count>
      <Last>
        <History><h2>Previous Period: {lastCount}</h2></History>
        <History style={{fontWeight: "100"}}>
        <h2 style={{ color: (diff > 0) ? "green" : "red",   display: "flex", alignItems: "center" }}>
          {(diff > 0) ? <BiSolidUpArrow style={{fontSize: "0.6rem"}} /> : <BiSolidDownArrow style={{fontSize: "0.6rem"}} />}
          {Math.abs(diff)}
        </h2>
        </History>
      </Last>
      
      
    </TileContainer>
  );
};

export default ActionStatusHistory;
