import { defineBackend } from '@aws-amplify/backend';
// .ts をあえて含めない形式で書き直します
import { auth } from './auth/resource';
import { data } from './data/resource';

defineBackend({
  auth,
  data,
});
