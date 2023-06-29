import { regionFunctions, stripe } from '../../helper';
const uuid = require('uuid');

/**
 * 2.
 *  送金先アカウントの作成
 * proaca.v1.stripe.createConnectAccount({name: "proaca", email: "proaca.tech@gmail.com"})
 */
export const createConnectAccount = regionFunctions.https.onCall(
  async (data, context) => {
    const idempotencyKey = uuid.v4();

    const account = await stripe.accounts.create(
      {
        country: 'JP',
        type: 'express',
        email: data.email,
        capabilities: {
          card_payments: {
            requested: true,
          },
          transfers: {
            requested: true,
          },
        },
        business_type: 'individual',
        business_profile: {
          mcc: '5734',
          name: data.name,
          url: 'https://proaca.vercel.app/',
          product_description: 'proacaのユーザです。',
        },
      },
      {
        idempotencyKey: idempotencyKey,
      }
    );

    return account;
  }
);
