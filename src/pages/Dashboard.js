import { Link } from "react-router-dom"
import ActionStatus from "../components/ActionStatus"
import ProgressBar from "../components/ProgressBar"
import ComplexLineGraph from "../components/ComplexLineGraph"
import ActionStatusHistory from "../components/ActionStatusHistory"
import RadarChart from "../components/RadarChart"
import TableComponent from "../components/TableComponent"






const Dashboard = () => {
    

    const manualCount = 12;
    const autoCount = 15;

    
    
    const modelUsageData = [
    { name: "Detections", activity: [12,6,13,3,12,10,3,11,7,14,19,9,12,16,13,15], color:'#884DFF' },
    { name: "Unique Requests", activity: [3,8,12,6,14,12,11,9,9,12,13,15,18,10,8] ,color:'#32A9FB'},
    { name: "Requests", activity: [12,9,9,7,10,11,14,9,11,8,12,16,17,6] ,color: '#00E096'},
    ];

    const chartData = {
        labels: ['ChatGPT', 'Claude', 'Llama', 'Bison', 'Falcon', 'Orca'],
        datasets: [
          {
            label: 'Violations',
            data: [6, 19, 12, 15, 12, 13],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: 'Vulnurabilities',
            data: [15, 10, 6, 18, 14, 16],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
          },
          // You can add more datasets here with different labels, data, and colors
        ],
      };


    

    

   
  return (
    <div>
      <h1>Overview</h1>
      <div className="row-container-small" style={{alignItems: "center"}}>
        <div className="grid-container-3">
            <Link className="grid-item" to="/dashboard">
                <ActionStatusHistory count={1200}  lastCount={137} caption={"Findings"} />
            </Link>
            <Link className="grid-item" to="/dashboard">
                <ActionStatusHistory count={250}  lastCount={137} caption={"Policy Violations"} />
            </Link>
            <Link className="grid-item" to="/dashboard">
                <ActionStatusHistory count={12}  lastCount={16} caption={"Developer Fixes"} />
            </Link>
            <Link className="grid-item" to="/dashboard">
                <ActionStatusHistory count={120}  lastCount={137} caption={"Violations Merged"} />
            </Link>
            <Link className="grid-item" to="/dashboard">
              <ActionStatus count={manualCount} caption="Manual Actions Count"/>
            </Link>
            <Link className="grid-item" to="/dashboard">
                <ActionStatus count={autoCount} caption="Automatic Actions Count"/>
            </Link>
        </div>

            
            <div className="shadow-box" style={{height: "45vh", margin:"0", marginLeft: "0.75vw"}}>
                <ComplexLineGraph graphTitle="Model Usage Statistics" dataSetIn={modelUsageData}/>
            </div>
      </div>
      <div>
        <ProgressBar percent={77} label={"System Health"} widthOveride="88vw" padding={true} />
      </div>
                      
      <div className="row-container-small" style={{marginTop: "20px"}}>
        <div className="shadow-box" style={{width: "25vw", height:"25vw", flexDirection:"column", margin: "0", alignItems: "center"}}>
            <h2 style={{marginBottom:"10px"}}>Model Status Report </h2>
            <RadarChart chartData={chartData}/>
        </div>
        <TableComponent />
      </div>
      
    </div>
  )
}

export default Dashboard
