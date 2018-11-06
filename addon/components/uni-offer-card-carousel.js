import Component from '@ember/component';
import layout from '../templates/components/uni-offer-card-carousel';
import { computed } from '@ember/object';
import { run } from '@ember/runloop';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

const ANIMATION_TIME = 500;

export default Component.extend(RecognizerMixin, {
  photos: [],
  isTransitioningLeft: false,
  isTransitioningRight: false,
  selectedPhotoIndex: 0,
  photoPath: null,
  layout,

  photosToShow: computed('photos', 'selectedPhotoIndex', function() {
    let selectedPhotoIndex = this.get('selectedPhotoIndex');

    return [
      this.get(`photos.${selectedPhotoIndex - 1}`),
      this.get(`photos.${selectedPhotoIndex}`),
      this.get(`photos.${selectedPhotoIndex + 1}`)
    ];
  }),

  showArrows: computed.gt('photos.length', 1),

  actions: {
    showPreviousPhoto() {
      let indexToChangeTo = this.get('selectedPhotoIndex') < 1
        ? this.get('photos.length') - 1
        : this.get('selectedPhotoIndex') - 1;

      this.set('isTransitioningRight', true);

      run.later(() => {
        if (this._isComponentDestroyed()) {
          return;
        }

        this.set('isTransitioningRight', false);
        this.set('selectedPhotoIndex', indexToChangeTo);
      }, ANIMATION_TIME);
    },

    showNextPhoto() {
      let indexToChangeTo = this.get('selectedPhotoIndex') === this.get('photos.length') - 1
        ? 0
        : this.get('selectedPhotoIndex') + 1;

      this.set('isTransitioningLeft', true);

      run.later(() => {
        if (this._isComponentDestroyed()) {
          return;
        }

        this.set('isTransitioningLeft', false);
        this.set('selectedPhotoIndex', indexToChangeTo);
      }, ANIMATION_TIME);
    }
  },

  _isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  }
});
