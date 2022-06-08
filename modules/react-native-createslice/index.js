import React, { useEffect } from "react";
import {
  Button,
  View
} from "react-native";
import slice, { populateUsers, usersRequest } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { getStore } from "./utils";

const App = () => {
  const { User } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("User", User);
  }, [User]);

  const loadUsersFromLocalStorage = async () => {
    dispatch(populateUsers(JSON.parse(await getStore("users"))));
  };

  return (
    <View>
      <Button title="Get Users from Api" onPress={() => dispatch(usersRequest())} />
      <Button title="Load Users from Encrypted Local storage" onPress={loadUsersFromLocalStorage} />
    </View>
  );
};

export default {
  title: "Createslice",
  navigator: App,
  slice: slice
};
