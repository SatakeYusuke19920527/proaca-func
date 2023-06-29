import { regionFunctions, stripe } from '../../helper';

/**
 * 3.
 * 本人確認
 * proaca.v1.stripe.createAccountLinks({stcuid: ""})
 */
export const createAccountLinks = regionFunctions.https.onCall(
  async (data, context) => {
    const stcuid = data.stcuid;
    const accountLink = await stripe.accountLinks.create({
      account: stcuid,
      refresh_url: 'https://proaca.vercel.app/',
      return_url: 'https://proaca.vercel.app/',
      type: 'account_onboarding',
    });

    return accountLink;
  }
);
