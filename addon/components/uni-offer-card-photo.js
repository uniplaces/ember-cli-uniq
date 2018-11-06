import Component from '@ember/component';
import layout from '../templates/components/uni-offer-card-photo';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { offerPhoto } from 'ember-cli-uniq/helpers/offer-photo';

export default Component.extend({
  layout,
  tagName: 'img',
  classNames: ['carousel__photo'],
  attributeBindings: ['src'],

  photo: null,
  placeholderPhoto: 'https://d16teuje7e44sv.cloudfront.net/property-photos/5319ca16687baef177709162e4cf7b1c74cf53b2c30214ad555882a6836d63d9/small.jpg',
  photoPath: null,

  src: computed('photo', 'preloadNextPhoto', 'index', function() {
    let photo = this.get('photo');

    if (isPresent(photo) && ((this.get('preloadNextPhoto') && this.get('index') === 2) || this.get('index') === 1)) {
      return offerPhoto([], { photoPath: this.get('photoPath'), hash: photo.hash || '' });
    }
  }),

  async didInsertElement() {
    this._super(...arguments);

    if (!this._isComponentDestroyed()) {
      this.$().on('error', this.onSrcNotFound.bind(this));
    }
  },

  onSrcNotFound() {
    if (!this._isComponentDestroyed()) {
      this.set('src', this.get('placeholderPhoto'));
    }
  },

  _isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  }
});
