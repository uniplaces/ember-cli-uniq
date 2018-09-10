import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export function interpolate([str], hash) {
  return str.replace(/\$\{\s*(.*?)\s*\}/g, (i, match) => get(hash, match));
}

export default helper(interpolate);
