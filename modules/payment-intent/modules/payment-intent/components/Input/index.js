import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={(value) => props.setValue({ ...props.value, [props.name]: value })}
      placeholderTextColor='#ddd'
      multiline={props.multiline}
      numberOfLines={props.multiline ? 10 : null}
      editable={props.editable !== false}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    backgroundColor: "#fff",
    height: 49,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});

export default Input;
