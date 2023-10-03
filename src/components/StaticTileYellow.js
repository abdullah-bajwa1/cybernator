import styled from 'styled-components';

const TileContainer = styled.div`
  margin: 15px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  min-width: 170px;
  height: 150px;
  border: 1px transparent lightgray;
  border-radius: 15px;
  background-color: rgba(255,255,128,.5);
  text-align: center;
`;

const Count = styled.h2`
  max-width: 100%;
  object-fit: contain;
  font-size: 1.7rem;
  margin: auto;
`;



const StaticTileYellow = ({ text }) => {
  
  
  
  return (
    <TileContainer>
      <Count>{text}</Count>
    </TileContainer>
  );
};

export default StaticTileYellow;
