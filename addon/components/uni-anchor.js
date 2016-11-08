import Ember from 'ember';
import layout from '../templates/components/uni-anchor';

export default Ember.Component.extend({
  classNames: ['uni-anchor'],
  layout,

  tagName: 'a',
  attributeBindings: ['href', 'target'],
  href: '#'
});
