import React, { useState } from "react";
// @ts-ignore
import { WebView } from "react-native-webview";
import { credentials } from "../options";
import { parseQueryString } from "../utils";
import { getOauthToken } from "../Apis";

const SellerRegistration = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [oauthToken, setOauthToken] = useState("");
  const userAgent = "Mozilla/5.0 (Linux; Android) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.87 Mobile Safari/537.36";
  const onNavigationStateChange = (evt) => {
    if (evt.url.includes(credentials.REDIRECT_URI)) {
      console.log(evt.url);
      const params = parseQueryString(evt.url);
      if (params.code && isFirst) {
        setIsFirst(false);
        getOauthToken(params.code).then((response) => {
          setOauthToken(response);
        }).catch((error) => console.log(error));
      }
    }
  };
  console.log("oauthToken: ", oauthToken);
  return (
    <WebView
      useWebKit={true}
      userAgent={userAgent}
      onNavigationStateChange={onNavigationStateChange}
      source={{ uri: `https://connect.stripe.com/express/oauth/authorize?redirect_uri=${credentials.REDIRECT_URI}&client_id=${credentials.CLIENT_ID}&state=read_write` }}
    />
  );
};

export default SellerRegistration;
