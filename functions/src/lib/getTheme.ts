import { openai } from '../helper';
export const getTheme = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const content = `
      # 最近話題のニュースのテーマを一つ教えて
      # returnはstring型の文字列にして
      # 他の文字は不要です。
      # 一度だしたテーマは２度と使用しないで
    `;

      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: content }],
      });
      resolve(completion.data.choices[0].message?.content);
    } catch (error) {
      console.log(
        '🚀 ~ file: getTheme.ts:7 ~ returnnewPromise ~ error:',
        error
      );
      reject(error);
    }
  });
};
