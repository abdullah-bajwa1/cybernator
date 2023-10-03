import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ActionStatus from "./ActionStatus";
import SimpleLineGraph from "./SimpleLineGraph";
import { Link } from "react-router-dom";

const Assets = () => {
  const objects = [
    { name: "ChatGPT", health: 75, auto: 12, manual: 5, activity: [12,10,9,7,11] },
    { name: "Claude", health: 88, auto: 8, manual: 3, activity: [3,8,12,6,14] },
    { name: "Llama", health: 42, auto: 15, manual: 7, activity: [12,9,9,7,10] },
    { name: "Orca", health: 95, auto: 18, manual: 4, activity: [2,10,9,7,6] },
    { name: "Falcon", health: 63, auto: 9, manual: 6,activity: [4,8,11,17,11] },
    { name: "H2O", health: 54, auto: 11, manual: 9, activity: [12,0,4,7,11] },
  ];

  const xLabels = ['Jan', 'feb', 'mar', 'apr','may']

  const [selectedObject, setSelectedObject] = useState(objects[0]);

  const handleSelectObject = (object) => {
    console.log(object)
    setSelectedObject(object);
  };

  const ObjectInfo = ({ selectedObject }) => {
    if (!selectedObject) {
      return null;
    }

    return (
      
      <div className="asset-details shadow-box-margin-left" style={{overflowX: "auto"}}>
        <div className="shadow-box">
          <ActionStatus count={selectedObject.auto} caption="Automatic Actions Count"/>
          <ActionStatus count={selectedObject.manual} caption="Manual Actions Needed" />
          <SimpleLineGraph xLabels={xLabels} graphTitle="Connector Activity" dataPoints={selectedObject.activity}/>
        </div>
        <ProgressBar percent={selectedObject.health} label={selectedObject.name+" Health"} widthOveride="900px" padding={true} />
        
        
        <div className="row-container-small">
        <div className="shadow-box">
              <div className="column-container-small">

                  <div className="text-tile">
                     <h2 style={{marginLeft: "10px"}}>Top Threats</h2>
                      <hr style={{marginTop: "10px"}}/>

                      <Link to="/connectors"><div className="highlight ultrawide">
                        ChatGPT (explore)
                      </div></Link>
                      <Link to="/connectors"><div className="highlight ultrawide">
                        Llama (explore)
                      </div></Link>
                      
                              
                  </div>
                        
              </div>
              
          </div>
          <div className="shadow-box">
              <div className="column-container-small">

                  <div className="text-tile">
                     <h2 style={{marginLeft: "10px"}}>Security Reccomendations</h2>
                      <hr style={{marginTop: "10px"}}/>

                      <Link to="/connectors"><div className="highlight ultrawide">
                        Automated Updates: 6
                      </div></Link>
                      <Link to="/connectors"><div className="highlight ultrawide">
                        Recommended Actions: 3
                      </div></Link>
                              
                  </div>
                        
              </div>
              
          </div>
        </div>
        
        
      </div>
    );
  };

  const ObjectTabs = ({ objects, selectedObject, onSelectObject }) => {
    return (
      <div className="tab-selector-vertical">
        {objects.map((object) => (
          <div
            key={object.name}
            className={`tab-item ${(object.name === selectedObject.name) ? "selected" : ""}`}
            onClick={() => onSelectObject(object)}
          >
            {object.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{height: "100%", width: "100%", boxSizing:"border-box", margin:"0", padding:"0"}}>
    <h1>Assets</h1>
    <div className="assets-dashboard">
      <ObjectTabs objects={objects} selectedObject={selectedObject} onSelectObject={handleSelectObject} />
      <ObjectInfo selectedObject={selectedObject} />
    </div>
    </div>
  );
};

export default Assets;
