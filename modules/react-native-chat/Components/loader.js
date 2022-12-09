import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="#000" />
      </View>
    </View>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
<<<<<<< HEAD
    justifyContent: 'center',
    alignItems: 'center',
=======
    justifyContent: "center",
    alignItems: "center",
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    zIndex: 9999
  },
  loaderContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
<<<<<<< HEAD
    justifyContent: 'center',
    alignItems: 'center',
=======
    justifyContent: "center",
    alignItems: "center",
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    backgroundColor: "#F5F5F5",
    shadowColor: "#000",
    elevation: 3
  }
<<<<<<< HEAD
})
export default Loader;
=======
});
export default Loader;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
