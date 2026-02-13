import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // Bedrock Agentを呼び出すための定義
  askBedrock: a.generation({
    aiModel: a.ai.model('Claude 3.5 Sonnet'),
    systemPrompt: 'あなたはGitHub管理アシスタントです。',
  })
  .arguments({ prompt: a.string() })
  .returns(a.string())
  .authorization(allow => [allow.authenticated()]), // ログイン済みのユーザーのみ許可
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool', // 認証にAmazon Cognitoを使用
  },
});
