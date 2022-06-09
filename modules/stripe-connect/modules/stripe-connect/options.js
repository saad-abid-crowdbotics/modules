import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  emailContainer: {
    marginBottom: 10
  },
  mr10: {
    marginRight: 10,
    marginBottom: 10
  },
  buttonContainer: {
    width: "80%",
    alignSelf: "center",
    marginTop: 30
  },
  bottomContainer: {
    padding: 10,
    backgroundColor: "#F1F1F1",
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10
  },
  walletHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10
  },
  headText: { fontSize: 20, fontWeight: "bold" },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5
  }

});

export default {
  styles: styles
};

export const credentials = {
  REDIRECT_URI: "https://connect.stripe.com/connect/default/oauth/test",
  CLIENT_ID: "ca_LmhowYtIRrTOk7zvsmn4GciOSZD0EtMA",
  SECRET_KEY: "sk_test_51I6B2tBZuKMpoaGSHjptnGx1uKM2UHzRpZZM93nUK35621GeKlBoVXysrthHkEMv2Le3DKS5eFL2DlpqNB7WwFVi00KplrjUpP",
  GRANT_TYPE: "authorization_code"
};

export const PAYMENT_DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "US$8.00",
    email: "johndoe@gmail.com"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "US$8.00",
    email: "johndoe@gmail.com"
  }
];

export const PRODUCTS_DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "LAYES 40G",
    price: "US$8.00/month",
    date: "21 Apr 2021"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "KURKARY 50G",
    price: "US$8.00/month",
    date: "21 Apr 2021"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "LAYES 40G",
    price: "US$8.00/month",
    date: "21 Apr 2021"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "KURKARY 50G",
    price: "US$8.00/month",
    date: "21 Apr 2021"
  }

];

export const ACCOUNTS_DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    status: "Complete",
    balance: "US$8.00",
    email: "johndoe@gmail.com",
    date: "9 Jun"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    status: "Enabled",
    balance: "US$8.00",
    email: "johndoe@gmail.com",
    date: "9 Jun"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3a4563abb28ba",
    status: "Complete",
    balance: "US$8.00",
    email: "johndoe@gmail.com",
    date: "9 Jun"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91df97f63",
    status: "Enabled",
    balance: "US$8.00",
    email: "johndoe@gmail.com",
    date: "9 Jun"
  }
];
