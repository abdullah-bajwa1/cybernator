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
      
      <div className="asset-details shadow-box-margin-left" style={{ overflowX: "auto" }}>
        <div className="column-container-small">
          <div className="shadow-box column-container-small" style={{ border: "transparent", paddingTop: "0" }}>
            <div className="form-row standDef" style={{ marginTop: "0" }}>
              {/* Dropdown for Timezones */}
              <label htmlFor="timezoneSelect">Timezone:</label>
              <select className="select-box" id="timezoneSelect">
                <option value="pst">Pacific Standard Time (PST)</option>
                <option value="est">Eastern Standard Time (EST)</option>
                {/* Add more timezone options as needed */}
              </select>
            </div>
            <div className="form-row standDef">
              {/* Dropdown for Update Notification Schedule */}
              <label htmlFor="notificationScheduleSelect">Notification Schedule:</label>
              <select className="select-box" id="notificationScheduleSelect">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                {/* Add more schedule options as needed */}
              </select>
            </div>
            <div className="form-row standDef">
              <p>Primary Domain:</p>
              <h5 style={{flexGrow:"1", textAlign:"center", margin:"0"}}>abc-corp.net</h5>
            </div>
            <div className="form-row standDef" style={{alignItems: "flex-start"}}>
              <p>Satelite Domains:</p>
              <div style={{flexGrow:"1", textAlign:"center", margin:"0"}}>
                <h5 style={{margin:"3px"}}>abc-corp.net</h5>
                <h5 style={{margin:"3px"}}>subsidiary.com</h5>
                <h5 style={{margin:"3px"}}>throwaway.to</h5>
                <h5 style={{margin:"3px"}}>sys.io</h5>
              </div>
            </div>
              <button style={{marginTop:"20px", width:"50%"}}>Create Ticket</button>
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
