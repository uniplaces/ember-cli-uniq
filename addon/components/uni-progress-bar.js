import Ember from 'ember';
import layout from '../templates/components/uni-progress-bar';

const { computed, Component, String } = Ember;

export default Component.extend({
  classNames: ['uni-progress-bar'],
  tagName: 'section',
  layout,

  percentage: 0,

  inlineStyle: computed('percentage', function() {
    return String.htmlSafe(`width: ${this.get('percentage')}%`);
  })
});
