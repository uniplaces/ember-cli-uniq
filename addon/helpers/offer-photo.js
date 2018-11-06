import { helper } from '@ember/component/helper';
import PhotoSizeTypes from 'ember-cli-uniq/enums/photo-size-types';

export function offerPhoto(params, { photoPath, hash, size = PhotoSizeTypes.SMALL }) {
  return `${photoPath}/${hash}/${size}.jpg`;
}

export default helper(offerPhoto);
