import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  chat: a.generation({
    aiModel: a.ai.model('Claude 3.5 Sonnet'),
    systemPrompt: 'あなたは親切なアシスタントです。',
  })
  .arguments({
    content: a.string(),
  })
  .returns(a.string())
  .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
