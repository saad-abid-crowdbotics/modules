<<<<<<< HEAD
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default ({ onPress, source }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        {source ? <Image source={{ uri: source }} style={styles.shape} /> : <LinearGradient colors={['#a5bef5', '#91a2c7']} start={{ x: 0.1, y: 0.2 }} style={styles.shape}>
        </LinearGradient>}
        <Text style={styles.text}>Set New Photo</Text>
      </TouchableOpacity>
    </>
  )
}
=======
import React, { Fragment } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CirclePrompt = ({ onPress, source }) => {
  return (
    <Fragment>
      <TouchableOpacity onPress={onPress}>
        {source
          ? <Image source={{ uri: source }} style={styles.shape} />
          : <LinearGradient colors={["#a5bef5", "#91a2c7"]} start={{ x: 0.1, y: 0.2 }} style={styles.shape}>
        </LinearGradient>}
        <Text style={styles.text}>Set New Photo</Text>
      </TouchableOpacity>
    </Fragment>
  );
};
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const styles = StyleSheet.create({
  shape: {
    width: 100,
    height: 100,
    borderRadius: 50,
<<<<<<< HEAD
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center'
  },
  text: {
    paddingTop: 8,
    textAlign: 'center',
  }
});
=======
    justifyContent: "center",
    alignSelf: "center"
  },
  icon: {
    alignSelf: "center"
  },
  text: {
    paddingTop: 8,
    textAlign: "center"
  }
});
export default CirclePrompt;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
