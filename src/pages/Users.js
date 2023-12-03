import React, { useState } from "react";

const Users = () => {
  const api_url = process.env.REACT_APP_BACKEND_API_URL;
  const okta_token = process.env.REACT_APP_OKTA_TOKEN;
  const org_url = process.env.REACT_APP_OKTA_URL;

  const [showOktaModal, setShowOktaModal] = useState(false);
  const [showCsvModal, setShowCsvModal] = useState(false);
  const [organizationUrl, setOrganizationUrl] = useState(org_url);
  const [selectedCsvFile, setSelectedCsvFile] = useState(null);
  const [users, setUsers] = useState([]);

  const openOktaModal = () => {
    setShowOktaModal(true);
  };

  const closeOktaModal = () => {
    setShowOktaModal(false);
  };

  const openCsvModal = () => {
    setShowCsvModal(true);
  };

  const closeCsvModal = () => {
    setShowCsvModal(false);
  };

  const handleOktaSubmit = () => {
    const apiUrl = `${api_url}/okta/import_users?okta_url_org=${encodeURIComponent(
      organizationUrl
    )}&api_token_org=${okta_token}`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        setUsers((prevUsers) => [...prevUsers, ...data]);
        console.log(data);
        closeOktaModal();
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  function parseArrayString(arrayString) {
    // Remove the square brackets and split the string into an array of object strings
    const objectStrings = arrayString.slice(2, -2).split("}, {");

    // Convert each object string to an actual object
    const arrayOfObjects = objectStrings.map((objectString) => {
      // Add braces to make it a valid JSON object, then replace single quotes with double quotes
      const formattedObjectString = `{${objectString}}`.replace(/'/g, '"');
      return JSON.parse(formattedObjectString);
    });

    return arrayOfObjects;
  }

  const handleCsvSubmit = () => {
    const apiUrl = `${api_url}/okta/import_csv`;

    const formData = new FormData();
    formData.append("file", selectedCsvFile);

    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        const modifiedCsvData = data.map((user) => ({
          ...user,
          groups: parseArrayString(user.groups),
        }));
        setUsers((prevUsers) => [...prevUsers, ...modifiedCsvData]);
        closeCsvModal();
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="row-container"
        style={{
          alignItems: "center",
          maxWidth: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          className="row-container"
          style={{
            alignItems: "center",
            maxWidth: "60%",
            justifyContent: "flex-start",
          }}
        >
          <h1>AI Connectors</h1>
        </div>
        <button className="compact-btn" onClick={openOktaModal}>
          Import from Okta
        </button>
        <button className="compact-btn" onClick={openCsvModal}>
          Import from CSV
        </button>
      </div>

      {/* Okta Import Modal */}
      {showOktaModal && (
        <div className="modal">
          <div className="modal-form">
            <h2>Okta Import Form</h2>
            <input
              type="text"
              placeholder="Organization URL"
              value={organizationUrl}
              onChange={(e) => setOrganizationUrl(e.target.value)}
              readOnly
            />
            <div>
              <button className="compact-btn" onClick={handleOktaSubmit}>
                Submit
              </button>
              <button className="compact-btn" onClick={closeOktaModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSV Import Modal */}
      {showCsvModal && (
        <div className="modal">
          <div className="modal-form">
            <h2>CSV Import Form</h2>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setSelectedCsvFile(e.target.files[0])}
              required
            />
            <div>
              <button className="compact-btn" onClick={handleCsvSubmit}>
                Submit
              </button>
              <button className="compact-btn" onClick={closeCsvModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* User Table */}
      <div>
        <h2>User Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Groups</th> {/* New column */}
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  {user.groups.map((group) => (
                    <span key={group.id}>{group.name}, </span>
                  ))}
                </td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
