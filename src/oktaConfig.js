import { OktaAuth } from "@okta/okta-auth-js";
const oktaAuth = new OktaAuth({
  issuer: "https://trial-4279482.okta.com/oauth2/default",
  clientId: "0oa915qzbmlqidqgQ697",
  redirectUri: window.location.origin + "/okta/callback",
});

export default oktaAuth;
