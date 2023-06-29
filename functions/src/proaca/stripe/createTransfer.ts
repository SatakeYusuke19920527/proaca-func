import { regionFunctions, stripe } from '../../helper';
const uuid = require('uuid');
//const uuid = require('uuid');
/**
 * 送金を作成
 * destination
 * proaca.v1.stripe.createTransfer({chargeid: "", amount: 96, destination: ""})
 */
export const createTransfer = regionFunctions.https.onCall(
  async (data, context) => {
    const idempotencyKey = uuid.v4();
    const chargeId = data.chargeid; // 支払いID
    const amount = data.amount; // 支払い総額
    const destination = data.destination;
    await stripe.transfers.create(
      {
        amount: amount, // 支払い総額
        currency: 'jpy',
        destination: destination, // 送金先 acc_xxxxx
        source_transaction: chargeId,
      },
      {
        idempotencyKey: idempotencyKey,
      }
    );
  }
);
