import { regionFunctions, stripe } from '../../helper';
import { CardType } from '../../types/types';

/**
 * 顧客情報にカード情報を登録
 * カード情報はToken化
 * user1
 *  customerId = cus_NZ9TVs7RICGMue
 *  cardToken = tok_1Mo1N4FQKk4Az5jHEOXQfd8f
 *  proaca.v1.stripe.createCardInfo({customerId: "cus_O2E4j8JZt5oTkV", cardInfo: { number: '4242424242424242', exp_month: 6, exp_year: 2024, cvc: '314'}})
 *
 */
export const createCardInfo = regionFunctions.https.onCall(
  async (data, context) => {
    const customerId = data.customerId;
    const cardToken = await createCardToken(data.cardInfo);
    return stripe.customers.createSource(customerId, { source: cardToken });
  }
);

/**
 * クレジットカードのtoken作成
 * @param card
 * @returns
 */
const createCardToken = async (card: CardType) => {
  const token = await stripe.tokens.create({ card });
  return token.id;
};
