import { regionFunctions, stripe } from '../../helper';

/**
 * 顧客の削除
 * proaca.v1.stripe.deleteAccount({})
 */
export const deleteAccount = regionFunctions.https.onCall(
  async (data, context) => {
    const deleted = await stripe.accounts.del('acct_1NFA8XCZhguZtcib');
    return deleted;
  }
);
