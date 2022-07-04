import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    height: 100,
    padding: 13
  },
  text: {
    color: "black",
    fontSize: 20
  },
  payButton: {
    width: "40%",
    height: 50,
    alignSelf: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    margin: 5,
    height: 50
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white"
  },
  payNow: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: "#016f70"
  },
  inputField: {
    padding: 15,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
  bold: {
    fontWeight: "600"
  },
  listItemContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: "#c9c9c9c9",
    borderRadius: 10
  },
  container1: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FFF"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 40
  },
  back: { width: 11.25, height: 20, resizeMode: "contain", marginLeft: -15 },
  heading: { fontSize: 16, color: "#000" },
  trackingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10
  },
  switch: { borderWidth: 2, borderColor: "#000" },
  switchText: { fontSize: 24, fontWeight: "bold" },
  mr10: {
    marginLeft: 25,
    marginBottom: 10
  },
  buttonBottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C4C4C4",
    marginBottom: 30,
    marginHorizontal: 7,
    paddingHorizontal: 10

  }
});

export const localOptions = {
  stripeSecretKey: "sk_test_51I6B2tBZuKMpoaGSHjptnGx1uKM2UHzRpZZM93nUK35621GeKlBoVXysrthHkEMv2Le3DKS5eFL2DlpqNB7WwFVi00KplrjUpP",
  merchantName: "Example Inc.",
  enableGooglePay: true,
  enableApplePay: true,
  merchantIdentifier: "merchant.com.crowdbotics.inaday",
  merchantCountryCode: "US",
  merchantCurrency: "USD",
  stripeTestEnv: true,
  stripePublishKey: "pk_test_51I6B2tBZuKMpoaGSgUqIBIqZot4le5ozrINvTGSaDNKr4gDdefPOgftlCl3KFgBfQbF7BfWAGErVKpFPXvAzuLRX00lBUxozen"
};

export default {
  title: "App Menu",
  copy: "Routes available",
  styles: styles,
  localOptions: localOptions
};
