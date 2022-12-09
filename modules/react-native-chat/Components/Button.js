<<<<<<< HEAD
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
export default ({ title, onPress }) => {
    return <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>;
};
export const InlineButton = ({ title, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 8, paddingVertical: 8 }}>
    <Text style={{ fontSize: 16 }}>{title}</Text>
  </TouchableOpacity>;
};
=======
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
  );
};
export const InlineButton = ({ title, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        <Text style={styles.txtStyle}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    paddingHorizontal: 8,
    paddingVertical: 8
  },
  txtStyle: {
    fontSize: 16
  }
});
export default Button;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
