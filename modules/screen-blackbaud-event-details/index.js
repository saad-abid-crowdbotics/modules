import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import backIcon from "./assets/backIcon.png";

const EventDetails = () => {
  const loading = false;

  const eventDetail = {
    start_date: "12-12-12",
    start_time: "5:00",
    name: "Test Event",
    description: "This is a test event",
    date_added: "0-0-00",
    lookup_id: "33344"
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonTouch}>
        <Image source={backIcon} style={styles.backIconStyles} />
      </TouchableOpacity>

      {loading === "pending"
        ? (
        <ActivityIndicator color={"#000"} size={"large"} />
          )
        : (
        <View style={styles.mainCard}>
          <View style={styles.contentView}>
            <Text style={styles.heading}>Event time</Text>

            <Text style={styles.textStyle}>
              {eventDetail?.start_date}, {eventDetail?.start_time}
            </Text>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.heading}>Event name</Text>

            <Text style={styles.textStyle}>{eventDetail?.name}</Text>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.heading}>Event description</Text>

            <Text style={styles.textStyle}>{eventDetail?.description}</Text>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.heading}>Date added</Text>

            <Text style={styles.textStyle}>{eventDetail?.date_added}</Text>
          </View>

          <View style={styles.contentView}>
            <Text style={styles.heading}>Look-up Id</Text>

            <Text style={styles.textStyle}>{eventDetail?.lookup_id}</Text>
          </View>

          <TouchableOpacity style={styles.listButton}>
            <Text style={styles.textColor}>Attendee list</Text>
          </TouchableOpacity>
        </View>
          )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#7C7C7C",
    marginTop: 5,
    width: 341
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
  textColor: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  listButton: {
    backgroundColor: "#000000",
    width: 330,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 35
  },
  contentView: {
    marginLeft: 30,
    marginTop: 20
  },
  heading: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 15
  },
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1
    // justifyContent: "center"
  },
  mainCard: {
    backgroundColor: "#fff",
    marginBottom: 100,
    width: "100%"
  }
});

export default EventDetails;
