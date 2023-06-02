import { openai } from '../helper';
export const getContent = async (theme: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const content = `
      テーマ：${theme}
      # 上記のテーマで1000字でブログ記事を作成して
      # returnは{title: "xxx", body: "yyy"}のオブジェクトの形で。
      # xxxにはブログ記事のタイトルを、yyyはブログ記事の内容を入れてください。
      # 他の文字は不要です。
    `;

      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: content }],
      });
      resolve(completion.data.choices[0].message?.content);
    } catch (error) {
      console.log('🚀 ~ file: getTheme.ts:7 ~ getContent ~ error:', error);
      reject(error);
    }
  });
};
