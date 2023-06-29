import * as functions from 'firebase-functions';
import { Configuration, OpenAIApi } from 'openai';

// funtionsのリージョン指定
export const regionFunctions = functions.region('asia-northeast1');

// openaiのインスタンス作成
const configuration = new Configuration({
  apiKey: functions.config().gpt.apikey,
});

// stripeのインスタンス作成
export const stripe = require('stripe')(functions.config().stripe.secret_key, {
  typescript: true,
});

export const openai = new OpenAIApi(configuration);

// constans
export const main_app_name = 'proaca';
