import { Link } from "react-router-dom"
import Tile from "./Tile"
import ActionStatus from "./ActionStatus"
import ProgressBar from "./ProgressBar"






const Dashboard = () => {
    const chatGPTHealth = 81;
    const claudeHealth = 48;
    const systemHealth = (chatGPTHealth+claudeHealth)/2;

    const manualCount = 12;
    const autoCount = 15;

    

   
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row-container-small">
            <Link to="/dashboard">
                <Tile imageName="products.jpg" caption="My Products"/>
            </Link>
            <Link to="/dashboard">
                <Tile imageName="models.jpg" caption="My Models"/>
            </Link>
            <Link to="/dashboard">
                <Tile imageName="clouds.jpg" caption="My Clouds"/>
            </Link>
            <Link to="/dashboard">
                <Tile imageName="users.jpg" caption="My Users"/>
            </Link>
      </div>
      <div className="row-container-small">
        <div className="shadow-box">
            <ActionStatus count={manualCount} caption="Manual Actions Needed"/>
            <ActionStatus count={autoCount} caption="Automatic Actions Count"/>
        </div>
        <div className="shadow-box">
            <div className="column-container-small">

                <div className="text-tile">
                    <ProgressBar percent={systemHealth} label="System Health" />
                    
                    <hr />

                    <ProgressBar percent={chatGPTHealth} label="ChatGPT" />
                    <ProgressBar percent={claudeHealth} label="Claude" />

                             
                </div>
                       
            </div>
            
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
