import { Link } from "react-router-dom"
import StaticTile from "./StaticTile"
import StaticTileYellow from "./StaticTileYellow"

const Store = () => {
  return (
    <div  style={{maxWidth: "105%", boxSizing: "border-box"}}>
      <h1>Store</h1>
      <br />
      
      <div className="text-tile"  style={{maxWidth: "100%"}}>
          <h2 style={{marginLeft: "10px"}}>Products</h2>
          <hr style={{marginTop: "10px"}}/>

          
          
          <div className="row-container-small" style={{maxWidth: "100%", overflowX: "auto", padding:"20px"}}>
              <Link to="/store"><StaticTile text="Model Selection" /></Link>
              <Link to="/store"><StaticTile text="Model Deployment" /></Link>
              <Link to="/store"><StaticTile text="Model Audit" /></Link>
              <Link to="/store"><StaticTile text="Model Score" /></Link>
              <Link to="/store"><StaticTile text="Risk Assessment" /></Link>
              <Link to="/store"><StaticTile text="Protection Layers" /></Link>
          </div>
          
                  
      </div>
      <br />
      <div className="text-tile"  style={{maxWidth: "100%"}}>
          <h2 style={{marginLeft: "10px"}}>Cloud Connections</h2>
          <hr style={{marginTop: "10px"}}/>

          
          
          <div className="row-container-small" style={{maxWidth: "100%", overflowX: "auto", padding:"20px"}}>
              <Link to="/store"><StaticTileYellow text="Amazon" /></Link>
              <Link to="/store"><StaticTileYellow text="Azure" /></Link>
              <Link to="/store"><StaticTileYellow text="Google Cloud" /></Link>
              <Link to="/store"><StaticTileYellow text="DataBricks" /></Link>
              <Link to="/store"><StaticTileYellow text="Other" /></Link>
          </div>
          
                  
      </div>
      <br />
      <div className="text-tile"  style={{maxWidth: "100%"}}>
          <h2 style={{marginLeft: "10px"}}>Model Connections</h2>
          <hr style={{marginTop: "10px"}}/>

          
          
          <div className="row-container-small" style={{maxWidth: "100%", overflowX: "auto", padding: "20px"}}>
              <Link to="/store"><StaticTile text="ChatGPT" /></Link>
              <Link to="/store"><StaticTile text="Claude" /></Link>
              <Link to="/store"><StaticTile text="H2O" /></Link>
              <Link to="/store"><StaticTile text="Other" /></Link>
          </div>
          
                  
      </div>
    </div>
  )
}

export default Store
