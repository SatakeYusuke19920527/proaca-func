import * as gpt from './gpt';
import * as Stripe from './stripe';

export const v1 = {
  Gpt: { ...gpt },
  stripe: { ...Stripe },
};
