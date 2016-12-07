import Ember from 'ember';
import layout from '../templates/components/uni-carrousel';

const { Component, $ } = Ember;

export default Component.extend({
  classNames: ['uni-carrousel'],
  layout,
  page: 0,
  componentWidth: 0,
  items: [],
  markers: '.uni-carrousel__container__markers__item',

  _update() {
    this.set('deltaX', this.get('page') * this.get('componentWidth') * -1);

    if (this.get('page') === 0) {
      $('.uni-carrousel__button--prev').hide();
    } else {
      $('.uni-carrousel__button--prev').show();
    }

    if (this.get('page') === this.get('itemCount') - 1) {
      $('.uni-carrousel__button--next').hide();
    } else {
      $('.uni-carrousel__button--next').show();
    }
  },

  didRender() {
    this.set('componentWidth', $('.uni-carrousel__container').width());
    this.set('items', $('.uni-carrousel__container__item'));
    this._update();
  },

  actions: {
    navTo(index) {
      this.set('page', index);
      this._update();
    },
    prev() {
      if (this.get('page') > 0) {
        this.decrementProperty('page');
        this._update();
      }
    },
    next() {
      if (this.get('page') < this.get('items').length - 1) {
        this.incrementProperty('page');
        this._update();
      }
    }
  }
});
