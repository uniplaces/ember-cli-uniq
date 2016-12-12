import Ember from 'ember';
import layout from '../templates/components/uni-carrousel';

const { Component, computed, $ } = Ember;

export default Component.extend({
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
