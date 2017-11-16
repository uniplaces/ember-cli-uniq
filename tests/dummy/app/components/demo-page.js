import Component from '@ember/component';
import $ from 'jquery';

const DEVILS_NUMBER = 666 / 2; // Give this a proper name  (╯°□°）╯︵ ┻━┻

export default Component.extend({

  didRender() {
    this._super(...arguments);

    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      let componentsContainer = $('.components');
      componentsContainer.animate({
        scrollTop: componentsContainer.scrollTop() + $($.attr(this, 'href')).position().top
      }, 500);
    });

    $('.components').scroll(function() {
      if ($('.components').scrollTop() > DEVILS_NUMBER) {
        $('.demo-app__banner').addClass('demo-app__banner--smaller');
        $('.container').addClass('container--bigger');
      } else {
        $('.demo-app__banner').removeClass('demo-app__banner--smaller');
        $('.container').removeClass('container--bigger');
      }
    })
  }
});
