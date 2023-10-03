import React, { useState } from "react";
import ComplexLineGraph from "./ComplexLineGraph";


const Assets = () => {
  const tabs = ['My Models', 'My Clouds', 'My Stream']
  const objects = [
    { name: "ChatGPT", health: 75, auto: 12, manual: 5, activity: [12,10,9,7,11,13,9,10,8,7], color:'red' },
    { name: "Claude", health: 88, auto: 8, manual: 3, activity: [3,8,12,6,14,12,11,9,9,12] ,color:'green'},
    { name: "Llama", health: 42, auto: 15, manual: 7, activity: [12,9,9,7,10,11,14,9,11,8] ,color: 'black'},
    { name: "Orca", health: 95, auto: 18, manual: 4, activity: [2,10,9,7,6,9,10,8,11,10], color: 'cyan'},
    { name: "Falcon", health: 63, auto: 9, manual: 6,activity: [4,8,11,17,11,10,8,6,8,11], color: 'pink'},
    { name: "H2O", health: 54, auto: 11, manual: 9, activity: [12,0,4,7,11,13,12,4,9,10],color: 'orange' },
  ];

  const months = ['Jan', 'feb', 'mar', 'apr','may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleSelectObject = (tab) => {
    console.log(tab)
    setSelectedTab(tab);
  };

  const ObjectInfo = () => {
    return (
      
      <div className="asset-details shadow-box-margin-left" style={{overflowX: "auto"}}>
        <div className="shadow-box">
          <ComplexLineGraph xLabels={months} graphTitle="Connector Activity" dataSetIn={objects}/>
        </div>
        
        <div className="row-container-small">
        <div className="shadow-box">
          <table className="graph-table">
            <thead>
              <tr>
                <th>Name</th>
                {months.map((month, index) => (
                  <th key={index}>{month}</th>
                ))}
                
              </tr>
            </thead>
            <tbody>
              {objects.map((object, index) => (
                <tr key={index}>
                  <td>{object.name}</td>
                  {object.activity.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
              
        </div>
          
      </div>
        
        
    </div>
    );
  };

  const ObjectTabs = ({ objects, selectedTab, onSelectObject }) => {
    return (
      <div className="tab-selector-vertical">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab-item ${(tab === selectedTab) ? "selected" : ""}`}
            onClick={() => onSelectObject(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{height: "100%", width: "100%", boxSizing:"border-box", margin:"0", padding:"0"}}>
    <h1>Assets</h1>
    <div className="assets-dashboard">
      <ObjectTabs objects={objects} selectedTab={selectedTab} onSelectObject={handleSelectObject} />
      <ObjectInfo />
    </div>
    </div>
  );
};

export default Assets;
