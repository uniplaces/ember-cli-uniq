import Ember from 'ember';
import layout from '../templates/components/uni-carrousel';
import { EKMixin, keyUp } from 'ember-keyboard';

const { Component, computed, $, on } = Ember;

export default Component.extend(EKMixin, {
  classNames: ['uni-carrousel'],
  layout,
  page: 0,
  componentWidth: 0,
  showPrev: computed.gt('page', 0),
  showNext: computed('page', function() {
    return this.get('page') < (this.get('itemCount') - 1);
  }),

  deltaX: computed('page', function() {
    return this.get('page') * this.get('componentWidth') * -1;
  }),

  didRender() {
    this.set('componentWidth', $('.uni-carrousel__container').width());
  },

  keyLeft: on(keyUp('ArrowLeft'), function() {
    if (this.get('showPrev')) {
      this.decrementProperty('page');
    }
  }),

  keyRight: on(keyUp('ArrowRight'), function() {
    if (this.get('showNext')) {
      this.incrementProperty('page');
    }
  }),

  actions: {
    navTo(index) {
      this.set('page', index);
    },

    prev() {
      this.decrementProperty('page');
    },

    next() {
      this.incrementProperty('page');
    }
  }
});
