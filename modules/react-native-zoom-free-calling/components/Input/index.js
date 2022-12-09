<<<<<<< HEAD
import React from "react"
import { StyleSheet, TextInput, View, Text } from 'react-native';
=======
import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const Input = (props) => {
  return (
    <View style={styles.Mt10}>
      {props.label && <Text style={styles.FwBold}>{props.label}</Text>}
      <TextInput
        style={[styles.input, styles.color]}
        placeholder={props.label}
        editable={props.editable}
        value={props.value}
        onChangeText={props.onChangeText}
      />
<<<<<<< HEAD
      { ('errorMessage' in props && props.errorMessage != "") && <Text style={styles.inputError}>{props.errorMessage}</Text>}
    </View>
  )
}
=======
      { ("errorMessage" in props && props.errorMessage !== "") && <Text style={styles.inputError}>{props.errorMessage}</Text>}
    </View>
  );
};
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 4,
    marginTop: 5,
    fontSize: 12
  },
  inputError: {
    marginLeft: 4,
    fontStyle: "italic",
<<<<<<< HEAD
    color: '#FA060D'
=======
    color: "#FA060D"
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  },
  Mt10: {
    marginTop: 10
  },
  FwBold: {
<<<<<<< HEAD
    fontWeight: 'bold'
  },
  color: {
    color: '#000000'
  }
});


export default Input
=======
    fontWeight: "bold"
  },
  color: {
    color: "#000000"
  }
});

export default Input;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
