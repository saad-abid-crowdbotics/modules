<<<<<<< HEAD
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
=======
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
const styles = StyleSheet.create({
  container: {
  },
  shape: {
    width: 42,
    height: 42,
<<<<<<< HEAD
    borderRadius: 50,
=======
    borderRadius: 50
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  },
  text: {
    textTransform: "uppercase",
    fontSize: 30,
<<<<<<< HEAD
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  }
});
export default ({ letter, source }) => <View style={styles.container}>
  {source ?
    <Image source={{ uri: source }} style={styles.shape} /> :
    <LinearGradient colors={['#4CAF50', '#4CAF50']} start={{ x: 0.1, y: 0.2 }} style={styles.shape}>
      <Text style={styles.text}>{letter}</Text>
    </LinearGradient>}
</View>;
=======
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});
const Circle = ({ letter, source }) => (
  <View style={styles.container}>
    {source
      ? <Image source={{ uri: source }} style={styles.shape} />
      : <LinearGradient colors={["#4CAF50", "#4CAF50"]} start={{ x: 0.1, y: 0.2 }} style={styles.shape}>
        <Text style={styles.text}>{letter}</Text>
      </LinearGradient>
    }
  </View>
);
export default Circle;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
