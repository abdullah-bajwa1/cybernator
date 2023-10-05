import React, { useState } from "react";


const Settings = () => {
  const tabs = ['General', 'SSO', 'Privacy', 'Shield', 'SIEM', 'RBAC', 'Help']
  
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleSelectObject = (tab) => {
    console.log(tab)
    setSelectedTab(tab);
  };

  const ObjectInfo = () => {
    return (
      
      <div className="asset-details shadow-box-margin-left" style={{overflowX: "auto"}}>
        <div className="column-container-small">
        <div className="shadow-box column-container-small">
          <div className="highlight ultrawide"> Settings Placeholder 1</div> 
          <div className="highlight ultrawide">Settings Placeholder 2</div> 
          <div className="highlight ultrawide">Settings Placeholder 3</div> 
          <div className="highlight ultrawide">Settings Placeholder 4</div>    
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
    <h1>Settings</h1>
    <div className="assets-dashboard">
      <ObjectTabs objects={tabs} selectedTab={selectedTab} onSelectObject={handleSelectObject} />
      <ObjectInfo />
    </div>
    </div>
  );
};

export default Settings;
