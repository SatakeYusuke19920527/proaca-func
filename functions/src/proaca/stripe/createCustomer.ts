import { regionFunctions, stripe } from '../../helper';

/**
 * 1.
 * 顧客の作成
 * proaca.v1.stripe.createCustomer({name: "proaca", email: "proaca.tech@gmail.com", description: "test proacaです。"})
 */
export const createCustomer = regionFunctions.https.onCall(
  async (data, context) => {
    const customer = await stripe.customers.create({
      name: data.name,
      email: data.email,
      description: data.description,
    });
    return customer;
  }
);
