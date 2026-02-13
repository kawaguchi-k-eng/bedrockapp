import { defineBackend } from '@aws-amplify/backend';
// あえて .js を付けてパスを確定させます
import { data } from './data/resource.js';

defineBackend({
  data,
});
