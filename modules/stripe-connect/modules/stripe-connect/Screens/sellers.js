import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import Button from "../components/Button";
import { ACCOUNTS_DATA } from "../options";
const Sellers = (props) => {
  const onPress = () => {
    props.navigation.navigate("create-product");
  };

  const Item = ({ status, email, balance, date }) => (
    <View style={styles.walletInfo}>
    <View style={styles.infoContainer}>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "bold" }}>{email}</Text>
      </View>
    </View>
    <View style={styles.balanceContainerRight}>
      <Text style={[styles.mr20, styles.status]}>{status}</Text>
      <Text style={[styles.balanceContainer, styles.mr10]}>{balance}</Text>
      <Text style={styles.balanceContainer}>{date}</Text>
    </View>
  </View>
  );

  return (
		<ScrollView>
      	<View style={styles.buttonContainer}>
        <Text style={styles.headText}>Connected Accounts</Text>
				<Button onPress={onPress} height={35}>Connect to Stripe</Button>
			</View>
			<View style={styles.accountsHead}>
				<Text style={styles.accountsText}>ACCOUNT</Text>
				<View style={styles.accountsHeadRight}>
					<Text style={[styles.accountsText, styles.mr15]}>STATUS</Text>
					<Text style={[styles.accountsText, styles.mr10]}>BALANCE</Text>
					<Text style={styles.accountsText}>DATE</Text>
				</View>
			</View>
      <FlatList
        data={ACCOUNTS_DATA}
        renderItem={({ item }) => (<Item status={item.status} email={item.email} balance={item.balance} date={item.date}/>)}
        keyExtractor={item => item.id}
      />
		</ScrollView>
  );
};

export default Sellers;

const styles = StyleSheet.create({
  headText: {
    marginLeft: 10,
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold"
  },
  walletInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#C1C1C1"
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  textContainer: {},
  balanceContainer: {
    fontSize: 14,
    color: "#a7aab1",
    alignSelf: "flex-end"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15
  },
  balanceContainerRight: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  accountsHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#C1C1C1",
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    marginVertical: 20
  },
  accountsText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  mr10: { marginRight: 15 },
  mr20: {
    marginRight: 15,
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  accountsHeadRight: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  status: { backgroundColor: "#9ee2a7", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 17 },
  mr15: { marginRight: 30 }
});
