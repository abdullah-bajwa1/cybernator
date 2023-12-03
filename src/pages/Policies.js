import React, { useState } from "react";
import policies, {
  inputActionOptions,
  outputActionOptions,
  notificationActionOptions,
  thresholdOptions,
  notificationFrequencyOptions,
  notificationTargetOptions,
} from "../components/policySchema";
import { useEffect } from "react";

const Policies = () => {
  const [schema, setSchema] = useState(policies);
  const [selectedApplication, setSelectedApplication] = useState(schema[0]);
  const [selectedPolicyClass, setSelectedPolicyClass] = useState(
    schema[0].policyClasses[0]
  );

  useEffect(() => {
    setSelectedApplication(schema[0]);

    if (schema[0] && schema[0].policyClasses && schema[0].policyClasses[0]) {
      setSelectedPolicyClass(schema[0].policyClasses[0]);
    }
  }, [schema]);

  const handleApplicationChange = (event) => {
    const selectedAppName = event.target.value;
    const selectedApp = schema.find((app) => app.name === selectedAppName);
    setSelectedApplication(selectedApp);
  };

  const handlePolicyClassChange = (event) => {
    const policyClass = selectedApplication.policyClasses.find(
      (pc) => pc.name === event.target.value
    );
    setSelectedPolicyClass(policyClass);
  };

  const handlePolicyInputChange = (event, policyIndex) => {
    // Handle changes to the properties of a specific policy object
    const { name, value } = event.target;
    setSchema((prevSchema) => {
      const updatedSchema = [...prevSchema];
      const updatedAppIndex = updatedSchema.findIndex(
        (app) => app.name === selectedApplication.name
      );
      const updatedApp = { ...updatedSchema[updatedAppIndex] };
      const updatedPolicyClasses = [...updatedApp.policyClasses];
      const updatedPolicyClassIndex = updatedPolicyClasses.findIndex(
        (pc) => pc.name === selectedPolicyClass.name
      );
      const updatedPolicyClass = {
        ...updatedPolicyClasses[updatedPolicyClassIndex],
      };
      const updatedPolicies = [...updatedPolicyClass.policies];

      updatedPolicies[policyIndex] = {
        ...updatedPolicies[policyIndex],
        [name]: value,
      };

      updatedPolicyClass.policies = updatedPolicies;
      updatedPolicyClasses[updatedPolicyClassIndex] = updatedPolicyClass;
      updatedApp.policyClasses = updatedPolicyClasses;
      updatedSchema[updatedAppIndex] = updatedApp;

      return updatedSchema;
    });
  };

  const handlePolicyCheckboxChange = (event, policyIndex) => {
    // Handle changes to the notification_target property of a specific policy object
    const { value, checked } = event.target;
    setSchema((prevSchema) => {
      const updatedSchema = [...prevSchema];
      const updatedAppIndex = updatedSchema.findIndex(
        (app) => app.name === selectedApplication.name
      );
      const updatedApp = { ...updatedSchema[updatedAppIndex] };
      const updatedPolicyClasses = [...updatedApp.policyClasses];
      const updatedPolicyClassIndex = updatedPolicyClasses.findIndex(
        (pc) => pc.name === selectedPolicyClass.name
      );
      const updatedPolicyClass = {
        ...updatedPolicyClasses[updatedPolicyClassIndex],
      };
      const updatedPolicies = [...updatedPolicyClass.policies];

      if (checked) {
        updatedPolicies[policyIndex] = {
          ...updatedPolicies[policyIndex],
          notification_target: [
            ...updatedPolicies[policyIndex].notification_target,
            value,
          ],
        };
      } else {
        updatedPolicies[policyIndex] = {
          ...updatedPolicies[policyIndex],
          notification_target: updatedPolicies[
            policyIndex
          ].notification_target.filter((target) => target !== value),
        };
      }

      updatedPolicyClass.policies = updatedPolicies;
      updatedPolicyClasses[updatedPolicyClassIndex] = updatedPolicyClass;
      updatedApp.policyClasses = updatedPolicyClasses;
      updatedSchema[updatedAppIndex] = updatedApp;

      return updatedSchema;
    });
  };

  const handleNotifyUserToggle = (event, policyIndex) => {
    setSchema((prevSchema) => {
      const updatedSchema = prevSchema.map((app) => {
        if (app.name === selectedApplication.name) {
          const updatedApp = {
            ...app,
            policyClasses: app.policyClasses.map((pc) => {
              if (pc.name === selectedPolicyClass.name) {
                const updatedPolicyClass = {
                  ...pc,
                  policies: pc.policies.map((policy, index) => {
                    if (index === policyIndex) {
                      const updatedPolicy = {
                        ...policy,
                        notify_user: !policy.notify_user,
                      };

                      return updatedPolicy;
                    }
                    return policy;
                  }),
                };

                return updatedPolicyClass;
              }
              return pc;
            }),
          };
          return updatedApp;
        }
        return app;
      });
      return updatedSchema;
    });
  };
  const resetPolicies = () => {
    setSchema(policies);
  };
  const submitPolicies = () => {
    // Filter and map the policies to include only specific properties
    const filteredPolicies = {
      ...selectedApplication,
      policyClasses: selectedApplication.policyClasses.map((pc) => ({
        ...pc,
        policies: pc.policies.map(
          ({
            policy_name,
            input_action,
            output_action,
            notify_user,
            enabled,
          }) => ({
            policy_name,
            enabled,
            input_action,
            output_action,
            notify_user,
          })
        ),
      })),
    };
    const finalJsonObject = { rules: filteredPolicies };
    console.log(finalJsonObject);

    // Sending the JSON object as a POST request
    fetch("http://104.42.50.43:8000/set-rules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(finalJsonObject),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from the server:", data);
        alert("Policies Set Successfully");
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);

        alert("Failed to set Policies");
      });
  };

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
          <h1>Policies</h1>
        </div>
      </div>

      <form
        className="connector-details shadow-box-margin-left"
        style={{ overflowX: "auto" }}
      >
        <div className="form-group" style={{ marginLeft: "40px" }}>
          <div className="policy-form-row">
            <label htmlFor="applicationSelect" className="dropdown-label">
              Application:
            </label>
            <select
              id="applicationSelect"
              className="dropdown-form"
              style={{ width: "50%" }}
              onChange={handleApplicationChange}
              value={selectedApplication.name}
            >
              {schema.map((app) => (
                <option key={app.name} value={app.name}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>
          <div className="policy-form-row">
            <label htmlFor="policyClassSelect" className="dropdown-label">
              Policy Group:
            </label>
            <select
              id="policyClassSelect"
              className="dropdown-form"
              style={{ width: "50%" }}
              onChange={handlePolicyClassChange}
              value={selectedPolicyClass.name}
            >
              {selectedApplication.policyClasses.map((pc) => (
                <option key={pc.name} value={pc.name}>
                  {pc.name}
                </option>
              ))}
            </select>
          </div>
          <div className="policy-form-row">
            <button
              type="button"
              className="compact-btn"
              onClick={resetPolicies}
            >
              Reset Policies
            </button>
            <button
              type="button"
              className="compact-btn"
              onClick={submitPolicies}
            >
              Submit Policies
            </button>
          </div>
        </div>

        <div className="shadow-box" style={{ flexDirection: "column" }}>
          {/* Dropdowns for input, output, notification actions, threshold, and frequency */}
          {selectedPolicyClass.policies.map((policy, index) => (
            <div className="form-group" key={index}>
              <h3>Policy Name: {policy.policy_name}</h3>
              <br />
              <div className="policy-form-row">
                <label>Input Action</label>
                <select
                  name="input_action"
                  value={policy.input_action}
                  onChange={(event) => handlePolicyInputChange(event, index)}
                  className="dropdown-form"
                >
                  {inputActionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="policy-form-row">
                <label>Output Action</label>
                <select
                  name="output_action"
                  value={policy.output_action}
                  onChange={(event) => handlePolicyInputChange(event, index)}
                  className="dropdown-form"
                >
                  {outputActionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="policy-form-row">
                <label>Notification Action</label>
                <select
                  name="notification_action"
                  value={policy.notification_action}
                  onChange={(event) => handlePolicyInputChange(event, index)}
                  className="dropdown-form"
                >
                  {notificationActionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="policy-form-row">
                <label>
                  Notify User
                  <input
                    type="checkbox"
                    name="notify_user"
                    checked={policy.notify_user}
                    onChange={(event) => handleNotifyUserToggle(event, index)}
                    className="dropdown-form"
                  />
                  {policy.notify_user ? "ON" : "OFF"}
                </label>
              </div>
              {policy.constraint_type === "Advanced (AI)" && (
                <div className="policy-form-row">
                  <label>Threshold</label>
                  <select
                    name="threshold"
                    value={policy.threshold}
                    onChange={(event) => handlePolicyInputChange(event, index)}
                    className="dropdown-form"
                  >
                    {thresholdOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="policy-form-row">
                <label>Notification Frequency</label>
                <select
                  name="notification_frequency"
                  value={policy.notification_frequency}
                  onChange={(event) => handlePolicyInputChange(event, index)}
                  className="dropdown-form"
                >
                  {notificationFrequencyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Multi-select checkbox for notification_target */}
              <div
                className="policy-form-row"
                style={{ flexDirection: "column" }}
              >
                <label>Notification Target</label>
                <div>
                  {notificationTargetOptions.map((target) => (
                    <label key={target}>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "10px" }}
                        name={`notification_target_${index}`}
                        value={target}
                        checked={policy.notification_target.includes(target)}
                        onChange={(event) =>
                          handlePolicyCheckboxChange(event, index)
                        }
                      />
                      {target}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Policies;
