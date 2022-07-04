import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

export const Input = (props) => {
  return (
      <View style={InputStyles.container}>
        <TextInput
          style={InputStyles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={(num) => props.setPercent(num)}
          placeholderTextColor="#000"
          multiline={props.multiline}
          numberOfLines={props.multiline ? 10 : null}
          editable={props.editable !== false}
        />
      </View>
  );
};

const InputStyles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10
  },
  input: {
    backgroundColor: "#fff",
    height: 49,
    color: "#000",
    fontSize: 14
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});
