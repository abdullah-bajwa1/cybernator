import styled from 'styled-components';

const TileContainer = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 145px;
  height: 145px;
  border: 1px transparent lightgray;
  border-radius: 15px;
  background-color: rgba(156,156,128,.25);
`;

const Count = styled.h1`
  height: 60%;
  max-width: 100%;
  object-fit: contain;
  font-size: 5rem;
`;

const Caption = styled.div`
  padding: 10px;
  text-align: center;
  margin: auto;
  font-size: 0.7rem;
`;

const ActionStatus = ({ count, caption }) => {
  return (
    <TileContainer>
      <Count>{count}</Count>
      <Caption><h2>{caption}</h2></Caption>
    </TileContainer>
  );
};

export default ActionStatus;
