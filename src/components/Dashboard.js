import { Link } from "react-router-dom"
import Tile from "./Tile"
import ActionStatus from "./ActionStatus"
import { useState, useEffect } from "react"




function colorCode(val){
    if(val < 20){
        return 'rgba(219, 9, 9, 0.3)'
    }
    if(val < 50){
        return 'rgba(219, 90, 9, 0.5)'
    }
    if(val < 80){
        return 'rgba(219, 202, 9, 0.4)'
    }
    return 'rgba(9, 219, 58, 0.3)'
}



const Dashboard = () => {
    const initialChatGPTHealth = 0; // Set your initial health value
    const initialClaudeHealth = 0;
    const initialSystemHealth = 0;
    const initialManualCount = 0;
    const initialAutoCount = 0;

    const initialChatGPTColorCode = 'rgba(219, 9, 9, 0.3)'; // Set your initial health value
    const initialClaudeColorCode = 'rgba(219, 9, 9, 0.3)';
    const initialSystemColorCode = 'rgba(219, 9, 9, 0.3)';


    const [chatGPTHealth, setChatGPTHealth] = useState(initialChatGPTHealth);
    const [claudeHealth, setClaudeHealth] = useState(initialClaudeHealth);
    const [systemHealth, setSystemHealth] = useState(initialSystemHealth);

    const [manualCount, setManualCount] = useState(initialManualCount);
    const [autoCount, setAutoCount] = useState(initialAutoCount);

    const [chatGPTColorCode, setChatGPTColorCode] = useState('');
    const [claudeColorCode, setClaudeColorCode] = useState('');
    const [systemColorCode, setSystemColorCode] = useState('');

    // Set the target health values here
    const targetChatGPTHealth = 81;
    const targetClaudeHealth = 48;
    const targetSystemHealth = Math.floor((targetChatGPTHealth + targetClaudeHealth) / 2);

    const targetManualCount = 8;
    const targetAutoCount = 15;

    const duration = 2000; // Duration of the transition in milliseconds

    useEffect(() => {
        const interval = 100; // Update every 100 milliseconds
        const steps = Math.ceil(duration / interval);
        const chatGPTStep = Math.ceil((targetChatGPTHealth - initialChatGPTHealth) / steps);
        const claudeStep = Math.ceil((targetClaudeHealth - initialClaudeHealth) / steps);
        const systemStep = Math.ceil((targetSystemHealth - initialSystemHealth) / steps);

        const AutoStep = Math.ceil((targetAutoCount - initialAutoCount) / steps);
        const ManualStep = Math.ceil((targetManualCount - initialManualCount) / steps);



        let currentChatGPTHealth = initialChatGPTHealth;
        let currentClaudeHealth = initialClaudeHealth;
        let currentSystemHealth = initialSystemHealth;

        let currentAutoCount = initialAutoCount;
        let currentManualCount = initialManualCount;

        let currentChatGPTColorCode = initialChatGPTColorCode;
        let currentClaudeColorCode = initialClaudeColorCode;
        let currentSystemColorCode = initialSystemColorCode;

        const updateHealthValues = () => {
        if(currentChatGPTHealth < targetChatGPTHealth){
            currentChatGPTHealth += chatGPTStep;
            currentChatGPTColorCode = colorCode(currentChatGPTHealth);
        }
        

        if(currentClaudeHealth < targetClaudeHealth){
            currentClaudeHealth += claudeStep;
            currentClaudeColorCode = colorCode(currentClaudeHealth);
        }
        if(currentSystemHealth < targetSystemHealth){
            currentSystemHealth += systemStep;
            currentSystemColorCode = colorCode(currentSystemHealth);
        }

        if(currentAutoCount < targetAutoCount){
            currentAutoCount += AutoStep;
        }

        if(currentManualCount < targetManualCount){
            currentManualCount += ManualStep;
        }
        


        setChatGPTHealth(currentChatGPTHealth);
        setClaudeHealth(currentClaudeHealth);
        setSystemHealth(currentSystemHealth);

        setAutoCount(currentAutoCount);
        setManualCount(currentManualCount);


        setChatGPTColorCode(currentChatGPTColorCode);
        setClaudeColorCode(currentClaudeColorCode);
        setSystemColorCode(currentSystemColorCode);
        };

        const intervalId = setInterval(() => {
        if (currentChatGPTHealth < targetChatGPTHealth) {
            updateHealthValues();
        } else {
            clearInterval(intervalId);
        }
        }, interval);

        return () => {
        clearInterval(intervalId);
        };
    }, [duration, targetChatGPTHealth, targetClaudeHealth, targetSystemHealth]);

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
        <div className="column-container-small">
            
        </div>
        <div className="shadow-box">
            <div className="column-container-small">

                <div className="text-tile">
                    <div class="highlight ultrawide">
                        <div className="transition-width progress-bar" style={{  width: `${systemHealth}%`,backgroundColor: systemColorCode  }}></div>
                            <p>System Health: {systemHealth}%</p>
                    </div>
                    <hr />

                    <div class="highlight ultrawide">
                        <div className="transition-width progress-bar" style={{ width: `${chatGPTHealth}%`, backgroundColor: chatGPTColorCode }}></div>
                            <p>ChatGPT: {chatGPTHealth}%</p>
                    </div>
                    <div class="highlight ultrawide">
                        <div className="progress-bar" style={{ width: `${claudeHealth}%`, backgroundColor: claudeColorCode }}></div>
                            <p>Claude: {claudeHealth}%</p>
                    </div>          
                </div>
                       
            </div>
            
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
