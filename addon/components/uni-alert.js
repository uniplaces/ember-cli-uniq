import { equal } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';
import layout from '../templates/components/uni-alert';
import UniAlertTypes from 'ember-cli-uniq/enums/uni-alert-type';

export default Component.extend({
  layout,
  classNames: ['uni-alert'],
  classNameBindings: [
    'isFixed:uni-alert--fixed',
    'stickyMode:uni-alert--sticky',
    'isSuccess:uni-alert--success',
    'isError:uni-alert--error',
    'isWarning:uni-alert--warning',
    'isClosed:uni-alert--closed'
  ],

  type: null,
  stickyMode: false,
  isFixed: false,
  hasClose: false,
  isClosed: false,
  onClose: null,

  isSuccess: equal('type', UniAlertTypes.SUCCESS),
  isError: equal('type', UniAlertTypes.ERROR),
  isWarning: equal('type', UniAlertTypes.WARNING),
  iconName: computed('isSuccess', 'isWarning', 'isError', function() {
    if (this.get('isSuccess')) {
      return 'alert--success';
    }

    if (this.get('isWarning')) {
      return 'alert--warning';
    }

    if (this.get('isError')) {
      return 'alert--error';
    }

    return 'alert';
  }),

  didInsertElement() {
    this._super(...arguments);

    if (this.get('stickyMode')) {
      this.set('componentTop', this.$().offset().top);
      this._verifyStickyScroll();

      $(window).bind('scroll.uni-alert', () => this._verifyStickyScroll());
    }
  },

  actions: {
    close() {
      this.set('isClosed', true);

      if (this.get('onClose')) {
        this.get('onClose')();
      }
    }
  },

  _verifyStickyScroll() {
    let scrollPos = $(window).scrollTop();
    let windowHeight = $(window).height();
    let isBeforeCanvas = scrollPos > this.get('componentTop');
    let isAfterCanvas = this.get('componentTop') > scrollPos + windowHeight;

    this.set('isFixed', isBeforeCanvas || isAfterCanvas);
  },

  willDestroyElement() {
    this._super(...arguments);

    $(window).unbind('scroll.uni-alert');
  }
});
