import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

defineBackend({
  data, // auth を削除しました
});
