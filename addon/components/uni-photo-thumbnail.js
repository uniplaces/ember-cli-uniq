import Ember from 'ember';
import layout from '../templates/components/uni-photo-thumbnail';

const { Component, computed, String: { htmlSafe } } = Ember;

const progressOptions = {
  strokeWidth: 6,
  duration: 0,
  trailWidth: 1,
  color: '#00adef',
  trailColor: '#eee'
};

export default Component.extend({
  onImageClick() {},
  progressOptions,
  layout,

  progressPercentage: computed('photo.progress', function() {
    return this.get('photo.progress') / 100;
  }),

  imageStyle: computed('photo.url', function() {
    if (!this.get('photo.url')) {
      return htmlSafe('');
    }

    return htmlSafe(`background-image: url(${this.get('photo.url')})`);
  })
});
