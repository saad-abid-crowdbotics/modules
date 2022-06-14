import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
// @ts-ignore
import { OptionsContext } from "@options";
const CreatePaymentIntent = (props) => {
  const options = useContext(OptionsContext);
  const [value, setValue] = useState({
    amount: 0,
    currency: "usd",
    method: "card"
  });

  const { styles } = options;
  const handleCreatePaymentIntent = () => {
    props.navigation.navigate("ConfirmPayment", {
      value
    });
  };

  return (
    <View style={styles.container}>
       <View>
            <Text style={styles.text}>Amount</Text>
            <View style={styles.textInput}>
              <Input placeholder='Amount' setValue={setValue} value={value} name={"amount"} />
            </View>
      </View>
      <View style={styles.pt14}>
            <Text style={styles.text}>Currency Type</Text>
            <View style={styles.textInput}>
              <Input placeholder='Currency Type' setValue={setValue} value={value} name={"currency"} />
            </View>
      </View>
      <View style={styles.pt14}>
            <Text style={styles.text}>Method</Text>
            <View style={styles.textInput}>
              <Input placeholder='Method' setValue={setValue} value={value} name={"method"} />
            </View>
      </View>
      <Button onPress={handleCreatePaymentIntent} >Create payment intent</Button>
    </View>
  );
};
export default CreatePaymentIntent;
