import { POST_TYPE_MAP } from './posts.const';

export function getPostTypeName(lookup) {
  return POST_TYPE_MAP[lookup].name;
}
