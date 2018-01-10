import Component from '@ember/component';
import $ from 'jquery';

const DEVILS_NUMBER = 666 / 2; // Give this a proper name  (╯°□°）╯︵ ┻━┻
const ANIMATION_DURATION = 300;

export default Component.extend({

  options: {
    anchorSelector: 'a[href^="#"]',
    componentsSelector: '.components',
    topBannerSelector: '.demo-app__banner',
    containerSelector: '.container',
    topBannerSmallerClass: 'demo-app__banner--smaller',
    containerBiggerClass: 'container--bigger'
  },

  didRender() {
    this._super(...arguments);

    let anchors = this.get('options.anchorSelector');
    $(document).on('click', anchors, function() {
      event.preventDefault();

      let componentsContainer = $('.components');
      componentsContainer.animate({
        scrollTop: componentsContainer.scrollTop() + $($.attr(this, 'href')).position().top
      }, ANIMATION_DURATION);
    });

    $('.components').scroll(this.handleScroll.bind(this));
  },

  handleScroll() {
    let demoAppBanner = $(this.get('options.topBannerSelector'));
    let outerContainer = $(this.get('options.containerSelector'));
    let topBannerSmallerClass = this.get('options.topBannerSmallerClass');
    let containerBiggerClass = this.get('options.containerBiggerClass');

    let action = $(this.get('options.componentsSelector')).scrollTop() > DEVILS_NUMBER ? 'add' : 'remove';
    demoAppBanner[`${action}Class`](topBannerSmallerClass);
    outerContainer[`${action}Class`](containerBiggerClass);
  },

  actions: {
    onAutocompleteSelect({ option } = { option: null }) {
      this.set('model.autocompleteKey', option ? option.key : null);
    },

    onAutocompleteSearch(option) {
      return [option.value];
    }
  }
});
