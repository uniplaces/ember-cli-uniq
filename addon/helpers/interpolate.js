import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export function interpolate([str], hash) {
  const regularExpression = /\$\{\s*(.*?)\s*\}/g;

  return str.replace(regularExpression, (i, match) => get(hash, match));
}

export default helper(interpolate);
