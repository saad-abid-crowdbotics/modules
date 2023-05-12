import React, { Fragment } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import calendarIcon from "./assets/calendarIcon.png";
import logo from "./assets/blackbaudLogo.png";
import backIcon from "./assets/backIcon.png";

const EventListing = () => {
  const events = [
    {
      name: "Test Event 1",
      category: { name: "Category name 1" },
      start_date: "12-12-12",
      start_time: "5:00"
    },

    {
      name: "Test Event 2",
      category: { name: "Category name 2" },
      start_date: "12-12-12",
      start_time: "5:00"
    },
    {
      name: "Test Event 3",
      category: { name: "Category name 3" },
      start_date: "12-12-12",
      start_time: "5:00"
    },
    {
      name: "Test Event 4",
      category: { name: "Category name 4" },
      start_date: "12-12-12",
      start_time: "5:00"
    },
    {
      name: "Test Event 5",
      category: { name: "Category name 5" },
      start_date: "12-12-12",
      start_time: "5:00"
    }
  ];
  const loading = false;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonTouch}>
        <Image source={backIcon} style={styles.backIconStyles} />
      </TouchableOpacity>
      <ScrollView style={{ marginTop: 10 }}>
        {loading === "pending"
          ? (
          <ActivityIndicator
            size={"large"}
            color={"#065171"}
            style={{ alignSelf: "center" }}
          />
            )
          : (
          <Fragment>
            {events?.length !== 0 &&
              events.map((item, index) => (
                <View style={styles.box} key={index}>
                  <View style={{ flexDirection: "row" }}>
                    <Image source={logo} style={styles.image} />
                    <View style={styles.Txt}>
                      <Text style={styles.titleTxt}>{item?.name}</Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={styles.addressTxt}>
                          {item?.category?.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 7
                        }}
                      >
                        <Image
                          source={calendarIcon}
                          style={{ height: 15, width: 14, marginRight: 10 }}
                        />
                        <Text style={styles.dateTxt}>
                          {item?.start_date},{item?.start_time}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.buttonBackground}>
                    <Text style={styles.buttonText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </Fragment>
            )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "#fff"
  },
  container: {
    backgroundColor: "#f8f8f8",
    flex: 1
  },
  backIconStyles: {
    height: 20,
    width: 11
  },
  backButtonTouch: {
    marginLeft: 20,
    marginVertical: 20,
    width: 20
  },
  box: {
    height: 200,
    width: "93%",
    backgroundColor: "white",
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },

  image: {
    width: "40%",
    height: "67%",
    marginHorizontal: 20,
    marginVertical: 20,
    flex: 1
  },
  Txt: {
    flex: 3,
    marginVertical: 20,
    marginHorizontal: 0
  },
  titleTxt: {
    fontSize: 14
  },
  addressTxt: {
    fontSize: 14
  },
  dateTxt: {
    fontSize: 14
  },
  priceTxt: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 0,
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonBackground: {
    marginTop: 20,
    width: "80%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.2,
    alignSelf: "center",
    borderColor: "black"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default EventListing;
