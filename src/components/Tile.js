import styled from 'styled-components';

const TileContainer = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 15vw;
  max-width: 300px;
  height: 15vw;
  max-height: 300px;
  border: 1px transparent lightgray;
  border-radius: 15px;
  background-color: rgba(156,156,128,.15);
`;

const Image = styled.img`
  height: 60%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 15px 15px 0 0;
`;

const Caption = styled.div`
  padding: 10px;
  text-align: center;
  margin: auto;
`;

const Tile = ({ imageName, caption }) => {
  return (
    <TileContainer>
      <Image src={process.env.PUBLIC_URL + '/' + imageName} alt="Tile Image" />
      <Caption><h2>{caption}</h2></Caption>
    </TileContainer>
  );
};

export default Tile;
