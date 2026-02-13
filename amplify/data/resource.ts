import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // Bedrockを呼び出すための「チャット機能」を定義
  chat: a.generation({
    aiModel: a.ai.model('Claude 3.5 Sonnet'),
    systemPrompt: 'あなたは親切なアシスタントです。',
  })
  .arguments({
    content: a.string(),
  })
  .returns(a.string())
  // 🔴 重要：認証なし(Public)でアクセスを許可する
  .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam', // ゲストアクセスのためにIAMを使用
  },
});
