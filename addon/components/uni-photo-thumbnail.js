import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/uni-photo-thumbnail';

const progressOptions = {
  strokeWidth: 6,
  duration: 0,
  trailWidth: 1,
  color: '#00adef',
  trailColor: '#eee'
};

export default Component.extend({
  classNames: ['uni-photo-thumbnail'],
  progressOptions,
  layout,

  progressPercentage: computed('photo.progress', function() {
    return this.get('photo.progress') / 100;
  }),

  imageStyle: computed('photo.url', function() {
    return htmlSafe(this.get('photo.url') ? `background-image: url(${encodeURI(this.get('photo.url'))})` : '');
  }),

  onImageClick() {}
});
