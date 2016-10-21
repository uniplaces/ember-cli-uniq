import Ember from 'ember';
import layout from '../templates/components/uni-anchor';

export default Ember.Component.extend({
  className: ['uni-anchor'],
  layout,

  tagName: 'a',
  attributeBindings: ['href'],
  href: '#'
});
