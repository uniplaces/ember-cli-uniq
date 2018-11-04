import { gt } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { on } from '@ember/object/evented';
import layout from '../templates/components/uni-carrousel';
import { EKMixin, keyUp } from 'ember-keyboard';
import { htmlSafe } from '@ember/string';

export default Component.extend(EKMixin, {
  classNames: ['uni-carrousel'],
  layout,
  page: 0,
  componentWidth: 0,

  showPrev: gt('page', 0),
  showNext: computed('page', function() {
    return this.get('page') < (this.get('itemCount') - 1);
  }),

  deltaX: computed('page', function() {
    return this.get('page') * this.get('componentWidth') * -1;
  }),
  wrapperStyle: computed('deltaX', function() {
    return htmlSafe(`transform: translate3d(${parseFloat(this.get('deltaX'))}px, 0px, 0)`);
  }),

  didRender() {
    this.set('componentWidth', getComputedStyle(document.querySelector('.uni-carrousel__container')).width);
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
