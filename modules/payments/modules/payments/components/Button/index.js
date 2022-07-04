import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
export const Button = (props) => {
  return (
      <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
        <View
          style={[
            btnStyles.button,
            {
              backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
              height: props.height ? props.height : 49,
              borderWidth: props.borderWidth ? props.borderWidth : 0,
              borderColor: props.borderColor ? props.borderColor : "#000000"
            }
          ]}
        >
          <Text style={[btnStyles.text, { color: props.color ? props.color : "#ffffff" }]}>
            {props.children}
          </Text>
        </View>
      </TouchableHighlight>
  );
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    width: 307
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});
