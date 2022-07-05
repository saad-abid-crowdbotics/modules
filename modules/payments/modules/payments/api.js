import { getGlobalOptions } from "@options";

const global = getGlobalOptions();
const BASE_URL = 'https://2d7e-39-53-110-60.ap.ngrok.io' //global.url; // change your BASE_URL in `options/options.js` to edit this value
const token = "Token fab5be4cd2d4ac5aedf4b2bff0c2f8ed8055ad5d";
// FIXME: Make this call with Authorization
// Right now there is no login in this module but when this feture will be added
// there will be a user profile added make changes accordingly
export const fetchPaymentSheetParams = async (amount) => {
  const response = await fetch(`${BASE_URL}/modules/payments/payment_sheet/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      cents: parseFloat(amount) * 100
    })
  });

  const { paymentIntent, ephemeralKey, customer } = await response.json();
  __DEV__ && console.log("response", { paymentIntent, ephemeralKey, customer });
  return {
    paymentIntent,
    ephemeralKey,
    customer
  };
};

export const fetchPaymentHistory = async () => {
  const response = await fetch(
    `${BASE_URL}/modules/payments/get_payments_history/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  );
  const { data } = await response.json();
  return data;
};
