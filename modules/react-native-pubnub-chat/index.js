import React from "react";
import Navigator from "./Navigator";
import { MenuProvider } from "react-native-popup-menu";

const App = () => {
  return <MenuProvider><Navigator /></MenuProvider>;
};

export default {
  title: "Chat",
  navigator: App
};
