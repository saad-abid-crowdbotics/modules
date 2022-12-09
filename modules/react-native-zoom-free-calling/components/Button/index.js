<<<<<<< HEAD
import React from "react"
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from "react-native"
=======
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.CardBody}>
        <View style={styles.InnerCard}>
          <View>
            <Text style={styles.HostMeetingText}>{props.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const styles = StyleSheet.create({
  CardBody: {
    minHeight: 50,
<<<<<<< HEAD
    height: '100%',
    backgroundColor: '#2D8CFF',
=======
    height: "100%",
    backgroundColor: "#2D8CFF",
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    borderRadius: 5
  },
  InnerCard: {
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
<<<<<<< HEAD
      height: 0,
=======
      height: 0
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,
    elevation: 15,
<<<<<<< HEAD
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  HostMeetingText: {
    color: 'white',
    textTransform: 'uppercase'
  }
});


export default Button
=======
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  HostMeetingText: {
    color: "white",
    textTransform: "uppercase"
  }
});

export default Button;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
