import { credentials } from "../options";
export const getOauthToken = async (code) => {
  const result = await fetch("https://connect.stripe.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: `Bearer ${credentials.SECRET_KEY}`
    },
    body: `client_secret=${credentials.SECRET_KEY}&code=${code}&grant_type=${credentials.GRANT_TYPE}`
  }).then((res) => res.json());

  return result;
};
