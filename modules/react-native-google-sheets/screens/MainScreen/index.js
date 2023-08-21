import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  GoogleSignin,
  statusCodes
} from "@react-native-google-signin/google-signin";

const MainScreen = ({ route }) => {
  const { token } = route?.params;

  return <View style={styles.container}></View>;
};
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
