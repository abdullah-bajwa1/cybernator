import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Header, Icon, Table } from "semantic-ui-react";

const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToekn] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      setUserInfo(authState.idToken.claims);
      setAccessToekn(authState.accessToken);
      // You can also get user information from the `/userinfo` endpoint
      /*oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });*/
    }
  }, [authState, oktaAuth]); // Update if authState changes

  if (!userInfo) {
    return (
      <div>
        <p>Fetching user profile...</p>
      </div>
    );
  }

  return (
    <div>
      <Header as="h1">
        <Icon name="drivers license" /> My User Profile (ID Token Claims){" "}
      </Header>
      <p>
        Below is the information from your ID token which was obtained during
        the &nbsp;
        <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">
          PKCE Flow
        </a>{" "}
        and is now stored in local storage.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Claim</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(userInfo).map((claimEntry) => {
            const claimName = claimEntry[0];
            const claimValue = claimEntry[1];
            const claimId = `claim-${claimName}`;
            return (
              <tr key={claimName}>
                <td>{claimName}</td>
                <td style={{ maxWidth: "60vw" }} id={claimId}>
                  {claimValue.toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tr>
          <td>Access Token</td>
          <td style={{ maxWidth: "60vw", padding: "10px" }}>
            <p>{accessToken.accessToken}</p>
          </td>
        </tr>
      </Table>
    </div>
  );
};

export default Profile;
