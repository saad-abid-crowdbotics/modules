import { Text, View, StyleSheet, FlatList, ScrollView, Image } from "react-native";
import React from "react";
import { PRODUCTS_DATA } from "../options";

const Products = () => {
  const Item = ({ price, name, date }) => (
        <View style={styles.walletInfo}>
            <View style={styles.infoContainer}>
                <Image source={require("../assets/Rectangle.png")} style={styles.productImg}/>
                <View style={styles.textContainer}>
                    <Text style={styles.productTitle}>{name}</Text>
                    <Text style={styles.t12}>{price}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.balanceContainer}>{date}</Text>
            </View>
        </View>
  );

  return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.accountsHead}>
                    <Text style={styles.accountsText}>NAME</Text>
                    <Text style={styles.accountsText}>DATE</Text>
                </View>
                <FlatList
                    data={PRODUCTS_DATA}
                    renderItem={({ item }) => <Item name={item.name} price={item.price} date={item.date} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff"
  },
  walletInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#C1C1C1"

  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  textContainer: {
    marginLeft: 10
  },
  t12: {
    fontSize: 14,
    color: "#939393"
  },
  balanceContainer: {
    fontSize: 14,
    color: "#404452"
  },
  accountsHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: "#C1C1C1"
  },
  accountsText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  productTitle: {
    color: "#404452",
    fontSize: 14,
    fontWeight: "bold"
  },
  productImg: { height: 40, width: 40 }
});
