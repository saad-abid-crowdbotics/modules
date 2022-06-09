import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
const CreateProduct = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const pressHandler = () => {

  };
  return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.productImageContainer}>
                        <Image source={require("../assets/upload.png")} style={styles.productImage}/>
                        <Text style={{ color: "#979797" }}>Upload Image</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Product Name</Text>
                        <View style={styles.textInput}>
                            <Input placeholder='Enter' setValue={setName} value={name} />
                        </View>

                    </View>
                    <View style={styles.pt14}>
                        <Text style={styles.text}>Product Description</Text>
                        <View style={[styles.textInput, { height: 150 }]}>
                            <Input placeholder='Enter' setValue={setMessage} value={message} multiline={true} numberOfLines={5} />
                        </View>
                    </View>
                    <View style={styles.pt14}>
                    <Text style={styles.text}>Product Price</Text>
                    <View style={styles.priceContainer}>
                    <Text style={styles.priceController}>+</Text>
                    <Input placeholder='Enter' setValue={setEmail} value={email} />
                    <Text style={styles.priceController}>-</Text>
                    </View>
                    </View>

                    <View style={styles.button}>
                        <Button onPress={pressHandler}>Add Product</Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  text: { paddingLeft: 10, paddingBottom: 10 },
  textInput: { borderWidth: 0.5, borderRadius: 10, borderColor: "#C4C4C4", paddingVertical: 3 },
  pt14: { paddingTop: 14 },
  button: { paddingHorizontal: 20, marginTop: 40, height: 50 },
  or: { display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 20 },
  link: { display: "flex", justifyContent: "center", alignItems: "center" },
  linkText: { textDecorationLine: "underline", color: "#0000ee" },
  validations: { color: "red" },
  productImageContainer: { height: 170, backgroundColor: "#F1F1F1", borderRadius: 10, justifyContent: "center", alignItems: "center", marginBottom: 15 },
  productImage: { height: 60, width: 60, resizeMode: "contain" },
  priceContainer: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderColor: "#C4C4C4", borderWidth: 1, borderRadius: 10 },
  priceController: { backgroundColor: "#F1F1F1", paddingHorizontal: 11, paddingVertical: 4, borderRadius: 15, fontSize: 16 }

});
