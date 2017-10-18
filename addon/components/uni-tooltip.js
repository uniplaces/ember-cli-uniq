import Component from '@ember/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';
import layout from '../templates/components/uni-tooltip';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';

const MARGIN_TOP = 8;

export default Component.extend(ClickOutsideMixin, {
  tagName: 'span',
  classNames: ['uni-tooltip'],
  classNameBindings: ['isActive:uni-tooltip--active', 'isAlternative:uni-tooltip--alternative'],
  layout,

  media: service(),

  isInformation: false,
  isQuestion: false,
  isActive: false,
  isAlternative: false,
  yieldContent: false,

  onClick() {},

  onOutsideClick() {
    if (this.get('isAlternative')) {
      return;
    }

    this._hideTooltip();
  },

  click() {
    this.get('onClick')();

    if (this.get('isAlternative')) {
      return;
    }

    if (this.get('isActive')) {
      this._hideTooltip();

      return;
    }

    this._showTooltip();
    if (this.get('media.isMobile')) {
      run.later(this, () => this._setTopPositionMobile(), 0);
    }
  },

  _showTooltip() {
    this.set('isActive', true);
    $(window).bind('scroll.uni-tooltip', () => this._hideTooltip());
  },

  _hideTooltip() {
    this.set('isActive', false);
    $(window).unbind('scroll.uni-tooltip');
  },

  _setTopPositionMobile() {
    let topPosition = this.$().offset().top - $(window).scrollTop() + this.$().height() + MARGIN_TOP;
    this.$('.uni-tooltip__text').css('top', `${topPosition}px`);
  }
});
