
import { valueToNode } from "@babel/types";
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
      <View>
        <TextInput
          style={textStyles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={(num) => props.setValue(num)}
          placeholderTextColor='#ddd'
          multiline={props.multiline}
          numberOfLines={props.numberOfLines ? props.numberOfLines : 10}
          editable={props.editable !== false}
        />
      </View>
  );
};

const textStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 49,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14
  }
});

export default Input;
