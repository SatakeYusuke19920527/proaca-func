import { regionFunctions, stripe } from '../../helper';
const uuid = require('uuid');
/**
 * 決済を作成
 * proaca.v1.stripe.createCharge({stuid: "", amount: 100})
 * user1
 *  cus_NZ9TVs7RICGMue
 *  chargeId
 *  ch_3Mo1upFQKk4Az5jH0dqSzfBs
 */
export const createCharge = regionFunctions.https.onCall(
  async (data, context) => {
    const idempotencyKey = uuid.v4();
    const customer = data.stuid; // 顧客
    const amount = data.amount; // 支払い総額
    return stripe.charges.create(
      {
        customer: customer,
        amount: amount,
        currency: 'jpy',
        transfer_group: 'proaca',
      },
      {
        idempotencyKey: idempotencyKey,
      }
    );
  }
);
