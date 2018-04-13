import Component from '@ember/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';
import layout from '../templates/components/uni-tooltip';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';

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
  expandAbove: false,
  wrapperSelector: window,

  onClick() {},

  onOutsideClick() {
    if (this.get('isAlternative') || this.isComponentDestroyed()) {
      return;
    }

    this._hideTooltip();
  },

  actions: {
    onTapOrClick() {
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
    }
  },

  _showTooltip() {
    this.set('isActive', true);
    $(this.get('wrapperSelector')).bind('scroll.uni-tooltip', () => this._hideTooltip());
  },

  _hideTooltip() {
    this.set('isActive', false);
    $(this.get('wrapperSelector')).unbind('scroll.uni-tooltip');
  },

  _setTopPositionMobile() {
    let alignWithTooltipIconOffset = this.$().offset().top - $(window).scrollTop();

    let topPosition = this.get('expandAbove')
      ? alignWithTooltipIconOffset - this.$('.uni-tooltip__text').outerHeight()
      : alignWithTooltipIconOffset + this.$().outerHeight();

    this.$('.uni-tooltip__text').css('top', `${topPosition}px`);
  },

  isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  }
});
