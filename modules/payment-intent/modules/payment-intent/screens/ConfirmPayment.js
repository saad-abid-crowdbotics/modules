import React, { useContext, Fragment, useState } from "react";
import { View, Alert } from "react-native";
// @ts-ignore
import { OptionsContext } from "@options";
// @ts-ignore
import { StripeProvider, CardField, useStripe } from "@stripe/stripe-react-native";
import Button from "../components/Button";
import { createPaymentIntent } from "../api";
// @ts-ignore
const ConfirmPayment = (props) => {
  const options = useContext(OptionsContext);
  // @ts-ignore
  const { styles } = options;
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState({});
  const { value } = props.route.params;

  const handlePay = async () => {
    await createPaymentIntent((value.amount * 100), value.currency, [value.method])
      .then((res) => res.json())
      .then(async (res) => {
        await confirmPayment(res.client_secret, {
          paymentMethodType: "Card",
          data: cardDetails
        }).then(({ paymentIntent, error }) => {
          if (paymentIntent) {
            Alert.alert(
              paymentIntent.status,
              "Transaction Confirmed Successfully",
              [
                { text: "OK", onPress: () => props.navigation.navigate("CreatePaymentIntent") }
              ],
              { cancelable: false }
            );
          }
          if (error) {
            Alert.alert(error.code, error.message);
          }
        });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View style={styles.container}>
    <StripeProvider publishableKey={options.publishableKey} merchantIdentifier="merchant.identifier">
      <Fragment>
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: "4242 4242 4242 4242"
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000"
          }}
          style={{
            width: "100%",
            height: 50,
            marginVertical: 30
          }}
          onCardChange={(cardDetails) => {
            setCardDetails(cardDetails);
          }}
          // @ts-ignore
          onFocus={(focusedField) => {
            console.log("focusField", focusedField);
          }}
        />
        <Button onPress={handlePay}>Pay</Button>
      </Fragment>
    </StripeProvider>
    </View>
  );
};
export default ConfirmPayment;
