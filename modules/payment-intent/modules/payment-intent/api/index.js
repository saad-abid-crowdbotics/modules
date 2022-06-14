const BASE_URL = "https://9758-39-53-123-191.ngrok.io"; // global;

export const createPaymentIntent = (amount, currency, paymentMethod) => {
  try {
    const res = fetch(`${BASE_URL}/modules/payment-intent/create-payment-intent/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        amount,
        currency,
        payment_method_types: paymentMethod
      })
    });
    return res;
  } catch (error) {
    throw new Error("NETWORK_ERROR").message;
  }
};
