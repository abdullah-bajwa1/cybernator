import React, { useState, useMemo } from "react";
import ProgressBar from "../components/ProgressBar";
import ActionStatus from "../components/ActionStatus";
import SimpleLineGraph from "../components/SimpleLineGraph";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const AiConnectors = () => {
  const objectsIn = useMemo(
    () => [
      {
        name: "ChatGPT",
        health: 75,
        auto: 7,
        manual: 5,
        activity: [12, 10, 9, 7, 11],
      },
      {
        name: "Claude",
        health: 88,
        auto: 8,
        manual: 3,
        activity: [3, 8, 12, 6, 14],
      },
      {
        name: "Llama",
        health: 42,
        auto: 15,
        manual: 7,
        activity: [12, 9, 9, 7, 10],
      },
      {
        name: "Orca",
        health: 95,
        auto: 18,
        manual: 4,
        activity: [2, 10, 9, 7, 6],
      },
      {
        name: "Falcon",
        health: 63,
        auto: 9,
        manual: 6,
        activity: [4, 8, 11, 17, 11],
      },
      {
        name: "Bison",
        health: 54,
        auto: 11,
        manual: 9,
        activity: [12, 0, 4, 7, 11],
      },
    ],
    []
  );
  const addIdAndCalculateSums = (objectsIn) => {
    const allActivity = Array(30).fill(0);
    let currentId = 1;

    const objectsWithId = objectsIn.map((obj) => {
      obj.id = currentId++;
      console.log(obj.id);
      obj.activity = obj.activity.concat(allActivity).slice(0, 30);
      return obj;
    });

    const allActivitySums = objectsWithId.reduce((acc, obj) => {
      obj.activity.forEach((value, index) => {
        acc[index] += value;
      });
      return acc;
    }, Array(30).fill(0));

    const averageHealth =
      objectsWithId.reduce((sum, obj) => sum + obj.health, 0) /
      objectsWithId.length;

    const allConnectors = {
      name: "All Connectors",
      id: 0,
      health: averageHealth,
      auto: allActivitySums.reduce(
        (sum, value, index) => sum + value * (index + 1),
        0
      ),
      manual: allActivitySums.reduce(
        (sum, value, index) => sum + value * (index + 1),
        0
      ),
      activity: allActivitySums,
    };

    return [allConnectors, ...objectsWithId];
  };

  const [period, setPeriod] = useState(7);
  const handleChange = (event) => {
    setPeriod(parseInt(event.target.value));
  };
  const currentDate = new Date();

  const thisMonth = currentDate.getDate();

  const xLabels = ["Jan", "feb", "mar", "apr", "may"];

  const handleSelectObject = (event) => {
    const selectedId = parseInt(event.target.value, 10); // Parse the selected id as an integer
    const selectedObject = objects.find((object) => object.id === selectedId);
    setSelectedObject(selectedObject);
  };

  const ObjectInfo = ({ selectedObject }) => {
    if (!selectedObject) {
      return null;
    }

    return (
      <div
        className="connector-details shadow-box-margin-left"
        style={{ overflowX: "auto" }}
      >
        <div className="shadow-box">
          <ActionStatus
            count={selectedObject.auto}
            caption="Automatic Actions Count"
          />
          <ActionStatus
            count={selectedObject.manual}
            caption="Manual Actions Needed"
          />
          <SimpleLineGraph
            xLabels={xLabels}
            graphTitle="Connector Activity"
            dataPoints={selectedObject.activity}
          />
        </div>
        <ProgressBar
          percent={selectedObject.health}
          label={selectedObject.name + " Health"}
          widthOveride="100%"
          padding={true}
        />

        <div className="row-container-small">
          <div className="shadow-box">
            <div className="column-container-small">
              <div className="text-tile">
                <h2 style={{ marginLeft: "10px" }}>Top Threats</h2>
                <hr style={{ marginTop: "10px" }} />

                <Link to="/connectors">
                  <div className="highlight ultrawide">ChatGPT (explore)</div>
                </Link>
                <Link to="/connectors">
                  <div className="highlight ultrawide">Llama (explore)</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-box">
            <div className="column-container-small">
              <div className="text-tile">
                <h2 style={{ marginLeft: "10px" }}>Security Reccomendations</h2>
                <hr style={{ marginTop: "10px" }} />

                <Link to="/connectors">
                  <div className="highlight ultrawide">
                    Automated Updates: 6
                  </div>
                </Link>
                <Link to="/connectors">
                  <div className="highlight ultrawide">
                    Recommended Actions: 3
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const objects = useMemo(() => addIdAndCalculateSums(objectsIn), [objectsIn]);
  const [selectedObject, setSelectedObject] = useState(objects[0]);

  return (
    <div className="connector-dashboard">
      <div
        className="row-container"
        style={{
          width: "88vw",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="row-container"
          style={{
            alignItems: "center",
            maxWidth: "60%",
            justifyContent: "space-between",
          }}
        >
          <h1>AI Connectors</h1>
          <select
            className="dropdown-form"
            style={{ width: "30%" }}
            onChange={handleSelectObject}
            value={selectedObject.id}
          >
            {objects.map((object) => (
              <option key={object.id} value={object.id}>
                {object.name}
              </option>
            ))}
          </select>
          <select
            className="dropdown-form"
            style={{ width: "20%" }}
            value={period}
            onChange={handleChange}
          >
            <option value="7">Past 7 days</option>
            <option value="30" selected>
              Past 30 days
            </option>
            <option value={thisMonth}>This Month</option>
          </select>
        </div>
        <button
          style={{ minHeight: "100%", maxWidth: "20%" }}
          className="outligned-button"
        >
          <p>
            Need More Powers-<b>Marketplace</b>
          </p>
          &nbsp;
          <AiOutlineArrowRight style={{ fontSize: "1.1rem" }} />
        </button>
      </div>

      <ObjectInfo selectedObject={selectedObject} />
    </div>
  );
};

export default AiConnectors;
