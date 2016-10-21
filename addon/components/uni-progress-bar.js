import Ember from 'ember';
import layout from '../templates/components/uni-progress-bar';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['uni-progress-bar'],
  tagName: 'section',
  layout,

  percentage: 0,

  inlineStyle: computed('percentage', function() {
    return Ember.String.htmlSafe(`width: ${this.get('percentage')}%`);
  })
});
