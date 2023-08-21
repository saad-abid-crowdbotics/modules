import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  GoogleSignin,
  statusCodes
} from "@react-native-google-signin/google-signin";

const Authentication = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      // what API you want to access on behalf of the user, default is email and profile
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      webClientId:
        "498931462491-ui9e6uj6lno12n82ff7t49gtjvad9gks.apps.googleusercontent.com",
      iosClientId:
        "498931462491-05mjorrvvu7nd3c3i1qm9brr81f29b2d.apps.googleusercontent.com",
      androidClientId:
        "498931462491-9rr72auodil5samd9n2nuejits0vs4qq.apps.googleusercontent.com"
    });
  }, []);

  const onLoginPress = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      const authToken = await GoogleSignin.getTokens();
      navigation.navigate("MainScreen", { token: authToken.accessToken });
    } else {
      try {
        await GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn();
        const authToken = await GoogleSignin.getTokens();
        navigation.navigate("MainScreen", { token: authToken.accessToken });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please authenticate with your Google Account.
      </Text>
      <TouchableOpacity onPress={onLoginPress} style={styles.buttonStyles}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Authentication;

const styles = StyleSheet.create({
  buttonText: { fontSize: 20, fontWeight: "700", color: "#fff" },
  buttonStyles: {
    alignSelf: "center",
    backgroundColor: "#000",
    marginHorizontal: 50,
    marginTop: 70,
    width: "50%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  container: { flex: 1 },
  title: {
    fontWeight: "500",
    color: "#000",
    fontSize: 24,
    textAlign: "center",
    marginTop: 100,
    marginHorizontal: 20
  }
});
