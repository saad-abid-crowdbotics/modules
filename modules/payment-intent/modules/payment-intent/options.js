import { StyleSheet } from "react-native";

const publishableKey = "pk_test_51I6B2tBZuKMpoaGSgUqIBIqZot4le5ozrINvTGSaDNKr4gDdefPOgftlCl3KFgBfQbF7BfWAGErVKpFPXvAzuLRX00lBUxozen";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingHorizontal: 10 },
  text: { paddingLeft: 10, paddingBottom: 10 },
  pt14: { paddingTop: 14 },
  textInput: { borderWidth: 0.5, borderRadius: 10, borderColor: "#C4C4C4", paddingVertical: 3 }
});

export default {
  styles: styles,
  publishableKey: publishableKey
};
