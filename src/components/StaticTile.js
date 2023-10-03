import styled from 'styled-components';

const TileContainer = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  min-width: 170px;
  height: 125px;
  border: 1px transparent lightgray;
  border-radius: 15px;
  background-color: rgba(156,156,128,.25);
  text-align: center;
`;

const Count = styled.h3`
  max-width: 100%;
  object-fit: contain;
  font-size: 1.6rem;
  margin: auto;
`;



const StaticTile = ({ text }) => {
  
  
  
  return (
    <TileContainer>
      <Count>{text}</Count>
    </TileContainer>
  );
};

export default StaticTile;
